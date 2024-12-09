import { Repository, MoreThan } from 'typeorm';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { User, UserRole } from '../entities/User';
import { Company } from '../entities/Company';
import { Session } from '../entities/Session';
import { AppDataSource } from '../config/database';
import { sendEmail } from '../utils/email';

// TODO: Move this to environment variables in production
const JWT_SECRET = 'your-256-bit-secret-key-for-development-only-12345';

export class AuthService {
  private userRepository: Repository<User>;
  private companyRepository: Repository<Company>;
  private sessionRepository: Repository<Session>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
    this.companyRepository = AppDataSource.getRepository(Company);
    this.sessionRepository = AppDataSource.getRepository(Session);
  }

  async signup(userData: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    companyName?: string;
    role?: UserRole;
  }) {
    const existingUser = await this.userRepository.findOne({
      where: { email: userData.email }
    });

    if (existingUser) {
      throw new Error('User already exists');
    }

    let company: Company | undefined;
    if (userData.companyName) {
      const foundCompany = await this.companyRepository.findOne({
        where: { name: userData.companyName }
      });

      if (foundCompany) {
        company = foundCompany;
      } else {
        company = this.companyRepository.create({
          name: userData.companyName
        });
        await this.companyRepository.save(company);
      }
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const verificationToken = jwt.sign(
      { email: userData.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    const user = this.userRepository.create({
      ...userData,
      password: hashedPassword,
      company: company,
      role: userData.role || UserRole.USER,
      verificationToken,
      verificationExpires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
      isActive: false
    });

    await this.userRepository.save(user);

    // Send verification email
    await sendEmail({
      to: user.email,
      subject: 'Welcome to Creator Labs - Verify Your Email',
      text: `Please verify your email by clicking this link: http://localhost:5176/verify-email?token=${verificationToken}`,
      html: `<p>Please verify your email by clicking <a href="http://localhost:5176/verify-email?token=${verificationToken}">this link</a></p>`
    });

    return {
      message: 'User registered successfully. Please check your email to verify your account.',
      userId: user.id
    };
  }

  async login(email: string, password: string, deviceInfo?: string, ipAddress?: string) {
    const user = await this.userRepository.findOne({
      where: { email },
      select: ['id', 'email', 'password', 'role', 'isActive'],
      relations: ['company', 'team']
    });

    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    // Create session
    const session = this.sessionRepository.create({
      user,
      deviceInfo: deviceInfo || 'Unknown device',
      ipAddress: ipAddress || 'Unknown IP',
      token: jwt.sign(
        {
          userId: user.id,
          email: user.email,
          role: user.role,
          companyId: user.company?.id,
          teamId: user.team?.id
        },
        JWT_SECRET,
        { expiresIn: '7d' }
      ),
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
    });

    await this.sessionRepository.save(session);

    return {
      token: session.token,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        company: user.company,
        team: user.team
      }
    };
  }

  async forgotPassword(email: string) {
    const user = await this.userRepository.findOne({
      where: { email }
    });

    if (!user) {
      throw new Error('User not found');
    }

    const resetToken = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
    const resetExpires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    await this.userRepository.update(user.id, {
      passwordResetToken: resetToken,
      passwordResetExpires: resetExpires
    });

    // Send reset email
    await sendEmail({
      to: user.email,
      subject: 'Password Reset Request',
      text: `Reset your password by clicking this link: http://localhost:5176/reset-password?token=${resetToken}`,
      html: `<p>Reset your password by clicking <a href="http://localhost:5176/reset-password?token=${resetToken}">this link</a></p>`
    });

    return { message: 'Password reset email sent' };
  }

  async resetPassword(token: string, newPassword: string) {
    const user = await this.userRepository.findOne({
      where: {
        passwordResetToken: token,
        passwordResetExpires: MoreThan(new Date())
      }
    });

    if (!user) {
      throw new Error('Invalid or expired reset token');
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await this.userRepository.update(user.id, {
      password: hashedPassword,
      passwordResetToken: '',
      passwordResetExpires: undefined
    });

    // Invalidate all existing sessions
    await this.sessionRepository.update(
      { user: { id: user.id }, isActive: true },
      { isActive: false }
    );

    return { message: 'Password successfully reset' };
  }

  async verifyEmail(token: string) {
    try {
      const decoded = jwt.verify(token, JWT_SECRET) as { email: string };
      const user = await this.userRepository.findOne({
        where: { email: decoded.email }
      });

      if (!user) {
        throw new Error('User not found');
      }

      if (user.isActive) {
        throw new Error('Email already verified');
      }

      await this.userRepository.update(user.id, { 
        isActive: true,
        verificationToken: '',
        verificationExpires: undefined
      });

      return { message: 'Email verified successfully' };
    } catch (error) {
      throw new Error('Invalid or expired verification token');
    }
  }

  async getAllUsers() {
    const users = await this.userRepository.find({
      select: ['id', 'email', 'firstName', 'lastName', 'role', 'isActive', 'lastLoginAt'],
      relations: ['company', 'team']
    });

    return users.map(user => ({
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      isActive: user.isActive,
      lastLoginAt: user.lastLoginAt,
      company: user.company ? {
        id: user.company.id,
        name: user.company.name
      } : null,
      team: user.team ? {
        id: user.team.id,
        name: user.team.name
      } : null
    }));
  }

  async logout(sessionId: string) {
    await this.sessionRepository.update(sessionId, {
      isActive: false
    });

    return { message: 'Successfully logged out' };
  }

  async getSessionHistory(userId: string) {
    return this.sessionRepository.find({
      where: { user: { id: userId } },
      order: { createdAt: 'DESC' }
    });
  }

  async validateSession(token: string) {
    const session = await this.sessionRepository.findOne({
      where: { token, isActive: true },
      relations: ['user']
    });

    if (!session || session.expiresAt < new Date()) {
      throw new Error('Invalid or expired session');
    }

    return session;
  }
}

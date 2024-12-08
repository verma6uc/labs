import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { User, UserRole } from '../entities/User';
import { Company } from '../entities/Company';
import { Session } from '../entities/Session';
import { AppDataSource } from '../config/database';
import { sendEmail } from '../utils/email';

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
    // Check if user already exists
    const existingUser = await this.userRepository.findOne({
      where: { email: userData.email }
    });

    if (existingUser) {
      throw new Error('User already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // Create company if companyName is provided (for creators)
    let company: Company | null = null;
    if (userData.companyName) {
      company = this.companyRepository.create({
        name: userData.companyName
      });
      await this.companyRepository.save(company);
    }

    // Create user
    const user = this.userRepository.create({
      email: userData.email,
      password: hashedPassword,
      firstName: userData.firstName,
      lastName: userData.lastName,
      role: userData.role || UserRole.CREATOR,
      company: company
    });

    await this.userRepository.save(user);

    // Send verification email
    const verificationToken = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET!,
      { expiresIn: '24h' }
    );

    await sendEmail({
      to: user.email,
      subject: 'Welcome to Creator Labs - Verify Your Email',
      html: `
        <h1>Welcome to Creator Labs!</h1>
        <p>Please verify your email by clicking the link below:</p>
        <a href="${process.env.FRONTEND_URL}/verify-email?token=${verificationToken}">
          Verify Email
        </a>
      `
    });

    return {
      message: 'User created successfully. Please check your email for verification.',
      userId: user.id
    };
  }

  async login(email: string, password: string, deviceInfo?: string, ipAddress?: string) {
    const user = await this.userRepository.findOne({
      where: { email, isActive: true },
      select: ['id', 'email', 'password', 'role']
    });

    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid credentials');
    }

    // Create session
    const session = this.sessionRepository.create({
      user,
      deviceInfo,
      ipAddress,
      token: jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '7d' }),
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
    });

    await this.sessionRepository.save(session);

    // Update last login
    await this.userRepository.update(user.id, { lastLoginAt: new Date() });

    return {
      token: session.token,
      user: {
        id: user.id,
        email: user.email,
        role: user.role
      }
    };
  }

  async forgotPassword(email: string) {
    const user = await this.userRepository.findOne({ where: { email, isActive: true } });
    if (!user) {
      throw new Error('User not found');
    }

    const resetToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
    const resetExpires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    await this.userRepository.update(user.id, {
      passwordResetToken: resetToken,
      passwordResetExpires: resetExpires
    });

    const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;
    
    await sendEmail({
      to: email,
      subject: 'Password Reset Request',
      text: `Please click on the following link to reset your password: ${resetUrl}`
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
      passwordResetToken: null,
      passwordResetExpires: null
    });

    // Invalidate all existing sessions
    await this.sessionRepository.update(
      { user: { id: user.id }, isActive: true },
      { isActive: false }
    );

    return { message: 'Password successfully reset' };
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

  async verifyEmail(token: string) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
      const user = await this.userRepository.findOne({
        where: { id: decoded.userId }
      });

      if (!user) {
        throw new Error('User not found');
      }

      if (user.isEmailVerified) {
        throw new Error('Email already verified');
      }

      await this.userRepository.update(user.id, { isEmailVerified: true });

      return { message: 'Email verified successfully' };
    } catch (error) {
      throw new Error('Invalid or expired verification token');
    }
  }
}

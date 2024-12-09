import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn
} from 'typeorm';
import { Company } from './Company';
import { Team } from './Team';
import { Session } from './Session';

export enum UserRole {
  USER = 'user',
  CREATOR = 'creator',
  SUPERADMIN = 'superadmin'
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ select: false }) // Password won't be selected by default
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.CREATOR
  })
  role: UserRole;

  @Column({ default: false })
  isActive: boolean;

  @Column({ nullable: true })
  verificationToken: string;

  @Column({ type: 'timestamp', nullable: true })
  verificationExpires: Date;

  @Column({ nullable: true })
  passwordResetToken: string;

  @Column({ type: 'timestamp', nullable: true })
  passwordResetExpires: Date;

  @Column({ type: 'timestamp', nullable: true })
  lastLoginAt: Date;

  @ManyToOne(() => Company, company => company.users, { nullable: true })
  @JoinColumn({ name: 'company_id' })
  company: Company;

  @ManyToOne(() => Team, team => team.members, { nullable: true })
  @JoinColumn({ name: 'team_id' })
  team: Team;

  @OneToMany(() => Session, session => session.user)
  sessions: Session[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

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

  @ManyToOne(() => Company, company => company.users)
  @JoinColumn({ name: 'company_id' })
  company: Company;

  @ManyToOne(() => Team, team => team.members)
  @JoinColumn({ name: 'team_id' })
  team: Team;

  @OneToMany(() => Session, session => session.user)
  sessions: Session[];

  @Column({ nullable: true })
  passwordResetToken: string;

  @Column({ nullable: true })
  passwordResetExpires: Date;

  @Column({ default: false })
  isEmailVerified: boolean;

  @Column({ nullable: true })
  lastLoginAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ default: true })
  isActive: boolean;
}

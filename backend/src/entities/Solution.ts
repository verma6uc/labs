import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';
import { Feature } from './Feature';
import { Agent } from './Agent';

@Entity('solutions')
export class Solution {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @OneToMany(() => Feature, feature => feature.solution, { cascade: true })
  features: Feature[];

  @OneToMany(() => Agent, agent => agent.solution, { cascade: true })
  agents: Agent[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

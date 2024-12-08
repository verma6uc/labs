import { DataSource } from 'typeorm';
import { User } from '../entities/User';
import { Company } from '../entities/Company';
import { Team } from '../entities/Team';
import { Session } from '../entities/Session';
import { Solution } from '../entities/Solution';
import { Feature } from '../entities/Feature';
import { Agent } from '../entities/Agent';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: '35.200.212.230',
  port: 5432,
  username: 'postgres',
  password: '0ZTQYTlmFIBH9BKr7bKC',
  database: 'uv',
  synchronize: true, // Set to false in production
  logging: true,
  entities: [User, Company, Team, Session, Solution, Feature, Agent],
  subscribers: [],
  migrations: [],
});

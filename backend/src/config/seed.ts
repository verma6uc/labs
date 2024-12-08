import { AppDataSource } from './database';
import { User, UserRole } from '../entities/User';
import { Company } from '../entities/Company';
import { Team } from '../entities/Team';
import { Solution } from '../entities/Solution';
import { Feature } from '../entities/Feature';
import { Agent } from '../entities/Agent';
import * as bcrypt from 'bcrypt';

export async function seed() {
  try {
    // Initialize database connection
    await AppDataSource.initialize();
    console.log('Database connection initialized');

    // Create default company
    const company = new Company();
    company.name = 'Creator Labs';
    company.description = 'Pioneering Service as Software Solutions';
    await AppDataSource.manager.save(company);
    console.log('Default company created');

    // Create superadmin user
    const hashedPassword = await bcrypt.hash('admin123', 10);
    const superAdmin = new User();
    superAdmin.email = 'admin@creatorlabs.ai';
    superAdmin.firstName = 'Admin';
    superAdmin.lastName = 'User';
    superAdmin.password = hashedPassword;
    superAdmin.role = UserRole.SUPERADMIN;
    superAdmin.company = company;
    await AppDataSource.manager.save(superAdmin);
    console.log('Superadmin user created');

    // Create default team
    const team = new Team();
    team.name = 'Core Team';
    team.description = 'Core development and operations team';
    team.company = company;
    await AppDataSource.manager.save(team);
    console.log('Default team created');

    // Create solutions data
    const solutionsData = [
      {
        title: 'Pharmaceutical Quality Service',
        description: 'Comprehensive quality control and compliance management for pharmaceutical companies',
        features: [
          { title: '99.9% accuracy in quality assessment' },
          { title: '45% reduction in compliance costs' },
          { title: 'Real-time monitoring and alerts' }
        ],
        agents: [
          {
            name: 'Seldon',
            role: 'Quality Analyzer',
            contribution: 'Performs advanced quality analysis with 99.9% accuracy'
          },
          {
            name: 'Baley',
            role: 'Compliance Monitor',
            contribution: 'Ensures regulatory compliance and documentation'
          }
        ]
      },
      {
        title: 'Educational Success Service',
        description: 'Personalized learning experiences that adapt to each student',
        features: [
          { title: '40% improvement in student engagement' },
          { title: '35% better learning outcomes' },
          { title: 'Personalized learning paths' }
        ],
        agents: [
          {
            name: 'Daneel',
            role: 'Learning Advisor',
            contribution: 'Creates personalized learning strategies'
          },
          {
            name: 'Giskard',
            role: 'Progress Monitor',
            contribution: 'Tracks and optimizes learning outcomes'
          }
        ]
      },
      {
        title: 'Retail Excellence Service',
        description: 'End-to-end retail optimization and customer experience enhancement',
        features: [
          { title: '30% increase in customer satisfaction' },
          { title: '25% reduction in operational costs' },
          { title: 'Seamless omnichannel experience' }
        ],
        agents: [
          {
            name: 'Calvin',
            role: 'Customer Experience',
            contribution: 'Orchestrates personalized shopping experiences'
          },
          {
            name: 'Dors',
            role: 'Operations Optimizer',
            contribution: 'Streamlines retail operations and inventory'
          }
        ]
      }
    ];

    // Save solutions with their features and agents
    for (const solutionData of solutionsData) {
      const solution = new Solution();
      solution.title = solutionData.title;
      solution.description = solutionData.description;

      // Create features
      solution.features = solutionData.features.map(featureData => {
        const feature = new Feature();
        feature.title = featureData.title;
        feature.solution = solution;
        return feature;
      });

      // Create agents
      solution.agents = solutionData.agents.map(agentData => {
        const agent = new Agent();
        agent.name = agentData.name;
        agent.role = agentData.role;
        agent.contribution = agentData.contribution;
        agent.solution = solution;
        return agent;
      });

      await AppDataSource.manager.save(solution);
    }
    console.log('Solutions data created');

    console.log('Seed completed successfully');
  } catch (error) {
    console.error('Error during seeding:', error);
    throw error;
  } finally {
    await AppDataSource.destroy();
    console.log('Database connection closed');
  }
}

// Run seeder
if (require.main === module) {
  seed()
    .then(() => {
      console.log('Seeding completed');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Seeding failed:', error);
      process.exit(1);
    });
}

import { Box, Container, Typography, Card, Grid, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import ScienceIcon from '@mui/icons-material/Science';
import SchoolIcon from '@mui/icons-material/School';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import { fadeInRight } from '../components/animations';
import { SeldonIcon, BaleyIcon, DorsIcon, DaneelIcon, GiskardIcon, CalvinIcon } from '../components/AgentIcons';
import ParticleBackground from '../components/ParticleBackground';

// Industry-specific colors
const industryColors = {
  pharma: {
    main: '#10B981', // Emerald
    light: 'rgba(16, 185, 129, 0.1)',
    border: 'rgba(16, 185, 129, 0.2)'
  },
  edtech: {
    main: '#8B5CF6', // Purple
    light: 'rgba(139, 92, 246, 0.1)',
    border: 'rgba(139, 92, 246, 0.2)'
  },
  b2c: {
    main: '#F59E0B', // Amber
    light: 'rgba(245, 158, 11, 0.1)',
    border: 'rgba(245, 158, 11, 0.2)'
  }
};

interface SolutionCardProps {
  industry: 'pharma' | 'edtech' | 'b2c';
}

interface Solution {
  icon: JSX.Element;
  title: string;
  description: string;
  agents: {
    name: string;
    icon: JSX.Element;
    role: string;
    contribution: string;
  }[];
  features: { title: string }[];
  industry: 'pharma' | 'edtech' | 'b2c';
}

const StyledCard = styled(Card)<SolutionCardProps>(({ theme, industry }) => ({
  height: '100%',
  padding: theme.spacing(4),
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  borderRadius: '12px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 64,
  height: 64,
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  backgroundColor: 'rgba(59, 130, 246, 0.1)',
  color: '#3B82F6',
}));

const FeatureList = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
  margin: `${theme.spacing(2)} 0 0 0`,
  '& li': {
    position: 'relative',
    paddingLeft: theme.spacing(3),
    marginBottom: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.7)',
    '&::before': {
      content: '"•"',
      position: 'absolute',
      left: theme.spacing(1),
      color: '#3B82F6',
    },
    '&:hover': {
      color: '#fff',
    },
  },
}));

const SolutionTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'industry'
})<{ industry: 'pharma' | 'edtech' | 'b2c' }>(({ theme, industry }) => ({
  fontWeight: 700,
  fontSize: '1.8rem',
  color: industryColors[industry].main,
  marginBottom: theme.spacing(2),
}));

const Solutions: React.FC = () => {
  const solutions: Solution[] = [
    {
      icon: <ScienceIcon />,
      title: 'Pharmaceutical Quality Service',
      description: 'Transforming traditional quality control software into a comprehensive service that ensures consistent product excellence while reducing operational complexity.',
      industry: 'pharma' as const,
      agents: [
        {
          name: 'Daneel',
          icon: <DaneelIcon />,
          role: 'Service Coordinator',
          contribution: 'Coordinates quality control services to ensure every batch meets standards with minimal human intervention.'
        },
        {
          name: 'Calvin',
          icon: <CalvinIcon />,
          role: 'Quality Service',
          contribution: 'Delivers continuous quality assurance through real-time monitoring and historical data analysis.'
        },
        {
          name: 'Giskard',
          icon: <GiskardIcon />,
          role: 'Integration Service',
          contribution: 'Ensures seamless service delivery by connecting manufacturing systems into a unified workflow.'
        }
      ],
      features: [
        { title: 'Complete Quality Assurance: 99.9% Defect-Free Manufacturing' },
        { title: 'Automated Compliance: 100% Documentation Coverage' },
        { title: 'Optimized Production: 40% Faster Manufacturing Cycles' },
        { title: 'Resource Efficiency: 35% Better Resource Utilization' }
      ]
    },
    {
      icon: <SchoolIcon />,
      title: 'Educational Success Service',
      description: 'Converting traditional learning management into a comprehensive educational service that delivers personalized learning outcomes.',
      industry: 'edtech' as const,
      agents: [
        {
          name: 'Seldon',
          icon: <SeldonIcon />,
          role: 'Learning Service',
          contribution: 'Delivers personalized learning experiences that adapt to each student unique journey.'
        },
        {
          name: 'Baley',
          icon: <BaleyIcon />,
          role: 'Analytics Service',
          contribution: 'Provides continuous insight delivery to optimize educational outcomes.'
        },
        {
          name: 'Dors',
          icon: <DorsIcon />,
          role: 'Experience Service',
          contribution: 'Creates intuitive educational interfaces that evolve with user needs.'
        }
      ],
      features: [
        { title: 'Guaranteed Learning: 45% Higher Student Success Rates' },
        { title: 'Teaching Enhancement: 60% More Effective Teaching Time' },
        { title: 'Student Growth: 75% Increased Learning Engagement' },
        { title: 'Administrative Efficiency: 80% Less Manual Work' }
      ]
    },
    {
      icon: <ShoppingCartIcon />,
      title: 'Retail Excellence Service',
      description: 'Transforming traditional retail software into a comprehensive service that delivers exceptional shopping experiences.',
      industry: 'b2c' as const,
      agents: [
        {
          name: 'Giskard',
          icon: <GiskardIcon />,
          role: 'Operations Service',
          contribution: 'Delivers seamless retail operations by coordinating inventory, pricing, and fulfillment.'
        },
        {
          name: 'Seldon',
          icon: <SeldonIcon />,
          role: 'Strategy Service',
          contribution: 'Provides continuous market intelligence and optimization recommendations.'
        },
        {
          name: 'Dors',
          icon: <DorsIcon />,
          role: 'Experience Service',
          contribution: 'Delivers personalized shopping experiences that adapt to customer preferences.'
        }
      ],
      features: [
        { title: 'Inventory Excellence: 30% Cost Reduction' },
        { title: 'Customer Success: 65% Higher Satisfaction Rates' },
        { title: 'Operational Efficiency: 50% Faster Order Processing' },
        { title: 'Business Growth: 40% Revenue Increase' }
      ]
    }
  ];

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <ParticleBackground variant="sparse" />
      <Container maxWidth={false} sx={{ py: 12, px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h2" sx={{ mb: 3, fontWeight: 700 }}>
            Service as Software: Transforming Industries
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, color: 'rgba(255, 255, 255, 0.7)' }}>
            Redefining software delivery through intelligent service orchestration that focuses on outcomes, not just tools
          </Typography>
          <Grid container spacing={3} justifyContent="center" sx={{ mb: 6 }}>
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 3, textAlign: 'left' }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#0EA5E9' }}>
                  Service-First Approach
                </Typography>
                <Typography>
                  Moving beyond traditional software to deliver complete, outcome-driven services that evolve with your needs
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 3, textAlign: 'left' }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#0EA5E9' }}>
                  Intelligent Orchestration
                </Typography>
                <Typography>
                  Seamlessly coordinated services working in harmony to deliver consistent, reliable outcomes
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 3, textAlign: 'left' }}>
                <Typography variant="h6" sx={{ mb: 2, color: '#0EA5E9' }}>
                  Continuous Evolution
                </Typography>
                <Typography>
                  Services that learn and adapt while maintaining transparency, building trust through clear outcome delivery
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" sx={{ mb: 4, textAlign: 'center' }}>
            Service as Software in Action
          </Typography>
          <Typography sx={{ mb: 6, textAlign: 'center', color: 'rgba(255, 255, 255, 0.7)' }}>
            Experience how our service-first approach transforms traditional software solutions into outcome-driven services
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {solutions.map((solution, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <StyledCard industry={solution.industry}>
                <Box sx={{ position: 'relative' }}>
                  <IconWrapper>
                    {solution.icon}
                  </IconWrapper>
                  <SolutionTitle industry={solution.industry} variant="h3">
                    {solution.title}
                  </SolutionTitle>
                  <Typography sx={{ mb: 3, color: 'rgba(255, 255, 255, 0.7)' }}>
                    {solution.description}
                  </Typography>

                  <Box sx={{ mb: 4, p: 3, backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px' }}>
                    <Typography variant="h6" sx={{ mb: 2, color: '#0EA5E9' }}>
                      Service Outcomes
                    </Typography>
                    <FeatureList>
                      {solution.features.map((feature, index) => (
                        <li key={index}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography>{feature.title}</Typography>
                          </Box>
                        </li>
                      ))}
                    </FeatureList>
                  </Box>

                  <Typography variant="h6" sx={{ mb: 2, color: '#0EA5E9' }}>
                    Service Components
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
                    {solution.agents.map((agent, agentIndex) => (
                      <Tooltip
                        key={agentIndex}
                        title={
                          <Box>
                            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                              {agent.name} - {agent.role}
                            </Typography>
                            <Typography variant="body2">
                              {agent.contribution}
                            </Typography>
                          </Box>
                        }
                        arrow
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            padding: '4px 12px',
                            borderRadius: '16px',
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            cursor: 'pointer',
                            '&:hover': {
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            },
                          }}
                        >
                          {agent.icon}
                          <Typography variant="body2">
                            {agent.name}
                          </Typography>
                        </Box>
                      </Tooltip>
                    ))}
                  </Box>
                </Box>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Solutions;

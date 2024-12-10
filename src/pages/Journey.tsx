import React from 'react';
import { Box, Container, Typography, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  SeedIcon,
  SproutIcon,
  FoundationIcon,
  StructureIcon,
  DevelopmentIcon,
  LaunchIcon,
  GrowthIcon,
  ScaleIcon,
} from '../components/JourneyIcons';
import NebulaBackground from '../components/NebulaBackground';
import ConnectingLines from '../components/ConnectingLines';
import AgentContributions from '../components/AgentContributions';

const JourneyPath = styled(Box)(({ theme }) => ({
  position: 'relative',
  maxWidth: '1200px',
  margin: '0 auto',
  paddingTop: theme.spacing(4),
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '50%',
    top: 0,
    bottom: 0,
    width: 2,
    background: 'linear-gradient(180deg, rgba(14, 165, 233, 0.3) 0%, rgba(14, 165, 233, 0.1) 100%)',
    transform: 'translateX(-50%)',
    [theme.breakpoints.down('md')]: {
      left: 40,
    },
  },
}));

const MilestoneCard = styled(Card)<{ index: number }>(({ theme, index }) => ({
  position: 'relative',
  padding: theme.spacing(1.5),
  marginBottom: theme.spacing(2),
  background: 'rgba(14, 165, 233, 0.03)',
  backdropFilter: 'blur(8px)',
  borderRadius: theme.spacing(1.5),
  border: '1px solid rgba(14, 165, 233, 0.08)',
  transition: 'all 0.3s ease-in-out',
  [theme.breakpoints.up('md')]: {
    width: '44%',
    marginLeft: index % 2 === 0 ? '0' : '56%',
  },
  [theme.breakpoints.down('md')]: {
    width: 'calc(100% - 60px)',
    marginLeft: '60px',
  },
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 4px 20px rgba(14, 165, 233, 0.08)',
    background: 'rgba(14, 165, 233, 0.05)',
  },
}));

const MilestoneIcon = styled(Box)(({ theme }) => ({
  position: 'absolute',
  [theme.breakpoints.up('md')]: {
    top: '50%',
    left: ({ index }: { index: number }) => index % 2 === 0 ? 'calc(100% + 32px)' : 'calc(-80px)',
    transform: 'translateY(-50%)',
  },
  [theme.breakpoints.down('md')]: {
    left: -60,
    top: theme.spacing(4),
  },
  width: 64,
  height: 64,
  background: 'rgba(14, 165, 233, 0.1)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid rgba(14, 165, 233, 0.2)',
  backdropFilter: 'blur(8px)',
  zIndex: 2,
  '& svg': {
    width: 36,
    height: 36,
  },
}));

const MaturityBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1),
  right: theme.spacing(1),
  padding: '4px 8px',
  borderRadius: theme.spacing(0.75),
  fontSize: '0.75rem',
  fontWeight: 500,
  color: '#0EA5E9',
  background: 'rgba(14, 165, 233, 0.1)',
  backdropFilter: 'blur(4px)',
}));

const StepTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 600,
  marginBottom: theme.spacing(0.5),
  color: '#fff',
}));

const StepDescription = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  color: 'rgba(255, 255, 255, 0.7)',
  marginBottom: theme.spacing(1.5),
  lineHeight: 1.5,
}));

const Quote = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(1.5),
  paddingLeft: theme.spacing(4),
  background: 'rgba(14, 165, 233, 0.02)',
  borderRadius: theme.spacing(1),
  marginBottom: theme.spacing(1.5),
  '&::before': {
    content: '"\\201C"',
    position: 'absolute',
    top: theme.spacing(0.5),
    left: theme.spacing(1),
    fontSize: '2.5rem',
    lineHeight: 1,
    fontFamily: 'Georgia, serif',
    color: 'rgba(14, 165, 233, 0.15)',
  }
}));

const OutcomesBox = styled(Box)(({ theme }) => ({
  background: 'rgba(14, 165, 233, 0.02)',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1.5),
}));

const Journey: React.FC = () => {
  const steps = [
    {
      icon: <SeedIcon />,
      title: 'Initial Understanding',
      subtitle: 'How: Seldon (strategist) and Baley (researcher) decipher your core idea',
      description: 'A clarified starting vision—like a compass—for all subsequent steps. Without a clear direction, building a meaningful product is guesswork.',
      maturity: 'Seed Stage',
      quote: {
        text: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
      },
      outcomes: [
        'Defined product spark & direction',
        'Initial market & user insights',
        'Strategic framing to guide decisions'
      ],
      activeAgents: ['Seldon', 'Baley']
    },
    {
      icon: <SproutIcon />,
      title: 'Memory Enhancement',
      subtitle: 'How: All agents contribute their unique perspectives',
      description: 'A multi-faceted understanding of features, user flows, technical requirements, and improvement paths. Holistic insight prevents blind spots, forces new mental pathways.',
      maturity: 'Sprout Stage',
      quote: {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
      },
      outcomes: [
        'Detailed feature evaluation',
        'User behavior & journey mapping',
        'Early integration & quality considerations'
      ],
      activeAgents: ['Seldon', 'Baley', 'Dors', 'Daneel', 'Giskard', 'Calvin']
    },
    {
      icon: <FoundationIcon />,
      title: 'Blueprint Creation',
      subtitle: 'How: Seldon, Dors, and Daneel craft the structural foundation',
      description: 'A clear roadmap—like architectural plans for a house—guiding the build phase with confidence. Without a blueprint, you risk veering later on guesswork.',
      maturity: 'Foundation Stage',
      quote: {
        text: "If you fail to plan, you are planning to fail.",
        author: "Benjamin Franklin"
      },
      outcomes: [
        'Navigation & interaction design',
        'Technical feature specifications',
        'Aligned data and logic models'
      ],
      activeAgents: ['Seldon', 'Dors', 'Daneel']
    },
    {
      icon: <StructureIcon />,
      title: 'Visual PRD',
      subtitle: 'How: Dors translates the blueprint into tangible elements',
      description: 'A visual Product Requirement Document that developers and stakeholders can see, touch, and understand. Visual clarity reduces misunderstandings.',
      maturity: 'Structure Stage',
      quote: {
        text: "Design is not just what it looks like and feels like. Design is how it works.",
        author: "Steve Jobs"
      },
      outcomes: [
        'Wireframes & state diagrams',
        'Clear user flow mapping',
        'Component level visual clarity'
      ],
      activeAgents: ['Dors']
    },
    {
      icon: <DevelopmentIcon />,
      title: 'Development',
      subtitle: 'How: Daneel and Giskard handle code and integration',
      description: 'A functional skeleton—your product now has form and basic functionality, ready for refinement. Turning plans into working code validates assumptions.',
      maturity: 'Development Stage',
      quote: {
        text: "Code is like humor. When you have to explain it, it's bad.",
        author: "Cory House"
      },
      outcomes: [
        'Core features coded',
        'Initial frontend/backend integration',
        'Performance optimization starts'
      ],
      activeAgents: ['Daneel', 'Giskard']
    },
    {
      icon: <LaunchIcon />,
      title: 'Launch',
      subtitle: 'How: Calvin ensures quality and stability',
      description: 'A launch-ready product, stable and secure, officially stepping onto the stage of the market. A strong debut builds trust with users.',
      maturity: 'Launch Stage',
      quote: {
        text: "If you are not embarrassed by the first version of your product, you've launched too late.",
        author: "Reid Hoffman"
      },
      outcomes: [
        'Quality assured release',
        'Security & performance checks complete',
        'Confident public launch'
      ],
      activeAgents: ['Calvin']
    },
    {
      icon: <GrowthIcon />,
      title: 'Post-Launch Feedback',
      subtitle: 'How: Baley and Calvin analyze real-world usage',
      description: 'Insightful feedback loops and data-driven improvement plans. Real-world usage reveals what actually resonates with users.',
      maturity: 'Growth Stage',
      quote: {
        text: "Your most unhappy customers are your greatest source of learning.",
        author: "Bill Gates"
      },
      outcomes: [
        'User-informed feature tweaks',
        'Analytics-driven decisions',
        'Roadmap adjustments for growth'
      ],
      activeAgents: ['Baley', 'Calvin']
    },
    {
      icon: <ScaleIcon />,
      title: 'Growth & Evolution',
      subtitle: 'How: All agents collaborate on continuous improvement',
      description: 'A living product that adapts, scales, and continuously refines to meet evolving user needs. Stagnation kills products—ongoing evolution ensures long-term relevance.',
      maturity: 'Scale Stage',
      quote: {
        text: "If you're not growing, you're dying.",
        author: "William S. Burroughs"
      },
      outcomes: [
        'Regular feature enhancements',
        'Workflow & UX improvements',
        'Market responsive growth strategy'
      ],
      activeAgents: ['Seldon', 'Baley', 'Dors', 'Daneel', 'Giskard', 'Calvin']
    }
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh',
      position: 'relative',
      py: { xs: 12, md: 16 },
      overflow: 'hidden',
      backgroundColor: '#0F172A',
    }}>
      <NebulaBackground isHighSpeed={true} />
      
      <Container maxWidth={false} sx={{ position: 'relative', zIndex: 1, pt: { xs: 6, md: 8 }, px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
        <Typography 
          variant="h1" 
          sx={{ 
            textAlign: 'center', 
            mb: { xs: 4, md: 6 },
            mt: { xs: 3, md: 4 },
            fontWeight: 700,
            fontSize: { xs: '2rem', md: '3rem', lg: '3.5rem' },
            background: 'linear-gradient(45deg, #0EA5E9 30%, #6366F1 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Building Your Vision
        </Typography>

        <Typography 
          variant="h5" 
          sx={{ 
            textAlign: 'center', 
            mb: { xs: 8, md: 12 },
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.5,
            fontSize: { xs: '0.95rem', md: '1.1rem' },
            px: 2,
          }}
        >
          Follow the path as our AI agents guide you through each milestone, transforming your idea into reality
        </Typography>

        <JourneyPath>
          <ConnectingLines />
          
          {steps.map((step, index) => (
            <MilestoneCard key={index} index={index}>
              <MaturityBadge>
                {step.maturity}
              </MaturityBadge>
              
              <MilestoneIcon className="milestone-icon" index={index}>
                {step.icon}
              </MilestoneIcon>
              
              <Box sx={{ pl: 0.5 }}>
                <StepTitle>
                  {step.title}
                </StepTitle>

                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    color: '#0EA5E9',
                    mb: 1,
                    opacity: 0.9,
                    fontWeight: 500,
                    fontSize: '0.9rem',
                  }}
                >
                  {step.subtitle}
                </Typography>

                <StepDescription>
                  {step.description}
                </StepDescription>

                <Quote>
                  <Typography
                    variant="body1"
                    sx={{
                      fontStyle: 'italic',
                      color: 'rgba(255, 255, 255, 0.9)',
                      mb: 0.5,
                      lineHeight: 1.5,
                      fontSize: '0.85rem',
                    }}
                  >
                    {step.quote.text}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: '#0EA5E9',
                      textAlign: 'right',
                      fontWeight: 500,
                      fontSize: '0.8rem',
                      opacity: 0.9,
                    }}
                  >
                    — {step.quote.author}
                  </Typography>
                </Quote>

                <OutcomesBox>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: '#0EA5E9',
                      mb: 1,
                      fontWeight: 600,
                      fontSize: '0.95rem',
                    }}
                  >
                    Key Outcomes
                  </Typography>
                  {step.outcomes.map((outcome, i) => (
                    <Typography 
                      key={i}
                      sx={{ 
                        color: 'rgba(255, 255, 255, 0.7)',
                        mb: 0.75,
                        pl: 2,
                        position: 'relative',
                        fontSize: '0.85rem',
                        lineHeight: 1.4,
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          width: 4,
                          height: 4,
                          borderRadius: '50%',
                          backgroundColor: '#0EA5E9',
                        },
                        '&:last-child': { mb: 0 },
                      }}
                    >
                      {outcome}
                    </Typography>
                  ))}
                </OutcomesBox>

                <Box sx={{ mt: 2 }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: '#0EA5E9',
                      mb: 1,
                      fontWeight: 600,
                      fontSize: '0.95rem',
                    }}
                  >
                    Contributing Agents
                  </Typography>
                  <AgentContributions activeAgents={step.activeAgents} />
                </Box>
              </Box>
            </MilestoneCard>
          ))}
        </JourneyPath>
      </Container>
    </Box>
  );
};

export default Journey;

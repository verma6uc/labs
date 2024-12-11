import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  LinearProgress, 
  Chip, 
  IconButton, 
  Button, 
  Avatar, 
  AvatarGroup 
} from '@mui/material';
import WelcomeBanner from '../../components/dashboard/WelcomeBanner';
import {
  Edit as EditIcon,
  TrendingUp as TrendingUpIcon,
  Lightbulb as IdeaIcon,
  Architecture as BlueprintIcon,
  Flag as MilestoneIcon,
  Assignment as TaskIcon,
  Comment as CommentIcon,
  AccessTime as TimeIcon,
  Code as CodeIcon,
  Devices as DevicesIcon,
  Cloud as CloudIcon,
  Description as PRDIcon,
  BugReport as BugIcon,
  Speed as PerformanceIcon,
  Language as LandingPageIcon,
  CompareArrows as CompetitorIcon,
  MenuBook as DocumentationIcon,
  AutoAwesome as ComplianceIcon,
  Search as ResearchIcon,
  Loop as IterationIcon,
} from '@mui/icons-material';

// Project Types Configuration
const projectTypes = {
  'landing': { 
    color: '#0EA5E9', 
    icon: <LandingPageIcon />, 
    label: 'Landing Page',
    description: 'Promotional or introductory landing page'
  },
  'competitor': { 
    color: '#10B981', 
    icon: <CompetitorIcon />, 
    label: 'Competitor Analysis',
    description: 'Compare products and features dashboard'
  },
  'documentation': { 
    color: '#8B5CF6', 
    icon: <DocumentationIcon />, 
    label: 'Documentation',
    description: 'Developer guides and API references'
  },
  'compliance': { 
    color: '#F59E0B', 
    icon: <ComplianceIcon />, 
    label: 'Compliance/Process',
    description: 'Automated operational tasks'
  },
} as const;

// Project Stages Configuration
const projectStages = {
  'idea': { 
    color: '#F59E0B', 
    icon: <IdeaIcon />, 
    label: 'Ideation',
    description: 'Initial concept and scope definition'
  },
  'research': { 
    color: '#3B82F6', 
    icon: <ResearchIcon />, 
    label: 'Research',
    description: 'Market insights and feature recommendations'
  },
  'blueprint': { 
    color: '#10B981', 
    icon: <BlueprintIcon />, 
    label: 'Blueprint',
    description: 'Visual structure and layout design'
  },
  'prd': { 
    color: '#6366F1', 
    icon: <PRDIcon />, 
    label: 'PRD',
    description: 'Detailed specifications and requirements'
  },
  'metrics': { 
    color: '#EC4899', 
    icon: <PerformanceIcon />, 
    label: 'Metrics Setup',
    description: 'KPIs and integration configuration'
  },
  'iteration': { 
    color: '#10B981', 
    icon: <IterationIcon />, 
    label: 'Iteration',
    description: 'Continuous improvement and refinement'
  },
} as const;

type ProjectType = keyof typeof projectTypes;
type ProjectStage = keyof typeof projectStages;

interface ActionItem {
  project: string;
  task: string;
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
  type: ProjectType;
  stage: ProjectStage;
  nextAction: string;
}

interface Milestone {
  project: string;
  name: string;
  dueDate: string;
  progress: number;
  type: ProjectType;
  stage: ProjectStage;
  nextAction: string;
}

interface Activity {
  type: 'comment' | 'milestone' | 'task';
  project: string;
  description: string;
  timestamp: string;
  stage: ProjectStage;
  projectType: ProjectType;
  user: {
    name: string;
    avatar: string;
  };
}

interface CardWrapperProps {
  children: React.ReactNode;
  stage: ProjectStage;
  type: ProjectType;
}

const CardWrapper: React.FC<CardWrapperProps> = ({ children, stage, type }) => (
  <Box sx={{
    position: 'relative',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-4px)',
      '& .MuiCard-root': {
        boxShadow: `0 0 20px ${projectStages[stage].color}30`,
        borderColor: `${projectStages[stage].color}50`,
      },
    },
  }}>
    <Card sx={{
      p: 3,
      backgroundColor: 'rgba(17, 25, 40, 0.75)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderLeft: `4px solid ${projectStages[stage].color}`,
      transition: 'all 0.3s ease-in-out',
      position: 'relative',
      overflow: 'visible',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 1,
        padding: '1px',
        background: `linear-gradient(45deg, ${projectStages[stage].color}30, transparent)`,
        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        maskComposite: 'exclude',
        pointerEvents: 'none',
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: '10%',
        right: 0,
        width: '100px',
        height: '100px',
        background: `radial-gradient(circle at top right, ${projectTypes[type].color}10, transparent 70%)`,
        opacity: 0.5,
        pointerEvents: 'none',
      },
    }}>
      {children}
    </Card>
  </Box>
);

interface StyledChipProps {
  icon: React.ReactElement;
  label: string;
  color: string;
  sx?: any;
}

const StyledChip: React.FC<StyledChipProps> = ({ icon, label, color, ...props }) => (
  <Chip
    icon={icon}
    label={label}
    size="small"
    sx={{
      backgroundColor: `${color}15`,
      color: color,
      border: `1px solid ${color}30`,
      '& .MuiChip-icon': { 
        color: 'inherit',
        transition: 'transform 0.2s ease',
      },
      transition: 'all 0.2s ease',
      '&:hover': {
        backgroundColor: `${color}25`,
        '& .MuiChip-icon': {
          transform: 'scale(1.1)',
        },
      },
      ...props.sx,
    }}
    {...props}
  />
);

interface NextActionBoxProps {
  text: string;
  stage: ProjectStage;
}

const NextActionBox: React.FC<NextActionBoxProps> = ({ text, stage }) => (
  <Box sx={{ 
    p: 2, 
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: 1,
    mb: 2,
    border: '1px solid rgba(255, 255, 255, 0.05)',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '4px',
      height: '100%',
      background: projectStages[stage].color,
      opacity: 0.5,
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      width: '50px',
      height: '100%',
      background: `linear-gradient(to right, transparent, ${projectStages[stage].color}10)`,
    },
  }}>
    <Typography variant="body2" sx={{ 
      color: '#94A3B8',
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      '&::before': {
        content: '"→"',
        color: projectStages[stage].color,
        fontWeight: 'bold',
      },
    }}>
      {text}
    </Typography>
  </Box>
);

interface ActionButtonProps {
  children: React.ReactNode;
  stage: ProjectStage;
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ children, stage, ...props }) => (
  <Button
    variant="contained"
    size="small"
    sx={{
      background: `linear-gradient(45deg, ${projectStages[stage].color}, ${projectStages[stage].color}CC)`,
      boxShadow: `0 2px 10px ${projectStages[stage].color}40`,
      transition: 'all 0.2s ease',
      '&:hover': {
        background: `linear-gradient(45deg, ${projectStages[stage].color}CC, ${projectStages[stage].color})`,
        transform: 'translateY(-1px)',
        boxShadow: `0 4px 15px ${projectStages[stage].color}60`,
      },
      '&:active': {
        transform: 'translateY(0)',
      },
    }}
    {...props}
  >
    {children}
  </Button>
);

const actionItems: ActionItem[] = [
  {
    project: 'Product Launch Page',
    task: 'Review conversion optimization suggestions',
    priority: 'High',
    dueDate: 'Today',
    type: 'landing',
    stage: 'metrics',
    nextAction: 'Set up analytics integration',
  },
  {
    project: 'Feature Comparison Dashboard',
    task: 'Define competitor metrics',
    priority: 'Medium',
    dueDate: 'Tomorrow',
    type: 'competitor',
    stage: 'blueprint',
    nextAction: 'Generate PRD with comparison metrics',
  },
  {
    project: 'API Documentation Portal',
    task: 'Review auto-generated docs',
    priority: 'High',
    dueDate: '2 days',
    type: 'documentation',
    stage: 'research',
    nextAction: 'Confirm extracted API endpoints',
  },
];

const milestones: Milestone[] = [
  {
    project: 'Product Launch Page',
    name: 'Conversion Rate Optimization',
    dueDate: 'Dec 15, 2023',
    progress: 80,
    type: 'landing',
    stage: 'metrics',
    nextAction: 'Implement A/B testing',
  },
  {
    project: 'Feature Comparison Dashboard',
    name: 'Competitor Analysis Framework',
    dueDate: 'Dec 20, 2023',
    progress: 45,
    type: 'competitor',
    stage: 'blueprint',
    nextAction: 'Define comparison metrics',
  },
  {
    project: 'API Documentation Portal',
    name: 'Developer Guide Generation',
    dueDate: 'Dec 18, 2023',
    progress: 60,
    type: 'documentation',
    stage: 'research',
    nextAction: 'Extract code examples',
  },
];

const recentActivities: Activity[] = [
  {
    type: 'comment',
    project: 'Product Launch Page',
    description: 'AI suggested hero section improvements',
    timestamp: '1 hour ago',
    stage: 'metrics',
    projectType: 'landing',
    user: { name: 'John D.', avatar: '' },
  },
  {
    type: 'milestone',
    project: 'Feature Comparison Dashboard',
    description: 'Completed competitor feature mapping',
    timestamp: '3 hours ago',
    stage: 'blueprint',
    projectType: 'competitor',
    user: { name: 'Sarah M.', avatar: '' },
  },
  {
    type: 'task',
    project: 'API Documentation Portal',
    description: 'Generated initial API reference',
    timestamp: '5 hours ago',
    stage: 'research',
    projectType: 'documentation',
    user: { name: 'Mike R.', avatar: '' },
  },
];

const CreatorDashboard: React.FC = () => {
  return (
    <Box>
      <WelcomeBanner 
        userName="Sarah"
        onSearch={(query) => console.log('Search:', query)}
      />

      {/* Action Items */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" sx={{ color: '#E2E8F0', mb: 2 }}>
          Action Items
        </Typography>
        <Grid container spacing={3}>
          {actionItems.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <CardWrapper stage={item.stage} type={item.type}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <StyledChip 
                      icon={projectTypes[item.type].icon}
                      label={projectTypes[item.type].label}
                      color={projectTypes[item.type].color}
                    />
                    <StyledChip 
                      icon={projectStages[item.stage].icon}
                      label={projectStages[item.stage].label}
                      color={projectStages[item.stage].color}
                    />
                  </Box>
                </Box>

                <Typography variant="subtitle1" sx={{ color: '#E2E8F0', mb: 1 }}>
                  {item.task}
                </Typography>
                <Typography variant="body2" sx={{ color: '#94A3B8', mb: 2 }}>
                  {item.project}
                </Typography>

                <NextActionBox text={item.nextAction} stage={item.stage} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <TimeIcon sx={{ color: '#64748B', fontSize: 18 }} />
                    <Typography variant="caption" sx={{ color: '#64748B' }}>
                      {item.dueDate}
                    </Typography>
                  </Box>
                  <ActionButton stage={item.stage}>
                    Take Action
                  </ActionButton>
                </Box>
              </CardWrapper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Project Milestones */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" sx={{ color: '#E2E8F0', mb: 2 }}>
          Project Milestones
        </Typography>
        <Grid container spacing={3}>
          {milestones.map((milestone, index) => (
            <Grid item xs={12} key={index}>
              <CardWrapper stage={milestone.stage} type={milestone.type}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Box>
                    <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                      <StyledChip 
                        icon={projectTypes[milestone.type].icon}
                        label={projectTypes[milestone.type].label}
                        color={projectTypes[milestone.type].color}
                      />
                      <StyledChip 
                        icon={projectStages[milestone.stage].icon}
                        label={projectStages[milestone.stage].label}
                        color={projectStages[milestone.stage].color}
                      />
                    </Box>
                    <Typography variant="subtitle1" sx={{ color: '#E2E8F0', mb: 0.5 }}>
                      {milestone.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#94A3B8' }}>
                      {milestone.project}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <TimeIcon sx={{ color: '#64748B', fontSize: 18 }} />
                    <Typography variant="caption" sx={{ color: '#64748B' }}>
                      Due {milestone.dueDate}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" sx={{ color: '#94A3B8' }}>
                      Progress
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#E2E8F0' }}>
                      {milestone.progress}%
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={milestone.progress}
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: projectStages[milestone.stage].color,
                      },
                    }}
                  />
                </Box>

                <NextActionBox text={milestone.nextAction} stage={milestone.stage} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <AvatarGroup max={3} sx={{
                    '& .MuiAvatar-root': {
                      width: 28,
                      height: 28,
                      fontSize: '0.875rem',
                      border: '2px solid rgba(17, 25, 40, 0.6)',
                    },
                  }}>
                    <Avatar sx={{ bgcolor: '#0EA5E9' }}>JD</Avatar>
                    <Avatar sx={{ bgcolor: '#10B981' }}>SM</Avatar>
                    <Avatar sx={{ bgcolor: '#8B5CF6' }}>MR</Avatar>
                  </AvatarGroup>
                  <IconButton size="small" sx={{ color: '#94A3B8' }}>
                    <EditIcon />
                  </IconButton>
                </Box>
              </CardWrapper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Recent Activity */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" sx={{ color: '#E2E8F0', mb: 2 }}>
          Recent Activity
        </Typography>
        <Card sx={{
          backgroundColor: 'rgba(17, 25, 40, 0.6)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
          {recentActivities.map((activity, index) => (
            <Box
              key={index}
              sx={{
                p: 2,
                borderBottom: index < recentActivities.length - 1 ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Avatar sx={{ 
                bgcolor: projectStages[activity.stage].color,
                width: 32,
                height: 32,
              }}>
                {projectStages[activity.stage].icon}
              </Avatar>
              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', gap: 1, mb: 0.5 }}>
                  <StyledChip 
                    icon={projectTypes[activity.projectType].icon}
                    label={projectTypes[activity.projectType].label}
                    color={projectTypes[activity.projectType].color}
                  />
                  <StyledChip 
                    icon={projectStages[activity.stage].icon}
                    label={projectStages[activity.stage].label}
                    color={projectStages[activity.stage].color}
                  />
                </Box>
                <Typography variant="body2" sx={{ color: '#E2E8F0' }}>
                  {activity.description}
                </Typography>
                <Typography variant="caption" sx={{ color: '#64748B' }}>
                  {activity.project} • {activity.timestamp}
                </Typography>
              </Box>
              <Avatar sx={{ width: 28, height: 28, bgcolor: '#0EA5E9' }}>
                {activity.user.name.split(' ').map(n => n[0]).join('')}
              </Avatar>
            </Box>
          ))}
        </Card>
      </Box>
    </Box>
  );
};

export default CreatorDashboard;

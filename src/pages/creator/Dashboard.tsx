import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  IconButton,
  Button,
  Tooltip,
  Chip,
} from '@mui/material';
import {
  Add as AddIcon,
  TrendingUp as TrendingUpIcon,
  Lightbulb as LightbulbIcon,
  Architecture as ArchitectureIcon,
  SmartToy as AIIcon,
  Extension as IntegrationIcon,
} from '@mui/icons-material';
import { WelcomeBanner } from '../../components/dashboard/WelcomeBanner';

interface QuickAction {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  color: string;
}

const quickActions: QuickAction[] = [
  {
    title: 'New Idea',
    description: 'Start a new product idea with AI assistance',
    icon: <LightbulbIcon />,
    path: '/creator/projects/new',
    color: '#3B82F6',
  },
  {
    title: 'Create Blueprint',
    description: 'Design your product structure and flow',
    icon: <ArchitectureIcon />,
    path: '/creator/blueprint/new',
    color: '#10B981',
  },
  {
    title: 'AI Analysis',
    description: 'Get AI insights on your current projects',
    icon: <AIIcon />,
    path: '/creator/ai-insights',
    color: '#8B5CF6',
  },
  {
    title: 'Add Integration',
    description: 'Connect new tools and services',
    icon: <IntegrationIcon />,
    path: '/creator/integrations/new',
    color: '#F59E0B',
  },
];

const CreatorDashboard: React.FC = () => {
  return (
    <Box>
      <WelcomeBanner 
        userName="Sarah"
        onSearch={(query) => console.log('Search:', query)}
      />

      <Box sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          {/* Quick Actions */}
          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{
                color: '#E2E8F0',
                fontWeight: 600,
                mb: 2,
              }}
            >
              Quick Actions
            </Typography>
            <Grid container spacing={2}>
              {quickActions.map((action) => (
                <Grid item xs={12} sm={6} md={3} key={action.title}>
                  <Card
                    sx={{
                      p: 2,
                      height: '100%',
                      backgroundColor: 'rgba(17, 25, 40, 0.6)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      transition: 'transform 0.2s ease-in-out',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        '& .action-icon': {
                          backgroundColor: `${action.color}22`,
                          color: action.color,
                        },
                      },
                    }}
                    onClick={() => {
                      // Navigate to the action path
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      <Box
                        className="action-icon"
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          color: 'rgba(148, 163, 184, 0.8)',
                          transition: 'all 0.2s ease-in-out',
                        }}
                      >
                        {action.icon}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          sx={{
                            color: '#E2E8F0',
                            fontWeight: 500,
                            mb: 0.5,
                          }}
                        >
                          {action.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'rgba(148, 163, 184, 0.8)',
                            fontSize: '0.875rem',
                          }}
                        >
                          {action.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Recent Projects */}
          <Grid item xs={12} md={8}>
            <Box sx={{
              backgroundColor: 'rgba(17, 25, 40, 0.6)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: 2,
              p: 3,
            }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography sx={{ color: '#E2E8F0', fontWeight: 600 }}>
                  Recent Projects
                </Typography>
                <Button
                  startIcon={<AddIcon />}
                  sx={{
                    color: '#3B82F6',
                    '&:hover': {
                      backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    },
                  }}
                >
                  New Project
                </Button>
              </Box>

              {/* Project List */}
              {[1, 2, 3].map((project) => (
                <Box
                  key={project}
                  sx={{
                    p: 2,
                    mb: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: 1,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                    <Typography sx={{ color: '#E2E8F0', fontWeight: 500 }}>
                      Project {project}
                    </Typography>
                    <Chip
                      label="In Progress"
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        color: '#3B82F6',
                        borderRadius: 1,
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(148, 163, 184, 0.8)',
                      mb: 2,
                    }}
                  >
                    Project description goes here. This is a brief overview of what the project is about.
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'rgba(148, 163, 184, 0.6)',
                      }}
                    >
                      Last updated: 2 days ago
                    </Typography>
                    <Box sx={{ flex: 1 }} />
                    <Tooltip title="View Analytics">
                      <IconButton
                        size="small"
                        sx={{
                          color: 'rgba(148, 163, 184, 0.8)',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            color: '#E2E8F0',
                          },
                        }}
                      >
                        <TrendingUpIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* AI Insights */}
          <Grid item xs={12} md={4}>
            <Box sx={{
              backgroundColor: 'rgba(17, 25, 40, 0.6)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: 2,
              p: 3,
              height: '100%',
            }}>
              <Typography sx={{ color: '#E2E8F0', fontWeight: 600, mb: 3 }}>
                AI Insights
              </Typography>

              {/* Insight Cards */}
              {[1, 2, 3].map((insight) => (
                <Box
                  key={insight}
                  sx={{
                    p: 2,
                    mb: 2,
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                    borderRadius: 1,
                    border: '1px solid rgba(139, 92, 246, 0.2)',
                  }}
                >
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 1 }}>
                    <AIIcon sx={{ color: '#8B5CF6', fontSize: 20 }} />
                    <Typography sx={{ color: '#E2E8F0', fontWeight: 500, fontSize: '0.875rem' }}>
                      AI Suggestion {insight}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(148, 163, 184, 0.8)',
                      fontSize: '0.875rem',
                    }}
                  >
                    Here's an AI-generated insight about your project or potential improvements.
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CreatorDashboard;

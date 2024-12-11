import React from 'react';
import { Box, Typography, Card, Grid, Chip } from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  Lightbulb as IdeaIcon,
  BugReport as BugIcon,
  Speed as PerformanceIcon,
} from '@mui/icons-material';

const feedbackItems = [
  {
    type: 'Improvement',
    description: 'Consider adding a search feature to help users find specific content more quickly.',
    source: 'AI Suggestion',
    timestamp: '2 hours ago',
    icon: <TrendingUpIcon />,
    color: '#0EA5E9',
  },
  {
    type: 'Feature Request',
    description: 'Users have requested the ability to export data in multiple formats.',
    source: 'User Feedback',
    timestamp: '1 day ago',
    icon: <IdeaIcon />,
    color: '#10B981',
  },
  {
    type: 'Bug Report',
    description: 'Mobile navigation menu occasionally fails to close on selection.',
    source: 'Quality Agent',
    timestamp: '3 days ago',
    icon: <BugIcon />,
    color: '#EF4444',
  },
  {
    type: 'Performance',
    description: 'Page load time could be improved by optimizing image sizes.',
    source: 'Performance Metrics',
    timestamp: '1 week ago',
    icon: <PerformanceIcon />,
    color: '#8B5CF6',
  },
];

const Feedback: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ color: '#E2E8F0', mb: 3 }}>
        Feedback & Iteration
      </Typography>

      <Typography sx={{ color: '#94A3B8', mb: 4 }}>
        Track and manage feedback from various sources to continuously improve your product.
      </Typography>

      <Grid container spacing={3}>
        {feedbackItems.map((item, index) => (
          <Grid item xs={12} key={index}>
            <Card sx={{
              p: 3,
              backgroundColor: 'rgba(17, 25, 40, 0.6)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <Box sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  backgroundColor: `${item.color}20`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: item.color,
                  flexShrink: 0,
                }}>
                  {item.icon}
                </Box>

                <Box sx={{ flex: 1 }}>
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    mb: 1,
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Typography variant="h6" sx={{ color: '#E2E8F0' }}>
                        {item.type}
                      </Typography>
                      <Chip 
                        label={item.source}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          color: '#94A3B8',
                        }}
                      />
                    </Box>
                    <Typography variant="caption" sx={{ color: '#64748B' }}>
                      {item.timestamp}
                    </Typography>
                  </Box>

                  <Typography sx={{ color: '#94A3B8' }}>
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Feedback;

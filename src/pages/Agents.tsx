import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  Timeline as TimelineIcon,
  Search as SearchIcon,
  Brush as BrushIcon,
  Storage as StorageIcon,
  Extension as ExtensionIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';
import { GlassContainer } from '../components/shared/StyledComponents';
import { agents } from '../data/mockData';

const getAgentIcon = (iconName: string) => {
  switch (iconName) {
    case 'Timeline':
      return <TimelineIcon />;
    case 'Search':
      return <SearchIcon />;
    case 'Brush':
      return <BrushIcon />;
    case 'Storage':
      return <StorageIcon />;
    case 'Extension':
      return <ExtensionIcon />;
    case 'CheckCircle':
      return <CheckCircleIcon />;
    default:
      return <TimelineIcon />;
  }
};

const Agents: React.FC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #0A1929 0%, #1A2942 100%)',
      color: 'white',
      pt: 8,
      pb: 12
    }}>
      <Box sx={{ px: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h1" sx={{ 
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            fontWeight: 700,
            background: 'linear-gradient(135deg, #00A3FF 0%, #0066FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 3
          }}>
            Meet Our Asimov-Inspired AI Agents
          </Typography>
          <Typography variant="h2" sx={{
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.6
          }}>
            Drawing on the spirit of Asimov's universe, we've conceptualized a team of specialized AI agents—each playing a distinct role in guiding your product from idea to reality. Today, they're outlines of what they'll become; tomorrow, they'll plan, research, design, build, integrate, and refine your vision into something extraordinary.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ px: { xs: 0, sm: 2, md: 4 } }}>
          {agents.map((agent) => (
            <Grid item xs={12} sm={6} md={4} key={agent.id}>
              <GlassContainer sx={{
                height: '100%',
                background: 'rgba(13, 25, 41, 0.5)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  border: `1px solid ${agent.color}40`,
                  boxShadow: `0 0 30px ${agent.color}20`
                }
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: `${agent.color}20`,
                    color: agent.color,
                    '& svg': { fontSize: 24 }
                  }}>
                    {getAgentIcon(agent.icon)}
                  </Box>
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, color: 'white' }}>
                      {agent.name}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: agent.color }}>
                      {agent.role}
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="body1" sx={{ mb: 3, color: 'rgba(255, 255, 255, 0.7)' }}>
                  {agent.description}
                </Typography>

                <Typography variant="body2" sx={{ 
                  mb: 4,
                  color: agent.color,
                  fontStyle: 'italic'
                }}>
                  {agent.quote}
                </Typography>

                <Typography variant="h6" sx={{ 
                  mb: 2,
                  textTransform: 'uppercase',
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  color: 'rgba(255, 255, 255, 0.5)'
                }}>
                  Role Contributions
                </Typography>

                {agent.contributions.map((contribution, idx) => (
                  <Box key={idx} sx={{ mb: 3, '&:last-child': { mb: 0 } }}>
                    <Typography variant="subtitle2" sx={{ 
                      color: agent.color,
                      mb: 1,
                      fontWeight: 500
                    }}>
                      {contribution.category}
                    </Typography>
                    {contribution.items.map((item, itemIdx) => (
                      <Typography key={itemIdx} variant="body2" sx={{ 
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '0.875rem',
                        mb: 0.5
                      }}>
                        • {item}
                      </Typography>
                    ))}
                  </Box>
                ))}
              </GlassContainer>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Agents;

import React from 'react';
import { Box, Typography, Grid, Card } from '@mui/material';
import AdminButton from '../../components/shared/AdminButton';
import { Add as AddIcon } from '@mui/icons-material';

const Projects: React.FC = () => {
  return (
    <Box>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        mb: 4 
      }}>
        <Typography variant="h4" sx={{ color: '#E2E8F0' }}>
          Projects
        </Typography>
        <AdminButton startIcon={<AddIcon />}>
          New Project
        </AdminButton>
      </Box>

      <Grid container spacing={3}>
        {[1, 2, 3].map((project) => (
          <Grid item xs={12} md={4} key={project}>
            <Card sx={{
              p: 3,
              backgroundColor: 'rgba(17, 25, 40, 0.6)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              transition: 'transform 0.2s ease-in-out',
              cursor: 'pointer',
              '&:hover': {
                transform: 'translateY(-4px)',
              },
            }}>
              <Typography variant="h6" sx={{ color: '#E2E8F0', mb: 1 }}>
                Project {project}
              </Typography>
              <Typography sx={{ color: '#94A3B8', mb: 2 }}>
                Project description goes here. This is a brief overview of what the project is about.
              </Typography>
              <Typography variant="caption" sx={{ color: '#64748B' }}>
                Last updated: 2 days ago
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;

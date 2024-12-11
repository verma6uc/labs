import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  IconButton,
  Button,
  TextField,
  Menu,
  MenuItem,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  InputAdornment,
} from '@mui/material';
import {
  Add as AddIcon,
  MoreVert as MoreVertIcon,
  Search as SearchIcon,
  FilterList as FilterIcon,
  Sort as SortIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  ContentCopy as DuplicateIcon,
  Archive as ArchiveIcon,
  Lightbulb as IdeaIcon,
  Architecture as BlueprintIcon,
  SmartToy as AIIcon,
} from '@mui/icons-material';

interface Project {
  id: string;
  title: string;
  description: string;
  status: 'draft' | 'in_progress' | 'completed' | 'archived';
  lastUpdated: string;
  tags: string[];
  progress: number;
  aiSuggestions: number;
}

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Dashboard',
    description: 'A modern dashboard for managing online stores with AI-powered insights and analytics.',
    status: 'in_progress',
    lastUpdated: '2024-12-10T15:30:00',
    tags: ['dashboard', 'e-commerce', 'analytics'],
    progress: 65,
    aiSuggestions: 3,
  },
  {
    id: '2',
    title: 'Social Media Scheduler',
    description: 'AI-driven social media content scheduler with smart timing suggestions.',
    status: 'draft',
    lastUpdated: '2024-12-09T10:15:00',
    tags: ['social-media', 'automation'],
    progress: 25,
    aiSuggestions: 5,
  },
  {
    id: '3',
    title: 'Customer Support Bot',
    description: 'Intelligent chatbot for handling customer queries with natural language processing.',
    status: 'completed',
    lastUpdated: '2024-12-08T18:45:00',
    tags: ['ai', 'customer-support', 'chatbot'],
    progress: 100,
    aiSuggestions: 0,
  },
];

const ProjectsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [newProjectDialog, setNewProjectDialog] = useState(false);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, projectId: string) => {
    setAnchorEl(event.currentTarget);
    setSelectedProject(projectId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedProject(null);
  };

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'draft':
        return '#F59E0B';
      case 'in_progress':
        return '#3B82F6';
      case 'completed':
        return '#10B981';
      case 'archived':
        return '#6B7280';
      default:
        return '#6B7280';
    }
  };

  const getStatusLabel = (status: Project['status']) => {
    return status.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" sx={{ color: '#E2E8F0', fontWeight: 600 }}>
            Ideas & Projects
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setNewProjectDialog(true)}
            sx={{
              backgroundColor: '#3B82F6',
              '&:hover': {
                backgroundColor: '#2563EB',
              },
            }}
          >
            New Project
          </Button>
        </Box>

        {/* Search and Filters */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: 'rgba(148, 163, 184, 0.8)' }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(17, 25, 40, 0.6)',
                  borderRadius: 2,
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.05)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#3B82F6',
                  },
                },
                '& input': {
                  color: '#E2E8F0',
                },
              }}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <Button
              fullWidth
              startIcon={<FilterIcon />}
              sx={{
                color: '#E2E8F0',
                backgroundColor: 'rgba(17, 25, 40, 0.6)',
                borderRadius: 2,
                border: '1px solid rgba(255, 255, 255, 0.05)',
                '&:hover': {
                  backgroundColor: 'rgba(17, 25, 40, 0.8)',
                },
              }}
            >
              Filters
            </Button>
          </Grid>
          <Grid item xs={6} md={3}>
            <Button
              fullWidth
              startIcon={<SortIcon />}
              sx={{
                color: '#E2E8F0',
                backgroundColor: 'rgba(17, 25, 40, 0.6)',
                borderRadius: 2,
                border: '1px solid rgba(255, 255, 255, 0.05)',
                '&:hover': {
                  backgroundColor: 'rgba(17, 25, 40, 0.8)',
                },
              }}
            >
              Sort By
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Projects Grid */}
      <Grid container spacing={3}>
        {mockProjects.map((project) => (
          <Grid item xs={12} md={6} lg={4} key={project.id}>
            <Card
              sx={{
                backgroundColor: 'rgba(17, 25, 40, 0.6)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: 2,
                      backgroundColor: 'rgba(59, 130, 246, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IdeaIcon sx={{ color: '#3B82F6' }} />
                  </Box>
                  <Box>
                    <Typography sx={{ color: '#E2E8F0', fontWeight: 600, mb: 0.5 }}>
                      {project.title}
                    </Typography>
                    <Chip
                      label={getStatusLabel(project.status)}
                      size="small"
                      sx={{
                        backgroundColor: `${getStatusColor(project.status)}22`,
                        color: getStatusColor(project.status),
                        borderRadius: 1,
                      }}
                    />
                  </Box>
                </Box>
                <IconButton
                  size="small"
                  onClick={(e) => handleMenuOpen(e, project.id)}
                  sx={{
                    color: 'rgba(148, 163, 184, 0.8)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    },
                  }}
                >
                  <MoreVertIcon />
                </IconButton>
              </Box>

              <Typography
                sx={{
                  color: 'rgba(148, 163, 184, 0.8)',
                  fontSize: '0.875rem',
                  mb: 2,
                  flex: 1,
                }}
              >
                {project.description}
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                {project.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: 'rgba(148, 163, 184, 0.8)',
                      borderRadius: 1,
                    }}
                  />
                ))}
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    flex: 1,
                    height: 4,
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: 2,
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    sx={{
                      width: `${project.progress}%`,
                      height: '100%',
                      backgroundColor: '#3B82F6',
                      borderRadius: 2,
                    }}
                  />
                </Box>
                <Typography sx={{ color: '#E2E8F0', fontSize: '0.875rem' }}>
                  {project.progress}%
                </Typography>
              </Box>

              {project.aiSuggestions > 0 && (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    mt: 2,
                    p: 1,
                    borderRadius: 1,
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                  }}
                >
                  <AIIcon sx={{ color: '#8B5CF6', fontSize: 20 }} />
                  <Typography sx={{ color: '#E2E8F0', fontSize: '0.875rem' }}>
                    {project.aiSuggestions} AI suggestions available
                  </Typography>
                </Box>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Project Actions Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(17, 25, 40, 0.95)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            '& .MuiMenuItem-root': {
              color: '#E2E8F0',
              gap: 1.5,
              py: 1,
              '&:hover': {
                backgroundColor: 'rgba(59, 130, 246, 0.05)',
              },
            },
          },
        }}
      >
        <MenuItem>
          <EditIcon fontSize="small" /> Edit
        </MenuItem>
        <MenuItem>
          <DuplicateIcon fontSize="small" /> Duplicate
        </MenuItem>
        <MenuItem>
          <ArchiveIcon fontSize="small" /> Archive
        </MenuItem>
        <MenuItem sx={{ color: '#EF4444 !important' }}>
          <DeleteIcon fontSize="small" /> Delete
        </MenuItem>
      </Menu>

      {/* New Project Dialog */}
      <Dialog
        open={newProjectDialog}
        onClose={() => setNewProjectDialog(false)}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(17, 25, 40, 0.95)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            minWidth: { xs: '90%', sm: 500 },
          },
        }}
      >
        <DialogTitle sx={{ color: '#E2E8F0' }}>Create New Project</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Project Title"
            type="text"
            fullWidth
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                color: '#E2E8F0',
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'rgba(148, 163, 184, 0.8)',
              },
            }}
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            sx={{
              mt: 2,
              '& .MuiOutlinedInput-root': {
                color: '#E2E8F0',
                '& fieldset': {
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                },
              },
              '& .MuiInputLabel-root': {
                color: 'rgba(148, 163, 184, 0.8)',
              },
            }}
          />
        </DialogContent>
        <DialogActions sx={{ p: 2, pt: 0 }}>
          <Button
            onClick={() => setNewProjectDialog(false)}
            sx={{ color: 'rgba(148, 163, 184, 0.8)' }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={() => setNewProjectDialog(false)}
            sx={{
              backgroundColor: '#3B82F6',
              '&:hover': {
                backgroundColor: '#2563EB',
              },
            }}
          >
            Create Project
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ProjectsPage;

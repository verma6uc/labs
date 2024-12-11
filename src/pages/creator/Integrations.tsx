import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Switch,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  ListItemIcon,
  Chip,
  Tooltip,
  CircularProgress,
} from '@mui/material';
import {
  Add as AddIcon,
  Settings as SettingsIcon,
  Delete as DeleteIcon,
  GitHub as GitHubIcon,
  YouTube as YouTubeIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
  Code as CodeIcon,
  CloudQueue as CloudIcon,
  DataObject as DataIcon,
  Analytics as AnalyticsIcon,
  Link as LinkIcon,
  Check as CheckIcon,
} from '@mui/icons-material';

// Mock data for integrations
const integrations = [
  {
    category: 'Development',
    items: [
      {
        name: 'GitHub',
        icon: <GitHubIcon />,
        status: 'connected',
        lastSync: '2 hours ago',
        description: 'Connect your repositories and track code changes',
      },
      {
        name: 'GitLab',
        icon: <CodeIcon />,
        status: 'available',
        description: 'Integrate with GitLab for version control',
      },
      {
        name: 'Vercel',
        icon: <CloudIcon />,
        status: 'connected',
        lastSync: '1 day ago',
        description: 'Deploy and host your projects',
      },
    ],
  },
  {
    category: 'Social Media',
    items: [
      {
        name: 'YouTube',
        icon: <YouTubeIcon />,
        status: 'connected',
        lastSync: '30 minutes ago',
        description: 'Share and manage your video content',
      },
      {
        name: 'Twitter',
        icon: <TwitterIcon />,
        status: 'connected',
        lastSync: '1 hour ago',
        description: 'Post updates and engage with followers',
      },
      {
        name: 'Instagram',
        icon: <InstagramIcon />,
        status: 'available',
        description: 'Share visual content and stories',
      },
      {
        name: 'LinkedIn',
        icon: <LinkedInIcon />,
        status: 'connected',
        lastSync: '3 hours ago',
        description: 'Connect with professionals and share updates',
      },
    ],
  },
  {
    category: 'Analytics',
    items: [
      {
        name: 'Google Analytics',
        icon: <AnalyticsIcon />,
        status: 'connected',
        lastSync: '1 hour ago',
        description: 'Track website traffic and user behavior',
      },
      {
        name: 'Mixpanel',
        icon: <DataIcon />,
        status: 'available',
        description: 'Advanced user analytics and tracking',
      },
    ],
  },
];

const IntegrationsPage: React.FC = () => {
  const [selectedIntegration, setSelectedIntegration] = useState<any>(null);
  const [configDialogOpen, setConfigDialogOpen] = useState(false);
  const [connecting, setConnecting] = useState(false);

  const handleConfigOpen = (integration: any) => {
    setSelectedIntegration(integration);
    setConfigDialogOpen(true);
  };

  const handleConfigClose = () => {
    setConfigDialogOpen(false);
    setSelectedIntegration(null);
  };

  const handleConnect = async () => {
    setConnecting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setConnecting(false);
    handleConfigClose();
  };

  return (
    <Box sx={{ height: '100%', overflow: 'auto' }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Box>
            <Typography variant="h5" sx={{ color: '#E2E8F0', fontWeight: 600 }}>
              Integrations
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(148, 163, 184, 0.8)', mt: 1 }}>
              Connect and manage your external services
            </Typography>
          </Box>
          <Button
            startIcon={<AddIcon />}
            sx={{
              color: '#E2E8F0',
              backgroundColor: 'rgba(17, 25, 40, 0.6)',
              '&:hover': {
                backgroundColor: 'rgba(17, 25, 40, 0.8)',
              },
            }}
          >
            Add New Integration
          </Button>
        </Box>
      </Box>

      {/* Integration Categories */}
      <Grid container spacing={3}>
        {integrations.map((category) => (
          <Grid item xs={12} key={category.category}>
            <Paper
              sx={{
                p: 3,
                backgroundColor: 'rgba(17, 25, 40, 0.6)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <Typography variant="h6" sx={{ color: '#E2E8F0', mb: 2 }}>
                {category.category}
              </Typography>
              <List>
                {category.items.map((integration, index) => (
                  <ListItem
                    key={integration.name}
                    sx={{
                      borderRadius: 1,
                      mb: 1,
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: '#E2E8F0' }}>{integration.icon}</ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography sx={{ color: '#E2E8F0' }}>{integration.name}</Typography>
                      }
                      secondary={
                        <Typography
                          variant="body2"
                          sx={{ color: 'rgba(148, 163, 184, 0.8)' }}
                        >
                          {integration.description}
                        </Typography>
                      }
                    />
                    <ListItemSecondaryAction>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        {integration.status === 'connected' ? (
                          <>
                            <Chip
                              icon={<CheckIcon />}
                              label="Connected"
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                                color: '#10B981',
                              }}
                            />
                            <Typography
                              variant="body2"
                              sx={{ color: 'rgba(148, 163, 184, 0.8)' }}
                            >
                              {integration.lastSync}
                            </Typography>
                            <Tooltip title="Configure">
                              <IconButton
                                size="small"
                                onClick={() => handleConfigOpen(integration)}
                                sx={{ color: 'rgba(148, 163, 184, 0.8)' }}
                              >
                                <SettingsIcon />
                              </IconButton>
                            </Tooltip>
                          </>
                        ) : (
                          <Button
                            variant="outlined"
                            size="small"
                            onClick={() => handleConfigOpen(integration)}
                            sx={{
                              color: '#3B82F6',
                              borderColor: '#3B82F6',
                              '&:hover': {
                                borderColor: '#2563EB',
                                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                              },
                            }}
                          >
                            Connect
                          </Button>
                        )}
                      </Box>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Configuration Dialog */}
      <Dialog
        open={configDialogOpen}
        onClose={handleConfigClose}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(17, 25, 40, 0.95)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            minWidth: 400,
          },
        }}
      >
        <DialogTitle sx={{ color: '#E2E8F0' }}>
          {selectedIntegration?.status === 'connected'
            ? `Configure ${selectedIntegration?.name}`
            : `Connect to ${selectedIntegration?.name}`}
        </DialogTitle>
        <DialogContent>
          {selectedIntegration?.status === 'connected' ? (
            <Box sx={{ mt: 2 }}>
              <TextField
                fullWidth
                label="API Key"
                type="password"
                sx={{
                  mb: 2,
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
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 2,
                }}
              >
                <Typography sx={{ color: '#E2E8F0' }}>Auto-sync</Typography>
                <Switch defaultChecked />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography sx={{ color: '#E2E8F0' }}>Notifications</Typography>
                <Switch defaultChecked />
              </Box>
            </Box>
          ) : (
            <Box sx={{ mt: 2 }}>
              <Typography sx={{ color: 'rgba(148, 163, 184, 0.8)', mb: 2 }}>
                You'll be redirected to {selectedIntegration?.name} to authorize the connection.
              </Typography>
              <TextField
                fullWidth
                label="Callback URL"
                value="https://your-app.com/callback"
                InputProps={{
                  readOnly: true,
                }}
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
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button
            onClick={handleConfigClose}
            sx={{ color: 'rgba(148, 163, 184, 0.8)' }}
          >
            Cancel
          </Button>
          {selectedIntegration?.status === 'connected' ? (
            <Button
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
              sx={{
                backgroundColor: 'rgba(239, 68, 68, 0.2)',
                color: '#EF4444',
                '&:hover': {
                  backgroundColor: 'rgba(239, 68, 68, 0.3)',
                },
              }}
            >
              Disconnect
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleConnect}
              disabled={connecting}
              startIcon={connecting ? <CircularProgress size={20} /> : <LinkIcon />}
              sx={{
                backgroundColor: '#3B82F6',
                '&:hover': {
                  backgroundColor: '#2563EB',
                },
              }}
            >
              {connecting ? 'Connecting...' : 'Connect'}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default IntegrationsPage;

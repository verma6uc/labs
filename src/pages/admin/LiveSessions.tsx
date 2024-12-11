import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Chip,
  IconButton,
  InputAdornment,
  Tooltip,
  Badge,
  TextField,
  useTheme,
} from '@mui/material';
import {
  Search as SearchIcon,
  Laptop as LaptopIcon,
  PhoneAndroid as PhoneIcon,
  Tablet as TabletIcon,
  Timer as TimerIcon,
  LocationOn as LocationIcon,
  Refresh as RefreshIcon,
  RemoveCircle as DisconnectIcon,
} from '@mui/icons-material';
import { mockLiveSessions, mockUsers } from '../../data/mockData';
import { formatDistanceToNow } from 'date-fns';
import AdminCard from '../../components/shared/AdminCard';

const LiveSessions = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return '#10B981';
      case 'idle':
        return '#F59E0B';
      case 'disconnected':
        return '#EF4444';
      default:
        return '#94A3B8';
    }
  };

  const getDeviceIcon = (deviceType: string) => {
    switch (deviceType) {
      case 'desktop':
        return <LaptopIcon />;
      case 'mobile':
        return <PhoneIcon />;
      case 'tablet':
        return <TabletIcon />;
      default:
        return <LaptopIcon />;
    }
  };

  const getUserName = (userId: string) => {
    const user = mockUsers.find(u => u.id === userId);
    return user ? user.name : 'Unknown User';
  };

  const filteredSessions = mockLiveSessions.filter(session =>
    getUserName(session.userId).toLowerCase().includes(searchQuery.toLowerCase()) ||
    session.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    session.browser.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ p: 3 }}>
      <AdminCard sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TimerIcon sx={{ mr: 2, color: '#0EA5E9', fontSize: 28 }} />
            <Typography variant="h5" sx={{ 
              fontWeight: 600, 
              color: theme.palette.mode === 'dark' ? '#E2E8F0' : '#1E293B' 
            }}>
              Live Sessions
            </Typography>
            <Chip
              label={`${filteredSessions.length} Active`}
              size="small"
              sx={{
                ml: 2,
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                color: '#10B981',
                fontWeight: 500,
              }}
            />
          </Box>
          <Box>
            <IconButton
              sx={{
                color: '#94A3B8',
                '&:hover': {
                  color: '#0EA5E9',
                  backgroundColor: 'rgba(14, 165, 233, 0.08)',
                },
              }}
            >
              <RefreshIcon />
            </IconButton>
          </Box>
        </Box>

        <TextField
          placeholder="Search sessions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          fullWidth
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: theme.palette.mode === 'dark' ? '#64748B' : '#94A3B8' }} />
              </InputAdornment>
            ),
            sx: {
              backgroundColor: theme.palette.mode === 'dark' ? 'rgba(17, 25, 40, 0.75)' : 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(8px)',
              border: 'none',
              '& fieldset': {
                border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
              },
              '&:hover fieldset': {
                borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
              },
            },
          }}
        />
      </AdminCard>

      <Grid container spacing={3}>
        {filteredSessions.map((session) => (
          <Grid item xs={12} md={6} lg={4} key={session.id}>
            <AdminCard>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Badge
                    variant="dot"
                    sx={{
                      '& .MuiBadge-badge': {
                        backgroundColor: getStatusColor(session.status),
                      },
                    }}
                  >
                    {getDeviceIcon(session.deviceType)}
                  </Badge>
                  <Typography variant="subtitle1" sx={{ 
                    ml: 1, 
                    color: theme.palette.mode === 'dark' ? '#E2E8F0' : '#1E293B',
                    fontWeight: 500 
                  }}>
                    {getUserName(session.userId)}
                  </Typography>
                </Box>
                <Tooltip title="Disconnect Session">
                  <IconButton
                    size="small"
                    sx={{
                      color: '#94A3B8',
                      '&:hover': {
                        color: '#EF4444',
                        backgroundColor: 'rgba(239, 68, 68, 0.08)',
                      },
                    }}
                  >
                    <DisconnectIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <LocationIcon sx={{ fontSize: 16, color: '#94A3B8', mr: 1 }} />
                <Typography variant="body2" sx={{ color: '#94A3B8' }}>
                  {session.location}
                </Typography>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ color: '#94A3B8' }}>
                  {session.browser} • {session.ipAddress}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="caption" sx={{ color: '#64748B' }}>
                  Started {formatDistanceToNow(new Date(session.startTime))} ago
                </Typography>
                <Chip
                  label={session.status}
                  size="small"
                  sx={{
                    backgroundColor: `${getStatusColor(session.status)}22`,
                    color: getStatusColor(session.status),
                    fontWeight: 500,
                  }}
                />
              </Box>
            </AdminCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LiveSessions;

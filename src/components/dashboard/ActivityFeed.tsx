import React from 'react';
import { Box, Typography, Avatar, IconButton, Tooltip } from '@mui/material';
import { formatDistanceToNow } from 'date-fns';
import {
  Launch as LaunchIcon,
  Settings as SettingsIcon,
  Security as SecurityIcon,
  People as PeopleIcon,
  Storage as StorageIcon,
} from '@mui/icons-material';

interface Activity {
  id: string;
  user: {
    name: string;
    avatar?: string;
  };
  action: string;
  target: string;
  timestamp: Date;
  type: 'user' | 'system' | 'security' | 'data';
}

interface ActivityFeedProps {
  activities: Activity[];
}

const ActivityFeed: React.FC<ActivityFeedProps> = ({ activities }) => {
  const getActionIcon = (type: Activity['type']) => {
    switch (type) {
      case 'user':
        return <PeopleIcon sx={{ fontSize: 16 }} />;
      case 'system':
        return <SettingsIcon sx={{ fontSize: 16 }} />;
      case 'security':
        return <SecurityIcon sx={{ fontSize: 16 }} />;
      case 'data':
        return <StorageIcon sx={{ fontSize: 16 }} />;
      default:
        return null;
    }
  };

  const getActionColor = (type: Activity['type']) => {
    switch (type) {
      case 'user':
        return '#3B82F6';
      case 'system':
        return '#10B981';
      case 'security':
        return '#F59E0B';
      case 'data':
        return '#8B5CF6';
      default:
        return '#64748B';
    }
  };

  return (
    <Box sx={{
      p: 2.5,
      backgroundColor: 'rgba(17, 25, 40, 0.2)',
      borderRadius: 2,
      border: '1px solid rgba(255, 255, 255, 0.05)',
      height: '100%',
      maxHeight: 400,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Typography sx={{
        color: 'rgba(148, 163, 184, 0.8)',
        fontSize: '0.875rem',
        fontWeight: 500,
        mb: 3,
      }}>
        Recent Activity
      </Typography>
      
      <Box sx={{
        overflow: 'auto',
        flex: 1,
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          background: 'rgba(148, 163, 184, 0.1)',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'rgba(148, 163, 184, 0.2)',
          borderRadius: '4px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: 'rgba(148, 163, 184, 0.3)',
        },
      }}>
        {activities.map((activity) => (
          <Box
            key={activity.id}
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 1.5,
              mb: 2,
              p: 1.5,
              borderRadius: 1,
              transition: 'background-color 0.2s',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
              },
            }}
          >
            <Avatar
              src={activity.user.avatar}
              sx={{
                width: 32,
                height: 32,
                backgroundColor: !activity.user.avatar ? getActionColor(activity.type) : undefined,
              }}
            >
              {!activity.user.avatar && getActionIcon(activity.type)}
            </Avatar>

            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 1 }}>
                <Typography sx={{
                  color: '#E2E8F0',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  mb: 0.5,
                }}>
                  {activity.user.name}
                </Typography>
                <Typography sx={{
                  color: 'rgba(148, 163, 184, 0.6)',
                  fontSize: '0.75rem',
                  whiteSpace: 'nowrap',
                }}>
                  {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
                </Typography>
              </Box>
              
              <Typography sx={{
                color: 'rgba(148, 163, 184, 0.8)',
                fontSize: '0.875rem',
                mb: 0.5,
              }}>
                {activity.action} <span style={{ color: '#E2E8F0' }}>{activity.target}</span>
              </Typography>
            </Box>

            <Tooltip title="View details">
              <IconButton
                size="small"
                sx={{
                  color: 'rgba(148, 163, 184, 0.6)',
                  '&:hover': {
                    color: '#E2E8F0',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  },
                }}
              >
                <LaunchIcon sx={{ fontSize: 16 }} />
              </IconButton>
            </Tooltip>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ActivityFeed;

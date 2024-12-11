import React, { useState, useEffect } from 'react';
import { Box, Typography, InputBase, IconButton, Tooltip } from '@mui/material';
import { Search as SearchIcon, Notifications as NotificationsIcon } from '@mui/icons-material';

interface WelcomeBannerProps {
  userName: string;
  onSearch?: (query: string) => void;
}

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ userName, onSearch }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const formatDate = () => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(currentTime);
  };

  const formatTime = () => {
    return currentTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <Box sx={{
      p: 3,
      backgroundColor: 'rgba(17, 25, 40, 0.2)',
      borderRadius: 2,
      border: '1px solid rgba(255, 255, 255, 0.05)',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle at top right, rgba(59, 130, 246, 0.1), transparent 70%)',
        opacity: 0.5,
      },
    }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        position: 'relative',
        zIndex: 1,
      }}>
        <Box>
          <Typography sx={{
            color: '#E2E8F0',
            fontSize: { xs: '1.5rem', sm: '1.875rem' },
            fontWeight: 600,
            mb: 1,
            lineHeight: 1.2,
          }}>
            {getGreeting()}, {userName}
          </Typography>
          
          <Typography sx={{
            color: 'rgba(148, 163, 184, 0.8)',
            fontSize: '0.875rem',
            display: 'flex',
            gap: 0.5,
          }}>
            {formatDate()} • {formatTime()}
          </Typography>
        </Box>

        <Box sx={{
          display: 'flex',
          gap: 2,
          alignItems: 'center',
        }}>
          <Box sx={{
            display: { xs: 'none', sm: 'flex' },
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 2,
            px: 2,
            height: 40,
          }}>
            <InputBase
              placeholder="Quick search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleSearch}
              sx={{
                color: '#E2E8F0',
                fontSize: '0.875rem',
                '& input::placeholder': {
                  color: 'rgba(148, 163, 184, 0.6)',
                  opacity: 1,
                },
              }}
            />
            <IconButton
              size="small"
              onClick={() => onSearch?.(searchQuery)}
              sx={{
                color: 'rgba(148, 163, 184, 0.6)',
                '&:hover': {
                  color: '#E2E8F0',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                },
              }}
            >
              <SearchIcon />
            </IconButton>
          </Box>

          <Tooltip title="Notifications">
            <IconButton
              size="large"
              sx={{
                color: 'rgba(148, 163, 184, 0.6)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                '&:hover': {
                  color: '#E2E8F0',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <NotificationsIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

export default WelcomeBanner;

import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Tooltip,
  Chip,
} from '@mui/material';
import { LogoutOutlined } from '@mui/icons-material';
import { format } from 'date-fns';

interface Session {
  id: string;
  deviceInfo: string;
  ipAddress: string;
  lastActivityAt: string;
  isActive: boolean;
  createdAt: string;
}

const SessionHistory = () => {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    try {
      const response = await fetch('/api/auth/sessions', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch sessions');
      }

      const data = await response.json();
      setSessions(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleTerminateSession = async (sessionId: string) => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ sessionId }),
      });

      if (!response.ok) {
        throw new Error('Failed to terminate session');
      }

      // Refresh sessions list
      fetchSessions();
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return <Typography>Loading sessions...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Session History
      </Typography>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Device</TableCell>
              <TableCell>IP Address</TableCell>
              <TableCell>Started</TableCell>
              <TableCell>Last Activity</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sessions.map((session) => (
              <TableRow key={session.id}>
                <TableCell>{session.deviceInfo || 'Unknown Device'}</TableCell>
                <TableCell>{session.ipAddress}</TableCell>
                <TableCell>
                  {format(new Date(session.createdAt), 'MMM d, yyyy HH:mm')}
                </TableCell>
                <TableCell>
                  {format(new Date(session.lastActivityAt), 'MMM d, yyyy HH:mm')}
                </TableCell>
                <TableCell>
                  <Chip
                    label={session.isActive ? 'Active' : 'Terminated'}
                    color={session.isActive ? 'success' : 'default'}
                    size="small"
                  />
                </TableCell>
                <TableCell align="right">
                  {session.isActive && (
                    <Tooltip title="Terminate Session">
                      <IconButton
                        size="small"
                        color="error"
                        onClick={() => handleTerminateSession(session.id)}
                      >
                        <LogoutOutlined />
                      </IconButton>
                    </Tooltip>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SessionHistory;

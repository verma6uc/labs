import React, { useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Chip,
  InputAdornment,
  TextField,
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Search as SearchIcon,
} from '@mui/icons-material';
import AdminButton from '../../components/shared/AdminButton';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  lastActive: string;
}

const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Admin',
    email: 'john.admin@creatorlabs.com',
    role: 'SUPERADMIN',
    status: 'active',
    lastActive: 'about 1 year ago',
  },
  // Add more mock users as needed
];

const UserManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const getInitials = (name: string) => {
    const names = name.split(' ');
    return names.length > 1 
      ? `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase()
      : `${names[0][0]}${names[0][1]}`.toUpperCase();
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return '#10B981';
      case 'inactive':
        return '#EF4444';
      default:
        return '#F59E0B';
    }
  };

  return (
    <Box sx={{ 
      backgroundColor: 'rgba(17, 25, 40, 0.75)',
      backdropFilter: 'blur(20px)',
      borderRadius: 2,
      border: '1px solid rgba(255, 255, 255, 0.1)',
      p: 2,
    }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        mb: 3,
      }}>
        <Typography variant="h5" sx={{ 
          color: '#E2E8F0',
          fontWeight: 600,
        }}>
          User Management
        </Typography>
        <AdminButton
          startIcon={<EditIcon />}
          onClick={() => {/* handle add user */}}
        >
          Add User
        </AdminButton>
      </Box>

      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search users..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{
          mb: 3,
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 2,
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.1)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.2)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#0EA5E9',
            },
          },
          '& .MuiOutlinedInput-input': {
            color: '#E2E8F0',
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: '#94A3B8' }} />
            </InputAdornment>
          ),
        }}
      />

      <TableContainer component={Paper} sx={{ 
        backgroundColor: 'transparent',
        backgroundImage: 'none',
        boxShadow: 'none',
      }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#94A3B8', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pl: 0 }}>User</TableCell>
              <TableCell sx={{ color: '#94A3B8', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Role</TableCell>
              <TableCell sx={{ color: '#94A3B8', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Status</TableCell>
              <TableCell sx={{ color: '#94A3B8', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>Last Active</TableCell>
              <TableCell sx={{ color: '#94A3B8', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pr: 0 }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell sx={{ 
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  pl: 0,
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ 
                      bgcolor: 'rgba(14, 165, 233, 0.2)',
                      color: '#0EA5E9',
                      fontWeight: 600,
                    }}>
                      {getInitials(user.name)}
                    </Avatar>
                    <Box>
                      <Typography sx={{ color: '#E2E8F0', fontWeight: 500 }}>
                        {user.name}
                      </Typography>
                      <Typography sx={{ color: '#94A3B8', fontSize: '0.875rem' }}>
                        {user.email}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell sx={{ 
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                }}>
                  <Chip
                    label={user.role}
                    sx={{
                      backgroundColor: 'rgba(14, 165, 233, 0.2)',
                      color: '#0EA5E9',
                      fontWeight: 500,
                    }}
                  />
                </TableCell>
                <TableCell sx={{ 
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                }}>
                  <Chip
                    label={user.status}
                    sx={{
                      backgroundColor: `${getStatusColor(user.status)}20`,
                      color: getStatusColor(user.status),
                      fontWeight: 500,
                    }}
                  />
                </TableCell>
                <TableCell sx={{ 
                  color: '#94A3B8',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                }}>
                  {user.lastActive}
                </TableCell>
                <TableCell sx={{ 
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  pr: 0,
                }}>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <AdminButton
                      buttonType="secondary"
                      isIconButton
                      onClick={() => {/* handle edit */}}
                    >
                      <EditIcon sx={{ fontSize: 20 }} />
                    </AdminButton>
                    <AdminButton
                      buttonType="secondary"
                      isIconButton
                      onClick={() => {/* handle delete */}}
                    >
                      <DeleteIcon sx={{ fontSize: 20 }} />
                    </AdminButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserManagement;

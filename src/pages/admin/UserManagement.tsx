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
  Chip,
  IconButton,
  TablePagination,
} from '@mui/material';
import { StyledButton, StyledCard, StyledSearchField } from '../../components/shared/StyledComponents';
import { StyledEditIcon, StyledDeleteIcon, StyledAddIcon } from '../../components/shared/StyledIcons';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  lastActive: string;
}

// Mock data
const mockUsers: User[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'CREATOR',
    status: 'active',
    lastActive: '2023-12-10 15:30',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'USER',
    status: 'inactive',
    lastActive: '2023-12-09 12:45',
  },
  // Add more mock users as needed
];

const UserManagement = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredUsers = mockUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEditUser = (user: User) => {
    console.log('Edit user:', user);
  };

  const handleDeleteUser = (user: User) => {
    console.log('Delete user:', user);
  };

  const handleAddUser = () => {
    console.log('Add user');
  };

  const handleExportData = () => {
    console.log('Export data');
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" sx={{ 
          fontWeight: 600,
          background: 'linear-gradient(to right, #fff, #94A3B8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          User Management
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <StyledButton
            variant="outlined"
            startIcon={<StyledAddIcon />}
            onClick={handleAddUser}
          >
            Add User
          </StyledButton>
          <StyledButton
            variant="outlined"
            onClick={handleExportData}
          >
            Export Data
          </StyledButton>
        </Box>
      </Box>

      <StyledCard>
        <Box sx={{ p: 2 }}>
          <StyledSearchField
            fullWidth
            placeholder="Search users..."
            size="small"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: '#94A3B8', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>Name</TableCell>
                <TableCell sx={{ color: '#94A3B8', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>Email</TableCell>
                <TableCell sx={{ color: '#94A3B8', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>Role</TableCell>
                <TableCell sx={{ color: '#94A3B8', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>Status</TableCell>
                <TableCell sx={{ color: '#94A3B8', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>Last Active</TableCell>
                <TableCell sx={{ color: '#94A3B8', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user) => (
                  <TableRow key={user.id} sx={{ '&:last-child td': { border: 0 } }}>
                    <TableCell sx={{ color: '#fff', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>{user.name}</TableCell>
                    <TableCell sx={{ color: '#fff', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>{user.email}</TableCell>
                    <TableCell sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      <Chip
                        label={user.role}
                        size="small"
                        sx={{
                          backgroundColor: user.role === 'CREATOR' ? 'rgba(14, 165, 233, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                          color: user.role === 'CREATOR' ? '#0EA5E9' : '#818CF8',
                          fontWeight: 500,
                        }}
                      />
                    </TableCell>
                    <TableCell sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      <Chip
                        label={user.status}
                        size="small"
                        sx={{
                          backgroundColor: user.status === 'active' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                          color: user.status === 'active' ? '#22C55E' : '#EF4444',
                          fontWeight: 500,
                        }}
                      />
                    </TableCell>
                    <TableCell sx={{ color: '#94A3B8', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>{user.lastActive}</TableCell>
                    <TableCell sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <StyledButton
                          variant="outlined"
                          className="icon"
                          onClick={() => handleEditUser(user)}
                          sx={{
                            color: '#94A3B8',
                            borderColor: 'rgba(148, 163, 184, 0.2)',
                            '&:hover': {
                              color: '#0EA5E9',
                              borderColor: '#0EA5E9',
                              backgroundColor: 'rgba(14, 165, 233, 0.08)',
                            },
                          }}
                        >
                          <StyledEditIcon fontSize="small" />
                        </StyledButton>
                        <StyledButton
                          variant="outlined"
                          className="icon"
                          onClick={() => handleDeleteUser(user)}
                          sx={{
                            color: '#94A3B8',
                            borderColor: 'rgba(148, 163, 184, 0.2)',
                            '&:hover': {
                              color: '#EF4444',
                              borderColor: '#EF4444',
                              backgroundColor: 'rgba(239, 68, 68, 0.08)',
                            },
                          }}
                        >
                          <StyledDeleteIcon fontSize="small" />
                        </StyledButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          component="div"
          count={filteredUsers.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            color: '#94A3B8',
            '.MuiTablePagination-select': {
              color: '#fff',
            },
            '.MuiTablePagination-selectIcon': {
              color: '#94A3B8',
            },
            '.MuiTablePagination-actions': {
              color: '#94A3B8',
            },
          }}
        />
      </StyledCard>
    </Box>
  );
};

export default UserManagement;

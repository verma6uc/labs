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
  TableSortLabel,
  Chip,
  IconButton,
  TablePagination,
  TextField,
  InputAdornment,
  Avatar,
  Tooltip,
  useTheme,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { StyledButton } from '../../components/shared/StyledComponents';
import { StyledEditIcon, StyledDeleteIcon, StyledAddIcon } from '../../components/shared/StyledIcons';
import { mockUsers } from '../../data/mockData';
import { formatDistanceToNow } from 'date-fns';
import AdminCard from '../../components/shared/AdminCard';

type Order = 'asc' | 'desc';
type OrderBy = 'name' | 'role' | 'status' | 'lastActive';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  lastActive: string;
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const UserManagement = () => {
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<OrderBy>('name');

  const handleRequestSort = (property: OrderBy) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setPage(0);
  };

  const filteredUsers = mockUsers.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedUsers = filteredUsers.sort(getComparator(order, orderBy));

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return {
          color: '#10B981',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
        };
      case 'inactive':
        return {
          color: '#EF4444',
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
        };
      default:
        return {
          color: '#F59E0B',
          backgroundColor: 'rgba(245, 158, 11, 0.1)',
        };
    }
  };

  const getRoleColor = (role: string) => {
    switch (role.toUpperCase()) {
      case 'SUPERADMIN':
        return {
          color: '#8B5CF6',
          backgroundColor: 'rgba(139, 92, 246, 0.1)',
        };
      case 'CREATOR':
        return {
          color: '#3B82F6',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
        };
      case 'USER':
        return {
          color: '#6366F1',
          backgroundColor: 'rgba(99, 102, 241, 0.1)',
        };
      default:
        return {
          color: '#9CA3AF',
          backgroundColor: 'rgba(156, 163, 175, 0.1)',
        };
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <AdminCard sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4" sx={{ 
            color: theme.palette.mode === 'dark' ? '#E2E8F0' : '#1E293B',
            fontWeight: 600 
          }}>
            User Management
          </Typography>
          <StyledButton
            startIcon={<StyledAddIcon />}
            onClick={() => {}}
            sx={{ px: 3 }}
          >
            Add User
          </StyledButton>
        </Box>

        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search users..."
          value={searchQuery}
          onChange={handleSearchChange}
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

      <AdminCard noPadding>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: theme.palette.mode === 'dark' ? '#94A3B8' : '#475569', fontWeight: 600 }}>User</TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'role'}
                    direction={orderBy === 'role' ? order : 'asc'}
                    onClick={() => handleRequestSort('role')}
                    sx={{
                      color: theme.palette.mode === 'dark' ? '#94A3B8' : '#475569',
                      fontWeight: 600,
                      '&.MuiTableSortLabel-active': {
                        color: '#0EA5E9',
                      },
                      '& .MuiTableSortLabel-icon': {
                        color: '#0EA5E9 !important',
                      },
                    }}
                  >
                    Role
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'status'}
                    direction={orderBy === 'status' ? order : 'asc'}
                    onClick={() => handleRequestSort('status')}
                    sx={{
                      color: theme.palette.mode === 'dark' ? '#94A3B8' : '#475569',
                      fontWeight: 600,
                      '&.MuiTableSortLabel-active': {
                        color: '#0EA5E9',
                      },
                      '& .MuiTableSortLabel-icon': {
                        color: '#0EA5E9 !important',
                      },
                    }}
                  >
                    Status
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'lastActive'}
                    direction={orderBy === 'lastActive' ? order : 'asc'}
                    onClick={() => handleRequestSort('lastActive')}
                    sx={{
                      color: theme.palette.mode === 'dark' ? '#94A3B8' : '#475569',
                      fontWeight: 600,
                      '&.MuiTableSortLabel-active': {
                        color: '#0EA5E9',
                      },
                      '& .MuiTableSortLabel-icon': {
                        color: '#0EA5E9 !important',
                      },
                    }}
                  >
                    Last Active
                  </TableSortLabel>
                </TableCell>
                <TableCell align="right" sx={{ color: theme.palette.mode === 'dark' ? '#94A3B8' : '#475569', fontWeight: 600 }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedUsers
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user) => (
                  <TableRow key={user.id} hover>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar sx={{ bgcolor: '#3B82F6' }}>
                          {user.name.charAt(0)}
                        </Avatar>
                        <Box>
                          <Typography sx={{ 
                            color: theme.palette.mode === 'dark' ? '#E2E8F0' : '#1E293B',
                            fontWeight: 500 
                          }}>
                            {user.name}
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#64748B' }}>
                            {user.email}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={user.role}
                        size="small"
                        sx={{
                          ...getRoleColor(user.role),
                          fontWeight: 500,
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={user.status}
                        size="small"
                        sx={{
                          ...getStatusColor(user.status),
                          fontWeight: 500,
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ color: '#64748B' }}>
                        {formatDistanceToNow(new Date(user.lastActive), { addSuffix: true })}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Tooltip title="Edit User">
                        <IconButton 
                          size="small"
                          sx={{
                            color: theme.palette.mode === 'dark' ? '#94A3B8' : '#475569',
                            '&:hover': {
                              color: '#3B82F6',
                              backgroundColor: 'rgba(59, 130, 246, 0.1)',
                            },
                          }}
                        >
                          <StyledEditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete User">
                        <IconButton 
                          size="small"
                          sx={{
                            color: theme.palette.mode === 'dark' ? '#94A3B8' : '#475569',
                            '&:hover': {
                              color: '#EF4444',
                              backgroundColor: 'rgba(239, 68, 68, 0.1)',
                            },
                          }}
                        >
                          <StyledDeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredUsers.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{
              color: theme.palette.mode === 'dark' ? '#94A3B8' : '#475569',
              borderTop: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
              '& .MuiToolbar-root': {
                '.MuiInputBase-root': {
                  color: theme.palette.mode === 'dark' ? '#94A3B8' : '#475569',
                },
              },
            }}
          />
        </TableContainer>
      </AdminCard>
    </Box>
  );
};

export default UserManagement;

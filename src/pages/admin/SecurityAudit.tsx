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
  TablePagination,
  Chip,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  useTheme,
  TextField,
  Tooltip,
} from '@mui/material';
import {
  Search as SearchIcon,
  FilterList as FilterIcon,
  OpenInNew as OpenInNewIcon,
  Shield as ShieldIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';
import { mockAuditLogs, mockUsers } from '../../data/mockData';
import AdminCard from '../../components/shared/AdminCard';

type Order = 'asc' | 'desc';
type OrderBy = 'timestamp' | 'userId' | 'action' | 'status';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(
  order: Order,
  orderBy: OrderBy,
  getUserName: (userId: string) => string,
): (a: any, b: any) => number {
  return order === 'desc'
    ? (a, b) => {
        if (orderBy === 'userId') {
          const nameA = getUserName(a.userId);
          const nameB = getUserName(b.userId);
          return nameB.localeCompare(nameA);
        }
        return descendingComparator(a, b, orderBy);
      }
    : (a, b) => {
        if (orderBy === 'userId') {
          const nameA = getUserName(a.userId);
          const nameB = getUserName(b.userId);
          return nameA.localeCompare(nameB);
        }
        return -descendingComparator(a, b, orderBy);
      };
}

const SecurityAudit = () => {
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [order, setOrder] = useState<Order>('desc');
  const [orderBy, setOrderBy] = useState<OrderBy>('timestamp');

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return '#10B981';
      case 'failure':
        return '#EF4444';
      case 'warning':
        return '#F59E0B';
      default:
        return '#94A3B8';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircleIcon sx={{ fontSize: 16 }} />;
      case 'failure':
        return <ErrorIcon sx={{ fontSize: 16 }} />;
      case 'warning':
        return <WarningIcon sx={{ fontSize: 16 }} />;
      default:
        return null;
    }
  };

  const getUserName = (userId: string) => {
    const user = mockUsers.find(u => u.id === userId);
    return user ? user.name : 'Unknown User';
  };

  const filteredLogs = mockAuditLogs
    .filter(log => 
      (log.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
       log.details.toLowerCase().includes(searchQuery.toLowerCase()) ||
       getUserName(log.userId).toLowerCase().includes(searchQuery.toLowerCase())) &&
      (statusFilter === 'all' || log.status === statusFilter)
    );

  const sortedLogs = [...filteredLogs].sort(getComparator(order, orderBy, getUserName));

  return (
    <Box sx={{ p: 3 }}>
      <AdminCard sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <ShieldIcon sx={{ mr: 2, color: '#0EA5E9', fontSize: 28 }} />
          <Typography variant="h5" sx={{ 
            fontWeight: 600, 
            color: theme.palette.mode === 'dark' ? '#E2E8F0' : '#1E293B' 
          }}>
            Security Audit Log
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <TextField
            placeholder="Search audit logs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
            sx={{ flexGrow: 1, maxWidth: 400 }}
          />

          <FormControl sx={{ minWidth: 200 }}>
            <Select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              displayEmpty
              sx={{
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(17, 25, 40, 0.75)' : 'rgba(255, 255, 255, 0.9)',
                color: theme.palette.mode === 'dark' ? '#E2E8F0' : '#1E293B',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(14, 165, 233, 0.5)',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#0EA5E9',
                },
                '& .MuiSvgIcon-root': {
                  color: theme.palette.mode === 'dark' ? '#94A3B8' : '#64748B',
                },
              }}
              startAdornment={
                <InputAdornment position="start">
                  <FilterIcon sx={{ color: theme.palette.mode === 'dark' ? '#94A3B8' : '#64748B' }} />
                </InputAdornment>
              }
            >
              <MenuItem value="all">All Status</MenuItem>
              <MenuItem value="success">Success</MenuItem>
              <MenuItem value="failure">Failure</MenuItem>
              <MenuItem value="warning">Warning</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </AdminCard>

      <AdminCard noPadding>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'timestamp'}
                    direction={orderBy === 'timestamp' ? order : 'asc'}
                    onClick={() => handleRequestSort('timestamp')}
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
                    Timestamp
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'userId'}
                    direction={orderBy === 'userId' ? order : 'asc'}
                    onClick={() => handleRequestSort('userId')}
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
                    User
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'action'}
                    direction={orderBy === 'action' ? order : 'asc'}
                    onClick={() => handleRequestSort('action')}
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
                    Action
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={{ color: theme.palette.mode === 'dark' ? '#94A3B8' : '#475569', fontWeight: 600 }}>Details</TableCell>
                <TableCell sx={{ color: theme.palette.mode === 'dark' ? '#94A3B8' : '#475569', fontWeight: 600 }}>IP Address</TableCell>
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
                <TableCell align="right" sx={{ color: theme.palette.mode === 'dark' ? '#94A3B8' : '#475569', fontWeight: 600 }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedLogs
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((log) => (
                  <TableRow 
                    key={log.id} 
                    hover
                    sx={{ 
                      '&:hover': { 
                        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                      },
                    }}
                  >
                    <TableCell sx={{ color: theme.palette.mode === 'dark' ? '#E2E8F0' : '#1E293B' }}>
                      {new Date(log.timestamp).toLocaleString()}
                    </TableCell>
                    <TableCell sx={{ color: theme.palette.mode === 'dark' ? '#E2E8F0' : '#1E293B' }}>
                      {getUserName(log.userId)}
                    </TableCell>
                    <TableCell sx={{ color: theme.palette.mode === 'dark' ? '#E2E8F0' : '#1E293B' }}>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {log.action}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ color: theme.palette.mode === 'dark' ? '#E2E8F0' : '#1E293B' }}>
                      {log.details}
                    </TableCell>
                    <TableCell sx={{ color: theme.palette.mode === 'dark' ? '#E2E8F0' : '#1E293B' }}>
                      {log.ipAddress}
                    </TableCell>
                    <TableCell>
                      <Chip
                        icon={getStatusIcon(log.status)}
                        label={log.status}
                        size="small"
                        sx={{
                          backgroundColor: `${getStatusColor(log.status)}22`,
                          color: getStatusColor(log.status),
                          fontWeight: 500,
                          '& .MuiChip-icon': {
                            color: 'inherit',
                          },
                        }}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <Tooltip title="View Details">
                        <IconButton 
                          size="small"
                          sx={{ 
                            color: theme.palette.mode === 'dark' ? '#94A3B8' : '#64748B',
                            '&:hover': {
                              color: '#0EA5E9',
                              backgroundColor: 'rgba(14, 165, 233, 0.08)',
                            },
                          }}
                        >
                          <OpenInNewIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredLogs.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            color: theme.palette.mode === 'dark' ? '#94A3B8' : '#64748B',
            borderTop: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.1)'}`,
            '.MuiTablePagination-select': {
              color: theme.palette.mode === 'dark' ? '#E2E8F0' : '#1E293B',
            },
            '.MuiTablePagination-selectIcon': {
              color: theme.palette.mode === 'dark' ? '#94A3B8' : '#64748B',
            },
            '.MuiTablePagination-displayedRows': {
              color: theme.palette.mode === 'dark' ? '#94A3B8' : '#64748B',
            },
            '.MuiIconButton-root': {
              color: theme.palette.mode === 'dark' ? '#94A3B8' : '#64748B',
              '&.Mui-disabled': {
                color: theme.palette.mode === 'dark' ? '#475569' : '#94A3B8',
              },
              '&:hover': {
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
              },
            },
          }}
        />
      </AdminCard>
    </Box>
  );
};

export default SecurityAudit;

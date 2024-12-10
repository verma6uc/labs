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
  TablePagination,
  Chip,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import {
  Search as SearchIcon,
  FilterList as FilterIcon,
  OpenInNew as OpenInNewIcon,
  Security as SecurityIcon,
  Shield as ShieldIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';
import { mockAuditLogs, mockUsers } from '../../data/mockData';
import { StyledCard, StyledTextField } from '../../components/shared/StyledComponents';

const SecurityAudit = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

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
    )
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <ShieldIcon sx={{ mr: 2, color: '#0EA5E9', fontSize: 28 }} />
        <Typography variant="h5" sx={{ fontWeight: 600, color: '#E2E8F0' }}>
          Security Audit Log
        </Typography>
      </Box>

      <StyledCard>
        <Box sx={{ p: 3, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <StyledTextField
            placeholder="Search audit logs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#94A3B8' }} />
                </InputAdornment>
              ),
            }}
            sx={{ flexGrow: 1, maxWidth: 400 }}
          />

          <FormControl sx={{ minWidth: 200 }}>
            <Select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              displayEmpty
              sx={{
                backgroundColor: 'rgba(17, 25, 40, 0.75)',
                color: '#E2E8F0',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255, 255, 255, 0.125)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(14, 165, 233, 0.5)',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#0EA5E9',
                },
                '& .MuiSvgIcon-root': {
                  color: '#94A3B8',
                },
              }}
              startAdornment={
                <InputAdornment position="start">
                  <FilterIcon sx={{ color: '#94A3B8' }} />
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

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: '#94A3B8', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>Timestamp</TableCell>
                <TableCell sx={{ color: '#94A3B8', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>User</TableCell>
                <TableCell sx={{ color: '#94A3B8', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>Action</TableCell>
                <TableCell sx={{ color: '#94A3B8', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>Details</TableCell>
                <TableCell sx={{ color: '#94A3B8', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>IP Address</TableCell>
                <TableCell sx={{ color: '#94A3B8', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>Status</TableCell>
                <TableCell sx={{ color: '#94A3B8', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }} align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredLogs
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((log) => (
                  <TableRow 
                    key={log.id} 
                    hover
                    sx={{ 
                      '&:hover': { 
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      },
                    }}
                  >
                    <TableCell sx={{ color: '#E2E8F0', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      {new Date(log.timestamp).toLocaleString()}
                    </TableCell>
                    <TableCell sx={{ color: '#E2E8F0', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      {getUserName(log.userId)}
                    </TableCell>
                    <TableCell sx={{ color: '#E2E8F0', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {log.action}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ color: '#E2E8F0', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      {log.details}
                    </TableCell>
                    <TableCell sx={{ color: '#E2E8F0', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      {log.ipAddress}
                    </TableCell>
                    <TableCell sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
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
                    <TableCell sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }} align="right">
                      <IconButton 
                        size="small"
                        sx={{ 
                          color: '#94A3B8',
                          '&:hover': {
                            color: '#0EA5E9',
                            backgroundColor: 'rgba(14, 165, 233, 0.08)',
                          },
                        }}
                      >
                        <OpenInNewIcon fontSize="small" />
                      </IconButton>
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
            color: '#94A3B8',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            '.MuiTablePagination-select': {
              color: '#E2E8F0',
            },
            '.MuiTablePagination-selectIcon': {
              color: '#94A3B8',
            },
            '.MuiTablePagination-displayedRows': {
              color: '#94A3B8',
            },
            '.MuiIconButton-root': {
              color: '#94A3B8',
              '&.Mui-disabled': {
                color: '#475569',
              },
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
              },
            },
          }}
        />
      </StyledCard>
    </Box>
  );
};

export default SecurityAudit;

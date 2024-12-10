import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Card as MuiCard,
  CardContent,
  useTheme as useMuiTheme,
  Avatar,
  Chip,
  IconButton,
  LinearProgress,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  People as PeopleIcon,
  Storage as StorageIcon,
  Speed as SpeedIcon,
  Api as ApiIcon,
  LocationOn as LocationOnIcon,
  MoreVert as MoreVertIcon,
  Business as BusinessIcon,
  Folder as FolderIcon,
} from '@mui/icons-material';
import { mockCompanies } from '../../data/mockData';
import { StyledCard } from '../../components/shared/StyledComponents';
import { useTheme as useCustomTheme } from '../../contexts/ThemeContext';
import { getCardStyle } from '../../theme';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: string;
  color?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, trend, color }) => {
  return (
    <StyledCard sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Box
            sx={{
              p: 1.5,
              borderRadius: 2,
              backgroundColor: `${color}22`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: color,
            }}
          >
            {icon}
          </Box>
          {trend && (
            <Typography
              variant="body2"
              sx={{
                ml: 'auto',
                color: trend.startsWith('+') ? '#10B981' : '#EF4444',
                display: 'flex',
                alignItems: 'center',
                fontWeight: 500,
              }}
            >
              <TrendingUpIcon sx={{ 
                fontSize: 16, 
                mr: 0.5,
                transform: trend.startsWith('+') ? 'none' : 'rotate(180deg)',
              }} />
              {trend}
            </Typography>
          )}
        </Box>
        <Typography variant="h4" sx={{ mb: 1, fontWeight: 600, color: '#E2E8F0' }}>
          {value}
        </Typography>
        <Typography variant="body2" sx={{ color: '#94A3B8' }}>
          {title}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

const UsageCard: React.FC<{ title: string; value: number; total: number; color: string }> = ({
  title,
  value,
  total,
  color,
}) => {
  const percentage = (value / total) * 100;

  return (
    <StyledCard sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box>
            <Typography variant="h6" sx={{ color: '#E2E8F0', fontWeight: 600, mb: 0.5 }}>
              {value} GB
            </Typography>
            <Typography variant="body2" sx={{ color: '#94A3B8' }}>
              {title}
            </Typography>
          </Box>
          <Box
            sx={{
              p: 1,
              borderRadius: 1.5,
              backgroundColor: `${color}22`,
              color: color,
              fontSize: '0.75rem',
              fontWeight: 600,
            }}
          >
            {percentage.toFixed(1)}%
          </Box>
        </Box>
        <Box sx={{ position: 'relative' }}>
          <LinearProgress
            variant="determinate"
            value={percentage}
            sx={{
              height: 6,
              borderRadius: 3,
              backgroundColor: 'rgba(255,255,255,0.08)',
              '& .MuiLinearProgress-bar': {
                backgroundColor: color,
                borderRadius: 3,
              },
            }}
          />
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              color: '#94A3B8',
              mt: 1,
            }}
          >
            {value} GB of {total} GB used
          </Typography>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

interface Company {
  id: string;
  name: string;
  logo: string;
  industry: string;
  location: string;
  employeeCount: number;
  subscriptionType: string;
  projects: {
    id: string;
    name: string;
    stage: string;
    progress: number;
  }[];
}

const getStageColor = (stage: string) => {
  switch (stage) {
    case 'planning':
      return '#F59E0B';
    case 'development':
      return '#0EA5E9';
    case 'testing':
      return '#8B5CF6';
    case 'deployed':
      return '#10B981';
    default:
      return '#94A3B8';
  }
};

const CompanyCard: React.FC<{ company: Company }> = ({ company }) => {
  const { mode } = useCustomTheme();
  const theme = useMuiTheme();
  
  return (
    <MuiCard sx={getCardStyle(mode)}>
      <Box sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar
            src={company.logo}
            alt={company.name}
            sx={{ width: 48, height: 48, mr: 2 }}
          />
          <Box>
            <Typography variant="h6" sx={{ color: '#E2E8F0', fontWeight: 600 }}>
              {company.name}
            </Typography>
            <Typography variant="body2" sx={{ color: '#94A3B8' }}>
              {company.industry}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" sx={{ color: '#94A3B8', mb: 1 }}>
            <LocationOnIcon sx={{ fontSize: 16, mr: 0.5, verticalAlign: 'text-bottom' }} />
            {company.location}
          </Typography>
          <Typography variant="body2" sx={{ color: '#94A3B8' }}>
            <PeopleIcon sx={{ fontSize: 16, mr: 0.5, verticalAlign: 'text-bottom' }} />
            {company.employeeCount.toLocaleString()} employees
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle2" sx={{ color: '#E2E8F0', mb: 1 }}>
            Active Projects ({company.projects.length})
          </Typography>
          {company.projects.map((project) => (
            <Box
              key={project.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mb: 1,
                p: 1,
                borderRadius: 1,
                backgroundColor: 'rgba(148, 163, 184, 0.05)',
                '&:hover': {
                  backgroundColor: 'rgba(148, 163, 184, 0.1)',
                },
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography variant="body2" sx={{ color: '#E2E8F0', mb: 0.5 }}>
                  {project.name}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box
                    sx={{
                      width: '100px',
                      height: '4px',
                      backgroundColor: 'rgba(148, 163, 184, 0.2)',
                      borderRadius: '2px',
                      mr: 1,
                    }}
                  >
                    <Box
                      sx={{
                        width: `${project.progress}%`,
                        height: '100%',
                        backgroundColor: getStageColor(project.stage),
                        borderRadius: '2px',
                        transition: 'width 0.5s ease-in-out',
                      }}
                    />
                  </Box>
                  <Typography variant="caption" sx={{ color: '#94A3B8' }}>
                    {project.progress}%
                  </Typography>
                </Box>
              </Box>
              <Chip
                label={project.stage}
                size="small"
                sx={{
                  ml: 1,
                  backgroundColor: `${getStageColor(project.stage)}22`,
                  color: getStageColor(project.stage),
                  fontWeight: 500,
                  textTransform: 'capitalize',
                }}
              />
            </Box>
          ))}
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Chip
            label={company.subscriptionType}
            size="small"
            sx={{
              backgroundColor: company.subscriptionType === 'enterprise'
                ? 'rgba(14, 165, 233, 0.1)'
                : company.subscriptionType === 'pro'
                  ? 'rgba(139, 92, 246, 0.1)'
                  : 'rgba(245, 158, 11, 0.1)',
              color: company.subscriptionType === 'enterprise'
                ? '#0EA5E9'
                : company.subscriptionType === 'pro'
                  ? '#8B5CF6'
                  : '#F59E0B',
              fontWeight: 500,
              textTransform: 'capitalize',
            }}
          />
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
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </MuiCard>
  );
};

const Dashboard = () => {
  const theme = useMuiTheme();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: '#E2E8F0' }}>
        Dashboard Overview
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Users"
            value="1,234"
            icon={<PeopleIcon sx={{ color: '#fff' }} />}
            trend="+12.5%"
            color="#0EA5E9"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Storage Used"
            value="856 GB"
            icon={<StorageIcon sx={{ color: '#fff' }} />}
            trend="+8.2%"
            color="#6366F1"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="API Calls"
            value="2.4M"
            icon={<ApiIcon sx={{ color: '#fff' }} />}
            trend="+15.7%"
            color="#10B981"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Response Time"
            value="124ms"
            icon={<SpeedIcon sx={{ color: '#fff' }} />}
            trend="-3.2%"
            color="#F59E0B"
          />
        </Grid>
      </Grid>

      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontWeight: 600,
            color: '#E2E8F0',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <BusinessIcon sx={{ mr: 1 }} /> Active Companies
        </Typography>
        <Grid container spacing={3}>
          {mockCompanies.map((company) => (
            <Grid item xs={12} md={6} key={company.id}>
              <CompanyCard company={company} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box>
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontWeight: 600,
            color: '#E2E8F0',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <FolderIcon sx={{ mr: 1 }} /> Storage Usage
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <UsageCard
              title="Document Storage"
              value={256}
              total={1024}
              color="#0EA5E9"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <UsageCard
              title="Media Storage"
              value={512}
              total={1024}
              color="#6366F1"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <UsageCard
              title="Backup Storage"
              value={128}
              total={512}
              color="#10B981"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;

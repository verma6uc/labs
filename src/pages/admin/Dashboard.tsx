import React from 'react';
import {
  Box,
  Grid,
  Typography,
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
import { FeatureCard } from '../../components/shared/StyledComponents';
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
    <FeatureCard sx={{ height: '100%' }}>
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
            <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
              {trend === 'up' ? (
                <TrendingUpIcon sx={{ color: 'success.main', fontSize: 20 }} />
              ) : (
                <TrendingDownIcon sx={{ color: 'error.main', fontSize: 20 }} />
              )}
            </Box>
          )}
        </Box>
        <Typography variant="h4" sx={{ mb: 1 }}>
          {value}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </CardContent>
    </FeatureCard>
  );
};

interface UsageCardProps {
  title: string;
  value: number;
  total: number;
  color: string;
}

const UsageCard: React.FC<UsageCardProps> = ({ title, value, total, color }) => {
  const percentage = (value / total) * 100;

  return (
    <FeatureCard sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h4" sx={{ mb: 1 }}>
            {value.toLocaleString()}
            <Typography component="span" variant="body2" color="text.secondary">
              /{total.toLocaleString()}
            </Typography>
          </Typography>
          <LinearProgress
            variant="determinate"
            value={percentage}
            sx={{
              height: 8,
              borderRadius: 4,
              backgroundColor: `${color}22`,
              '& .MuiLinearProgress-bar': {
                backgroundColor: color,
                borderRadius: 4,
              },
            }}
          />
        </Box>
        <Typography variant="body2" color="text.secondary">
          {percentage.toFixed(1)}% of total usage
        </Typography>
      </CardContent>
    </FeatureCard>
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

const getStageColor = (stage: string): string => {
  switch (stage.toLowerCase()) {
    case 'planning':
      return '#3B82F6';
    case 'development':
      return '#10B981';
    case 'testing':
      return '#F59E0B';
    case 'deployed':
      return '#6366F1';
    default:
      return '#64748B';
  }
};

const CompanyCard: React.FC<{ company: Company }> = ({ company }) => {
  return (
    <FeatureCard>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Avatar
            src={company.logo}
            alt={company.name}
            sx={{ width: 40, height: 40, mr: 2 }}
          >
            <BusinessIcon />
          </Avatar>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6">{company.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {company.industry}
            </Typography>
          </Box>
          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <LocationOnIcon sx={{ color: 'text.secondary', mr: 1, fontSize: 20 }} />
          <Typography variant="body2" color="text.secondary">
            {company.location}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <PeopleIcon sx={{ color: 'text.secondary', mr: 1, fontSize: 20 }} />
          <Typography variant="body2" color="text.secondary">
            {company.employeeCount.toLocaleString()} employees
          </Typography>
          <Chip
            label={company.subscriptionType}
            size="small"
            sx={{ ml: 'auto' }}
            color="primary"
          />
        </Box>

        <Typography variant="subtitle2" sx={{ mb: 2 }}>
          Active Projects ({company.projects.length})
        </Typography>

        {company.projects.map((project) => (
          <Box
            key={project.id}
            sx={{
              mb: 2,
              p: 1.5,
              borderRadius: 1,
              bgcolor: 'background.default',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <FolderIcon sx={{ color: 'text.secondary', mr: 1, fontSize: 20 }} />
              <Typography variant="body2">{project.name}</Typography>
              <Chip
                label={project.stage}
                size="small"
                sx={{
                  ml: 'auto',
                  bgcolor: `${getStageColor(project.stage)}22`,
                  color: getStageColor(project.stage),
                  fontWeight: 500,
                }}
              />
            </Box>
            <LinearProgress
              variant="determinate"
              value={project.progress}
              sx={{
                height: 6,
                borderRadius: 3,
                bgcolor: `${getStageColor(project.stage)}22`,
                '& .MuiLinearProgress-bar': {
                  bgcolor: getStageColor(project.stage),
                },
              }}
            />
          </Box>
        ))}
      </CardContent>
    </FeatureCard>
  );
};

const Dashboard: React.FC = () => {
  const theme = useMuiTheme();
  const { mode } = useCustomTheme();

  const stats = [
    {
      title: 'Total Users',
      value: '2,847',
      icon: <PeopleIcon />,
      trend: 'up',
      color: theme.palette.primary.main,
    },
    {
      title: 'API Calls',
      value: '1.2M',
      icon: <ApiIcon />,
      trend: 'up',
      color: theme.palette.success.main,
    },
    {
      title: 'Storage Used',
      value: '857GB',
      icon: <StorageIcon />,
      trend: 'down',
      color: theme.palette.warning.main,
    },
    {
      title: 'Avg Response Time',
      value: '124ms',
      icon: <SpeedIcon />,
      color: theme.palette.info.main,
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        {/* Stats Cards */}
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <FeatureCard sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      backgroundColor: `${stat.color}22`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: stat.color,
                    }}
                  >
                    {stat.icon}
                  </Box>
                  {stat.trend && (
                    <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
                      {stat.trend === 'up' ? (
                        <TrendingUpIcon sx={{ color: 'success.main', fontSize: 20 }} />
                      ) : (
                        <TrendingDownIcon sx={{ color: 'error.main', fontSize: 20 }} />
                      )}
                    </Box>
                  )}
                </Box>
                <Typography variant="h4" sx={{ mb: 1 }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.title}
                </Typography>
              </CardContent>
            </FeatureCard>
          </Grid>
        ))}

        {/* Usage Cards */}
        <Grid item xs={12} sm={6} md={4}>
          <FeatureCard sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                CPU Usage
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="h4" sx={{ mb: 1 }}>
                  68
                  <Typography component="span" variant="body2" color="text.secondary">
                    /100
                  </Typography>
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={68}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: `${theme.palette.primary.main}22`,
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 4,
                    },
                  }}
                />
              </Box>
              <Typography variant="body2" color="text.secondary">
                68% of total usage
              </Typography>
            </CardContent>
          </FeatureCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FeatureCard sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Memory Usage
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="h4" sx={{ mb: 1 }}>
                  4.2
                  <Typography component="span" variant="body2" color="text.secondary">
                    /8
                  </Typography>
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={52.5}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: `${theme.palette.success.main}22`,
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: theme.palette.success.main,
                      borderRadius: 4,
                    },
                  }}
                />
              </Box>
              <Typography variant="body2" color="text.secondary">
                52.5% of total usage
              </Typography>
            </CardContent>
          </FeatureCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FeatureCard sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Storage Usage
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="h4" sx={{ mb: 1 }}>
                  857
                  <Typography component="span" variant="body2" color="text.secondary">
                    /1000
                  </Typography>
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={85.7}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: `${theme.palette.warning.main}22`,
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: theme.palette.warning.main,
                      borderRadius: 4,
                    },
                  }}
                />
              </Box>
              <Typography variant="body2" color="text.secondary">
                85.7% of total usage
              </Typography>
            </CardContent>
          </FeatureCard>
        </Grid>

        {/* Company Cards */}
        {mockCompanies.map((company) => (
          <Grid item xs={12} md={6} key={company.id}>
            <CompanyCard company={company} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;

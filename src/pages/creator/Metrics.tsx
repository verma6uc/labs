import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  Tabs,
  Tab,
  Chip,
  Avatar,
  AvatarGroup,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
} from '@mui/material';
import {
  MoreVert as MoreVertIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  Add as AddIcon,
  Download as DownloadIcon,
  DateRange as DateRangeIcon,
  Refresh as RefreshIcon,
  Person as PersonIcon,
  Star as StarIcon,
  Timeline as TimelineIcon,
  Visibility as VisibilityIcon,
  ThumbUp as ThumbUpIcon,
  Comment as CommentIcon,
  Share as ShareIcon,
} from '@mui/icons-material';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

// Enhanced mock data
const performanceData = [
  { name: 'Jan', views: 400, likes: 240, shares: 100 },
  { name: 'Feb', views: 300, likes: 180, shares: 80 },
  { name: 'Mar', views: 600, likes: 360, shares: 150 },
  { name: 'Apr', views: 800, likes: 480, shares: 200 },
  { name: 'May', views: 700, likes: 420, shares: 175 },
  { name: 'Jun', views: 900, likes: 540, shares: 225 },
];

const projectMetrics = [
  { name: 'Active Projects', value: 8, color: '#3B82F6' },
  { name: 'In Review', value: 3, color: '#F59E0B' },
  { name: 'Completed', value: 12, color: '#10B981' },
  { name: 'On Hold', value: 2, color: '#8B5CF6' },
];

const topProjects = [
  {
    title: 'AI-Powered Content Creator',
    views: 12500,
    likes: 843,
    comments: 156,
    growth: 23.5,
  },
  {
    title: 'Smart Home Dashboard',
    views: 9800,
    likes: 654,
    comments: 98,
    growth: 15.2,
  },
  {
    title: 'E-commerce Analytics',
    views: 8200,
    likes: 521,
    comments: 87,
    growth: 18.7,
  },
];

const audienceData = [
  { name: 'Developers', value: 35 },
  { name: 'Designers', value: 25 },
  { name: 'Product Managers', value: 20 },
  { name: 'Entrepreneurs', value: 20 },
];

const COLORS = ['#3B82F6', '#F59E0B', '#10B981', '#8B5CF6'];

const projectsData = [
  {
    id: 1,
    title: 'AI Content Generator',
    description: 'An AI-powered tool for generating marketing content',
    status: 'Active',
    progress: 75,
    team: ['John D.', 'Sarah M.', 'Mike R.'],
    metrics: {
      views: 15000,
      engagement: 82,
      conversion: 4.2,
    },
    lastUpdated: '2024-12-10',
  },
  {
    id: 2,
    title: 'Smart Analytics Dashboard',
    description: 'Real-time analytics visualization platform',
    status: 'In Review',
    progress: 90,
    team: ['Emma S.', 'Alex K.'],
    metrics: {
      views: 12000,
      engagement: 76,
      conversion: 3.8,
    },
    lastUpdated: '2024-12-09',
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    description: 'Modern e-commerce solution with AI recommendations',
    status: 'Completed',
    progress: 100,
    team: ['Chris L.', 'Diana P.', 'Tom H.'],
    metrics: {
      views: 18000,
      engagement: 88,
      conversion: 5.1,
    },
    lastUpdated: '2024-12-08',
  },
];

const audienceMetrics = {
  demographics: [
    { age: '18-24', percentage: 15 },
    { age: '25-34', percentage: 35 },
    { age: '35-44', percentage: 25 },
    { age: '45-54', percentage: 15 },
    { age: '55+', percentage: 10 },
  ],
  locations: [
    { country: 'United States', users: 45 },
    { country: 'United Kingdom', users: 15 },
    { country: 'Germany', users: 12 },
    { country: 'India', users: 10 },
    { country: 'Others', users: 18 },
  ],
  devices: [
    { type: 'Desktop', percentage: 55 },
    { type: 'Mobile', percentage: 35 },
    { type: 'Tablet', percentage: 10 },
  ],
};

const engagementMetrics = {
  daily: [
    { hour: '00:00', users: 120 },
    { hour: '04:00', users: 80 },
    { hour: '08:00', users: 450 },
    { hour: '12:00', users: 760 },
    { hour: '16:00', users: 890 },
    { hour: '20:00', users: 560 },
  ],
  interactions: [
    { type: 'Views', count: 45000 },
    { type: 'Likes', count: 12500 },
    { type: 'Comments', count: 3800 },
    { type: 'Shares', count: 2100 },
  ],
  retention: [
    { day: 1, rate: 100 },
    { day: 7, rate: 65 },
    { day: 14, rate: 48 },
    { day: 30, rate: 35 },
  ],
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`metrics-tabpanel-${index}`}
      aria-labelledby={`metrics-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const MetricsPage: React.FC = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleTimeRangeChange = (event: SelectChangeEvent) => {
    setTimeRange(event.target.value);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <Box sx={{ height: '100%', overflow: 'auto' }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Box>
            <Typography variant="h5" sx={{ color: '#E2E8F0', fontWeight: 600 }}>
              Metrics & Performance
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(148, 163, 184, 0.8)', mt: 1 }}>
              Track your project metrics and audience engagement
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <FormControl
              size="small"
              sx={{
                minWidth: 120,
                '& .MuiOutlinedInput-root': {
                  color: '#E2E8F0',
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                  },
                },
              }}
            >
              <Select
                value={timeRange}
                onChange={handleTimeRangeChange}
                displayEmpty
                startAdornment={<DateRangeIcon sx={{ mr: 1, color: 'rgba(148, 163, 184, 0.8)' }} />}
              >
                <MenuItem value="24h">Last 24 hours</MenuItem>
                <MenuItem value="7d">Last 7 days</MenuItem>
                <MenuItem value="30d">Last 30 days</MenuItem>
                <MenuItem value="90d">Last 90 days</MenuItem>
              </Select>
            </FormControl>
            <Button
              startIcon={<RefreshIcon />}
              sx={{
                color: '#E2E8F0',
                backgroundColor: 'rgba(17, 25, 40, 0.6)',
                '&:hover': {
                  backgroundColor: 'rgba(17, 25, 40, 0.8)',
                },
              }}
            >
              Refresh
            </Button>
            <Button
              startIcon={<DownloadIcon />}
              sx={{
                color: '#E2E8F0',
                backgroundColor: 'rgba(17, 25, 40, 0.6)',
                '&:hover': {
                  backgroundColor: 'rgba(17, 25, 40, 0.8)',
                },
              }}
            >
              Export Report
            </Button>
          </Box>
        </Box>

        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          sx={{
            borderBottom: 1,
            borderColor: 'rgba(255, 255, 255, 0.1)',
            '& .MuiTab-root': {
              color: 'rgba(148, 163, 184, 0.8)',
              '&.Mui-selected': {
                color: '#E2E8F0',
              },
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#3B82F6',
            },
          }}
        >
          <Tab label="Overview" />
          <Tab label="Projects" />
          <Tab label="Audience" />
          <Tab label="Engagement" />
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={0}>
        {/* Overview Tab */}
        <Grid container spacing={3}>
          {/* Project Status Distribution */}
          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 3,
                backgroundColor: 'rgba(17, 25, 40, 0.6)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                height: '100%',
              }}
            >
              <Typography sx={{ color: '#E2E8F0', fontWeight: 500, mb: 3 }}>
                Project Status
              </Typography>
              <Box sx={{ height: 300, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <ResponsiveContainer width="100%" height="70%">
                  <PieChart>
                    <Pie
                      data={projectMetrics}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {projectMetrics.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(17, 25, 40, 0.95)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '4px',
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <Box sx={{ mt: 2, width: '100%' }}>
                  {projectMetrics.map((item) => (
                    <Box
                      key={item.name}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mb: 1,
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box
                          sx={{
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            backgroundColor: item.color,
                            mr: 1,
                          }}
                        />
                        <Typography sx={{ color: 'rgba(148, 163, 184, 0.8)', fontSize: '0.875rem' }}>
                          {item.name}
                        </Typography>
                      </Box>
                      <Typography sx={{ color: '#E2E8F0', fontWeight: 500 }}>
                        {item.value}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* Performance Trends */}
          <Grid item xs={12} md={8}>
            <Paper
              sx={{
                p: 3,
                backgroundColor: 'rgba(17, 25, 40, 0.6)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                height: '100%',
              }}
            >
              <Typography sx={{ color: '#E2E8F0', fontWeight: 500, mb: 3 }}>
                Performance Trends
              </Typography>
              <Box sx={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                    <XAxis
                      dataKey="name"
                      stroke="rgba(148, 163, 184, 0.8)"
                      tick={{ fill: 'rgba(148, 163, 184, 0.8)' }}
                    />
                    <YAxis
                      stroke="rgba(148, 163, 184, 0.8)"
                      tick={{ fill: 'rgba(148, 163, 184, 0.8)' }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(17, 25, 40, 0.95)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '4px',
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="views"
                      stroke="#3B82F6"
                      strokeWidth={2}
                      dot={{ fill: '#3B82F6' }}
                    />
                    <Line
                      type="monotone"
                      dataKey="likes"
                      stroke="#10B981"
                      strokeWidth={2}
                      dot={{ fill: '#10B981' }}
                    />
                    <Line
                      type="monotone"
                      dataKey="shares"
                      stroke="#8B5CF6"
                      strokeWidth={2}
                      dot={{ fill: '#8B5CF6' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </Paper>
          </Grid>

          {/* Top Performing Projects */}
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 3,
                backgroundColor: 'rgba(17, 25, 40, 0.6)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <Typography sx={{ color: '#E2E8F0', fontWeight: 500, mb: 3 }}>
                Top Performing Projects
              </Typography>
              <List>
                {topProjects.map((project, index) => (
                  <React.Fragment key={project.title}>
                    <ListItem
                      sx={{
                        py: 2,
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        },
                      }}
                    >
                      <Grid container alignItems="center" spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar
                              sx={{
                                bgcolor: COLORS[index % COLORS.length],
                                width: 40,
                                height: 40,
                              }}
                            >
                              {project.title.charAt(0)}
                            </Avatar>
                            <Box sx={{ ml: 2 }}>
                              <Typography sx={{ color: '#E2E8F0', fontWeight: 500 }}>
                                {project.title}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{ color: 'rgba(148, 163, 184, 0.8)' }}
                              >
                                {project.growth > 0 ? '+' : ''}{project.growth}% growth
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Box
                            sx={{
                              display: 'flex',
                              gap: 3,
                              justifyContent: { xs: 'flex-start', sm: 'flex-end' },
                              mt: { xs: 2, sm: 0 },
                            }}
                          >
                            <Box sx={{ textAlign: 'center' }}>
                              <VisibilityIcon sx={{ color: '#3B82F6', mb: 0.5 }} />
                              <Typography sx={{ color: '#E2E8F0' }}>
                                {project.views.toLocaleString()}
                              </Typography>
                            </Box>
                            <Box sx={{ textAlign: 'center' }}>
                              <ThumbUpIcon sx={{ color: '#10B981', mb: 0.5 }} />
                              <Typography sx={{ color: '#E2E8F0' }}>
                                {project.likes.toLocaleString()}
                              </Typography>
                            </Box>
                            <Box sx={{ textAlign: 'center' }}>
                              <CommentIcon sx={{ color: '#8B5CF6', mb: 0.5 }} />
                              <Typography sx={{ color: '#E2E8F0' }}>
                                {project.comments.toLocaleString()}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </ListItem>
                    {index < topProjects.length - 1 && (
                      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                    )}
                  </React.Fragment>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        {/* Projects Tab Content */}
        <Grid container spacing={3}>
          {/* Project Filters */}
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                backgroundColor: 'rgba(17, 25, 40, 0.6)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={4}>
                  <FormControl fullWidth size="small">
                    <InputLabel sx={{ color: 'rgba(148, 163, 184, 0.8)' }}>Status</InputLabel>
                    <Select
                      label="Status"
                      value="all"
                      sx={{
                        color: '#E2E8F0',
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'rgba(255, 255, 255, 0.1)',
                        },
                      }}
                    >
                      <MenuItem value="all">All Status</MenuItem>
                      <MenuItem value="active">Active</MenuItem>
                      <MenuItem value="review">In Review</MenuItem>
                      <MenuItem value="completed">Completed</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <FormControl fullWidth size="small">
                    <InputLabel sx={{ color: 'rgba(148, 163, 184, 0.8)' }}>Sort By</InputLabel>
                    <Select
                      label="Sort By"
                      value="date"
                      sx={{
                        color: '#E2E8F0',
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'rgba(255, 255, 255, 0.1)',
                        },
                      }}
                    >
                      <MenuItem value="date">Last Updated</MenuItem>
                      <MenuItem value="views">Most Views</MenuItem>
                      <MenuItem value="engagement">Highest Engagement</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<AddIcon />}
                    sx={{
                      backgroundColor: '#3B82F6',
                      '&:hover': {
                        backgroundColor: '#2563EB',
                      },
                    }}
                  >
                    New Project
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* Project Cards */}
          {projectsData.map((project) => (
            <Grid item xs={12} key={project.id}>
              <Paper
                sx={{
                  p: 3,
                  backgroundColor: 'rgba(17, 25, 40, 0.6)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Box>
                      <Typography variant="h6" sx={{ color: '#E2E8F0', mb: 1 }}>
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: 'rgba(148, 163, 184, 0.8)', mb: 2 }}
                      >
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                        <Chip
                          label={project.status}
                          size="small"
                          sx={{
                            backgroundColor:
                              project.status === 'Active'
                                ? 'rgba(59, 130, 246, 0.2)'
                                : project.status === 'In Review'
                                ? 'rgba(245, 158, 11, 0.2)'
                                : 'rgba(16, 185, 129, 0.2)',
                            color:
                              project.status === 'Active'
                                ? '#3B82F6'
                                : project.status === 'In Review'
                                ? '#F59E0B'
                                : '#10B981',
                          }}
                        />
                        <Chip
                          label={`${project.progress}% Complete`}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(139, 92, 246, 0.2)',
                            color: '#8B5CF6',
                          }}
                        />
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <AvatarGroup max={3}>
                          {project.team.map((member, index) => (
                            <Avatar
                              key={index}
                              sx={{
                                width: 24,
                                height: 24,
                                fontSize: '0.75rem',
                                backgroundColor: COLORS[index % COLORS.length],
                              }}
                            >
                              {member.split(' ').map((n) => n[0]).join('')}
                            </Avatar>
                          ))}
                        </AvatarGroup>
                        <Typography
                          variant="body2"
                          sx={{ color: 'rgba(148, 163, 184, 0.8)' }}
                        >
                          Last updated: {project.lastUpdated}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <Box sx={{ textAlign: 'center' }}>
                          <VisibilityIcon sx={{ color: '#3B82F6', mb: 1 }} />
                          <Typography sx={{ color: '#E2E8F0', fontWeight: 500 }}>
                            {project.metrics.views.toLocaleString()}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: 'rgba(148, 163, 184, 0.8)' }}
                          >
                            Views
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <Box sx={{ textAlign: 'center' }}>
                          <ThumbUpIcon sx={{ color: '#10B981', mb: 1 }} />
                          <Typography sx={{ color: '#E2E8F0', fontWeight: 500 }}>
                            {project.metrics.engagement}%
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: 'rgba(148, 163, 184, 0.8)' }}
                          >
                            Engagement
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <Box sx={{ textAlign: 'center' }}>
                          <TrendingUpIcon sx={{ color: '#8B5CF6', mb: 1 }} />
                          <Typography sx={{ color: '#E2E8F0', fontWeight: 500 }}>
                            {project.metrics.conversion}%
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: 'rgba(148, 163, 184, 0.8)' }}
                          >
                            Conversion
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        {/* Audience Tab Content */}
        <Grid container spacing={3}>
          {/* Demographics */}
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 3,
                backgroundColor: 'rgba(17, 25, 40, 0.6)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <Typography sx={{ color: '#E2E8F0', fontWeight: 500, mb: 3 }}>
                Age Distribution
              </Typography>
              <Box sx={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={audienceMetrics.demographics}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                    <XAxis
                      dataKey="age"
                      stroke="rgba(148, 163, 184, 0.8)"
                      tick={{ fill: 'rgba(148, 163, 184, 0.8)' }}
                    />
                    <YAxis
                      stroke="rgba(148, 163, 184, 0.8)"
                      tick={{ fill: 'rgba(148, 163, 184, 0.8)' }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(17, 25, 40, 0.95)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '4px',
                      }}
                    />
                    <Bar dataKey="percentage" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </Paper>
          </Grid>

          {/* Geographical Distribution */}
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 3,
                backgroundColor: 'rgba(17, 25, 40, 0.6)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <Typography sx={{ color: '#E2E8F0', fontWeight: 500, mb: 3 }}>
                Geographical Distribution
              </Typography>
              <Box sx={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={audienceMetrics.locations}
                      dataKey="users"
                      nameKey="country"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label
                    >
                      {audienceMetrics.locations.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(17, 25, 40, 0.95)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '4px',
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
            </Paper>
          </Grid>

          {/* Device Distribution */}
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 3,
                backgroundColor: 'rgba(17, 25, 40, 0.6)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <Typography sx={{ color: '#E2E8F0', fontWeight: 500, mb: 3 }}>
                Device Usage
              </Typography>
              <Grid container spacing={3}>
                {audienceMetrics.devices.map((device, index) => (
                  <Grid item xs={12} md={4} key={device.type}>
                    <Box
                      sx={{
                        textAlign: 'center',
                        p: 3,
                        borderRadius: 1,
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      }}
                    >
                      <Typography variant="h4" sx={{ color: COLORS[index % COLORS.length], mb: 1 }}>
                        {device.percentage}%
                      </Typography>
                      <Typography sx={{ color: '#E2E8F0' }}>{device.type}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={tabValue} index={3}>
        {/* Engagement Tab Content */}
        <Grid container spacing={3}>
          {/* Daily Activity */}
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 3,
                backgroundColor: 'rgba(17, 25, 40, 0.6)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <Typography sx={{ color: '#E2E8F0', fontWeight: 500, mb: 3 }}>
                Daily Activity
              </Typography>
              <Box sx={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={engagementMetrics.daily}>
                    <defs>
                      <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.1} />
                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                    <XAxis
                      dataKey="hour"
                      stroke="rgba(148, 163, 184, 0.8)"
                      tick={{ fill: 'rgba(148, 163, 184, 0.8)' }}
                    />
                    <YAxis
                      stroke="rgba(148, 163, 184, 0.8)"
                      tick={{ fill: 'rgba(148, 163, 184, 0.8)' }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(17, 25, 40, 0.95)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '4px',
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="users"
                      stroke="#3B82F6"
                      fillOpacity={1}
                      fill="url(#colorUsers)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Box>
            </Paper>
          </Grid>

          {/* Interaction Metrics */}
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 3,
                backgroundColor: 'rgba(17, 25, 40, 0.6)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <Typography sx={{ color: '#E2E8F0', fontWeight: 500, mb: 3 }}>
                Interactions
              </Typography>
              <Grid container spacing={2}>
                {engagementMetrics.interactions.map((interaction, index) => (
                  <Grid item xs={6} key={interaction.type}>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: 1,
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        textAlign: 'center',
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{ color: COLORS[index % COLORS.length], mb: 1 }}
                      >
                        {interaction.count.toLocaleString()}
                      </Typography>
                      <Typography sx={{ color: '#E2E8F0' }}>{interaction.type}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>

          {/* Retention Rate */}
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 3,
                backgroundColor: 'rgba(17, 25, 40, 0.6)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <Typography sx={{ color: '#E2E8F0', fontWeight: 500, mb: 3 }}>
                Retention Rate
              </Typography>
              <Box sx={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={engagementMetrics.retention}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                    <XAxis
                      dataKey="day"
                      stroke="rgba(148, 163, 184, 0.8)"
                      tick={{ fill: 'rgba(148, 163, 184, 0.8)' }}
                    />
                    <YAxis
                      stroke="rgba(148, 163, 184, 0.8)"
                      tick={{ fill: 'rgba(148, 163, 184, 0.8)' }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(17, 25, 40, 0.95)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '4px',
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="rate"
                      stroke="#10B981"
                      strokeWidth={2}
                      dot={{ fill: '#10B981' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </TabPanel>

      {/* Menu */}
      <Menu
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(17, 25, 40, 0.95)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            '& .MuiMenuItem-root': {
              color: '#E2E8F0',
              fontSize: '0.875rem',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
              },
            },
          },
        }}
      >
        <MenuItem>
          <DownloadIcon sx={{ mr: 2 }} /> Download Report
        </MenuItem>
        <MenuItem>
          <ShareIcon sx={{ mr: 2 }} /> Share
        </MenuItem>
        <MenuItem>
          <TimelineIcon sx={{ mr: 2 }} /> View Timeline
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default MetricsPage;

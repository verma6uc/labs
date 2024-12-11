import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Tabs,
  Tab,
  Tooltip,
  Snackbar,
  Alert,
  TextField,
  useTheme,
} from '@mui/material';
import { mockSettings } from '../../data/mockData';
import { StyledButton } from '../../components/shared/StyledComponents';
import { StyledInfoIcon, StyledSaveIcon, StyledRefreshIcon } from '../../components/shared/StyledIcons';
import AdminCard from '../../components/shared/AdminCard';

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
      id={`settings-tabpanel-${index}`}
      aria-labelledby={`settings-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
};

const SystemSettings = () => {
  const theme = useTheme();
  const [currentTab, setCurrentTab] = useState(0);
  const [settings, setSettings] = useState(mockSettings);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  const handleSettingChange = (id: string, value: string) => {
    setSettings(
      settings.map((setting) =>
        setting.id === id ? { 
          ...setting, 
          value,
          lastUpdated: new Date().toISOString(),
        } : setting
      )
    );
  };

  const handleSave = () => {
    try {
      // In a real app, this would be an API call
      console.log('Saving settings:', settings);
      
      setSnackbar({
        open: true,
        message: 'Settings saved successfully',
        severity: 'success',
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Failed to save settings',
        severity: 'error',
      });
    }
  };

  const handleReset = () => {
    setSettings(mockSettings);
    setSnackbar({
      open: true,
      message: 'Settings reset to default values',
      severity: 'success',
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const renderSettingFields = (category: string) => {
    const categorySettings = settings.filter((s) => s.category === category);

    return (
      <Grid container spacing={3}>
        {categorySettings.map((setting) => (
          <Grid item xs={12} md={6} key={setting.id}>
            <AdminCard>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant="subtitle1" sx={{ 
                  fontWeight: 600,
                  color: theme.palette.mode === 'dark' ? '#E2E8F0' : '#1E293B'
                }}>
                  {setting.name}
                </Typography>
                <Tooltip title={setting.description} arrow placement="top">
                  <Box sx={{ ml: 1, display: 'flex', alignItems: 'center' }}>
                    <StyledInfoIcon fontSize="small" />
                  </Box>
                </Tooltip>
              </Box>
              <TextField
                fullWidth
                value={setting.value}
                onChange={(e) => handleSettingChange(setting.id, e.target.value)}
                size="small"
                placeholder={`Enter ${setting.name.toLowerCase()}`}
                variant="outlined"
                InputProps={{
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
              <Typography
                variant="caption"
                sx={{ 
                  display: 'block',
                  mt: 1,
                  color: theme.palette.mode === 'dark' ? '#94A3B8' : '#64748B'
                }}
              >
                Last updated: {new Date(setting.lastUpdated).toLocaleString()}
              </Typography>
            </AdminCard>
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Box sx={{ p: 3 }}>
      <AdminCard sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" sx={{
            fontWeight: 600,
            color: theme.palette.mode === 'dark' ? '#E2E8F0' : '#1E293B'
          }}>
            System Settings
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <StyledButton
              variant="outlined"
              startIcon={<StyledRefreshIcon />}
              onClick={handleReset}
            >
              Reset
            </StyledButton>
            <StyledButton
              variant="contained"
              startIcon={<StyledSaveIcon />}
              onClick={handleSave}
            >
              Save Changes
            </StyledButton>
          </Box>
        </Box>

        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          sx={{
            borderBottom: 1,
            borderColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.1)',
            '& .MuiTabs-indicator': {
              backgroundColor: '#0EA5E9',
            },
            '& .MuiTab-root': {
              color: theme.palette.mode === 'dark' ? '#94A3B8' : '#64748B',
              '&.Mui-selected': {
                color: '#0EA5E9',
              },
            },
          }}
        >
          <Tab label="General" />
          <Tab label="Security" />
          <Tab label="Notifications" />
        </Tabs>

        <TabPanel value={currentTab} index={0}>
          {renderSettingFields('general')}
        </TabPanel>
        <TabPanel value={currentTab} index={1}>
          {renderSettingFields('security')}
        </TabPanel>
        <TabPanel value={currentTab} index={2}>
          {renderSettingFields('notifications')}
        </TabPanel>
      </AdminCard>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ 
            width: '100%',
            backgroundColor: snackbar.severity === 'success' ? '#059669' : '#DC2626',
            color: '#ffffff'
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SystemSettings;

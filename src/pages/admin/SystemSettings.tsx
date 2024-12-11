import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Tabs,
  Tab,
  Divider,
  Tooltip,
  Snackbar,
  Alert,
} from '@mui/material';
import {
  Save as SaveIcon,
  Refresh as RefreshIcon,
  Info as InfoIcon,
} from '@mui/icons-material';
import { mockSettings } from '../../data/mockData';
import { StyledButton, FeatureCard, StyledTextField } from '../../components/shared/StyledComponents';
import { StyledInfoIcon, StyledSaveIcon, StyledRefreshIcon } from '../../components/shared/StyledIcons';

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
      
      // Show success message
      setSnackbar({
        open: true,
        message: 'Settings saved successfully',
        severity: 'success',
      });
    } catch (error) {
      // Show error message
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
            <FeatureCard>
              <Box sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Typography variant="subtitle1" sx={{ 
                    fontWeight: 600,
                    color: '#E2E8F0'
                  }}>
                    {setting.name}
                  </Typography>
                  <Tooltip title={setting.description} arrow placement="top">
                    <Box sx={{ ml: 1, display: 'flex', alignItems: 'center' }}>
                      <StyledInfoIcon fontSize="small" />
                    </Box>
                  </Tooltip>
                </Box>
                <StyledTextField
                  fullWidth
                  value={setting.value}
                  onChange={(e) => handleSettingChange(setting.id, e.target.value)}
                  size="small"
                  placeholder={`Enter ${setting.name.toLowerCase()}`}
                />
                <Typography
                  variant="caption"
                  sx={{ 
                    display: 'block',
                    mt: 1,
                    color: '#94A3B8'
                  }}
                >
                  Last updated: {new Date(setting.lastUpdated).toLocaleString()}
                </Typography>
              </Box>
            </FeatureCard>
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" sx={{
          fontWeight: 600,
          color: '#E2E8F0'
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

      <FeatureCard>
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          sx={{
            borderBottom: 1,
            borderColor: 'rgba(255, 255, 255, 0.08)',
            '& .MuiTabs-indicator': {
              backgroundColor: '#0EA5E9',
            },
            '& .MuiTab-root': {
              color: '#94A3B8',
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
      </FeatureCard>

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

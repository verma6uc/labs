import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  IconButton,
  Button,
  Tabs,
  Tab,
  Drawer,
  TextField,
  Tooltip,
  Chip,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  Save as SaveIcon,
  Preview as PreviewIcon,
  Code as CodeIcon,
  Download as ExportIcon,
  Add as AddIcon,
  DragIndicator as DragIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  ViewModule as TemplateIcon,
  SmartToy as AIIcon,
  Architecture as BlueprintIcon,
  Description as PRDIcon,
} from '@mui/icons-material';

interface Section {
  id: string;
  type: string;
  title: string;
  content: string;
  children?: Section[];
}

interface Template {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}

const sectionTemplates: Template[] = [
  {
    id: 'hero',
    name: 'Hero Section',
    description: 'Main landing section with headline and CTA',
    icon: <TemplateIcon />,
  },
  {
    id: 'features',
    name: 'Feature Grid',
    description: 'Display key features in a grid layout',
    icon: <TemplateIcon />,
  },
  {
    id: 'testimonials',
    name: 'Testimonials',
    description: 'Customer testimonials carousel',
    icon: <TemplateIcon />,
  },
  {
    id: 'pricing',
    name: 'Pricing Table',
    description: 'Pricing plans comparison',
    icon: <TemplateIcon />,
  },
];

const BlueprintPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [templateDrawer, setTemplateDrawer] = useState(false);
  const [sections, setSections] = useState<Section[]>([]);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleAddSection = (template: Template) => {
    const newSection: Section = {
      id: Math.random().toString(36).substr(2, 9),
      type: template.id,
      title: template.name,
      content: '',
    };
    setSections([...sections, newSection]);
    setTemplateDrawer(false);
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="h5" sx={{ color: '#E2E8F0', fontWeight: 600 }}>
              Blueprint Editor
            </Typography>
            <Chip
              label="Draft"
              size="small"
              sx={{
                backgroundColor: 'rgba(245, 158, 11, 0.1)',
                color: '#F59E0B',
                borderRadius: 1,
              }}
            />
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              startIcon={<SaveIcon />}
              sx={{
                color: '#E2E8F0',
                backgroundColor: 'rgba(17, 25, 40, 0.6)',
                '&:hover': {
                  backgroundColor: 'rgba(17, 25, 40, 0.8)',
                },
              }}
            >
              Save
            </Button>
            <Button
              startIcon={<PreviewIcon />}
              sx={{
                color: '#E2E8F0',
                backgroundColor: 'rgba(17, 25, 40, 0.6)',
                '&:hover': {
                  backgroundColor: 'rgba(17, 25, 40, 0.8)',
                },
              }}
            >
              Preview
            </Button>
            <Button
              startIcon={<ExportIcon />}
              variant="contained"
              sx={{
                backgroundColor: '#3B82F6',
                '&:hover': {
                  backgroundColor: '#2563EB',
                },
              }}
            >
              Export PRD
            </Button>
          </Box>
        </Box>

        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          sx={{
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            '& .MuiTabs-indicator': {
              backgroundColor: '#3B82F6',
            },
          }}
        >
          <Tab
            icon={<BlueprintIcon sx={{ fontSize: 20 }} />}
            label="Blueprint"
            sx={{
              color: activeTab === 0 ? '#3B82F6' : 'rgba(148, 163, 184, 0.8)',
              '&.Mui-selected': {
                color: '#3B82F6',
              },
            }}
          />
          <Tab
            icon={<PRDIcon sx={{ fontSize: 20 }} />}
            label="PRD"
            sx={{
              color: activeTab === 1 ? '#3B82F6' : 'rgba(148, 163, 184, 0.8)',
              '&.Mui-selected': {
                color: '#3B82F6',
              },
            }}
          />
          <Tab
            icon={<CodeIcon sx={{ fontSize: 20 }} />}
            label="Code"
            sx={{
              color: activeTab === 2 ? '#3B82F6' : 'rgba(148, 163, 184, 0.8)',
              '&.Mui-selected': {
                color: '#3B82F6',
              },
            }}
          />
        </Tabs>
      </Box>

      {/* Blueprint Editor */}
      <Grid container spacing={3}>
        {/* Main Editor */}
        <Grid item xs={12} md={8}>
          <Paper
            sx={{
              backgroundColor: 'rgba(17, 25, 40, 0.6)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              p: 3,
              minHeight: 600,
            }}
          >
            {sections.length === 0 ? (
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 2,
                  p: 4,
                }}
              >
                <TemplateIcon sx={{ fontSize: 48, color: 'rgba(148, 163, 184, 0.8)' }} />
                <Typography sx={{ color: '#E2E8F0', textAlign: 'center' }}>
                  Start building your blueprint by adding sections
                </Typography>
                <Button
                  variant="outlined"
                  startIcon={<AddIcon />}
                  onClick={() => setTemplateDrawer(true)}
                  sx={{
                    color: '#3B82F6',
                    borderColor: '#3B82F6',
                    '&:hover': {
                      borderColor: '#2563EB',
                      backgroundColor: 'rgba(59, 130, 246, 0.05)',
                    },
                  }}
                >
                  Add Section
                </Button>
              </Box>
            ) : (
              <Box sx={{ minHeight: 600 }}>
                {sections.map((section) => (
                  <Box
                    key={section.id}
                    sx={{
                      mb: 2,
                      p: 2,
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      borderRadius: 1,
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      cursor: 'move',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                      <DragIcon sx={{ color: 'rgba(148, 163, 184, 0.8)' }} />
                      <Typography sx={{ color: '#E2E8F0', flex: 1 }}>
                        {section.title}
                      </Typography>
                      <IconButton
                        size="small"
                        sx={{ color: 'rgba(148, 163, 184, 0.8)' }}
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        size="small"
                        sx={{ color: 'rgba(148, 163, 184, 0.8)' }}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Box>
                    <TextField
                      multiline
                      rows={4}
                      fullWidth
                      placeholder="Add section content..."
                      value={section.content}
                      onChange={(e) => {
                        const updatedSections = sections.map((s) =>
                          s.id === section.id ? { ...s, content: e.target.value } : s
                        );
                        setSections(updatedSections);
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: '#E2E8F0',
                          '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.1)',
                          },
                        },
                      }}
                    />
                  </Box>
                ))}
                <Button
                  startIcon={<AddIcon />}
                  onClick={() => setTemplateDrawer(true)}
                  sx={{
                    color: '#3B82F6',
                    '&:hover': {
                      backgroundColor: 'rgba(59, 130, 246, 0.05)',
                    },
                  }}
                >
                  Add Section
                </Button>
              </Box>
            )}
          </Paper>
        </Grid>

        {/* AI Assistant */}
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              backgroundColor: 'rgba(17, 25, 40, 0.6)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              p: 3,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
              <AIIcon sx={{ color: '#8B5CF6' }} />
              <Typography sx={{ color: '#E2E8F0', fontWeight: 500 }}>
                AI Assistant
              </Typography>
            </Box>
            
            <Box
              sx={{
                p: 2,
                backgroundColor: 'rgba(139, 92, 246, 0.1)',
                borderRadius: 1,
                mb: 2,
              }}
            >
              <Typography sx={{ color: '#E2E8F0', fontSize: '0.875rem', mb: 1 }}>
                Suggestions for your blueprint:
              </Typography>
              <Typography sx={{ color: 'rgba(148, 163, 184, 0.8)', fontSize: '0.875rem' }}>
                Consider adding a user testimonials section to build trust with potential customers.
              </Typography>
            </Box>

            <TextField
              fullWidth
              placeholder="Ask AI for suggestions..."
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: '#E2E8F0',
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                  },
                },
              }}
            />
          </Paper>
        </Grid>
      </Grid>

      {/* Templates Drawer */}
      <Drawer
        anchor="right"
        open={templateDrawer}
        onClose={() => setTemplateDrawer(false)}
        PaperProps={{
          sx: {
            width: 400,
            backgroundColor: 'rgba(17, 25, 40, 0.95)',
            backdropFilter: 'blur(8px)',
            borderLeft: '1px solid rgba(255, 255, 255, 0.05)',
          },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ color: '#E2E8F0', mb: 3 }}>
            Add Section
          </Typography>
          <Grid container spacing={2}>
            {sectionTemplates.map((template) => (
              <Grid item xs={12} key={template.id}>
                <Paper
                  onClick={() => handleAddSection(template)}
                  sx={{
                    p: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    {template.icon}
                    <Box>
                      <Typography sx={{ color: '#E2E8F0' }}>
                        {template.name}
                      </Typography>
                      <Typography sx={{ color: 'rgba(148, 163, 184, 0.8)', fontSize: '0.875rem' }}>
                        {template.description}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Drawer>
    </Box>
  );
};

export default BlueprintPage;

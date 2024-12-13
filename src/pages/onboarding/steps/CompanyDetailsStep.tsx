import React, { useState } from 'react';
import { Box, TextField, Typography, Stack, Paper, Grid, Button, IconButton, Chip } from '@mui/material';
import { useOnboarding } from '../context/OnboardingContext';
import StepNavigation from '../components/StepNavigation';
import { StepProps } from '../types';
import EditIcon from '@mui/icons-material/Edit';
import LanguageIcon from '@mui/icons-material/Language';
import CategoryIcon from '@mui/icons-material/Category';
import DescriptionIcon from '@mui/icons-material/Description';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { motion } from 'framer-motion';
import {
  onboardingContainerStyles,
  onboardingContentStyles,
  paperStyles,
  textFieldStyles,
  sectionHeaderStyles,
  sectionTitleStyles,
  sectionContentStyles,
  navigationContainerStyles,
  buttonStyles,
  formFieldStyles,
  emptyStateStyles
} from '../styles/OnboardingStyles';

interface Product {
  name: string;
  category: string;
}

const CompanyDetailsStep: React.FC<StepProps> = ({ onNext, onBack }) => {
  const { state, dispatch } = useOnboarding();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isEditing, setIsEditing] = useState(!state.isExistingCompany);
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState({ name: '', category: '' });
  const [showProductForm, setShowProductForm] = useState(false);

  const handleChange = (field: string, value: string) => {
    setErrors((prev) => ({ ...prev, [field]: '' }));
    dispatch({
      type: 'UPDATE_COMPANY',
      payload: { [field]: value },
    });
  };

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.category) {
      setProducts([...products, newProduct]);
      setNewProduct({ name: '', category: '' });
      setShowProductForm(false);
    }
  };

  const handleRemoveProduct = (index: number) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  const validateFields = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!state.company.industry?.trim()) {
      newErrors.industry = 'Industry is required';
    }
    
    if (!state.company.description?.trim()) {
      newErrors.description = 'Description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateFields()) {
      onNext();
    }
  };

  return (
    <Box sx={onboardingContainerStyles}>
      <Box sx={onboardingContentStyles}>
        <Grid container spacing={2}>
          {/* Left Column - Company Details */}
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={paperStyles}>
              <Box sx={sectionHeaderStyles}>
                <Typography sx={sectionTitleStyles}>
                  Company Details
                </Typography>
              </Box>

              <Box sx={sectionContentStyles}>
                <Stack spacing={2}>
                  <Box sx={formFieldStyles}>
                    <Typography variant="subtitle2" component="label">
                      <CategoryIcon fontSize="small" /> Industry
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="e.g., Software & Technology"
                      value={state.company.industry || ''}
                      onChange={(e) => handleChange('industry', e.target.value)}
                      error={!!errors.industry}
                      helperText={errors.industry}
                      sx={textFieldStyles}
                      size="small"
                    />
                  </Box>

                  <Box sx={formFieldStyles}>
                    <Typography variant="subtitle2" component="label">
                      <DescriptionIcon fontSize="small" /> Description
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="Tell us about your company..."
                      value={state.company.description || ''}
                      onChange={(e) => handleChange('description', e.target.value)}
                      error={!!errors.description}
                      helperText={errors.description}
                      multiline
                      rows={3}
                      sx={textFieldStyles}
                      size="small"
                    />
                  </Box>
                </Stack>
              </Box>
            </Paper>
          </Grid>

          {/* Right Column - Products */}
          <Grid item xs={12} md={6}>
            <Paper elevation={0} sx={paperStyles}>
              <Box sx={sectionHeaderStyles}>
                <Typography sx={sectionTitleStyles}>
                  Products & Services
                </Typography>
                <Button
                  startIcon={<AddCircleIcon />}
                  onClick={() => setShowProductForm(true)}
                  sx={buttonStyles.secondary}
                  size="small"
                >
                  Add
                </Button>
              </Box>

              <Box sx={sectionContentStyles}>
                {showProductForm && (
                  <Box sx={{ mb: 2, p: 2, backgroundColor: 'rgba(14, 165, 233, 0.1)', borderRadius: 1 }}>
                    <Stack spacing={2}>
                      <TextField
                        fullWidth
                        label="Product Name"
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        sx={textFieldStyles}
                        size="small"
                      />
                      <TextField
                        fullWidth
                        label="Category"
                        value={newProduct.category}
                        onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                        sx={textFieldStyles}
                        size="small"
                      />
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button
                          variant="contained"
                          onClick={handleAddProduct}
                          disabled={!newProduct.name || !newProduct.category}
                          sx={buttonStyles.primary}
                          size="small"
                        >
                          Add
                        </Button>
                        <Button
                          variant="outlined"
                          onClick={() => {
                            setShowProductForm(false);
                            setNewProduct({ name: '', category: '' });
                          }}
                          sx={buttonStyles.secondary}
                          size="small"
                        >
                          Cancel
                        </Button>
                      </Box>
                    </Stack>
                  </Box>
                )}

                {products.length === 0 ? (
                  <Box sx={emptyStateStyles}>
                    <ShoppingBagIcon sx={{ fontSize: 32, color: 'rgba(255, 255, 255, 0.2)', mb: 1 }} />
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                      No products added yet
                    </Typography>
                  </Box>
                ) : (
                  <Stack spacing={1}>
                    {products.map((product, index) => (
                      <Box
                        key={index}
                        sx={{
                          p: 1.5,
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          borderRadius: 1,
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Box>
                          <Typography variant="body2" sx={{ color: '#fff', mb: 0.5 }}>
                            {product.name}
                          </Typography>
                          <Chip
                            label={product.category}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(14, 165, 233, 0.2)',
                              color: '#0EA5E9',
                              height: '20px',
                            }}
                          />
                        </Box>
                        <IconButton
                          onClick={() => handleRemoveProduct(index)}
                          sx={{ color: 'rgba(255, 255, 255, 0.5)', padding: 0.5 }}
                          size="small"
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    ))}
                  </Stack>
                )}
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Box sx={navigationContainerStyles}>
          <StepNavigation
            onNext={handleNext}
            onBack={onBack}
            isNextDisabled={false}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CompanyDetailsStep;

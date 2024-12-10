import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ExampleCardProps {
  title: string;
  description: string;
  image?: string;
}

const CardWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(15, 23, 42, 0.6)'
    : 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  border: `1px solid ${theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.1)' 
    : 'rgba(0, 0, 0, 0.1)'}`,
  transition: 'all 0.3s ease-in-out',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-4px)',
    backgroundColor: theme.palette.mode === 'dark'
      ? 'rgba(15, 23, 42, 0.8)'
      : 'rgba(255, 255, 255, 0.9)',
    border: '1px solid rgba(14, 165, 233, 0.3)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 8px 32px rgba(0, 0, 0, 0.2)'
      : '0 8px 32px rgba(14, 165, 233, 0.1)',
  },
}));

const ImageWrapper = styled(Box)({
  width: '100%',
  height: '160px',
  borderRadius: '8px',
  overflow: 'hidden',
  marginBottom: '16px',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

const ExampleCard: React.FC<ExampleCardProps> = ({
  title,
  description,
  image,
}) => {
  const theme = useTheme();

  return (
    <CardWrapper>
      {image && (
        <ImageWrapper>
          <img src={image} alt={title} />
        </ImageWrapper>
      )}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          mb: 1,
          color: theme.palette.mode === 'dark' ? '#E2E8F0' : '#1E293B',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: theme.palette.mode === 'dark' ? '#94A3B8' : '#475569',
          flex: 1,
        }}
      >
        {description}
      </Typography>
    </CardWrapper>
  );
};

export default ExampleCard;

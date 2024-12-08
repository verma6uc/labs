import { AppBar, Toolbar, Typography, Button, Box, styled, Container } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import BeakerIcon from './BeakerIcon'

const StyledButton = styled(Button)({
  textTransform: 'none',
  fontSize: '0.875rem',
  fontWeight: 500,
  padding: '6px 12px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
});

const LoginButton = styled(Button)({
  textTransform: 'none',
  fontSize: '0.875rem',
  fontWeight: 500,
  padding: '6px 16px',
  backgroundColor: '#0EA5E9',
  '&:hover': {
    backgroundColor: '#0284C7',
  },
});

const Navbar = () => {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: 'rgba(17, 24, 39, 0.8)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: 'none',
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
        <Toolbar sx={{ py: 1.5, px: '0 !important' }}>
          <Typography 
            component={RouterLink} 
            to="/" 
            sx={{ 
              textDecoration: 'none', 
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              flexGrow: { xs: 1, md: 0 },
              mr: { md: 8 },
              fontSize: '1.25rem',
              fontWeight: 600,
            }}
          >
            <BeakerIcon sx={{ color: '#0EA5E9', fontSize: 24 }} />
            Creator Labs
          </Typography>
          
          <Box sx={{ 
            display: { xs: 'none', md: 'flex' }, 
            alignItems: 'center',
            gap: 2,
            flexGrow: 1,
          }}>
            <StyledButton color="inherit" component={RouterLink} to="/">
              Home
            </StyledButton>
            <StyledButton color="inherit" component={RouterLink} to="/features">
              Features
            </StyledButton>
            <StyledButton color="inherit" component={RouterLink} to="/solutions">
              Solutions
            </StyledButton>
            <StyledButton color="inherit" component={RouterLink} to="/agents">
              Agents
            </StyledButton>
            <StyledButton color="inherit" component={RouterLink} to="/journey">
              Journey
            </StyledButton>
          </Box>

          <LoginButton 
            variant="contained" 
            component={RouterLink} 
            to="/login"
            disableElevation
          >
            Login
          </LoginButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar

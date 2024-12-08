import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import theme from './theme';
import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';

// Main Pages
import Home from './pages/Home';
import Features from './pages/Features';
import Solutions from './pages/Solutions';
import Agents from './pages/Agents';
import Journey from './pages/Journey';

// Auth Pages
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import SessionHistory from './pages/auth/SessionHistory';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Box 
            component="main"
            sx={{
              minHeight: '100vh',
              backgroundColor: 'transparent',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
              <ParticlesBackground />
            </Box>
            <Navbar />
            <Box sx={{ flex: 1, position: 'relative', zIndex: 1 }}>
              <Routes>
                {/* Auth Routes */}
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/signup" element={<Signup />} />
                <Route path="/auth/forgot-password" element={<ForgotPassword />} />
                <Route path="/auth/reset-password" element={<ResetPassword />} />
                <Route path="/auth/session-history" element={<SessionHistory />} />

                {/* Main Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/features" element={<Features />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/journey" element={<Journey />} />
                <Route path="/agents" element={<Agents />} />

                {/* Redirect unknown routes to home */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Box>
          </Box>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;

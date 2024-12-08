import { ThemeProvider, CssBaseline } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import theme from './theme'
import Layout from './components/Layout'
import ParticlesBackground from './components/ParticlesBackground'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Features from './pages/Features';
import Solutions from './pages/Solutions';
import Agents from './pages/Agents';
import Journey from './pages/Journey';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div style={{ position: 'relative' }}>
          <ParticlesBackground />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/journey" element={<Journey />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App

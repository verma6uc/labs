import { Box, Container } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from '../pages/Home'

const Layout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </Box>
  )
}

export default Layout

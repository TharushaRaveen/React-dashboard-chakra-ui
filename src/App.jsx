import './index.css';
import React from 'react';
import { Box } from '@chakra-ui/react';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Box minHeight="100vh">
      <Dashboard />
    </Box>
  );
}

export default App;
import React from 'react';
import './App.css';
import { Box } from '@mui/material';
import AppBarComp from './component/AppBar/AppBar';

function App() {
  return (
    <Box data-testid = "App-test-id">
      <AppBarComp/>
    </Box>
  );
}

export default App;

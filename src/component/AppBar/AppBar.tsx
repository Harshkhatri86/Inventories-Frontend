import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';


export default function AppBarComp() {
  return (
    <Box sx={{ flexGrow: 1 }} data-testid = "AppBar-test-id">
      <AppBar position="static">
        <Toolbar >
          <Typography component={"h5"} variant='h5'>
            Inventory
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

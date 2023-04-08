import React, {useContext} from 'react';
import {AppBar, Box, Toolbar, Typography, Button, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { DashboardContext } from '../components/DashboardContextProvider';

export default function NavBar() {
  const {logoutUser} = useContext(DashboardContext)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: '#27ae60'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TAGout
          </Typography>
          <Button onClick={e => logoutUser()} color="inherit">Sign out</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

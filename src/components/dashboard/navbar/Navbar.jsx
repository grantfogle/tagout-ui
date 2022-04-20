import * as React from 'react';
import {AppBar, Box, Toolbar, Typography, Button, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar({logout}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: '#27ae60'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TAGout
          </Typography>
          <Button onClick={e => logout()} color="inherit">Sign out</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

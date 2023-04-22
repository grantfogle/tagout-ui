import React, { useContext } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AuthButtons from './authButtons/AuthButtons'
// import TagoutLogo from '../../../assets/tagout-logo.png'

export default function NavBar() {



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation="0" sx={{ backgroundColor: '#27ae60' }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            color="white"
            sx={{ flexGrow: 1 }}>
            TAGout
          </Typography>
          {/* <Box>
            <img style={{height: '40px'}} src={TagoutLogo} alt="Tagout Logo"></img>
          </Box> */}
          {/* <Button color="inherit" sx={{color: '#fff', mr:1}}>Pricing</Button> */}
          {/* <Button color="inherit" sx={{color: '#fff', mr:1}}>Features</Button> */}
          <AuthButtons />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

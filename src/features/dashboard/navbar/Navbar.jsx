import React, {useContext} from 'react';
import {AppBar, Box, Toolbar, Typography, Button, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// import TagoutLogo from '../../../assets/tagout-logo.png'
import { DashboardContext } from '../components/DashboardContextProvider';

export default function NavBar() {
  const {logoutUser} = useContext(DashboardContext)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: '#27ae60'}}>
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
          <Button 
            color="inherit"
            sx={{color: '#fff'}}
            onClick={e => logoutUser()}
            >
            Sign out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

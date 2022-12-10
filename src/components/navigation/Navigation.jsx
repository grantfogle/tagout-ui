import * as React from 'react';
import {AppBar, Box, Toolbar, Typography, Button, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { LocalGroceryStoreOutlined } from '@mui/icons-material';

export default function NavBar({}) {

    const {loggedIn, setLoggedIn} = false;
    // login logic
    // sign in
    // sigh up
    // 

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{backgroundColor: '#27ae60'}}>
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    TAGout
                </Typography>
                </Toolbar>
                {loggedIn ? LoggedInNav : LoggedOutNav}
            </AppBar>
        </Box>
  );
}

const LoggedOutNav = () => {
    return (
        <Box>
            <Button onClick={e => console.log(e)} color="inherit">Login</Button>
            <Button onClick={e => console.log(e)} color="inherit">Sign Up</Button>
        </Box>
    )
}

const LoggedInNav = () => {
    return (
        <Box>
            <Button onClick={e => console.log(e)} color="inherit">Settings</Button>
            <Button onClick={e => console.log(e)} color="inherit">Map View</Button>
            <Button onClick={e => console.log(e)} color="inherit">Sign out</Button>
        </Box>
    )
}
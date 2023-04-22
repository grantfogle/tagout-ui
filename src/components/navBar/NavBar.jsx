import React from 'react'
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material'
import AuthButtons from './authButtons/AuthButtons'

export default function NavBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} sx={{ backgroundColor: '#27ae60' }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            color="white"
            sx={{ flexGrow: 1 }}>
            TAGout
          </Typography>
          <AuthButtons />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

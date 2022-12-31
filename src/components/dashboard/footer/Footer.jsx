import * as React from 'react';
import {AppBar, Box, Toolbar, Typography, Button, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FeedbackForm from './feedbackForm/FeedbackForm'
import { Feedback } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#27ae60', height: '60px' }}>
        <FeedbackForm/>
        {/* Sign up for updates */}
        {/* Leave feedback */}
        {/* Upgrade Plan */}
        {/* Contact */}
    </Box>
  );
}

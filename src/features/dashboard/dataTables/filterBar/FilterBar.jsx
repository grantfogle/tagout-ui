import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
} from '@mui/material';

export const FilterBar = () => {
    return (
        <AppBar position="fixed" sx={{ top: 'auto', backgroundColor: '#fff', bottom: 0, height: '60px', borderTop: '2px solid #f39c12' }}>
            <Toolbar>
                <Typography variant="h6">Filters</Typography>
                {/* draw choice (1st/2nd/3rd) */}
                {/* preference points: both max pts and draw percentage */}
                {/* success rates: slider (0-100%) */}
                {/* male::female ratio */}
            </Toolbar>
        </AppBar>
    );
}
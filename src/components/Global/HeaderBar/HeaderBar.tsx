import React from 'react'
import TranslateIcon from '@mui/icons-material/Translate';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Box, Typography } from '@mui/material';

const theme = {
    'dark': <DarkModeIcon />,
    'ligth': <LightModeIcon />
}

function HeaderBar() {
return (
    <Box 
    style={{ 
        width: '90vw', 
        height: '5vh', 
        padding: '10px',
        paddingRight: '25px',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '25px'
        }}
    >
        <Typography variant="h6">
        Fernando Mós | Software enginner
        </Typography>
        <Box sx={{display: 'flex', gap: '10px'}}>
            {
                theme['ligth']
            }
            <TranslateIcon />
        </Box>
    </Box>
)
}

export default HeaderBar
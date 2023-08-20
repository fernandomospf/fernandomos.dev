import React from 'react'
import TranslateIcon from '@mui/icons-material/Translate';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Box } from '@mui/material';

const theme = {
    'dark': <DarkModeIcon />,
    'ligth': <LightModeIcon />
}

function HeaderBar() {
return (
    <Box style={{ border: '1px solid blue', width: '100vw', height: '5vh'}}>
        {
            theme['ligth']
        }
        <TranslateIcon />
    </Box>
)
}

export default HeaderBar
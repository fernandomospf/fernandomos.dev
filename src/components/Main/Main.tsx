import React from 'react'

import { Box } from '@mui/material'
import Welcome from '../Global/Welcome/Welcome';

function Main() {
return (
    <Box sx={{ 
        flex: '1', 
        width: '90vw', 
        height: '99.8vh',
        padding: '10px',
        backgroundColor: '#151515',
        color: '#FFFFFF'
        }}
    >
        <Welcome />
    </Box>
)
}

export default Main;
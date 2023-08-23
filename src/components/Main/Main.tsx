import React from 'react'

import { Box } from '@mui/material'
import Welcome from '../Global/Welcome/Welcome';
import Project from '../Project/Project';
import Skill from '../Skill/Skill';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';

function Main() {
return (
    <Box sx={{ 
        flex: '1', 
        width: '90vw', 
        height: '99.8vh',
        padding: '10px',
        backgroundColor: '#151515',
        color: '#FFFFFF',
        overflow: 'auto',
        scrollBehavior: 'smooth',
        '&::-webkit-scrollbar': {
            width: 8,
        },
        '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#151515',
        },
        '&::-webkit-scrollbar-thumb:hover': {
            background: '#151515',
        },
        scrollbarWidth: 'thin',
        scrollbarColor: '#151515 #f1f1f1',
        }}
    >
        <Welcome />
        {/* <Project />
        <Skill />
        <Experience />
        <Contact /> */}
    </Box>
)
}

export default Main;
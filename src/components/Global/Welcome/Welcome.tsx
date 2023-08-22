/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Box, Typography, Button} from '@mui/material';
import Image from 'next/image';

function Welcome() {
return (
    <Box sx={{ 
        display: 'flex', 
        gap: '150px', 
        justifyContent: 'center',
        alignItems: 'center',
        height: '98vh'
        }}
    >
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '55px'}}>
            <Box>
                <Typography variant='h3'> Hi,</Typography>
                <Typography variant='h2'>I'm Fernando.</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                <Typography variant="body1">
                    &lt; Full Stack <span style={{color: '#FFBD59', fontWeight: 600}}>Developer</span> &gt;
                </Typography>
                <Typography variant="body1">
                    With a passion for mobile development
                </Typography>
                <Typography sx={{ width: '40rem'}}>
                    A developer is interested in more than just code.
                    Software engineering student and currently mid-level developer.
                    Always looking for continuous improvement I'm looking to improve my skills with CI/CD, Cloud and Software Architecture.

                    My mission is to simplify people's lives through software
                </Typography>
            </Box>
        
            <Box sx={{display: 'flex', gap: '10px'}}>
            <Button
                    variant="outlined"
                    sx={{color: '#FFFFFF', borderColor: '#FFFFFF', fontWeight: 500, ":hover": {
                        borderColor: '#FFBD59',
                        color: '#FFBD59',
                        cursor: 'pointer'
                    }}}
                >
                    Contant me
                </Button>
                <Button
                    variant="outlined"
                    sx={{color: '#FFBD59', borderColor: '#FFBD59', fontWeight: 500, ":hover": {
                        borderColor: '#FFF',
                        color: '#FFF',
                        cursor: 'pointer'
                    }}}
                >
                    Download CV
                </Button>
            </Box>
        </Box>
        <Image
        src={'/profile-mos.png'}
        alt='My personal brand'
        width={450}
        height={450}
        style={{padding: '0', margin: '0'}}
        />
    </Box>
)
}

export default Welcome
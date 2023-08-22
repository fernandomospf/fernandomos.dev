import React from 'react';
import { Box, Button, Divider, List, ListItem, Typography } from '@mui/material'
import Image from 'next/image'
import dynamic from 'next/dynamic';
import Link from 'next/link';
const LinkedInIcon = dynamic(() => import('@mui/icons-material/LinkedIn'), { ssr: false });
const GitHubIcon = dynamic(() => import('@mui/icons-material/GitHub'), { ssr: false });

const OPTIONS_MENU = [
    {
        label: 'Projects',
        url: ''
    },
    {
        label: 'Skills',
        url: ''
    },
    {
        label: 'Experience',
        url: ''
    },
    {
        label: 'Contact',
        url: ''
    },
]

const SOCIAL_MIDIA = [
    {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/fernando-mos/",
        icon: <LinkedInIcon />
        
    },
    {
        label: "GitHub",
        url: "https://github.com/fernandomospf",
        icon: <GitHubIcon />
    }
]

function SideMenu() {
return (
    <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minWidth: '10vw', 
        height: '100%',
        justifyContent: 'space-between',
        backgroundColor: '#111111',
        color: '#FFFFFF',
        }}
    >
        <Box sx={{
            width: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            flexDirection: 'column',
            gap: '20px'
            }}
        >
            <Image
                src={'/brand-mos.png'}
                alt='My personal brand'
                width={150}
                height={150}
                style={{padding: '0', margin: '0'}}
            />
        </Box>
            <List style={{display: 'flex', flexDirection: 'column'}}>
            {
                OPTIONS_MENU.map(({label}, index) => (
                    <>
                    <ListItem 
                    key={`li-${label}`} 
                    sx={{ 
                        ":hover": { 
                            backgroundColor: '#FFBD59', color: '#000000'
                        },
                        cursor: 'pointer'
                    }}
                    >
                        <Typography variant="body1" sx={{ cursor: 'pointer'}}>
                            {label}
                        </Typography>
                    </ListItem>
                        {
                            OPTIONS_MENU[OPTIONS_MENU.length -1 ] !== OPTIONS_MENU[index] && (
                                <Divider />
                            )
                        }
                    </>
                ))
            } 
            </List>
        <Box 
        sx={{ 
            height: '10vh', 
            display: 'flex', 
            justifyContent: 'space-around', 
            flexDirection: 'column',
            alignItems: 'center'
            }}
        >
            {
            SOCIAL_MIDIA.map(({label, url}) => (
                <Link 
                    key={`button-${label}`} 
                    href={url} 
                    target='_blank'
                    style={{
                        width: '95%', 
                        color: '#000000',
                        border: 'none', 
                    }}
                >
                    <Button 
                        variant="outlined"
                        fullWidth
                        sx={{
                            width: '95%', 
                            color: '#FFFFFF',
                            border: 'none', 
                            ":hover": {
                                border: 'none', 
                                backgroundColor: '#FFBD59', 
                                color: '#000000',
                                fontWeight: '600',
                            }
                        }}
                    >
                        {label}
                    </Button>
                </Link>
                ))
            }
        </Box>
    </Box>
)
}

export default SideMenu
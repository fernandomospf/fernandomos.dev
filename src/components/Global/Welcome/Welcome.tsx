/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState } from 'react';
import { Box, Typography, Button, Dialog, DialogTitle, DialogContent} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import CloseIcon from '@mui/icons-material/Close';
interface IContactModal {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactModal = ({open, setOpen}: IContactModal) => {
    return (
        <Dialog 
            open={open} 
            onClose={() => setOpen(false)}
            sx={{
                '& .MuiDialog-paper': {
                backgroundColor: '#161616'
                },
            }}
        >
            <Box
                sx={{ 
                    backgroundColor: "#16161616", 
                    color: '#FFFFFF',
                    width: '550px',
                    height: '450px'
                }}            
            >
                <DialogTitle    
                sx={{
                    textAlign: 'center',
                    width: '100%',
                    height: '30%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 0,
                }}>
                    <Typography
                        variant='h5'
                        sx={{ width: '95%', marginLeft: '5%'}}
                    >
                        Scan the QRcode
                    </Typography>
                    <CloseIcon onClick={() => setOpen(false)} sx={{cursor: 'pointer', width: '5%', position: 'absolute', right: '20px', top: '15px'}}/>
                </DialogTitle>
                <DialogContent 
                    sx={{ 
                        height: '60%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        boxSizing: 'border-box',
                        flexDirection: 'column'
                    }}
                >
                    <Image 
                        src={'/qrcode.png'}
                        width={200}
                        height={200}
                        alt="QRcode to redirect for my Link Three"
                    />               
                    <Typography variant="body1">
                        With the QRcode you will have access to my linkthree where all my main contacts are.
                    </Typography>     
                </DialogContent>
            </Box>
        </Dialog>
    )
}

function Welcome() {
    const [open, setOpen] = useState<boolean>(false);
return (
    <Box sx={{ 
        display: 'flex', 
        gap: '150px', 
        justifyContent: 'center',
        alignItems: 'center',
        height: '96vh'
        }}
    >
        {
            open && <ContactModal open={open} setOpen={setOpen}/>
        }
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
                    onClick={() => setOpen(true)}
                >
                    Contact me
                </Button>
                <Link href="/CV_Fernando-mos.pdf" target='_Blank' rel='noreferrer'>
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
                </Link>
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
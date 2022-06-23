import React from 'react'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import { Typography, Container, Box, TextField, Button } from '@mui/material'

const Contact = () => {
  return (
    <>
    <Nav/>
    <Typography variant='h4' align='center' color='secondary' className='mt-3'>
                Contact
            </Typography>

            <Container className='mx-auto' >
                <Box className='contact-container' p={5} BoxShadow={3}>
                    <Box className='contact-top' display='flex' boxShadow={3} p={5}>
                        <Box className='address' width='40%' boxShadow={3} p={3}>
                            <Typography variant='h5' fontWeight={'bold'} sx={{textDecoration:'underline'}}>Our Store</Typography>
                            <Typography variant='h6'>Kathmandu, Nepal</Typography>
                            <Typography variant='h6'>Phone: +977 98010 12345</Typography>
                            <Typography variant='h6'>email: info@ourstore.com</Typography>
                            <Typography variant='h6'>website: www.ourstore.com</Typography>

                        </Box>
                        <Box className='contact-form' width='60%' pl={5} pb={5}>
                            <Typography variant='h5' align='center' sx={{textDecoration:'underline'}} fontWeight='bold'>Contact form</Typography><br/>
                            <TextField variant='outlined' label='Email' fullWidth='true' multiline maxRows={1} helperText='email is required' placeholder='enter email here' required/><br/><br/>
                            <TextField variant='outlined' label='Subject' fullWidth='true' multiline maxRows={1}/><br/><br/>
                            <TextField variant='outlined' label='Message' fullWidth='true' multiline maxRows={3} minRows={3}/><br/><br/>
                            <Button variant='contained' fullWidth='true'>Submit</Button>
                        </Box>
                    </Box>
                    <Box className='contact-bottom'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.240403142384!2d85.31271265024448!3d27.709862782706413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193edf6bd2af%3A0x44ac26fce7c33d8c!2sDursikshya%20Education%20Network!5e0!3m2!1sen!2snp!4v1648209225077!5m2!1sen!2snp" width="100%" height="450" style={{'border':'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Box>
                </Box>
            </Container>

    <Footer/>
    </>
  )
}

export default Contact
import { Box, Container, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import './about.css'

const About = () => {
    return (
        <>
            <Nav />
            <Typography variant='h4' align='center' color='secondary' className='mt-3'>
                About
            </Typography>

            {/* <Box sx={{display:'flex', justifyContent:'space-evenly'}}>
                <Box sx={{width:'33%'}} className="custom-sidebar" ></Box>
                <Box sx={{width:'33%'}} className="custom-sidebar"></Box>
                <Box sx={{width:'33%'}} className="custom-sidebar"></Box>
                
            </Box> */}
{/* <Container> */}

<Typography variant='h5' align='center' color='secondary' className='mt-3'>
                Team Members
            </Typography>
            
            <Grid container sx={{justifyContent:"space-evenly"}} >
                <Grid item xs={3}  sx={{p:"15px", boxShadow:"3"}}>
                    <img src='./images/img1.jpg' style={{"height":'200px', "width":'100%'}}/>
                    <Typography variant='h5' color='secondary'>Mr. ABC</Typography>
                    <Typography variant='h6' color='secondary'>Managing Director</Typography>
                    <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <Typography variant='body1' color='secondary'>abc@gmail.com</Typography>
                    <Typography variant='body2' color='secondary'>9851012345</Typography>
                    </Box>
                    <Link href='#' underline='none'>Contact</Link>
                </Grid>

                <Grid item xs={3}  sx={{p:"15px", boxShadow:"3"}}>
                    <img src='./images/img1.jpg' style={{"height":'200px', "width":'100%'}}/>
                    <Typography variant='h5' color='secondary'>Mr. ABC</Typography>
                    <Typography variant='h6' color='secondary'>Managing Director</Typography>
                    <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <Typography variant='body1' color='secondary'>abc@gmail.com</Typography>
                    <Typography variant='body2' color='secondary'>9851012345</Typography>
                    </Box>
                    <Link href='#' underline='none'>Contact</Link>
                </Grid>

                <Grid item xs={3}  sx={{p:"15px", boxShadow:"3"}}>
                    <img src='./images/img1.jpg' style={{"height":'200px', "width":'100%'}}/>
                    <Typography variant='h5' color='secondary'>Mr. ABC</Typography>
                    <Typography variant='h6' color='secondary'>Managing Director</Typography>
                    <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <Typography variant='body1' color='secondary'>abc@gmail.com</Typography>
                    <Typography variant='body2' color='secondary'>9851012345</Typography>
                    </Box>
                    <Link href='#' underline='none'>Contact</Link>
                </Grid>
            </Grid>
            {/* </Container> */}
            <Footer />
        </>
    )
}

export default About
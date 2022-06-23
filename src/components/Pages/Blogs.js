import React from 'react'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import { Typography } from '@mui/material'
import { Box, Container } from '@mui/material'


const Blogs = () => {
    return (
        <>
            <Nav />
            <Typography variant='h4' align='center' color='secondary' className='mt-3'>
                Blogs
            </Typography>

            <Box className='blogs-container' backgroundColor='skyblue' p={3}>
                <Box className='blog mb-3' borderRadius={3} display='flex' backgroundColor='white' p={3}>
                    <Box className='blog-content' width='80%'>
                        <Box className='blog-title'>
                            <Typography variant='h4' fontWeight='bold' 
                            sx={{textDecoration:'underline'}}>TITLE</Typography>
                            </Box>
                        <Box className='blog-text' px={3}>
                            <Typography variant='body1' align='justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum consequuntur velit quidem ut rerum ipsa eaque illum quas minus incidunt, fugit, perferendis ea dicta cupiditate quis, voluptates aperiam consectetur? Mollitia neque tempora voluptatem omnis iusto molestiae aut nemo hic aliquid facere. Distinctio nulla, reprehenderit facere odit eum voluptate nobis minima hic quos commodi, impedit aut! Voluptates qui ullam ex nam? Eaque facilis quaerat a nisi facere omnis sit porro, repudiandae vitae magni reprehenderit commodi, voluptate non, odio asperiores explicabo veniam cumque. Vel magnam perferendis eligendi? Accusantium sed enim, tempore rem iure et, minus debitis tempora, nesciunt dignissimos molestias labore hic.</Typography> 
                            </Box>
                    </Box>

                    <Box className='blogger' width='20%'>
                        <Box className='blogger-image' width='100%' borderRadius='50%' boxShadow={3} overflow='hidden'>
                            <img src='./images/img1.jpg' width='100%'></img>
                        </Box>
                        <Box className='blogger-name'>
                            <Typography variant='h6' align='right'>-Mr. ABC</Typography></Box>
                        </Box>    
                </Box>

                <Box className='blog mb-3' borderRadius={3} display='flex' backgroundColor='white' p={3}>
                    <Box className='blog-content' width='80%'>
                        <Box className='blog-title'>
                            <Typography variant='h4' fontWeight='bold' 
                            sx={{textDecoration:'underline'}}>TITLE</Typography>
                            </Box>
                        <Box className='blog-text' px={3}>
                            <Typography variant='body1' align='justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum consequuntur velit quidem ut rerum ipsa eaque illum quas minus incidunt, fugit, perferendis ea dicta cupiditate quis, voluptates aperiam consectetur? Mollitia neque tempora voluptatem omnis iusto molestiae aut nemo hic aliquid facere. Distinctio nulla, reprehenderit facere odit eum voluptate nobis minima hic quos commodi, impedit aut! Voluptates qui ullam ex nam? Eaque facilis quaerat a nisi facere omnis sit porro, repudiandae vitae magni reprehenderit commodi, voluptate non, odio asperiores explicabo veniam cumque. Vel magnam perferendis eligendi? Accusantium sed enim, tempore rem iure et, minus debitis tempora, nesciunt dignissimos molestias labore hic.</Typography> 
                            </Box>
                    </Box>

                    <Box className='blogger' width='20%'>
                        <Box className='blogger-image' width='100%' borderRadius='50%' boxShadow={3} overflow='hidden'>
                            <img src='./images/img1.jpg' width='100%'></img>
                        </Box>
                        <Box className='blogger-name'>
                            <Typography variant='h6' align='right'>-Mr. ABC</Typography></Box>
                        </Box>    
                </Box>

                <Box className='blog mb-3' borderRadius={3} display='flex' backgroundColor='white' p={3}>
                    <Box className='blog-content' width='80%'>
                        <Box className='blog-title'>
                            <Typography variant='h4' fontWeight='bold' 
                            sx={{textDecoration:'underline'}}>TITLE</Typography>
                            </Box>
                        <Box className='blog-text' px={3}>
                            <Typography variant='body1' align='justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum consequuntur velit quidem ut rerum ipsa eaque illum quas minus incidunt, fugit, perferendis ea dicta cupiditate quis, voluptates aperiam consectetur? Mollitia neque tempora voluptatem omnis iusto molestiae aut nemo hic aliquid facere. Distinctio nulla, reprehenderit facere odit eum voluptate nobis minima hic quos commodi, impedit aut! Voluptates qui ullam ex nam? Eaque facilis quaerat a nisi facere omnis sit porro, repudiandae vitae magni reprehenderit commodi, voluptate non, odio asperiores explicabo veniam cumque. Vel magnam perferendis eligendi? Accusantium sed enim, tempore rem iure et, minus debitis tempora, nesciunt dignissimos molestias labore hic.</Typography> 
                            </Box>
                    </Box>

                    <Box className='blogger' width='20%'>
                        <Box className='blogger-image' width='100%' borderRadius='50%' boxShadow={3} overflow='hidden'>
                            <img src='./images/img1.jpg' width='100%'></img>
                        </Box>
                        <Box className='blogger-name'>
                            <Typography variant='h6' align='right'>-Mr. ABC</Typography></Box>
                        </Box>    
                </Box>
            </Box>

            


            <Footer />
        </>
    )
}

export default Blogs
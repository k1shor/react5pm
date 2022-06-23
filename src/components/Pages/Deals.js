import { Container, Typography, Box } from '@mui/material'
import React from 'react'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import Product from '../Product'
import './deals.css'
import Checkbox from '@mui/material/Checkbox';
import Checkbox_categories from '../Checkbox_categories'
import Radiobutton_prices from '../Radiobutton_prices'


const Deals = () => {
    return (
        <>
            <Nav />
            <Typography variant='h4' color='error' align='center'>
                Deals
            </Typography>

            <Container maxWidth="xl" sx={{ display: "flex" }} className="mx-auto">
                <Box sx={{ width: "25%", backgroundColor: "skyblue" }}>

                    <Checkbox_categories />
                    <Radiobutton_prices />

                </Box>
                <Box sx={{ width: "75%", }}>
                    <Product />
                </Box>

            </Container>
            <Footer />
        </>
    )
}

export default Deals
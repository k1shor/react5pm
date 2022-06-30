import { Container, Typography, Box } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import Product from '../Product'
import './deals.css'
import Checkbox_categories from '../Checkbox_categories'
import Radiobutton_prices from '../Radiobutton_prices'
import { prices } from '../prices'
import { filterProduct } from '../../api/productApi'


const Deals = () => {
    const [sortBy, setSortBy] = useState('createdAt')
    const [order, setOrder] = useState('1')
    const [limit, setLimit] = useState(8)
    const [skip, setSkip] = useState(0)
    const [size, setSize] = useState(0)

    const [myFilter, setMyFilter] = useState({
        filters: { category: [], product_price: [] }
    })
    const [filteredProduct, setFilteredProduct] = useState([])

    const handlePrice = (index) => {
        let price = prices.find(p => p.id == index)
        return price.value
    }
    const handleFilter = (filters, filterBy) => {
        let newFilter = { ...myFilter }
        // category : [mobile, laptop], product_price : index
        //  filterBy-> category, product_price
        //  filters -> mobile, laptop , 0, 999
        if (filterBy === 'product_price') {
            // change index into value
            let filterValue = handlePrice(filters)
            newFilter.filters[filterBy] = filterValue
        }
        else {
            newFilter.filters[filterBy] = filters
        }
        setMyFilter(newFilter)
        console.log(newFilter)
    }

    useEffect(() => {
        filterProduct(sortBy, order, limit, skip, myFilter)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    console.log(data)
                    setFilteredProduct(data.product)
                    setSize(data.size)
                }
            })
            .catch(err => console.log(err))
    }, [myFilter])

    return (
        <>
            <Nav />
            <Typography variant='h4' color='error' align='center'>
                Deals
            </Typography>

            <Container maxWidth="xl" sx={{ display: "flex" }} className="mx-auto">
                <Box sx={{ width: "25%", backgroundColor: "skyblue" }}>

                    <Checkbox_categories handleFilter={handleFilter} />
                    <Radiobutton_prices handleFilter={handleFilter} />

                </Box>
                <Box sx={{ width: "75%", }}>
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
                        {
                            filteredProduct.map(product => {
                                return <Product product={product} key={product._id} />
                            })
                        }
                    </div>
                </Box>

            </Container>
            <Footer />
        </>
    )
}

export default Deals
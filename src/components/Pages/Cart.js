import React from 'react'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import { Button } from '@mui/material'

const Cart = () => {
    return (
        <>
            <Nav />
            <h3 className='text-center'>Cart Items</h3>
            <table className='table container mx-auto table-hover table-striped text-center'>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Product Image</th>
                        <th>Product Description</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td><img src='./images/img1.jpg' alt='item1' style={{"height":150}}/></td>
                        <td>
                            <h4>Acer Laptop</h4>
                            <h5>Rs. 100,000</h5>
                            <h6>i7 processor, 16gb RAM, 2Tb HDD</h6>
                        </td>
                        <td>
                            <button className='btn btn-warning me-2'>Update</button>
                            <button className='btn btn-danger'>Remove</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td><img src='./images/img2.jpg' alt='item1' style={{"height":150}}/></td>
                        <td>
                            <h4>Data Cable</h4>
                            <h5>Rs. 500</h5>
                            <h6>durable, easy to use</h6>
                        </td>
                        <td>
                            <button className='btn btn-warning me-2'>Update</button>
                            <button className='btn btn-danger'>Remove</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td><img src='./images/img3.jpg' alt='item1' style={{"height":150}}/></td>
                        <td>
                            <h4>Asus Predator Laptop</h4>
                            <h5>Rs. 100,000</h5>
                            <h6>i7 processor, 16gb RAM, 2Tb HDD</h6>
                        </td>
                        <td>
                            <button className='btn btn-warning me-2'>Update</button>
                            <button className='btn btn-danger'>Remove</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td><img src='./images/img4.jpg' alt='item1' style={{"height":150}}/></td>
                        <td>
                            <h4 className='mb-2'>Headphone</h4>
                            <h5>Rs. 1000</h5>
                            <h6>plug and play, very nice quality</h6>
                        </td>
                        <td>
                            <button className='btn btn-warning me-2'>Update</button>
                            <button className='btn btn-danger'>Remove</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td><img src='./images/img5.jpg' alt='item1' style={{"height":150}}/></td>
                        <td>
                            <h4>Pair of Hoodies</h4>
                            <h5>Rs. 5000</h5>
                            <h6 className='text-nowrap'>comfortable, best for winter</h6>
                        </td>
                        <td>
                            <button className='btn btn-warning me-2'>Update</button>
                            <button className='btn btn-danger'>Remove</button>
                            <Button variant='contained' color='secondary' className='ms-2'>Remove</Button>
                        </td>
                    </tr>
                </tbody>
            </table>



            <Footer />
        </>
    )
}

export default Cart
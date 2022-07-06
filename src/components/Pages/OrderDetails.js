import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import { isAuthenticated } from '../../api/userApi'
import { orderDetails } from '../../reducer/actions/orderActions'


const OrderDetails = () => {
    const { user, token } = isAuthenticated()
    const orderStore = useSelector(state => state.orderDetail)
    const order = orderStore.order
    const { orderId } = useParams()
    const dispatch = useDispatch()
    console.log("order",order)
    useEffect(() => {
        dispatch(orderDetails(orderId, token))
    }, [])

    return (
        <>

            <Nav />
            <div className='container my-5 mx-auto p-5 '>
                <h1 className='text-center'> Order Details</h1>
                <hr />
                {
                    order &&
                    <>
                        <h4>Order ID: <u>{order._id}</u></h4>
                        <h4>Total Price: <u>Rs. {order.total_price}</u></h4>
                        <h4>No. of items: <u>{order.orderItemIds.length}</u></h4>
                        <h4>Status: <u>{order.status}</u></h4>

                        <h4 className='text-start'>Order Items: </h4>
                        <div className='row row-cols-md-3'>
                            {
                                order.orderItemIds.map(item => {
                                    return <>
                                        <div class="col my-3">
                                            <div class="card shadow-lg">
                                                <img src={`http://localhost:5000/${item.product.product_image}`} class="card-img-top" alt={item.product.product_name} height={'150px'} />
                                                <div class="card-body text-center">
                                                    <h5 class="card-title">{item.product.product_name}</h5>
                                                    <h6>Rs. {item.product.product_price}</h6>
                                                    <p class="card-text text-truncate">{item.product.product_description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                })
                            }
                        </div>

                        <Link to ='/userprofile'><h4>Go Back</h4></Link>
                    </>
                }


            </div>

            <Footer />
        </>
    )
}

export default OrderDetails
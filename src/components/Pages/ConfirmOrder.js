import React, { useEffect, useState } from 'react'
import Nav from '../Layout/Nav';
import Footer from '../Layout/Footer';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Checkout_progress from '../Checkout_progress';


const ConfirmOrder = () => {
    // const cart_items = JSON.parse(localStorage.getItem("cart_items"))

    const cart_items = useSelector(state => state.cart.cart_items)
    const [order_quantity, setOrderQuantity] = useState(0)
    const [order_total, setOrderTotal] = useState(0)


    useEffect(() => {
        if(cart_items.length>0){
            console.log(cart_items)
            const quantity_array = cart_items.map(item => item.quantity)
            setOrderQuantity(quantity_array.reduce((acc, cur) => acc + cur))
    
            const price_array = cart_items.map(item => item.price * item.quantity)
            setOrderTotal(price_array.reduce((acc, cur) => acc + cur))
        }
        else{
            setOrderQuantity(0)
            setOrderTotal(0)
        }
    }, [cart_items])

   
    return (
        <>
            <Nav />
            <Checkout_progress ConfirmOrder/>
            <div className='d-flex'>
                <div className='container mx-auto' style={{ width: '65%' }}>
                   {cart_items.length> 0 ?
                    <table className="table my-5 shadow-lg table-striped table-hover text-center align-middle table-bordered ">
                        <thead>
                            <tr>
                                <th>SNO</th>
                                <th>Product Image</th>
                                <th>Product</th>
                                <th>Unit Price</th>
                                <th>Number</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart_items.map((item, i) => {
                                    return <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td><img src={`http://localhost:5000/${item.image}`} alt={item.name} style={{ height: 200 }} /></td>
                                        <td>
                                            <h4>{item.name}</h4>
                                            </td>
                                            <td>
                                            <h5>Rs. {item.price}</h5>
                                        </td>
                                        <td>
                                                <h5>{item.quantity}</h5>
                                        </td>
                                        <td>
.                                            {item.quantity*item.price}
                                        </td>
                                       
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                    :
                    <div className='alert alert-danger mt-5'>No items in cart</div>
                   
                   }
                   
                </div>
                <div className='container me-5' style={{ width: '20%' }}>
                    <div className='shadow-lg  p-3 mt-5'>
                        <p>Order Items: <br/><b className='fs-3'> {order_quantity}</b></p>
                        <p>Total Order Price: <br/><b className='fs-3'>Rs. {order_total}</b> </p>
                        <hr className='my-2' />
                        <Link to='/shipping'><button className='btn btn-warning'>Proceed to Shipping</button></Link>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ConfirmOrder
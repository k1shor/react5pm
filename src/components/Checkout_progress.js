import React from 'react'
import { Link } from 'react-router-dom'

const Checkout_progress = ({ ConfirmOrder, Shipping, Payment }) => {
    return (
        <>
            <div className='d-flex justify-content-evenly my-3'>

                <Link to='/cart'><button className='btn btn-warning'>Back</button></Link>
                {
                    ConfirmOrder ?
                        <Link to='/confirmorder'><button className='btn btn-warning'>Confirm Order</button></Link>
                        : <button className='btn btn-warning disabled'>Confirm Order</button>
                }
                {
                    Shipping ?
                    <Link to={'/shipping'}><button className='btn btn-warning'>Shipping</button></Link>
                    : <button className='btn btn-warning disabled'>Shipping</button>
                }
                {
                    Payment ?
                    <Link to={'/payment'}><button className='btn btn-warning'>Payment</button></Link>
                    :<button className='btn btn-warning disabled'>Payment</button>
                }


            </div>


        </>
    )
}

export default Checkout_progress
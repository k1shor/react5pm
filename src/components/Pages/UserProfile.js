import React, { useEffect } from 'react'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import { useDispatch, useSelector } from 'react-redux'
import { myOrders } from '../../reducer/actions/orderActions'
import { Link } from 'react-router-dom'

const UserProfile = () => {
  const orders = useSelector(state => state.myOrder.orders)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(myOrders())
  }, [])

  return (
    <>
      <Nav />

      <div className='container my-5 mx-auto p-5 shadow-lg text-center'>
        <h4 className='text-center my-3'>My Orders</h4>
        <table className='table'>
          <thead>
            <tr>
              <td>S.No.</td>
              {/* <td>Image</td> */}
              <td>Products</td>
              <td>No. of Products</td>
              <td>Order Total</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {
              orders &&
              orders.map((orderItem, i) => {
                return <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{orderItem.orderItemIds.map(item => {
                    return item.product.product_name
                  })}</td>
                  <td> {orderItem.orderItemIds.length}</td>
                  <td>Rs. {orderItem.total}</td>
                  <td><Link to={`/order/${orderItem._id}`}>{orderItem.status}</Link></td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
      <Footer />

    </>
  )
}

export default UserProfile
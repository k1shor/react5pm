import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { viewProducts } from '../../api/productApi'
import AdminSidebar from '../Layout/AdminSidebar'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'

const ViewProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        viewProducts('createdAt','-1',20)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setProducts(data)
                }
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Nav />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3'>
                        <AdminSidebar />
                    </div>
                    <div className='col-md-9'>Products
                        <div className='container mt-3'>
                            <table className='table table-bordered text-center'>
                                <thead>
                                    <tr>
                                        <th>S.No.</th>
                                        <th>Product Image</th>
                                        <th>Product Details</th>
                                        <th>Count in Stock</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map((product,i)=>{
                                            console.log(product)
                                            return <tr key={product._id}>
                                                <td>{i+1}</td>
                                                <td>
                                                    <img src = {`http://localhost:5000/${product.product_image}`} alt={product.product_image} height='150px'/>
                                                </td>
                                                <td>
                                                    <h4>{product.product_name}</h4>
                                                    <h5>{product.product_price}</h5>
                                                    <p>{product.product_description}</p>
                                                </td>
                                                <td>{product.count_in_stock}</td>
                                                <td>
                                                <Link to={`/product/${product._id}`}>
                                                    <button className='btn btn-info'>View Details</button>
                                                    </Link>
                                                </td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default ViewProducts
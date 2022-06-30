import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { findProduct, findRelated, updateProduct } from '../../api/productApi'
import { isAuthenticated } from '../../api/userApi'
import Nav from '../Layout/Nav'
import Footer from '../Layout/Footer'
import { viewCategories } from '../../api/categoryApi'


const UpdateProduct = () => {
    const { token, user } = isAuthenticated()

    const params = useParams()
    const id = params.id

    const [product, setProduct] = useState({})

    const [categories, setCategories] = useState([])
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const select_ref = useRef()
    const [new_product, setNewProduct] = useState({
        product_name: '',
        product_description: '',
        product_price: '',
        product_image: '',
        category: '',
        count_in_stock: '',
        formData: ''
    })

    const { product_name, product_description, product_price, product_image, category, count_in_stock, formData } = new_product
    // destructing object to use its field names directly    const [error, setError] = useState('')

    const loadCategories = () => {
        viewCategories()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setCategories(data)
                    setNewProduct({ formData: new FormData })
                }
            })
    }



    useEffect(() => {
        loadCategories()
        findProduct(id)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setProduct(data)
                    console.log('updated')
                }
            })
            .catch(err => console.log(err))

    }, [params, success])

    const handleChange = name => event => {
        if (name == 'product_image') {
            formData.set(name, event.target.files[0])
            setNewProduct({ ...new_product, [name]: event.target.files[0] })
        }
        else {
            formData.set(name, event.target.value)
            setNewProduct({ ...new_product, [name]: event.target.value })

        }
    }

    const clickSubmit = e => {
        setError('')
        setSuccess(false)

        e.preventDefault()
        // console.log(formData)
        updateProduct(id, formData, token)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    setSuccess(true)
                }
            })
            .catch(err => console.log(err))
    }

    const showError = () => {
        if (error) {
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const showSuccess = () => {
        if (success) {
            return <div className='alert alert-success'>"Product updated successfully."</div>
        }
    }

    return (
        <>
            <Nav />
            {showError}
            {showSuccess}
            <div className='container my-5 p-5 d-flex mx-auto shadow-lg'>
                <div className='w-50'>
                    <img src={`http://localhost:5000/${product.product_image}`} alt={product.product_name} className='w-100' />

                    <div className='product-info w-50 text-start p-5'>
                        <h3 className="card-title">{product.product_name}</h3>
                        <h3 className="card-title">Rs. {product.product_price}</h3>
                        <p className="text-truncate">Description: {product.product_description}</p>
                        <h4>In Stock: {product.count_in_stock}</h4>
                    </div>
                </div>
                <div className='container w-50 mx-auto'>
                <form className='shadow-lg p-5'>
                        <label htmlFor='product_name'>Product Name:</label>
                        <input type='text' id='product_name' className='form-control'
                            onChange={handleChange('product_name')} value={product_name} />

                        <label htmlFor='product_description'>Description:</label>
                        <textarea className='form-control' onChange={handleChange('product_description')} value={product_description} />

                        <label htmlFor='price'>Price:</label>
                        <input type='number' id='price' className='form-control' onChange={handleChange('product_price')} value={product_price} />

                        {/* <label htmlFor='image'>Image: </label>
                        <input type='file' id='image' className='form-control' onChange={handleChange('product_image')} ref={file_ref} /> */}

                        <label htmlFor='count'>Count in Stock:</label>
                        <input type='number' id='count' className='form-control' onChange={handleChange('count_in_stock')} value={count_in_stock} />

                        <label htmlFor='category'>Category</label>
                        <select className='form-control' onChange={handleChange('category')}>
                            <option></option>
                            {
                                categories.map(category => {
                                    return <option key={category._id} value={category._id} ref={select_ref}>{category.category_name}</option>
                                })
                            }
                        </select>

                        <button className='btn btn-warning form-control' onClick={clickSubmit}>Update Product</button>


                    </form>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default UpdateProduct
import React, { useEffect, useState } from 'react'
import { viewCategories } from '../../api/categoryApi'
import { addProduct } from '../../api/productApi'
import { isAuthenticated } from '../../api/userApi'
import AdminSidebar from '../Layout/AdminSidebar'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'

const AddProduct = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const [categories, setCategories] = useState([])
    const {token} = isAuthenticated()
    const [product, setProduct] = useState({
        product_name:'',
        product_price:'',
        product_description:'',
        category:'',
        count_in_stock:'',
        product_image:'',
        formdata:'',
        
    })

    // object destructure
    const {product_name, product_price, product_description, product_image, category, count_in_stock, formdata} = product

    useEffect(() => {
        viewCategories()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setCategories(data)
                    setProduct({...product, formdata: new FormData})
                }
            })
            .catch(err => console.log(err))
    }, [])

    const handleChange = name => event => {
        let value = name==='product_image' ? event.target.files[0] : event.target.value
        
        setProduct({...product, [name]:value })
        formdata.set(name,value)
        console.log(formdata)
    }
    
    const clickSubmit = event =>{
        event.preventDefault()
        addProduct(formdata, token)
        .then(data=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setSuccess(true)
                // setProduct({...product, success:true})
            }
        })
        .catch(err=>console.log(err))
    }

    const showError = () => {
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const showSuccess = () => {
        if(success){
            return <div className='alert alert-success'>Product Added successfully.</div>
        }
    }

    return (
        <>
            <Nav />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3'>
                        <AdminSidebar />
                    </div>
                    <div className='col-md-9'><h4>Add Product</h4>
                    {showSuccess()}
                    {showError()}
                        <form className='w-50 mx-auto'>
                            <label htmlFor='product_name'>Product Name</label>
                            <input type={'text'} id='product_name' className='form-control' onChange={handleChange('product_name')} value={product_name}/>
                            <label htmlFor='category'>Category</label>
                            <select id='category' className='form-control' onChange={handleChange('category')}>
                                <option></option>
                                {
                                    categories.map((category) => {
                                        return <option key={category._id} value={category._id}>{category.category_name}</option>
                                    })
                                }
                            </select>
                            <label htmlFor='product_price'>Product Price</label>
                            <input type={'number'} id='product_price' className='form-control' onChange={handleChange('product_price')} value={product_price}/>

                            <label htmlFor='product_desc'>Product Description</label>
                            <textarea id='product_desc' className='form-control' rows={5}
                            onChange={handleChange('product_description')} value={product_description}/>

                            <label htmlFor='count_in_stock'>Count in Stock</label>
                            <input type={'number'} id='count_in_stock' className='form-control' onChange={handleChange('count_in_stock')} value={count_in_stock}/>

                            <label htmlFor='product_image'>Product Image</label>
                            <input type={'file'} id='product_image' className='form-control' onChange={handleChange('product_image')}/>

                            <button className='btn btn-warning mt-3 form-control' onClick={clickSubmit}>Add Product</button>

                        </form>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default AddProduct
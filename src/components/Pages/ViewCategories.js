import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteCategory, viewCategories } from '../../api/categoryApi'
import AdminSidebar from '../Layout/AdminSidebar'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isAuthenticated } from '../../api/userApi'


const ViewCategories = () => {
    const [categories, setCategories] = useState([])
    const {token} = isAuthenticated()
    const [success,setSuccess] =useState(false)

    useEffect(() => {
        viewCategories()
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [success])

    const clickDelete = (e,category_id) => {
        setSuccess(false)
        e.preventDefault()
        deleteCategory(category_id,token)
        .then(data=>{
            if(data.error){
                setSuccess(false)
                toast.error(data.error)
            }
            else{
                setSuccess(true)
                toast.success("Category deleted successfully.")
            }
        })
        .catch(err=>console.log(err))
    }

    return (
        <>
        <ToastContainer theme='colored' position='top-right'/>
            <Nav />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3'>
                        <AdminSidebar />
                    </div>
                    <div className='col-md-9'>
                        <div className='container mt-4'>
                            <h4>Categories</h4>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <td>S.No.</td>
                                        <td>Category Name</td>
                                        <td>Actions</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        categories.map((item,i)=>{
                                            return <tr>
                                                <td>{i+1}</td>
                                                <td>{item.category_name}</td>
                                                <td>
                                                    <Link to={`/category/update/${item._id}`}>
                                                    <button className='btn btn-warning'>Update</button></Link>
                                                    <button className='btn btn-danger' onClick={e=>clickDelete(e,item._id)}>Delete</button>
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

export default ViewCategories
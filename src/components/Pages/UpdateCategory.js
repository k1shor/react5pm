import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { categoryDetails, updateCategory } from '../../api/categoryApi'
import AdminSidebar from '../Layout/AdminSidebar'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'

const UpdateCategory = () => {
    const params = useParams()
    const category_id = params.category_id
    const [category, setCategory] = useState({})
    const [new_name, setNewname] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    useEffect(() => {
        categoryDetails(category_id)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setCategory(data)
                }
            })
            .catch(error => console.log(error))
    }, [success, error])

    const clickUpdate = (e) => {
        setSuccess('')
        setError('')
        e.preventDefault()
        updateCategory(category_id, new_name)
            .then(data => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    setSuccess("Category Updated successfully")
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
            return <div className='alert alert-success'>{success}</div>
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
                    <div className='col-md-9'>
                        Update Category
                        {showError()}
                        {showSuccess()}
                        <form className='m-5 p-5 w-50'>
                            <label>Category Name:</label>
                            <input type={'text'} readOnly className='form-control' value={category.category_name} />
                            {
                                !success &&
                                <>
                                    <label htmlFor='new_category'>New Category Name:</label>
                                    <input type={'text'} className='form-control' onChange={e => setNewname(e.target.value)} />
                                    <button className='btn btn-warning form-control mt-3' onClick={clickUpdate}>UPDATE CATEGORY</button>
                                </>
                            }
                        </form>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default UpdateCategory
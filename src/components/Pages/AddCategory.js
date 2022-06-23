import React, {useState} from 'react'
import Nav from '../Layout/Nav'
import Footer from '../Layout/Footer'
import AdminSidebar from '../Layout/AdminSidebar'
import { addCategory } from '../../api/categoryApi'
import { isAuthenticated } from '../../api/userApi'

const AddCategory = () => {
    const {token} = isAuthenticated()
    const [category,setCategory] = useState('')
    const [error,setError] = useState('')
    const [success, setSuccess] = useState(false)

    const clickSubmit = (e) => {
        e.preventDefault()
        addCategory(token, category)
        .then(data=>{
            if(data.error){
                setError(data.error)
                setSuccess(false)
            }
            else{
                setSuccess(true)
                setError('')
                setCategory('')
            }
        })
    }

    const showError =() => {
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const showSuccess =() => {
        if(success){
            return <div className='alert alert-success'>"Category Added Successfully"</div>
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
                        <h4>Add Category</h4>
                        {showError()}
                        {showSuccess()}
                        <div className='container w-50 pt-5'>
                            <label htmlFor='category_name'>Category Name:</label>
                            <input type={'text'} id='category_name' className='form-control mb-3' onChange={e=>setCategory(e.target.value)} value={category}/>
                            <button className='btn btn-warning form-control' onClick={clickSubmit}>Add Category</button>

                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default AddCategory
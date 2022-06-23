import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { resetPassword } from '../../api/userApi'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'

const ResetPassword = () => {
    const [password, setPassword] = useState('')

    const params = useParams()
    const token = params.token

    // to display error or success message
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const clickReset = () => {
        resetPassword(token, password)
        .then(data=>{
            if(data.error){
                setError(data.error)
                setSuccess('')
            }
            else{
                setSuccess(data.message)
                setError('')
                setPassword('')
            }
        })
        .catch(err=>console.log(err))
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
            {showError()}
            {showSuccess()}

            <div className='container w-50 my-5 shadow-lg p-5'>
                <label htmlFor='pwd'>New Password:</label>
                <input type={'text'} placeholder='enter new password here' id='pwd' className='form-control my-2' onChange={e=>setPassword(e.target.value)} value={password}/>
                <button className='btn btn-warning form-control' onClick={clickReset}>RESET PASSWORD</button>
            </div>

            <Footer />
        </>
    )
}

export default ResetPassword
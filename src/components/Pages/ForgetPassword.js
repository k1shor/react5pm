import React, { useState } from 'react'
import Nav from '../Layout/Nav'
import Footer from '../Layout/Footer'
import { forgetPassword } from '../../api/userApi'

const ForgetPassword = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const forgetPasswordHandle = () => {
    forgetPassword(email)
      .then(data => {
        if (data.error) {
          setError(data.error)
          console.log(error)
          setSuccess('')
        }
        else {
          console.log(data.message)
          setSuccess(data.message)
          setError('')
        }
      })
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
      <div className='w-50 my-5 mx-auto'>
        <div className='form-floating'>
          <input type={'text'} className='form-control' placeholder='enter email address here'
            onChange={(e) => setEmail(e.target.value)} />
          <label>Email:</label>
        </div>
        <button className='btn btn-warning form-control mt-2' onClick={forgetPasswordHandle}>Forget Password</button>
      </div>

      <Footer />
    </>
  )
}

export default ForgetPassword
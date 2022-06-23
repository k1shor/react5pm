import React, { useState } from 'react'
import { resendVerification } from '../../api/userApi'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'

const ResendVerification = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const clickSubmit =e =>{
        e.preventDefault()
        resendVerification(email)
        .then(data=>{
            if(data.error){
                setError(data.error)
                setSuccess('')
            }
            else{
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
            <div className='container w-50 my-5 shadow-lg p-5 mx-auto'>
                <label htmlFor='email'>Email:</label>
                <input type={'email'} placeholder='enter your email here' id='email' className='form-control my-2' onChange={e => setEmail(e.target.value)} value={email} />
                <button className='btn btn-warning form-control' onClick={clickSubmit}>RESEND VERIFICATION LINK</button>
            </div>
            <Footer />
        </>
    )
}

export default ResendVerification
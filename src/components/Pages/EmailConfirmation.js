import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { confirmUser } from '../../api/userApi'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'

const EmailConfirmation = () => {
    const params = useParams()
    const token = params.token
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    useEffect(()=>{
        confirmUser(token)
        .then(data=>{
            if(data.error){
                setError(data.error)
            }
            if(data.message){
                setSuccess(data.message)
            }
        })
    },[params])

    const showError = () => {
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
    }

    const showSuccess = () => {
        if(success){
            return <div className='alert alert-success'>{success}</div>
        }
    }

  return (
    <>
    <Nav/>
    {showError()}
    {showSuccess()}
    
    <Footer/>
    </>
  )
}

export default EmailConfirmation
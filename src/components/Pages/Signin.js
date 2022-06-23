import React, { useState } from 'react'
import Nav from '../Layout/Nav'
import Footer from '../Layout/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { authenticate, isAuthenticated, signIn } from '../../api/userApi'


const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const navigate = useNavigate()

    const {user} = isAuthenticated()

    const clickSubmit = (e) => {
        e.preventDefault()
        signIn(email, password)
        .then(data=>{
            if(data.error){
                setError(data.error)
            }
            else{
                setSuccess(true)
                authenticate(data)
            }
        })
    }

    const showError = () => {
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
    }

    const redirect = () => {
        if(success){
            if(user && user.role === 1){
               return navigate('/admin/dashboard')
            }
            if(user && user.role === 0){
                return navigate('/')
            }
        }
    }

    return (
        <>
            <Nav />
            {showError()}
            {redirect()}
            <main className="form-signin w-50 mx-auto shadow-lg my-5 p-5 text-center">
                <form>
                    <img className="mb-4" src="./logo512.png" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating mb-2">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e=>setEmail(e.target.value)}/>
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3 text-start">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={clickSubmit}>Sign in</button>
                    <Link to='/forgetpassword'>Forget Password</Link><br/>


                    Do not have an account. <Link to='/signup'>Register</Link>

                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </form>
            </main>

            <Footer />
        </>
    )
}

export default Signin
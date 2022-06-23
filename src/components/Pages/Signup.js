import React, { useState } from 'react'
import Nav from '../Layout/Nav'
import Footer from '../Layout/Footer'
import { Link } from 'react-router-dom'
import './signup.css'
import { register } from '../../api/userApi'

const Signup = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const clickSubmit = e => {
        setError('')
        setSuccess('')
        e.preventDefault()
        // console.log(username, email, password)
        register(username, email, password)
        .then(data=>{
            if(data.error){
                setError(data.error)
            }
            if(data.message){
                setSuccess(data.message)
                setEmail('')
                setPassword('')
                setUsername('')
            }
        })
        .catch(err=>console.log(err))
    }

    const showError =() => {
        if(error){
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const showSuccess =() => {
        if(success){
            return <div className='alert alert-success'>{success}</div>
        }
    }


    return (
        <div className='custom-background-main'>
            <Nav />
            {showError()}
            {showSuccess()}
            <main className="form-signin w-50 mx-auto shadow-lg my-5 p-5 text-center custom-background">
                <form>
                    <img className="mb-4" src="./logo512.png" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 fw-normal">Register</h1>

                    <div className="form-floating mb-2">
                        <input type="text" className="form-control" id="floatingfname" placeholder="User name" onChange={(e)=>{setUsername(e.target.value)}} value={username}/>
                        <label for="floatingfname">User Name</label>
                    </div>
                    {/* <div className="form-floating mb-2">
                        <input type="text" className="form-control" id="floatingfname" placeholder="first name" />
                        <label for="floatingfname">First Name</label>
                    </div>

                    <div className="form-floating mb-2">
                        <input type="text" className="form-control" id="floatinglname" placeholder="last name" />
                        <label for="floatinglname">Last Name</label>
                    </div>

                    <div className="form-floating mb-2">
                        <input type="date" className="form-control" id="floatingdob" placeholder="date of birth" />
                        <label for="floatingdob">Date of Birth</label>
                    </div>

                    <div className='form-floating mb-2'>
                        <div className='d-flex form-control justify-content-center'>
                            <div class="form-check">
                                <input class="form-check-input mt-1 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Male
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input mt-1 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Female
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input mt-1 me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                <label class="form-check-label" for="flexRadioDefault3">
                                    Others
                                </label>
                            </div>
                        </div>
                        <label>Gender</label>
                    </div> */}

                    <div className="form-floating mb-2">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e=>setEmail(e.target.value)} value={email}/>
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={event=>setPassword(event.target.value)} value={password} />
                        <label for="floatingPassword">Password</label>
                    </div>
                    {/* <div className="form-floating mb-2">
                        <input type="password" className="form-control" id="floatingConfirmPassword" placeholder="Confirm Password" />
                        <label for="floatingConfirmPassword">Confirm Password</label>
                    </div> */}

                    <div className="checkbox mb-3 text-start">
                        <label>
                            <input type="checkbox" value="remember-me" /> I agree to the terms and conditions.
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={clickSubmit}>Register</button>
                    Already have an account. <Link to='/signin'>Sign in</Link>

                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                </form>
            </main>
            <Footer />
        </div>
    )
}

export default Signup
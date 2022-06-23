import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated, signOut } from '../../api/userApi'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
    const { user } = isAuthenticated()
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const signout = (e) => {
        e.preventDefault()
        signOut()
            .then(data => {
                if (data.message) {
                    console.log(data.message)
                    return navigate('/')
                }
                else {
                    setError("failed to sign out")
                }
            })
            .catch(err => console.log(err))
    }
    const showError = () => {
        if (error) {
            return <div className='alert alert-danger'>{error}</div>
        }
    }


    return (
        <>
            {showError()}
            <div className='container-fluid'>
                <div className='row pt-1 bg-primary'>
                    <div className='col-md-3 text-center'>
                        <Link className="navbar-brand fs-3 text-white" to="/">Navbar</Link>
                    </div>
                    <div className='col-md-6'>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div className='col-md-3 d-flex justify-content-evenly'>
                        {
                            // not signed in
                            !user &&
                            <>
                                <Link to="/signin"><i className="bi bi-box-arrow-in-right text-white fs-3"></i></Link>
                                <Link to="/signup"><i className="bi bi-person-plus text-white fs-3"></i></Link>
                            </>
                        }
                        {
                            // not signed in or normal user signed in
                            (!user || (user && user.role === 0)) &&
                            <Link to="/cart"><i className="bi bi-cart text-white fs-3"></i></Link>
                        }
                        {
                            user && user.role === 0 &&
                            // normal user
                            // profile icon
                            <Link to="#"><i class="bi bi-person-circle text-white fs-3"></i></Link>
                        }
                        {
                            user && user.role === 1 &&
                            // admin user
                            // dashboard icon
                            <Link to="/admin/dashboard"><i class="bi bi-speedometer text-white fs-3"></i></Link>
                        }
                        {
                            user &&
                            // logout icon
                            <Link to="#"><i class="bi bi-box-arrow-right text-white fs-3" onClick={signout}></i></Link>
                        }

                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/deals">Deals</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blogs">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav
import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { isAuthenticated, signOut } from '../../api/userApi'

const AdminSidebar = () => {
    const {user} = isAuthenticated()

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
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
                <Link to="/admin/dashboard" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    
                    <span className="fs-4">Dashboard</span>
                </Link>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active" aria-current="page">
                            
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/category/add" className="nav-link text-white">
                            
                            Add Category
                        </Link>
                    </li>
                    <li>
                        <Link to="/categories" className="nav-link text-white">
                           
                            View Catagories
                        </Link>
                    </li>
                    <li>
                        <Link to="/product/add" className="nav-link text-white">
                           
                            Add Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" className="nav-link text-white">
                            
                            View Products
                        </Link>
                    </li>
                </ul>
                <hr />
                <div className="dropdown">
                    <Link to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                        <strong>{user.username}</strong>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><Link className="dropdown-item" to="#">{user.username}</Link></li>
                        <li><Link className="dropdown-item" to="#">{user.email}</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to="#" onClick={signout}>Sign out</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AdminSidebar
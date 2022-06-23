import React from 'react'
import AdminSidebar from '../Layout/AdminSidebar'
import Footer from '../Layout/Footer'
import Nav from '../Layout/Nav'

const AdminDashboard = () => {
    return (
        <>
            <Nav />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3'>
                        <AdminSidebar/>
                    </div>
                    <div className='col-md-9'>Welcome to Admin Dashboard</div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default AdminDashboard
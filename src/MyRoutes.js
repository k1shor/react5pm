import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/Pages/About'
import AddCategory from './components/Pages/AddCategory'
import AddProduct from './components/Pages/AddProduct'
import AdminDashboard from './components/Pages/AdminDashboard'
import Blogs from './components/Pages/Blogs'
import Cart from './components/Pages/Cart'
import Contact from './components/Pages/Contact'
import Deals from './components/Pages/Deals'
import EmailConfirmation from './components/Pages/EmailConfirmation'
import ForgetPassword from './components/Pages/ForgetPassword'

import Home from './components/Pages/Home'
import ResendVerification from './components/Pages/ResendVerification'
import ResetPassword from './components/Pages/ResetPassword'
import Signin from './components/Pages/Signin'
import Signup from './components/Pages/Signup'
import UpdateCategory from './components/Pages/UpdateCategory'
import ViewCategories from './components/Pages/ViewCategories'
import ViewProducts from './components/Pages/ViewProducts'
import AdminRoute from './routes/AdminRoute'
import PrivateRoute from './routes/PrivateRoute'

const MyRoutes = () => {
  return (
    <Router>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />

        <Route path='/deals' element={<Deals />} />
        <Route path='/about' element={<About />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />


        <Route path='/confirmuser/:token' element={<EmailConfirmation />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/resetpassword/:token' element={<ResetPassword />} />
        <Route path='/resendverification' element={<ResendVerification />} />

        <Route path='/' element={<AdminRoute />}>
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
          <Route path='/category/add' element={<AddCategory/>}/>
          <Route path='/categories' element = {<ViewCategories/>}/>
          <Route path='/category/update/:category_id' element={<UpdateCategory/>}/>
          <Route path='/product/add' element={<AddProduct/>}/>
          <Route path='/products' element={<ViewProducts/>}/>
        </Route>

        <Route path='/' element={<PrivateRoute />}>
          <Route path='/cart' element={<Cart />} />
        </Route>


      </Routes>
    </Router>
  )
}

export default MyRoutes
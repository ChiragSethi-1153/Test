import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from '../pages/UserLogin/UserLogin'
import UserSignup from '../pages/UserSignup/UserSignup'
import Home from '../pages/Home/Home'
import Dashboard from '../pages/Dashboard/Dashboard'
import PrivateRoutes from './PrivateRoutes'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<UserLogin />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route element={<PrivateRoutes />}>
          <Route path='/home' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>

    </Routes>
  )
}

export default Routing

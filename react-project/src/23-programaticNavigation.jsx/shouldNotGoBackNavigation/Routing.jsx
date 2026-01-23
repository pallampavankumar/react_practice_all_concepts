import React from 'react'
import DashBoard from './DashBoard'
import {Routes,Route} from 'react-router-dom'
import Login from './Login'
import Profile from './Profile'
import ProtectedRoute from './ProtectedRoute'
function Routing() {
  return (
    <div>
      <Routes>

        <Route path="/dashboard" element={
            <ProtectedRoute>
                <DashBoard/>
            </ProtectedRoute>}></Route>
        <Route path="/profile" element={
            <ProtectedRoute>
                <Profile/>
            </ProtectedRoute>}></Route>
        <Route path="/" element={<Login/>}></Route>
        <Route path="*" element={<Login/>}></Route>

      </Routes>
    </div>
  )
}

export default Routing

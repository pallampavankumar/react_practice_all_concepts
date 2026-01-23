import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from './Login'
import Profile from './Profile'
function PassDataRouting() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Profile" element={<Profile/>}></Route>
      </Routes>
    </div>
  )
}

export default PassDataRouting

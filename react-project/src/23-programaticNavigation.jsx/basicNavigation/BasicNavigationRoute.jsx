import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import About from './About'
import Home from './Home'
function BasicNavigationRoute() {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default BasicNavigationRoute

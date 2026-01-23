import React from 'react'
import {Link,Outlet} from "react-router-dom"
function DashBoard() {
  return (
    <div>
      <p>this is dashBoard</p>
      <nav>
        <Link to="profile">profile</Link>
        <Link to="settings">setting</Link>
      </nav>
      <Outlet/>
    </div>
  )
}

export default DashBoard

import React from 'react'
import {useLocation} from "react-router-dom"
function Profile() {
    const location=useLocation()
  return (
    <div>
      <p>user name :{location.state?.user}</p>
      <p>user cam from :{location.state?.from}</p>
    </div>
  )
}

export default Profile

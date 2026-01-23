import React from 'react'
import { useNavigate } from 'react-router-dom'
function Profile() {
    const navigate=useNavigate()
    function logout(){
        localStorage.removeItem("token");
        navigate("/",{replace:true})
    }
  return (
    <div>
      <p>this is profile</p>
      <button onClick={logout}>logout</button>
    </div>
  )
}

export default Profile

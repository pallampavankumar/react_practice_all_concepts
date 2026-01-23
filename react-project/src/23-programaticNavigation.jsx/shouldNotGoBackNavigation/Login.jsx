import React from 'react'
import {useNavigate} from 'react-router-dom'
function Login() {
    const navigate=useNavigate();
    function login(){
        localStorage.setItem("token","loggedin");
        navigate("/dashboard",{replace:true})
    }
  return (
    <div>
      <p>this is login page</p>
      <button onClick={login}> login</button>
    </div>
  )
}

export default Login

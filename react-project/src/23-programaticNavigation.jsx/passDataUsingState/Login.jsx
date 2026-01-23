import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate=useNavigate()
    function handleLogin(){
        navigate("/profile",{state:{user:"pavan",from:"login"}})
    }
  return (
    <div>
      <p>user loging in</p>
      <button onClick={handleLogin}> login</button>
    </div>
  )
}

export default Login

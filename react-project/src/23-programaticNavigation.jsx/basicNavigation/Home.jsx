import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate=useNavigate()
  return (
    <div>
      <p>this is home page</p>
      <button onClick={()=>navigate("/about")}>go to about</button>
    </div>
  )
}

export default Home

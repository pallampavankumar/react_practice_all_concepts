import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate=useNavigate();
  return (
    <div>
      <p> about the application... </p>
      <button onClick={()=>navigate("/")}>go to home</button>
    </div>
  )
}

export default About

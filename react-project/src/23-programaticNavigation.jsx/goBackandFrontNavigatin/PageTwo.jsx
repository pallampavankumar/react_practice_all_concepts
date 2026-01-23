import React from 'react'
import { useNavigate } from 'react-router-dom'

function PageTwo() {
    const navigate=useNavigate();
  return (
    <div>
      <p>this is page two</p>
      <button onClick={()=>navigate(-1)}>back</button>
      <button onClick={()=>navigate(1)}>forward</button>

    </div>
  )
}

export default PageTwo

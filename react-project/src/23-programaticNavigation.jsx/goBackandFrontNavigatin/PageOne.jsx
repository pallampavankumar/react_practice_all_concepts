import React from 'react'
import { useNavigate } from 'react-router-dom'
function PageOne() {
    const navigate=useNavigate()
  return (
    <div>
      <p>this is page one...</p>
      <button onClick={()=>navigate("/pagetwo")}>go to second page</button>

    </div>
  )
}

export default PageOne

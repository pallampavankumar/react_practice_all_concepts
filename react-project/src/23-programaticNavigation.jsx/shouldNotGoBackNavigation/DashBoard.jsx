import React from 'react'
import { useNavigate } from 'react-router-dom';

function DashBoard() {
    const navigate=useNavigate();
  return (
    <div>
      <p>this is dashboard</p>
      <button onClick={()=>navigate("/profile")}>profile</button>
    </div>
  )
}

export default DashBoard;

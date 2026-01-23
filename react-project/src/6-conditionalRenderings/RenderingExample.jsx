import React from 'react'
import { useState } from 'react';
function RenderingExample() {
    const [isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <div>
      <p>{isLoggedIn?"Welcome":"please login"}</p>
      <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>toggle</button>
    </div>
  )
}

export default RenderingExample

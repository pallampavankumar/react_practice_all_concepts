import React, { useState } from 'react'

function HoverExample() {
    const [message,setMessage]=useState();
    function handleChange(a){
        setMessage(a);
    }
  return (
    <div>
      <button onMouseEnter={()=>handleChange("mouse entered")}
        onMouseLeave={()=>handleChange("mouse left")}
        >{message}</button>
    </div>
  )
}

export default HoverExample

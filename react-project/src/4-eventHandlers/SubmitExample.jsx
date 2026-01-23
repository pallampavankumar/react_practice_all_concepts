import React from 'react'
import { useState } from 'react';
function SubmitExample() {
    const [name,setName]=useState("pavan");
    function handleSubmit(e){
       e.preventDefault()
       alert("submitted"+name)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
         <input  onChange={(e)=>setName(e.target.value)}>
           
         </input>
         <p>{name}</p>
         <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default SubmitExample;

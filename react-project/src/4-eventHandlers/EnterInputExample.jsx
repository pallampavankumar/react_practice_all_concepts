import React, { useState } from 'react'

function EnterInputExample() {
    const [value,setValue]=useState();
    function handleChange(e){
        setValue(e.target.value);
    }
  return (
    <div>
      <input onChange={handleChange}></input>
      <p>you typed:{value}</p>
    </div>
  )
}

export default EnterInputExample

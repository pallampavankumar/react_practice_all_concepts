import React from 'react'
import { useRef } from 'react';
function AccessingDomExample() {
    const inputref=useRef(null);
    function handleClick(){
        inputref.current.focus();
    }
  return (
    <div>
      <input ref={inputref}></input>
      <button onClick={handleClick}>click</button>
    </div>
  )
}

export default AccessingDomExample

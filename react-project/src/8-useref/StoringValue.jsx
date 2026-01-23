//here we store useref to store value.. without re rendering when the value is changed


import React, {useRef } from 'react'

function StoringValue() {
    const render=useRef(0);
    function handleButton(){
        render.current+=1;
        console.log("render"+render.current)

    }
  return (
    
    <div>
      <p>render value :{render.current}</p>
      <button onClick={handleButton}>click</button>
    </div>
  )
}

export default StoringValue

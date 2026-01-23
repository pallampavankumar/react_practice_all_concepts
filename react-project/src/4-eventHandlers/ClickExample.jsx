import React from 'react'

function ClickExample() {

  function clickMe(name){
    alert(`thanks for visiting ${name}`);
  }
  return (
    <div>
      <button onClick={()=>clickMe("pavan")}>Clik</button>
    </div>
  )
}

export default ClickExample

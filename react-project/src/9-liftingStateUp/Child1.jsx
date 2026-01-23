import React from 'react'

function Child1({text,setText}) {
  return (
    <div>|
      <input value={text} onChange={(e)=>setText(e.target.value)}></input>
        <p>child1 value : {text}</p>
    </div>
  )
}

export default Child1

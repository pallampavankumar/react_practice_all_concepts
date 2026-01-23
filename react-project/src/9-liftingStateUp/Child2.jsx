import React from 'react'

function Child2({text,setText}) {
  return (
    <div>
    <input value={text} onChange={(e)=>setText(e.target.value)}></input>
    <p>child2 value : {text}</p>
    </div>
  )
}

export default Child2

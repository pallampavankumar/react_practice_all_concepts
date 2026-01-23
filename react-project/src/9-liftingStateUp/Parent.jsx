import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
function Parent() {
    const [text,setText]=useState("")
  return (
    <div>
      <Child1 text={text} setText={setText}></Child1>
      <Child2 text={text} setText={setText}></Child2>
    </div>
  )
}

export default Parent

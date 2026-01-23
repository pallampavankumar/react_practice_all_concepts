import React from 'react'
import { useState } from 'react'
import Child from './Child';
function Parent() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState("")
  return (
    <div>
      <Child name={name}/>
      <p>count:{count}</p>
      <button onClick={e=>setCount(count+1)}>click</button>
    </div>
  )
}

export default Parent

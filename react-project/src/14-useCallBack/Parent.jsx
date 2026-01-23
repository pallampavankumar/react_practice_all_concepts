import React, { useCallback, useState } from 'react'
import Child from './Child';
function Parent() {
  console.log("parent rendered");
  const [count,setCount]=useState(0);
    const HandleFunctions=useCallback(()=>console.log("printing"),[]);
  return (
    <div>
      <Child HandleFunctions={HandleFunctions}></Child>
       <p>this is parent</p>
       <button onClick={HandleFunctions}>parent</button>
       <button onClick={()=>setCount(count+1)}>count</button>
    </div>
  )
}

export default Parent

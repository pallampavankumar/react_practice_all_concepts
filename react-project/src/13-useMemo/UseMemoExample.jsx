//we use useMemo for heavy calculations

import React, { useState } from 'react'
import { useMemo } from 'react';
function useMemoExample() {

    const [num,setNum]=useState(0);
    const result=useMemo(()=>{
        console.log("calculation...")
        return num*2
    },[])
  return (
    <div>
      <p>the result is :{result}</p>
      <button onClick={()=>setNum(num+1)}>click</button>
    </div>
  )
}

export default useMemoExample

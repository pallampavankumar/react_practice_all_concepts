import React, { useEffect, useState } from 'react'

function useEffectExample() {
    const [count,setCount]=useState();

    useEffect(()=>{
        console.log("prints on every render")
    })
    useEffect(()=>{
        console.log("prints only onetime")
    },[])
    useEffect(()=>{
        console.log("prints on specific state change")
    },[count])

  return (
    <div>
      <p>{count}</p>
    </div>
  )
}

export default useEffectExample

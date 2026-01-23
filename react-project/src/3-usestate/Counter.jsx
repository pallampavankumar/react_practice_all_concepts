import { useState } from "react"

function Counter(){
    const [count,setCount]=useState(0);
    return<>
      <p>this is the count {count}</p>
      <button onClick={()=>setCount(count+1)}>click</button>
    </>
}

export default Counter;
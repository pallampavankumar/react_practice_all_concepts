import React from 'react'
import { useCounter } from './useCounter'

function CustomeHookExample() {

    const {count,increment,decrement}=useCounter(10);
  return (
    <div>
      <p>value:{count}</p>
      <button onClick={increment}>increase</button>
      <button onClick={decrement}>decrease</button>
    </div>
  )
}

export default CustomeHookExample

import React from 'react'

const Child=React.memo(function Child({HandleFunctions}) {
  console.log("child rendered");
  return (
    <div>
      <button onClick={HandleFunctions}>click me</button>
    </div>
  )
});

export default Child

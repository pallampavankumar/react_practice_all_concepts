import React from 'react'

const Child=React.memo(function Child({name}) {
    console.log("rendered")
  return (
    <div>
      <p>hey i am {name} component</p>
    </div>
  )
});

export default Child

import React from 'react'
import { useState } from 'react'
function MapExample() {
    const [fruits] =useState(["apple","banana"])
  return (
    <ul>
      {fruits.map((fruit,i)=>
        <li key={i}>{fruit}</li>
      )}
    </ul>
  )
}

export default MapExample

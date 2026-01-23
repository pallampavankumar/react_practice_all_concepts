import React from 'react'
import {useSelector} from 'react-redux'

function CounterDisplay2() {
  const value=useSelector(state=>state.count.value);
    return (
      <div>
        the count value is :{value};
      </div>
    )
  }

export default CounterDisplay2

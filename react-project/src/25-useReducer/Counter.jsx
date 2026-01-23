import React, { useReducer } from 'react'
function reducer(state,action){
    if(action.type==="INC"){
        return {count:state.count+1}
    }
    else if(action.type==="DEC"){
        return {count:state.count-1}
    }
    else{
        return state;
    }
}
function Counter() {
  const [state,dispatch]=useReducer(reducer,{count:0});
  return (
    <div>
      <p>this is count:{state.count}</p>
      <button onClick={()=>dispatch({type:"INC"})}>increment</button>
      <button onClick={()=>dispatch({type:"DEC"})}>decrement</button>
    </div>
  )
}

export default Counter

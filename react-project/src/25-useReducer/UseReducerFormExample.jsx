import React, { useReducer } from 'react'
const initialState={name:"",email:"",age:""}
function formReducer(state,action){
    if(action.type==="Field_change"){
       return {...state,[action.field]:action.value};
    }
    else if(action.type==="reset"){
        console.log("entered reset..")
        return initialState;
    }
    else if(action.type==="SET_ERROR"){
        return {...state,error:action.error}
    }
    else{
        return state;
    }
}
function UseReducerFormExample() {
    const [state,dispatch]=useReducer(formReducer,initialState);
    function handleSubmit(){
        if(!state.name || !state.email){
            dispatch({type:"SET_ERROR",error:"all fields required"});
            return;
        }
        alert("Submitted");
    }
  return (
    <div>
      name:<input value={state.name} onChange={(e)=>dispatch({type:"Field_change",field:"name",value:e.target.value})}></input>
      email:<input value={state.email}onChange={(e)=>dispatch({type:"Field_change",field:"email",value:e.target.value})}></input>
      age<input value={state.age} onChange={(e)=>dispatch({type:"Field_change",field:"age",value:e.target.value})}></input>
      <p>{state.error}</p>
      <button onClick={handleSubmit}>submit</button>
      <button onClick={(e)=>dispatch({type:"reset"})}>reset</button>

    </div>
  )
}

export default UseReducerFormExample

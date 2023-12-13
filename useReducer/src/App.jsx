import { useReducer } from "react";

export const App = () => {
  const [state,dispatch]=useReducer((state,action)=>{
    switch(action.type){
      case "SET_NAME":
        return {...state, name:action.payload}

    }
  },{
    names:[],
    name:"",

  });
  return (
    <div>
      App
        <input
         type="text"
         value ={state.name}
         onChange={e =>dispatch({ type:"SET_NAME",payload: e.target.value })}
        
        />

        <div> {state.name}</div>
        
      </div>
  )
}
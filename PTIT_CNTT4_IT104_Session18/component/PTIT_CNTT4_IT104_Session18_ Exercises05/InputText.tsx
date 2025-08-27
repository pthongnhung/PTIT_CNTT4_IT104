import React, { useReducer } from 'react'
type State={text: string}
type Action={
  type: "setText", payload: string
}
export default function InputText() {
  const reducer=(state: State, action: Action)=>{
    if(action.type=="setText"){
      return {...state, text: action.payload}
    }
    return state
  }
  const [state, dispatch]=useReducer(reducer, {text: ""})
  return (
    <div>
      <h1>{state.text}</h1>
      <input type="text" onChange={(e)=>dispatch({type: "setText", payload: e.target.value})}/>
    </div>
  )
}
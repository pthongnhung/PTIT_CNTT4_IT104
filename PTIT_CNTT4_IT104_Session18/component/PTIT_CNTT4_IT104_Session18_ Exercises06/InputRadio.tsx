import React, { useReducer } from 'react'
type State={radio: string}
type Action={
  type: "setRadio", payload: string
}
export default function InputRadio() {
  const reducer=(state: State, action: Action)=>{
    if(action.type=="setRadio"){
      return {...state, radio: action.payload}
    }
    return state
  }
  const [state, dispatch]=useReducer(reducer, {radio: "Nam"})
  return (
    <div>
      <h1>Selected gender: {state.radio}</h1>
      <input type="radio" name='gender' checked={state.radio === "Nam"} onChange={()=>dispatch({type: "setRadio", payload: "Nam"})}/> <label htmlFor="">Nam</label> <br />
      <input type="radio" name='gender' checked={state.radio === "Nu"} onChange={()=>dispatch({type: "setRadio", payload: "Nu"})}/> <label htmlFor="">Nu</label> <br />
      <input type="radio" name='gender' checked={state.radio === "Khac"} onChange={()=>dispatch({type: "setRadio", payload: "Khac"})}/> <label htmlFor="">Khac</label> <br />
    </div>
  )
}
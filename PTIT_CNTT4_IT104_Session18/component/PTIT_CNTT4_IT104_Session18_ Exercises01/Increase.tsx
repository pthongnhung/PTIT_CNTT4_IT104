import React,{ useReducer } from 'react'
type StateType = {
    type:"increase"
}
const initialState = 0;
const reducer = (state: number, action: StateType) => {
    switch (action.type) {
        case "increase":
            return (state+=1);
        default:
            return state
    }
    return state;
}

export default function Increase() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleIncrease = () => {
        dispatch({type:"increase"})
    }
  return (
      <div>
          <p>{ state}</p>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

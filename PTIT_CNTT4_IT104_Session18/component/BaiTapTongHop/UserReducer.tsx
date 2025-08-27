import React, { useReducer } from 'react'

export default function UseReducer() {
    const initialState={
        count:0
    };
    const countReducer=(state1:any,action1:any)=> {
        console.log("action",action1);
        // if(action1.type=="INCREASE"){
        //     return {count: state1.count+action1.payload};
        // }else if(action1.type=="DECREASE"){
        //     return {count:state1.count- action1.payload}
        // }
        // return state1;
        switch (action1.type) {
            case "INCREASE":
                return {count: state1.count+action1.payload};
            case "DECREASE":
                return {count: state1.count-action1.payload};
            default:
               return state1;
        }
    }
    const [state, dispatch]= useReducer(countReducer,initialState);
    const increase=()=>{
        dispatch({type:"INCREASE",payload:3});
    }
    const decrease=()=>{
        dispatch({type:"DECREASE",payload:1})
    }
  return (
    <div>
      <h1> UseReducer</h1>
      <p> giá trị count: {state.count}</p>
      <button onClick={increase}>tăng </button>
      <button onClick= {decrease}>giảm</button>
    </div>
  )
}
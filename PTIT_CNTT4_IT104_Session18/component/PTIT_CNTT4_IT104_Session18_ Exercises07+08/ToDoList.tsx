import React, { useEffect, useReducer } from 'react'
type Task={
    id: number,
    name: string,
}
type State={
    taskList: Task[],
    newTask: string
}
type Action={type: "addTask"} | {type: "change", payload: string} | {type: "delete", payload: number}
export default function Todolist() {
    const reducer=(state: State, action: Action): State=>{
        if(action.type=="addTask"){
            if(state.newTask==""){
                alert("khong duoc de trong ten cong viec");
                return state
            }
            if(state.taskList.some((item) => item.name==state.newTask)){
                alert("cong viec da ton tai");
                return state
            }
            const updatedList = [...state.taskList, {id: state.taskList.length==0 ? 1 : state.taskList[state.taskList.length-1].id+1, name: state.newTask}]
            return { ...state, taskList: updatedList, newTask: "" }
        }else if(action.type=="change"){
            return {...state, newTask: action.payload}
        } else if(action.type=="delete"){
            if(confirm("xoa cong viec?")){
                return {...state,taskList: state.taskList.filter((item) => item.id!=action.payload)}
            }
            return state
        }
        return state;
    }
    const [state, dispatch]=useReducer(reducer, {taskList: JSON.parse(localStorage.getItem("taskList") || '[]'), newTask: ""})
    useEffect(()=>localStorage.setItem("taskList", JSON.stringify(state.taskList)), [state.taskList]);
  return (
    <div style={{width: "1000px", margin: "auto", display: "flex", flexDirection: "column", alignItems: "center"}}>
      <div style={{display: "flex", gap: "10px", width: "350px"}}>
        <input value={state.newTask} type="text" placeholder='Nhap ten cong viec' style={{width: "100%"}} onChange={(e)=>dispatch({type: "change", payload: e.target.value})}/>
        <button onClick={()=>dispatch({type: "addTask"})}>Them</button>
      </div>
      <div>{state.taskList.map((item: Task, index: number) =>{
        return <div key={index} style={{display: "flex", justifyContent: "space-between", width: "350px", height: "50px"}}>
            <div>{item.name}</div>
            <button onClick={()=>dispatch({type: "delete", payload: item.id})}>Xoa</button>
        </div>
      })}</div>
    </div>
  )
}
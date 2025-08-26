import React, { useEffect, useState } from 'react'
import './ToDoList.css'
type Task={
    id: number,
    name: string,
    isCompleted: boolean
}
type State={
    task: Task,
    taskList: Task[]
}
export default function ToDoList() {
    const [state, setState]=useState<State>({
      task:{id: 0, name: "", isCompleted: false},
      taskList:JSON.parse(localStorage.getItem("taskList") || "[]")
    })
    useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(state.taskList))
    }, [state.taskList])
    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
      setState({...state, task: { ...state.task, name: e.target.value }})
    }
    const addTask=()=>{
      if(state.task.name==''){
        alert("khong duoc de trong thong tin");
        return;
      }
      if(state.taskList.some((item) => item.name==state.task.name)){
        alert("cong viec khong duoc trung nhau");
        return;
      }
      setState({task: {id: 0, name: "", isCompleted: false}, taskList: [...state.taskList, {id: state.taskList.length==0 ? 1 : state.taskList[state.taskList.length-1].id+1, name: state.task.name, isCompleted: false}]})
    }
    const deletetask=(id: number)=>{
      if(confirm("xoa cong viec?")){
        setState({...state, taskList: state.taskList.filter(element => element.id!=id)})
      }
    }
  return (
    <div className='container'>
      <h2>Danh sach cong viec</h2>
      <div className='input-line'>
        <input type="text" value={state.task.name} placeholder='Nhap ten cong viec' onChange={handleChange}/>
        <button onClick={addTask}>Them</button>
      </div>
      <div className='task-container'>
        {state.taskList.map((item, index)=>{
          return <div key={index} className='task'>
            <div className='task-info'>
              <input type="checkbox"/>
              <label htmlFor="">{item.name}</label>
            </div>
            <div className='button-container'>
              <button className='fix'>Sua</button>
              <button className='delete' onClick={()=>deletetask(item.id)}>Xoa</button>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}
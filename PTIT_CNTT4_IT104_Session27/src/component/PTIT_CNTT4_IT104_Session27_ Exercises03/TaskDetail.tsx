import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { tasks } from './tasks';

export default function TaskDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const task = tasks.find((t) =>
        t.id == Number(id)
    )
    if (!task) {
        return <p>khong tim thay task</p>
    }
  return (
    <div>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
          <button onClick={()=>navigate(-1)}>quay lai</button>
    </div>
  )
}

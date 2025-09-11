
import React from 'react'
import { tasks } from './tasks';
import { Link } from 'react-router-dom';

export default function TaskList() {
  return (
    <div>
      <h1>Danh sach cong viec</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
                <p>{task.description}</p>
                <Link to={`/task/${task.id}`}> xem chi tiet</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

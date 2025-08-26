import React,{useState} from 'react'

export default function UserName() {
    const [name,setName]=useState<string>("Pham Thi Hong Nhung")
  return (
    <div>
          <h2>Ho va ten: { name}</h2>
    </div>
  )
}

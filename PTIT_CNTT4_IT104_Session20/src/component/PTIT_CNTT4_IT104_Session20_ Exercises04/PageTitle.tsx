import React, { useEffect, useState } from 'react'

export default function PageTitle() {
    const [name,setName]=useState('');
    useEffect(()=>{
        if(name) document.title = `Chao muwng banj den voiws ${name}`
        else document.title = "Chào mừng trang wed của bạn"
    },[name])
  return (
    <div>
      <input type="text" 
      placeholder='Nhập tên của bạn'
      value={name}
      onChange={(e) => setName(e.target.value)}
      />
    </div>
  )
}
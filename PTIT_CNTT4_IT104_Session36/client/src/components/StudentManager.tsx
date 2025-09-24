import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '../store/slices/userSlice';

export default function StudentManager() {
    const result = useSelector((data) => {
        console.log("Data",data);
        return data.users.users
    })
    const dispatch:any=useDispatch()
    useEffect(() => {
        dispatch(getAllUser())
    },[])
  return (
    <div>
          <h1>Quan li user</h1>
          <ul>
              {result.map((item, index) => {
                  <li key={index}>{item.name }</li>
              })}
          </ul>
    </div>
  )
}

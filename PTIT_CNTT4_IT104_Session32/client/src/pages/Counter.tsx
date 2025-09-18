import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Counter() {
    const result = useSelector(data => {
        console.log("data", data);
        return data
    })
    const dispach=useDispatch()
    const increase = () => {
        dispach({
            type:"INCREMENT"
        })
    }
    const decreae = () => {
        dispach({
          type: "DESC",
        });
    }
  return (
    <div>
          <h1>Ung dung counter</h1>
          <p>gia tri count:{result.count} </p>
          <button onClick={increase}>tang</button>
          <button onClick={decreae}>giam</button>
    </div>
  )
}

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { Data } from '../utils/types';
import { increment, decrement, reset } from "../store/slices/counterSlice";

export default function Counter() {
  const result = useSelector((data:Data) => {
    console.log("Data", data);
    return data.counter.value
  })
  const dispatch = useDispatch()
  //Ham tang gia tri
  const increase = () => {
    dispatch(increment())
  };
  const decrements = () => {
    dispatch(decrement())
  }
  const resets = () => {
    dispatch(reset());
  };

  return (
    <div>
      gia tri counter:{result}
      <button onClick={increase}>tang</button>
      <button onClick={decrements}>giam</button>
      <button onClick={resets}>reset</button>
    </div>
  );
}

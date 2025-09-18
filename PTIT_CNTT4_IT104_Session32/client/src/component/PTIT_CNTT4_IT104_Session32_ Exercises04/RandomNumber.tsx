
// src/component/RandomNumberApp/RandomNumber.tsx

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RandomState } from "./store/randomReducer";

export default function RandomNumber() {
  const dispatch = useDispatch();
  const numbers = useSelector((state: any) => state.random.numbers);

  const handleGenerate = () => {
    const random = Math.floor(Math.random() * 100);
    dispatch({ type: "ADD_RANDOM_NUMBER", payload: random });
  };

  return (
    <div>
      <h2>Danh sách số ngẫu nhiên</h2>
      <button onClick={handleGenerate}>Generate Random Number</button>
      <ul>
        {numbers.map((num: number, index: number) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
}
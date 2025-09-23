import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { randomNumber } from "../../store/slices/intListSlice";


export default function Random() {
  const result = useSelector((state: any) => state.int.value);

  const dispatch = useDispatch();

  const random = () => {
    dispatch(randomNumber({ min: 5, max: 10 }));
  };

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: 40 }}>
        <h2>List number: [{result.join(",")}]</h2>
        <button onClick={random}>Random number</button>
      </div>
    </div>
  );
}

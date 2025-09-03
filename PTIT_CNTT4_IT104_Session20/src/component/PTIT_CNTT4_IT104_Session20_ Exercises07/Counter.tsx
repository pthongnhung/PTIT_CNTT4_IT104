import React, { useReducer } from 'react';

const reducer = (state: number, action: { type: string }) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

export default function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial', textAlign: 'center' }}>
      <h2>Bộ đếm</h2>
      <p style={{ fontSize: '24px' }}>Giá trị hiện tại: <strong>{count}</strong></p>
      
      <button
        onClick={() => dispatch({ type: 'INCREMENT' })}
        style={{ marginRight: '10px', padding: '10px 20px' }}
      >
        + Tăng
      </button>

      <button
        onClick={() => dispatch({ type: 'DECREMENT' })}
        style={{ padding: '10px 20px' }}
      >
        - Giảm
      </button>
    </div>
  );
}
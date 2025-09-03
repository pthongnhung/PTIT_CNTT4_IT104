import React, { useState } from 'react';

export default function InputLengthCheck() {
  const [text, setText] = useState('');

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h2>Kiểm tra độ dài chuỗi</h2>

      <input
        type="text"
        placeholder="Nhập chuỗi..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: '10px',
          fontSize: '16px',
          width: '300px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />

      {text.length > 5 && (
        <p style={{ color: 'green', marginTop: '10px' }}>
        </p>
      )}
    </div>
  );
}
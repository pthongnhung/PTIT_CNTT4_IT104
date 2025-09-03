import React, { useEffect, useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2>Bộ đếm thời gian</h2>
      <p>
        Giây đã trôi qua: <strong>{count}</strong>
      </p>
    </div>
  );
}

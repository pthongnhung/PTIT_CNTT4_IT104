import React from "react";
import Cart from "./Cart";

export default function Main() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <main className="main">
      {numbers.map((num) => (
        <Cart key={num} />
      ))}
    </main>
  );
}

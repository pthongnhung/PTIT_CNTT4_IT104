import React, { useState } from "react";

export default function RandomQuote() {
  const quotes = ["Orange.", "Apple.", "Spring Onion.", "Pineapple.", "Grape"];

  const [quote, setQuote] = useState("Nhấn nút để lấy câu nói!");

  const handleNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Random Quote</h2>
      <p>{quote}</p>
      <button onClick={handleNewQuote}>Lấy câu nói mới</button>
    </div>
  );
}

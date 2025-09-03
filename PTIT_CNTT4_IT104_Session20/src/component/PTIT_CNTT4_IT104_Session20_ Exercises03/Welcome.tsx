import React, { useEffect } from "react";

export default function Welcome() {
  useEffect(() => {
    console.log("Chào mừng bạn lần đầu đến với ứng của chúng tôi");
  }, []);

  return (
    <div>
      <h2> Xin chào bạn đến với ứng dụng của chúng tôi</h2>
    </div>
  );
}

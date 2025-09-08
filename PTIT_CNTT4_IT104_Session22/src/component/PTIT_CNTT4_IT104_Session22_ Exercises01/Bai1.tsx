import React from 'react'
import Button from "react-bootstrap/Button";
export default function Bai1() {
  return (
    <div className="flex gap-2">
      <Button variant="primary">Luu</Button>
      <Button variant="secondary">Huy</Button>
      <Button variant="success">Thanh cong</Button>
      <Button variant="warning">Canh bao</Button>
      <Button variant="danger">Bao loi</Button>
      <Button variant="info">Thong tin</Button>

      <Button variant="link">Huong dan</Button>
    </div>
  );
}

import React from 'react'
import Form from "react-bootstrap/Form";
export default function Bai2() {
  return (
    <div>
        <Form.Control size="lg" type="text" placeholder="Input co lon" />
        <br />
        <Form.Control type="text" placeholder="Input co trung binh" />
        <br />
        <Form.Control size="sm" type="text" placeholder="Input co be" />

    </div>
  );
}

import React from 'react'
import Form from "react-bootstrap/Form";
export default function Bai4() {
  return (
    <div className="w-[400px]">
      <Form.Select aria-label="Default select example">
        <option>Pham Thi Hong Nhung</option>
        <option value="1">Cai dat</option>
        <option value="2">Mat khau</option>
        <option value="3">Dang xuat</option>
      </Form.Select>
    </div>
  );
}

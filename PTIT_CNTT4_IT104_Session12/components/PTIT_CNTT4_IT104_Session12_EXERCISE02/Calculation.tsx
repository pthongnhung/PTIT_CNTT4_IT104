import React from 'react'

export default function Calculation() {
    function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function divide(a: number, b: number): number {
    return a / b;
}
    const x:number = 10;
    const y:number = 10;
  return (
    <div>
          <h1>Danh sach ket qua</h1>
          <ul>
              <li>{x} +{y} = {add(x, y)}</li>
              <li>{x} - {y} = {subtract(x, y)}</li>
              <li>{x} * {y} = {multiply(x, y)}</li>
              <li>{x} / {y} = {divide(x, y)}</li>
          </ul>
    </div>
  )
}

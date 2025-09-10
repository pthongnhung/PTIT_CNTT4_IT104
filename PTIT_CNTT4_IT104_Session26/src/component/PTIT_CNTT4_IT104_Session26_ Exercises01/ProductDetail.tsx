import React from 'react'
import {useParams} from 'react-router-dom'
export default function ProductDetail() {
    const {id}=useParams();
  return (
    <div>
          <h2>chi tiet san pham</h2>
          <h2>id:{id}</h2>
    </div>
  )
}

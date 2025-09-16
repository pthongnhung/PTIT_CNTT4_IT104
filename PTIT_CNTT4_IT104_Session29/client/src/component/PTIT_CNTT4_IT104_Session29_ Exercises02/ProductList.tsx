import React, { useEffect, useState } from "react";
import { getAllProduct } from "./GetAllProduct";

type Product = {
  id: number;
  product_name: string;
  image: string;
  price: number;
  quantity: number;
  created_at: string;
};

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProduct();
      setProducts(data);
      console.log(data);
      
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2> Danh sách sản phẩm</h2>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            {item.product_name} - {item.price} VNĐ
          </li>
        ))}
      </ul>
    </div>
  );
}

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { products } from "../PTIT_CNTT4_IT104_Session27_ Exercises02/data";

export default function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("search") || "";
  const [keyword, setKeyword] = useState(query);

  useEffect(() => {
    setKeyword(query);
  }, [query]);

  const handleSearch = () => {
    if (keyword.trim() !== "") {
      setSearchParams({ search: keyword });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: "24px auto", padding: 16 }}>
      <h1>Danh sách sản phẩm</h1>

      <div style={{ marginBottom: 16 }}>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Nhập từ khóa tìm kiếm..."
          style={{
            padding: "8px 12px",
            border: "1px solid #ccc",
            borderRadius: 6,
            marginRight: 8,
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "8px 16px",
            background: "#1d4ed8",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((p) => (
          <li
            key={p.id}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: 8,
              padding: 16,
              marginBottom: 12,
            }}
          >
            <h3>{p.name}</h3>
            <p>Giá: {p.price.toLocaleString()} VND</p>
            <p>{p.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

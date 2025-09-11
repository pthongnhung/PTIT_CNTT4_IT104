import { Link } from "react-router-dom";
import { products } from "./data";


export default function ProductList() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {products.map((p) => (
        <div
          key={p.id}
          className="bg-white border rounded-2xl p-4 shadow hover:shadow-lg transition"
        >
          <h2 className="font-semibold text-lg text-gray-800">{p.name}</h2>
          <p className="text-gray-600 mt-1">{p.price}</p>
          <Link
            to={`/products/${p.id}`}
            className="mt-3 inline-block text-sm text-blue-600 no-underline font-medium hover:underline"
          >
            Xem chi tiết →
          </Link>
        </div>
      ))}
    </div>
  );
}

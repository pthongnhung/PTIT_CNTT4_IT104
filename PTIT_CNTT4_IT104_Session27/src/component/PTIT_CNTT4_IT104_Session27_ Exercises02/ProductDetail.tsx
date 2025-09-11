import { useParams, useNavigate } from "react-router-dom";
import { products } from "./data";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <p className="text-center text-red-500 mt-10">Sản phẩm không tồn tại.</p>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
      <p className="text-gray-700 mt-2">{product.price}</p>
      <p className="mt-4 text-gray-600">{product.description}</p>
      <button
        onClick={() => navigate(-1)}
        className="mt-6 inline-block bg-blue-600 text-white px-4 py-2  rounded-xl hover:bg-blue-700 transition"
      >
        ← Quay lại danh sách
      </button>
    </div>
  );
}

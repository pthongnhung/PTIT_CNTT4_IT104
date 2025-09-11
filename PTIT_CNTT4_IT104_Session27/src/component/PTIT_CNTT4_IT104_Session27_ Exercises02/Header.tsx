import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <div className="text-center w-screen">
          <h1 className="text-xl font-bold ">Trang Chi Tiết Sản Phẩm</h1>
          <p> Danh sách sản phẩm</p>
        </div>
        <nav>
          <Link to="/products" className="hover:underline"></Link>
        </nav>
      </div>
    </header>
  );
}

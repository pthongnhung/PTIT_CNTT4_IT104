import axios from "axios";
import React, { useEffect, useState } from "react";
import BlockConfirm from "./BlockConfirm";
import EditPostModal from "./EditPostModal";

interface Post {
  id: number;
  title: string;
  image: string;
  date: string;
  status: boolean;
  content?: string;
}

export default function PostManager() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [openAdd, setOpenAdd] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const [openBlock, setOpenBlock] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [blocking, setBlocking] = useState(false);

  const [openEdit, setOpenEdit] = useState(false);
  const [editPost, setEditPost] = useState<Post | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editImage, setEditImage] = useState("");
  const [editContent, setEditContent] = useState("");
  const [editError, setEditError] = useState("");
  const [editing, setEditing] = useState(false);

  const [keyword, setKeyword] = useState("");
  const [searchResults, setSearchResults] = useState<Post[]>([]);
  const [searching, setSearching] = useState(false);

  async function getAllPost() {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:8080/posts");
      setPosts(response.data);
    } catch (error) {
      console.error("Loi goi API: ", error);
    } finally {
      setTimeout(() => setLoading(false), 1000);
    }
  }

  useEffect(() => {
    getAllPost();
  }, []);

  function todayDDMMYYYY() {
    const d = new Date();
    return `${String(d.getDate()).padStart(2, "0")}/${String(
      d.getMonth() + 1
    ).padStart(2, "0")}/${d.getFullYear()}`;
  }

  async function handleAddPost(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return setError("Tên bài viết không được để trống.");
    if (!image.trim()) return setError("Hình ảnh không được để trống.");
    if (!content.trim()) return setError("Nội dung không được để trống.");

    try {
      setSubmitting(true);
      await axios.post("http://localhost:8080/posts", {
        title: title.trim(),
        image: image.trim(),
        content: content.trim(),
        date: todayDDMMYYYY(),
        status: true,
      });
      await getAllPost();
      setOpenAdd(false);
      setTitle("");
      setImage("");
      setContent("");
      setError("");
    } catch {
      setError("Không thể tạo bài viết.");
    } finally {
      setSubmitting(false);
    }
  }

  function handleAskBlock(post: Post) {
    setSelectedPost(post);
    setOpenBlock(true);
  }
  function handleCancelBlock() {
    setOpenBlock(false);
    setSelectedPost(null);
    setBlocking(false);
  }
  async function handleConfirmBlock() {
    if (!selectedPost) return;
    try {
      setBlocking(true);
      await axios.patch(`http://localhost:8080/posts/${selectedPost.id}`, {
        status: !selectedPost.status,
      });
      await getAllPost();
      handleCancelBlock();
    } catch (e) {
      console.error("Cập nhật trạng thái (chặn/bỏ chặn) thất bại:", e);
      setBlocking(false);
    }
  }

  function handleAskEdit(post: Post) {
    setEditPost(post);
    setEditTitle(post.title);
    setEditImage(post.image);
    setEditContent(post.content || "");
    setEditError("");
    setOpenEdit(true);
  }
  function handleCancelEdit() {
    setOpenEdit(false);
    setEditPost(null);
    setEditError("");
  }
  async function handleConfirmEdit(e: React.FormEvent) {
    e.preventDefault();
    if (!editTitle.trim())
      return setEditError("Tên bài viết không được để trống.");
    if (!editImage.trim()) return setEditError("Hình ảnh không được để trống.");
    if (!editContent.trim())
      return setEditError("Nội dung không được để trống.");

    const duplicate = posts.some(
      (p) =>
        p.id !== editPost?.id &&
        p.title.trim().toLowerCase() === editTitle.trim().toLowerCase()
    );
    if (duplicate) return setEditError("Tên bài viết đã tồn tại.");

    try {
      setEditing(true);
      await axios.patch(`http://localhost:8080/posts/${editPost?.id}`, {
        title: editTitle.trim(),
        image: editImage.trim(),
        content: editContent.trim(),
      });
      await getAllPost();
      handleCancelEdit();
    } catch {
      setEditError("Cập nhật thất bại.");
    } finally {
      setEditing(false);
    }
  }

  async function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setKeyword(value);

    if (!value.trim()) {
      setSearchResults([]);
      return;
    }
    try {
      setSearching(true);
      const res = await axios.get<Post[]>(
        `http://localhost:8080/posts?title_like=${encodeURIComponent(value)}`
      );
      setSearchResults(res.data);
    } catch (err) {
      console.error("Lỗi tìm kiếm:", err);
    } finally {
      setSearching(false);
    }
  }

  const viewing = keyword ? searchResults : posts;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Nhập từ khóa tìm kiếm"
            value={keyword}
            onChange={handleSearch}
            className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <select className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
            <option>Lọc bài viết</option>
            <option>Đã xuất bản</option>
            <option>Bản nháp</option>
          </select>
        </div>
        <button
          onClick={() => setOpenAdd(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Thêm mới bài viết
        </button>
      </div>

      <table className="w-full border-collapse bg-white rounded-lg shadow">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-4 py-2 border">STT</th>
            <th className="px-4 py-2 border">Tiêu đề</th>
            <th className="px-4 py-2 border">Hình ảnh</th>
            <th className="px-4 py-2 border">Ngày viết</th>
            <th className="px-4 py-2 border">Trạng thái</th>
            <th className="px-4 py-2 border">Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {loading || searching ? (
            <tr>
              <td colSpan={6} className="text-center py-4">
                Đang loading...
              </td>
            </tr>
          ) : keyword && viewing.length === 0 ? (
            <tr>
              <td colSpan={6} className="text-center py-4 text-gray-500">
                Không có kết quả tìm kiếm
              </td>
            </tr>
          ) : (
            viewing.map((post, index) => (
              <tr key={post.id} className="text-sm">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{post.title}</td>
                <td className="px-4 py-2 border">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-10 h-10 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-2 border">{post.date}</td>
                <td className="px-4 py-2 border">
                  {post.status ? (
                    <span className="px-2 py-1 text-green-600 bg-green-100 rounded">
                      Đã xuất bản
                    </span>
                  ) : (
                    <span className="px-2 py-1 text-gray-600 bg-gray-100 rounded">
                      Bản nháp
                    </span>
                  )}
                </td>
                <td className="px-4 py-2 border flex gap-2">
                  <button
                    className="px-2 py-1 text-white bg-yellow-500 rounded hover:bg-yellow-600"
                    onClick={() => handleAskBlock(post)}
                  >
                    Chặn
                  </button>
                  <button
                    className="px-2 py-1 text-white bg-blue-500 rounded hover:bg-blue-600"
                    onClick={() => handleAskEdit(post)}
                  >
                    Sửa
                  </button>
                  <button className="px-2 py-1 text-white bg-rose-500 rounded hover:bg-rose-600">
                    Xóa
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {openAdd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpenAdd(false)}
          />
          <div className="relative w-full max-w-lg bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Thêm mới bài viết</h2>
            <form onSubmit={handleAddPost} className="space-y-4">
              <div>
                <label className="block mb-1">Tên bài viết</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block mb-1">Hình ảnh</label>
                <input
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block mb-1">Nội dung</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full border rounded px-3 py-2 min-h-[100px]"
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setTitle("");
                    setImage("");
                    setContent("");
                    setError("");
                  }}
                  className="px-4 py-2 border rounded-lg"
                >
                  Làm mới
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-60"
                >
                  {submitting ? "Đang lưu..." : "Xuất bản"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <EditPostModal
        open={openEdit}
        title={editTitle}
        image={editImage}
        content={editContent}
        error={editError}
        loading={editing}
        onChangeTitle={setEditTitle}
        onChangeImage={setEditImage}
        onChangeContent={setEditContent}
        onCancel={handleCancelEdit}
        onSubmit={handleConfirmEdit}
      />

      <BlockConfirm
        open={openBlock}
        postTitle={selectedPost?.title}
        isBlocked={selectedPost ? !selectedPost.status : undefined}
        onCancel={handleCancelBlock}
        onConfirm={handleConfirmBlock}
        loading={blocking}
      />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";

interface Props {
  open: boolean;
  onClose: () => void;
  onSuccess: () => Promise<void>;
}

export default function AddPostModal({ open, onClose, onSuccess }: Props) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (open) {
      setTitle("");
      setImage("");
      setContent("");
      setError("");
    }
  }, [open]);

  function todayDDMMYYYY() {
    const d = new Date();
    return `${String(d.getDate()).padStart(2, "0")}/${String(
      d.getMonth() + 1
    ).padStart(2, "0")}/${d.getFullYear()}`;
  }

  async function handleSubmit(e: React.FormEvent) {
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
      await onSuccess();
      onClose();
    } catch {
      setError("Không thể tạo bài viết. Vui lòng thử lại.");
    } finally {
      setSubmitting(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-2xl rounded-xl bg-white shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Thêm mới bài viết</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
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
              className="w-full border rounded px-3 py-2 min-h-[150px]"
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
  );
}

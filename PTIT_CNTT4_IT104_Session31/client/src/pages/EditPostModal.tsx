import React from "react";

export interface EditPostModalProps {
  open: boolean;
  title: string;
  image: string;
  content: string;
  error?: string;
  loading?: boolean;
  onChangeTitle: (v: string) => void;
  onChangeImage: (v: string) => void;
  onChangeContent: (v: string) => void;
  onCancel: () => void;
  onSubmit: (e: React.FormEvent) => void; // gọi từ form submit
}

export default function EditPostModal({
  open,
  title,
  image,
  content,
  error,
  loading,
  onChangeTitle,
  onChangeImage,
  onChangeContent,
  onCancel,
  onSubmit,
}: EditPostModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onCancel} />
      <div className="relative w-full max-w-lg bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Cập nhật bài viết</h2>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Tên bài viết</label>
            <input
              value={title}
              onChange={(e) => onChangeTitle(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1">Hình ảnh</label>
            <input
              value={image}
              onChange={(e) => onChangeImage(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1">Nội dung</label>
            <textarea
              value={content}
              onChange={(e) => onChangeContent(e.target.value)}
              className="w-full border rounded px-3 py-2 min-h-[100px]"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 border rounded-lg"
            >
              Hủy
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-60"
            >
              {loading ? "Đang lưu..." : "Cập nhật"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

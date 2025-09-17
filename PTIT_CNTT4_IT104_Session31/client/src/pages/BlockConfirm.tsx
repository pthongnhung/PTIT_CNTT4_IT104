import React from "react";

interface BlockConfirmProps {
  open: boolean;
  postTitle?: string;
  isBlocked?: boolean; // true = đang bị chặn (bản nháp), false = đang xuất bản
  onCancel: () => void;
  onConfirm: () => void;
  loading?: boolean;
}

export default function BlockConfirm({
  open,
  postTitle,
  isBlocked,
  onCancel,
  onConfirm,
  loading,
}: BlockConfirmProps) {
  if (!open) return null;

  const message = isBlocked
    ? "Bạn có chắc chắn muốn MỞ CHẶN (xuất bản lại) bài viết"
    : "Bạn có chắc chắn muốn NGỪNG XUẤT BẢN (chặn) bài viết";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onCancel} />
      <div className="relative w-full max-w-md bg-white rounded-xl shadow p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold">Xác nhận</h3>
          <button onClick={onCancel} className="p-2 rounded hover:bg-gray-100">
            ✕
          </button>
        </div>

        <div className="flex items-start gap-3">
          <span className="mt-1">⚠️</span>
          <p>
            {message} {postTitle ? <strong>“{postTitle}”</strong> : ""}?
          </p>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-lg border hover:bg-gray-50"
          >
            Hủy
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Đang xử lý..." : "Xác nhận"}
          </button>
        </div>
      </div>
    </div>
  );
}

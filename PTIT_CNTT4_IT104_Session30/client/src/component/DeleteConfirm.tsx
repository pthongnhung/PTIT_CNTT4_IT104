// src/components/DeleteConfirm.tsx
import React from "react";

interface Props {
  open: boolean;
  taskTitle?: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function DeleteConfirm({
  open,
  taskTitle,
  onCancel,
  onConfirm,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onCancel} />
      <div className="relative w-full max-w-md rounded-xl bg-white shadow-xl p-5">
        <h3 className="text-lg font-semibold">Xác nhận</h3>
        <p className="mt-3">
          Bạn có chắc muốn xóa công việc <b>&lt;{taskTitle}&gt;</b> không?
        </p>
        <div className="mt-5 flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
          >
            Hủy
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg bg-rose-500 text-white hover:bg-rose-600"
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
}

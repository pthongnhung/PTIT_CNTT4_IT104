import React, { useState, useEffect } from "react";

interface EditTaskProps {
  open: boolean;
  taskTitle?: string;
  onCancel: () => void;
  onConfirm: (newTitle: string) => void;
  existingTitles: string[]; // để check trùng
}

export default function EditTask({
  open,
  taskTitle,
  onCancel,
  onConfirm,
  existingTitles,
}: EditTaskProps) {
  const [newTitle, setNewTitle] = useState(taskTitle || "");
  const [error, setError] = useState("");

  useEffect(() => {
    setNewTitle(taskTitle || "");
    setError("");
  }, [taskTitle, open]);

  function handleConfirm() {
    const trimmed = newTitle.trim();
    if (!trimmed) {
      setError("Tên công việc không được để trống.");
      return;
    }
    if (
      existingTitles.includes(trimmed) &&
      trimmed.toLowerCase() !== (taskTitle || "").toLowerCase()
    ) {
      setError("Tên công việc đã tồn tại.");
      return;
    }
    onConfirm(trimmed);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
        <h2 className="text-lg font-semibold mb-4">Sửa công việc</h2>

        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

        <div className="flex justify-end gap-3 mt-5">
          <button
            onClick={onCancel}
            className="px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            Hủy
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Cập nhật
          </button>
        </div>
      </div>
    </div>
  );
}

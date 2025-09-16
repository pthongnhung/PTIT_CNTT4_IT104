import axios from "axios";
import React, { useEffect, useState } from "react";
import DeleteConfirm from "./DeleteConfirm";
import Load from "./Load";
import EditTask from "./EditTask";

interface Task {
  id: number;
  title: string;
  status: boolean;
}

export default function TodoUI() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [openConfirm, setOpenConfirm] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const [openEdit, setOpenEdit] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const [title, setTitle] = useState<string>("");
  const [errorTitle, setErrorTitle] = useState<string>("");
  const [adding, setAdding] = useState<boolean>(false);

  async function getAllTask() {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:8080/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("loi API", error);
    } finally {
      setTimeout(() => setLoading(false), 2000);
    }
  }

  useEffect(() => {
    getAllTask();
  }, []);

  function handleAskDelete(task: Task) {
    setSelectedTask(task);
    setOpenConfirm(true);
  }

  function handleCancelDelete() {
    setOpenConfirm(false);
    setSelectedTask(null);
  }

  async function handleConfirmDelete() {
    if (!selectedTask) return;
    try {
      await axios.delete(`http://localhost:8080/tasks/${selectedTask.id}`);
      setOpenConfirm(false);
      setSelectedTask(null);
      await getAllTask();
    } catch (e) {
      console.error("Xóa thất bại:", e);
    }
  }

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
    if (errorTitle) setErrorTitle("");
  }

  async function handleAddTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) {
      setErrorTitle("Tên công việc không được để trống.");
      return;
    }
    try {
      setAdding(true);
      await axios.post("http://localhost:8080/tasks", {
        title: trimmed,
        status: false,
      });
      setTitle("");
      await getAllTask();
    } catch (err) {
      console.error("Thêm công việc thất bại:", err);
    } finally {
      setAdding(false);
    }
  }

  async function handleToggleStatus(task: Task) {
    try {
      const nextStatus = !task.status;
      await axios.patch(`http://localhost:8080/tasks/${task.id}`, {
        status: nextStatus,
      });

      const updated = tasks.map((t) =>
        t.id === task.id ? { ...t, status: nextStatus } : t
      );
      setTasks(updated);

      const allDone = updated.length > 0 && updated.every((t) => t.status);
      if (allDone) {
        alert("Hoàn thành công việc");
      }
    } catch (err) {
      console.error("Cập nhật trạng thái thất bại:", err);
    }
  }

  function handleAskEdit(task: Task) {
    setEditingTask(task);
    setOpenEdit(true);
  }

  function handleCancelEdit() {
    setOpenEdit(false);
    setEditingTask(null);
  }

  async function handleConfirmEdit(newTitle: string) {
    if (!editingTask) return;
    try {
      await axios.patch(`http://localhost:8080/tasks/${editingTask.id}`, {
        title: newTitle,
      });
      setOpenEdit(false);
      setEditingTask(null);
      await getAllTask();
    } catch (err) {
      console.error("Cập nhật thất bại:", err);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center p-6">
      <div className="w-full max-w-xl rounded-xl bg-white shadow border border-gray-200">
        <h1 className="text-center text-2xl font-semibold py-5 border-b">
          Quản lý công việc
        </h1>

        <div className="p-5 space-y-6">
          <form
            onSubmit={handleAddTask}
            className="rounded-xl border border-gray-200 p-4 shadow-sm"
          >
            <div className="flex gap-3">
              <div className="flex-1">
                <input
                  type="text"
                  value={title}
                  onChange={handleTitleChange}
                  placeholder="Nhập tên công việc"
                  className={`flex-1 rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 ${
                    errorTitle
                      ? "border-red-400 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                />
                {errorTitle && (
                  <p className="mt-1 text-sm text-red-500">{errorTitle}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={adding}
                className="rounded-lg bg-blue-600 text-white px-5 py-3 font-medium hover:bg-blue-700 active:scale-[0.99] transition disabled:opacity-60"
              >
                {adding ? "Đang thêm..." : "Thêm công việc"}
              </button>
            </div>
          </form>

          <div className="rounded-xl border border-gray-200 p-3 shadow-sm">
            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-lg bg-blue-600 text-white shadow-sm">
                Tất cả
              </button>
              <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">
                Hoàn thành
              </button>
              <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50">
                Đang thực hiện
              </button>
            </div>
          </div>

          {loading ? (
            <Load />
          ) : (
            <div className="max-h-72 overflow-y-auto">
              <ul className="space-y-3">
                {tasks.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm"
                  >
                    <label className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={item.status}
                        onChange={() => handleToggleStatus(item)}
                        className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span
                        className={`text-gray-700 ${
                          item.status ? "line-through opacity-70" : ""
                        }`}
                      >
                        {item.title}
                      </span>
                    </label>
                    <div className="flex items-center gap-3">
                      <button
                        title="Sửa"
                        onClick={() => handleAskEdit(item)}
                        className="p-2 rounded-lg border border-yellow-300 text-yellow-600 hover:bg-yellow-50"
                      >
                        ✏️
                      </button>
                      <button
                        title="Xóa"
                        onClick={() => handleAskDelete(item)}
                        className="p-2 rounded-lg border border-rose-300 text-rose-600 hover:bg-rose-50"
                      >
                        🗑
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex items-center justify-between gap-4 pt-2">
            <button className="flex-1 rounded-lg bg-rose-500 px-4 py-3 text-white font-medium hover:bg-rose-600">
              Xóa công việc hoàn thành
            </button>
            <button className="flex-1 rounded-lg bg-rose-500 px-4 py-3 text-white font-medium hover:bg-rose-600">
              Xóa tất cả công việc
            </button>
          </div>
        </div>
      </div>

      <DeleteConfirm
        open={openConfirm}
        taskTitle={selectedTask?.title}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />

      <EditTask
        open={openEdit}
        taskTitle={editingTask?.title}
        onCancel={handleCancelEdit}
        onConfirm={handleConfirmEdit}
        existingTitles={tasks.map((t) => t.title)}
      />
    </div>
  );
}

import React, { Component } from "react";

type Todo = { id: number; title: string; done: boolean };
type State = {
  todos: Todo[];
  input: string;
  error: string;
  editingId: number | null; 
};

const key = "todos";

export default class TodoList extends Component<object, State> {
  state: State = { todos: [], input: "", error: "", editingId: null };

  componentDidMount() {
    const raw = localStorage.getItem(key);
    if (raw) this.setState({ todos: JSON.parse(raw) as Todo[] });
  }
  componentDidUpdate(_: object, prev: State) {
    if (prev.todos !== this.state.todos) {
      localStorage.setItem(key, JSON.stringify(this.state.todos));
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ input: e.target.value, error: "" });
  };

  handleAddOrUpdate = () => {
    const title = this.state.input.trim();
    if (!title) return this.setState({ error: "Tên công việc không được để trống" });


    if (this.state.editingId !== null) {
      this.setState(prev => ({
        todos: prev.todos.map(t =>
          t.id === prev.editingId ? { ...t, title } : t
        ),
        input: "",
        editingId: null,
      }));
      return;
    }

    // Nếu thêm mới
    if (this.state.todos.some(t => t.title.toLowerCase() === title.toLowerCase())) {
      return this.setState({ error: "Tên công việc không được phép trùng" });
    }
    const newTodo: Todo = { id: Date.now(), title, done: false };
    this.setState(prev => ({
      todos: [...prev.todos, newTodo],
      input: "",
    }));
  };

  handleToggle = (id: number) => {
    this.setState(prev => ({
      todos: prev.todos.map(t =>
        t.id === id ? { ...t, done: !t.done } : t
      ),
    }));
  };

  handleDelete = (id: number) => {
    const todo = this.state.todos.find(t => t.id === id);
    if (!todo) return;
    if (window.confirm(`Bạn có chắc muốn xóa công việc "${todo.title}" không?`)) {
      this.setState(prev => ({
        todos: prev.todos.filter(t => t.id !== id),
      }));
    }
  };

  handleEdit = (id: number, title: string) => {
    this.setState({ editingId: id, input: title });
  };

  render() {
    const { todos, input, error, editingId } = this.state;

    return (
      <div style={{ maxWidth: 600, margin: "20px auto", border: "1px solid #ddd", padding: 20, borderRadius: 8 }}>
        <h3>Danh sách công việc</h3>

        <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
          <input
            type="text"
            placeholder="Thêm công việc mới..."
            value={input}
            onChange={this.handleChange}
            style={{ flex: 1, padding: "6px 8px" }}
          />
          <button
            onClick={this.handleAddOrUpdate}
            style={{
              padding: "6px 12px",
              background: editingId ? "#f59e0b" : "#3b82f6",
              color: "#fff",
              border: "none",
              borderRadius: 4,
            }}
          >
            {editingId ? "Cập nhật" : "Thêm"}
          </button>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}

        <ul style={{ listStyle: "none", padding: 0 }}>
          {todos.map(todo => (
            <li
              key={todo.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 6,
                background: "#f8fafc",
                padding: "6px 8px",
                borderRadius: 4,
              }}
            >
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => this.handleToggle(todo.id)}
              />
              <span
                style={{
                  flex: 1,
                  textDecoration: todo.done ? "line-through" : "none",
                  opacity: todo.done ? 0.6 : 1,
                }}
              >
                {todo.title}
              </span>
              <button
                style={{ padding: "4px 10px", background: "#fde68a", border: "none", borderRadius: 4 }}
                onClick={() => this.handleEdit(todo.id, todo.title)}
              >
                Sửa
              </button>
              <button
                style={{ padding: "4px 10px", background: "#fecdd3", border: "none", borderRadius: 4 }}
                onClick={() => this.handleDelete(todo.id)}
              >
                Xóa
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

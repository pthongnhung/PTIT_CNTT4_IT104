import React, { Component } from "react";

type Student = {
  id: string;
  name: string;
  dob: string;   
  email: string;
  active: boolean; 
};

type State = {
  students: Student[];
  showForm: boolean;
  form: Student;
  error: string;
};

const STORAGE_KEY = "students";

export default class StudentManager extends Component<object, State> {
  state: State = {
    students: [],
    showForm: false,
    form: { id: "", name: "", dob: "", email: "", active: true },
    error: "",
  };

  componentDidMount() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) this.setState({ students: JSON.parse(raw) as Student[] });
  }

  componentDidUpdate(_: object, prev: State) {
    if (prev.students !== this.state.students) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.students));
    }
  }


  formatDate = (iso: string) => {
    if (!iso) return "";
    const d = new Date(iso);
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yy = d.getFullYear();
    return `${dd}/${mm}/${yy}`;
  };

  toggleForm = () =>
    this.setState({
      showForm: !this.state.showForm,
      error: "",
      form: { id: "", name: "", dob: "", email: "", active: true },
    });

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((prev) => ({ form: { ...prev.form, [name]: value } }));
  };

  validate = (): boolean => {
    const { id, name, dob, email } = this.state.form;

    if (!id.trim() || !name.trim() || !dob.trim() || !email.trim()) {
      this.setState({ error: "Không được để trống thông tin bắt buộc" });
      return false;
    }

    if (this.state.students.some((s) => s.id.toLowerCase() === id.toLowerCase())) {
      this.setState({ error: "Mã sinh viên đã tồn tại" });
      return false;
    }
    if (this.state.students.some((s) => s.email.toLowerCase() === email.toLowerCase())) {
      this.setState({ error: "Email đã tồn tại" });
      return false;
    }

    const at = email.indexOf("@");
    const dot = email.lastIndexOf(".");
    const hasSpace = email.includes(" ");
    const hasDoubleDot = email.includes("..");

    const emailOk =
      at > 0 &&
      dot > at + 1 &&
      dot < email.length - 1 &&
      !hasSpace &&
      !hasDoubleDot;

    if (!emailOk) {
      this.setState({ error: "Email không đúng định dạng" });
      return false;
    }

    return true;
  };

  addStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!this.validate()) return;
    this.setState((prev) => ({
      students: [...prev.students, prev.form],
      showForm: false,
    }));
    alert("Thêm tài khoản thành công!");
  };

 
  toggleActive = (id: string) => {
    const stu = this.state.students.find((s) => s.id === id);
    if (!stu) return;
    const ok = window.confirm(
      `Bạn có chắc muốn ${stu.active ? "chặn" : "mở chặn"} sinh viên "${stu.name}"?`
    );
    if (!ok) return;
    this.setState((prev) => ({
      students: prev.students.map((s) =>
        s.id === id ? { ...s, active: !s.active } : s
      ),
    }));
  };

  deleteStudent = (id: string) => {
    const stu = this.state.students.find((s) => s.id === id);
    if (!stu) return;
    const ok = window.confirm(`Bạn có chắc muốn xóa sinh viên "${stu.name}"?`);
    if (!ok) return;
    this.setState((prev) => ({
      students: prev.students.filter((s) => s.id !== id),
    }));
  };

  // ---- render ----
  render() {
    const { students, showForm, form, error } = this.state;

    return (
      <div style={{ maxWidth: 960, margin: "24px auto" }}>
        <h2>Quản lý sinh viên</h2>

        <div style={{ textAlign: "right", marginBottom: 12 }}>
          <button
            onClick={this.toggleForm}
            style={{
              background: "#3b82f6",
              color: "#fff",
              border: 0,
              padding: "8px 12px",
              borderRadius: 6,
            }}
          >
            Thêm mới sinh viên
          </button>
        </div>

        {/* Bảng danh sách */}
        <table
          width="100%"
          cellPadding={10}
          style={{ borderCollapse: "collapse", marginTop: 10 }}
        >
          <thead style={{ background: "#f1f5f9" }}>
            <tr>
              <th>STT</th>
              <th>Mã SV</th>
              <th>Tên SV</th>
              <th>Ngày sinh</th>
              <th>Email</th>
              <th>Trạng thái</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, i) => (
              <tr key={s.id}>
                <td>{i + 1}</td>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{this.formatDate(s.dob)}</td>
                <td>{s.email}</td>
                <td>
                  <span
                    style={{
                      padding: "2px 8px",
                      borderRadius: 999,
                      background: s.active ? "#dcfce7" : "#fee2e2",
                      color: s.active ? "#166534" : "#991b1b",
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    {s.active ? "Đang hoạt động" : "Ngừng hoạt động"}
                  </span>
                </td>
                <td>
                  <button
                    onClick={() => this.toggleActive(s.id)}
                    style={{
                      padding: "4px 10px",
                      marginRight: 6,
                      background: "#e0e7ff",
                      border: 0,
                      borderRadius: 6,
                    }}
                  >
                    {s.active ? "Chặn" : "Mở chặn"}
                  </button>
                  <button
                    onClick={() => this.deleteStudent(s.id)}
                    style={{
                      padding: "4px 10px",
                      background: "#fecdd3",
                      border: 0,
                      borderRadius: 6,
                    }}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Form thêm mới */}
        {showForm && (
          <div
            style={{
              marginTop: 18,
              border: "1px solid #e5e7eb",
              borderRadius: 8,
              padding: 16,
            }}
          >
            <h3>Thêm mới sinh viên</h3>
            <form
              onSubmit={this.addStudent}
              style={{ display: "grid", gap: 8, maxWidth: 440 }}
            >
              <input
                name="id"
                placeholder="Mã sinh viên"
                value={form.id}
                onChange={this.onChange}
              />
              <input
                name="name"
                placeholder="Tên sinh viên"
                value={form.name}
                onChange={this.onChange}
              />
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={this.onChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={this.onChange}
              />
              {error && <div style={{ color: "red", fontSize: 13 }}>{error}</div>}
              <div style={{ display: "flex", gap: 8 }}>
                <button type="button" onClick={this.toggleForm}>
                  Hủy
                </button>
                <button
                  type="submit"
                  style={{
                    background: "#16a34a",
                    color: "#fff",
                    border: 0,
                    padding: "6px 12px",
                    borderRadius: 6,
                  }}
                >
                  Thêm mới
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}

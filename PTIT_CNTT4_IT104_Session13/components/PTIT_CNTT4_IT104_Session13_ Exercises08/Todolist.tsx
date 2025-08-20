import React, { Component } from "react";

type Task = {
  id: number;
  name: string;     // tên công việc
  assign: string;   // người thực hiện
  status: boolean;  // true: hoàn thành, false: chưa hoàn thành
  created_at: Date; // thời gian tạo
};

type StateType = { tasks: Task[] };

export default class Todolist extends Component<unknown, StateType> {
  state: StateType = {
    tasks: [
      {
        id: 1,
        name: "Thiết kế giao diện Header",
        assign: "Nguyễn Văn A",
        status: false,
        created_at: new Date("2024-03-21T13:12:12"),
      },
      {
        id: 2,
        name: "Thiết kế giao diện Footer",
        assign: "Nguyễn Văn B",
        status: true,
        created_at: new Date("2024-03-21T15:10:50"),
      },
    ],
  };

  // format dd/mm/yyyy hh:mm:ss
  private formatDate(d: Date) {
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    const hh = String(d.getHours()).padStart(2, "0");
    const mi = String(d.getMinutes()).padStart(2, "0");
    const ss = String(d.getSeconds()).padStart(2, "0");
    return `${dd}/${mm}/${yyyy} ${hh}:${mi}:${ss}`;
  }

  render() {
    return (
      <div>
        <h2 style={{ marginBottom: 12 }}>Todolist</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ borderBottom: "1px solid #eee", padding: "8px" }}>STT</th>
              <th style={{ borderBottom: "1px solid #eee", padding: "8px" }}>Tên công việc</th>
              <th style={{ borderBottom: "1px solid #eee", padding: "8px" }}>Người thực hiện</th>
              <th style={{ borderBottom: "1px solid #eee", padding: "8px" }}>Trạng thái</th>
              <th style={{ borderBottom: "1px solid #eee", padding: "8px" }}>Thời gian tạo</th>
              <th style={{ borderBottom: "1px solid #eee", padding: "8px" }}>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tasks.map((t, i) => (
              <tr key={t.id}>
                <td style={{ padding: "8px", borderBottom: "1px solid #f2f2f2" }}>{i + 1}</td>
                <td style={{ padding: "8px", borderBottom: "1px solid #f2f2f2" }}>{t.name}</td>
                <td style={{ padding: "8px", borderBottom: "1px solid #f2f2f2" }}>{t.assign}</td>
                <td style={{ padding: "8px", borderBottom: "1px solid #f2f2f2" }}>
                  <span
                    style={{
                      padding: "2px 8px",
                      borderRadius: 8,
                      fontSize: 12,
                      background: t.status ? "#e8f7e8" : "#fff1f0",
                      color: t.status ? "#2e7d32" : "#c62828",
                      border: `1px solid ${t.status ? "#b6e3b6" : "#ffcdd2"}`,
                    }}
                  >
                    {t.status ? "Hoàn thành" : "Chưa hoàn thành"}
                  </span>
                </td>
                <td style={{ padding: "8px", borderBottom: "1px solid #f2f2f2" }}>
                  {this.formatDate(t.created_at)}
                </td>
                <td >
                  <button>Sua</button>
                  <button>xoa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

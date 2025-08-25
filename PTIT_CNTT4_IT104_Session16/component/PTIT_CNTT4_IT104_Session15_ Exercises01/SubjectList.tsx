import React, { Component } from 'react'

export default class SubjectList extends Component {
subjects: string[]=["Toan","Van","Anh","Hoa","Sinh"]
  render() {
    return (
      <div>
        <h2>Danh sach mon hoc</h2>
        {this.subjects.map((sbj, index) =>
          <div key={index}  style={{
              backgroundColor: "#e0f2fe",
              color: "black",
              margin: "10px 0",
              padding: "10px",
              borderRadius: "6px",
            }}>{sbj}</div>
        )}
      </div>
    )
  }
}

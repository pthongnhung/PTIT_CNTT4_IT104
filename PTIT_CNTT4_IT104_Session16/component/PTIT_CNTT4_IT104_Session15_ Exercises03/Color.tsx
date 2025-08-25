import React, { Component } from "react";

type ColorType = {
  name: string;
  color: string;
};

type StateType = {
  colors: ColorType[];
};

export default class Color extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      colors: [
        { name: "Primary", color: "blue" },
        { name: "Secondary", color: "gray" },
        { name: "Success", color: "green" },
        { name: "Warning", color: "yellow" },
        { name: "Danger", color: "red" },
        { name: "Info", color: "cyan" },
        { name: "Light", color: "white" },
        { name: "Dark", color: "black" },
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.colors.map((item, index) => (
          <button
            key={index}
            style={{
              background: item.color,
              color: item.color === "white" ? "black" : "white", 
              margin: "5px",
              padding: "10px 15px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {item.name}
          </button>
        ))}
      </div>
    );
  }
}

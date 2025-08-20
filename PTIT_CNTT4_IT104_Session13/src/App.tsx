// import React from 'react'
// import Exercises01 from "../components/PTIT_CNTT4_IT104_Session13_Exercises01/Exercises01"
// import Exercises02 from "../components/PTIT_CNTT4_IT104_Session13_Exercises02/Exercises02"
// import Exercises03 from "../components/PTIT_CNTT4_IT104_Session13_Exercises03/Exercises03"
// import Parent_Comp  from "../components/PTIT_CNTT4_IT104_Session13_Exercises04/Parent_Comp"
// import Parents from "../components/PTIT_CNTT4_IT104_Session13_Exercises05/Parents"
// import DetailPost from "../components/PTIT_CNTT4_IT104_Session13_Exercises06/DetailPost"
// import TodoList from "../components/PTIT_CNTT4_IT104_Session13_ Exercises08/Todolist"
// import UpdateState from "../components/PTIT_CNTT4_IT104_Session13_ Exercises09/UpdateState";
import Input from "../components/PTIT_CNTT4_IT104_Session13_ Exercises10/Input"

import React, { Component } from "react";

type StateType = {
  theme: "light" | "dark";
  language: "english" | "vietnamese";
};

export default class App extends Component<object, StateType> {
  // state: StateType = {
  //   theme: "light",
  //   language: "vietnamese",
  // };

  render() {
    // const { theme, language } = this.state;

    // const appStyle =
    //   theme === "light"
    //     ? { backgroundColor: "white", color: "black", padding: 20 }
    //     : { backgroundColor: "black", color: "white", padding: 20 };

    // const langText = language === "english" ? "English" : "Tiếng Việt";
    // const themeText = theme === "light" ? "Sáng" : "Tối";

    return (
      <div>
        {/* <Exercises01></Exercises01> */}
        {/* <Exercises02></Exercises02> */}
        {/* <Exercises03></Exercises03> */}
        {/* <Parent_Comp></Parent_Comp> */}
        {/* <Parents></Parents> */}
        {/* <DetailPost></DetailPost> */}
        {/* <TodoList></TodoList> */}
        {/* <UpdateState></UpdateState> */}
        <Input></Input>

        {/* <div style={appStyle}>
          <h3>Nền: {themeText}</h3>
          <h3>Ngôn ngữ: {langText}</h3>
        </div> */}
      </div>
    );
  }
}

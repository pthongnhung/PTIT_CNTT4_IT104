import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Article from "./Article";
import Main from "./Main";
import "./UserLayout.css";

export default function UserLayout() {
  return (
    <div className="user-layout">
      <Header />
      <Navbar />
      <div className="content">
        <Menu />
        <Main />
        <Article />
      </div>
    </div>
  );
}

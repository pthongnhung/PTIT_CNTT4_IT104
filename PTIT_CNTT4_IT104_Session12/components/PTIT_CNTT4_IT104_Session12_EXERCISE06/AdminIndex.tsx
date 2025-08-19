import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Main from "./Main";
import Footer from "./Footer";
import "./AdminLayout.css"; 
export default function AdminIndex() {
  return (
    <div className="admin-layout">
      <Header />
          <div className="line1">
              <Menu />
          <div className="line2">
              <Main />
              <Footer />
          </div>
      </div>
    </div>
  );
}

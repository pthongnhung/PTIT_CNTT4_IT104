// import React from 'react'
// import Counter from './pages/Counter'
// import Student from './pages/Student'

// export default function App() {
//   return (
//     <div>
//       <Counter></Counter>
//       <Student></Student>
//     </div>
//   )
// }

import React, { useEffect } from "react";
// import Counter from './page/Counter'
// import Profile from './component/PTIT_CNTT4_IT104_Session32_ Exercises01/Profile'
// import ListUser from './component/PTIT_CNTT4_IT104_Session32_ Exercises02/ListUser'
// import RandomNumber from './component/PTIT_CNTT4_IT104_Session32_ Exercises04/RandomNumber'
// import ChangeState from './component/PTIT_CNTT4_IT104_Session32_ Exercises05/ChangeState'
// import ThemeToggle from './component/PTIT_CNTT4_IT104_Session32_ Exercises06/ThemeToggle'
import Register from "./component/PTIT_CNTT4_IT104_Session32_ Exercises0708/Register";
import Login from "./component/PTIT_CNTT4_IT104_Session32_ Exercises0708/Login";

import { useSelector } from "react-redux";

import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export default function App() {
  const user = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    console.log("Thông tin người dùng đăng nhập:", user);
  }, [user]);

  return (
    <div>
      {/* <Counter /> */}
      {/* <Profile /> */}
      {/* <ListUser /> */}
      {/* <RandomNumber /> */}
      {/* <ChangeState /> */}
      {/* <ThemeToggle /> */}
      <BrowserRouter>
        <div className="p-4">
          <nav className="flex gap-4 mb-6">
            <link to="/register" className="text-blue-600 underline">
              Đăng ký
            </link>
            <Link to="/login" className="text-blue-600 underline">
              Đăng nhập
            </Link>
          </nav>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Register />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

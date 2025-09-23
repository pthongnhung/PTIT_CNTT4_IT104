import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./component/PTIT_CNTT4_IT104_Session35_ Exercises08/PrivateRoute";
import Home from "./component/PTIT_CNTT4_IT104_Session35_ Exercises08/Home";
import Login from "./component/PTIT_CNTT4_IT104_Session35_ Exercises08/Login";
// import FavoriteUsers from './component/PTIT_CNTT4_IT104_Session35_ Exercises07/FavoriteUsers' 
// import LanguageSwitcher from './component/PTIT_CNTT4_IT104_Session35_ Exercises06/LanguageSwitcher' 
//  import SidebarMenu from './component/PTIT_CNTT4_IT104_Session35_ Exercises05/SidebarMenu' 
// import ThemeToggle from './component/PTIT_CNTT4_IT104_Session35_ Exercises03/ThemeToggle' 
// import DisplaySwitcher from './component/PTIT_CNTT4_IT104_Session35_ Exercises04/DisplaySwitcher' 
//  import Counter from './component/Counter' // import StudentManager from './component/StudentManager' 
//  import Random from './component/PTIT_CNTT4_IT104_Session35_ Exercises02/Random'
export default function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <StudentManager /> */}
      {/* <Random /> */}
      {/* <ThemeToggle /> */}
      {/* <DisplaySwitcher /> */}
      {/* <SidebarMenu /> */}
      {/* <LanguageSwitcher /> */}
      {/* <FavoriteUsers /> */}

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetail from "./component/PTIT_CNTT4_IT104_Session26_ Exercises01/ProductDetail";
import Student from "./component/PTIT_CNTT4_IT104_Session26_ Exercises02+03+04/Student";
import Account from "./component/PTIT_CNTT4_IT104_Session26_ Exercises05+06/Account";
import PrivateRoute from "./component/PTIT_CNTT4_IT104_Session26_ Exercises05+06/PrivateRoute";
import Home from "./component/PTIT_CNTT4_IT104_Session26_ Exercises05+06/Home";
import Login from "./component/PTIT_CNTT4_IT104_Session26_ Exercises05+06/Login";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  const router1 = createBrowserRouter([
    { path: "/productdetail/:id", element: <ProductDetail /> },
    { path: "/student/:name", element: <Student /> },
    { path: "/", element: <Home /> },
    {
      path: "/account",
      element: (
        <PrivateRoute isLogin={isLogin}>
          <Account />
        </PrivateRoute>
      ),
    },
    { path: "/login", element: <Login setIsLogin={setIsLogin} /> },
  ]);

  return <RouterProvider router={router1} />;
}

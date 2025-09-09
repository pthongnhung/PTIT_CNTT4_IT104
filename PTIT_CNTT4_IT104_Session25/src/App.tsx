import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
// import ListUser from './component/PTIT_CNTT4_IT104_Session25_ Exercises08/pages/ListUser';
// import UserDetail from './component/PTIT_CNTT4_IT104_Session25_ Exercises08/pages/UserDetail';
// import NotFound from './component/PTIT_CNTT4_IT104_Session25_ Exercises08/pages/NotFound';
// import Layout from './component/PTIT_CNTT4_IT104_Session25_ Exercises06/Layout';
// import Detail from './component/PTIT_CNTT4_IT104_Session25_ Exercises06/pages/Detail';
// import Product from './component/PTIT_CNTT4_IT104_Session25_ Exercises06/pages/Product';
// import Home from './component/PTIT_CNTT4_IT104_Session25_ Exercises06/pages/Home';

// import About from './component/PTIT_CNTT4_IT104_Session25_ Exercises01+02/About'
// import Contact from './component/PTIT_CNTT4_IT104_Session25_ Exercises01+02/Contact';
// import Home from './component/PTIT_CNTT4_IT104_Session25_ Exercises01+02/Home';
// import Login from './component/PTIT_CNTT4_IT104_Session25_ Exercises03/Login';
// import Register from './component/PTIT_CNTT4_IT104_Session25_ Exercises04/Register';
// import NotFound from './component/PTIT_CNTT4_IT104_Session25_ Exercises05/NotFound';
// import Layout from "./component/PTIT_CNTT4_IT104_Session25_ Exercises06/Layout";
// import Detail from "./component/PTIT_CNTT4_IT104_Session25_ Exercises06/pages/Detail";
// import Product from "./component/PTIT_CNTT4_IT104_Session25_ Exercises06/pages/Product";
// import Home from "./component/PTIT_CNTT4_IT104_Session25_ Exercises06/pages/Home";
// import CustomLink from "./component/PTIT_CNTT4_IT104_Session25_ Exercises07/CustomLink";
// import HomePage from "./component/PTIT_CNTT4_IT104_Session25_ Exercises07/pages/Homepage";
// import NotFound from "./component/PTIT_CNTT4_IT104_Session25_ Exercises07/pages/NotFound";

// import ListUser from "./component/PTIT_CNTT4_IT104_Session25_ Exercises08/pages/ListUser";
// import UserDetail from "./component/PTIT_CNTT4_IT104_Session25_ Exercises08/pages/UserDetail";
// import NotFound from "./component/PTIT_CNTT4_IT104_Session25_ Exercises08/pages/NotFound";

import Register from "./component/PTIT_CNTT4_IT104_Session25_ Exercises09+10/Register";
import Login from "./component/PTIT_CNTT4_IT104_Session25_ Exercises09+10/Login";
import Home from "./component/PTIT_CNTT4_IT104_Session25_ Exercises09+10/Home";



export default function App() {
  // const routers = createBrowserRouter([
    // {
    //   path: "/about",
    //   element: <About></About>,
    // },
    // {
    //   path: "/contact",
    //   element: <Contact></Contact>,
    // },
    // {
    //   path: "/",
    //   element: <Home></Home>,
    // },
  // ]);
  // const router3 = createBrowserRouter([
  //   {
  //     path:"/login",
  //     element:<Login></Login>
  //   }
  // ])
  //  const router4 = createBrowserRouter([
  //    {
  //      path: "/register",
  //      element: <Register></Register>,
  //    },
  //  ]);
    // const router5 = createBrowserRouter([
    //   {
    //     path: "*",
    //     element: <NotFound></NotFound>,
    //   },
  // ]);
  // const router6 = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout></Layout>,
  //     children: [
  //       { index: true, element: <Home /> }, // "/"
  //       { path: "product", element: <Product /> }, // "/product"
  //       { path: "detail", element: <Detail /> }, // "/detail"
  //     ],
  //   },
  // ]);
  
// function Layout() {
//   return (
//     <div>
//       {/* Trang mặc định hiển thị CustomLink */}
//       <Outlet />
//     </div>
//   );
// }

// const router7 = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { index: true, element: <CustomLink /> },
//       { path: "home-page", element: <HomePage /> }, 
//       { path: "*", element: <NotFound/> }, 
//     ],
//   },
  // ]);
// function Layout() {
//   return <Outlet />;
// }

// const router8 = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { index: true, element: <ListUser /> }, 
//       { path: "users/:id", element: <UserDetail /> }, 
//       { path: "*", element: <NotFound /> }, 
//     ],
//   },
  // ]);
  
  function Layout() {
    return <Outlet />;
  }
  
  const router9 = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home/> },
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },
        { path: "*", element: <div style={{ padding: 24 }}>404 Not Found</div> },
      ],
    },
  ]);
  
  return (
    <div>
      {/* <RouterProvider router={routers}></RouterProvider> */}
      {/* <RouterProvider router={router3}></RouterProvider> */}
      {/* <RouterProvider router={router4}></RouterProvider> */}
      {/* <RouterProvider router={router5}></RouterProvider> */}
      {/* <RouterProvider router={router6}></RouterProvider> */}
      {/* <RouterProvider router={router7}></RouterProvider> */}
      {/* <RouterProvider router={router8}></RouterProvider> */}
      <RouterProvider router={router9}></RouterProvider>
    </div>
  );
}

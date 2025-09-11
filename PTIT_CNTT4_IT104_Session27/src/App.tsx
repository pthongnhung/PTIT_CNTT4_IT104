import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import ProductList from './component/PTIT_CNTT4_IT104_Session27_ Exercises04/ProductList';
// import Ex03 from './component/PTIT_CNTT4_IT104_Session27_ Exercises06/Ex03';
// import Home from './component/PTIT_CNTT4_IT104_Session27_ Exercises06/Home';
// import Product from './component/PTIT_CNTT4_IT104_Session27_ Exercises06/Product';
// import Header from './component/PTIT_CNTT4_IT104_Session27_ Exercises06/Header';
// import Detail from './component/PTIT_CNTT4_IT104_Session27_ Exercises06/Detail';
// import Ex07 from './component/PTIT_CNTT4_IT104_Session27_ Exercises07/Ex07';
import Ex08 from './component/PTIT_CNTT4_IT104_Session27_ Exercises08/Ex08';
// import TaskList from './component/PTIT_CNTT4_IT104_Session27_ Exercises03/TaskList'
// import TaskDetail from './component/PTIT_CNTT4_IT104_Session27_ Exercises03/TaskDetail'
// import ProductList from './component/PTIT_CNTT4_IT104_Session27_ Exercises02/Product';
// import ProductDetail from './component/PTIT_CNTT4_IT104_Session27_ Exercises02/ProductDetail';
// import RootLayout from './component/PTIT_CNTT4_IT104_Session27_ Exercises01/RootLayout';
// import Home from './component/PTIT_CNTT4_IT104_Session27_ Exercises01/Home';
// import About from './component/PTIT_CNTT4_IT104_Session27_ Exercises01/About';
// import Contact from './component/PTIT_CNTT4_IT104_Session27_ Exercises01/Contact';

export default function App() {
  const routers = createBrowserRouter([
    //Bai1
    // {
    //   path: "/",
    //   element: <RootLayout />,
    //   children: [
    //     { index: true, element: <Home /> },
    //     { path: "about", element: <About /> },
    //     { path: "contact", element: <Contact /> },
    //     { path: "*", element: <h2>404 Not Found</h2> },
    //   ],
    // },
    //Bai3
    // {
    //   path: "/",
    //   element: <TaskList />,
    // },
    // {
    //   path: "/task/:id",
    //   element: <TaskDetail />
    // },
    //Bai2
    // {
    //   path: "/",
    //   children: [
    //     { index: true, element: <Navigate to="/products" replace /> }, // redirect
    //     { path: "products", element: <ProductList /> },
    //     { path: "products/:id", element: <ProductDetail /> },
    //   ],
    // },
//Bai4
    // {
    //   path: "/products",
    //   element: <ProductList />,
    // },
//bai5
    // {
    //   path: "/",
    //   element: (
    //     <>
    //       <header />
    //       <Home />
    //     </>
    //   ),
    // },
    // {
    //   path: "/product",
    //   element: (
    //     <>
    //       <header />
    //       <Product />
    //     </>
    //   ),
    // },
    // {
    //   path: "/detail",
    //   element: (
    //     <>
    //       <Header />
    //       <Detail />
    //     </>
    //   ),
    // },
  ]);
  return (
    <div>
      <RouterProvider router={routers} />
      {/* <Ex03></Ex03> */}
      {/* <Ex07></Ex07> */}
      <Ex08></Ex08>
    </div>
  )
}

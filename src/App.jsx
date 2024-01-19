import React from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Detail from "./pages/detail/Detail";
import "./style/main.scss";


export default function App() {

  const router = createHashRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/detail/:id",
      element: <Detail />
    }
  ]);

  return <RouterProvider router={ router } />;
}
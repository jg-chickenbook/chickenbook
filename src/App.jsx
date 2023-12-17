import React from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Detail from "./pages/detail/Detail";

const router = createHashRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/detail/:index",
    element: <Detail />
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
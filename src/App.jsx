import React from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";

const router = createHashRouter([
  {
    path: "/",
    element: <Homepage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
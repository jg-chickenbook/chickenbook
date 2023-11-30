import React from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import DetailCard from "./pages/detail/DetailCard";

const router = createHashRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/detail/:index",
    element: <DetailCard />
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
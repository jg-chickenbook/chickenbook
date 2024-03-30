import React from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Detail from "./pages/detail/Detail";
import LogInPage from "./pages/login/LogInPage";
import "./style/main.scss";

import { Toaster } from "sonner";


export default function App() {

  const router = createHashRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/detail/:id",
      element: <Detail />
    },
    {
      path: "/login",
      element: <LogInPage />,
    }
  ]);

  return (<> 
  <RouterProvider router={ router } />
  <Toaster richColors expand={true} />
  </>);
}
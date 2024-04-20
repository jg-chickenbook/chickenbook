import { RouterProvider, createHashRouter } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.tsx";
import Detail from "./pages/detail/Detail.tsx";
import LogInPage from "./pages/login/LogInPage.tsx";
// import EditDetail from "./pages/detail/EditDetail.tsx";
import "./style/main.scss";

import { Toaster } from "sonner";

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
  },
  // {
  //   path: "/edit",
  //   element: <EditDetail />,
  // }
]);

function App() {

  return (
    <>
      <RouterProvider router={ router } />
      <Toaster richColors expand={true} />
    </>
  )
}

export default App;
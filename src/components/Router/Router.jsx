import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Error/Error";
import Home from "../Home/Home";


const router =  createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>
    },
    {
        path:"/",
        element:<Home></Home>
    }
  ]);

export default router;
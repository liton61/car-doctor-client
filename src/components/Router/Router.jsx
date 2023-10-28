import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../Error/Error";
import Home from "../homePage/Home/Home";
import CheckOut from "../checkOutPage/CheckOut/CheckOut";
import Login from "../authPage/Login/Login";
import Register from "../authPage/Register/Register";
import Booking from "../checkOutPage/Booking/Booking";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/checkOut/:id",
        element: <CheckOut></CheckOut>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: "/booking",
        element: <PrivateRoute><Booking></Booking></PrivateRoute>
      }
    ]
  },
]);

export default router;
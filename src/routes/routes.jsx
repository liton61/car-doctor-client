import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Root from "../Root/Root";
import Dashboard from "../pages/Dashboard/Dashboard";
import UserHome from "../pages/Dashboard/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome";
import AllUsers from "../pages/AllUsers/AllUsers";
import BookingList from "../pages/BookingList/BookingList";
import Review from "../pages/Review/Review";
import AddService from "../pages/AddService/AddService";
import ManageService from "../pages/ManageService/ManageService";



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
    ]
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
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [

      // user dashboard
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "bookingList",
        element: <BookingList></BookingList>,
      },
      {
        path: "review",
        element: <Review></Review>,
      },

      // admin dashboard
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "addService",
        element: <AddService></AddService>,
      },
      {
        path: "manageService",
        element: <ManageService></ManageService>,
      },
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      }
    ]
  }
]);

export default router;
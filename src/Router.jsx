import { createBrowserRouter } from "react-router-dom";
import Root from "./component/Root/Root";
import ErrorCatch from "./component/ErrorCatch";
import Home from "./component/Home/Home";
import CardDetails from "./component/Page/CardDetails";
import Login from "./component/Page/Login";
import SignUp from "./component/Page/SignUp";
import PrivetRoute from "./component/PrivetRoute";
import Schedule from "./component/Page/Schedule";

const router = createBrowserRouter([
        {
          path: "/",
          element: <Root></Root>,
          errorElement:<ErrorCatch></ErrorCatch>,
          children:[
            {
              path:'/',
              element:<Home></Home>,
            },
            {
              path:'/details/:id',
              element:<PrivetRoute><CardDetails></CardDetails></PrivetRoute> ,
              loader:()=>fetch('/service.json')
            },
            {
              path:'/login',
              element:<Login></Login>
            },
            {
              path:'/signUp',
              element:<SignUp></SignUp>
            },
            {
              path:'/schedule',
              element:<Schedule></Schedule>
            }
          ]
        },
      ]);
export default router;
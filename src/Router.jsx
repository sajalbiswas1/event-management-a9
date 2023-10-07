import { createBrowserRouter } from "react-router-dom";
import Root from "./component/Root/Root";
import ErrorCatch from "./component/ErrorCatch";
import Home from "./component/Home/Home";
import CardDetails from "./component/Page/CardDetails";
import Login from "./component/Page/Login";

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
              element:<CardDetails></CardDetails>,
              loader:()=>fetch('/service.json')
            },
            {
              path:'/login',
              element:<Login></Login>
            }
          ]
        },
      ]);
export default router;
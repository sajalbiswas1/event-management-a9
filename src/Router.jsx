import { createBrowserRouter } from "react-router-dom";
import Root from "./component/Root/Root";
import ErrorCatch from "./component/ErrorCatch";
import Home from "./component/Home/Home";

const router = createBrowserRouter([
        {
          path: "/",
          element: <Root></Root>,
          errorElement:<ErrorCatch></ErrorCatch>,
          children:[
            {
              path:'/',
              element:<Home></Home>,
            }
          ]
        },
      ]);
export default router;
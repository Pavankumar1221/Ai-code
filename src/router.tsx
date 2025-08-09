import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import CodePage from "./pages/CodePage";
import SingleCodeView from "./pages/SingleCodeView";

export const router = createBrowserRouter([
    {
      path: "/",
      Component:App,
      children:[
        {
            path:'',
            Component:Dashboard
        },
        {
            path:'/code',
            Component:CodePage
        },
        {
            path:'/code/:id',
            Component:SingleCodeView
        }
      ]
    },
  ]);
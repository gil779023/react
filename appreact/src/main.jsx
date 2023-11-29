
import RegisterForm from "./cadastro/Cadastrar";
import Loguin from "./logar/Loguin";
import Listar from "./Listar/Listar";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";






const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Loguin/>,
  },

  {
    path: "/cadastro",
    element: <RegisterForm/>
  },

  {
    path: "/listar",
    element: <Listar/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

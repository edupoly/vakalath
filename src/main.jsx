import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HighCourt from "./pages/highcourt/HighCourt.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import MainPage from "./pages/MainPage.jsx";
import Home from "./pages/Home.jsx";
import ABForm from "./pages/criminal/anticiptoryBail/Form.jsx";
import HighCourt1 from "./pages/highcourt/HighCourt1.jsx";
import SupremeCourtForm from "./pages/supemeCourt/Form.jsx";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/cases/:type",
            element: <MainPage />,
          },
        ]
      },
      {
        path: "/highcourt",
        element: <HighCourt />,
      },
      {
        path: "/highcourt/:id",
        element: <HighCourt />,
      },
      {
        path: "/district",
        element: <h1>lower court</h1>,
      },
      {
        path: "/supremecourt",
        element: <SupremeCourtForm />,
      },
      {
        path: "/supremecourt/:id",
        element: <SupremeCourtForm />,
      },
      {
        path: "/companylaw",
        element: <h1>companylaw</h1>,
      },
      {
        path: "/clients",
        element: <h1>clients</h1>,
      },
      {
        path: "/profile",
        element: <h1>profile</h1>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  </Provider>
);

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element:<Home/>
      },
      {
      path:"/cases",
        element: <MainPage />,
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
        element: <h1>district</h1>,
      },
      {
        path: "/supremecourt",
        element: <h1>supremecourt</h1>,
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
    <RouterProvider router={router} />
  </Provider>
);

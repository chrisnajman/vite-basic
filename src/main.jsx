import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Contact } from "./pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/vite-basic/",
    element: <App />,
    children: [
      {
        path: "/vite-basic/",
        element: <Home />,
      },
      {
        path: "/vite-basic/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

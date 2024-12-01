import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./styles/index.css";
import ProductsProvider from "./utils/ProductsProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductsProvider>
    <RouterProvider router={router} />
    </ProductsProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// home.getvia.in serves the app at `/`.
// /getvia-official-website remains supported for old links / path-based access.
function getRouterBasename() {
  const { pathname } = window.location;
  if (
    pathname === "/getvia-official-website" ||
    pathname.startsWith("/getvia-official-website/")
  ) {
    return "/getvia-official-website";
  }
  return "/";
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={getRouterBasename()}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

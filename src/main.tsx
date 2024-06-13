import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "./util/locale/index";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>{router}</React.StrictMode>,
);

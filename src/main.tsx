import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "./util/locale/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Onboarding } from "./Onboarding";
import Intro from "./Intro/Intro";
import { Home } from "./Home";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Onboarding />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

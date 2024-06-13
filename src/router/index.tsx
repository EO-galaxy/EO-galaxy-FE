import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../Layout";
import Intro from "../Intro/Intro";
import { Onboarding } from "../Onboarding";
import { Home } from "../Home";

export const router = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Onboarding />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

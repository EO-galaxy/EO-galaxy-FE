/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Layout() {
  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
      <div css={LayoutStyles}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

const LayoutStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(--bg-secondary);
`;

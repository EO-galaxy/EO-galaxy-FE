/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export default function Layout() {
  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
      <div css={LayoutStyles}>
        <Header />
        <Outlet />
      </div>
    </HelmetProvider>
  );
}

const LayoutStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: var(--bg-secondary);
`;

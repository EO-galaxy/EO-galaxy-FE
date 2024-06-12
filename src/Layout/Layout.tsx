import { HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
      <div className="layout">
        <Outlet />
      </div>
    </HelmetProvider>
  );
}

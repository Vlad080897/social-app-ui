import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <TanStackRouterDevtools position="bottom-right" />
      <Outlet />
    </React.Fragment>
  );
}

export default App;

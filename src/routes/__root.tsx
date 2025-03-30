import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import React from "react";
import { RouterContextInterface } from "../context/routerContext";

export const Route = createRootRouteWithContext<RouterContextInterface>()({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
}

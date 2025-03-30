import { createFileRoute, redirect } from "@tanstack/react-router";
import App from "../../components/App";

export const Route = createFileRoute("/_secured/")({
  component: App,
  async beforeLoad({ context }) {
    if (await context.isAuthenticated()) {
      return;
    }

    throw redirect({
      to: "/auth",
    });
  },
});

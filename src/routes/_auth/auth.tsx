import { createFileRoute, redirect } from "@tanstack/react-router";
import { Auth } from "../../components/Auth/Auth";

export const Route = createFileRoute("/_auth/auth")({
  component: Auth,
  beforeLoad: async ({ context }) => {
    if (!(await context.isAuthenticated())) {
      return;
    }

    throw redirect({
      to: "/",
    });
  },
});

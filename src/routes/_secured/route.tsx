import { createFileRoute, redirect } from "@tanstack/react-router";
import PageLayout from "../../components/PageLayout";

export const Route = createFileRoute("/_secured")({
  component: PageLayout,
  beforeLoad: async ({ context }) => {
    if (await context.isAuthenticated()) {
      return;
    }

    throw redirect({
      to: "/auth",
    });
  },
});

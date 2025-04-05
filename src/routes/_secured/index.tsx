import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_secured/")({
  beforeLoad: ({ context }) => {
    const user = context.getUser();

    if (!user) {
      context.logout();
      return;
    }

    throw redirect({
      to: "/profile/$id",
      params: { id: user?.id.toString() || "" },
    });
  },
});

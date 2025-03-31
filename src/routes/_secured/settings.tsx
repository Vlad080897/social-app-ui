import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_secured/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_secured/settings"!</div>;
}

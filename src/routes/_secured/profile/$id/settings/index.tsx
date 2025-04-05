import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_secured/profile/$id/settings/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_secured/profile/$id/settings/"!</div>;
}

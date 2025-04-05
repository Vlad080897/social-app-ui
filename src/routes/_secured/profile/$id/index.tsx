import { createFileRoute } from "@tanstack/react-router";
import Profile from "../../../../components/Profile/Profile";

export const Route = createFileRoute("/_secured/profile/$id/")({
  component: Profile,
});

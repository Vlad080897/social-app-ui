import { createFileRoute } from "@tanstack/react-router";
import { Auth } from "../../components/auth/Auth";

export const Route = createFileRoute("/_auth/auth")({
  component: Auth,
});

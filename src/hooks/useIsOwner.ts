import { getRouteApi } from "@tanstack/react-router";
import { authService } from "../services/auth/auth.service";

const routerApi = getRouteApi("/_secured/profile/$id/");

export const useIsOwner = () => {
  const { id: profileId } = routerApi.useParams();
  const owner = authService.getUser();

  return owner?.id === Number(profileId);
};

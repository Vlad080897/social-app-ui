import { authService } from "../services/auth/auth.service";

export const useOwnerId = () => {
  const user = authService.getUser();

  return user?.id;
};

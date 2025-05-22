import { authService } from "../services/auth/auth.service";

export const useOwner = () => {
  const user = authService.getUser();

  return user!;
};

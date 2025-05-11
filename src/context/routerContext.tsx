import { authService } from "../services/auth/auth.service";
import { User } from "../services/auth/types";

export interface RouterContextInterface {
  isAuthenticated: () => boolean;
  getUser: () => User | null;
  logout: () => void;
}
export const makeRouterContext = (): RouterContextInterface => ({
  isAuthenticated() {
    return authService.isAuthenticated();
  },

  getUser() {
    return authService.getUser();
  },

  logout() {
    authService.logout();
  },
});

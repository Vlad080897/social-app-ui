import { authService } from "../services/auth.service";

export interface RouterContextInterface {
  isAuthenticated: () => Promise<boolean>;
}
export const makeRouterContext = (): RouterContextInterface => ({
  async isAuthenticated() {
    return await authService.isAuthenticated();
  },
});

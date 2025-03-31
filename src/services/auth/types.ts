import { LoginSchema } from "../../schemas/auth.schema";

export interface BaseAuth {
  getAuthToken(): string | null;
  getRefreshToken(): string | null;
  saveTokens(loginResult: LoginSchema): void;
  isAuthenticated(): boolean;
}

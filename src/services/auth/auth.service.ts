import { LoginSchema } from "../../schemas/auth.schema";
import { BaseAuth } from "./types";

class AuthService implements BaseAuth {
  getAuthToken() {
    return localStorage.getItem("accessToken");
  }

  getRefreshToken() {
    return localStorage.getItem("refreshToken");
  }

  saveTokens(loginResult: LoginSchema) {
    localStorage.setItem("accessToken", loginResult.accessToken);
    localStorage.setItem("refreshToken", loginResult.refreshToken);
  }

  isAuthenticated() {
    return Boolean(this.getAuthToken() && this.getRefreshToken());
  }
}

export const authService = new AuthService();

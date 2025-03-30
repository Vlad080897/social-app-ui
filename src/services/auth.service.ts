import { LoginSchema } from "../schemas/auth.schema";

class AuthService {
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

  async isAuthenticated() {
    return Boolean(this.getAuthToken() && this.getRefreshToken());
  }
}

export const authService = new AuthService();

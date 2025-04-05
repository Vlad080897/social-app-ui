import { jwtDecode } from "jwt-decode";
import { BaseAuth, User } from "./types";

class AuthService implements BaseAuth {
  getAuthToken() {
    return localStorage.getItem("accessToken");
  }

  getRefreshToken() {
    return localStorage.getItem("refreshToken");
  }

  saveTokens(loginResult: { accessToken: string; refreshToken: string }) {
    localStorage.setItem("accessToken", loginResult.accessToken);
    localStorage.setItem("refreshToken", loginResult.refreshToken);
  }

  isTokenExpired(decoded: User) {
    const exp = decoded?.exp;
    const currentTime = Date.now() / 1000;

    return exp < currentTime;
  }

  decodeToken() {
    const token = this.getAuthToken();

    if (!token) {
      return;
    }

    const decodedToken = jwtDecode(token) as User;

    if (this.isTokenExpired(decodedToken)) {
      this.logout();
      return;
    }

    return decodedToken;
  }

  getUser() {
    return this.decodeToken();
  }

  isAuthenticated() {
    return Boolean(this.getAuthToken() && this.getRefreshToken());
  }

  logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }
}

export const authService = new AuthService();

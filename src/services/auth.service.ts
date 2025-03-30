class AuthService {
  getAuthToken() {
    return localStorage.getItem("authToken");
  }

  getRefreshToken() {
    return localStorage.getItem("refreshToken");
  }

  async isAuthenticated() {
    return Boolean(this.getAuthToken() && this.getRefreshToken());
  }
}

export const authService = new AuthService();

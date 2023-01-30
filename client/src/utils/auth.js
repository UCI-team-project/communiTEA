import decode from "jwt-decode";

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return token ? true : false;
  }

  getToken() {
    return localStorage.getItem("auth_token");
  }

  login(token) {
    localStorage.setItem("auth_token", token);
    window.location.assign("/");
  }

  logout() {
    localStorage.removeItem("auth_token");
    window.location.reload();
  }
}

export default new AuthService();

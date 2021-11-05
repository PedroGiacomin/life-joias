export const TOKEN_KEY = "@lifejoias-Token";
export const LOGGED_EMAIL = '@logged-email';
export const isAuthenticated = () => sessionStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => sessionStorage.getItem(TOKEN_KEY);
export const login = (token) => {
  sessionStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  sessionStorage.removeItem(TOKEN_KEY);
};

export const saveEmail = (email) => {
  sessionStorage.setItem(LOGGED_EMAIL, email)
};

export const getEmail = () => sessionStorage.getItem(LOGGED_EMAIL);
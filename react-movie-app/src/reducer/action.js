export const setUserInfo = (userInfo) => ({
  type: "SET_USER_INFO",
  payload: { userInfo },
});

export const loginSuccess = (username) => ({
  type: "LOGIN_SUCCESS",
  payload: { username },
});

export const logoutSuccess = () => ({
  type: "LOGOUT_SUCCESS",
});

export const setAccessToken = (accessToken) => ({
  type: "SET_ACCESS_TOKEN",
  payload: { accessToken },
});

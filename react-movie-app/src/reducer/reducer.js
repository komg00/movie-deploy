// import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./action";

const initialState = {
  userInfo: null,
  username: null,
  isLoggedIn: false,
  accessToken: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_INFO":
      return {
        ...state,
        userInfo: action.payload.userInfo,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        username: action.payload.username,
        isLoggedIn: true,
      };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        username: null,
        isLoggedIn: false,
      };
    case "SET_ACCESS_TOKEN":
      return {
        ...state,
        accessToken: action.payload.accessToken,
      };
    default:
      return state;
  }
};

export default userReducer;

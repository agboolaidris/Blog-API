import axios from "axios";
import * as type from "../type";

// export const isLogin = () => {
//   return async (dispatch) => {
//     try {
//       const { data } = await api.isLogin();
//       dispatch({ type: type.LOGIN_SUCCESS, payload: data });
//     } catch (error) {
//       console.log(error.response);
//       dispatch({
//         type: type.AUTH_ERROR,
//         payload: error.response?.data,
//       });
//     }
//   };
// };

export const register = (state: Object, router: any) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("auth/register", state);

      dispatch({ type: type.AUTH_SUCCESS, payload: data });
      router.push("/signin");
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: type.AUTH_ERROR,
        payload: error.response.data,
        name: "register",
      });
    }
  };
};

export const login = (state: object, router: any) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/auth/login", state);
      dispatch({ type: type.LOGIN_SUCCESS, payload: data });
      router.push("/");
    } catch (error) {
      dispatch({
        type: type.AUTH_ERROR,
        payload: error.response.data,
        name: "login",
      });
    }
  };
};

// export const logout = () => {
//   return async (dispatch) => {
//     try {
//       const { data } = await api.logout();
//       dispatch({ type: type.LOGOUT_SUCCESS, payload: data });
//     } catch (error) {
//       dispatch({
//         type: type.LOGIN_SUCCESS,
//         payload: error.response.data,
//       });
//     }
//   };
// };

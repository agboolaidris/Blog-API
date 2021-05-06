import axios from "axios";
import * as type from "../type";

export const isMe = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/auth/me");
      dispatch({ type: type.ME_SUCCESS, payload: data });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: type.ME_ERROR,
      });
    }
  };
};

export const register = (state: Object, router: any) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("auth/register", state);

      dispatch({ type: type.REGISTER_SUCCESS });
      router.push("/signin");
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: type.REGISTER_ERROR,
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
        type: type.LOGIN_ERROR,
        payload: error.response.data,
        name: "login",
      });
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/auth/logout");
      dispatch({ type: type.LOGOUT_SUCCESS });
      window.location.reload();
    } catch (error) {
      dispatch({
        type: type.LOGOUT_ERROR,
      });
    }
  };
};

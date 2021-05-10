import axios from "axios";
import { User } from "../../helper/types";
import * as types from "../types";

export const isMe = async (dispatch: any) => {
  try {
    const { data }: { data: User } = await axios.get("/auth/me");
    dispatch({ type: types.ISME, payload: data });
  } catch (error) {
    console.log(error.response);
  }
};

export const register = async (
  state: {
    email: string;
    password: string;
    password2: string;
    username: string;
  },
  router: any,
  dispatch: any
) => {
  try {
    await axios.post("/auth/register", state);
    router.push("/signin");
  } catch (error) {
    console.log(error.response.data);
    dispatch({ type: types.REGISTER_ERROR, payload: error.response.data });
  }
};

export const login = async (
  state: { email: string; password: string },
  router: any,
  dispatch: any
) => {
  try {
    const { data }: { data: User } = await axios.post("/auth/login", state);
    dispatch({ type: types.LOGIN_SUCCESS, payload: data });
    router.push("/");
  } catch (error) {
    dispatch({ type: types.LOGIN_ERROR, payload: error.response.data });
  }
};

export const logout = async (dispatch: any) => {
  try {
    await axios.get("/auth/logout");
    dispatch({ type: types.LOGOUT, payload: null });
  } catch (error) {
    console.log(error.response);
  }
};

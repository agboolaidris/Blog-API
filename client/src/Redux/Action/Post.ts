import axios from "axios";
import * as type from "../type";

export const fetchPost = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/post");
      dispatch({ type: type.FETCH_POST, payload: data });
    } catch (error) {
      console.log(error.response);
    }
  };
};

export const fetchSubPost = (path: any, router: any) => {
  console.log(path);
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/sub/${path}`);

      dispatch({ type: type.FETCH_SUBPOST, payload: data });
    } catch (error) {
      router.push("/");
    }
  };
};

export const vote = (state) => {
  return async (dispatch) => {
    try {
      const data = await axios.post("/vote", state);
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };
};

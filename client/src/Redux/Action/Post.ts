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

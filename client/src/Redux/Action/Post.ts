import axios from "axios";

export const fetchPost = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/post");
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };
};

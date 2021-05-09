import axios from "axios";
import { NextRouter } from "next/router";

import * as type from "../type";

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/post");
      dispatch({ type: type.FETCH_POSTS, payload: data });
    } catch (error) {
      console.log(error.response);
    }
  };
};

export const fetchPost = (slug: any, identifier: any, router: NextRouter) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/post/${identifier}/${slug}`);

      dispatch({ type: type.FETCH_POST, payload: data });
    } catch (error) {
      // console.log(error.response);
      console.log(error.response);
    }
  };
};

export const fetchSubPost = (path: any, router: any) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/sub/${path}`);

      dispatch({ type: type.FETCH_SUBPOST, payload: data });
    } catch (error) {
      router.push("/");
    }
  };
};

export const uploadSubImage = (form: object, name: string) => {
  return async (dispatch) => {
    console.log("hhh");
    try {
      const { data } = await axios.post(`/sub/${name}/image`, form);
      console.log(data);

      //dispatch({ type: type.FETCH_SUBPOST, payload: data });
    } catch (error) {
      console.log(error.response);
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

export const fetchTopSub = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/sub`);
      console.log(data);

      dispatch({ type: type.FETCH_TOPSUB, payload: data });
    } catch (error) {
      console.log(error.response);
    }
  };
};

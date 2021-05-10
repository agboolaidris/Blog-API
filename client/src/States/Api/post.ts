import axios from "axios";

export const vote = async (info) => {
  try {
    const { data } = await axios.post("/vote", info);
    console.log(data);
  } catch (error) {
    console.log(error.response);
  }
};

export const bannerUpload = async (form, name) => {
  try {
    const { data } = await axios.post(`/sub/${name}/image`, form);
    console.log(data);
  } catch (error) {
    console.log(error.response);
  }
};

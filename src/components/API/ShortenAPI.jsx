import axios from "axios";

const ShortenAPI = {};

ShortenAPI.getShortURL = async (url) => {

  try {
    let response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`);
      return response.data;
  } catch (error) {
      return error.response.data;
  }
};

export default ShortenAPI

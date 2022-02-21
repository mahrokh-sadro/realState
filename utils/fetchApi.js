import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "146f94f0famsh0815bb32ef34550p10f457jsnbd266cc3a7ab",
    },
  });

  return data;
};

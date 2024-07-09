import axios from "axios";
import { transformData } from "../helpers/helpers";

const BASE_URL = "https://api.unsplash.com";
const ACCESS_KEY = "8Tbd55Y0QGKt0Ta1h15Owg2-bNLtG_OKOI1p5P0J0a4";

export async function fetchPhotos(searchString, page) {
  const response = await axios.get(`${BASE_URL}/search/photos`, {
    params: {
      client_id: ACCESS_KEY,
      page,
      per_page: 12,
      query: searchString.toLowerCase(),
    },
  });
  return transformData(response.data.results);
}

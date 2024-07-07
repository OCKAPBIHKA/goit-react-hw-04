import axios from "axios";
import { transformData } from "../helpers/helpers";

const base = "https://api.unsplash.com";
const access_key = "8Tbd55Y0QGKt0Ta1h15Owg2-bNLtG_OKOI1p5P0J0a4";

export async function fetchPhotos(searchString, page) {
  const response = await axios.get(`${base}/search/photos`, {
    params: {
      client_id: access_key,
      page,
      per_page: 12,
      query: searchString.toLowerCase(),
    },
  });
  return transformData(response.data.results);
}

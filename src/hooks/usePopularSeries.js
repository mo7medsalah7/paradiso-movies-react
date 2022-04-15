import axios from "axios";
import { useQuery } from "react-query";
import dotenv from "dotenv";
dotenv.config();

const getPopularSeries = () =>
  axios
    .get(
      `${process.env.REACT_APP_API_URL}/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
    .then((res) => res.data);

export default function usePopularSeries() {
  return useQuery("popularSeries", getPopularSeries);
}

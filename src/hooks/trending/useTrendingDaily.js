import axios from "axios";
import { useQuery } from "react-query";
import dotenv from "dotenv";
dotenv.config();

export default function useTrendingDaily() {
  return useQuery("Daily-trend", () =>
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => res.data)
  );
}

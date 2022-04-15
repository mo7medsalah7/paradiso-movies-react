import axios from "axios";
import { useQuery } from "react-query";
import dotenv from "dotenv";
dotenv.config();

export default function useTrendingWeekly() { 
  return useQuery("Weekly-trend", () =>
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => res.data)
  );
}

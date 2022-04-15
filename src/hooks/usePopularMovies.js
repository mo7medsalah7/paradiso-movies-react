import axios from "axios";
import { useQuery } from "react-query";
import dotenv from "dotenv";
dotenv.config();

const getPopularMovies = () =>
  axios
    .get(
      `${process.env.REACT_APP_API_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
    .then((res) => res.data);

// Getting Popular Movies
export default function usePopularMovies() {
  return useQuery("popularMovies", getPopularMovies);
}

import { useQuery, QueryCache } from "react-query";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const queryCache = new QueryCache({
  onError: (error) => {
    console.log(error);
  },
});

export default function useSingleMovie(movieId) {
  return useQuery(
    ["single-movie", movieId],
    () =>
      axios
        .get(
          `${process.env.REACT_APP_API_URL}/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        )
        .then((res) => res.data),
    {
      initialData: () => {
        return queryCache.find("popularMovies");
      },
      initialStale: true,
    }
  );
}

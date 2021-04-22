import { useQuery, QueryCache } from "react-query";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const queryCache = new QueryCache({
  onError: (error) => {
    console.log(error);
  },
});

export default function useSingleSeries(tv_id) {
  return useQuery(
    ["single-tv", tv_id],
    () =>
      axios
        .get(
          `${process.env.REACT_APP_API_URL}/tv/${tv_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        )
        .then((res) => res.data),
    {
      initialData: () => {
        return queryCache.find("popularSeries");
      },
      initialStale: true,
    }
  );
}

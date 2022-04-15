import { useQuery, QueryCache, useMutation } from "react-query";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();


export default function useSearch(searchTerm) {
    return useQuery(
        "search-results",
        () =>
          axios
            .get(
              `${process.env.REACT_APP_API_URL}/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`
            )
            .then((res) => res.data)
    )
};
import { useQuery, QueryCache, useMutation } from "react-query";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();


export default function useFavFilms() {
    return useQuery(
        "nada-films",
        () =>
          axios
            .get(
              `${process.env.REACT_APP_API_URL}/list/7071902?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
            )
            .then((res) => res.data)
    )
};

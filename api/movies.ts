import axios from "axios";
import { useQuery } from "react-query";

const getData = async () => {
  const { data } = await axios.get(
    `https://itunes.apple.com/us/rss/topmovies/limit=100/json`
  );
  return data;
};

function useMovies() {
  return useQuery(["movies"], () => getData());
}

export default useMovies;

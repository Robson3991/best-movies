import axios from 'axios';
import { useQuery } from 'react-query';

export const getMovies = async () => {
  const { data } = await axios.get(
    `https://itunes.apple.com/us/rss/topmovies/limit=100/json`,
  );
  return data;
};

function useMovies() {
  return useQuery(['movies'], () => getMovies());
}

export default useMovies;

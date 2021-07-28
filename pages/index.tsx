import { useEffect } from 'react';
import useMovies from 'api/movies';
import Loader from 'components/atoms/Loader';
import { useAppDispatch } from 'store/hooks';
import { moviesDataChange } from 'store/slices/movies';
import Movies from 'components/organism/Movies';

export default function Home() {
  const { data, error, isFetching } = useMovies();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(moviesDataChange(data.feed.entry));
    }
  }, [data]);

  if (isFetching) return <Loader />;
  if (error) return <p>There was a problem while fetching data</p>;

  return (
    <div>
      <Movies />
    </div>
  );
}

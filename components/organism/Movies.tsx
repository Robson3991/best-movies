import { useState, useEffect } from 'react';
import { useAppSelector } from 'store/hooks';
import MovieItem from 'components/molecules/MovieItem/MovieItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import { MovieT } from 'types';
import Loader from 'components/atoms/Loader';

const Movies = () => {
  const [items, setItems] = useState<MovieT[] | []>([]);
  const [hasMore, setHasMore] = useState(true);
  const { data } = useAppSelector((state) => state.movies);

  useEffect(() => {
    if (data) {
      setItems(data.slice(0, 9));
    }
  }, [data]);

  const fetchMoreData = () => {
    if (items.length >= data.length) setHasMore(false);

    const newItems = data.slice(
      items.length,
      items.length - 10 >= data.length ? data.length : items.length + 10,
    );

    setItems((prevState) => {
      return [...prevState, ...newItems];
    });
  };

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<Loader />}
    >
      {items.map((movie, index) => {
        const image = movie['im:image'].filter(
          (item) => item.attributes.height === '170',
        );
        return (
          <MovieItem
            key={movie.id.label}
            index={index + 1}
            name={movie['im:name'].label}
            category={movie.category.attributes.label}
            director={movie['im:artist'].label}
            id={movie.id.attributes['im:id']}
            image={image[0].label}
            release={movie['im:releaseDate'].label}
          />
        );
      })}
    </InfiniteScroll>
  );
};

export default Movies;

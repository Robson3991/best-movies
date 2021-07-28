import { useAppSelector } from 'store/hooks';
import MovieItem from 'components/molecules/MovieItem/MovieItem';

const Movies: React.FC = () => {
  const { data } = useAppSelector((state) => state.movies);

  return data.map((movie, index) => {
    const image = movie['im:image'].filter(
      (item) => item.attributes.height === '170',
    );

    return (
      <MovieItem
        key={movie.id.label}
        index={index}
        name={movie['im:name'].label}
        category={movie.category.attributes.label}
        director={movie['im:artist'].label}
        id={movie.id.attributes['im:id']}
        image={image[0].label}
        release={movie['im:releaseDate'].label}
      />
    );
  });
};

export default Movies;

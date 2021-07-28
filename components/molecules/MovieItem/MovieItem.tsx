import Link from 'next/link';
import {
  Wrapper,
  Main,
  Index,
  Info,
  Director,
  Category,
} from './MovieItem.style';

interface MovieItemProps {
  index: number;
  name: string;
  director: string;
  release: string;
  id: string;
  category: string;
  image: string;
}

const MovieItem: React.FC<MovieItemProps> = ({
  index,
  name,
  director,
  release,
  id,
  category,
  image,
}) => {
  const releaseYear = new Date(release).getFullYear();

  return (
    <Link href={`/movie/${id}`}>
      <Wrapper>
        <Index>{index}</Index>
        <img src={image} alt="film image" />
        <Main>
          <Info>
            <p>{name}</p>
            <Director>Director: {director}</Director>
            <Category>Category: {category}</Category>
          </Info>
          <span>Release: {releaseYear}</span>
        </Main>
      </Wrapper>
    </Link>
  );
};

export default MovieItem;

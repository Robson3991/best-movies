import axios from 'axios';
import { MovieT } from 'types';

interface MovieProps {
  movieData: MovieT;
}

export default function Movie({ movieData }: MovieProps) {
  const { title, summary, category, link } = movieData;

  return (
    <>
      <iframe width="853" height="354" src={link[1].attributes.href}></iframe>
      <br />
      <h1>
        {title.label} - {category.attributes.label}
      </h1>
      <br />
      <p>{summary.label}</p>
    </>
  );
}

export async function getServerSideProps({ params }: any) {
  try {
    const { data } = await axios.post('http://localhost:3000/api/get-movie', {
      movieID: params.slug,
    });

    return {
      props: { movieData: data },
    };
  } catch ({ response }) {
    if (response.status === 404)
      return {
        notFound: true,
      };
  }
}

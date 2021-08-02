import axios from 'axios';
import { MovieT } from 'types';
import styled from 'styled-components';

const Summary = styled.p`
  text-align: center;
  margin-bottom: 50px;
`;

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
      <Summary>{summary.label}</Summary>
    </>
  );
}

export async function getServerSideProps({ req, params }: any) {
  const env = process.env.NODE_ENV;
  let protocol = '';

  if (env == 'development') {
    protocol = 'http';
  } else if (env == 'production') {
    protocol = 'https';
  }

  try {
    const { data } = await axios.post(
      `${protocol}://${req.headers.host}/api/get-movie`,
      {
        movieID: params.slug,
      },
    );

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

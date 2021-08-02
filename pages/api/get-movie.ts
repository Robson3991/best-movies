import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { MovieT } from 'types';

async function getMovie(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { data } = await axios.get(
      `https://itunes.apple.com/us/rss/topmovies/limit=100/json`,
    );

    const { movieID } = req.body;
    const searchMovie = () => {
      const movies = data.feed.entry;
      return (movies as MovieT[]).filter(
        (movie) => movie.id.attributes['im:id'] === movieID,
      );
    };

    const movie = searchMovie();

    if (movie.length === 0) return res.status(404).end();

    return res.status(200).json(JSON.stringify(movie[0]));
  } catch ({ response }) {
    return res.status(500).json(response.data);
  }
}

export default getMovie;

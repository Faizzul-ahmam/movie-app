import { I_Movies } from "../model/movies.interface";
const IMG_BASE_URL = process.env.REACT_APP_MOVIE_IMAGE_BASE_URL;

export function mapResult(res: any[]): I_Movies[] {
    return res.map((movie) => {
      const {
        id,
        title,
        popularity,
        vote_average,
        poster_path
      } = movie;
      
      return {
        id,
        title,
        popularity: popularity,
        rating: vote_average,
        poster: poster_path ? `${IMG_BASE_URL}w300/${poster_path}` : undefined,
      };
    });
  }
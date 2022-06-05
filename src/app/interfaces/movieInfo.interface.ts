import {IGenre} from "./genre.interface";

export interface IMovieInfo {
  id: number;
  backdrop_path: string;
  budget: number;
  genres: IGenre[];
  homepage: string;
  overview: string;
  popularity: number;
  production_companies: [{
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }]
  production_countries: [{
    iso_3166_1: string;
    name: string;
  }]
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

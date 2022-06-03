import {environment} from "../../environments/environment";

const {API} = environment;

export const urls = {
  moviesList:`${API}/discover/movie`,
  movie: `${API}/movie`
}

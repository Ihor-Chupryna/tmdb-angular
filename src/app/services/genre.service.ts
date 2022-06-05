import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IGenre, IMovie} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpClient: HttpClient) {
  }

  getList(): Observable<{ genres: IGenre[] }> {
    return this.httpClient.get<{ genres: IGenre[] }>(urls.genres)
  }

  getMovieByGenre(id: number, page: number): Observable<{ page: number, results: IMovie[] }> {
    return this.httpClient.get<{ page: number, results: IMovie[] }>(`${urls.movies}?with_genres=${id}`, {params: {page}})
  }
}

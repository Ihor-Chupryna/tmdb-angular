import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../constants";
import {IMovie, IMovieInfo} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(page: number): Observable<{ page: number, results: IMovie[] }> {
    return this.httpClient.get<{ page: number, results: IMovie[] }>(`${urls.movies}`, {params: {page}})
  }

  getById(id: string): Observable<IMovieInfo> {
    return this.httpClient.get<IMovieInfo>(`${urls.movie}/${id}`)
  }
}

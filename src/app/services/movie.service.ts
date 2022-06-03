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

  getAll(page: string): Observable<{results:IMovie[]}> {
    return this.httpClient.get<{results:IMovie[]}>(`${urls.moviesList}?page=${page}`)
  }

  getById(id:string):Observable<IMovieInfo> {
    return this.httpClient.get<IMovieInfo>(`${urls.movie}/${id}`)
  }
}

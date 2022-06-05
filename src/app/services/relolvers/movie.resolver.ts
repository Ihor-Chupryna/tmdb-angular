import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';

import {IMovieInfo} from "../../interfaces";
import {MovieService} from "../movie.service";

@Injectable({
  providedIn: 'root'
})
export class MovieResolver implements Resolve<IMovieInfo> {
  constructor(private movieService: MovieService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMovieInfo> | Promise<IMovieInfo> | IMovieInfo {
    const {id} = route.params;
    return this.movieService.getById(id);
  }
}


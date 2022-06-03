import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class MainInterceptor implements HttpInterceptor {
  private _token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWZhN2JiOWVhNzA4YjA3ZjEwM2FjOGIwM2VjOTk0YiIsInN1YiI6IjYwY2UwOWMzNTFlNmFiMDA1OGVkM2IzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lmUNsg3Wu41etbi32KK1UswcmseHmW0uvcRXWE1xrBI'

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
     request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this._token}`
      }
    });
    return next.handle(request);
  }
}

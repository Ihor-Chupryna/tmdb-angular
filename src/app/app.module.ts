import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HeaderComponent} from './components/header/header.component';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {GenresComponent} from './components/genres/genres.component';
import {MainInterceptor} from "./main.interceptor";
import {MovieCardComponent} from './components/movie-card/movie-card.component';
import {MovieInfoComponent} from './components/movie-info/movie-info.component';
import {MoviesListComponent} from './components/movies-list/movies-list.component';
import {PaginationComponent} from './components/pagination/pagination.component';
import {GenresListComponent} from './components/genres-list/genres-list.component';
import {GenreCardComponent} from './components/genre-card/genre-card.component';
import {UserComponent} from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainLayoutComponent,
    GenresComponent,
    MovieCardComponent,
    MovieInfoComponent,
    MoviesListComponent,
    PaginationComponent,
    GenresListComponent,
    GenreCardComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: MainInterceptor
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

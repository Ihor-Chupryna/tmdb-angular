import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {GenresComponent} from "./components/genres/genres.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {MoviesListComponent} from "./components/movies-list/movies-list.component";
import {MovieInfoComponent} from "./components/movie-info/movie-info.component";
import {MovieResolver} from "./services/relolvers/movie.resolver";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'homePage', pathMatch: 'full'},
      {path: 'homePage', component: HomePageComponent},
      {path: 'movies', component: MoviesListComponent},
      {path: 'movies/:id', component: MovieInfoComponent, resolve: {data: MovieResolver}},
      {path: 'genres', component: GenresComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ], exports: [RouterModule]
})
export class AppRoutingModule {
}

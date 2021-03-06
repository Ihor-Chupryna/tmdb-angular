import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {MoviesListComponent} from "./components/movies-list/movies-list.component";
import {MovieInfoComponent} from "./components/movie-info/movie-info.component";
import {MovieResolver} from "./services";
import {GenresListComponent} from "./components/genres-list/genres-list.component";
import {GenresComponent} from "./components/genres/genres.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'movies', pathMatch: 'full'},
      {path: 'movies', component: MoviesListComponent},
      {path: 'movies/:id', component: MovieInfoComponent, resolve: {data: MovieResolver}},
      {
        path: 'genres', component: GenresListComponent, children: [
          {path: ':id', component: GenresComponent}
        ]
      }
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

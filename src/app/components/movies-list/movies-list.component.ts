import { Component, OnInit } from '@angular/core';

import {DataService, MovieService} from "../../services";
import {IMovie} from "../../interfaces";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies:IMovie[]
  page = 3
  checked: boolean;
  constructor(private movieService:MovieService, private dataService:DataService) { }

  ngOnInit(): void {
    this.movieService.getAll(this.page.toString()).subscribe(value => this.movies =value.results)
    this.dataService.switcherStorage.subscribe(value => this.checked = value)
  }

}

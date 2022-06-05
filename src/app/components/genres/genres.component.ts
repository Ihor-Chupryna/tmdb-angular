import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {DataService, GenreService} from "../../services";
import {IMovie} from "../../interfaces";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  moviesByGenre: IMovie[];
  genreName: string;
  page: number = 1;
  currentPage: number;
  checked: boolean;

  id: number;

  constructor(private genreService: GenreService,
              private activatedRoute: ActivatedRoute,
              private dataService: DataService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.genreService.getMovieByGenre(id, this.page).subscribe(value => this.moviesByGenre = value.results)
      this.id = id
      const {state: {genre}} = history;
      this.genreName = genre?.name
    })
    this.dataService.switcherStorage.subscribe(value => this.checked = value)
    this.dataService.pageStorage.subscribe(value => this.page = value)
  }

  ngDoCheck(): void {
    if (this.page !== this.currentPage) {
      this.genreService.getMovieByGenre(this.id,this.page).subscribe(value => {
        this.moviesByGenre = value.results
        this.currentPage = value.page
      })
    }
  }


}

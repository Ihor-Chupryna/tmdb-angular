import {Component, Input, OnInit} from '@angular/core';

import {IMovie} from "../../interfaces";

@Component({
  selector: 'app-genre-card',
  templateUrl: './genre-card.component.html',
  styleUrls: ['./genre-card.component.css']
})
export class GenreCardComponent implements OnInit {
  @Input()
  movieByGenre: IMovie;

  constructor() {
  }

  ngOnInit(): void {
  }

}

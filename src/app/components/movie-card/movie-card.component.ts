import {Component, Input, OnInit} from '@angular/core';

import {IMovie} from "../../interfaces";


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input()
  movie: IMovie;
  @Input()
  checked: boolean;

  ngOnInit(): void {
  }

}

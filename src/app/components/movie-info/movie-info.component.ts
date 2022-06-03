import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IMovieInfo} from "../../interfaces";

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  movie: IMovieInfo;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({data}) => this.movie = data)
  }

}

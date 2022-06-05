import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IMovieInfo} from "../../interfaces";
import {DataService} from "../../services";

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  movie: IMovieInfo;
  checked: boolean;

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({data}) => this.movie = data)
    this.dataService.switcherStorage.subscribe(value => this.checked = value)
  }

}

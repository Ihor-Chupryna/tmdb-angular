import {Component, OnInit} from '@angular/core';

import {DataService, GenreService} from "../../services";
import {IGenre} from "../../interfaces";

@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.css']
})
export class GenresListComponent implements OnInit {
  genres: IGenre[];
  checked: boolean;

  constructor(private genreService: GenreService, private dataService: DataService) {
    this.dataService.switcherStorage.subscribe(value => this.checked = value)
  }

  ngOnInit(): void {
    this.genreService.getList().subscribe(value => this.genres = value.genres)
  }

}

import {Component, OnInit} from '@angular/core';

import {DataService} from "../../services";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  page: number = 1;
  totalPages: number = 500;
  checked: boolean

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.switcherStorage.subscribe(value => this.checked = value)
  }

  next(): void {
    this.page = this.page + 1
    if (this.page === this.totalPages + 1) {
      this.page = 1
    }
    this.dataService.pageStorage.next(this.page)
  }

  prev(): void {
    this.page = this.page - 1

    if (this.page === 0) {
      this.page = this.totalPages
    }
    this.dataService.pageStorage.next(this.page)
  }
}

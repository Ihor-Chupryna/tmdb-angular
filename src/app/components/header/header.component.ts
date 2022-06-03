import {Component, OnInit} from '@angular/core';

import {DataService} from "../../services";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  checked: boolean = false

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  saveToStorage(checkedInput: boolean): void {
    this.dataService.switcherStorage.next(checkedInput)
  }
}

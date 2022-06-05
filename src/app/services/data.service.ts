import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  switcherStorage = new BehaviorSubject<boolean>(false)
  pageStorage = new BehaviorSubject<number>( 1)
  constructor() {
  }
}

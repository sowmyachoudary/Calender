import { Injectable } from '@angular/core';
import {Year} from './year';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
import {Day} from './day';

@Injectable()
export class CalendarService {
  year = new Year();
  constructor() {}
  getMonth(_year, _month): Observable<Day[]> {
    return of(this.year.getMonth(_year, _month));
  }
}

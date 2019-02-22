import { Component, OnInit } from '@angular/core';
import {CalendarService} from '../calendar.service';
import {Day} from '../day';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {
  month: Day[];
  TempDate = new Date();
  TempYear = this.TempDate.getFullYear();
  TempMonth = this.TempDate.getMonth();
  nameDate: string;
  templateWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Cб', 'Вс'];
  nameMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  constructor(public calendarService: CalendarService) { }

  ngOnInit() {
    this.getMonth(0);
  }
  getMonth(step): void {
    this.TempDate = new Date(this.TempYear, this.TempMonth + step, 1);
    this.TempYear = this.TempDate.getFullYear();
    this.TempMonth = this.TempDate.getMonth();
    this.calendarService.getMonth(this.TempYear, this.TempMonth).subscribe(month => this.month = month);
    this.nameDate = this.nameMonths[this.TempMonth] + ' ' + this.TempYear;
  }
}

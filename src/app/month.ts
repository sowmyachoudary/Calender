import {Day} from './day';

export class Month {
  year: number;
  month: number;
  constructor (_year: number, _month: number) {
    this.year = _year;
    this.month = _month;
  }
  getDays(): Day[] {
    const days: Day[] = [];
    const dateObjCurrent: Date = new Date(this.year, this.month, 1);
    const _yearCurrent = dateObjCurrent.getFullYear(),
      _monthCurrent = dateObjCurrent.getMonth(),
      _lastDayCurrent = 32 - new Date(_yearCurrent, _monthCurrent, 32).getDate(),
      _wdayCurrent = (dateObjCurrent.getDay() === 0) ? 7 : dateObjCurrent.getDay();
    const dateObjPrev: Date = new Date(this.year, this.month - 1, 1);
    const _yearPrev = dateObjPrev.getFullYear(),
      _monthPrev = dateObjPrev.getMonth(),
      _lastDayPrev = 32 - new Date(_yearPrev, _monthPrev, 32).getDate();
    const dateObjFollow: Date = new Date(this.year, this.month + 1, 1);
    const _yearFollow = dateObjFollow.getFullYear(),
      _monthFollow = dateObjFollow.getMonth();
    let d, d1, m, y: number;

    let _day = 2 - _wdayCurrent;
    for (let i = 0; i < 42; i++) {
      if (_day < 1) {
        d1 = (_lastDayPrev + _day);
        d = d1 < 10 ? '0' + d1 : d1;
        m = _monthPrev < 9 ? '0' + (_monthPrev + 1) : _monthPrev + 1;
        y = _yearPrev;
        days[i] = new Day();
        days[i].css_class = 'cells prev';
        days[i].date = d1;
        days[i].month =  _monthPrev;
        days[i].year = _yearPrev;
        days[i].full_date = y + '-' + m + '-' + d;
        _day++;
      } else if (_day > _lastDayCurrent) {
        d1 = (_day - _lastDayCurrent);
        d = d1 < 10 ? '0' + d1 : d1;
        m = _monthFollow < 9 ? '0' + (_monthFollow + 1) : _monthFollow + 1;
        y = _yearFollow;
        days[i] = new Day();
        days[i].css_class = 'cells foll';
        days[i].date = d1;
        days[i].month = _monthFollow;
        days[i].year = _yearFollow;
        days[i].full_date = y + '-' + m + '-' + d;
        _day++;
      } else {
        d1 = _day;
        d = _day < 10 ? '0' + _day : _day;
        m = _monthCurrent < 9 ? '0' + (_monthCurrent + 1) : _monthCurrent + 1;
        y = _yearCurrent;
        days[i] = new Day();
        days[i].css_class = 'cells curr';
        days[i].date = d1;
        days[i].month = _monthCurrent;
        days[i].year = _yearCurrent;
        days[i].full_date = y + '-' + m + '-' + d;
        _day++;
      }
    }
    return days;
  }
}

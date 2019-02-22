import {Month} from './month';
import {Day} from './day';

export class Year {
  /*start: number;
  //end: number;*/
  getMonth(_year, _month): Day[] {
    return new Month(_year, _month).getDays();
  }
}





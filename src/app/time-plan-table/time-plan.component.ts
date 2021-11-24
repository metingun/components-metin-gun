import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {numSequence, stringToTimeArrayString} from '../helpers/util';

@Component({
  selector: 'time-plan',
  templateUrl: './time-plan.component.html',
  styleUrls: ['./time-plan.component.css']
})
export class TimePlanComponent implements OnInit, OnChanges {
  @Input() theme: any = {bgColor: 'white', borderColor: 'bluegrey', fontColor: 'purple'};
  @Input() selectionType: string = 'checkbox';
  @Input() infoText: string = '';
  @Input() allDayText: string = '';
  @Input() theme6: any = {
    active: {bgColor: 'blue', iconBgColor: '', borderColor: 'dark-blue', fontColor: 'purple'},
    inactive: {bgColor: 'bluegrey', iconBgColor: '', borderColor: 'x-dark-bluegrey', fontColor: 'purple'}
  };
  @Input() separateMinutes: number = 60;
  @Input() dateFormat: any = {request: 'yyyy-MM-dd HH:mm:ss', response: 'yyyy-MM-dd HH:mm:ss'};

  @Input() days: any[] = [
    {day: '', selectedInterval: []},
    {day: '', selectedInterval: []},
    {day: '', selectedInterval: []},
    {day: '', selectedInterval: []},
    {day: '', selectedInterval: []},
    {day: '', selectedInterval: []},
    {day: '', selectedInterval: []}];


  @Input() themeButton: any = {
    bgColor: 'dark-orange',
    borderColor: 'dark-orange',
    fontColor: 'white',
    buttonHeight: 'xs'
  } // xl xs s l m
  @Input() buttonOptions: any = {buttonType: 'button', buttonLetter: 'SAVE'} // file - button
  @Input() iconOptions: any = {iconImagePath: '', iconType: 'center'} //left right center

  @Input() themeButton2: any = {
    bgColor: 'white',
    borderColor: 'dark-orange',
    fontColor: 'dark-orange',
    buttonHeight: 'xs'
  } // xl xs s l m
  @Input() buttonOptions2: any = {buttonType: 'button', buttonLetter: 'RESET'} // file - button
  @Input() iconOptions2: any = {iconImagePath: '', iconType: 'center'} //left right center

  @Output() clickedLeftButton: EventEmitter<any> = new EventEmitter<any>();
  @Output() clickedRightButton: EventEmitter<any> = new EventEmitter<any>();

  daysRowIndexes: any[] = [];
  daysBackup: any[] = [];

  hours: any[] = [];
  down: boolean = false;
  clickedColumn: number = -1;

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
        this.getHours();
        this.generateRowIndexes();
    }

  ngOnInit(): void {
/*    this.getHours();
    this.generateRowIndexes();*/
  }

  clickButton(event: any, num: number) {
    if (num === 1) {
      this.clickedLeftButton.emit(this.days);
    } else {
      for (const day of this.days) {
        day.selectedInterval = [];
      }
      this.generateRowIndexes();
      this.clickedRightButton.emit(this.days);
    }
  }

  findRowIndexesFromDates(start: string, end: string) {
    if (start !== undefined && end !== null && start !== null && end !== undefined) {
      let startTime = stringToTimeArrayString(this.dateFormat.request, start);
      let endTime = stringToTimeArrayString(this.dateFormat.request, end);

      if (startTime === "00:00" && endTime === "23:59") {
        return [0, this.hours.length - 1];
      } else {
        let startIndex = this.hours.indexOf(startTime);
        let endIndex = this.hours.indexOf(endTime) - 1;
        if (endTime === '23:59') {
          endIndex = this.hours.length - 2;
        }
        return [startIndex, endIndex];
      }
    }
    return [];
  }

  generateRowIndexes() {
    this.daysRowIndexes = [];
    for (const day of this.days) {
      let obj = {day: '', selectedInterval: []};
      obj.day = day.day;

      // @ts-ignore
      obj.selectedInterval = this.findRowIndexesFromDates(day.selectedInterval[0], day.selectedInterval[1])
      this.daysRowIndexes.push(obj);
    }
  }

  checkAllSelectedOnDay(start: string, end: string) {
    let startTime = stringToTimeArrayString(this.dateFormat.request, start);
    let endTime = stringToTimeArrayString(this.dateFormat.request, end);
    return startTime === '00:00' && endTime === '23:59';
  }

  changeDaySelected(event: any, index: number) {
    if (event) {
      this.days[index].selectedInterval = ["1900-01-01 00:00:00", "1900-01-01 23:59:00"];
      this.daysRowIndexes[index].selectedInterval = [0, this.hours.length - 1];
    } else {
      this.days[index].selectedInterval = [];
      this.daysRowIndexes[index].selectedInterval = [];
    }
  }

  allSelectedAtOneDay(colIndex: number) {
    if (colIndex !== 0) {

      let day = this.daysRowIndexes[colIndex - 1].selectedInterval.sort((n1: any, n2: any) => n1 - n2);

      let isSelected = false;

      if (day[0] === 0 && day[1] === this.hours.length - 1) {
        isSelected = true;
      }
      return isSelected;
    }
    return false;
  }

  isAllSelected() {
    let a = true;
    for (let day of this.daysRowIndexes) {
      day = day.selectedInterval.sort((n1: any, n2: any) => n1 - n2);

      if (day[0] !== 0 || day[1] !== this.hours.length - 1) {
        a = false;
      }
    }
    return a;
  }

  changeAllDaysSelected(event: any) {
    if (event) {
      for (let day of this.daysRowIndexes) {
        day.selectedInterval = [0, this.hours.length - 1];
      }
    } else {
      for (let day of this.daysRowIndexes) {
        day.selectedInterval = [];
      }
    }
  }

  getHours() {
    let times = [];
    let startTime = 0;

    for (let i = 0; startTime < 24 * 60 + 1; i++) {
      let hour = Math.floor(startTime / 60);
      let minute = (startTime % 60);
      times[i] = ("0" + (hour % 24)).slice(-2) + ':' + ("0" + minute).slice(-2);
      startTime = startTime + this.separateMinutes;
    }
    this.hours = times;
    return times.slice(0, times.length - 1);
  }

  numSequence(n: number) {
    return numSequence(n);
  }

  mousedown(colIndex: number, rowIndex: number) {
    if (colIndex !== 0) {
      this.down = true;
      this.clickedColumn = colIndex - 1;

      this.daysRowIndexes[colIndex - 1].selectedInterval = [];
      this.daysRowIndexes[colIndex - 1].selectedInterval.push(rowIndex);
    }

  }

  mouseover(colIndex: number, rowIndex: number) {
    if (colIndex !== 0) {
      if (this.down) {
        if (colIndex - 1 === this.clickedColumn) {

          let day = this.daysRowIndexes[colIndex - 1].selectedInterval.sort((n1: any, n2: any) => n1 - n2);
          let a = rowIndex <= day[1] && rowIndex >= day[0];

          if (!a) {
            this.daysRowIndexes[colIndex - 1].selectedInterval.push(rowIndex);
            let sorted = this.daysRowIndexes[colIndex - 1].selectedInterval.sort((n1: any, n2: any) => n1 - n2);
            this.daysRowIndexes[colIndex - 1].selectedInterval = [sorted[0], sorted[sorted.length - 1]];
          }
        }
      }
    }
  }

  mouseup(colIndex: number, rowIndex: number) {
    if (colIndex !== 0) {
      this.down = false;
      if (colIndex - 1 === this.clickedColumn) {

        let day = this.daysRowIndexes[colIndex - 1].selectedInterval.sort((n1: any, n2: any) => n1 - n2);
        let a = rowIndex <= day[1] && rowIndex >= day[0];

        if (!a) {
          this.daysRowIndexes[colIndex - 1].selectedInterval.push(rowIndex);
          let sorted = this.daysRowIndexes[colIndex - 1].selectedInterval.sort((n1: any, n2: any) => n1 - n2);
          this.daysRowIndexes[colIndex - 1].selectedInterval = [sorted[0], sorted[sorted.length - 1]];
        }

        for (let i = 0; i < this.daysRowIndexes.length; i++) {

          let isAllSelected = this.allSelectedAtOneDay(i + 1);

          if (isAllSelected) {
            this.days[i].selectedInterval = [];
            this.days[i].selectedInterval.push("1900-01-01 00:00:00");
            this.days[i].selectedInterval.push("1900-01-01 23:59:00");
          } else {
            if (this.daysRowIndexes[i].selectedInterval.length > 0) {
              let day = this.daysRowIndexes[i].selectedInterval.sort((n1: any, n2: any) => n1 - n2);

              this.days[i].selectedInterval = [];
              this.days[i].selectedInterval.push(
                "1900-01-01 " + this.hours[day[0]] + ":00");
              this.days[i].selectedInterval.push(
                "1900-01-01 " + this.hours[day[1] + 1] + ":00");
            }
          }
        }
      }
    }
  }

  checkIsSelected(colIndex: number, rowIndex: number) {
    if (colIndex !== 0) {
      let isAllSelected = this.allSelectedAtOneDay(colIndex);

      let day = this.daysRowIndexes[colIndex - 1].selectedInterval.sort((n1: any, n2: any) => n1 - n2);

      let isSelected = rowIndex <= day[1] && rowIndex >= day[0];
      return (isSelected !== undefined && isSelected !== null && isSelected) ||
        isAllSelected;
    }
    return false;
  }

  getTextHour(colIndex: number, rowIndex: number) {
    if (colIndex !== 0) {
      let text = '';
      let start = '';
      let end = '';
      let daySorted = this.daysRowIndexes[colIndex - 1].selectedInterval.sort((n1: any, n2: any) => n1 - n2);

      let isAllSelected = this.allSelectedAtOneDay(colIndex);

      if (isAllSelected) {
        if (rowIndex === 0) {
          start = '00:00';
          end = '23:59';
          text = start + " - " + end;
        }
      } else {
        if (daySorted[0] === rowIndex) {
          start = this.hours[daySorted[0]];
          end = this.hours[daySorted[1] + 1];
          if (daySorted[1] === this.hours.length - 2) {
            end = '23:59'
          }
          text = start + " - " + end;
        }
      }
      return text;
    }
    return '';
  }

}

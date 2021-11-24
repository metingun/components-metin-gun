import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';
import {
  editViewDate,
  numSequence,
  putDays,
  separateDateForMask,
  separateDateForMaskPlaceholder,
  stringToDateArray,
  stringToTimeArray
} from '../../helpers/util';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  @Input() clickOutCloseBox: boolean = false;
  @Input() isDisabled: boolean = false;

  @Input() dateInfoModel: any = {}
  @Input() label: string = 'Date';
  @Input() currentDate: Date = new Date();
  @Input() withTimePicker: boolean = false;
  @Input() dateFormat: any = {
    view: {format: 'dd-MM-yyyy HH:mm', timezone: '+300'},
    result: {format: 'dd-MM-yyyyTHH:mm', timezone: '+300'}
  };
  @Input() theme: any = {
    selectedBgColor: 'purple', inputBgColor: 'white', inputFontColor: 'dark-grey',
    inputLabelColor: 'purple', pickerBgColor: 'white', selectedFontColor: 'white', normalFontColor: 'purple',
    shortDayFontColor: 'light-purple'
  };

  @Input() hour24: boolean = true;
  currentTime: Date = new Date();
  @Input() themeTimepicker: any = {
    hourFormatColor: 'dark-purple',
    bgColor: 'light-bluegrey',
    hourBgColor: 'white',
    fontColor: 'purple',
    borderColor: 'bluegrey',
    inputFontColor: 'purple',
    inputLabelColor: 'purple',
    inputBgColor: 'white'
  };

  @Output() getDate: EventEmitter<any> = new EventEmitter<any>();

  timeWithInput: boolean = false;
  timeValue = '';

  viewMonth: number = 0;
  viewYear: number = 0;
  viewDay: number = 0;

  selectedDay: number = 0;
  selectedMonth: number = 0;
  selectedYear: number = 0;
  /*  public selectedDate: number[] = [5];*/
  daysArray: any[] = [];
  viewPage: number = -1; //0:day 1:month 2:year
  viewFirstYear: number = 0
  inf: any = {firstDay: '', totalDay: 0}

  viewDate: string = '';

  hidingClass: string = '';

  constructor(private datePipe: DatePipe, private renderer: Renderer2) {
    this.createId();
    this.renderer.listen('window','click', (event=>{
      if (!event.target.classList.contains(this.hidingClass)){
        this.viewPage =-1;
      }
    }));
  }

  ngOnInit(): void {
    let view = this.getDateFormatForView(this.currentDate);
    if (view !== null) {
      this.viewDate = view.toString();
      this.getDateEvent();
    }

    let arr = stringToDateArray(this.dateFormat.view.format, this.viewDate);
    this.selectedYear = arr[0];
    this.selectedMonth = arr[1] - 1;
    this.selectedDay = arr[2];
    this.viewYear = this.selectedYear;
    this.viewMonth = this.selectedMonth;
    this.viewDay = this.selectedDay;
    this.viewFirstYear = this.viewYear;

    this.loadDays();
  }

  createId() {
    this.hidingClass='date-hiding'+Math.floor(Math.random() * 111111111111);
  }

  getTime(event: any) {
    this.timeValue = event;
    this.styleChange(this.selectedDay, this.timeValue, false);
  }

  getDateEvent() {
    if (this.withTimePicker) {
      /*let viewDate=this.viewDate.slice(0,10)+this.timeValue.slice(10,this.timeValue.length);*/
      this.getDate.emit(this.getDateFormatForResult(this.currentDate.toString()));
    } else {
      this.getDate.emit(this.getDateFormatForResult(this.currentDate.toString()));
    }
  }

  getDateFormatForView(date: Date) {
    return this.datePipe.transform(
      date.toString(), this.dateFormat.view.format, this.dateFormat.view.timezone);
  }

  getDateFormatForResult(date: string) {
    return this.datePipe.transform(
      date.toString(), this.dateFormat.result.format, this.dateFormat.result.timezone);
  }

  styleChange(value: any, viewDate: any, input: boolean) {
    if (value !== '') {
      this.selectedDay = parseInt(value);
      this.selectedYear = this.viewYear;
      this.selectedMonth = this.viewMonth;

      this.currentDate.setFullYear(this.selectedYear, this.selectedMonth, this.selectedDay);
      if (this.withTimePicker) {

        let arr = stringToTimeArray(this.dateFormat.view.format, viewDate)
        this.currentDate.setHours(arr[0], arr[1], 0, 0);
        this.currentTime.setHours(arr[0], arr[1], 0, 0);
        if (input) {
          this.withTimePicker = false;
          setTimeout(() => {
            this.withTimePicker = true;
          }, 0);
        }
      }
      let view = this.getDateFormatForView(this.currentDate);
      if (view !== null) {
        this.viewDate = view.toString();
      }

      this.getDateEvent();
    }
  }

  inputKeyUp() {
    let viewDate = this.viewDate.slice(0, this.viewDate.length - 1);
    viewDate = editViewDate(this.dateFormat.view.format, viewDate);
    if (viewDate.length === this.dateFormat.view.format.length) {
      let date = stringToDateArray(this.dateFormat.view.format, viewDate);
      this.selectedYear = date[0];
      this.selectedMonth = date[1];
      this.selectedDay = date[2];
      this.viewMonth = date[1] - 1;
      this.viewYear = date[0];
      this.viewDay = date[2];

      this.styleChange(this.selectedDay, viewDate, true);

    }
  }


  getTitleForDayPage() {
    if (this.viewMonth < 12 && this.viewMonth >= 0) {
      return this.dateInfoModel.months[this.viewMonth].shortName + ' ' + this.viewYear;
    } else {
      return this.viewYear - 1;
    }
  }

  separateDateForMask() {
    return separateDateForMask(this.dateFormat.view.format);
  }

  separateDateForMaskPlaceholder() {
    return separateDateForMaskPlaceholder(this.dateFormat.view.format);
  }

  numSequence(n: number) {
    return numSequence(n);
  }

  getClass(value: any) {
    if (value !== '') {
      return 'yU6tNu23';
    }
    return 'date-hiding';
  }

  getClassStyle(value: any) {
    if (value !== '') {
      if (this.selectedDay === parseInt(value) && this.selectedMonth === this.viewMonth && this.selectedYear === this.viewYear) {
        return {
          'background-color': 'var(--' + this.theme.selectedBgColor + ')',
          'color': 'var(--' + this.theme.selectedFontColor + ')',
          'border': 'solid var(--' + this.theme.selectedBgColor + ')'
        };
      }
      return {};
    }
    return {};
  }

  styleChangeMonths(value: number) {
    this.viewMonth = value;
    this.viewPage = 0;
    this.loadDays();
  }

  getClassMonths(value: number) {
    if (this.viewMonth === value && this.viewYear === this.selectedYear) {
      return 'frame-1352-12Qo6S selected-month-fonts '+this.hidingClass;
    }
    return 'frame-1353-YfM5dm month-fonts '+this.hidingClass;
  }

  getClassStyleMonths(value: number) {
    if (this.getClassMonths(value) === 'frame-1352-12Qo6S selected-month-fonts '+this.hidingClass) {
      return {
        'background-color': 'var(--' + this.theme.selectedBgColor + ')',
        'color': 'var(--' + this.theme.selectedFontColor + ')'
      };
    } else if (this.getClassMonths(value) === 'frame-1353-YfM5dm month-fonts '+this.hidingClass) {
      return {'color': 'var(--' + this.theme.normalFontColor + ')'};
    }
    return {};
  }

  getClassStyleYears(value: number) {
    if (this.getClassYears(value) === 'frame-1352-12Qo6S selected-month-fonts '+this.hidingClass) {
      return {
        'background-color': 'var(--' + this.theme.selectedBgColor + ')',
        'color': 'var(--' + this.theme.selectedFontColor + ')'
      };
    } else if (this.getClassYears(value) === 'frame-1353-YfM5dm month-fonts '+this.hidingClass) {
      return {'color': 'var(--' + this.theme.normalFontColor + ')'};
    }
    return {};
  }

  getClassYears(firstYear: number) {
    if (this.viewYear === firstYear) {
      return 'frame-1352-12Qo6S selected-month-fonts '+this.hidingClass;
    }
    return 'frame-1353-YfM5dm month-fonts '+this.hidingClass;
  }

  styleChangeYears(value: number) {
    this.viewYear = value;
    this.selectedYear = value;
    this.viewPage = 1;
  }

  previousMonth() {
    if (this.viewMonth === 0) {
      this.viewYear -= 1;
      this.viewMonth = 11;
    } else {
      this.viewMonth -= 1;
    }
    this.loadDays();

  }

  nextMonth() {
    if (this.viewMonth === 11) {
      this.viewYear += 1;
      this.viewMonth = 0;
    } else {
      this.viewMonth += 1;
    }
    this.loadDays();
  }

  previousYear() {
    this.viewYear > 12 ? this.viewFirstYear -= 12 : ''
  }

  nextYear() {
    this.viewFirstYear += 12;
  }

  loadDays() {
    let firstDay = new Date(this.viewYear, this.viewMonth, 1).toDateString().substring(0, 2).toLowerCase();
    let totalDay = new Date(this.viewYear, this.viewMonth + 1, 0).getDate();
    this.inf.firstDay = firstDay;
    this.inf.totalDay = totalDay;

    this.daysArray = putDays(this.dateInfoModel.days, this.inf);
  }

  separateDaysArray(start: number, finish: number) {
    return this.daysArray.slice(start, finish);
  }

  pageClick() {
    if (this.viewPage === 0) {
      this.viewPage = 1;
    } else if (this.viewPage === 1) {
      this.viewPage = 2;
    }
  }

}

import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2} from '@angular/core';
import {DatePipe} from "@angular/common";
import {editViewDate, separateDateForMask, separateDateForMaskPlaceholder, stringToTimeArray} from "../../helpers/util";

@Component({
  selector: 'timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.css']
})
export class TimepickerComponent implements OnInit {
  @Input() clickOutCloseBox: boolean = false;
  @Input() isDisabled: boolean = false;

  @Input() timeWithDatepicker: boolean = false;
  @Input() timeWithInput: boolean = true;
  @Input() label: string = 'Time';
  @Input() hour24: boolean = true;
  @Input() currentTime: Date = new Date();
  @Input() timeFormat: any = {view: {format: 'HH:mm', timezone: '+156'}};
  @Input() theme: any = {
    hourFormatColor: 'dark-purple', bgColor: 'light-bluegrey',
    hourBgColor: 'white', fontColor: 'purple', borderColor: 'bluegrey'
    , inputFontColor: 'purple', inputLabelColor: 'purple',
    inputBgColor: 'white'
  };

  @Output() getTime: EventEmitter<any> = new EventEmitter<any>();
  viewPage: number = -1;

  currentHour = '';
  currentMinute = '';
  hourFormat = 'PM';
  currentDate: Date = new Date(0, 0, 0, 0, 0, 0, 0);

  viewTime = '';

  @Input() hidingClassString = '';


  constructor(private datePipe: DatePipe, private eRef: ElementRef, private renderer: Renderer2) {
    this.createId();
    this.renderer.listen('window', 'click', (event => {
      if (!event.target.classList.contains(this.hidingClassString)) {
        this.viewPage = -1;
      }
    }));
  }

  createId() {
    if (!this.timeWithDatepicker) {
      this.hidingClassString = 'date-hiding' + Math.floor(Math.random() * 111111111111);
    }
  }

  ngOnInit(): void {
    if (!this.timeWithInput) {
      this.viewPage = 0;
    }
    if (!this.hour24) {
      this.currentTime.getHours() >= 12 ? this.hourFormat = "PM" : this.hourFormat = "AM";
      let hours = ((this.currentTime.getHours() + 11) % 12 + 1);
      this.currentHour = this.completeNumber(hours);
    } else {
      this.currentHour = this.completeNumber(this.currentTime.getHours());
    }
    this.currentMinute = this.completeNumber(this.currentTime.getMinutes());
    this.getTimeValue();
  }

  getTimeValue() {
    this.currentDate.setHours(parseInt(this.currentHour), parseInt(this.currentMinute), 0, 0);
    let formatDate = this.getDateFormat(this.currentDate);

    if (formatDate !== null) {
      this.viewTime = formatDate.toString();
    }

    this.getTime.emit(formatDate);
  }

  hourUp() {
    if (this.hour24) {
      if (this.currentHour === '23') {
        this.currentHour = '00'
      } else {
        let a = parseInt(this.currentHour);
        a += 1;
        this.currentHour = this.completeNumber(a);
      }
    } else {
      if (this.currentHour === '12') {
        this.currentHour = '01'
      } else {
        let a = parseInt(this.currentHour);
        a += 1;
        this.currentHour = this.completeNumber(a);
      }
    }
    this.getTimeValue();
  }

  hourDown() {
    if (this.hour24) {
      if (this.currentHour === '00') {
        this.currentHour = '23'
      } else {
        let a = parseInt(this.currentHour);
        a -= 1;
        this.currentHour = this.completeNumber(a);
      }
    } else {
      if (this.currentHour === '01') {
        this.currentHour = '12'
      } else {
        let a = parseInt(this.currentHour);
        a -= 1;
        this.currentHour = this.completeNumber(a);
      }
    }
    this.getTimeValue();
  }

  minuteUp() {
    if (this.currentMinute === '59') {
      this.currentMinute = '00'
    } else {
      let a = parseInt(this.currentMinute);
      a += 1;
      this.currentMinute = this.completeNumber(a);
    }
    this.getTimeValue();
  }

  minuteDown() {
    if (this.currentMinute === '00') {
      this.currentMinute = '59'
    } else {
      let a = parseInt(this.currentMinute);
      a -= 1;
      this.currentMinute = this.completeNumber(a);
    }
    this.getTimeValue();
  }

  changeHourFormat() {
    if (!this.hour24) {
      if (this.hourFormat === 'PM') {
        this.hourFormat = 'AM'
      } else {
        this.hourFormat = 'PM'
      }
    }
    this.getTimeValue();
  }

  completeNumber(num: number) {
    if (num.toString().length === 1) {
      return '0' + num.toString();
    } else {
      return num.toString()
    }
  }

  getDateFormat(date: Date) {
    return this.datePipe.transform(
      date.toString(), this.timeFormat.view.format, '+156');
  }

  separateDateForMask() {
    return separateDateForMask(this.timeFormat.view.format);
  }

  separateDateForMaskPlaceholder() {
    return separateDateForMaskPlaceholder(this.timeFormat.view.format);
  }

  inputKeyUp() {
    let viewTime = this.viewTime.slice(0, this.viewTime.length - 1);
    viewTime = editViewDate(this.timeFormat.view.format, viewTime);
    if (viewTime.length === this.timeFormat.view.format.length) {
      let date = stringToTimeArray(this.timeFormat.view.format, viewTime);

      let hour = this.completeNumber(date[0]);
      let minute = this.completeNumber(date[1]);

      this.validateTimeValues(hour, minute);

    }
  }

  validateTimeValues(hour: string, minute: string) {
    if (this.hour24) {
      if (parseInt(hour) > 23) {
        this.currentHour = this.completeNumber(0);
      } else {
        this.currentHour = hour;
      }
    } else {
      if (parseInt(hour) > 11 || parseInt(hour) === 0) {
        this.currentHour = this.completeNumber(12);
      } else {
        this.currentHour = hour;
      }
    }
    if (parseInt(minute) > 59) {
      this.currentMinute = this.completeNumber(0);
    } else {
      this.currentMinute = minute;
    }
    this.getTimeValue();
  }

}

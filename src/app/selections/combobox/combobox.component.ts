import {
  Component,
  EventEmitter,
  Input, OnChanges,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.css']
})
export class ComboboxComponent implements OnInit, OnChanges {
  @Input() isDisabled: boolean = false;

  @Input() clickOutCloseBox: boolean = true;
  @Input() iconView: boolean = true;

  @Input() options: any[] = [];
  @Input() selectedOption: number = -1;
  @Input() selectedOptionsList: number[] = [];

  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() themeInput = {bgColor: 'white', borderColor: 'light-bluegrey'}

  @Input() bulkSelection: boolean = true;
  @Input() search: boolean = false;

  @Input() themeOptions = {bgColor: '', selectedOptionsBgColor: '', rectangleColor: ''}
  @Input() visible: boolean = true;

  @Input() themeButton: any = {bgColor: '', borderColor: '', fontColor: '', buttonHeight: ''} // xl xs s l m
  @Input() buttonOptions1: any = null; // file - button
  @Input() iconOptions: any = {iconImagePath: '', iconType: ''} //left right center

  @Input() selectionsTheme: any = {
    active: {bgColor: 'blue', iconBgColor: '', borderColor: 'dark-blue', fontColor: 'dark-blue'},
    inactive: {bgColor: 'bluegrey', iconBgColor: '', borderColor: 'x-dark-bluegrey', fontColor: 'purple'}
  };
  @Input() selectionType: string = 'checkbox'; //checkbox - check - radio
  @Input() uniqueValue: boolean = true;

  @Output() chooseEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() clickButton: EventEmitter<any> = new EventEmitter<any>();

  focused: boolean;
  searchText: string = '';
  optionsView: any[] = [];
  selectedList: number[] = []
  empty: boolean = true;

  hidingClass: string = '';

  constructor(private renderer: Renderer2) {
    this.createId()
    this.focused = false;
    this.renderer.listen('window', 'click', (event => {
      this.focused = event.target.classList.contains(this.hidingClass);
    }));
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.optionsView = this.options;
    this.selectedList = this.selectedOptionsList;

    if (!this.search && this.placeholder === '') {
      this.placeholder = this.label;
    }
    if (!this.uniqueValue) {
      for (let i = 0; i < this.optionsView.length; i++) {
        this.optionsView[i].value = i;
      }
    }
  }

  ngOnInit(): void {
/*    this.optionsView = this.options;
    this.selectedList = this.selectedOptionsList;

    if (!this.search && this.placeholder === '') {
      this.placeholder = this.label;
    }
    if (!this.uniqueValue) {
      for (let i = 0; i < this.optionsView.length; i++) {
        this.optionsView[i].value = i;
      }
    }*/
  }

  createId() {
    this.hidingClass='item-hiding'+Math.floor(Math.random() * 111111111111);
  }

  getHidingClass() {
    if (this.isDisabled){
      return '';
    }
    return !this.focused ? this.hidingClass : '';
  }

  selectedEvent(event: any) {
    if (this.bulkSelection) {
      this.selectedOptionsList = event;
    } else {
      this.focused = false;
      this.selectedOption = event;
    }
    this.chooseEvent.emit(event);
  }

  buttonClick(event: any) {
    this.clickButton.emit(event);
  }

  getStyle() {
    if (this.bulkSelection) {
      return {
        'color': this.focused || this.selectedOptionsList.length > 0 ?
          this.themeOptions.selectedOptionsBgColor : 'var(--' + this.themeOptions.rectangleColor + ')',
        'opacity': this.label !== '' ? '1' : '0'
      }
    }
    return {
      'color': this.focused || this.selectedOption !== -1 ?
        this.themeOptions.selectedOptionsBgColor : 'var(--' + this.themeOptions.rectangleColor + ')',
      'opacity': this.label !== '' ? '1' : '0',
      'position': this.focused ? 'relative' : ''
    }
  }

  getSelectedOptions() {
    let text = '';
    if (this.bulkSelection) {
      for (let i = 0; i < this.selectedOptionsList.length; i++) {
        let opt;
        if (this.uniqueValue) {
          opt = this.options.find(a => a.value === this.selectedOptionsList[i]);
        } else {
          opt = this.options[this.selectedOptionsList[i]];
        }

        if (i === 0) {
          text += opt.option;
        } else {
          text += ', ' + opt.option;
        }
      }
    } else {
      if (this.selectedOption >= 0) {
        let opt;
        if (this.uniqueValue) {
          opt = this.options.find(i => i.value === this.selectedOption);
        } else {
          opt = this.options[this.selectedOption];
        }
        text = opt.option;
      }
    }
    return text;
  }

  searchCombobox() {
    let arr = [];

    if (this.focused) {
      for (let i = 0; i < this.options.length; i++) {
        if (this.options[i].option.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1) {
          arr.push(this.options[i])
        }
      }
    }
    this.optionsView = arr;
  }
}

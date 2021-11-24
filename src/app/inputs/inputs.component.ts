import {Component, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'input-demo',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
  @Input() isDisabled: boolean = false;
  @Input() validation: boolean = false;
  @Input() validationTheme: any = {};
  @Input() validationsOptions: any = {}; //[0-9]{3}-[0-9]{2}-[0-9]{3}
  // tel  email  text   password   number  url

  @Input() features: any = {
    placeholderText: '',
    iconPath: '',
    iconPosition: '',
    labelText: '',
    inputType: '',
    inputDataType: '',
    autoComplete: false
  };
  @Input() theme: any = {inputColor: '', fontColor: '', borderColor: '', bgColor: '', heightInput: '113px'};
  @Input() text: string = '';

  @Output() inputText: EventEmitter<any> = new EventEmitter<any>()
  autoComplete: string = 'on';
  inputId: string = '';
  focused: boolean = false;
  isValid: any=null;
  alertMessage: string = '';

  constructor() {
  }

  ngOnInit(): void {

    if (!this.features.autoComplete) {
      this.autoComplete = 'off';
    }
    if (this.features.iconPath !== '') {
      this.focused = true;
    }
    this.createId();
  }

  changeInput() {
    let isValid=this.validate();
    let obj={text:this.text,isValid:isValid,message:this.features.labelText}
    this.inputText.emit(obj)
  }

  validate() {
    if (this.validation) {
      // @ts-ignore
      let validity = document.getElementById(this.inputId)?.validity;
      // @ts-ignore
      if (!validity.valid) {

        if (validity.valueMissing) {// required
          this.alertMessage = this.validationsOptions.isRequired.alert
        } else if (validity.tooShort) {//minLength
          this.alertMessage = this.validationsOptions.minCharLength.alert
        } else if (validity.tooLong) {//maxLength
          this.alertMessage = this.validationsOptions.maxCharLength.alert
        } else if (validity.rangeUnderflow) {//min
          this.alertMessage = this.validationsOptions.minValue.alert
        } else if (validity.rangeOverflow) {//max
          this.alertMessage = this.validationsOptions.maxValue.alert
        } else if (validity.typeMismatch) {//emailTypeMismatch
          this.alertMessage = this.validationsOptions.typeMismatch.alert
        } else if (validity.patternMismatch) {//pattern
          this.alertMessage = this.validationsOptions.regex.alert
        } else if (validity.badInput) {//bad
          this.alertMessage = this.validationsOptions.regex.alert
        } else if (validity.customError) {//customError
          this.alertMessage = this.validationsOptions.regex.alert
        }
      } else {
        this.alertMessage = ''
      }
      this.isValid = validity.valid;
      return validity.valid;


    }
  }


  getStyle() {

    return {
      'opacity': this.features.labelText !== '' ? '1' : '0',
      'position': this.focused ? 'relative' : '',
      'color': 'var(--' + this.theme.fontColor + ')',
      'left': this.features.labelText !== '' ? '7px' : '', 'top': this.features.labelText === '' ? '-10px' : '',
      'background-color': 'var(--' + this.theme.bgColor + ')',
      'width': this.focused || this.text !== '' ? 'auto' : '90%',
      'height': this.features.inputType === 'text' ? '18px' : '12px'
    }
  }

  clickTextDiv() {
    if (!this.isDisabled) {
      this.features.iconPath !== '' ? this.focused = true : '';
    }
  }

  createId() {
    this.inputId = 'inputText' + Math.floor(Math.random() * 111111111111);
  }

  getRequiredValue() {
    if (this.validation) {
      return this.validationsOptions.isRequired.value;
    }
  }

  getMinLengthValue() {
    if (this.validation) {
      return this.validationsOptions.minCharLength.value;
    }
  }

  getMaxLengthValue() {
    if (this.validation) {
      return this.validationsOptions.maxCharLength.value;
    }
  }

  getMinValue() {
    if (this.validation) {
      if (this.features.inputDataType === 'number') {
        return this.validationsOptions.minValue.value;
      }
    }
  }

  getMaxValue() {
    if (this.validation) {
      if (this.features.inputDataType === 'number') {
        return this.validationsOptions.maxValue.value;
      }
    }
  }

  getPatternValue() {
    if (this.validation) {
      if (this.features.inputDataType !== 'number' || this.validationsOptions.regex.value !== '') {
        return this.validationsOptions.regex.value;
      }
    }
  }
}

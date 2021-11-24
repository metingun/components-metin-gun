import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'button-fixed',
  templateUrl: './button-fixed.component.html',
  styleUrls: ['./button-fixed.component.css']
})
export class ButtonFixedComponent implements OnInit {
  openStatus:boolean=false;
  @Input() theme:any={bgColor:'dark-orange-2',fontColor:'white'};
  @Input() buttonOptions:any={iconPath:'assets/img/star-button-icon.svg',text:''};


  @Output() clickEvent:EventEmitter<any>=new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  clickButtonEvent(){
    this.clickEvent.emit()
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'announce-list-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() theme:any={bgColor:'',fontColor:''}
  @Input() content:any={id:0,text:'',playUrl:''}

  @Input() buttonOptions:any={bgColor:'',textColor:'',
    iconFirst:'',iconSecond:'',
    buttonText:'',iconHeight:''};

  @Output() buttonEvent:EventEmitter<any>=new EventEmitter<any>();

  audio = new Audio();

  buttonClick(value: any) {
    this.buttonEvent.emit('')
  }
  constructor() { }

  ngOnInit(): void {
  }

}

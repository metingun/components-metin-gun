import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'button-large',
  templateUrl: './button-large.component.html',
  styleUrls: ['./button-large.component.css']
})
export class ButtonLargeComponent implements OnInit {

  @Input() iconPath:string='../../assets/img/plus-icon@2x.png'
  @Input() buttonText:string=''
  @Input() theme:any= {fontColor:'purple',bgColor:'light-bluegrey',iconBgColor:'white'}

  @Output() newWindow:EventEmitter<string>=new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }
  add(){
    this.newWindow.emit()
  }
}

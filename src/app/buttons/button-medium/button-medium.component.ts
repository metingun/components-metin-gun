import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'button-medium',
  templateUrl: './button-medium.component.html',
  styleUrls: ['./button-medium.component.css']
})
export class ButtonMediumComponent implements OnInit {
  @Input() iconPath:string='../../assets/img/plus-icon-1@2x.png'
  @Input() buttonText:string='';
  @Input() theme:any={bgColor:'light-bluegrey',iconBgColor:'white',fontColor:'purple'};

  @Output() clickEvent:EventEmitter<any>=new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  clickIcon(){
    this.clickEvent.emit();
  }

}

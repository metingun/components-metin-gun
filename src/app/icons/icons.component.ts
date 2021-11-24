import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  @Input() iconName:string='';
  @Input() iconPosition:string='center';//left right center

  constructor() { }

  ngOnInit(): void {
  }
  getStyle(){
    if (this.iconPosition==='center'){
      return {'left':'50%'}
    } else if (this.iconPosition==='left'){
      return {'left':'15%'}
    }else if (this.iconPosition==='right'){
      return {'left':'85%'}
    } else {
      return {}
    }
  }
}

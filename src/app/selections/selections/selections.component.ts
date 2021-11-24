import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'checks',
  templateUrl: './selections.component.html',
  styleUrls: ['./selections.component.css']
})
export class SelectionsComponent implements OnInit {
  @Input() selectionType:string='checkbox';//checkbox - radio - check
  @Input() activeText:string='';
  @Input() passiveText:string='';
  @Input() isDisabled:boolean=false;
  @Input() selectionStatus:boolean=true;
  @Input() theme:any={active:{bgColor:'',iconBgColor:'',borderColor:'',fontColor:''},
    inactive:{bgColor:'',iconBgColor:'',borderColor:'',fontColor:''}};

  @Output() isSelected:EventEmitter<boolean>=new EventEmitter<boolean>();

  text:string='';

  constructor() { }

  ngOnInit(): void {
    this.changeText();
    if (this.isDisabled){
      this.theme={active:{bgColor:'dark-bluegrey',iconBgColor:'white',borderColor:'light-grey',fontColor:'purple'},
        inactive:{bgColor:'light-bluegrey',iconBgColor:'white',borderColor:'bluegrey-2',fontColor:'purple'}};
    }
  }

  changeSelection(num:number){
    if (!this.isDisabled && num===1){
      this.selectionStatus=!this.selectionStatus;
      this.changeText();
      this.isSelected.emit(this.selectionStatus)
    }
    if (num===2){
      this.selectionStatus=!this.selectionStatus;
      this.changeText();
      this.isSelected.emit(this.selectionStatus)
    }
  }

  changeText(){
    if (this.selectionStatus){
      this.text=this.activeText;
    }else{
      this.text=this.passiveText;
    }
  }

  getClass(){
    if (this.selectionType!=='check'){
      return ' container '+this.selectionType;
    }else{
      return this.selectionType;
    }
  }

  getOutWindowStyle(){
    return {'background-color':this.selectionStatus?'var(--'+this.theme.active.bgColor+')':'var(--'+this.theme.inactive.bgColor+')',
      'border':this.selectionStatus?'solid 1px var(--'+this.theme.active.borderColor+')':'solid 1px var(--'+this.theme.inactive.borderColor+')'};
  }

  getFontStyle(){
    return {color:this.selectionStatus?'var(--'+this.theme.active.fontColor+')':'var(--'+this.theme.inactive.fontColor+')'};
  }
}

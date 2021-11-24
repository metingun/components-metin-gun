import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'account-selection',
  templateUrl: './account-selection.component.html',
  styleUrls: ['./account-selection.component.css']
})
export class AccountSelectionComponent implements OnInit {
  @Input() clickOutCloseBox:boolean=true;

  @Input() accountImage:string='';
  @Input() accountName:string='';
  @Input() roleName:string='';
  @Input() theme:any={bgColor:'white',imageBgColor:'dark-orange',imageFontColor:'white',
    roleFontColor:'dark-orange',accountNameBgColor:'dark-purple'};


  @Input() selectedOption:number=-1;
  @Input() optionsTheme={bgColor:'white', selectedOptionsBgColor:'light-bluegrey', rectangleColor:'dark-purple'}
  @Input() boxTheme={bgColor:'white', fontColor:'purple'}

  @Input() options:any[]=[];

  @Output() selectOptionEvent:EventEmitter<any>=new EventEmitter<any>();

  visible:boolean=false;
  bulkSelection=false;
  iconView=true;

  selectEvent(event:any){
    this.selectedOption=event;
    this.selectOptionEvent.emit(event);
  }

  constructor(private eRef: ElementRef) { }

  ngOnInit(): void {
  }

  getLetter(){
    if (this.accountName!==''){
      return this.accountName.slice(0,1).toUpperCase();
    }else {
      return '';
    }
  }

}

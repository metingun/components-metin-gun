import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'language-selection',
  templateUrl: './language-selection.component.html',
  styleUrls: ['./language-selection.component.css']
})
export class LanguageSelectionComponent implements OnInit {
  @Input() clickOutCloseBox:boolean=true;

  @Input() selectedLanguage:number=-1;
  @Input() optionsTheme={bgColor:'white', selectedOptionsBgColor:'light-bluegrey', rectangleColor:'dark-purple'}
  @Input() boxTheme={bgColor:'white', fontColor:'dark-orange'}

  @Input() languages:any[]=[];

  @Output() selectedEvent:EventEmitter<any>=new EventEmitter<any>();

  visible:boolean=false;
  bulkSelection=false;

  selectEvent(event:any){
    this.selectedLanguage=event;
    this.selectedEvent.emit(event);
  }

  constructor(private eRef: ElementRef) { }

  ngOnInit(): void {
  }

  getSelectedValue(){
    return this.languages.find(i => i.value === this.selectedLanguage).option;
  }

  @HostListener('document:click', ['$event'])
  clickOut(event:any) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.visible=false;
    }
  }

}

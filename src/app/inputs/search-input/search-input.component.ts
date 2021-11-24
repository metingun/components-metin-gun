import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  @Input() theme:any={bgColor:'light-purple',borderColor:'white',searchBgColor:'white'};
  @Input() privateSearchMethod:boolean=false;
  @Input() searchPlaceholder:string='Search';

  @Output() searchEvent:EventEmitter<any>=new EventEmitter<any>();

  searchText:string='';

  search(num:number){
    if (num===1){
      this.searchEvent.emit(this.searchText);
    }else if (num===2  && !this.privateSearchMethod){
      this.searchEvent.emit(this.searchText);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

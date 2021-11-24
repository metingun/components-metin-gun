import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'announce-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges {
  @Input() noteForEmptyList: string = 'DRAG ANNOUNCEMENT'
  @Input() searchPlaceholder: string = 'Search';
  @Input() theme: any = {
    bgColor: 'light-purple',
    boxColor: 'light-bluegrey',
    fontColor: 'x-dark-bluegrey',
    height: '400px'
  };
  @Input() listVisible: boolean = true

  @Input() titleTeamList: string = 'ANNOUNCEMENTS';
  @Input() firstIconName: string = ''; // equalizer
  @Input() secondIconName: string = ''; // double-arrow

  @Output() clickAdd: EventEmitter<any> = new EventEmitter<any>();
  @Output() clickFirstIcon: EventEmitter<any> = new EventEmitter<any>();
  @Output() clickSecondIcon: EventEmitter<any> = new EventEmitter<any>();
  @Output() clickAnnounceButton: EventEmitter<any> = new EventEmitter<any>();
  @Output() searchEvent: EventEmitter<any> = new EventEmitter<any>();

  @Input() listData: any[] = []
  listDataBackup: any[] = []

  @Input() themeSearch: any = {bgColor: 'light-purple', borderColor: 'bluegrey', searchBgColor: 'white'};
  @Input() privateSearchMethod: boolean = false;


  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.filterData()
    }
  }

  filterData() {
    let resArr: any[] = [];
    this.listData.filter(function (item) {
      let i = resArr.findIndex(x => (x.id == item.id));
      if (i <= -1) {
        resArr.push(item);
      }
      return null;
    });
    this.listData = resArr;
  }

  searchTextEvent(event: any) {
    if (this.privateSearchMethod) {
      this.searchEvent.emit(event);
    } else {
      if (event === '') {
        this.listData = this.listDataBackup;
      } else {
        this.listData = this.stringContains(this.listDataBackup, event);
      }
    }
  }

  stringContains(arr: any[], find: string) {
    return arr.filter(({text}) =>
      text !== null && text !== undefined && text.toString().toLowerCase().includes(find.toString().toLowerCase())
    );
  }

  buttonClick9(value: any) {
    this.clickAnnounceButton.emit(value);
  }

  clickAddButton() {
    this.clickAdd.emit();
  }

  clickFirstIconEvent() {
    this.clickFirstIcon.emit();
  }

  clickSecondIconEvent() {
    this.clickSecondIcon.emit();
  }

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.listDataBackup=this.listData;
    }

  ngOnInit(): void {
/*
    this.listDataBackup=this.listData;
*/
  }


  getContent(data:any){
    return {id:data.id,text:data.text,playUrl:data.playUrl}
  }
}

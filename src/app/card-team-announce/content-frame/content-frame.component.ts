import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'announce-content-frame',
  templateUrl: './content-frame.component.html',
  styleUrls: ['./content-frame.component.css']
})
export class ContentFrameComponent implements OnInit {
  @Input() announcementPackage: any = {}

  @Input() noteForEmptyList: string = ''
  @Input() theme: any = {bgColor: '', fontColor: '', noteColor: ''};

  @Output() getDataEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() buttonEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  drop(event: CdkDragDrop<any[]>) {
    if (this.announcementPackage.contentList.length < this.announcementPackage.capacity) {
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
        this.getDataEvent.emit(this.announcementPackage)

      }
    }
  }

  filterData() {
    let resArr: any[] = [];
    this.announcementPackage.contentList.filter(function (item: { id: any; }) {
      let i = resArr.findIndex(x => (x.id == item.id));
      if (i <= -1) {
        resArr.push(item);
      }
      return null;
    });
    this.announcementPackage.contentList = resArr;
  }

  buttonClick8(value: any) {
    this.buttonEvent.emit(value);
  }

  ngOnInit(): void {
  }

  getContent(data: any) {
    return {id: data.id, text: data.text, playUrl: data.playUrl}
  }

}

import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.css'],
  animations: [
    trigger('toggle', [
      state('true', style({left: '0px'})),
      state('void', style({left: '-50px'})),
      transition(':enter', animate('300ms linear')),
      transition(':leave', animate('300ms linear'))
    ])
  ]
})
export class NavbarLeftComponent implements OnInit, OnChanges {
  @Input() hiddenNodes: any[] = []
  @Input() rectangleVisible: boolean = true;
  @Input() titleDark: string = '';
  @Input() titleLight: string = '';
  @Input() selectedOption: any = {firstNode: -1, secondNode: -1};
  @Input() menuOptions: any[] = [];
  @Input() menuClosed: boolean = false
  @Input() menuOpenClosedEvent: boolean = false;

  @Output() clickOptionByIndex: EventEmitter<any> = new EventEmitter<any>();
  @Output() clickTitle: EventEmitter<any> = new EventEmitter<any>();
  @Output() iconClickEvent: EventEmitter<number> = new EventEmitter<number>();

  public openOptions: any[] = [];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.selectedOption.firstNode >= 0 || this.selectedOption.secondNode >= 0) {
      this.menuClosed = false;
      this.openOptions.push(this.selectedOption.firstNode);
    }

    if (this.hiddenNodes.length > 0) {
      let sorted = this.hiddenNodes.sort(function (a, b) {
        if (a.firstNode === b.firstNode) {
          return b.secondNode - a.secondNode;
        }
        return a.firstNode < b.firstNode ? 1 : -1
      });

      for (const nodes of sorted) {

        if (nodes.firstNode > -1 && nodes.secondNode > -1) { //child
          this.menuOptions[nodes.firstNode].childList.splice(nodes.secondNode, 1);
        }

        if (nodes.firstNode > -1 && nodes.secondNode === -1) { //parent
          this.menuOptions.splice(nodes.firstNode,1);
        }
      }

    }
  }

  ngOnInit(): void {

  }

  clickOption(index: number, index2: number) {
    if (index2 < 0) {
      if (this.openOptions.indexOf(index) !== -1) {
        this.openOptions.splice(this.openOptions.indexOf(index), 1);
      } else {
        this.openOptions.push(index);
      }
    }
    if (this.selectedOption.firstNode !== index) {
      this.selectedOption.firstNode = index;
    } else {
      this.selectedOption.firstNode = -1;
    }
    this.clickEvent(index, index2);

  }

  clickEvent(index: number, index2: number) {
    let data = {
      firstNode: index,
      secondNode: index2
    }
    this.clickOptionByIndex.emit(data);
  }

  clickTitleEvent() {
    this.clickTitle.emit("You clicked CS Title");
  }

  getStyleForParentFrame(index: number, option: any) {
    return {
      'height':
        this.openOptions.indexOf(index) !== -1 ?
          (option.childList.length === 0 ? '6%' : option.childList.length * 10 + '%') : '6%'
    }
  }

  getImages() {
    let images = [];
    for (const element of this.menuOptions) {
      if (element.imagePath !== undefined && element.imagePath !== null) {
        images.push(element.imagePath);
      } else {
        images.push('');
      }
    }
    return images;

  }

}

import { Directive, HostListener, Input, Output, EventEmitter, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDragDrop]'
})
export class DragDropDirective {

  enabled: boolean | undefined;
  _dragInProgress: boolean | undefined;

  @Input() set appDragDrop(value: any) {
    this.enabled = value === '' ? true : !!value;
  }


  @HostBinding('class.dragging') get dragInProgress() {
    return this._dragInProgress;
  }

  @Output() dropped: EventEmitter<any>;

  constructor() {
    this.dropped = new EventEmitter();
  }

  @HostListener('dragenter', ['$event'])
  @HostListener('dragover', ['$event'])
  handleDragOver(event: DragEvent): void {
    if (!this.enabled) {
      return;
    }
    // @ts-ignore
    event.dataTransfer.dropEffect = 'move';
    this.stopAndPreventDefault(event);
    this._dragInProgress = true;
  }

  @HostListener('dragleave', ['$event'])
  @HostListener('dragend', ['$event'])
  handleDragEnd(event: DragEvent): void {
    if (!this.enabled) {
      return;
    }
    this.stopAndPreventDefault(event);
    // @ts-ignore
    event.dataTransfer.effectAllowed = 'copy';
    this._dragInProgress = false;
  }

  @HostListener('drop', ['$event'])
  handleDrop(event: UIEvent): void {
    this.stopAndPreventDefault(event);
    this._dragInProgress = false;
    this.dropped.emit(event);
  }

  stopAndPreventDefault(e: UIEvent): void {
    e.stopPropagation();
    e.preventDefault();
  }

}

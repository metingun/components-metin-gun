import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ButtonsComponent} from "../buttons/buttons/buttons.component";

@Component({
  selector: 'upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  @Input() boldText:string=''
  @Input() text:string=''
  @Input() image:string='assets/img/icon-feather-upload-cloud@2x.svg'
  @Input() theme:any= {bgColor:'light-bluegrey',fontColor:'x-dark-bluegrey'}
  @Input() themeButton:any={bgColor:'dark-orange',borderColor:'dark-orange',fontColor:'white',buttonHeight:'m'} // xl xs s l m

  @Input() buttonOptions:any={buttonType:'file',buttonLetter:'CHOOSE FILE'} // file - button
  @Input() iconOptions:any={iconImagePath:'',iconType:'center'} //left right center
  @Input() fileTypes: any[] = [];
  @Input() multiple: boolean=false;
  @Input() dragDropEnabled = true;

  @ViewChild("button",{static:false}) button: ButtonsComponent | undefined;

  @Output() filesChanged: EventEmitter<FileList>=new EventEmitter<FileList>();

  dragOver:boolean=false;

  constructor() {}

  ngOnInit(): void {}



  addFiles(files: FileList): void {
    // @ts-ignore
    this.filesChanged.emit(files);
  }

  handleFileDrop(event: DragEvent) {
    this.button?.handleFileDrop(event);
    this.dragOver=false
  }

  resetFiles() {
    this.button?.resetFiles();
  }


}

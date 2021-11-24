import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'button-demo',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  @Input() isDisabled:boolean=false;

  @Input() theme:any={bgColor:'dark-orange',borderColor:'dark-orange',fontColor:'white',buttonHeight:'s'} // xl xs s l m
  @Input() buttonOptions:any={buttonType:'button',buttonLetter:''} // file - button
  @Input() iconOptions:any={iconImagePath:'',iconType:'center'} //left right center

  @Output() buttonEvent:EventEmitter<any>=new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {}

  buttonAction() {
    this.buttonEvent.emit("You clicked button")
  }

  getSizeStyle(){
    let bg='var(--'+this.theme.bgColor+')'
    let color= 'var(--'+this.theme.fontColor+')'
    let border='solid 1px var(--'+this.theme.borderColor+')';
    if (this.buttonOptions.buttonLetter===''){
      return {'height':'56px','background-color': bg,'color':color, 'border':border}
    }
    else if (this.theme.buttonHeight==='xs'){
      return {'font-size':'','height':'24px','background-color': bg,'color':color, 'border':border}
    }
    else if (this.theme.buttonHeight==='s'){
      return {'font-size':'','height':'32px','background-color': bg,'color':color, 'border':border}
}
    else if (this.theme.buttonHeight==='m'){
      return {'font-size':'','height':'36px','background-color': bg,'color':color, 'border':border}
}
    else if (this.theme.buttonHeight==='l'){
      return {'font-size':'','height':'52px','background-color':bg,'color':color, 'border':border}
}
    else if (this.theme.buttonHeight==='xl'){
      return {'font-size':'','height':'56px','background-color':bg,'color':color, 'border':border}
    }
    else{ return {}}
  }


  uploadedFileList: FileList|undefined ;

  @ViewChild('fileInput') inputRef: ElementRef | undefined;
  @Input() multiple: boolean=false;

  @Output() filesChanged: EventEmitter<FileList>=new EventEmitter<FileList>();


  @Input() fileTypes:any[] = [];

  // @ts-ignore
  addFiles(files:FileList|null): FileList {
    if (files!==null&&files!==undefined){
      if (this.fileTypes.length!==0){
        let result=this.validateType(files);
        if (!result){
          this.resetFiles();
        }else{
          this.uploadedFileList=files;
        }
      }else{
        this.uploadedFileList=files;
      }
      this.filesChanged.emit(this.uploadedFileList)
    }
  }

  validateType(files:FileList) {
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
        let sFileName = file.name;
        if (sFileName.length > 0) {
          let blnValid = false;
          for (let j = 0; j < this.fileTypes.length; j++) {
            let sCurExtension = this.fileTypes[j];
            // @ts-ignore
            if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
              blnValid = true;
              break;
            }
          }

          if (!blnValid) {
            return false;
          }
        }

    }

    return true;
  }

  getFileInfo(){
    if (this.uploadedFileList!==undefined&&this.uploadedFileList!==null&&this.uploadedFileList?.length!==0){
        // @ts-ignore
        return this.uploadedFileList[0].name
    }
    return '';
  }

  handleFileDrop(event: DragEvent) {
    if (event?.dataTransfer?.files?.length) {
      const files = event.dataTransfer.files;
      // @ts-ignore
      this.inputRef.nativeElement.files = files;
      this.addFiles(files);
    }
  }

  resetFiles(){
    this.uploadedFileList=undefined;
    // @ts-ignore
    this.inputRef.nativeElement.value = "";

  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'mini-buttons',
  templateUrl: './mini-buttons.component.html',
  styleUrls: ['./mini-buttons.component.css']
})
export class MiniButtonsComponent implements OnInit {
  @Input() isDisabled:boolean=false;
  @Input() optionVisible:boolean=false;
  @Input() forClass:string='';
  @Input() buttonOptions:any={bgColor:'light-bluegrey',textColor:'purple',
    iconFirst:'./assets/img/icon-24-add@2x.png',iconSecond:'',buttonText:'ADD NEW CAMPAIGN',
    iconHeight:'l'}; // iconHeight s:24px l:36px  //  ./assets/img/icon-24-add@2x.png

  @Output() buttonEvent:EventEmitter<any>= new EventEmitter<any>()
  constructor() {
  }

  ngOnInit(): void {
  }

  getHidingClassVisible() {
    return this.optionVisible ? this.forClass : '';
  }

  getButtonStyle() {
    let bg = 'var(--' + this.buttonOptions.bgColor + ')'
    let color = 'var(--' + this.buttonOptions.textColor + ')'

    if (this.buttonOptions.iconHeight==='s'){
      if (this.buttonOptions.buttonText===''){
        return {'background-color': bg, 'color':color, 'height':'24px','position':'relative'}
      }else{
        return {'background-color': bg, 'color':color, 'height':'24px','text-align':'end'}
      }
    }
    else if (this.buttonOptions.iconHeight==='l'){
      if (this.buttonOptions.buttonText===''){
        return {'background-color': bg, 'color':color, 'height':'36px','position':'relative'}
      }else {
        return {'background-color': bg, 'color':color, 'height':'36px'}
      }
    }
    else return {}
  }
  buttonClick(){
    if (!this.isDisabled){
      this.buttonEvent.emit();
    }
  }

  getTextStyle(){
    if (this.buttonOptions.iconHeight==='l'){
      return {'margin-left':(this.buttonOptions.iconFirst===''&&this.buttonOptions.iconSecond==='')||
        (this.buttonOptions.iconFirst!==''&&this.buttonOptions.iconSecond!=='')?'3%':
          (this.buttonOptions.iconFirst===''&&this.buttonOptions.iconSecond!=='')?'-10%':'15%'};
    }else if (this.buttonOptions.iconHeight==='s'){
      return {'display':'grid', 'align-content':'space-around'};
    }else {
      return {};
    }

  }

  getImageDivStyle(icon:number){
    if (this.buttonOptions.buttonText===''){
      return {'left':'5%','top':'11.3%','position':'relative'};
    }else{
      if (this.buttonOptions.iconFirst!==''&&this.buttonOptions.iconSecond===''){
        return {'display':this.buttonOptions.iconHeight=='s' ? 'contents':'',
          'left':'18%','top':'56%','transform':'translate(-50%, -50%)','position':'absolute'};
      }else if(this.buttonOptions.iconFirst!==''&&this.buttonOptions.iconSecond!==''){
        if (icon===1){
          return {'display':this.buttonOptions.iconHeight=='s' ? 'contents':'',
            'left':'18%','top':'56%','transform':'translate(-50%, -50%)','position':'absolute'};
        }else{
          return {'display':this.buttonOptions.iconHeight=='s' ? 'contents':'',
            'left':'82%','top':'56%','transform':'translate(-50%, -50%)','position':'absolute'};
        }
      }else if (this.buttonOptions.iconFirst===''&&this.buttonOptions.iconSecond!==''){
        return {'display':this.buttonOptions.iconHeight=='s' ? 'contents':'',
          'left':'82%','top':'56%','transform':'translate(-50%, -50%)','position':'absolute'};
      }
      else {
        return {}
      }
    }
  }

  getImgStyle(){
    return {'width':this.buttonOptions.iconHeight==='s' ? '17px':'',
      'height':this.buttonOptions.iconHeight==='s' ? '16px':''};
  }
}

import {Component, EventEmitter, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges} from '@angular/core';

@Component({
  selector: 'options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit, OnChanges {
  @Input() options: any[] = [];
  @Input() selectedOption: number = -1;
  @Input() selectedOptionsList: number[] = [];
  @Input() theme = {bgColor: 'white', selectedOptionsBgColor: 'light-bluegrey', rectangleColor: 'dark-purple'}
  @Input() visible: boolean = true;
  @Input() uniqueValue: boolean = true;
  @Input() withCombo: boolean = false;
  @Input() hidingClassString: string = '';
  @Input() forClass: string = '';

  @Input() themeButton: any = {bgColor: '', borderColor: '', fontColor: '', buttonHeight: ''} // xl xs s l m
  @Input() buttonOptions1: any = null // file - button
  @Input() iconOptions: any = {iconImagePath: '', iconType: ''} //left right center

  @Input() viewIcons: boolean = false;
  @Input() bulkSelection: boolean = false;
  @Input() selectionType: string = 'radio'; //checkbox - check - radio
  @Input() selectionsTheme: any = {
    active: {bgColor: 'blue', iconBgColor: '', borderColor: 'dark-blue', fontColor: 'dark-blue'},
    inactive: {bgColor: 'bluegrey', iconBgColor: '', borderColor: 'x-dark-bluegrey', fontColor: 'purple'}
  };

  @Output() selectEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() buttonClick: EventEmitter<number> = new EventEmitter<any>();

  constructor(private renderer: Renderer2) {
    this.createId()
    this.renderer.listen('window', 'click', (event => {
      this.visible = event.target.classList.contains(this.hidingClassString);
    }));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.withCombo){
      if (!this.uniqueValue){
        for (let i=0;i<this.options.length;i++){
          this.options[i].value=i;
        }
      }
    }
  }

  ngOnInit(): void {
/*    if (!this.withCombo){
      if (!this.uniqueValue){
        for (let i=0;i<this.options.length;i++){
          this.options[i].value=i;
        }
      }
    }*/
  }

  getHidingClassVisible() {
    return !this.visible ? this.hidingClassString : '';
  }

  createId() {
    if (!this.withCombo){
      if (this.hidingClassString===''){
        this.hidingClassString='item-hiding'+Math.floor(Math.random() * 111111111111);
      }
    }
  }

  getHidingClass(){
    return this.bulkSelection?(this.hidingClassString):(this.getHidingClassVisible());
  }

  getStyleSelected(index:number){
    let normalBgColor='transparent';
    let selectedBgColor='var(--'+this.theme.selectedOptionsBgColor+')';

    if (this.bulkSelection){
      if (this.selectedControl(index)){
        return {'background-color':selectedBgColor, 'border-radius':'2px'};
      }else {
        return {'background-color':normalBgColor,'border-radius':''};
      }
    }else {
      if (this.selectedOption===index){
        return {'background-color':selectedBgColor, 'border-radius':'2px'};
      }else {
        return {'background-color':normalBgColor,'border-radius':''};
      }
    }
  }

  getStyleFont(index:number){
    let opt = this.options.find(i => i.value === index);
    let normalFontColor='var(--'+opt.theme.normalFontColor+')';
    let selectedFontColor='var(--'+opt.theme.selectedFontColor+')';

    if (this.bulkSelection){
      if (this.selectionType!=='check'){
        if (this.selectedControl(index)){
          return {'color':selectedFontColor,'padding':'8px 3% 0% 40px','margin-top':'0','height':'auto'};
        }else {
          return {'color':normalFontColor,'padding':'8px 3% 0% 40px','margin-top':'0','height':'auto'};
        }
      }else{
        if (this.selectedControl(index)){
          return {'color':selectedFontColor,'padding':'9px 3% 0% 55px'};

        }else {
          return {'color':normalFontColor,'padding':'9px 3% 0% 55px'};
        }
      }
    }else {
      if (this.selectedOption===index){
        return this.viewIcons?{'color':selectedFontColor,'left':'45px','top':'8px','margin-top':'0','height':'auto'}:
          {'color':selectedFontColor,'left':'8px','top':'12%','margin-top':'3.5px','height':'18px'};
      }else {
        return this.viewIcons?{'color':normalFontColor,'left':'45px','top':'8px','margin-top':'0','height':'auto'}:
          {'color':normalFontColor,'left':'8px','top':'12%','margin-top':'3.5px','height':'18px'};
      }
    }

  }

  chooseOption(index:number){
    if (this.bulkSelection){
      if (!this.selectedControl(index)){
        this.selectedOptionsList.push(index);
      }else{
        this.selectedOptionsList.splice(this.selectedOptionsList.indexOf(index),1);
      }
      this.selectEvent.emit(this.selectedOptionsList);
    }else{
      if (this.selectedOption===index){
        this.selectedOption=-1;
      }else{
        this.selectedOption=index;
      }
      this.selectEvent.emit(this.selectedOption);
    }
  }

  clickButton(event:any){
    this.buttonClick.emit(event);
  }

  visibleButton(){
    return this.buttonOptions1!==null;
  }

  selectedControl(index:number){
    if (this.bulkSelection){
      return this.selectedOptionsList.indexOf(index) !== -1;

    }else{
      return this.selectedOption === index;
    }

  }
}

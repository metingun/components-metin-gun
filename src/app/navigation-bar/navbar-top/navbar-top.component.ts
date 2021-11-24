import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.css']
})
export class NavbarTopComponent implements OnInit {
  // NAVBAR
  @Input() visibility:any={account:true,language:true,search:true,logo:true}
  @Input() theme:any={bgColor:'light-bluegrey'}
  @Input() logoPath:string='assets/img/defne-1@2x.png'

  @Output() logoClick:EventEmitter<any>=new EventEmitter<any>();

  // EXIT BUTTON

  @Input() themeButton:any={bgColor:'dark-orange',borderColor:'dark-orange',fontColor:'white',buttonHeight:'xs'} // xl xs s l m
  @Input() buttonOptions1:any={buttonType:'button',buttonLetter:''} // file - button
  @Input() iconOptions:any={iconImagePath:'exit',iconType:'center'} //left right center

  @Output() buttonClick:EventEmitter<any>=new EventEmitter<any>();

  // ACCOUNT
  @Input() accountImage:string='';
  @Input() accountName:string='Metin Gün';
  @Input() roleName:string='Admin';
  @Input() themeAccount:any={bgColor:'white',imageBgColor:'dark-orange',imageFontColor:'white',
    roleFontColor:'dark-orange',accountNameBgColor:'dark-purple'};


  @Input() selectedOptionAccount:number=-1;
  @Input() optionsTheme={bgColor:'white', selectedOptionsBgColor:'light-bluegrey', rectangleColor:'dark-purple'}
  @Input() boxTheme={bgColor:'white', fontColor:'purple'}

  @Input() options:any[]=[
    {option:'Settings',theme:{normalFontColor:'purple',selectedFontColor:'light-purple'}},
    {option:'Profile',theme:{normalFontColor:'purple',selectedFontColor:'light-purple'}},
    {option:'Account',theme:{normalFontColor:'error',selectedFontColor:'success'}}
  ];

  @Output() accountSelection:EventEmitter<any>=new EventEmitter<any>();

  // LANGUAGES
  @Input() selectedLanguage:number=2;
  @Input() optionsTheme2={bgColor:'white', selectedOptionsBgColor:'light-bluegrey', rectangleColor:'dark-purple'}
  @Input() boxTheme2={bgColor:'white', fontColor:'dark-orange'}

  @Input() languages:any[]=[
    {option:'Türkçe',theme:{normalFontColor:'purple',selectedFontColor:'light-purple'}},
    {option:'English',theme:{normalFontColor:'purple',selectedFontColor:'light-purple'}},
    {option:'Ukranian',theme:{normalFontColor:'error',selectedFontColor:'success'}}
  ];
  @Output() languageSelection:EventEmitter<any>=new EventEmitter<any>();

  // SEARCH
  @Input() themeSearch:any={bgColor:'light-purple',borderColor:'white',searchBgColor:'white'};
  @Input() privateSearchMethod:boolean=false;
  @Input() searchPlaceholder:string='Search';

  @Output() searchEvent:EventEmitter<any>=new EventEmitter<any>();

  searchTextEvent(event:any){
    this.searchEvent.emit(event);
  }

  iconClick(){
    this.logoClick.emit();
  }

  selectOptionEvent(event:any){
    this.accountSelection.emit(event);
  }

  selectedEventLang(event:any){
    this.languageSelection.emit(event)
  }

  buttonEvent(){
    this.buttonClick.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}

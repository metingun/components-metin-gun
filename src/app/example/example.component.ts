import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {UploadFileComponent} from "../upload-file/upload-file.component";

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  /**
   * TIME PLAN
   */
  allDaysText:string='Days'
  themeTP: any = {bgColor: 'white', borderColor: 'bluegrey', fontColor: 'purple'};
  selectionTypeTP: string = 'checkbox';
  infoTextTP: string = 'Please update operating hours of your business';
  themeCheckTP: any = {
    active: {bgColor: 'blue', iconBgColor: '', borderColor: 'dark-blue', fontColor: 'purple'},
    inactive: {bgColor: 'bluegrey', iconBgColor: '', borderColor: 'x-dark-bluegrey', fontColor: 'purple'}
  };
  separateMinutesTP: number = 60;
  dateFormatTP: any = {request: 'yyyy-MM-dd HH:mm:ss', response: 'yyyy-MM-dd HH:mm:ss'};

  daysTP: any[] = [
    {day: 'Monday', selectedInterval: ["1900-01-01 00:00:00", "1900-01-01 23:59:00"]},
    {day: 'Tuesday', selectedInterval: ["1900-01-01 12:00:00", "1900-01-01 23:59:00"]},
    {day: 'Wednesday', selectedInterval: ["1900-01-01 15:00:00", "1900-01-01 18:00:00"]},
    {day: 'Thursday', selectedInterval: ["1900-01-01 05:00:00", "1900-01-01 08:00:00"]},
    {day: 'Friday', selectedInterval: ["1900-01-01 08:00:00", "1900-01-01 15:00:00"]},
    {day: 'Saturday', selectedInterval: ["1900-01-01 00:00:00", "1900-01-01 04:00:00"]},
    {day: 'Sunday', selectedInterval: ["1900-01-01 00:00:00", "1900-01-01 04:00:00"]}];


  themeButtonTP: any = {bgColor: 'dark-orange', borderColor: 'dark-orange', fontColor: 'white', buttonHeight: 'xs'} // xl xs s l m
  buttonOptionsTP: any = {buttonType: 'button', buttonLetter: 'SAVE'} // file - button
  iconOptionsTP: any = {iconImagePath: '', iconType: 'center'} //left right center

  themeButton2TP: any = {bgColor: 'white', borderColor: 'dark-orange', fontColor: 'dark-orange', buttonHeight: 'xs'} // xl xs s l m
  buttonOptions2TP: any = {buttonType: 'button', buttonLetter: 'RESET'} // file - button
  iconOptions2TP: any = {iconImagePath: '', iconType: 'center'} //left right center

  clickedRightTP(event:any){
    console.log(event)
    //RESET
  }

  clickedLeftTP(event:any){
    //SAVE
    console.log(event)
  }


  /**
   * BUTTONS
   */

  themeButton:any={bgColor:'dark-orange',borderColor:'dark-orange',fontColor:'white',buttonHeight:'m'} // xl xs s l m
  buttonOptions1:any={buttonType:'button',buttonLetter:'LOGIN'} // file - button
  iconOptions:any={iconImagePath:'',iconType:'center'} //left right center

  buttonEvent(event:any){
    console.log(event)
  }

  /**
   * BUTTON FIXED
   * */

  themeBF:any={bgColor:'dark-orange-2',fontColor:'white'};
  buttonOptionsBF:any={iconPath:'assets/img/star-button-icon.svg',text:'CREATE CAMPAIGN'};

  clickButtonEvent(){
    console.log('click')
  }

  /**
   * UPLOAD FILE
   * */
  boldText:string='DRAG &amp; DROP A FILE HERE OR'
  text:string='512x512 maks 512kb, png, jpg, svg supported'
  themeUploadFile:any= {bgColor:'light-bluegrey',fontColor:'x-dark-bluegrey'}
  themeButtonUploadFile:any={bgColor:'dark-orange',borderColor:'dark-orange',fontColor:'white',buttonHeight:'m'} // xl xs s l m
  buttonOptionsUF:any={buttonType:'file',buttonLetter:'CHOOSE FILE'} // file - button
  iconOptionsUF:any={iconImagePath:'',iconType:'center'} //left right center
  fileTypes:any[]=['.png']; // '.jpg', '.jpeg'
  imageUploadFile:string='assets/img/icon-feather-upload-cloud@2x.svg';

  @ViewChild("upload") upload :UploadFileComponent|undefined;

  resetFiles(){
    this.upload?.resetFiles(); // Örnek reset file method kullanımı
  }

  filesChanged(event:any){
    console.log(event)
  }

  /**
   * ACCOUNT SELECTION
   * */
  clickOutCloseBox:boolean=true;
  accountImage:string='';
  accountName:string='Armağan Şahin';
  roleName:string='Admin';
  themeAccount:any={bgColor:'white',imageBgColor:'dark-orange',imageFontColor:'white',
    roleFontColor:'dark-orange',accountNameBgColor:'dark-purple'};

  selectedOptionAccount:number=-1;
  optionsTheme={bgColor:'white', selectedOptionsBgColor:'light-bluegrey', rectangleColor:'dark-purple'}
  boxTheme={bgColor:'white', fontColor:'purple'}

  optionsAccount:any[]=[];

  selectOptionEvent(event:any){
    console.log(event);
  }

  /**
   * LANGUAGE SELECTION
   * */
  clickOutCloseBox1:boolean=true;

  selectedLanguage:number=3;
  optionsLangTheme={bgColor:'white', selectedOptionsBgColor:'light-bluegrey', rectangleColor:'dark-purple'}
  boxLangTheme={bgColor:'white', fontColor:'dark-orange'}

  languages:any[]=[
    {value:1,option:'Türkçe',theme:{normalFontColor:'purple',selectedFontColor:'light-purple'}},
    {value:2,option:'English',theme:{normalFontColor:'purple',selectedFontColor:'light-purple'}},
    {value:3,option:'Ukranian',theme:{normalFontColor:'error',selectedFontColor:'success'}}
  ];

  selectedEvent(event:any){
    console.log(event);
  }

  /**
   * SEARCH INPUT
   * */

  themeSearchInput:any={bgColor:'light-purple',borderColor:'white',searchBgColor:'white'};
  privateSearchMethod:boolean=true;
  searchPlaceholder:string='Search';

  searchTextEvent(event:any){
    console.log(event)
  }

  /**
   * NAVBAR TOP (use LANGUAGE SELECTION, SEARCH, ACCOUNT SELECTION inputs & outputs)
   * */

  visibility:any={account:true,language:true,search:true,logo:true}
  themeNavTop:any={bgColor:'light-bluegrey'}
  logoPath:string='assets/img/defne-1@2x.png';


  themeButtonExit:any={bgColor:'dark-orange',borderColor:'dark-orange',fontColor:'white',buttonHeight:'xs'} // xl xs s l m
  buttonOptionsExit:any={buttonType:'button',buttonLetter:''} // file - button
  iconOptionsExit:any={iconImagePath:'exit',iconType:'center'} //left right center

  iconClick(){
    console.log('click logo')
  }

  buttonEventNavTop(){
    console.log('click exit icon')
  }


  /**
   * NAVBAR LEFT
   * */
  rectangleVisible=true;
  menuOpenClosedEvent=true;
  menuClosed=false;

  selectedOptionNavbar:any={firstNode:-1,secondNode:-1};
  hiddenNodes=[/*
    {firstNode:0,secondNode:-1},
    {firstNode:1,secondNode:2},
    {firstNode:1,secondNode:0},
    {firstNode:1,secondNode:1},
    {firstNode:2,secondNode:0},
    {firstNode:4,secondNode:0}
   */ ]
  navbarLeftOpenOptions:any[]=[
    {name:'Dashboard',routing:null,imagePath:'../../assets/img/group-5@2x.png',
      childList:[
        {name:'Dash1',routing:'as',imagePath:'../../assets/img/group-5@2x.png'}
      ]},

    {name:'Campaign',routing:null,imagePath:'../../assets/img/icon-24-members@2x.png',
      childList:[
        {name:'Cam1',routing:'as',imagePath:''},
        {name:'Cam2',routing:'as',imagePath:'../../assets/img/group-5@2x.png'},
        {name:'Cam3',routing:'as',imagePath:''}]},

    {name:'Offer',routing:null,imagePath:'../../assets/img/icon-24-queue@2x.png',
      childList:[{name:'Offer1',routing:'as',imagePath:''}]},

    {name:'Plan',routing:'as',imagePath:'../../assets/img/group-3@2x.png',
      childList:[]},

    {name:'Settings',routing:null,imagePath:'../../assets/img/group-4@2x.png',
      childList:[{name:'Set1',routing:'as',imagePath:'../../assets/img/group-5@2x.png'}]}
  ];

  titleDark:string='campaign';
  titleLight:string='suite';

  clickOptions(event:any){

    let parent=this.navbarLeftOpenOptions[event.firstNode];
    if (event.secondNode!==-1){
      console.log(parent.name+'--'+parent.childList[event.secondNode].name);
    }else{
      console.log(parent.name)
    }
  }

  clickTitle(event:any){
    console.log(event)
  }


  /**
   * BUTTON LARGE
   */


  iconPathLargeButton:string='../../assets/img/plus-icon@2x.png'
  buttonTextLargeButton:string='ADD NEW WINDOW'
  themeLargeButton:any= {fontColor:'purple',bgColor:'light-bluegrey',iconBgColor:'white'}

  addNew2(){
    console.log('Clicked add')
  }

  /**
   * BUTTON MEDIUM
   */

  imageUrlsNewTeam:string='../../assets/img/plus-icon-1@2x.png'
  addNewTeam:string='ADD NEW TEAM'
  themeMediumButton:any={bgColor:'light-bluegrey',iconBgColor:'white',fontColor:'purple'};

  addNew(){
    console.log('Clicked add')
  }


  /**
   * DATEPICKER
   */
  isDisabledDP=false
  dateInfoModel:any={
    months:[
      {shortName:'JAN',fullName:'January'},
      {shortName:'FEB',fullName:'February'},
      {shortName:'MAR',fullName:'March'},
      {shortName:'APR',fullName:'April'},
      {shortName:'MAY',fullName:'May'},
      {shortName:'JUN',fullName:'June'},
      {shortName:'JULY',fullName:'July'},
      {shortName:'AUG',fullName:'August'},
      {shortName:'SEP',fullName:'September'},
      {shortName:'OCT',fullName:'October'},
      {shortName:'NOV',fullName:'November'},
      {shortName:'DEC',fullName:'December'}
    ],
    days:[
      {code:'su',shortName:'S',fullName:'Sunday'},
      {code:'mo',shortName:'M',fullName:'Monday'},
      {code:'tu',shortName:'T',fullName:'Tuesday'},
      {code:'we',shortName:'W',fullName:'Wednesday'},
      {code:'th',shortName:'T',fullName:'Thursday'},
      {code:'fr',shortName:'F',fullName:'Friday'},
      {code:'sa',shortName:'S',fullName:'Saturday'}
    ]
  }
  labelDate:string='Start Date';
  currentDate: Date = new Date();
  withTimePicker: boolean = true; //datetimepicker
  dateFormat: any = {
    view: {format: 'dd-MM-yyyy HH:mm', timezone: '+300'},
    result: {format: 'dd-MM-yyyyTHH:mm', timezone: '+300'}};
  theme111: any = {selectedBgColor:'purple',inputBgColor:'white',inputFontColor:'dark-grey',
    inputLabelColor:'purple',pickerBgColor:'white',selectedFontColor:'white',normalFontColor:'purple',
    shortDayFontColor:'light-purple'};

  hour24: boolean = true;
  currentTime: Date = new Date();
  themeTimepicker: any = {hourFormatColor: 'dark-purple', bgColor: 'light-bluegrey',
    hourBgColor:'white',fontColor:'purple',borderColor:'bluegrey',inputFontColor:'purple',inputLabelColor:'purple',
    inputBgColor:'white'};

  getDate(event:any){
    console.log(event);
  }

  /**
   * TIMEPICKER
   */
  isDisabledTP=false

  labelTime:string='Time';
  timeWithInput:boolean=true;
  timeFormat: any = {view:{format: 'HH:mm', timezone: '+156'}};

  getTime(event:any){
    console.log(event)
  }

  public messageTextAllComponenets:string='';

  /**
   * INPUTS
   */

  features:any={placeholderText:'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    iconPath:'',iconPosition:'left',labelText:'Description',inputType:'text',inputDataType:'email',autoComplete:false};
 themeInputs:any={inputColor:'black',fontColor:'purple',borderColor:'bluegrey',bgColor:'white',heightInput:'200px'};
  textInput=''; //search: iconpath

  isDisabledInput: boolean = false;
  validation: boolean = true;
  validationTheme: any = {
    valid:{fontColor: 'success', borderColor: 'success', bgColor: 'transparent'},
    invalid:{fontColor: 'error', borderColor: 'error', bgColor: 'transparent'}
  };
  validationsOptions: any = {
    isRequired: {value: false, alert: 'Lütfen ismi giriniz.'},
    minCharLength: {value: 2, alert: 'Minimum uzunluğun altındasınız'},
    maxCharLength: {value: 10, alert: 'Maksimum uzunluğun üstündesiniz'},
    minValue: {value: 5, alert: 'Değer minimum değerin altında'},
    maxValue: {value: 50, alert: 'Değer maksimum değerin üstünde.'},
    regex: {value: '', alert: 'Uygun şekilde giriniz.'},
    typeMismatch: {alert: 'Mail giriniz'}//url  email
  }; //[0-9]{3}-[0-9]{2}-[0-9]{3}
  // tel  email  text   password   number  url


  changeText(event:any){
    console.log(event) //  {text:this.text,isValid:isValid,message:this.features.labelText}
  }

  /**
   * OPTIONS
   */

  options:any[]=[
    {value:11,option:'2000',theme:{normalFontColor:'purple',selectedFontColor:'light-purple'}},
    {value:22,option:'2001',theme:{normalFontColor:'purple',selectedFontColor:'light-purple'}},
    {value:33,option:'2002',theme:{normalFontColor:'error',selectedFontColor:'success'}},
    {value:44,option:'2003',theme:{normalFontColor:'purple',selectedFontColor:'light-purple'}},
    {value:55,option:'2004',theme:{normalFontColor:'purple',selectedFontColor:'light-purple'}}
  ];
  selectedOption:number=-1;
  theme5={bgColor:'white', selectedOptionsBgColor:'light-bluegrey', rectangleColor:'dark-purple'}
  visible:boolean=true;
  bulkSelection=true;
  viewIcons:boolean=true;
  uniqueValue:boolean=false;

  selectEvent(event:any){
    console.log(event)
  }

  /**
   * OPTIONS + COMBOBOX
   */

  clickOutCloseBox2:boolean=true;

  placeholder: string='';
  themeInput={bgColor:'white', borderColor:'bluegrey'}
  search:boolean=false;
  selectedOptionsList:number[]=[];
  selectionType1:string='radio'; //checkbox - check - radio
  selectionsTheme:any={active:{bgColor:'blue',iconBgColor:'',borderColor:'dark-blue',fontColor:'dark-blue'},
    inactive:{bgColor:'bluegrey',iconBgColor:'',borderColor:'x-dark-bluegrey',fontColor:'purple'}};
  label: string='Start Date';

  themeButton3:any={bgColor:'dark-orange',borderColor:'dark-orange',fontColor:'white',buttonHeight:'m'} // xl xs s l m
  buttonOptions3:any={buttonType:'button',buttonLetter:'ADD'} // file - button
  iconOptions3:any={iconImagePath:'',iconType:''} //left right center
  iconView:boolean=false;

  buttonClick(event:any){
    console.log(event)
  }

  /**
   * SELECTIONS
   */
  isDisabled:boolean=true;
  selectionType:string='check'; //checkbox - radio - check
  activeText:string='ASDASDASDASDASDASDASDASDASDASD asdasdasd';
  passiveText:string='ASDASDASDASDASDASDASDASDASDASD asdasdasd';
  selectionStatus:boolean=true;
  theme6:any={active:{bgColor:'blue',iconBgColor:'white',borderColor:'dark-blue',fontColor:'dark-blue'},
    inactive:{bgColor:'bluegrey',iconBgColor:'white',borderColor:'x-dark-bluegrey',fontColor:'purple'}};

  isSelected(event:any){
    console.log(event)
  }

  /**
   * ANNOUNCE CARD
  * */

  buttonOptions8:any={bgColor:'dark-purple',textColor:'white',
    iconFirst:'./assets/img/icon-24-play@2x.svg',iconSecond:'',
    buttonText:'',iconHeight:'s'}; // ./assets/img/icon-24-add@2x.png
  theme8:any={bgColor:'white',fontColor:'purple'}
  noteForEmptyList:string='DRAG ANNOUNCEMENT'
  theme9:any={bgColor:'light-bluegrey',fontColor:'dark-blue',noteColor:'x-dark-bluegrey'};


  content:any={id:1,text:'Merhaba, size özel teklifimiz var.Merhaba, size özel teklifimiz var.Merhaba, size özel ' +
      'teklifimiz var.Merhaba, size özel teklifimiz var.Merhaba, size özel teklifimiz var.Merhaba, size ' +
      'özel teklifimiz var.Merhaba, size özel teklifimiz var.',playUrl:''}


  buttonClick8(value: any) {
    console.log(value)
  }


  announcementPackage:any={
    id:1,name:'Play Main',capacity:6,contentList:[
      {id:1,text:'Merhaba, size özel .',playUrl:'',buttonOptions:{bgColor:'dark-purple',textColor:'white',
          iconFirst:'./assets/img/icon-24-play@2x.svg',iconSecond:'',
          buttonText:'',iconHeight:'s'},theme:{bgColor:'white',fontColor:'purple'}},
      {id:2,text:'Merhaba, size özel teklifimiz.',playUrl:'',buttonOptions:{bgColor:'dark-purple',textColor:'white',
          iconFirst:'./assets/img/icon-24-play@2x.svg',iconSecond:'',
          buttonText:'',iconHeight:'s'},theme:{bgColor:'white',fontColor:'purple'}},
      {id:3,text:'Merhaba, size özel teklifimiz var.Merhaba, size özel teklifimiz var.Merhaba, size özel teklifimiz var.'
        ,playUrl:'',buttonOptions:{bgColor:'dark-purple',textColor:'white',
          iconFirst:'./assets/img/icon-24-play@2x.svg',iconSecond:'',
          buttonText:'',iconHeight:'s'},theme:{bgColor:'white',fontColor:'purple'}}
    ]
  }

  getData(event:any){
    console.log(event)
  }

  buttonClick9(value: any) {
    console.log(value)
  }


  titleTeamList1:string='ANNOUNCEMENTS';
  firstIconName1:string='';
  secondIconName1:string='list';
  listVisible:boolean=true;
  noteForEmptyListList:string='DRAG ANNOUNCEMENT'
  searchPlaceholderList:string='Search';
  themeList:any={bgColor:'light-purple',boxColor:'light-bluegrey',fontColor:'x-dark-bluegrey',height:'400px'};
  listData1:any[]=[
    {id:1,text:'Merhaba, size özel .',buttonOptions:{bgColor:'dark-purple',textColor:'white',
        iconFirst:'./assets/img/icon-24-play@2x.svg',iconSecond:'',
        buttonText:'',iconHeight:'s'},theme:{bgColor:'white',fontColor:'purple'}},
    {id:2,text:'Merhaba, size özel teklifimiz.',buttonOptions:{bgColor:'dark-purple',textColor:'white',
        iconFirst:'./assets/img/icon-24-play@2x.svg',iconSecond:'',
        buttonText:'',iconHeight:'s'},theme:{bgColor:'white',fontColor:'purple'}},
    {id:3,text:'Merhaba, size özel teklifimiz var.',buttonOptions:{bgColor:'dark-purple',textColor:'white',
        iconFirst:'./assets/img/icon-24-play@2x.svg',iconSecond:'',
        buttonText:'',iconHeight:'s'},theme:{bgColor:'white',fontColor:'purple'}}
  ]


  buttonClick10(value: any) {
    console.log(value)
  }

  clickAddButton(){
    this.listData1.push(this.listData1[0])
  }

  clickFirstIconEvent(){
    console.log('click announce first icon')
  }

  clickSecondIconEvent(){
    this.listVisible=!this.listVisible
    console.log('click announce first icon')
  }



  constructor() {}

  ngOnInit(): void {
}
}

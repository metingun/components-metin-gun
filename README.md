USING COMPONENTS EXAMPLE - HTML & TS


---------------------------------------------------------------------------
/*** COMBOBOX (WITH OPTIONS AND CHECKS)
---------------------------------------------------------------------------

**** HTML
**<div style="width: 850px;">
  <combobox [options]="options" [visible]="visible" [selectedOption]="selectedOption" [label]="label"
                  (chooseEvent)="selectEvent($event)" [themeOptions]="theme5" [buttonOptions1]="buttonOptions3"
                  (clickButton)="buttonClick($event)" [bulkSelection]="bulkSelection" [selectionType]="selectionType1"
                  [selectionsTheme]="selectionsTheme" [selectedOptionsList]="selectedOptionsList" [uniqueValue]="uniqueValue"
                  [themeButton]="themeButton3" [iconOptions]="iconOptions3"
                  [placeholder]="placeholder" [themeInput]="themeInput"
                  [search]="search"  [clickOutCloseBox]="clickOutCloseBox2" [iconView]="iconView"></combobox>
</div>**


**** TS
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


---------------------------------------------------------------------------
/*** INPUT
---------------------------------------------------------------------------

**** HTML
**<div style="width: 650px;position: relative;margin-top: 25px">
  <input-demo [theme]="themeInputs" [features]="features"
               (inputText)="changeText($event)" [text]="textInput" [isDisabled]="isDisabledInput" [validation]="validation"
              [validationsOptions]="validationsOptions" [validationTheme]="validationTheme" ></input-demo>
</div>**

**** TS
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



---------------------------------------------------------------------------
/*** SEARCH INPUT
---------------------------------------------------------------------------

**** HTML
**<div style="width: 20%;position: relative">
  <search-input [theme]="themeSearchInput" [searchPlaceholder]="searchPlaceholder"
                      [privateSearchMethod]="privateSearchMethod" (searchEvent)="searchTextEvent($event)"></search-input>
</div>**

**** TS
themeSearchInput:any={bgColor:'light-purple',borderColor:'white',searchBgColor:'white'};
privateSearchMethod:boolean=true;
searchPlaceholder:string='Search';

searchTextEvent(event:any){
console.log(event)
}



---------------------------------------------------------------------------
/*** UPLOAD FILE
---------------------------------------------------------------------------

**** HTML
**<div style="width: 24%;position: relative">
  <upload-file #upload [boldText]="boldText" [text]="text"
                     [themeButton]="themeButtonUploadFile" [theme]="themeUploadFile"
                     [iconOptions]="iconOptionsUF" [buttonOptions]="buttonOptionsUF"
                     [multiple]="false" [fileTypes]="fileTypes" [dragDropEnabled]="true"
                     (filesChanged)="filesChanged($event)" [image]="imageUploadFile"  ></upload-file>
</div>**


**** TS
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
this.upload?.resetFiles(); // example reset file method
}

filesChanged(event:any){
console.log(event)
}



---------------------------------------------------------------------------
/*** CHECKBOX & RADIO & CHECK
---------------------------------------------------------------------------

**** HTML
**<checks (isSelected)="isSelected($event)" [activeText]="activeText"
[passiveText]="passiveText" [theme]="theme6"
[selectionType]="selectionType" [selectionStatus]="selectionStatus" ></checks>**

**** TS
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


---------------------------------------------------------------------------
/*** NAVBAR TOP
---------------------------------------------------------------------------

**** HTML
**<div style="width: 100%;position: relative">
  <navbar-top [iconOptions]="iconOptionsExit" [themeButton]="themeButtonExit" [languages]="languages"
                    [selectedLanguage]="selectedLanguage" [boxTheme]="boxTheme"
                    [optionsTheme]="optionsTheme" [buttonOptions1]="buttonOptionsExit"
                    (buttonClick)="buttonEventNavTop()" [options]="options" [accountImage]="accountImage"
                    [accountName]="accountName" [roleName]="roleName" (searchEvent)="searchTextEvent($event)"
                    [privateSearchMethod]="privateSearchMethod" [searchPlaceholder]="searchPlaceholder"
                    [theme]="themeNavTop" (languageSelection)="selectedEvent($event)" (logoClick)="iconClick()"
                    [boxTheme2]="boxLangTheme" [optionsTheme2]="optionsLangTheme"
                    [selectedOptionAccount]="selectedOptionAccount" [themeAccount]="themeAccount"
                    [themeSearch]="themeSearchInput" [visibility]="visibility"
                    (accountSelection)="selectOptionEvent($event)"></navbar-top>
</div>**

**** TS
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




---------------------------------------------------------------------------
/*** DATEPICKER & DATETIMEPICKER
---------------------------------------------------------------------------

**** HTML
**<div style="width: 300px;margin-top: 100px">
  <datepicker [dateInfoModel]="dateInfoModel" [theme]="theme111"
                    [hour24]="hour24" [withTimePicker]="withTimePicker"
                    [label]="labelDate" [currentDate]="currentDate" [dateFormat]="dateFormat"
                    [themeTimepicker]="themeTimepicker" (getDate)="getDate($event)" [isDisabled]="isDisabledDP">
  </datepicker>
</div>**

**** TS
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



---------------------------------------------------------------------------
/*** TIMEPICKER
---------------------------------------------------------------------------

**** HTML
**<div style="width: 10%;left: 100px;top:100px;position:relative;">
  <timepicker [label]="labelTime" [currentTime]="currentTime"
                    [hour24]="hour24" [theme]="themeTimepicker"
                    (getTime)="getTime($event)" [timeWithInput]="timeWithInput"
                    [timeFormat]="timeFormat" [clickOutCloseBox]="true" [timeWithDatepicker]="false"
                    [isDisabled]="isDisabledTP"></timepicker>
</div>**

**** TS
isDisabledTP=false

labelTime:string='Time';
timeWithInput:boolean=true;
timeFormat: any = {view:{format: 'HH:mm', timezone: '+156'}};

getTime(event:any){
console.log(event)
}



---------------------------------------------------------------------------
/*** OPTIONS (WITH COMBOBOX AND CHECKS)
---------------------------------------------------------------------------

**** HTML
**<div style="width: 240px;position:relative;">
  <options [selectedOption]="selectedOption" [theme]="theme5" (selectEvent)="selectEvent($event)"
                 [options]="options" [visible]="visible" [bulkSelection]="bulkSelection" [selectionType]="'checkbox'"
                 [selectionsTheme]="theme6" [viewIcons]="viewIcons"  [uniqueValue]="uniqueValue"
                 [themeButton]="themeButton3" [iconOptions]="iconOptions3"
                 (buttonClick)="buttonClick($event)" [selectedOptionsList]="selectedOptionsList"></options>
</div>**

**** TS
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



---------------------------------------------------------------------------
/*** NAVBAR LEFT
---------------------------------------------------------------------------

**** HTML
**<div style="margin-top: 0">
<navbar-left [menuOptions]="navbarLeftOpenOptions" [selectedOption]="selectedOptionNavbar"
                   [titleDark]="titleDark" [titleLight]="titleLight" [rectangleVisible]="rectangleVisible"
                   [menuClosed]="menuClosed" [menuOpenClosedEvent]="menuOpenClosedEvent"
                   (clickOptionByIndex)="clickOptions($event)" (iconClickEvent)="clickOptions($event)"
                   (clickTitle)="clickTitle($event)" [hiddenNodes]="hiddenNodes" >
</navbar-left>
</div>**

**** TS
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


---------------------------------------------------------------------------
/*** ACCOUNT SELECTION
---------------------------------------------------------------------------

**** HTML
**<div style="width: 15%;height: 45px">
  <account-selection [boxTheme]="boxTheme" [optionsTheme]="optionsTheme" [theme]="themeAccount"
                         [roleName]="roleName" [accountName]="accountName" [accountImage]="accountImage"
                         (selectOptionEvent)="selectOptionEvent($event)" [selectedOption]="selectedOptionAccount"
                         [options]="optionsAccount" [clickOutCloseBox]="clickOutCloseBox"></account-selection>
</div>**


**** TS
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


---------------------------------------------------------------------------
/*** LANGUAGE SELECTION
---------------------------------------------------------------------------

**** HTML
**<div style="width: 15%;height: 45px;position: relative">
  <language-selection [optionsTheme]="optionsLangTheme" [boxTheme]="boxLangTheme"
                            (selectedEvent)="selectedEvent($event)" [selectedLanguage]="selectedLanguage"
                            [languages]="languages" [clickOutCloseBox]="clickOutCloseBox1">
  </language-selection>
</div>**

**** TS
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

---------------------------------------------------------------------------
/*** BUTTONS
---------------------------------------------------------------------------

**** HTML
**<div style="width: 10%">
  <button-demo [theme]="themeButton" (buttonEvent)="buttonEvent($event)"
                [buttonOptions]="buttonOptions1" [iconOptions]="iconOptions"
                [isDisabled]="false"></button-demo>
</div>**


**** TS

themeButton:any={bgColor:'dark-orange',borderColor:'dark-orange',fontColor:'white',buttonHeight:'m'} // xl xs s l m
buttonOptions1:any={buttonType:'button',buttonLetter:'LOGIN'} // file - button
iconOptions:any={iconImagePath:'',iconType:'center'} //left right center

buttonEvent(event:any){
console.log(event)
}



---------------------------------------------------------------------------
/*** BUTTON MEDIUM
---------------------------------------------------------------------------

**** HTML
**<div style="width: 13%;position: relative">
  <button-medium [theme]="themeMediumButton" (clickEvent)="addNew()"
                       [buttonText]="addNewTeam" [iconPath]="imageUrlsNewTeam"></button-medium>
</div>**

**** TS
imageUrlsNewTeam:string='../../assets/img/plus-icon-1@2x.png'
addNewTeam:string='ADD NEW TEAM'
themeMediumButton:any={bgColor:'light-bluegrey',iconBgColor:'white',fontColor:'purple'};

addNew(){
console.log('Clicked add')
}

---------------------------------------------------------------------------
/*** BUTTON LARGE
---------------------------------------------------------------------------

**** HTML
**<div style="height: 193px;position:relative;width: 218px;">
  <button-large (newWindow)="addNew2()" [iconPath]="iconPathLargeButton"
                      [buttonText]="buttonTextLargeButton"></button-large>
</div>**

**** TS
iconPathLargeButton:string='../../assets/img/plus-icon@2x.png'
buttonTextLargeButton:string='ADD NEW WINDOW'
themeLargeButton:any= {fontColor:'purple',bgColor:'light-bluegrey',iconBgColor:'white'}

addNew2(){
console.log('Clicked add')
}

---------------------------------------------------------------------------
/*** FIXED BUTTONS
---------------------------------------------------------------------------

**** HTML
**<button-fixed [theme]="themeBF" [buttonOptions]="buttonOptionsBF" (clickEvent)="clickButtonEvent()"></button-fixed>**

**** TS
themeBF:any={bgColor:'dark-orange-2',fontColor:'white'};
buttonOptionsBF:any={iconPath:'assets/img/star-button-icon.svg',text:'CREATE CAMPAIGN'};

clickButtonEvent(){
console.log('click')
}


---------------------------------------------------------------------------
/*** TIME PLAN
---------------------------------------------------------------------------

**** HTML
**<time-plan [theme]="themeTP" [iconOptions]="iconOptionsTP" [themeButton]="themeButtonTP"
[selectionType]="selectionTypeTP" [buttonOptions]="buttonOptionsTP" [dateFormat]="dateFormatTP"
[infoText]="infoTextTP" (clickedLeftButton)="clickedLeftTP($event)"
(clickedRightButton)="clickedRightTP($event)" [buttonOptions2]="buttonOptions2TP"
[days]="daysTP" [iconOptions2]="iconOptions2TP" [separateMinutes]="separateMinutesTP"
[themeButton2]="themeButton2TP" [theme6]="themeCheckTP" [allDayText]="allDaysText"></time-plan>**

**** TS
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






---------------------------------------------------------------------------
/*** ABOUT DRAG DROP CARDS
---------------------------------------------------------------------------

**** HTML
**<div style="width: 20%">
  <announce-list-content [theme]="theme8" [buttonOptions]="buttonOptions8" [content]="content"
                               (buttonEvent)="buttonClick8($event)"  ></announce-list-content>
</div>**



<!-- ANNOUNCE CONTENT GROUP WITH LIST AND CONTENT GROUPS -->

**** HTML
**<div cdkDropListGroup>
  <div style="width: 20%;position: relative;float: left;">
    <announce-content-frame [announcementPackage]="announcementPackage"
                                  (buttonEvent)="buttonClick9($event)" [theme]="theme9"
                                  [noteForEmptyList]="noteForEmptyList"
                                  (getDataEvent)="getData($event)"></announce-content-frame>
  </div>

  <div style="width: 18%;position: relative;float: left;height: fit-content">
    <announce-list [firstIconName]="firstIconName1" [secondIconName]="secondIconName1"
                         [titleTeamList]="titleTeamList1" [listData]="listData1" (clickAdd)="clickAddButton()"
                         (clickSecondIcon)="clickSecondIconEvent()" (clickFirstIcon)="clickFirstIconEvent()"
                         (clickAnnounceButton)="buttonClick10($event)" [listVisible]="listVisible"
                         [theme]="themeList" [noteForEmptyList]="noteForEmptyListList"
                         [searchPlaceholder]="searchPlaceholderList"></announce-list>
  </div>
</div>**


**** TS
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

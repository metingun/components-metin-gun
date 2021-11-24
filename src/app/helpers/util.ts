export function numSequence(n: number): Array<number> {
  return Array(n);
}

export function editViewDate(formatString:string,dateString:string){
  let str=[];
  let dateArr = dateString.split('');
  for (let i = 0;i<dateArr.length;i++){
    if (/^[0-9]+$/.test(dateArr[i])){
      str.push(dateArr[i]);
    }
  }
  let splitArr = formatString.split('');
  let strIndex=0;
  for (let i = 0;i<splitArr.length;i++){
    if (/^[a-zA-Z]+$/.test(splitArr[i])){
      if (strIndex<str.length){
        splitArr[i]=str[strIndex];
        strIndex+=1;
      }else{
        splitArr[i]='';
      }
    }
  }
  return splitArr.toString().replace(/,/g, '');
}

export function stringToDateArray(formatString:string, dateString:string){
  let yearIndex=formatString.indexOf('y');
  let monthIndex=formatString.indexOf('M');
  let dayIndex=formatString.indexOf('d');
  let year=parseInt(dateString.slice(yearIndex,yearIndex+4));
  let month=parseInt(dateString.slice(monthIndex,monthIndex+2));
  let day=parseInt(dateString.slice(dayIndex,dayIndex+2));
  return [year,month,day];
}

export function stringToTimeArray(formatString:string, timeString:string){
  let hourIndex=formatString.indexOf('H');
  let minuteIndex=formatString.indexOf('m');
  let hour=parseInt(timeString.slice(hourIndex,hourIndex+2));
  let minute=parseInt(timeString.slice(minuteIndex,minuteIndex+2));
  return [hour,minute];
}

export function stringToTimeArrayString(formatString:string, timeString:string){
  let hourIndex=formatString.indexOf('H');
  let minuteIndex=formatString.indexOf('m');
  let hour=timeString.slice(hourIndex,hourIndex+2);
  let minute=timeString.slice(minuteIndex,minuteIndex+2);
  return hour+":"+minute;
}

export function separateDateForMask(formatString:any){
  let splitArr = formatString.split('');
  for (let i = 0;i<splitArr.length;i++){
    if (/^[a-zA-Z]+$/.test(splitArr[i])){
      splitArr[i]=/\d/;
    }
  }
  return splitArr;
}

export function separateDateForMaskPlaceholder(formatString:string){
  let splitArr = formatString.split('');
  for (let i = 0;i<splitArr.length;i++){
    if (/^[a-zA-Z]+$/.test(splitArr[i])){
      splitArr[i]='_';
    }
  }
  return splitArr.toString().replace(/,/g, '');
}

export function putDays(days:any[],info:any){
  let daysArray=[];
  let firstDayFind=false;
  let a=1;
  for (let i=0;i<6;i++){
    for (const day of days) {
      if (day.code!==info.firstDay && !firstDayFind){
        daysArray.push('');
      }else if (firstDayFind){
        if (a<info.totalDay){
          a+=1;
          daysArray.push(a);
        }else{
          daysArray.push('');
        }
      } else if (day.code===info.firstDay && !firstDayFind){
        daysArray.push(a);
        firstDayFind=true;
      }
    }
  }
  return daysArray;
}

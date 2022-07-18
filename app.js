let lastVisit;
let visits;
let timeDifferenceStr=''
let currentdate = new Date(); 
let datetime =   ' '+ currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();


let exp ='; expires=Fri, 31 Dec 9999 23:59:59 GMT'
function init(){
  
  let arr = document.cookie.split(';')
  for(let i = 0 ; i < arr.length ; i++){
    
    if(arr[i].includes("EV=")){
      let target = arr[i].trim()
      captureLastVisit(target)
      //updateC(target) function sent to the end of captureLastVisit()
      break;
    }else{
      
      document.cookie = "EV=0"+datetime+exp
      // displayMsg(0)
    }
  }

}


function updateC(str){
  // let visits = Number(str.split('=')[1])
  
  // visits++
  
  // console.log(str)
  let firstSpace = str.indexOf(' ')
  let targetCookie = str.substring(0,firstSpace)
  visits = targetCookie.split('=')[1]
  visits++
  document.cookie = "EV="+visits+datetime+exp
  // console.log(document.cookie)
  
  displayMsg()
}

function captureLastVisit(target){
  // console.log('***captureLastVisit function*****')
// console.log(target)
let dateStr = target.substring(5,target.length-1)
lastVisit = dateStr.trim()
compareDifference(lastVisit,datetime)
// console.log('lastVisit :'+lastVisit)
// console.log("dateTime :"+datetime)


updateC(target)
}


function displayMsg(){
  // console.log("display msg function **********")
  // console.log(document.cookie)
    document.querySelector('.container').innerText=`Welcome visitor, you have visited this site ${visits} times,\n last visit was ${lastVisit} \n${timeDifferenceStr} `
}


function compareDifference(lastVisit,datetime){
  let visitedToday;
  let hoursAgo;
  let minutesAgo;
  let secondsAgo;
  console.log('*****Compare difference function***')
  console.log('lastVisit: '+lastVisit)
  console.log('datetime :'+datetime)
  let lastVisitDate = lastVisit.split('@')[0].trim()
  let datetimeDate = datetime.split('@')[0].trim()
  let lastVisitHour = lastVisit.split('@')[1].trim()
  let datetimeHour = datetime.split('@')[1].trim()
  let lastVisitHourArr = lastVisitHour.split(':')
  let datetimeHourArr = datetimeHour.split(':')
  let lastVisitDateArr = lastVisitDate.split('/').map(element=>Number(element))
  let datetimeDateArr = lastVisitDate.split('/').map(element=>Number(element))
  console.log(lastVisitDateArr)
  console.log(datetimeDateArr)
  // console.log(lastVisitHourArr)
  // console.log(datetimeHourArr)
  
  

  if(lastVisitDate === datetimeDate){
    visitedToday = true;
    // hoursAgo = parseInt(datetimeHourArr[0]) - parseInt(lastVisitHourArr[0])
    
    // (hoursAgo > 0)?timeDifferenceStr+=`${hoursAgo} hours `: null
    // minutesAgo = Math.max(datetimeHourArr[1],lastVisitHourArr[1]) - Math.min(datetimeHourArr[1],lastVisitHourArr[1])
    // (minutesAgo >0)?timeDifferenceStr+=`${minutesAgo} minutes `:null
    // secondsAgo = Math.max(datetimeHourArr[2],lastVisitHourArr[2]) - Math.min(datetimeHourArr[2],lastVisitHourArr[2])
    // (secondsAgo > 0)?timeDifferenceStr+=`${secondsAgo} seconds`:null
    // timeDifferenceStr+= ' ago'
    // console.log()
    // timeDifferenceStr = ` ago , ${minutesAgo} minutes ago , ${secondsAgo} seconds ago`
    timeDifferenceStr = 'Last visit was today'
  }else{

    if(datetimeDateArr[0] - lastVisitDateArr[0] !== 0){
      let dayDiff = Math.max(datetimeDateArr[0] , lastVisitDateArr[0]) - Math.min(datetimeDateArr[1] , lastVisitDateArr[1])
      timeDifferenceStr+= `${dayDiff} days `
    }

    if(datetimeDateArr[1] - lastVisitDateArr[1] !== 0){
      let monthDiff = Math.max(datetimeDateArr[1] , lastVisitDateArr[1]) - Math.min(datetimeDateArr[1] , lastVisitDateArr[1])
      timeDifferenceStr+= `${monthDiff} months `
    }

      if(datetimeDateArr[2] - lastVisitDateArr[2] > 0){
        timeDifferenceStr+= `${datetimeDateArr[2] - lastVisitDateArr[2]} years `
      }

      timeDifferenceStr+=' ago.'
  }
}

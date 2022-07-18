
let exp ='; expires=Fri, 31 Dec 9999 23:59:59 GMT'
function init(){
  
  let arr = document.cookie.split(';')
  for(let i = 0 ; i < arr.length ; i++){
    
    if(arr[i].includes("EV=")){
      let target = arr[i]
     
      updateC(target)
      break;
    }else{
      
      document.cookie = "EV=0"+exp
      displayMsg(0)
    }
  }

}


function updateC(str){
  let visits = Number(str.split('=')[1])
  
  visits++
  
  document.cookie = "EV="+visits+exp
  console.log(document.cookie)
  displayMsg(visits)
}




function displayMsg(num){
    document.querySelector('.container').innerText=`Welcome visitor, you have visited this site ${num} times`
}




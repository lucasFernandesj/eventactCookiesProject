


function startSession(){
    // let cookieObject = document.cookie
    // .split(';')
    // .map(cookie => cookie.split('='))
    // .reduce((accumulator , [key,value])=>({...accumulator , [key.trim()]:decodeURIComponent(value) }),{});

    // console.log(cookieObject)
    // // console.log(cookieObject.visitsEventact)
    // if(cookieObject.visitsEventact === undefined){
    //     console.log("never been here")
    //     document.cookie = "visitsEventact = 1; expires="+ new Date(9999 , 0 ,1).toUTCString()+ "path='/'"
    // }else{
    //     console.log(cookieObject.visitsEventact)
    //     // visitCount = Number(cookieObject.visitsEventact)++
    //     // console.log(visitCount)
    //     // document.cookie = `visitsEventact = ${visitCount};`+'expires='+ new Date(9999 , 0 ,1).toUTCString()+ "path='/'"
    //     // console.log(cookieObject.visitsEventact)
    //     // displayVisits(visitCount)
    // }
    
   
    
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
      user = prompt("Please enter your name:", "");
      if (user != "" && user != null) {
        setCookie("username", user, 365);
      }
    }
  }




function displayVisits(num){
    document.querySelector('.container').innerText=`Welcome visitor, you have visited this site ${num} times`
}


// function startSession(){

// }


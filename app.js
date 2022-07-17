


function startSession(){
    let cookieObject = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator , [key,value])=>({...accumulator , [key.trim()]:decodeURIComponent(value) }),{});

    console.log(cookieObject)
    // console.log(cookieObject.visitsEventact)
    if(cookieObject.visitsEventact === undefined){
        console.log("never been here")
        document.cookie = "visitsEventact = 1; expires="+ new Date(9999 , 0 ,1).toUTCString()
    }else{
        visitCount = cookieObject.visitsEventact++
        console.log(visitCount)
        document.cookie = `visitsEventact = ${visitCount}`+ new Date(9999 , 0 ,1).toUTCString()
        console.log(cookieObject.visitsEventact)
        displayVisits(visitCount)
    }
    
    
}




function displayVisits(num){
    document.querySelector('.container').innerText=`Welcome visitor, you have visited this site ${num} times`
}


// function startSession(){

// }


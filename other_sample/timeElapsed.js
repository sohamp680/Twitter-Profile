// Calculating the time elapsed from 
// 1970-01-01 to up to now
  
// set the time
let timestemp='12/13/2021 11:39:20';
let past = new Date(timestemp);
console.log(past);
  
// assigning present time to now variable
let now = new Date();
  
let elapsed = (now - past);

let secondsElapsed=elapsed/(1000);
let minutesElapsed=elapsed/(1000*60);
let hoursElapsed=elapsed/(1000*60*60);
let daysElapsed=elapsed/(1000*60*60*24);


function changeDateFormat(tweetDate){
    var b = tweetDate.split(/[: /]/g);
    console.log(b);
    var date = b[1];
    var month =b[0]; 
    var year =b[2];
    var monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    function pad(n) {
    return n<10 ? '0'+n : n;
    }
    var dateWithFullMonthName = monthNames[month-1] + " " + pad(date) + ", " + year;
    return dateWithFullMonthName;
}  
// by dividing by 1000 we will get 
// the time in seconds daysElapsed<1 && hoursElapsed<24 && minutesElapsed<60 
console.log(secondsElapsed);
console.log(minutesElapsed);
console.log(hoursElapsed);
console.log(daysElapsed);
if(secondsElapsed<1){
    let timeElapsed='now';
    console.log(timeElapsed);
}
else if( secondsElapsed<60){
    timeElapsed=secondsElapsed;
    console.log(timeElapsed+' s');

}
else if( minutesElapsed<60){
    timeElapsed=Math.round(minutesElapsed);
    console.log(timeElapsed+' min');
}
else if( hoursElapsed<24){
    timeElapsed=Math.round(hoursElapsed);
    console.log(timeElapsed+' h');
}

else if( daysElapsed<365){
    timeElapsed=changeDateFormat(timestemp);
    console.log(timeElapsed.slice(0,-6));
}
else if( daysElapsed>365){
    timeElapsed=changeDateFormat(timestemp);
    console.log(timeElapsed);
}

console.log(changeDateFormat(timestemp));


function timeElapsedFunction(tweetTimeStamp){
    let past = new Date(tweetTimeStamp);
    let now = new Date();
    let elapsed = (now - past);

    let secondsElapsed=elapsed/(1000);
    let minutesElapsed=elapsed/(1000*60);
    let hoursElapsed=elapsed/(1000*60*60);
    let daysElapsed=elapsed/(1000*60*60*24);
    if(secondsElapsed<1){
        let timeElapsed='now';
        return timeElapsed;
    }
    else if( secondsElapsed<60){
        timeElapsed=secondsElapsed;
        return timeElapsed;
    }
    else if( minutesElapsed<60){
        timeElapsed=Math.round(minutesElapsed);
        return timeElapsed;
    }
    else if( hoursElapsed<24){
        timeElapsed=Math.round(hoursElapsed);
        return timeElapsed;
    }

    else if( daysElapsed<365){
        timeElapsed=changeDateFormat(timestemp);
        return timeElapsed.slice(0,-6);
    }
    else if( daysElapsed>365){
        timeElapsed=changeDateFormat(timestemp);
        return timeElapsed;
    }
}

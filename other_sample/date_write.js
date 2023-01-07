
 timestamp= '2/10/2021 00:01:20';
/*        
function twitterStringToDate(s) {
    var b = s.split(/[: ]/g);
    var m = {jan:0, feb:1, mar:2, apr:3, may:4, jun:5, jul:6,
             aug:7, sep:8, oct:9, nov:10, dec:11};
  
    return new Date(m[b[1].toLowerCase()], b[2], b[3], b[4], b[5]);
  }
  */
  
  //console.log(twitterStringToDate(timestamp));
  var b = timestamp.split(/[: /]/g);
  //var myDate= new date(b[0]);
  console.log(b[1]);
  
  var m=  {jan:0, feb:1, mar:2, apr:3, may:4, jun:5, jul:6,
        aug:7, sep:8, oct:9, nov:10, dec:11};
//  const currentMonth = (new Date()).getMonth();
  //console.log(currentMonth);

var date = b[0];
var month =b[1]; 
var year =b[2];
var monthNames = [
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];
function pad(n) {
  return n<10 ? '0'+n : n;
}
var dateWithFullMonthName = monthNames[month-1] + " " + pad(date) + ", " + year;
console.log(dateWithFullMonthName)
var date = new Date();
var DaysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var hours = date.getHours();

var ampm = hours >= 12 ? 'pm': 'am';
hours = hours % 12;
document.getElementById("today").innerHTML = "Today is: " + DaysOfWeek[date.getDay()];
document.getElementById("time").innerHTML = "Current Time:" +   hours + ":" + date.getMinutes + ":" + date.getSeconds + " " + ampm;


function Sum() {  
    var val1 = parseInt(document.getElementById("val1").value);
    var val2 = parseInt(document.getElementById("val2").value);
    sum = val1 + val2;
    document.getElementById("total").innerHTML = "Answer:" + sum;
}

function compare(){
    var first = parseInt(document.getElementById("firstVal").value);
    var second = parseInt(document.getElementById("secVal").value);

    if(first > second){
        document.getElementById("num").innerHTML = "1st Value is greater than 2nd Value";
    }
    else if(second > first){
        document.getElementById("num").innerHTML = "2nd value is greater than 1st Value";
    }
    else{
        document.getElementById("num").innerHTML = "Both Values are equal";
    }
}
var countDownDate = new Date("December 31, 2018 11:59:59").getTime();


var now = new Date().getTime();
  
// Find the distance between now an the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display the result in the element with id="demo"
document.getElementById("RemDays").innerHTML = days + "days " + hours + "hrs. "
+ minutes + "minutes " + seconds + " seconds before New Year's Eve";


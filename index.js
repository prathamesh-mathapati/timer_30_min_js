var h3 = document.getElementsByTagName("h3")

var sec = 1800,
    countDiv = document.getElementById("timer"),
    secpass,countDiv1 = document.getElementById("timer1");sec1 = 1800

function upDone() {
    setInterval(function () {
        'use strict';
        var min = Math.floor(sec / 60),
        pmSec  = sec % 60;
    if (pmSec < 10) {
        pmSec = '0' + pmSec;
    }
    if (min < 10) {
        min = '0' + min;
    }
    countDiv.innerHTML = min + ":" + pmSec;
    if (sec > 0) {
        sec = sec - 1;
        
    } else {
    }
    }, 1000)
}


function downDone() {
    setInterval(function () {
        'use strict';
        var min1 = Math.floor(sec1 / 60),
        pmSec1  = sec1 % 60;
    if (pmSec1 < 10) {
        pmSec1 = '0' + pmSec1;
    }
    if (min1 < 10) {
        min1 = '0' + min1;
    }
    countDiv1.innerHTML = min1 + ":" + pmSec1;
    if (sec1 > 0) {
        sec1 = sec1 + 1;
        
    }
    }, 1000)

    
}


"use strict";
var speed;
var score;
var timer;
var bug=document.getElementById("bug");

function setUpPage() {
    score = 0;
    speed = 1;
    var reSpd = document.getElementsByTagName("input")[0];
    var reScr = document.getElementsByTagName("input")[1];

    if (reSpd.addEventListener) {
        reSpd.addEventListener("click", resetSpeed, false);
    } else if (reSpd.attachEvent) {
        reSpd.attachEvent("onclick", resetSpeed);
    }

    if (reScr.addEventListener) {
        reScr.addEventListener("click", resetScore, false);
    } else if (reScr.attachEvent) {
        reScr.attachEvent("onclick", resetScore);
    }

    if (bug.addEventListener) {
        bug.addEventListener("click", bugClick, false);
    } else if (bug.attachEvent) {
        bug.attachEvent("onclick", bugClick);
    }
    var timer = setInterval(moveBug, 5000);
}


function bugClick() {
    score++;
    speed++;
    document.getElementById("score").innerHTML = score;
    document.getElementById("speed").innerHTML = speed;
    clearInterval(timer);
    var time = 5000 / speed;
    timer=setInterval(moveBug, time);
    moveBug();
}


function moveBug() {
    bug.style.left = Math.floor(Math.random() * 900) + "px";
    bug.style.top = Math.floor(Math.random() * 570 + 100) + "px";
}

function resetScore() {
    score = 0;
    document.getElementById("score").innerHTML = score;
}

function resetSpeed() {
    speed = 1;
    clearInterval(timer);
    var time = 5000 / speed;
    document.getElementById("speed").innerHTML = speed;
}

if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
}
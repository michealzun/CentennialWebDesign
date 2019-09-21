/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo zoom
 *    Variables and functions
 *    Author: 
 *    Date:   

 *    Filename: zoom.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrderArray = window.opener.photoOrder;
var figFilename = "images/IMG_0" + photoOrderArray[2] + ".jpg";

/* populate img element and create event listener */
function pageSetup() {
   document.getElementsByTagName("img")[0].src = figFilename; // assign filename to img element
   createEventListener();
}

/* close window */
function closeWin() {
   window.close();
}

/* create event listener for close button */
function createEventListener() {
   var closeWindowDiv = document.getElementsByTagName("p")[0];
   if (closeWindowDiv.addEventListener) {
     closeWindowDiv.addEventListener("click", closeWin, false); 
   } else if (closeWindowDiv.attachEvent)  {
     closeWindowDiv.attachEvent("onclick", closeWin);
   }
   
   var addToFavorite = document.getElementsByTagName("p")[1];
   if (addToFavorite.addEventListener) {
     addToFavorite.addEventListener("click", addToFavoriteFunction, false); 
   } else if (addToFavorite.attachEvent)  {
     addToFavorite.attachEvent("onclick", addToFavoriteFunction);
   }

}

function addToFavoriteFunction (){
disableFav();
window.opener.addFavorite();
}

function disableFav(){
var addToFavorite = document.getElementsByTagName("p")[1];
   if (addToFavorite.removeEventListener) {
     addToFavorite.removeEventListener("click", addToFavoriteFunction, false); 
   } else if (addToFavorite.detachEvent)  {
     addToFavorite.detachEvent("onclick", addToFavoriteFunction);
   }
}
/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;
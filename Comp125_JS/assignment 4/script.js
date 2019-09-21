var valPostal = false;
var valProvince = false;
var valAge = false;
var valPassword = false;
var valPasswordRe = false;
var valEmail = false;

var Postal = document.getElementsByTagName("input")[4];
var Province = document.getElementsByTagName("input")[5];
var Age = document.getElementsByTagName("input")[6];
var Password = document.getElementsByTagName("input")[7];
var PasswordRe = document.getElementsByTagName("input")[8];
var Email = document.getElementsByTagName("input")[9];
var Submit = document.getElementsByTagName("input")[11];

var PostalCk = /^[a-zA-Z][0-9][a-zA-Z] ?[0-9][a-zA-Z][0-9]$/;
var ProvinceCk = /^(QC|ON|MN|SK|AB|BC)$/;
var AgeCk = /^(1[8|9]|[2-9][0-9]|1[0-9]{2})$/;
var EmailCk = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
var PasswordCk = /^(?=.*[0-9])(?=.*[A-Z]).{6,}$/;

/*
Passwords must have at least 6 characters and must contain at least one digit and one upper-case character.
*/
function validatePostal() {
    var error = document.getElementById("errorPostal");
    try {
        if (PostalCk.test(Postal.value) != true) {
            throw "Please enter a valid postal code";
        }
        Postal.style.background = "rgb(255,255,255)";
        error.style.display = "none";
        error.innerHTML = "";
        valPostal = true;
    }
    catch (msg) {
        error.style.display = "block";
        error.innerHTML = msg;
        Postal.style.background = "rgb(255,233,233)";
        valPostal = false;
    }
}
function validateProvince() {
    var error = document.getElementById("errorProvince");
    try {
        if (ProvinceCk.test(Province.value) != true) {
            throw "Please enter one of the following : QC,ON,MN,SJ,AB,BC";
        }
        Province.style.background = "rgb(255,255,255)";
        error.style.display = "none";
        error.innerHTML = "";
        valProvince = true;
    }
    catch (msg) {
        error.style.display = "block";
        error.innerHTML = msg;
        Province.style.background = "rgb(255,233,233)";
        valProvince = false;
    }
}
function validateAge() {
    var error = document.getElementById("errorAge");
    try {
        if (AgeCk.test(Age.value) != true) {
            throw "18+ only";
        }
        Age.style.background = "rgb(255,255,255)";
        error.style.display = "none";
        error.innerHTML = "";
        valAge = true;
    }
    catch (msg) {
        error.style.display = "block";
        error.innerHTML = msg;
        Age.style.background = "rgb(255,233,233)";
        valAge = false;
    }
}
function validatePassword() {
    var error = document.getElementById("errorPassword");
    try {
        if (PasswordCk.test(Password.value) != true) {
            throw "Passwords must have at least 6 characters and must contain at least one digit and one upper-case character";
        }
        Password.style.background = "rgb(255,255,255)";
        error.style.display = "none";
        error.innerHTML = "";
        valPassword = true;
    }
    catch (msg) {
        error.style.display = "block";
        error.innerHTML = msg;
        Password.style.background = "rgb(255,233,233)";
        valPassword = false;
    }
}
function validatePasswordRe() {
    var error = document.getElementById("errorPasswordRe");
    try {
        if (Password.value != PasswordRe.value) {
            throw "Passwords doesnt match";
        }
        PasswordRe.style.background = "rgb(255,255,255)";
        error.style.display = "none";
        error.innerHTML = "";
        valPasswordRe = true;
    }
    catch (msg) {
        error.style.display = "block";
        error.innerHTML = msg;
        PasswordRe.style.background = "rgb(255,233,233)";
        valPasswordRe = false;
    }
}
function validateEmail() {
    var error = document.getElementById("errorEmail");
    try {
        if (EmailCk.test(Email.value) != true) {
            throw "Enter a valid email";
        }
        Email.style.background = "rgb(255,255,255)";
        error.style.display = "none";
        error.innerHTML = "";
        valEmail = true;
    }
    catch (msg) {
        error.style.display = "block";
        error.innerHTML = msg;
        Email.style.background = "rgb(255,233,233)";
        valEmail = false;
    }
}

function check() {
    if (valPostal == true && valProvince == true && valAge == true && valPassword == true && valPasswordRe == true && valEmail == true ) {
        alert("Thanks for registering with our website, your customer record was created successfully.");
    } else {
        alert("Please enter valid values");
    }
}

function createEventListeners() {
    if (Postal.addEventListener) {
        Postal.addEventListener("change", validatePostal, false);
        Province.addEventListener("change", validateProvince, false);
        Age.addEventListener("change", validateAge, false);
        Email.addEventListener("change", validateEmail, false);
        Password.addEventListener("change", validatePassword, false);
        PasswordRe.addEventListener("change", validatePasswordRe, false);
        Submit.addEventListener("click", check, false);
    } else if (unInput.attachEvent) {
        Postal.attachEvent("onchange", validatePostal);
        Province.attachEvent("onchange", validateProvince);
        Age.attachEvent("onchange", validateAge);
        Email.attachEvent("onchange", validateEmail);
        Password.attachEvent("onchange", validatePassword);
        PasswordRe.attachEvent("onchange", validatePasswordRe);
        Submit.attachEvent("onclick", check);
    }
}

if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}
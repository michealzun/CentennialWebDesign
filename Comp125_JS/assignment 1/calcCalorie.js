//event triggers
document.getElementById("calculate").addEventListener("click", submit, false);
document.getElementById("metric").addEventListener("click", metricMode, false);
document.getElementById("imperial").addEventListener("click", imperialMode, false);
//change measurement units
function metricMode() {
	document.getElementById("mode").innerHTML="metric";
	document.getElementById("height1unit").innerHTML=" m ";
	document.getElementById("height2unit").innerHTML=" cm ";
	document.getElementById("weight1unit").innerHTML=" kg ";
	document.getElementById("weight2unit").innerHTML=" g ";
}
function imperialMode() {
	document.getElementById("mode").innerHTML="imperial";
	document.getElementById("height1unit").innerHTML=" ft ";
	document.getElementById("height2unit").innerHTML=" ib ";
	document.getElementById("weight1unit").innerHTML=" st ";
	document.getElementById("weight2unit").innerHTML=" ln ";
}

function submit() {
    //getting inputs
    var mode = document.getElementById("mode").innerHTML;
    var bmr;
    var calories;
    var gender;
    var exercise;
    var height;
    var weight;
    var gendercheck = document.getElementById('gen1').checked;
    (gendercheck) ? gender = "male" : gender = "female";
    var exe1check = document.getElementById("exe1").checked;
    if (exe1check) exercise = 1.2;
    var exe2check = document.getElementById("exe2").checked;
    if (exe2check) exercise = 1.375;
    var exe3check = document.getElementById("exe3").checked;
    if (exe3check) exercise = 1.55;
    var exe4check = document.getElementById("exe4").checked;
    if (exe4check) exercise = 1.725;
    var exe5check = document.getElementById("exe5").checked;
    if (exe5check) exercise = 1.9;
    var age = document.getElementById("age").value;
	var h1 = document.getElementById("height1").value;
	var h2 = document.getElementById("height2").value;
    var w1 = document.getElementById("weight1").value;
    var w2 = document.getElementById("weight2").value;
    //calculate bmr
    if (mode == "metric"){
        height = (+h1*100)+ +h2;
        weight = +w1+(+w2/1000);
        if (gender == "male") bmr=66.5 + ( 13.75 * weight) + ( 5.003 * height) - ( 6.755 * age);
        else if (gender == "female") bmr = 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age);
    }
    else if (mode == "imperial"){
        height = (+h1*12)+ +h2;
        weight = (+w1*14)+ +w2;
        if (gender == "male") bmr=66 + ( 6.2 * weight) + ( 12.7 * height) - ( 6.76 * age);
        else if (gender == "female") bmr = 655.1 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
     }   
    //calorie calculation and output
    calories = exercise * bmr;
    var displayBmr = ("BMR: "+ bmr);
    document.getElementById("bmr").innerHTML = displayBmr;
    var displayCalories = ("     calories intake: " +calories);
    document.getElementById("calorie").innerHTML = displayCalories;
    alert(displayBmr + " " + displayCalories);
}

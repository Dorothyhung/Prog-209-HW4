array = [];

//constructor
var Workout = function (exercise, minutes, calperminute, calsBurned) {
    this.exercise = exercise;
    this.minutes = minutes;
    this.calperminute = calperminute;
    this.calsBurned = calsBurned;
}


//add Workout objects to array from document
function add() {
    //find which radio button is checked
    var radioButtonGroup = document.getElementsByName("exercise");
    var checkedRadio;
    for (i = 0; i < radioButtonGroup.length; i++) {
        if (radioButtonGroup[i].checked)
        checkedRadio = radioButtonGroup[i].value;
    }
    //get minutes
    var minutes = parseInt(document.getElementById("minutes").value);
    calsPerMin= getCalsPerMin(checkedRadio);
    var calsBurned = minutes * calsPerMin;
    var checkedExercise = new Workout(checkedRadio, minutes, calsPerMin, calsBurned);
    array.push(checkedExercise); //adds workout to array
    clear();
    console.log(array);
}


//returns cals per minute for checked exercise
function getCalsPerMin(checkedRadio) {
    if (checkedRadio == "situps") {
        calsPerMin = 10;
    }
    else if (checkedRadio == "pushups") {
        calsPerMin = 15;
    }
    else {
        calsPerMin = 18;
    }
    return calsPerMin;
}


//clears minutes textbox
function clear() {
    document.getElementById("minutes").value = "";
}


//adds the exercise and calorie count of highest calories burned
function mostBurned() {
    var highestExercise = "situps";
    var highestCals = array[0].calsBurned;
    for (i = 0; i < array.length; i++) {
        if (array[i].calsBurned > highestCals) {
            highestCals = array[i].calsBurned;
            highestExercise = array[i].exercise;
        }
    }
    document.getElementById("highestCals").value = highestExercise + " " +highestCals;
}
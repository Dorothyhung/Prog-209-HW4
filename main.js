array = [];

//constructor
var Workout = function (exercise, minutes, calperminute) {
    this.exercise = exercise;
    this.minutes = minutes;
    this.calperminute = calperminute;
}

//create object instances - need to factor in radio buttons

function situps() {
    var situps = new Workout("situps", Document.getElementById("minutes"), 10);
    totalCals = situps.calcCalories;
}

function pushups() {
    var pushups = new Workout("pushups", Document.getElementById("minutes"), 15);
    totalCals = pushups.calcCalories;
}

function jumprope() {
    var jumprope = new Workout("jumprope", Document.getElementById("minutes"), 18);
}


//Calculates total calories for a workout
Workout.calcCalories = function() {
    return (this.minutes * this.calperminute);
}
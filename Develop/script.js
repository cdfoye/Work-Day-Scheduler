

// Display today's date
var now = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(now);

var currentHour = moment().format("H");

console.log(currentHour);

for (var i = 9; i < 18; i++) {
    var timeBlock = document.getElementById(i.toString());

    if (i == currentHour) {
        timeBlock.classList.add("present");
    } else if (i < currentHour) {
        timeBlock.classList.add("past");
    } else {
        timeBlock.classList.add("future");
    }
}


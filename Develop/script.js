

// Display today's date
var now = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(now);

var currentHour = moment().format("H");

console.log(currentHour);

for (var i = 9; i < 18; i++) {
    var timeBlock = $(i);

    if (timeBlock === currentHour) {
        timeBlock.addClass("present");
    } else if (timeBlock < currentHour) {
        timeBlock.addClass("past");
    } else {
        timeBlock.addClass("future");
    }
}
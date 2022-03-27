// saves button tag as new variable
var saveButton = $("button");

// Display today's date
var now = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(now);

// Gets the current hour in 24-hour format and saves to new varible
var currentHour = moment().format("H");

// for loop that gets each textarea id and sets to a variable called timeBlock. iteration starts at the first id/hour and ends at the last
// if the id/iteration is equal to the currentHour, then it is the present hour, and the textarea gets the "present" class added to it
// else if the id/iteration is less than the currentHour, then it is in the past, and the textarea gets the "past" class added to it
// ielse, the id/iteration is in the future, and the textarea gets the "future" class added to it
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

// Gets called when a savebutton is clicked
function saveText() {
    // for loop that saves the text inputed in the textarea in localStorage. iteration starts at the first row listed
    for (var i = 9; i < 18; i++) {
        // saves each textarea to localStorage by getting the id's values
        localStorage.setItem('text' + i, document.getElementById(i.toString()).value);
    }
}

// funtion to keep saved text when the page is refreshed
function displayText() {
    // for loop that gets the saved texts for each row. iteration starts at the first row listed
    for (var i = 9; i < 18; i++) {
        // sets the value of the textarea in the id/iteration to be equal to the text that was saved to localStorage so the text remains when the page is refreshed
        document.getElementById(i.toString()).value = localStorage.getItem('text' + i);
    }
}

// Calls the displayText function
displayText();

// for loop that iterates through all of the buttons as an array and adds event listeners to them
// if a save button is clicked, then the saveText function is called
for (var i = 0; i < saveButton.length; i++) {
    saveButton[i].addEventListener("click", saveText)
}



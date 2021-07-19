//Task Variable
let tasks={};
//show current day in header
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

//When user clicks save for a specific timeblock
$(".saveBtn").on("click", function () {
//get text area current value
    console.log(this);
//get the parent attributes
    let text= $(this).closest(".description").val();
    let time=$(this).parent().attr("id");
 //set initial items in local storage
    localStorage.setItem(text,time);   
})

//Time block function-color coded to indicate past,present,future

//Task description to edit inline



/*
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```*/
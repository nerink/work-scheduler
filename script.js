//Task Variable
let tasks={};
//show current day in header
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

//When user clicks save for a specific timeblock
$(".saveBtn").on("click", function () {
//get text area current value
    console.log(this);
//get the parent attributes
    let textDescription= $(this).siblings(".description").val();
    let time=$(this).parent().attr("id");
 //set initial items in local storage
   localStorage.setItem(time,textDescription);   
})

//Time block function-color coded to indicate past,present,future
function timeBlockAudit(){
    //declare hour variable
    let hour = moment().hours();
   //get all elements that has a timeblock class
   let timeBlocks=document.getElementsByClassName("time-block")
   console.log(timeBlocks);
   for (let i=0; i<timeBlocks.length; i++){
      let timeBlockHour= timeBlocks[i].id;
       if (timeBlockHour < hour){
        $("#"+timeBlockHour).addClass ("past");
        console.log ($(this));
       }
       if (timeBlockHour > hour){
        $("#"+timeBlockHour).addClass ("future");
        console.log ($(this));
       }
       if (timeBlockHour === hour){
        $("#"+timeBlockHour).addClass ("present");
        console.log ($(this));
       }
       var hourIndex=i+9;
       //when the page loads, data in local storage is displayed 
        var storedText = localStorage.getItem(hourIndex);
        console.log(storedText);
$(timeBlocks[i]).children(".description").val(storedText);
   }
}

timeBlockAudit();
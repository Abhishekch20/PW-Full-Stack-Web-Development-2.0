function calculateDaysToEvent(eventStartDate) {
    // Get the current date
    var currentDate = new Date();
    
    // Convert the event start date to a Date object
    var startDate = new Date(eventStartDate);
    
    // Calculate the time difference in milliseconds
    var timeDiff = startDate.getTime() - currentDate.getTime();
    
    // Convert time difference from milliseconds to days
    var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    return daysDiff;
}


var eventStartDate = "2024-04-15"; 
var daysToEvent = calculateDaysToEvent(eventStartDate);
console.log("Days until the event: " + daysToEvent); 
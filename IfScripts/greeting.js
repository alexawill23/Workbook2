"use strict"; 

// Get the current hour (0-23)
const currentHour = 5;


// Greeting based on the current hour
if (currentHour < 10) {
  console.log("Good morning!");
} else if (currentHour < 17) {
  console.log("Good day!");
} else { 
    console.log("Good evening!")
}


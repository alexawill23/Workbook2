"use strict"; 
var time = 2300;  
var classification; 

if (time <= 1000){
    classification = "Good morning!";
}
else if (time <= 1000-1700){
    classification = "Good day!";
}
else if (time <= 1700-2100){
    classification = "Good evening!";
}
else {
    classification = "Good night!";
}
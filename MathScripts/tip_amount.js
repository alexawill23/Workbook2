"use strict"; 

//sample inputs 
var bill_total= 180 
var tip=.10 
//calculation 
var total= (bill_total.toFixed(2))* tip.toFixed(2) + bill_total

console.log ("With a %" + tip + "The tip of a $" + bill_total + "food bill is $" + total)

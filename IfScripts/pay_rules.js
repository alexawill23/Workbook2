"use strict"; 
//inputs 
var payRate=17.30; 
var hoursworked=45; 
var overtimeRate=1.5; 
var regular_hoursworked=40; 

//calculations
let grosspay; 
if (hoursworked <= regular_hoursworked) {
//If the total hours worked in less than or equal to the regular hours (40 hours) 


var gross_pay=(payrate*hoursworkerd)} else{ //If the hours worked are greater than regular hours (over 40 hours) 
//If there is overtime
var overtime_hours=(hoursworked-regular_hoursworked);
var gross_payOT=(payRate*regular_hoursworked)+(payRate*overtime_hours*overtimeRate);}

//output
console.log("Gross Overtime Pay: "+ gross_payOT.toFixed(2))

"use strict"; 

var a = 9852; 
var b = 500;  
var c = 69;  

//smallest of three numbers 
let smallest = a; 
if (b < smallest){ 
    smallest=b; 
}
if (c < smallest){
    smallest=c; 
}
console.log("The smallest of three numbers is "+ smallest); 

//largest of three numbers 
let largest = c; 
if (a > largest){
    largest=a; 
}
if (b > largest){
    largest=b; 
}
console.log("The largest of three numbers is " + largest); 

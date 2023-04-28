("use strict"); 

console.log("the index.js has begun executing..."); 

const greeting = document.getElementById("greeting");
const nameField =  document.getElementById("nameField"); 
const greetBtn = document.getElementById("greetBtn"); 

function init (){
    console.log("hello from inside the init function!"); 
    greetBtn.onclick = greetBtnClicked;
}

window.onload = init; 

function greetBtnClicked(){

    console.log("hello from inside of the greetBtnClicked() function!"); 
    let username = nameField.value; 
    alert(username); 
    greeting.innerHTML = `Hello to ${username} from inside the ongreetBtnClicked`
}

console.log("the index.js has finished executing...");
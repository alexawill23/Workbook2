"use strict"; 
const studentName = "Ashley Tisdale"; 
const studentMajor = "MKT"
 
//Majors 
let Major, Advising_Location; 
if (studentMajor == "BIOL"){
    Major="Biology"; 
    Advising_Location = "Science Bldg, Room 310"; 
} else if (studentMajor === "CSCI") {
    Major = "Computer Science";
    Advising_Location = "Sheppard Hall, Room 314";
} else if (studentMajor === "ENG") {
    Major = "English";
    Advising_Location = "Kerr Hall, Room 201";
} else if (studentMajor === "HIST") {
    Major = "History";
    Advising_Location = "Kerr Hall, Room 114";
} else if (studentMajor === "MKT") {
    Major = "Marketing";
    Advising_Location = "Westly Hall, Room 310";
} else {
    Major = "Unknown";
    Advising_Location = "Unknown";
}

console.log("Student Name: " + studentName); 
console.log("Major: " + Major); 
console.log("Advising Location: " + Advising_Location); 
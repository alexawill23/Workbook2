"use strict"; 
let studentName; 
 
//Majors 
let studentMajor = "BIOL"
if (studentMajor == "Biology" || studentMajor =="BIOL"){
    console.log("Major: " + studentMajor); 
}
else if(studentMajor == "Computer Science" || studentMajor == "CSCI"){
    console.log("Major: " + studentMajor); 

}
else if(studentMajor == "English" || studentMajor == "ENG"){
    console.log("Major: " + studentMajor); 

}
else if(studentMajor == "History" || studentMajor == "HIST"){
    console.log("Major: " + studentMajor); 
}
else if (studentMajor == "Marketing" || studentMajor == "MKT"){
    console.log("Major: " + studentMajor)
}
else{
    console.log("Major:unknkown ") 
}

//Advising Location
let Advising_Location;
if (studentMajor == "Biology" && Advising_Location =="Science Bldg, Room 310"){
    console.log("Advising Location: " + Advising_Location); 
}
else if(studentMajor == "Computer Science" || Advising_Location == "Sheppard Hall, Room 314"){
    console.log("Advising Location: " + Advising_Location); 

}
else if(studentMajor == "English" || Advising_Location == "Kerr Hall, Room 201"){
    console.log("Advising Location: " + Advising_Location); 

}
else if(studentMajor == "History" || Advising_Location == "Kerr Hall, Room 114"){
    console.log("Advising Location: " + Advising_Location); 
}
else if (studentMajor == "Marketing" || Advising_Location == "Westly Hall, Room 310"){
    console.log("Advising Location: " + Advising_Location)
}
else{
    console.log("Advising Location :unknkown ") 
}

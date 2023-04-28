"use strict"; 

var gross_pay=(payrate*hoursworkerd); 
var hoursWorked= 40; 
var payRate= 18.50; 
var annual_income=(gross_pay*52); 

//filing Single 

if (annual_income <= 12000); {
    taxrate = .05
}
else if (annual_income <= 24999); {
    taxrate = .1
}
else if (annual_income <=74999); {
    taxrate = .15 
}
else if (annual_income <= 75000); {
    taxrate = .20
}
else {
    taxrate = .25
}


//filing Jointly
if (annual_income => 12000); {
    taxrate = .0
} else if (annual_income <= 24999); {
    taxrate = .06
}
else if (annual_income <=74999); {
    taxrate = .11
}
else if (annual_income <= 75000); {
    taxrate = .20
}
else {
    taxrate = .32
}

console.log("You worked " + hoursWorked); 

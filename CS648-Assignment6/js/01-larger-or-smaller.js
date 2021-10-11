var value1 = parseInt(prompt("Enter first interger value!"));
var value2 = parseInt(prompt("Enter second interger value!"));

if (isNaN(value1) || isNaN(value2)) {
    document.write("Invalid Input");
}
else if (value1 === value2) {
    document.write("Both the numbers are equal");
}
else {
    document.write("The larger number is " + (value1 > value2 ? value1 : value2));
}
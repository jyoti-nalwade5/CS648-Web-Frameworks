//STEP 1
function halfNumber(number){
    return console.log("Half of "+ number +" is "+ number/2);
}

halfNumber(10);
//STEP 2
function squareNumber(squareNumber){
    return console.log("The result of squaring the number "+ squareNumber +" is "+ squareNumber*squareNumber);
}
squareNumber(2);
//STEP 3
function percentOf(percentNumber, number) {
    return (percentNumber / number) * 100;
}
var percentNumber = 20;
var number = 100;
console.log(percentNumber + " is " + percentOf(percentNumber, number) + "% of " + number);
//STEP 4
function findModulus(divisor, divident){
    return console.log(divisor % divident + " is the modulus of " + divisor + " and " + divident);
}
findModulus(7, 3);
//STEP 5
function addNumbers(numbers) {
    'use strict';
    var sum = 0;
    var numberList = window.prompt("Enter " + numbers + " numbers separated by comma");
    numberList = numberList.split(",").map(function (item) {
        return parseInt(item, 10);
    });
    for (var i = 0; i < numberList.length; i++) {
        sum += Number(numberList[i]);
    }
    window.console.log("Sum of numbers: " + sum);
    return sum;
   
}
addNumbers(5);

/*
 * Lab1.js
 * Brett Ratner
 *
 * The purpose of this assignment is to get familiar with the prompt, and alert
 * functions. As well as taking in information that is given to us by the user
 * and being able to manipulate that data and convert it into different data types.
 */


//Calculation 1

//Asks the user for the first number and stores it in a.
var a = prompt("type a numeric value");
//Asks the user for the second number and stores it in b.
var b = prompt("type another numeric value");
var c;

//Takes the user input and does math to it
c = Math.sqrt(a*a + b*b);
//produces an alert box to tell the user the what the output is
alert(c);

//Calculation 2

//Asks the user to enter in a total number in seconds
 var seconds = prompt("Enter number of total seconds");
//takes the string that was entered in and turns it into an integer
 seconds = parseInt(seconds);
//calculates how many seconds in a minute
 var minutes = Math.floor(seconds/60);
//calculate how many minutes in a hour
 var hours = Math.floor(minutes/60);
// takes the left over seconds that are not a multiple of 60
 minutes  = minutes%60;
// takes the left over minutes that are not a multiple of 60
 seconds = seconds%60;
//displays an alert box to tell the user what the output is
alert( hours +" hours " +  minutes + " min " + minSec + " sec");


//Calculation 3

//Asks the user to enter a string that is separated by commas
var stringOfValues = prompt("enter a string that uses a comma for a delimiter");
// Creates an array
var array = new Array();
// Sets the content in the array to be the string split up by commas
array = stringOfValues.split(',');
var newString;
//puts the sting back together from the array, however it now separates each element with a ';' in stead of a comma
newString = array.join(';');
//displays an alert box to tell the user what the output is
alert("The new String is: " + newString);



//Calculation 4

//Asks the user to enter a date
var inputDate = prompt("Enter a date:");
//takes the users input and stores it as a date object
var newDate = new Date(inputDate);
//takes users inpout and stores it into milliseconds
var milli = Date.parse(inputDate);
//adds one days worth milliseconds to the user inputed date in miliseconds
milli += 60*60*1000*24;
//stores the new date in milliseconds
var newDate2 = new Date(milli);
//puts the new date back into a string for the user
var stringDate = newDate2.toDateString();
//displays an alert box to tell the user what the output is
alert("The new date, that is one day later is " + stringDate);
  











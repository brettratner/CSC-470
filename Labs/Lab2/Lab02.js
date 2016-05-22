/**********************************************************************************************
* Lab02.js
* Brett Ratner
* The purpose of the assignment was to be able to create error handling for our programs,
* learn how scopes of functions worked, as well as being able to use conditionals to enhance
* projects we previously worked on in lab1.
*
**********************************************************************************************/
//Calculation 1
 
  /*
  This function checks to make sure that the user has not entered a valid unber for the first prompt,
  and if they didnt then it will keep prompting them to enter in a number, unless they hit cancle
  in which it will just quit the program. It then does the same check for the second number the user
  inputs, then it will preform the math on the two numbers, and display the outcome
  */

var calc1 = function(){

  var aCompleted = false;
  var bCompleted = false;

while(!aCompleted){
  
  //Asks the user for the first number and stores it in a, if usere clicks cancle then exit.
  var a = prompt("type a numeric value");
   if ( a === null){
    return;
    
  }
  //checks to see if what the user entered is negative.
  else if (a < 0 ){
    alert("You can not enter in a negative number");
  }
  else if(Number.isNaN(Number(a))){
          alert("You entered something that is not a number");
          }
  else if (!Number.isNaN(Number(a))){
    aCompleted = true;
    
   }
    
  }
  
  while(aCompleted == true && bCompleted == false){
    
  //Asks the user for the second number and stores it in b, if usere clicks cancle then exit.
    var b = prompt("type another numeric value");
     if ( b === null){
    return;
    
  }
    //checks to see if what the user entered is negative.
  else if (b < 0 ){
    alert("You can not enter in a negative number");
  }
  else if(Number.isNaN(Number(b))){
          alert("You entered something that is not a number");
          }
  else if (!Number.isNaN(Number(b))){
    bCompleted = true;
    
   }
   
 }
  var c;

//Takes the user input and does math to it
c = Math.sqrt(a*a + b*b);
//produces an alert box to tell the user the what the output is
alert(c);
  
}

calc1();



  var calc3 = function(){


  //Calculation 3
    
  /*
  It first checks to make sure the user entered in more than one word that was seperated
  by commas. After if Checks to make sure that it has at least some text seperated by commas
  it will then join them together seperated by ';'.
  */
    var StingCompleted = false;
  while(!StingCompleted){
  //Asks the user to enter a string that is separated by commas
  var stringOfValues = prompt("enter a string that uses a comma for a delimiter");

    if(stringOfValues === null ){
      return;
    }
 
  // Sets the content in the array to be the string split up by commas
  var stringArray = stringOfValues.split(',');
    if(stringArray.length < 2){
      alert("You must enter two or more values that have a comma for a delimiter ");
    } else{
  var newString;
  //puts the sting back together from the array, however it now separates each element with a ';' in stead of a comma
  newString = stringArray.join(';');
  //displays an alert box to tell the user what the output is
  alert("The new String is: " + newString);
      StingCompleted = true;
    }
    
  }
  }

calc3();


 //Problem 2
 /*
 This uses 3 different functions that use scope chaining to pass along information about a variable.
 Then I store the inforamtion in a counter object, then return the object. 
 */
var makeCounter = function(){
  var count =  0;
  
  var addCount = function(n){
      count += n;
  }
  
  var getCount = function(){
   return count;
  }
  
  var counter = {
    
    addCount : addCount,
    getCount : getCount
  }
  return counter;

}
  //Test
  var counter = makeCounter(); console.log( counter.getCount() ); // 0 
  counter.addCount(1);
  console.log( counter.getCount() ); // 1
  counter.addCount(2);
  console.log( counter.getCount() ); // 3
  


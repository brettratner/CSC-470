/*
  Brett Ratner
  Lab05
  The Purpose of the assignment was to use the map, filter and reduce 
  functionalty to itterate through an array to perform computations on 
*/
// ave_age.js
(function() {

  // Add two numbers
  function plus(a, b) { return a + b; };
  
  // Compute the average of an array
  function ave(arr)   {
    return arr.reduce(plus) / arr.length;
  }
  
  // Compute age
  function age(p)     { return p.died - p.born; }
  
  // Test for a male
  function male(p)    { return p.sex == "m"; }

  // Test for a female
  function female(p)  { return p.sex == "f"; }
  
  // Compute average age of male and female members
  var ave_male_age   = ave( ancestry.filter( male ).map( age ));
  var ave_female_age = ave( ancestry.filter( female ).map( age ));
  

//part 1--------------------------------------------------------------------------------
//gets all the mens ages 
var Men = ancestry.filter( male ).map( age );
//gets all the womens ages
var Women = ancestry.filter( female ).map( age );
  /*checks to see if the age of the men or women is over 50 and if it is then 
    it returns true and if it is under then it returns false*/
 var over50 = function(age, gender){
  return gender.filter(function(age) {return (age > 50) ? true : false});
    
 };
/*checks to see if the age of the men or women is under 50 and if it is then 
    it returns true and if it is under then it returns false */
  var under50 = function(age, gender){
  return gender.filter(function(age) {return (age <= 50) ? true : false});
    
 };
 /*
 Sets the four cases of and puts them into their own variable 
 first case is the men over 50, second case is men under 50,
 third case is the women over 50 and the last case is the women under 50
 */
 var menOver50 = over50(age, Men);
 var menUnder50 = under50(age, Men);
 var womenOver50 = over50(age, Women);
 var womenUnder50 = under50(age, Women);

//--------------------------------------------------------------------------------

//part 2--------------------------------------------------------------------------------


// calculates the standard deviation.
var stdev = function(ages, mean){
  //uses the map functionality to get the differences of each age to the mean age. 
var differences = ages.map(function(currentAge) { return(currentAge - mean); });



// uses the reduce functionality to get the sum of all numbers
var sum_square = differences.reduce(function(prev, diff){ return (Math.pow(diff,2)) + prev;} , 0);
// takes the result and then divides it by the number of ages minus 1
var results = Math.sqrt(sum_square / (ages.length - 1));
return results;
};


//logs all the output to the console.
  console.log( "Men Over 50: " + menOver50.length);
  console.log( "Women Over 50: " + womenOver50.length);
  console.log("Men Under 50: " + menUnder50.length);
  console.log("Women Under 50: " + womenUnder50.length);
  console.log('average male age: ' + ave_male_age + " stdev: " + stdev(Men, ave_male_age));
  console.log('average female age: ' + ave_female_age + " stdev: " + stdev(Women, ave_female_age));
    
    
    alert( "Men Over 50: " + menOver50.length);
  alert( "Women Over 50: " + womenOver50.length);
  alert("Men Under 50: " + menUnder50.length);
  alert("Women Under 50: " + womenUnder50.length);
  alert('average male age: ' + ave_male_age + " stdev: " + stdev(Men, ave_male_age));
  alert('average female age: ' + ave_female_age + " stdev: " + stdev(Women, ave_female_age));
})();

/******************************************************************** 
 * Lab 07
 * Brett Ratner
 * The purpose of this lab is to show how to do prototype inheritance
 ********************************************************************/

//Creates the shape contrutor
var Shape = function(name, width, height){
	this.name = name;
	this.width = width;
	this.height = height;
}
//returns the name of the object
Shape.prototype.getName = function(){
	return this.name;
}

//Creates the rectangle object
var Rectangle = function(name, width, height){
 Shape.call(this,name, width, height);

}
Rectangle.prototype = Object.create(Shape.prototype);

// Returns the ares of the object
Rectangle.prototype.getArea = function(){

 	return this.width * this.height;
 } 
// creates the square object 
var Square = function(name, size){
 Rectangle.call(this,name, size, size);
 
}
Square.prototype = Object.create(Rectangle.prototype);

// Tests
var r = new Rectangle('rectangle1', 10, 20);
console.log( r.getName(), 'has area of ', r.getArea() );
alert( r.getName() + ' has area of ' + r.getArea() );
var s = new Square('square1', 30);
console.log( s.getName(), 'has area of ', s.getArea() );
alert( s.getName() + ' has area of ' + s.getArea() );
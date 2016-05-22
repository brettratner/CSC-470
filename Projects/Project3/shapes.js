/************************************************************************************************************************* 
 * Project 3
 * Brett Ratner
 * The purpose of this project is to show how objects inherit properties
 * from a hierarchy.This will draw a line, rectangle, ellipse, polygon, 
 * and a star that will get their color, and other properties from the shap
 * constructor.
 *************************************************************************************************************************/

(function() {

var cvs = document.getElementById("cvs");
var ctx = cvs.getContext("2d");

//Creates the shape constructor
var Shape = function() {
        this.fillStyle = "red";
        this.strokeStyle = "orange";
        this.lineWidth = 4;
    }
    //returns the name of the object
Shape.prototype.draw = function(ctx) {
        this.trace();
        ctx.strokeStyle = this.strokeStyle;
        ctx.fillStyle = this.fillStyle;
        ctx.lineWidth = this.lineWidth;
    if(this.fillStyle !== undefined){
        ctx.fill();
    }
    if(this.strokeStyle !== undefined){    
        ctx.stroke();
    }
    }
    //the line constructor
var Line = function(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    Shape.call(this);
}
Line.prototype = Object.create(Shape.prototype);
//Draws the Line to the canvas
Line.prototype.trace = function() {
    ctx.beginPath();
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
}
//the Rectangle constructor
var Rectangle = function(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    Shape.call(this);
}
Rectangle.prototype = Object.create(Shape.prototype);
//Draws the Rectangle to the canvas
Rectangle.prototype.trace = function() {
    ctx.rect(this.x, this.y, this.w, this.h);
    
}
//the Ellipse constructor
var Ellipse = function(cx, cy, rx, ry) {
    this.cx = cx;
    this.cy = cy;
    this.rx = rx;
    this.ry = ry;
    Shape.call(this);
}
Ellipse.prototype = Object.create(Shape.prototype);
//Draws the Ellipse to the canvas
Ellipse.prototype.trace = function() {
    ctx.save();  
    ctx.translate(this.cx, this.cy);
    ctx.scale(this.rx, this.ry);
    ctx.beginPath();
    ctx.arc(0, 0, 1, 0, 2 * Math.PI, false);
    ctx.restore();
}
// //the Polygon constructor
var Polygon = function(cx, cy, radius, npoints) {
    this.cx = cx;
    this.cy = cy;
    this.radius = radius;
    this.npoints = npoints;
    Shape.call(this);
}
Polygon.prototype = Object.create(Rectangle.prototype);
//Draws the Polygon to the canvas
Polygon.prototype.trace = function() {
    var delta = Math.PI * 2 / (this.npoints);
    var theta = -Math.PI / 2;
    var r = this.radius;
    var x = this.cx;
    var y = this.cy;

    ctx.beginPath();
    x = r * Math.cos(theta) + this.cx;
    y = r * Math.sin(theta) + this.cy;
    ctx.lineTo(x, y);

    for (var i = 0; i < this.npoints; i++) {
        theta = theta + delta;
        r = this.radius;
        x = r * Math.cos(theta) + this.cx;
        y = r * Math.sin(theta) + this.cy;
        ctx.lineTo(x, y);
    }
}
//the Star constructor
var Star = function(cx, cy, radius, npoints) {
    this.cx = cx;
    this.cy = cy;
    this.radius = radius;
    this.npoints = npoints;
    Shape.call(this);
}
Star.prototype = Object.create(Rectangle.prototype);
//Draws the star to the canvas
Star.prototype.trace = function() {
        var delta = Math.PI * 2 / (2 * this.npoints);
        var theta = -Math.PI / 2;
        var r = this.radius;
        var x;
        var y;

        ctx.beginPath();
        x = r * Math.cos(theta) + this.cx;
        y = r * Math.sin(theta) + this.cy;
        ctx.lineTo(x, y);

        for (var i = 0; i < 2 * this.npoints; i++) {
            theta = theta + delta;
            if (i % 2 === 0) {
                r = .5 * this.radius;
            } else {
                r = this.radius;
            }
            x = r * Math.cos(theta) + this.cx;
            y = r * Math.sin(theta) + this.cy;
            ctx.lineTo(x, y);
        }
    }
    // Tests
var lineTest = new Line(100, 300, 200, 300);
var RectTest = new Rectangle(275, 260, 75, 75);
var EllipseTest = new Ellipse(500, 300, 70, 50);
var PolyTest = new Polygon(675, 300, 50, 5);
var StarTest = new Star(850, 300, 50, 5);

//calls the draw function on all the shapes. 
lineTest.draw(ctx);
RectTest.draw(ctx);
EllipseTest.draw(ctx);
PolyTest.draw(ctx);
StarTest.draw(ctx);



 }) ();

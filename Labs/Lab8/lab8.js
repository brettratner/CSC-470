/************************************************************
* Brett Ratner
* Lab08
* 
* The purpose of this assigment is to be able to draw 
* any n-sided pointed(starlike) shape when the mouse is pressed.
*
************************************************************/

 (function() {

var cvs = document.getElementById("cvs");
var ctx = cvs.getContext("2d");

//Listens for the mouse to be clicked to then create the star
cvs.addEventListener('mousedown', function(evt){
	var mousePosition = getMousePos(cvs, evt);
	
	//gets and returns the mouse coordiantes to then draw the star
	function getMousePos(cvs, evt){
		var rect = cvs.getBoundingClientRect();
		return{
			x: evt.clientX - rect.left,
			y: evt.clientY - rect.top
		};

	}
	/*
	  calls the function to draw the star.
	  the parameters are the shapes x pos, y pos, the radius
	  of the shape, the number of points you want the shape to
	  have and the context to be drawn. 
	*/
	drawStar(mousePosition.x, mousePosition.y, 75, 5, ctx);	

});

   /* 
     this function is getting the mouse coordinates to do 
     the drawing of the star.
   */
var drawStar = function(cx, cy, radius, npoints, ctx){
	
	var delta = Math.PI*2/(2*npoints);
	var theta = -Math.PI/2;
	var r = radius;
	var x;
	var y;

	//starts the path
	ctx.beginPath();
	
	x = r*Math.cos(theta) + cx;
	y = r*Math.sin(theta) + cy;

	ctx.lineTo(x,y);

	for(var i = 0; i<2*npoints; i++){

		theta = theta + delta;
			if(i%2 === 0){

				r = .5*radius;
			}else{

				r = radius;
			}
		x = r*Math.cos(theta) + cx;
		y = r*Math.sin(theta) + cy;
		ctx.lineTo(x,y);


	}
	/*
	  This gives the star is gold color and blue outline
	  and then it will close the path. 
	*/
		ctx.fillStyle = "gold";
		ctx.strokeStyle = "blue";
		ctx.lineWidth = 2;
		ctx.stroke();
		ctx.fill();
		ctx.closePath();
}





 }) ();
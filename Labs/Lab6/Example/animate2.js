// animate2.js
// Drawing surface
var cvs = Snap("#cvs");

// Create ellipses

    
    // Create and style ellipse
    var el = cvs.rect(20, 20, 40, 40);
    el.attr({fill: 'white', stroke: 'black', strokeWidth: '5px'});
    
    // Add events
    el.hover(
      function(e) { this.animate({fill:'red', width:'80', height:'80'}, 500, mina.bounce); },
      function(e) { this.animate({fill:'white', width:'40', height:'40'}, 500, mina.bounce); }
    );


// Handle messages from main script
self.onmessage = function(e) {
    
        function greyscale(red, green, blue){
             return(0.299*red + 0.587*green + 0.114*blue);
        }

    var array  = e.data.dataURL;

        // Visit all pixel data
        for (var i=0; i<array.length; i+=4) {
                // make greyscale
                var colorValue = greyscale(array[i], array[i+1], array[i+2]);
                array[i]   = colorValue;
                array[i+1] = colorValue;
                array[i+2] = colorValue;
                }
    // Return the identified worker data.
  
     postMessage(array);
};

// Load Stanford Javascript Crypto Library
importScripts("sjcl.js");

// Handle messages from main script
self.onmessage = function(e) {
    var params    = e.data;

    // Unpack all message data
    var name      = params.name;        // Unique name for the Worker
    var encrypted = params.encrypted;   // Data to decrypt
    var first     = params.first;       // First PIN to check
    var count     = params.count;       // The number of PINs to test
    var foundPIN  = null;               // Init found PIN to null

    // Note start time
    var start = Date.now();
    //console.log(name + ' started');

    // Cycle through all passwords
    var arr = pin2arr(first);

    for (var i=0; i<count; i++) {
        // Get PIN as string
        var pin = arr.join('');

        // Try to decrypt.
        // If not successful, throws exception.
        try {
            var decrypted = sjcl.decrypt(pin, encrypted);
            foundPIN = pin;
            break;
        } catch (ex) {
            // PIN not correct.
        }
        // Move to next PIN
        increment(arr, 10);
    }

    // Print elapsed time
    var elapsed = Date.now() - start;
    //console.log( name + ' elapsed: ' + elapsed);

    // Return the identified worker data.
    // If not found, foundPIN is null
    postMessage( {name:name, PIN:foundPIN, elapsed:elapsed});
};

// Utility to help increment the array
function increment(arr, alen) {
    var keepGoing  = false;

    var i = 0;
    while (i < alen) {

        // Exceeded the size of the PIN. We're done.
        if (i >= arr.length) {
            keepGoing  = false;
            break;
        }

        // Increment current column
        arr[i] += 1;

        // If current column exceeded alphabet size...
        if (arr[i] >= alen) {
            arr[i]   = 0;   // Reset index
            ++i;            // Move to next column

        // Return with arr set to new PIN
        } else {
            keepGoing = true;
            break;
        }

    }
    return keepGoing;
}

// Utility to convert a number into a suitable array for counting
function pin2arr(pin) {
    // Turn number into string and left-pad with 0's
    var spin = String(pin);
    var spin = ('0000' + spin).substring(spin.length);

    // Split, reverse and convert to an array or integers
    var chars = spin.split('');
    chars.reverse();
    var arr = chars.map(function (c) {
        return Number(c);
    });

    return arr;
}



/*
// Firstly, I'm declaring variables for required module Express
var express = require('express');
var app = express();

// Here I'm creating a Node.js server and instructing it to listen on Port 3000.
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

// This line confirms in the console that the server is up and running.
app.listen(port, function () {
  console.log(`Web server for Pranayama Timer running at: http://localhost:${port}`)
  console.log("Type Ctrl+C to shut down the web server")
}); 

// This line allows us to serve static files that are in our public_html directory.
app.use(express.static('public_html'));
*/


// LIGHT/DARK MODE SCRIPT
function toggleDark() {
 // let element = document.body;//
 let element = document.body;
  element.classList.toggle("dark-mode");
}


/*
// TIMER APP SCRIPT
// We create a Date object and then call the getTime() function on this object. 
// The getTime() method makes the countDownDate variable hold the milliseconds since Jan 1, 1970, 00:00:00.000 GMT.

var countDownDate = new Date("Jul 25, 2021 16:37:52").getTime();

// Next, we make a var myfunc() function​ and make it run every second using the setInterval() method.
var myfunc = setInterval(function() {
  // code goes here
  }, 1000)
*/
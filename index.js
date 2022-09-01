(function() {
  'use strict';
var stopButton = document.getElementById("stopButton")
var slowButton = document.getElementById("slowButton")
var goButton = document.getElementById("goButton")
var stopBulb = document.getElementById('stopLight')
var slowBulb = document.getElementById('slowLight')
var goBulb = document.getElementById('goLight')


  stopButton.addEventListener("click", () => {
    if (stopBulb.classList.contains('stop')) {
      console.log("Stop Button turned off")
      stopBulb.classList.remove('stop')
    } else {
      console.log("Stop Button turned on")
      stopBulb.classList.add('stop')
    }
  })

  stopButton.addEventListener("mouseenter", (e) => {
    console.log('Entered:', e.target.id);
  })
  
  stopButton.addEventListener("mouseleave", (e) => {
    console.log('Left:', e.target.id);
  })
 

  slowButton.addEventListener("click", () => {
    if (slowBulb.classList.contains('slow')) {
      console.log("Slow Button turned off")
      slowBulb.classList.remove('slow')
    } else {
      console.log("Slow Button turned on")
      slowBulb.classList.add('slow')
    }
  })

  slowButton.addEventListener("mouseenter", (e) => {
    console.log('Entered:', e.target.id);  })

  slowButton.addEventListener("mouseleave", (e) => {
    console.log('Left:', e.target.id);
  })

  goButton.addEventListener("click", () => {
    if (goBulb.classList.contains('go')) {
      console.log("Go Button turned off")
      goBulb.classList.remove('go')
    } else {
      console.log("Go Button turned on")
      goBulb.classList.add('go')
    }
  })

  goButton.addEventListener("mouseenter", (e) => {
    console.log('Entered:', e.target.id);  })

  goButton.addEventListener("mouseleave", (e) => {
    console.log('Left:', e.target.id);
  })
})();
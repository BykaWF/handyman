/*!
* Start Bootstrap - Landing Page v6.0.6 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
// Define an array of words to rotate

document.addEventListener("DOMContentLoaded", function() {
    // Array of words to rotate
    var words = ["SIMPLE", "EASY", "FLEXIBLE"];
    var rotatingHeading = document.getElementById("rotatingHeading");
    var currentIndex = 0;

    setInterval(function() {
      rotatingHeading.textContent = "MAKE IT " + words[currentIndex];
      currentIndex = (currentIndex + 1) % words.length;
    }, 5000); // Rotate every 5 seconds
  });
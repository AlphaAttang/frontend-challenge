var elem = document.createElement("img");
elem.src = '/newsletter-sign-up-with-success-message-main/assets/images/illustration-sign-up-desktop.svg';
// elem.setAttribute("src", "images/hydrangeas.jpg");
// elem.setAttribute("height", "100%");
elem.setAttribute("width", "100%");
// elem.setAttribute("alt", "Flower");
document.getElementById("image").appendChild(elem);

function myFunction(x) {
    if (x.matches) { // If media query matches
        elem.src = '/newsletter-sign-up-with-success-message-main/assets/images/illustration-sign-up-mobile.svg';
    } else {
        elem.src = '/newsletter-sign-up-with-success-message-main/assets/images/illustration-sign-up-desktop.svg';
    }
  }
  
  var x = window.matchMedia("(max-width: 767px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
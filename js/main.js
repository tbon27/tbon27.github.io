//--
// Open and close contact form
//--
function openForm() {
  document.getElementById("myForm").style.display = "block";
  console.log("Button clicked");
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// display the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

// change the slide when the left or right arrows are clicked
function plusSlides(n) {
  showSlides((slideIndex += n));
}

//change the slide when the dots are clicked
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides"); //take all elements with the class name mySlides and store them in the var array slides
  var dots = document.getElementsByClassName("dot"); // take all elements with the class name dot and store them in the var array dots
  if (n > slides.length) {
    slideIndex = 1;
  } // if n (number passed into the function) is greater than the length of the array slides-> slideIndex is set to 1
  if (n < 1) {
    slideIndex = slides.length;
  } // If n (number passed into the function) is less than 1-> slideIndex is set to the length of the array slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // take each item in the array slides and sets the display to none
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); //take each item in the array dots and removes active which removes active styling
  }
  slides[slideIndex - 1].style.display = "block"; //displays the image in slideshow
  dots[slideIndex - 1].className += " active"; // add the active styling to the dot associated with the image
}
//--
// END Open and close contact form
//--



// The following is to create close the contact form when the user clicks off of it
// Add event listener for any clicks on the website
document.addEventListener(
  "click",
  function (event) {
    //If the click happens on the cancel button OR anywhere that is not the contact form AND the click does not happen on any element with the contact class then call the closeForm() function
    if (
      event.target.matches(".cancel") ||
      (!event.target.closest(".form-popup") &&
        !event.target.closest(".open-button") &&
        !event.target.closest(".contact"))
    ) {
      closeForm();
    }
  },
  false
);

// var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
//   placement : 'right',
//   trigger : 'focus',
// });
// var popover2 = new bootstrap.Popover(document.querySelector('.popover-dismiss2'), {
//   placement : 'right',
  
//   trigger: 'focus'
// });
// var popover3 = new bootstrap.Popover(document.querySelector('.popover-dismiss3'), {
//   placement : 'right',
  
//   trigger: 'focus'
// });

// var popoverX = new bootstrap.Popover(document.querySelector('.popover-dismissX'), {
//   placement : 'right',
//   trigger : 'focus',
//   html : true,
//   content : '<div style="width: 100%; overflow: visible;"><div id="pop-container"><img src="images/TemplateWebsite1vid.gif" alt="Sample Website" style="width: 600px; border-radius: 5%;"></div></div>'
// });
const x = document.getElementById("html-sample");
function showPop1(){
  if (window.getComputedStyle(x).visibility === "hidden") {
    x.style.visibility = "visible";
  } 
  else if(window.getComputedStyle(x).visibility === "visible"){
    x.style.visibility = "hidden";
  }  
}
function closePop1(){
  var y = document.getElementById("html-sample");
    y.style.visibility = "hidden";
}

const testPop1 = document.querySelector('#html-sample');
  document.addEventListener(
    "click",
    function (event) {
      if (window.getComputedStyle(testPop1).visibility === "visible")
      {
        closePop1();
      }
    },
    true
  );
  
  //2
const sample2 = document.getElementById("html-sample2");
function showPop2(){
  if (window.getComputedStyle(sample2).visibility === "hidden") {
    sample2.style.visibility = "visible";
  } 
  else if(window.getComputedStyle(sample2).visibility === "visible"){
    sample2.style.visibility = "hidden";
  }  
}
function closePop2(){
  var y = document.getElementById("html-sample2");
    y.style.visibility = "hidden";
}

const testPop2 = document.querySelector('#html-sample2');
  document.addEventListener(
    "click",
    function (event) {
      if (window.getComputedStyle(testPop2).visibility === "visible")
      {
        closePop2();
      }
    },
    true
  );  
  //3
const sample3 = document.getElementById("html-sample3");
function showPop3(){
  if (window.getComputedStyle(sample3).visibility === "hidden") {
    sample3.style.visibility = "visible";
  } 
  else if(window.getComputedStyle(sample3).visibility === "visible"){
    sample3.style.visibility = "hidden";
  }  
}
function closePop3(){
  var y = document.getElementById("html-sample3");
    y.style.visibility = "hidden";
}

const testPop3 = document.querySelector('#html-sample3');
  document.addEventListener(
    "click",
    function (event) {
      if (window.getComputedStyle(testPop3).visibility === "visible")
      {
        closePop3();
      }
    },
    true
  );




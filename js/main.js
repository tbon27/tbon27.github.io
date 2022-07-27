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



var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
    trigger: 'focus'
});
var popover2 = new bootstrap.Popover(document.querySelector('.popover-dismiss2'), {
    trigger: 'focus'
});
var popover3 = new bootstrap.Popover(document.querySelector('.popover-dismiss3'), {
    trigger: 'focus'
});


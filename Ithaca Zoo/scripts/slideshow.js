$(document).ready(function() {
  // Keep track of the current slide number
  var slideIndex = 0;

  $("#prev").on('click', function() {
    // Get all the slides
    var slides = $(".slideshow figure");

    // Go to the previous slide
    slideIndex = slideIndex - 1;

    // Wrap around to the last slide if at the first slide
    // /*ALTERNATIVE ANSWER:*/ if (slideIndex < 0) {
    if (slideIndex == -1) {
      slideIndex = slides.length - 1;
    }

    // Hide all the slides and then show the current slide number
    slides.addClass("hidden");
    slides.eq(slideIndex).removeClass("hidden");
  });

  $("#next").on('click', function() {
    // Get all the slides
    var slides = $(".slideshow figure");

    // Go to the next slide
    slideIndex = slideIndex + 1;

    // Wrap around to the first slide if at the last slide
    if (slideIndex == slides.length) {
    // /*ALTERNATIVE ANSWER:*/ if (slideIndex >= slides.length) {
      slideIndex = 0;
    }

    // Hide all the slides and then show the current slide number
    slides.addClass("hidden");
    slides.eq(slideIndex).removeClass("hidden");
  });
});

$(document).ready( function() {

  $("#email_radio").on("input",function() {
    $("#email").attr("required", true);
    $(".email").removeClass("hidden");
    $("#phone").attr("required", false);
    $(".phone").addClass("hidden");
    $("#phone_error").addClass("hidden");
  });

  $("#phone_radio").on("input",function() {
    $("#phone").attr("required", true);
    $(".phone").removeClass("hidden");
    $("#email").attr("required", false);
    $(".email").addClass("hidden");
    $("#email_error").addClass("hidden");
  });
  
});

$(document).ready(function () {

  $("#tix_form").on("submit", function() {
    var valid = true;

    var tix_valid = $("#adult_tix").prop("validity").valid && $("#child_tix").prop("validity").valid;
    if(tix_valid) {
      $("#tix_error").addClass("hidden");
    } else {
      $("#tix_error").removeClass("hidden");
      valid = false;
    }

    var name_valid = $("#name").prop("validity").valid;
    if(name_valid) {
      $("#name_error").addClass("hidden");
    } else {
      $("#name_error").removeClass("hidden");
      valid = false;
    }

    var email_valid = $("#email").prop("validity").valid;
    if(email_valid) {
      $("#email_error").addClass("hidden");
    } else {
      $("#email_error").removeClass("hidden");
      valid = false;
    }

    var phone_valid = $("#phone").prop("validity").valid;
    if(phone_valid) {
      $("#phone_error").addClass("hidden");
    } else {
      $("#phone_error").removeClass("hidden");
      valid = false;
    }

    return valid;
  });

});


// Front-End Logic
$(document).ready(function() {
  $("#personal-info").submit(function(event) {
    var ageInput = parseInt($("input#age").val());
    var genderInput = $("#gender").val();
    var hairColorInput = $("#hair-color").val();

    if ( genderInput === "female" && ageInput < 30 && hairColorInput != "other") {
      $(".init-hidden").hide();
      $("#khal").show();
    } else {
      $(".init-hidden").hide();
      $("#dragon").show();
    }

    if ( genderInput === "male" && ageInput < 30 && hairColorInput != "other") {
      $(".init-hidden").hide();
      $("#danny").show();
    } else if ( gender === 'male' ){
      $(".init-hidden").hide();
      $("#dragon").show();
    }

    event.preventDefault();
  });
});

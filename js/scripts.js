
// Front-End Logic
$(document).ready(function() {
  $("#personal-info").submit(function(event) {
    var ageInput = parseInt($("input#age").val());
    var genderInput = $("#gender").val();
    var hairColorInput = $("#hair-color").val();

    if ( genderInput === "female" && ageInput < 30 && hairColorInput != "other") {
      $(".init-hidden").hide();
      $("#khal").fadeIn(3000);
    } else if ( ageInput > 30 && genderInput != "female" && hairColorInput === "blonde" ) {
      $(".init-hidden").hide();
      $("#ygritte").fadeIn(3000);
    } else {
      $(".init-hidden").hide();
      $("#dragon").fadeIn(3000);
    }

    if ( genderInput === "male" && ageInput < 30 && hairColorInput != "other") {
      $(".init-hidden").hide();
      $("#danny").fadeIn(3000);
    } else if ( ageInput > 30 && genderInput != "male" && hairColorInput === "blonde" )  {
      $(".init-hidden").hide();
      $("#hodor").fadeIn(3000);
    } else if ( gender === 'male' ){
      $(".init-hidden").hide();
      $("#dragon").fadeIn(3000);
    }

    event.preventDefault();
  });
});

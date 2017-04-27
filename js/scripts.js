$(document).ready(function() {
  $("#personal-info").submit(function(event) {
    var ageInput = parseInt($("input#age").val());
    var genderInput = $("#gender").val();
    var hairColorInput = $("#hair-color").val();
    event.preventDefault();

    console.log(ageInput);
  });
});

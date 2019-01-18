$(document).ready(function() {
  var age = prompt("Whats your age");

  $("form#About").submit(function(event){
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    var matched = () ;


    $("#matched").text(matched);
    $("#Celebrity").show()

    event.preventDefault();
  });
});

$(document).ready(function() {
  $("form#About").submit(function)(event){
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    var matched = (100 - age) * 2;
    }

    $("#matched").text(matched);
    $("#Celebrity").show()

    event.preventDefault();
  });
});

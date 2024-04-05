$(document).ready(function() {
  var cost;
  var adult_tix = 0;
  var child_tix = 0;

  $("#adult_tix").on('input', function(){
    adult_tix = $("#adult_tix").val();
    cost = child_tix*25+Number(adult_tix)*40;
    $("#tax").text("$"+(cost*0.07).toFixed(2));
    $("#cost").text("$"+(cost*1.07).toFixed(2));
  });
  $("#child_tix").on('input', function(){
    child_tix = $("#child_tix").val();
    cost = Number(child_tix)*25+adult_tix*40;
    $("#tax").text("$"+(cost*0.07).toFixed(2));
    $("#cost").text("$"+(cost*1.07).toFixed(2));
  });
});

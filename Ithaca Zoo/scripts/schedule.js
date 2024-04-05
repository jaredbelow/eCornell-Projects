$(document).ready(function() {
  var todays_date = new Date();
  todays_date = todays_date.toLocaleDateString('en-US',{weekday: 'long'})
  var todays_index = 10;
  $("table tr").each(function(i, entry){
    var DoW = String(entry.innerHTML);
    if(DoW.includes(todays_date)){
      $(this).addClass("highlight");
    }
  });
});

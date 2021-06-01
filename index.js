
$("#time_set").click(function(){
  var h = document.getElementById("hours").value;
  var mins = document.getElementById("min").value;
  var sec= document.getElementById("secs").value;
  if(h>=100||h<0){
    alert("Time input not valid please try again, max hours= 100, max minutes=60, max seconds=60");
  }
  else{
    if(mins>60||mins<0){
      alert("Time input not valid please try again,  max hours= 100, max minutes=60, max seconds=60");
    }
    else{
      if(sec>60||sec<0){
        alert("Time input not valid please try again,  max hours= 100, max minutes=60, max seconds=60");
      }
    }
  }
});

$(".cards").click(function(){
  var userChosenColour = $(this).attr("id");
  alert(userChosenColour);
})

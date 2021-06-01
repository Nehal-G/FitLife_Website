var h= 10;
var mins=1;
var sec=10;

function mytimer(){
  document.getElementById("timer_val").innerHTML= h +" : "+mins+" : "+sec;
  sec--;
  if(sec==0 && mins!=0){
    mins--;
    sec=59;
  }
  if(mins==0 && sec==0)
  {
    h--;
    mins=59;
    sec=59;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  setInterval(mytimer(),1000);
});

var start= setInterval(mytimer, 1000);
$(".fa-pause").click(function(){
  clearInterval(start);
})

$(".fa-play").click(function(){
while(h>=0 && mins>0 && sec>0){
  setInterval(mytimer(),1000);
}
})


// MUSIC

// document.addEventListener("DOMContentLoaded", function() {
//   var albumElement=
// });

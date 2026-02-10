document.addEventListener("DOMContentLoaded",function(){
  document.querySelectorAll(".flip-card").forEach(function(c){
    c.addEventListener("click",function(){c.classList.toggle("flipped")});
  });
});

document.addEventListener("DOMContentLoaded",function(){
  var reduce=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.body.classList.add("page-init");
  requestAnimationFrame(function(){document.body.classList.add("page-in");document.body.classList.remove("page-init")});
  var links=document.querySelectorAll('a[href$=".html"]');
  links.forEach(function(a){
    if(reduce)return;
    a.addEventListener("click",function(e){
      var href=a.getAttribute("href");
      if(!href||href.startsWith("http"))return;
      e.preventDefault();
      document.body.classList.add("page-out");
      setTimeout(function(){location.href=href},200);
    });
  });
  var nav=document.querySelectorAll(".nav a");
  var path=location.pathname.split("/").pop().toLowerCase();
  nav.forEach(function(a){
    var href=a.getAttribute("href")||"";
    if(href.toLowerCase()===path)a.classList.add("active");
  });
  if(reduce)return;
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){e.target.classList.add("active");io.unobserve(e.target)}
    });
  },{rootMargin:"0px 0px -10% 0px",threshold:0.1});
  document.querySelectorAll(".reveal").forEach(function(el){io.observe(el)});
  var bar=document.createElement("div");bar.className="scroll-progress";document.body.appendChild(bar);
  
  // Back to Top functionality
  var topBtn = document.querySelector(".back-to-top");
  if (topBtn) {
    topBtn.addEventListener("click", function(e) {
      e.preventDefault();
      window.scrollTo({top: 0, behavior: "smooth"});
    });
  }

  function onScroll(){
    var s=window.scrollY;var h=document.documentElement.scrollHeight-window.innerHeight;
    var p=h>0?Math.min(100,(s/h)*100):0;bar.style.width=p+"%";
    var sh=document.querySelector(".site-header");if(sh){sh.classList.toggle("small",s>24)}
  }
  window.addEventListener("scroll",onScroll,{passive:true});onScroll();
});

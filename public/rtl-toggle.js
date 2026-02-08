document.addEventListener("DOMContentLoaded",function(){
  var btn=document.getElementById("rtlToggle");
  var link=document.getElementById("bootstrap-css");
  if(!btn||!link)return;
  var rtl=false;
  btn.addEventListener("click",function(){
    rtl=!rtl;
    document.documentElement.dir=rtl?"rtl":"ltr";
    document.documentElement.lang=rtl?"ar":"en";
    link.href=rtl?"https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.rtl.min.css":"https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css";
    btn.textContent=rtl?"English":"عربي";
  });
});

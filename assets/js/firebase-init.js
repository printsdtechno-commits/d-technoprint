;(function(){
  function ready(fn){document.readyState!=="loading"?fn():document.addEventListener("DOMContentLoaded",fn)}
  ready(function(){
    var cfg=window.FIREBASE_CONFIG;
    var hasCfg=cfg&&cfg.apiKey;
    if(!hasCfg)return;
    var app=firebase.initializeApp(cfg);
    var db=firebase.firestore();
    var form=document.querySelector(".quote-form");
    if(!form)return;
    form.addEventListener("submit",function(e){
      e.preventDefault();
      var data={
        name:form.querySelector("#name").value,
        contact:form.querySelector("#contact").value,
        service:form.querySelector("#service").value,
        message:form.querySelector("#message").value,
        createdAt:new Date().toISOString()
      };
      db.collection("quotes").add(data).then(function(){
        alert("Submitted. We will contact you soon.");
        form.reset();
      }).catch(function(){
        alert("Submission failed. Please use WhatsApp or Email.");
      });
    });
  });
})(); 

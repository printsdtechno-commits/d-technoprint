;(function(){
  var React=window.React,ReactDOM=window.ReactDOM;
  if(!React||!ReactDOM)return;
  function HeroCarousel(props){
    var slides=props.slides||[];
    var _React=React,useState=_React.useState,useEffect=_React.useEffect;
    var idxState=useState(0),idx=idxState[0],setIdx=idxState[1];
    useEffect(function(){
      var t=setInterval(function(){setIdx(function(i){return (i+1)%slides.length})},4000);
      return function(){clearInterval(t)};
    },[slides.length]);
    function prev(){setIdx(function(i){return (i-1+slides.length)%slides.length})}
    function next(){setIdx(function(i){return (i+1)%slides.length})}
    return React.createElement("div",{className:"carousel","data-carousel":true,"aria-label":"Hero carousel"},
      React.createElement("div",{className:"carousel-track"},
        slides.map(function(s,i){
          var cls="carousel-slide"+(i===idx?" active":"");
          // Use backgroundImage to ensure gradients render correctly
          return React.createElement("div",{
            key: i,
            className:cls,  
            style: { background: s.bg },
            "data-gallery-item": true,
            "data-title": s.title,
            "data-desc": s.text,
            "data-logos": s.logos ? s.logos.join(", ") : undefined,
            "data-grid-class": s.gridClass
          }, 
            React.createElement("div",{className:"slide-content"},
              s.tags&&s.tags.length?React.createElement("div",{className:"chips"},s.tags.map(function(t,i){return React.createElement("span",{className:"chip",key:i},t)})):null,
              React.createElement("h1",null,s.title),
              React.createElement("p",null,s.text),
              React.createElement("div",{className:"carousel-ctas"},
                React.createElement("a",{className:"btn btn-primary btn-round",href:"contact.html"},"Get a Free Quote"),
                React.createElement("a",{className:"btn btn-secondary btn-round",href:s.secondaryHref||"https://wa.me/971545741959",target:"_blank",rel:"noopener"},s.secondaryText||"WhatsApp Us")
              )
            )
          );
        })
      ),
      React.createElement("div",{className:"carousel-nav"},
        React.createElement("button",{className:"carousel-arrow left","aria-label":"Previous",onClick:prev},"‹"),
        React.createElement("button",{className:"carousel-arrow right","aria-label":"Next",onClick:next},"›")
      ),
      React.createElement("div",{className:"carousel-dots"},
        slides.map(function(_,i){
          var cls="carousel-dot"+(i===idx?" active":"");
          return React.createElement("button",{className:cls,"aria-label":"Slide "+(i+1),onClick:function(){setIdx(i)}})
        })
      )
    );
  }
  function slidesForPath(){
    var p=location.pathname.toLowerCase();
    // Use the main homepage carousel for all pages as per request
    return[
      {
        title:"Advertising Agency in Dubai",
        text:"Elevate your business identity with world-class design and marketing solutions in the heart of Dubai.",
        tags:["BRANDING","ADVERTISING","DESIGN"],
        secondaryHref:"https://wa.me/971545741959",
        secondaryText:"WhatsApp Us",
        // bg removed
        logos: ["/assets/brand/Al-Logo.webp", "/assets/brand/Arasan.webp", "/assets/brand/B2.webp", "/assets/brand/Fishspa.webp", "/assets/brand/NS-Logo.webp", "/assets/brand/Smoke.webp"]
      },
      {
        title:"Professional Printing Services",
        text:"From high-volume offset to quick digital prints, we ensure the sharpest quality for your business stationery.",
        tags:["HIGH QUALITY","DIGITAL","OFFSET"],
        secondaryHref:"https://wa.me/971545741959",
        secondaryText:"View Services",
        // bg removed
        logos: ["/assets/printing/printing-flyer-dtech.webp", "/assets/printing/printing-flyer-xpress.webp", "/assets/printing/printing-chefteck.webp", "/assets/printing/printing-membership-1.webp", "/assets/printing/printing-membership-2.webp", "/assets/printing/printing-ababeel.webp", "/assets/printing/printing-adroit.webp"],

      },
      {
        title:"Indoor & Outdoor Signage",
        text:"Durable and vibrant large format printing, roll-ups, and 3D signage to make your brand stand out in Dubai.",
        tags:["SIGNAGE","BANNERS","3D SIGNS"],
        secondaryHref:"https://wa.me/971545741959",
        secondaryText:"WhatsApp Us",
        // bg removed
        logos: ["/assets/signage/Al-Types-of-printing-01.jpg"]
      },
      {
        title:"Official Company Stamps & Seals",
        text:"Professional self-inking stamps and company seals with next-day delivery across Dubai and the UAE.",
        tags:["RUBBER STAMPS","COMPANY SEALS","URGENT DELIVERY"],
        secondaryHref:"https://wa.me/971545741959",
        secondaryText:"WhatsApp Us",
        // bg removed
        logos: ["/assets/stamps/stamp-ad-1.jpeg", "/assets/stamps/Stamp-Add-1.webp", "/assets/stamps/D-Technoprint-Custom-Rubber-Stamp-01.jpg", "/assets/stamps/Embossing-Seal-01.png", "/assets/stamps/Custom-Rubber-Stamp-1.webp", "/assets/stamps/Stamp-Making-Machine-01.jpg"],

      },
      {
        title:"Customized Corporate Gifting",
        text:"Make a lasting impression with personalized high-end gift sets, customized for your elite clients in the UAE.",
        tags:["GIFTING","PERSONALIZED","PREMIUM"],
        secondaryHref:"https://wa.me/971545741959",
        secondaryText:"WhatsApp Us",
        // bg removed
        logos: ["/assets/promotional/promo-bottles.jpeg", "/assets/promotional/promo-bottles-2.jpeg", "/assets/promotional/promo-bag.jpeg", "/assets/promotional/promo-trophy.jpeg", "/assets/promotional/promo-nameplate.jpeg", "/assets/promotional/promo-mugs.jpeg", "/assets/promotional/promo-badge-1.jpeg", "/assets/promotional/promo-badge-2.jpeg", "/assets/promotional/promo-badge-3.jpeg", "/assets/promotional/promo-badge-wood.jpeg", "/assets/promotional/promo-nameplate-desk.jpeg", "/assets/promotional/promo-badge-metal.jpeg"],

      }
    ];
  }
  function init(){
    ["hero-carousel"].forEach(function(id){
      var mount=document.getElementById(id);
      if(mount){
        // Check if root already exists to avoid warnings/errors if init called twice
        if(!mount._reactRoot){
          mount._reactRoot = ReactDOM.createRoot(mount);
          mount._reactRoot.render(React.createElement(HeroCarousel,{slides:slidesForPath()}));
        }
      }
    });
  }

  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",init);
  } else {
    init();
  }
})(); 

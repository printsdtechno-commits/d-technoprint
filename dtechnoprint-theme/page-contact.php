<?php
/* Template Name: Contact Page */
get_header();
?>

<main>
  <section class="hero hero-dark">
    <div id="hero-carousel"></div>
  </section>

  <div class="ticker-wrap">
    <div class="ticker">
      <div class="ticker-item"><i class="bi bi-star-fill"></i> BUSINESS CARDS</div>
      <div class="ticker-item"><i class="bi bi-star-fill"></i> FLYERS</div>
      <div class="ticker-item"><i class="bi bi-star-fill"></i> SIGNAGE</div>
      <div class="ticker-item"><i class="bi bi-star-fill"></i> ROLL-UP BANNERS</div>
      <div class="ticker-item"><i class="bi bi-star-fill"></i> CORPORATE GIFTS</div>
      <div class="ticker-item"><i class="bi bi-star-fill"></i> PERSONALIZED MUGS</div>
      <div class="ticker-item"><i class="bi bi-star-fill"></i> LOGO DESIGN</div>
      <div class="ticker-item"><i class="bi bi-star-fill"></i> COMPANY SEALS</div>
      <div class="ticker-item"><i class="bi bi-star-fill"></i> ID CARDS</div>
      <!-- Duplicate for seamless scroll -->
      <div class="ticker-item"><i class="bi bi-star-fill"></i> BUSINESS CARDS</div>
      <div class="ticker-item"><i class="bi bi-star-fill"></i> FLYERS</div>
      <div class="ticker-item"><i class="bi bi-star-fill"></i> SIGNAGE</div>
      <div class="ticker-item"><i class="bi bi-star-fill"></i> ROLL-UP BANNERS</div>
      <div class="ticker-item"><i class="bi bi-star-fill"></i> CORPORATE GIFTS</div>
      <div class="ticker-item"><i class="bi bi-star-fill"></i> PERSONALIZED MUGS</div>
      <div class="ticker-item"><i class="bi bi-star-fill"></i> LOGO DESIGN</div>
      <div class="ticker-item"><i class="bi bi-star-fill"></i> COMPANY SEALS</div>
      <div class="ticker-item"><i class="bi bi-star-fill"></i> ID CARDS</div>
    </div>
  </div>

  <section class="section">
    <div class="container">
      <div class="row align-items-center" style="margin-top: 60px; margin-bottom: 60px;">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <h2 class="reveal reveal-left" style="margin-bottom: 30px;">Visit Our Office</h2>
          <div class="reveal reveal-left" style="font-size: 1.1rem;">
             <p style="margin-bottom: 20px;">We are conveniently located in Naif, Dubai. Drop by for a consultation or to see our print samples.</p>
             <ul class="list-unstyled contact-info-list">
               <li class="mb-3 d-flex"><i class="bi bi-geo-alt-fill text-brand me-3 fs-5"></i> <span>54-58 Street 29B – Naif – Dubai</span></li>
               <li class="mb-3 d-flex"><a href="mailto:info@d-technoprint.com" class="text-decoration-none text-body d-flex"><i class="bi bi-envelope-fill text-brand me-3 fs-5"></i> <span>info@d-technoprint.com</span></a></li>
               <li class="mb-3 d-flex"><a href="https://wa.me/971545741959" target="_blank" rel="noopener" class="text-decoration-none text-body d-flex"><i class="bi bi-whatsapp text-brand me-3 fs-5"></i> <span>+971 54 574 1959</span></a></li>
             </ul>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="map-container reveal reveal-right" style="height: 400px; border-radius: 10px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
            <iframe src="https://maps.google.com/maps?q=54-58+Street+29B+Naif+Dubai&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="services">
    <div class="container">
      <h2 class="reveal">Quick Quote Form</h2>
      <div id="contact-form-root"></div>
    </div>
  </section>
</main>

<script src="https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore-compat.js"></script>
<script>
  window.FIREBASE_CONFIG = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
</script>
<script src="<?php echo get_template_directory_uri(); ?>/assets/js/contact-form-react.js"></script>

<?php get_footer(); ?>
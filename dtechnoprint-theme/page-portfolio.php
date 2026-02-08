<?php
/* Template Name: Portfolio Page */
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

  <section class="services">
    <div class="container">
      <h2 class="reveal">Portfolio Highlights</h2>
      <div class="grid grid-3">
        <div class="service-card reveal" data-gallery-item data-title="Corporate Branding" data-desc="Logo design and branding stationery" data-logos="<?php echo get_template_directory_uri(); ?>/assets/images/Al-Logo.webp, <?php echo get_template_directory_uri(); ?>/assets/images/Arasan.webp, <?php echo get_template_directory_uri(); ?>/assets/images/B2.webp, <?php echo get_template_directory_uri(); ?>/assets/images/Fishspa.webp, <?php echo get_template_directory_uri(); ?>/assets/images/NS-Logo.webp, <?php echo get_template_directory_uri(); ?>/assets/images/Smoke.webp">
          <h3>Brand Identity</h3>
          <p>Logos, stationery, guideline snippets.</p>
        </div>
        <div class="service-card reveal" data-gallery-item data-title="Rubber Stamps" data-desc="Custom self-inking and wooden stamps for business" data-logos="<?php echo get_template_directory_uri(); ?>/assets/images/stamp-ad-1.jpeg, <?php echo get_template_directory_uri(); ?>/assets/images/Stamp-Add-1.webp, <?php echo get_template_directory_uri(); ?>/assets/images/D-Technoprint-Custom-Rubber-Stamp-01.jpg, <?php echo get_template_directory_uri(); ?>/assets/images/Embossing-Seal-01.png, <?php echo get_template_directory_uri(); ?>/assets/images/Custom-Rubber-Stamp-1.webp, <?php echo get_template_directory_uri(); ?>/assets/images/Stamp-Making-Machine-01.jpg" data-grid-class="big-gallery">
          <h3>Rubber Stamps</h3>
          <p>Custom self-inking and wooden stamps.</p>
        </div>
        <div class="service-card reveal" data-gallery-item data-title="Signage & Roll-ups" data-desc="Roll-ups, signage, window graphics" data-logos="<?php echo get_template_directory_uri(); ?>/assets/images/Al-Types-of-printing-01.jpg">
          <h3>Signage & Roll-ups</h3>
          <p>Roll-ups, signage, window graphics.</p>
        </div>
        <div class="service-card reveal" data-gallery-item data-title="Promotional Items" data-desc="Corporate gifts, mugs, pens, and customized items" data-logos="<?php echo get_template_directory_uri(); ?>/assets/images/promotional/promo-bottles.jpeg, <?php echo get_template_directory_uri(); ?>/assets/images/promotional/promo-bottles-2.jpeg, <?php echo get_template_directory_uri(); ?>/assets/images/promotional/promo-bag.jpeg, <?php echo get_template_directory_uri(); ?>/assets/images/promotional/promo-trophy.jpeg, <?php echo get_template_directory_uri(); ?>/assets/images/promotional/promo-nameplate.jpeg, <?php echo get_template_directory_uri(); ?>/assets/images/promotional/promo-mugs.jpeg, <?php echo get_template_directory_uri(); ?>/assets/images/promotional/promo-badge-1.jpeg, <?php echo get_template_directory_uri(); ?>/assets/images/promotional/promo-badge-2.jpeg, <?php echo get_template_directory_uri(); ?>/assets/images/promotional/promo-badge-3.jpeg, <?php echo get_template_directory_uri(); ?>/assets/images/promotional/promo-badge-wood.jpeg, <?php echo get_template_directory_uri(); ?>/assets/images/promotional/promo-nameplate-desk.jpeg, <?php echo get_template_directory_uri(); ?>/assets/images/promotional/promo-badge-metal.jpeg" data-grid-class="big-gallery">
          <h3>Promotional Items</h3>
          <p>Corporate gifts, mugs, pens, and customized items.</p>
        </div>
        <div class="service-card reveal" data-gallery-item data-title="Digital & Offset Printing" data-desc="Business cards, flyers, brochures, and catalogs" data-logos="<?php echo get_template_directory_uri(); ?>/assets/images/printing/printing-flyer-dtech.webp, <?php echo get_template_directory_uri(); ?>/assets/images/printing/printing-flyer-xpress.webp, <?php echo get_template_directory_uri(); ?>/assets/images/printing/printing-chefteck.webp, <?php echo get_template_directory_uri(); ?>/assets/images/printing/printing-membership-1.webp, <?php echo get_template_directory_uri(); ?>/assets/images/printing/printing-membership-2.webp, <?php echo get_template_directory_uri(); ?>/assets/images/printing/printing-ababeel.webp, <?php echo get_template_directory_uri(); ?>/assets/images/printing/printing-adroit.webp" data-grid-class="big-gallery">
          <h3>Digital & Offset Printing</h3>
          <p>Business cards, flyers, brochures, and catalogs.</p>
        </div>
      </div>
    </div>
  </section>
</main>

<script src="<?php echo get_template_directory_uri(); ?>/assets/js/gallery.js"></script>

<?php get_footer(); ?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width,initial-scale=1">
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<header class="site-header">
  <div class="container header-inner">
    <a class="logo" href="<?php echo esc_url( home_url( '/' ) ); ?>" aria-label="D-TechnoPrint">
      <img class="logo-img" src="<?php echo get_template_directory_uri(); ?>/assets/images/D-technoprint%20dubai.webp" alt="D-TechnoPrint logo">
    </a>
    <input type="checkbox" id="menu-toggle" class="menu-toggle" aria-label="Toggle navigation">
    <label for="menu-toggle" class="menu-btn" aria-label="Open menu"><i class="bi bi-list"></i></label>
    <nav class="nav">
      <label for="menu-toggle" class="menu-close" aria-label="Close menu"></label>
      <?php
      wp_nav_menu( array(
          'theme_location' => 'primary',
          'container'      => false,
          'items_wrap'     => '%3$s',
          'fallback_cb'    => false,
      ) );
      ?>
      <!-- Fallback links if menu is not set -->
      <?php if ( ! has_nav_menu( 'primary' ) ) : ?>
      <a href="<?php echo home_url('/'); ?>">Home</a>
      <a href="<?php echo home_url('/about'); ?>">About</a>
      <a href="<?php echo home_url('/services'); ?>">Services</a>
      <a href="<?php echo home_url('/portfolio'); ?>">Portfolio</a>
      <a href="<?php echo home_url('/contact'); ?>">Contact</a>
      <?php endif; ?>
    </nav>
    <div class="header-cta">
      <a class="icon-btn" href="https://wa.me/971545741959" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a>
      <a class="icon-btn" href="#" target="_blank" rel="noopener" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
      <a class="icon-btn" href="#" target="_blank" rel="noopener" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
      <a class="icon-btn" href="#" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
    </div>
  </div>
</header>
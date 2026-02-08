<?php
function dtechnoprint_scripts() {
    // Styles
    wp_enqueue_style('bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');
    wp_enqueue_style('bootstrap-icons', 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css');
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
    wp_enqueue_style('main-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_style('custom-style', get_template_directory_uri() . '/assets/css/styles.css');

    // Scripts
    wp_enqueue_script('react', 'https://unpkg.com/react@18/umd/react.production.min.js', array(), null, true);
    wp_enqueue_script('react-dom', 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js', array('react'), null, true);
    wp_enqueue_script('bootstrap-bundle', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js', array(), null, true);
    
    // Custom scripts
    wp_enqueue_script('react-carousel', get_template_directory_uri() . '/assets/js/react-carousel.js', array('react', 'react-dom'), null, true);
    wp_enqueue_script('animations', get_template_directory_uri() . '/assets/js/animations.js', array(), null, true);
    wp_enqueue_script('main-script', get_template_directory_uri() . '/assets/js/script.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'dtechnoprint_scripts');

function dtechnoprint_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'dtechnoprint'),
    ));
}
add_action('after_setup_theme', 'dtechnoprint_setup');
?>
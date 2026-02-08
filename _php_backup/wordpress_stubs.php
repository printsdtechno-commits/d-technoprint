<?php

// Stubs for WordPress functions to silence linter errors in VS Code

if (!function_exists('get_header')) { function get_header($name = null) {} }
if (!function_exists('get_footer')) { function get_footer($name = null) {} }
if (!function_exists('get_template_directory_uri')) { function get_template_directory_uri() { return ''; } }
if (!function_exists('home_url')) { function home_url($path = '', $scheme = null) { return ''; } }
if (!function_exists('wp_head')) { function wp_head() {} }
if (!function_exists('wp_footer')) { function wp_footer() {} }
if (!function_exists('body_class')) { function body_class($class = '') {} }
if (!function_exists('language_attributes')) { function language_attributes($doctype = 'html') {} }
if (!function_exists('bloginfo')) { function bloginfo($show = '') {} }
if (!function_exists('esc_url')) { function esc_url($url, $protocols = null, $_context = 'display') { return $url; } }
if (!function_exists('wp_nav_menu')) { function wp_nav_menu($args = array()) {} }
if (!function_exists('has_nav_menu')) { function has_nav_menu($location) { return false; } }
if (!function_exists('have_posts')) { function have_posts() { return false; } }
if (!function_exists('the_post')) { function the_post() {} }
if (!function_exists('the_content')) { function the_content($more_link_text = null, $strip_teaser = false) {} }
if (!function_exists('wp_enqueue_style')) { function wp_enqueue_style($handle, $src = '', $deps = array(), $ver = false, $media = 'all') {} }
if (!function_exists('wp_enqueue_script')) { function wp_enqueue_script($handle, $src = '', $deps = array(), $ver = false, $in_footer = false) {} }
if (!function_exists('add_action')) { function add_action($tag, $function_to_add, $priority = 10, $accepted_args = 1) {} }
if (!function_exists('add_theme_support')) { function add_theme_support($feature, $args = array()) {} }
if (!function_exists('register_nav_menus')) { function register_nav_menus($locations = array()) {} }
if (!function_exists('__')) { function __($text, $domain = 'default') { return $text; } }

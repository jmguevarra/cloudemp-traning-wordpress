<?php
/**
 * Title: React Root
 * Slug: twentytwentyfive-child/template-react-root
 * Template Types: page
 * Viewport width: 1400
 * Description: Page React Root
 *
 */

    // Enqueue the Webpack-generated JavaScript file
    wp_enqueue_script(
        'child-theme-bundle', 
        get_stylesheet_directory_uri() . '/dist/bundle.js', 
        [], 
        filemtime(get_stylesheet_directory() . '/dist/bundle.js'), 
        true
    );

    // Pass data to React app
    wp_localize_script('child-theme-bundle', 'WPData', [
        'apiUrl' => esc_url(rest_url('/wp/v2')),
        'siteUrl' => esc_url(home_url()),
        'nonce' => wp_create_nonce('wp_rest'),
        'currentPageId' => get_the_ID(),
    ]);
?>

<div id="root"></div>
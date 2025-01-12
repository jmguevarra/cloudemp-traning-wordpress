<?php

//Add scripts
function child_theme_scripts() {
    // Get the child theme directory URI and parent
    $child_theme_uri = get_stylesheet_directory_uri();
    $parent_theme_uri = get_template_directory_uri();

    wp_enqueue_style('parent-style', $parent_theme_uri . '/style.css');
    wp_enqueue_style('child-style', $child_theme_uri . '/style.css', ['parent-style']);

    // Enqueue the Webpack-generated JavaScript file
    wp_enqueue_script(
        'child-theme-bundle', 
        $child_theme_uri . '/dist/bundle.js', 
        [], 
        filemtime(get_stylesheet_directory() . '/dist/bundle.js'), 
        true
    );
}
add_action('wp_enqueue_scripts', 'child_theme_scripts');


//Register a Car custom post
function register_cars_post_type() {
    $args = [
        'labels' => [
            'name' => __('Cars'),
            'singular_name' => __('Car')
        ],
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true,
        'supports' => ['title', 'editor', 'thumbnail', 'custom-fields'],
        'rewrite' => ['slug' => 'cars'],
        'menu_icon' => 'dashicons-car'
    ];

    register_post_type('cars', $args);
}
add_action('init', 'register_cars_post_type');



//Add Dynamic Years in ACF Year Manufacture
add_filter('acf/load_field/name=year_of_manufacture', function ($field) {
    $current_year = date('Y');
    $start_year = 2000; // Adjust this to your starting year

    // Generate an array of years
    $years = [];
    for ($year = $current_year; $year >= $start_year; $year--) {
        $years[] = $year;
    }

    // Assign the years as choices
    $field['choices'] = $years;

    return $field;
});

add_theme_support( 'menus' );
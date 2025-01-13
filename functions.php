<?php

//Add scripts
function child_theme_scripts() {
    // Get the child theme directory URI and parent
    $child_theme_uri = get_stylesheet_directory_uri();
    $parent_theme_uri = get_template_directory_uri();

    wp_enqueue_style('parent-style', $parent_theme_uri . '/style.css');
    wp_enqueue_style('child-style', $child_theme_uri . '/style.css', ['parent-style']);

}
add_action('wp_enqueue_scripts', 'child_theme_scripts');

//add featured post thunbnails in rest
add_action('rest_api_init', function () {
    register_rest_field('cars', 'featured_image_url', [
        'get_callback' => function ($post) {
            $image_id = get_post_thumbnail_id($post['id']);
            $image_url = wp_get_attachment_image_url($image_id, 'full');
            return $image_url ?: '';
        },
        'schema' => null,
    ]);
});



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
        'rest_base' => 'cars',
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


//adding excerpt in rest
add_action('rest_api_init', function () {
    register_rest_field(
        'cars', // Change 'post' to your custom post type slug if needed
        'excerpt',
        [
            'get_callback' => function ($post) {
                // Retrieve the excerpt and shorten it to 20 words
                $excerpt = get_the_excerpt($post['id']);
                return wp_trim_words($excerpt, 15, '...'); // Adjust the number of words and the "more" string
            },
            'schema' => [
                'description' => __('The shortened post excerpt.'),
                'type'        => 'string',
            ],
        ]
    );
});


add_theme_support( 'menus' );
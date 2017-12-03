<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
    <script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
	<?php if ( is_singular() && pings_open( get_queried_object() ) ) : ?>
        <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<?php endif; ?>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
    <div class="site-inner">

        <header id="masthead" class="site-header" role="banner">
            <div class="site-branding">
		        <?php twentysixteen_the_custom_logo(); ?>
            </div>
            <div class="right-nav">
                <a href="">Hamburger</a>
                <a href="">+</a>
            </div>
        </header><!-- .site-header -->

            <div id="content" class="site-content">

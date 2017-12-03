<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link http://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */

$args = array( 'post_type' => 'banners', 'posts_per_page' => 5 );
$loop = new WP_Query( $args );
?>




<div id="site-container">





	<?php get_header();


	?>






	<?php

	$description = get_bloginfo( 'description', 'display' );
	if ( $description || is_customize_preview() ) : ?>
        <p class="site-description"><?php echo $description; ?></p>
	<?php endif; ?>

    <div id="primary" class="content-area">
        <main id="main" class="site-main" role="main">

			<?php if ( have_posts() ) : ?>

				<?php if ( is_home() && ! is_front_page() ) : ?>
                    <header>
                        <h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
                    </header>
				<?php endif; ?>

				<?php
				// Start the loop.

				$args = array( 'numberposts' => '5' );
				$recent_posts = wp_get_recent_posts( $args );
				$post_index = 1;
				?>
				<?php foreach($recent_posts as $post):?>
                    <div id="home-post-<?php echo $post_index;?>-container">
                        <div class="homepage-post" id="home-post-<?php echo $post_index;?>">
	                        <?php echo get_the_post_thumbnail( $post['ID']); ?>
                            <h2 class="post_title"><?php echo $post['post_title'];?></h2>
                        </div>
                    </div>
                    <div class="hidden content">
                        <p><?php echo $post['post_content'];?></p>
                    </div>
				<?php
                    $post_index++;
                    endforeach
                ;?>
                <!--                // If no content, include the "No posts found" template.-->
			<?php else :?>
                //something to show when there's no post
			<?php endif;?>
    </div>

    </main><!-- .site-main -->
</div><!-- .content-area -->

<script>

</script>
</div>

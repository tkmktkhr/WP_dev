<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package fabthemes
 * @since fabthemes 1.0
 */

get_header(); ?>
		

		<div id="primary" class="content-area grid_8">
				<?php get_template_part( 'slider', 'index' ); ?>
			
			<div id="content" class="site-content" role="main">
			<h2 class="section-title"> Latest posts </h2>	
			<?php if ( have_posts() ) : ?>

				<?php /* Start the Loop */ ?>
				<?php while ( have_posts() ) : the_post(); ?>

					
				<article id="post-<?php the_ID(); ?>" <?php post_class('box'); ?>>
					
					<div class="post-image">
						<?php
							$thumb = get_post_thumbnail_id();
							$img_url = wp_get_attachment_url( $thumb,'full' ); //get full URL to image (use "large" or "medium" if the images too big)
							$image = aq_resize( $img_url, 300, 150, true ); //resize & crop the image
						?>
						
						<?php if($image) : ?>
							<a href="<?php the_permalink(); ?>"><img src="<?php echo $image ?>"/></a>
						<?php endif; ?>
						<div class="postdate"> <?php the_time('F j, Y'); ?></div>
					</div>

					<header class="entry-header">
							<h1 class="entry-title"><a href="<?php the_permalink(); ?>" title="<?php echo esc_attr( sprintf( __( 'Permalink to %s', 'fabthemes' ), the_title_attribute( 'echo=0' ) ) ); ?>" rel="bookmark"><?php the_title(); ?></a></h1>
					
					</header><!-- .entry-header -->
					
						
					<div class="entry-summary">
						<?php wpe_excerpt('wpe_excerptlength_index', ''); ?>
					</div><!-- .entry-summary -->
										
				</article><!-- #post-<?php the_ID(); ?> -->


				<?php endwhile; ?>
				<div class="clear"></div>
				<div class="paginate ">
					<?php kriesi_pagination(); ?>
				</div>

			<?php elseif ( current_user_can( 'edit_posts' ) ) : ?>

				<?php get_template_part( 'no-results', 'index' ); ?>

			<?php endif; ?>

			</div><!-- #content .site-content -->
		</div><!-- #primary .content-area -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
<?php
/**
 * The Sidebar containing the main widget areas.
 *
 * @package fabthemes
 * @since fabthemes 1.0
 */
?>
		<div id="secondary" class="widget-area grid_4" role="complementary">
		
			<?php get_template_part( 'tabs' ); ?>			
			<?php if ( ! dynamic_sidebar( 'sidebar-1' ) ) : ?>
			<?php endif; // end sidebar widget area ?>
			<?php get_template_part( 'sponsors' ); ?>
		</div><!-- #secondary .widget-area -->

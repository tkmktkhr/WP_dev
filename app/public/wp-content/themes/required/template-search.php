<?php
/**
 * Template Name: Search Page
 *
 * @package required
 * @since   1.0.0
 */
?>
<?php get_header(); ?>

	<div id="main">

		<article id="post-<?php the_ID(); ?>" class="<?php post_class( ); ?>">

			<header class="animated fadeInDown">
				<h1 class="entry-title"><?php the_title(); ?></h1>
			</header>

			<div class="entry-content">
				<?php the_content(); ?>
			</div><!--/ .entry-content -->

			<div id="big-search" class="clearfix">
				<?php get_search_form(); ?>
			</div><!--/ #big-search -->

			<div id="widget-area" class="clearfix">

				<div class="col1">

						<h2 class="bucket-title"><?php _e( 'Categories', 'required' ); ?></h2>
						<ul>
						<?php
							wp_list_categories(
								array(
									'orderby'    => 'count',
									'order'      => 'DESC',
									'show_count' => 1,
									'title_li'   => '',
									'number'     => 10,
								)
							);
						?>
						</ul>

				</div><!--/.col1 -->

				<div class="col2">
					<?php the_widget( 'WP_Widget_Recent_Posts' ); ?>
				</div><!--/.col2 -->

			</div><!-- /#widget-area -->

		</article><!-- /#post -->

	</div><!-- /#main -->

<?php get_footer(); ?>
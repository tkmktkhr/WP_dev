<?php
/**
 * BizVektor index.php
 *
 * @package BizVektor
 * @version 1.6.0
 */

 get_header();
 $postType = get_post_type();

if ( !$postType ) {
  global $wp_query;
  if ($wp_query->query_vars['post_type']) {
      $postType = $wp_query->query_vars['post_type'];
  }
} ?>
<!-- [ #container ] -->
<div id="container" class="innerBox">
	<!-- [ #content ] -->
	<div id="content" class="content">
	<?php
/*-------------------------------------------*/
/*	Archive title
/*-------------------------------------------*/
	if ( is_year()) {
		// $archiveTitle = get_the_date('Y');
		$archiveTitle = sprintf( __( 'Yearly Archives: %s', 'bizvektor-global-edition' ), get_the_date( _x( 'Y', 'yearly archives date format', 'bizvektor-global-edition' ) ) );
	} else if ( is_month() ) {
		$archiveTitle = sprintf( __( 'Monthly Archives: %s', 'bizvektor-global-edition' ), get_the_date( _x( 'F Y', 'monthly archives date format', 'bizvektor-global-edition' ) ) );
	} else if ( is_category() || is_tax() ) {
		$archiveTitle = single_term_title( '',false);
	} else if ( is_tag() ) {
		$archiveTitle = __('Tags : ', 'bizvektor-global-edition').single_term_title( '',false);
	} else if ( is_author() ) {
		$userObj = get_queried_object();
		$archiveTitle = $userObj->display_name;
	}
	if ( isset($archiveTitle) && $archiveTitle ) {
		$archiveTitle = apply_filters( 'biz_vektor_archiveTitCustom', $archiveTitle );
		echo '<h1 class="contentTitle">'.esc_html( $archiveTitle ).'</h1>';
	}
/*-------------------------------------------*/
/*	Archive description
/*-------------------------------------------*/
	if ( is_category() || is_tax() || is_tag() ) {
		$category_description = term_description();
		$page 				  = get_query_var( 'paged', 0 );
		if ( ! empty( $category_description ) && $page == 0 ) {
			echo '<div class="archive-meta">' . $category_description . '</div>';
		}
	}
	?>
	<?php
/*-------------------------------------------*/
/*	Archive post list
/*-------------------------------------------*/
	?>
	<div class="infoList">
	<?php

	$options = biz_vektor_get_theme_options();

	if (is_biz_vektor_archive_loop()) : ?>

		<?php biz_vektor_archive_loop(); ?>

	<?php elseif ( apply_filters( 'biz_vektor_index_loop_hack', false ) ): ?>

		<?php ///--- doing extra function ---/// ?>

	<?php elseif (file_exists(get_template_directory( ).'/module_loop_'.$post_type.'.php')): ?>
		
		<?php while ( have_posts() ) : the_post(); ?>
		
			<?php get_template_part('module_loop_'.$post_type); ?>
		
		<?php endwhile; ?>

	<?php else : ?>

		<?php $options = biz_vektor_get_theme_options();
		if ( $options['listBlogArchive'] == 'listType_set' ) { ?>
			<?php while ( have_posts() ) : the_post(); ?>
				<?php get_template_part('module_loop_post2'); ?>
			<?php endwhile ?>
		<?php } else { ?>
			<ul class="entryList">
			<?php while ( have_posts() ) : the_post(); ?>
				<?php get_template_part('module_loop_post'); ?>
			<?php endwhile; ?>
			</ul>
		<?php } ?>

	<?php endif; // $postType == 'info' ?>
	<?php biz_vektor_pagination(); ?>
	</div><!-- [ /.infoList ] -->
	</div>
	<!-- [ /#content ] -->

<!-- [ #sideTower ] -->
<div id="sideTower" class="sideTower">
<?php get_sidebar($postType); ?>
</div>
<!-- [ /#sideTower ] -->
<?php biz_vektor_sideTower_after();?>
</div>
<!-- [ /#container ] -->

<?php get_footer(); ?>
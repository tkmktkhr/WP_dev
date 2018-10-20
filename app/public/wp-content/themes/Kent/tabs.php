<div id="tabs">
   <ul class="tabnav">
     <li><a href="#tab-1">Popular</a></li>
     <li><a href="#tab-2">Recent</a></li>
     <li><a href="#tab-3">Random</a></li>
   </ul>

<div id="tab-1" class="ctab">
	  	<ul>
		<?php
		$args = array( 'numberposts' => 5,'orderby' => 'comment_count' );
		$lastposts = get_posts( $args );
		foreach($lastposts as $post) : setup_postdata($post); ?>
			<li class="clearfix"> 
			<?php
				$thumb = get_post_thumbnail_id();
				$img_url = wp_get_attachment_url( $thumb,'full' ); //get full URL to image (use "large" or "medium" if the images too big)
				$image = aq_resize( $img_url, 90, 60, true ); //resize & crop the image
			?>
			
			<?php if($image) : ?>
				<a href="<?php the_permalink(); ?>"><img src="<?php echo $image ?>"/></a>
			<?php endif; ?>
		
			<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
			<span> <?php the_time('F j, Y'); ?></span>
			</li>
			
		<?php endforeach; ?>
		</ul>
</div>

<div id="tab-2" class="ctab">
	 	<ul>
		<?php
		$args = array( 'numberposts' => 5 );
		$lastposts = get_posts( $args );
		foreach($lastposts as $post) : setup_postdata($post); ?>
			<li class="clearfix"> 
			<?php
				$thumb = get_post_thumbnail_id();
				$img_url = wp_get_attachment_url( $thumb,'full' ); //get full URL to image (use "large" or "medium" if the images too big)
				$image = aq_resize( $img_url, 90, 60, true ); //resize & crop the image
			?>
			
			<?php if($image) : ?>
				<a href="<?php the_permalink(); ?>"><img src="<?php echo $image ?>"/></a>
			<?php endif; ?>
		
			<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
			<span> <?php the_time('F j, Y'); ?></span>
			</li>
			
		<?php endforeach; ?>
		</ul>

 </div>

<div id="tab-3" class="ctab"> 
	
	 	<ul>
		<?php
		$args = array( 'numberposts' => 5,'orderby' => 'rand' );
		$lastposts = get_posts( $args );
		foreach($lastposts as $post) : setup_postdata($post); ?>
			<li class="clearfix"> 
			<?php
				$thumb = get_post_thumbnail_id();
				$img_url = wp_get_attachment_url( $thumb,'full' ); //get full URL to image (use "large" or "medium" if the images too big)
				$image = aq_resize( $img_url, 90, 60, true ); //resize & crop the image
			?>
			
			<?php if($image) : ?>
				<a href="<?php the_permalink(); ?>"><img src="<?php echo $image ?>"/></a>
			<?php endif; ?>
		
			<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
			<span> <?php the_time('F j, Y'); ?></span>
			</li>
			
		<?php endforeach; ?>
		</ul>

</div>

</div>
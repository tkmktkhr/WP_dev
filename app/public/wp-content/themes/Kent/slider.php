<div class="feature-box">
	
	<div id="kentslider" class="flexslider">
		<ul class="slides">
		    <?php 	$count = ft_of_get_option('fabthemes_slide_number');
					$slidecat =ft_of_get_option('fabthemes_slide_categories');
					
					$query = new WP_Query( array( 'cat' =>$slidecat,'posts_per_page' =>$count ) );
		           	if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post();	?>
		 	
			 		<li>
			 			
					<?php
						$thumb = get_post_thumbnail_id();
						$img_url = wp_get_attachment_url( $thumb,'full' ); //get full URL to image (use "large" or "medium" if the images too big)
						$image = aq_resize( $img_url, 620, 350, true ); //resize & crop the image
					?>
					
					<?php if($image) : ?>
						<a href="<?php the_permalink(); ?>"><img src="<?php echo $image ?>"/></a>
					<?php endif; ?>
	
					<div class="flex-caption">
						<h2><?php the_title(); ?></h2>   <br>
						<span> <?php the_time('F j, Y'); ?></span>
					</div>
			<?php endwhile; endif; ?>
					    		
		  </li>
		</ul>
	</div>
	
	<div class="kcarcover">
	<div id="kentcarousel" class="flexslider">
		<ul class="slides">
		    <?php 	$count = ft_of_get_option('fabthemes_slide_number');
					$slidecat =ft_of_get_option('fabthemes_slide_categories');
					
					$query = new WP_Query( array( 'cat' =>$slidecat,'posts_per_page' =>$count ) );
		           	if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post();	?>
		 	
			 		<li>
			 			
					<?php
						$thumb = get_post_thumbnail_id();
						$img_url = wp_get_attachment_url( $thumb,'full' ); //get full URL to image (use "large" or "medium" if the images too big)
						$image = aq_resize( $img_url, 140, 100, true ); //resize & crop the image
					?>
					
					<?php if($image) : ?>
						<a href="<?php the_permalink(); ?>"><img src="<?php echo $image ?>"/></a>
					<?php endif; ?>

			<?php endwhile; endif; ?>
					    		
		  </li>
		</ul>
	</div>
	</div>
</div>
jQuery(document).ready(function() {

/* Navigation */

	jQuery('#submenu ul.sfmenu').superfish({ 
		delay:       500,								// 0.1 second delay on mouseout 
		animation:   { opacity:'show',height:'show'},	// fade-in and slide-down animation 
		dropShadows: true								// disable drop shadows 
	});	


/* Flexslider */

 jQuery('#kentcarousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: true,
    itemWidth: 140,
    itemMargin: 20,
    asNavFor: '#kentslider'
  });
   
  jQuery('#kentslider').flexslider({
    animation: "slide",
    controlNav: false,
    directionNav: false,
    animationLoop: false,
    slideshow: true,
    sync: "#kentcarousel"
  });
	 
	 
/* Tabs	  */
	 
jQuery('#tabs div').hide();
jQuery('#tabs div:first').show();
jQuery('#tabs ul.tabnav li:first').addClass('active');
 
jQuery('#tabs ul.tabnav li a').click(function(){
jQuery('#tabs ul.tabnav li').removeClass('active');
jQuery(this).parent().addClass('active');
var currentTab = jQuery(this).attr('href');
jQuery('#tabs div').hide();
jQuery(currentTab).show();
return false;
});
	 
	 
	 
/* Banner claaass */

	jQuery('.squarebanner ul li:nth-child(even)').addClass('rbanner');


	
});
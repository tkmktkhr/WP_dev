jQuery(document).ready(function(){jQuery('#submenu ul.sfmenu').superfish({delay:500,animation:{opacity:'show',height:'show'},dropShadows:true});jQuery('#kentcarousel').flexslider({animation:"slide",controlNav:false,animationLoop:false,slideshow:true,itemWidth:140,itemMargin:20,asNavFor:'#kentslider'});jQuery('#kentslider').flexslider({animation:"slide",controlNav:false,directionNav:false,animationLoop:false,slideshow:true,sync:"#kentcarousel"});jQuery('#tabs div').hide();jQuery('#tabs div:first').show();jQuery('#tabs ul.tabnav li:first').addClass('active');jQuery('#tabs ul.tabnav li a').click(function(){jQuery('#tabs ul.tabnav li').removeClass('active');jQuery(this).parent().addClass('active');var currentTab=jQuery(this).attr('href');jQuery('#tabs div').hide();jQuery(currentTab).show();return false;});jQuery('.squarebanner ul li:nth-child(even)').addClass('rbanner');});
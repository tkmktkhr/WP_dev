jQuery(function(){function e(){return"ontouchstart"in document.documentElement}"undefined"!=typeof Slideout&&jQuery(".pushit").each(function(t,n){var u=new Slideout({panel:jQuery(".page-wrapper")[0],menu:jQuery(n)[0],touch:!1,side:jQuery(n).hasClass("pushit-left")?"left":"right",duration:330}),i=jQuery('.menu-btn[data-menu-target="'+jQuery(n).find("> div").attr("id")+'"]');i.on("click",function(e){e.preventDefault(),u.toggle()}),u.on("open",function(){jQuery(".page-wrapper").one(e()?"touchstart":"click",function(e){e.preventDefault(),e.stopImmediatePropagation(),jQuery(this).hasClass("menu-btn")||u.isOpen()&&u.close()})}),jQuery(".pushit").length>1&&jQuery(this).hasClass("pushit-right")&&(jQuery(".pushit-right").hide(),u.on("close",function(){jQuery(".pushit-right").hide()}),u.on("beforeopen",function(){jQuery(".pushit-right").show()}))})});
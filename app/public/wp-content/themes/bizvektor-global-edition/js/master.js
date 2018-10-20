/*-------------------------------------------*/
/*  編集ガイド
/*-------------------------------------------*/
/*	SNSアイテム関連
/*-------------------------------------------*/
/*	rollover.js
/*-------------------------------------------*/
/*	ページ内するするスクロール
/*-------------------------------------------*/

/*-------------------------------------------*/
/*  編集ガイド
/*-------------------------------------------*/

jQuery('#wp-admin-bar-editGuide .ab-item').click(function(){
			if (!jQuery(this).hasClass('close')){
				var txt = jQuery(this).html();
				jQuery(this).html(txt.replace(/OPEN/,'CLOSE')).addClass('close');
				jQuery('.adminEdit').each(function(i){
					jQuery(this).hide();
				});
				jQuery('.edit-link').each(function(i){
					jQuery(this).hide();
				});
			} else {
				var txt2 = jQuery(this).html();
				jQuery(this).html(txt2.replace(/CLOSE/,'OPEN')).removeClass('close');
				jQuery('.adminEdit').each(function(i){
					jQuery(this).show();
				});
				jQuery('.edit-link').each(function(i){
					jQuery(this).show();
				});
			}
});

/*-------------------------------------------*/
/*	SNSアイテム関連
/*-------------------------------------------*/
likeBoxReSize();
jQuery(window).resize(function(){
	likeBoxReSize();
});
// When load page / window resize
function likeBoxReSize(){
	var i = number;
	jQuery('.fb-like-box').each(function(i){
		var element = jQuery(this).parent().width();
		jQuery(this).attr('data-width',element);
		jQuery(this).children('span:first').css({"width":element});
		jQuery(this).children('span iframe.fb_ltr').css({"width":element});
	});
}
fbCommentReSize();
jQuery(window).resize(function(){
	fbCommentReSize();
});
// When load page / window resize
function fbCommentReSize(){
	var i = number;
	jQuery('.fb-comments').each(function(i){
		var element = jQuery(this).parent().width();
		jQuery(this).attr('data-width',element);
		jQuery(this).children('span:first').css({"width":element});
		jQuery(this).children('span iframe.fb_ltr').css({"width":element});
	});
}

/*-------------------------------------------*/
/*	rollover.js
/*-------------------------------------------*/
var initRollovers = window.onload;
window.onload = function(){
	if (!document.getElementById) return

	var aPreLoad = new Array();
	var sTempSrc;

	var setup = function(aImages) {
		for (var i = 0; i < aImages.length; i++) {
			if (aImages[i].className == 'imgover') {
				var src = aImages[i].getAttribute('src');
				var ftype = src.substring(src.lastIndexOf('.'), src.length);
				var hsrc = src.replace(ftype, '_on'+ftype);

				aImages[i].setAttribute('hsrc', hsrc);

				aPreLoad[i] = new Image();
				aPreLoad[i].src = hsrc;

				aImages[i].onmouseover = function() {
					sTempSrc = this.getAttribute('src');
					this.setAttribute('src', this.getAttribute('hsrc'));
				}

				aImages[i].onmouseout = function() {
					if (!sTempSrc) sTempSrc = this.getAttribute('src').replace('_on'+ftype, ftype);
					this.setAttribute('src', sTempSrc);
				}
			}
		}
	};

	var aImages = document.getElementsByTagName('img');
	setup(aImages);
	var aInputs = document.getElementsByTagName('input');
	setup(aInputs);

	if(initRollovers) {
		initRollovers();
	}
}

// jQuery(document).ready(function(){
// 	jQuery('a img.imgover').hover(function(){
// 		jQuery(this).attr('src').replace('/\.gif/', '/_on\.gif/');
// 		jQuery(this).attr('src').replace('/\.png', '/_on\.png/');
// 		jQuery(this).attr('src').replace('/\.jpg', '/_on\.jpg/');
// 		//jQuery(this).remove();
// 	});
// });

/*-------------------------------------------*/
/*	ページ内するするスクロール
/*-------------------------------------------*/
jQuery(document).ready(function(){
	//
	// <a href="#***">の場合、スクロール処理を追加
	//
	jQuery('a[href*=#]').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var $target = jQuery(this.hash);
			$target = $target.length && $target || jQuery('[name=' + this.hash.slice(1) +']');
			if ($target.length) {
				var targetOffset = $target.offset().top;
				jQuery('html,body').animate({ scrollTop: targetOffset }, 1200, 'quart');
				return false;
			}
		}
	});

});

// Easingの追加
jQuery.easing.quart = function (x, t, b, c, d) {
	return -c * ((t=t/d-1)*t*t*t - 1) + b;
};

/*-------------------------------------------*/
/*
/*-------------------------------------------*/
// jQuery(document).ready(function(){
// 	jQuery('body :first-child').addClass('firstChild');
// 	jQuery('body :last-child').addClass('lastChild');
// 	jQuery('body li:nth-child(odd)').addClass('odd');
// 	jQuery('body li:nth-child(even)').addClass('even');
// });
/*
/*
======================================================================
*  footerFixed.js
 *  
 *  MIT-style license. 
 *  
 *  2007 Kazuma Nishihata [to-R]
 *  http://blog.webcreativepark.net
======================================================================
*/
new function(){
	
	var footerId = "footerSection";
	//メイン
	function footerFixed(){
		//ドキュメントの高さ
		var dh = document.getElementsByTagName("body")[0].clientHeight;
		//フッターのtopからの位置
		document.getElementById(footerId).style.top = "0px";
		var ft = document.getElementById(footerId).offsetTop;
		//フッターの高さ
		var fh = document.getElementById(footerId).offsetHeight;
		//ウィンドウの高さ
		if (window.innerHeight){
			var wh = window.innerHeight;
		}else if(document.documentElement && document.documentElement.clientHeight != 0){
			var wh = document.documentElement.clientHeight;
		}
		if(ft+fh<wh){
			document.getElementById(footerId).style.position = "relative";
			document.getElementById(footerId).style.top = (wh-fh-ft-1)+"px";
		}
	}
	
	//文字サイズ
	function checkFontSize(func){
	
		//判定要素の追加	
		var e = document.createElement("div");
		var s = document.createTextNode("S");
		e.appendChild(s);
		e.style.visibility="hidden"
		e.style.position="absolute"
		e.style.top="0"
		document.body.appendChild(e);
		var defHeight = e.offsetHeight;
		
		//判定関数
		function checkBoxSize(){
			if(defHeight != e.offsetHeight){
				func();
				defHeight= e.offsetHeight;
			}
		}
		setInterval(checkBoxSize,1000)
	}
	
	//イベントリスナー
	function addEvent(elm,listener,fn){
		try{
			elm.addEventListener(listener,fn,false);
		}catch(e){
			elm.attachEvent("on"+listener,fn);
		}
	}

	addEvent(window,"load",footerFixed);
	addEvent(window,"load",function(){
		checkFontSize(footerFixed);
	});
	addEvent(window,"resize",footerFixed);
	
}

/*-------------------------------------------*/
/*	$.changeLetterSize.addHandler(func)
/*	文字の大きさが変化した時に実行する処理を追加
/*-------------------------------------------*/
jQuery("#btn").on("click", function() {
	jQuery(this).next().next().slideToggle();
	jQuery(this).toggleClass("active");
});


/*
 * jQuery FlexSlider v1.8
 * http://www.woothemes.com/flexslider/
 *
 * Copyright 2012 WooThemes
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Contributing Author: Tyler Smith
 */


;(function (jQuery) {
	
	//FlexSlider: Object Instance
	jQuery.flexslider = function(el, options) {
		var slider = jQuery(el);
		
		// slider DOM reference for use outside of the plugin
		jQuery.data(el, "flexslider", slider);

		slider.init = function() {
		slider.vars = jQuery.extend({}, jQuery.flexslider.defaults, options);
		jQuery.data(el, 'flexsliderInit', true);
		slider.container = jQuery('.slides', slider).first();
		slider.slides = jQuery('.slides:first > li', slider);
		slider.count = slider.slides.length;
		slider.animating = false;
		slider.currentSlide = slider.vars.slideToStart;
		slider.animatingTo = slider.currentSlide;
		slider.atEnd = (slider.currentSlide == 0) ? true : false;
		slider.eventType = ('ontouchstart' in document.documentElement) ? 'touchstart' : 'click';
		slider.cloneCount = 0;
		slider.cloneOffset = 0;
		slider.manualPause = false;
		slider.vertical = (slider.vars.slideDirection == "vertical");
		slider.prop = (slider.vertical) ? "top" : "marginLeft";
		slider.args = {};
			
			//Test for webbkit CSS3 Animations
			slider.transitions = "webkitTransition" in document.body.style;
			if (slider.transitions) slider.prop = "-webkit-transform";
			
			//Test for controlsContainer
			if (slider.vars.controlsContainer != "") {
				slider.controlsContainer = jQuery(slider.vars.controlsContainer).eq(jQuery('.slides').index(slider.container));
				slider.containerExists = slider.controlsContainer.length > 0;
			}
			//Test for manualControls
			if (slider.vars.manualControls != "") {
				slider.manualControls = jQuery(slider.vars.manualControls, ((slider.containerExists) ? slider.controlsContainer : slider));
				slider.manualExists = slider.manualControls.length > 0;
			}
			
			///////////////////////////////////////////////////////////////////
			// FlexSlider: Randomize Slides
			if (slider.vars.randomize) {
				slider.slides.sort(function() { return (Math.round(Math.random())-0.5); });
				slider.container.empty().append(slider.slides);
			}
			///////////////////////////////////////////////////////////////////
			
			///////////////////////////////////////////////////////////////////
			// FlexSlider: Slider Animation Initialize
			if (slider.vars.animation.toLowerCase() == "slide") {
				if (slider.transitions) {
					slider.setTransition(0);
				}
				slider.css({"overflow": "hidden"});
				if (slider.vars.animationLoop) {
					slider.cloneCount = 2;
					slider.cloneOffset = 1;
					slider.container.append(slider.slides.filter(':first').clone().addClass('clone')).prepend(slider.slides.filter(':last').clone().addClass('clone'));
				}
				//create newSlides to capture possible clones
		slider.newSlides = jQuery('.slides:first > li', slider);
				var sliderOffset = (-1 * (slider.currentSlide + slider.cloneOffset));
				if (slider.vertical) {
					slider.newSlides.css({"display": "block", "width": "100%", "float": "left"});
					slider.container.height((slider.count + slider.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
					//Timeout function to give browser enough time to get proper height initially
					setTimeout(function() {
						slider.css({"position": "relative"}).height(slider.slides.filter(':first').height());
						slider.args[slider.prop] = (slider.transitions) ? "translate3d(0," + sliderOffset * slider.height() + "px,0)" : sliderOffset * slider.height() + "px";
						slider.container.css(slider.args);
					}, 100);

				} else {
					slider.args[slider.prop] = (slider.transitions) ? "translate3d(" + sliderOffset * slider.width() + "px,0,0)" : sliderOffset * slider.width() + "px";
					slider.container.width((slider.count + slider.cloneCount) * 200 + "%").css(slider.args);
					//Timeout function to give browser enough time to get proper width initially
					setTimeout(function() {
						slider.newSlides.width(slider.width()).css({"float": "left", "display": "block"});
					}, 100);
				}
				
			} else { //Default to fade
				//Not supporting fade CSS3 transitions right now
				slider.transitions = false;
				slider.slides.css({"width": "100%", "float": "left", "marginRight": "-100%"}).eq(slider.currentSlide).fadeIn(slider.vars.animationDuration); 
			}
			///////////////////////////////////////////////////////////////////
			
			///////////////////////////////////////////////////////////////////
			// FlexSlider: Control Nav
			if (slider.vars.controlNav) {
				if (slider.manualExists) {
					slider.controlNav = slider.manualControls;
				} else {
					var controlNavScaffold = jQuery('<ol class="flex-control-nav"></ol>');
					var j = 1;
					for (var i = 0; i < slider.count; i++) {
						controlNavScaffold.append('<li><a>' + j + '</a></li>');
						j++;
					}

					if (slider.containerExists) {
						jQuery(slider.controlsContainer).append(controlNavScaffold);
						slider.controlNav = jQuery('.flex-control-nav li a', slider.controlsContainer);
					} else {
						slider.append(controlNavScaffold);
						slider.controlNav = jQuery('.flex-control-nav li a', slider);
					}
				}

				slider.controlNav.eq(slider.currentSlide).addClass('active');

				slider.controlNav.bind(slider.eventType, function(event) {
					event.preventDefault();
					if (!jQuery(this).hasClass('active')) {
						(slider.controlNav.index(jQuery(this)) > slider.currentSlide) ? slider.direction = "next" : slider.direction = "prev";
						slider.flexAnimate(slider.controlNav.index(jQuery(this)), slider.vars.pauseOnAction);
					}
				});
			}
			///////////////////////////////////////////////////////////////////
			
			//////////////////////////////////////////////////////////////////
			//FlexSlider: Direction Nav
			if (slider.vars.directionNav) {
				var directionNavScaffold = jQuery('<ul class="flex-direction-nav"><li><a class="prev" href="#">' + slider.vars.prevText + '</a></li><li><a class="next" href="#">' + slider.vars.nextText + '</a></li></ul>');
				
				if (slider.containerExists) {
					jQuery(slider.controlsContainer).append(directionNavScaffold);
					slider.directionNav = jQuery('.flex-direction-nav li a', slider.controlsContainer);
				} else {
					slider.append(directionNavScaffold);
					slider.directionNav = jQuery('.flex-direction-nav li a', slider);
				}
				
				//Set initial disable styles if necessary
				if (!slider.vars.animationLoop) {
					if (slider.currentSlide == 0) {
						slider.directionNav.filter('.prev').addClass('disabled');
					} else if (slider.currentSlide == slider.count - 1) {
						slider.directionNav.filter('.next').addClass('disabled');
					}
				}
				
				slider.directionNav.bind(slider.eventType, function(event) {
					event.preventDefault();
					var target = (jQuery(this).hasClass('next')) ? slider.getTarget('next') : slider.getTarget('prev');
					
					if (slider.canAdvance(target)) {
						slider.flexAnimate(target, slider.vars.pauseOnAction);
					}
				});
			}
			//////////////////////////////////////////////////////////////////
			
			//////////////////////////////////////////////////////////////////
			//FlexSlider: Keyboard Nav
			if (slider.vars.keyboardNav && jQuery('ul.slides').length == 1) {
				function keyboardMove(event) {
					if (slider.animating) {
						return;
					} else if (event.keyCode != 39 && event.keyCode != 37){
						return;
					} else {
						if (event.keyCode == 39) {
							var target = slider.getTarget('next');
						} else if (event.keyCode == 37){
							var target = slider.getTarget('prev');
						}
				
						if (slider.canAdvance(target)) {
							slider.flexAnimate(target, slider.vars.pauseOnAction);
						}
					}
				}
				jQuery(document).bind('keyup', keyboardMove);
			}
			//////////////////////////////////////////////////////////////////
			
			///////////////////////////////////////////////////////////////////
			// FlexSlider: Mousewheel interaction
			if (slider.vars.mousewheel) {
				slider.mousewheelEvent = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel";
				slider.bind(slider.mousewheelEvent, function(e) {
					e.preventDefault();
					e = e ? e : window.event;
					var wheelData = e.detail ? e.detail * -1 : e.originalEvent.wheelDelta / 40,
							target = (wheelData < 0) ? slider.getTarget('next') : slider.getTarget('prev');
					
					if (slider.canAdvance(target)) {
						slider.flexAnimate(target, slider.vars.pauseOnAction);
					}
				});
			}
			///////////////////////////////////////////////////////////////////
			
			//////////////////////////////////////////////////////////////////
			//FlexSlider: Slideshow Setup
			if (slider.vars.slideshow) {
				//pauseOnHover
				if (slider.vars.pauseOnHover && slider.vars.slideshow) {
					slider.hover(function() {
						slider.pause();
					}, function() {
						if (!slider.manualPause) {
							slider.resume();
						}
					});
				}

				//Initialize animation
				slider.animatedSlides = setInterval(slider.animateSlides, slider.vars.slideshowSpeed);
			}
			//////////////////////////////////////////////////////////////////
			
			//////////////////////////////////////////////////////////////////
			//FlexSlider: Pause/Play
			if (slider.vars.pausePlay) {
				var pausePlayScaffold = jQuery('<div class="flex-pauseplay"><span></span></div>');
			
				if (slider.containerExists) {
					slider.controlsContainer.append(pausePlayScaffold);
					slider.pausePlay = jQuery('.flex-pauseplay span', slider.controlsContainer);
				} else {
					slider.append(pausePlayScaffold);
					slider.pausePlay = jQuery('.flex-pauseplay span', slider);
				}
				
				var pausePlayState = (slider.vars.slideshow) ? 'pause' : 'play';
				slider.pausePlay.addClass(pausePlayState).text((pausePlayState == 'pause') ? slider.vars.pauseText : slider.vars.playText);
				
				slider.pausePlay.bind(slider.eventType, function(event) {
					event.preventDefault();
					if (jQuery(this).hasClass('pause')) {
						slider.pause();
						slider.manualPause = true;
					} else {
						slider.resume();
						slider.manualPause = false;
					}
				});
			}
			//////////////////////////////////////////////////////////////////
			
			//////////////////////////////////////////////////////////////////
			//FlexSlider:Touch Swip Gestures
			//Some brilliant concepts adapted from the following sources
			//Source: TouchSwipe - http://www.netcu.de/jquery-touchwipe-iphone-ipad-library
			//Source: SwipeJS - http://swipejs.com
			if ('ontouchstart' in document.documentElement) {
				//For brevity, variables are named for x-axis scrolling
				//The variables are then swapped if vertical sliding is applied
				//This reduces redundant code...I think :)
				//If debugging, recognize variables are named for horizontal scrolling
				var startX,
					startY,
					offset,
					cwidth,
					dx,
					startT,
					scrolling = false;
							
				slider.each(function() {
					if ('ontouchstart' in document.documentElement) {
						this.addEventListener('touchstart', onTouchStart, false);
					}
				});
				
				function onTouchStart(e) {
					if (slider.animating) {
						e.preventDefault();
					} else if (e.touches.length == 1) {
						slider.pause();
						cwidth = (slider.vertical) ? slider.height() : slider.width();
						startT = Number(new Date());
						offset = (slider.vertical) ? (slider.currentSlide + slider.cloneOffset) * slider.height() : (slider.currentSlide + slider.cloneOffset) * slider.width();
						startX = (slider.vertical) ? e.touches[0].pageY : e.touches[0].pageX;
						startY = (slider.vertical) ? e.touches[0].pageX : e.touches[0].pageY;
						slider.setTransition(0);

						this.addEventListener('touchmove', onTouchMove, false);
						this.addEventListener('touchend', onTouchEnd, false);
					}
				}

				function onTouchMove(e) {
					dx = (slider.vertical) ? startX - e.touches[0].pageY : startX - e.touches[0].pageX;
					scrolling = (slider.vertical) ? (Math.abs(dx) < Math.abs(e.touches[0].pageX - startY)) : (Math.abs(dx) < Math.abs(e.touches[0].pageY - startY));

					if (!scrolling) {
						e.preventDefault();
						if (slider.vars.animation == "slide" && slider.transitions) {
							if (!slider.vars.animationLoop) {
								dx = dx/((slider.currentSlide == 0 && dx < 0 || slider.currentSlide == slider.count - 1 && dx > 0) ? (Math.abs(dx)/cwidth+2) : 1);
							}
							slider.args[slider.prop] = (slider.vertical) ? "translate3d(0," + (-offset - dx) + "px,0)": "translate3d(" + (-offset - dx) + "px,0,0)";
							slider.container.css(slider.args);
						}
					}
				}
				
				function onTouchEnd(e) {
					slider.animating = false;
					if (slider.animatingTo == slider.currentSlide && !scrolling && !(dx == null)) {
						var target = (dx > 0) ? slider.getTarget('next') : slider.getTarget('prev');
						if (slider.canAdvance(target) && Number(new Date()) - startT < 550 && Math.abs(dx) > 20 || Math.abs(dx) > cwidth/2) {
							slider.flexAnimate(target, slider.vars.pauseOnAction);
						} else {
							slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction);
						}
					}
					
					//Finish the touch by undoing the touch session
					this.removeEventListener('touchmove', onTouchMove, false);
					this.removeEventListener('touchend', onTouchEnd, false);
					startX = null;
					startY = null;
					dx = null;
					offset = null;
				}
			}
			//////////////////////////////////////////////////////////////////
			
			//////////////////////////////////////////////////////////////////
			//FlexSlider: Resize Functions (If necessary)
			if (slider.vars.animation.toLowerCase() == "slide") {
				jQuery(window).resize(function(){
					if (!slider.animating && slider.is(":visible")) {
						if (slider.vertical) {
							slider.height(slider.slides.filter(':first').height());
							slider.args[slider.prop] = (-1 * (slider.currentSlide + slider.cloneOffset))* slider.slides.filter(':first').height() + "px";
							if (slider.transitions) {
								slider.setTransition(0);
								slider.args[slider.prop] = (slider.vertical) ? "translate3d(0," + slider.args[slider.prop] + ",0)" : "translate3d(" + slider.args[slider.prop] + ",0,0)";
							}
							slider.container.css(slider.args);
						} else {
							slider.newSlides.width(slider.width());
							slider.args[slider.prop] = (-1 * (slider.currentSlide + slider.cloneOffset))* slider.width() + "px";
							if (slider.transitions) {
								slider.setTransition(0);
								slider.args[slider.prop] = (slider.vertical) ? "translate3d(0," + slider.args[slider.prop] + ",0)" : "translate3d(" + slider.args[slider.prop] + ",0,0)";
							}
							slider.container.css(slider.args);
						}
					}
				});
			}
			//////////////////////////////////////////////////////////////////
			
			//FlexSlider: start() Callback
			slider.vars.start(slider);
		}
		
		//FlexSlider: Animation Actions
		slider.flexAnimate = function(target, pause) {
			if (!slider.animating && slider.is(":visible")) {
				//Animating flag
				slider.animating = true;
				
				//FlexSlider: before() animation Callback
				slider.animatingTo = target;
				slider.vars.before(slider);
				
				//Optional paramter to pause slider when making an anmiation call
				if (pause) {
					slider.pause();
				}
				
				//Update controlNav   
				if (slider.vars.controlNav) {
					slider.controlNav.removeClass('active').eq(target).addClass('active');
				}
				
				//Is the slider at either end
				slider.atEnd = (target == 0 || target == slider.count - 1) ? true : false;
				if (!slider.vars.animationLoop && slider.vars.directionNav) {
					if (target == 0) {
						slider.directionNav.removeClass('disabled').filter('.prev').addClass('disabled');
					} else if (target == slider.count - 1) {
						slider.directionNav.removeClass('disabled').filter('.next').addClass('disabled');
					} else {
						slider.directionNav.removeClass('disabled');
					}
				}
				
				if (!slider.vars.animationLoop && target == slider.count - 1) {
					slider.pause();
					//FlexSlider: end() of cycle Callback
					slider.vars.end(slider);
				}
				
				if (slider.vars.animation.toLowerCase() == "slide") {
					var dimension = (slider.vertical) ? slider.slides.filter(':first').height() : slider.slides.filter(':first').width();
					
					if (slider.currentSlide == 0 && target == slider.count - 1 && slider.vars.animationLoop && slider.direction != "next") {
						slider.slideString = "0px";
					} else if (slider.currentSlide == slider.count - 1 && target == 0 && slider.vars.animationLoop && slider.direction != "prev") {
						slider.slideString = (-1 * (slider.count + 1)) * dimension + "px";
					} else {
						slider.slideString = (-1 * (target + slider.cloneOffset)) * dimension + "px";
					}
					slider.args[slider.prop] = slider.slideString;

					if (slider.transitions) {
							slider.setTransition(slider.vars.animationDuration); 
							slider.args[slider.prop] = (slider.vertical) ? "translate3d(0," + slider.slideString + ",0)" : "translate3d(" + slider.slideString + ",0,0)";
							slider.container.css(slider.args).one("webkitTransitionEnd transitionend", function(){
								slider.wrapup(dimension);
							});   
					} else {
						slider.container.animate(slider.args, slider.vars.animationDuration, function(){
							slider.wrapup(dimension);
						});
					}
				} else { //Default to Fade
					slider.slides.eq(slider.currentSlide).fadeOut(slider.vars.animationDuration);
					slider.slides.eq(target).fadeIn(slider.vars.animationDuration, function() {
						slider.wrapup();
					});
				}
			}
		}
		
		//FlexSlider: Function to minify redundant animation actions
		slider.wrapup = function(dimension) {
			if (slider.vars.animation == "slide") {
				//Jump the slider if necessary
				if (slider.currentSlide == 0 && slider.animatingTo == slider.count - 1 && slider.vars.animationLoop) {
					slider.args[slider.prop] = (-1 * slider.count) * dimension + "px";
					if (slider.transitions) {
						slider.setTransition(0);
						slider.args[slider.prop] = (slider.vertical) ? "translate3d(0," + slider.args[slider.prop] + ",0)" : "translate3d(" + slider.args[slider.prop] + ",0,0)";
					}
					slider.container.css(slider.args);
				} else if (slider.currentSlide == slider.count - 1 && slider.animatingTo == 0 && slider.vars.animationLoop) {
					slider.args[slider.prop] = -1 * dimension + "px";
					if (slider.transitions) {
						slider.setTransition(0);
						slider.args[slider.prop] = (slider.vertical) ? "translate3d(0," + slider.args[slider.prop] + ",0)" : "translate3d(" + slider.args[slider.prop] + ",0,0)";
					}
					slider.container.css(slider.args);
				}
			}
			slider.animating = false;
			slider.currentSlide = slider.animatingTo;
			//FlexSlider: after() animation Callback
			slider.vars.after(slider);
		}
		
		//FlexSlider: Automatic Slideshow
		slider.animateSlides = function() {
			if (!slider.animating) {
				slider.flexAnimate(slider.getTarget("next"));
			}
		}
		
		//FlexSlider: Automatic Slideshow Pause
		slider.pause = function() {
			clearInterval(slider.animatedSlides);
			if (slider.vars.pausePlay) {
				slider.pausePlay.removeClass('pause').addClass('play').text(slider.vars.playText);
			}
		}
		
		//FlexSlider: Automatic Slideshow Start/Resume
		slider.resume = function() {
			slider.animatedSlides = setInterval(slider.animateSlides, slider.vars.slideshowSpeed);
			if (slider.vars.pausePlay) {
				slider.pausePlay.removeClass('play').addClass('pause').text(slider.vars.pauseText);
			}
		}
		
		//FlexSlider: Helper function for non-looping sliders
		slider.canAdvance = function(target) {
			if (!slider.vars.animationLoop && slider.atEnd) {
				if (slider.currentSlide == 0 && target == slider.count - 1 && slider.direction != "next") {
					return false;
				} else if (slider.currentSlide == slider.count - 1 && target == 0 && slider.direction == "next") {
					return false;
				} else {
					return true;
				}
			} else {
				return true;
			}  
		}
		
		//FlexSlider: Helper function to determine animation target
		slider.getTarget = function(dir) {
			slider.direction = dir;
			if (dir == "next") {
				return (slider.currentSlide == slider.count - 1) ? 0 : slider.currentSlide + 1;
			} else {
				return (slider.currentSlide == 0) ? slider.count - 1 : slider.currentSlide - 1;
			}
		}
		
		//FlexSlider: Helper function to set CSS3 transitions
		slider.setTransition = function(dur) {
			slider.container.css({'-webkit-transition-duration': (dur/1000) + "s"});
		}

		//FlexSlider: Initialize
		slider.init();
	}
	
	//FlexSlider: Default Settings
	jQuery.flexslider.defaults = {
		animation: "fade",              //String: Select your animation type, "fade" or "slide"
		slideDirection: "horizontal",   //String: Select the sliding direction, "horizontal" or "vertical"
		slideshow: true,                //Boolean: Animate slider automatically
		slideshowSpeed: 5000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
		animationDuration: 600,         //Integer: Set the speed of animations, in milliseconds
		directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
		controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
		keyboardNav: true,              //Boolean: Allow slider navigating via keyboard left/right keys
		mousewheel: false,              //Boolean: Allow slider navigating via mousewheel
		prevText: "Previous",           //String: Set the text for the "previous" directionNav item
		nextText: "Next",               //String: Set the text for the "next" directionNav item
		pausePlay: false,               //Boolean: Create pause/play dynamic element
		pauseText: 'Pause',             //String: Set the text for the "pause" pausePlay item
		playText: 'Play',               //String: Set the text for the "play" pausePlay item
		randomize: false,               //Boolean: Randomize slide order
		slideToStart: 0,                //Integer: The slide that the slider should start on. Array notation (0 = first slide)
		animationLoop: true,            //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
		pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
		pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
		controlsContainer: "",          //Selector: Declare which container the navigation elements should be appended too. Default container is the flexSlider element. Example use would be ".flexslider-container", "#container", etc. If the given element is not found, the default action will be taken.
		manualControls: "",             //Selector: Declare custom control navigation. Example would be ".flex-control-nav li" or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
		start: function(){},            //Callback: function(slider) - Fires when the slider loads the first slide
		before: function(){},           //Callback: function(slider) - Fires asynchronously with each slider animation
		after: function(){},            //Callback: function(slider) - Fires after each slider animation completes
		end: function(){}               //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
	}
	
	//FlexSlider: Plugin Function
	jQuery.fn.flexslider = function(options) {
		return this.each(function() {
			if (jQuery(this).find('.slides > li').length == 1) {
				jQuery(this).find('.slides > li').fadeIn(400);
			}
			else if (jQuery(this).data('flexsliderInit') != true) {
				new jQuery.flexslider(this, options);
			}
		});
	}  

})(jQuery);

jQuery('.flexslider').flexslider();
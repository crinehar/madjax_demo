/*-----------------------------------------------------------------------------------*/
/*	CUSTOM FUNCTIONS
/*-----------------------------------------------------------------------------------*/
jQuery.fn.setAllToMaxHeight = function(){
	return this.css({ 'height' : '' }).height( Math.max.apply(this, jQuery.map( this , function(e){ return jQuery(e).height() }) ) );
}
/*-----------------------------------------------------------------------------------*/
/*	DOCUMENT READY JS
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function(){
"use strict";    
	
	var $window = jQuery(window);
	
	jQuery('.full-height').height($window.height());
	jQuery('.service').setAllToMaxHeight();
	jQuery('.team-member .col-md-6').setAllToMaxHeight();
	
	$window.resize(function(){
		jQuery('.service').setAllToMaxHeight();
		jQuery('.full-height').height($window.height());
		jQuery('.team-member .col-md-6').setAllToMaxHeight();
	});
	
	jQuery('#down-link').click(function(){
		var the_ID = jQuery(this).parents('#header-video').next().attr('id');
		jQuery("html, body").animate({ scrollTop: jQuery('#' + the_ID).offset().top - 81 }, 500);
		return false;
	});
	
	jQuery('a[href^="#"]:not([href="#"])').click(function(){
		var url = $(this).attr('href');
		setTimeout(function(){
			jQuery("html, body").animate({ scrollTop: $(url).offset().top - 81 }, 1400);
		}, 400);
		return false;
	});
	
	jQuery('#menu-toggle').click(function(){
		jQuery(this).toggleClass('active');
		jQuery('.top-bar + nav').toggleClass('active');
		return false;
	});
	
	//Videos
	jQuery(".video-container").fitVids();
	
	//Owl Carousel
	jQuery('.owl-carousel').owlCarousel({
		items: 1,
		autoHeight: true,
		lazyLoad: true
	});
	
});

/*-----------------------------------------------------------------------------------*/
/*	AJAX PORTFOLIO
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function($){
'use strict';

	/**
	 * AJAX Portfolio
	 */
	jQuery('body').on('click', '#container a', function(){
		
		jQuery(this).attr('data-ajax-active', 'true');
		
		var url = jQuery(this).attr('href');
		
		jQuery('#loader').isotope( 'remove', jQuery('.item') );
		
		jQuery("html, body").animate({ scrollTop: jQuery('#loader').offset().top - 81 }, 250);
		
		jQuery.get(url, function(data){
			var $data = jQuery(data).filter('.single-portfolio.full');
			
			imagesLoaded( $data, function(){
				
				$data.find('.owl-carousel').owlCarousel({
					items: 1,
					autoHeight: true,
					lazyLoad: true
				});
				
				//Videos
				$data.find(".video-container").fitVids();
				
				jQuery('#loader').prepend( $data ).isotope( 'prepended', $data );
				
				setTimeout(function(){
					jQuery('#loader').isotope('layout');
					jQuery('#loader').css('min-height', '' );
					jQuery(window).trigger('resize');
				}, 600);
				
			});
			
		});
		
		return false;
	});
	
	/**
	 * Close Portfolio
	 */
	jQuery('body').on('click', '#portfolio-close', function(){
		jQuery('#container a').attr('data-ajax-active', '');
		jQuery('#loader').isotope( 'remove', jQuery('.item') ).isotope('layout');
		setTimeout(function(){
			jQuery("html, body").animate({ scrollTop: jQuery('#loader').offset().top - $header.outerHeight() }, 250);
		}, 300);
		return false;
	});
	
	/**
	 * Prev Portfolio
	 */
	jQuery('body').on('click', '#portfolio-prev', function(){
		
		jQuery('#loader').css('min-height', jQuery('#loader').height() );
		var $current = jQuery('#container a[data-ajax-active="true"]'),
			$prev = $current.parent().parent().prev().find('a');
		
		if( $prev.length ){
			$current.attr('data-ajax-active', '');
			$prev.trigger('click');
		} else {
			jQuery('#container a').last().trigger('click');
		}
		
		jQuery('#loader').isotope( 'remove', jQuery('.item') ).isotope('layout');
	
		return false;
		
	});
	
	/**
	 * Next Portfolio
	 */
	jQuery('body').on('click', '#portfolio-next', function(){
		
		jQuery('#loader').css('min-height', jQuery('#loader').height() );
		var $current = jQuery('#container a[data-ajax-active="true"]'),
			$next = $current.parent().parent().next().find('a');
		
		if( $next.length ){
			$current.attr('data-ajax-active', '');
			$next.trigger('click');
		} else {
			jQuery('#container a').first().trigger('click');
		}
		
		jQuery('#loader').isotope( 'remove', jQuery('.item') ).isotope('layout');
	
		return false;
		
	});
	
	/**
	 * Load more functionality
	 */
	jQuery('.load-more-btn').click(function(){
		
		var $this = jQuery(this),
			url = $this.attr('href');
			
		$this.text($this.attr('data-loading'));
		
		jQuery.get(url, function(data){
			var $data = jQuery(data);
			
			imagesLoaded( $data, function(){

				jQuery('#container').append( $data ).isotope( 'appended', $data );
				
				setTimeout(function(){
					jQuery(window).trigger('resize');
					$this.slideUp();
				}, 600);
				
			});
			
		});
		
		return false;
	});
	
});
jQuery(window).load(function($) {
	
	/**
	 * Start Isotope
	 */
	var $container = jQuery('#container');
	$container.isotope({
		itemSelector: '.item'
	});
	
	/**
	 * Isotope Filter Buttons
	 */
	jQuery('#filters a').click(function () {
	
	    jQuery('#filters a').removeClass('active');
	    jQuery(this).addClass('active');
	
	    var selector = jQuery(this).attr('href');
	    jQuery('#container').isotope({
	        filter: selector
	    });
	
	    return false;
	});
	
	/**
	 * Start AJAX Loader Isotope
	 */
	var $container = jQuery('#loader');
	$container.isotope({
		itemSelector: '.item'
	});
});
/*-----------------------------------------------------------------------------------*/
/*	WINDOW READY JS
/*-----------------------------------------------------------------------------------*/
jQuery(window).load(function(){
"use strict"; 
	
	var $window = jQuery(window);
	
	jQuery('.full-height').height($window.height());
	jQuery('.service').setAllToMaxHeight();
	jQuery('.team-member .col-md-6').setAllToMaxHeight();
	
});

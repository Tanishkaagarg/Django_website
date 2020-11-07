jQuery(document).ready( function(){
	
	// accordion
    jQuery('.accordion-box .acc-content').hide();
    jQuery('.accordion-box h2:first').addClass('active').next().show();
    jQuery('.accordion-box h2').click(function(){
        if( jQuery(this).next().is(':hidden') ) {
            jQuery('.accordion-box h2').removeClass('active').next().slideUp();
            jQuery(this).toggleClass('active').next().slideDown();
        }
        return false; // Prevent the browser jump to the link anchor
    });
	
	// Tabs
	jQuery('ul.tabs > br').remove();
	jQuery('.tabs-wrapper').append(jQuery('.tabs li div'));
	jQuery('.tabs li:first a').addClass('defaulttab selected');
	jQuery('.tabs a').click(function(){
		switch_tabs(jQuery(this));
	});
	switch_tabs(jQuery('.defaulttab'));
	function switch_tabs(obj) {
		jQuery('.tab-content').hide();
		jQuery('.tabs a').removeClass("selected");
		var id = obj.attr("rel");
		jQuery('#'+id).show();
		obj.addClass("selected");
	}

	// Content Toggle
    jQuery(".slide_toggle_content").hide();
    jQuery("h3.slide_toggle").toggle(function(){
	    jQuery(this).addClass("clicked");
	}, function () {
	    jQuery(this).removeClass("clicked");
    });
    jQuery("h3.slide_toggle").click(function(){
		jQuery(this).next(".slide_toggle_content").slideToggle();
    });

});


// Testimonials
jQuery(document).ready(function() { 
   jQuery('#testimonials .quotes').quovolver({
      children    : 'div',
      standardionSpeed : 600,
      autoPlay    : true,
	  autoPlaySpeed:6000,
      equalHeight   : false,
      navPosition   : 'below',
      navPrev     : true,
      navNext     : true,
      navNum      : true,
      navText     : false,
      navTextContent  : 'Quote @a of @b'
    });
   
   
  jQuery('.owl-carousel').owlCarousel({
    loop:true,
	autoplay:true,
    margin:20,
    nav:false,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
		768:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

});
  


// NAVIGATION CALLBACK
var ww = jQuery(window).width();
jQuery(document).ready(function() { 
	jQuery(".sitenav li a").each(function() {
		if (jQuery(this).next().length > 0) {
			jQuery(this).addClass("parent");
		};
	})
	jQuery(".toggleMenu").click(function(e) { 
		e.preventDefault();
		jQuery(this).toggleClass("active");
		jQuery(".sitenav").slideToggle('fast');
	});
	adjustMenu();
})

// navigation orientation resize callbak
jQuery(window).bind('resize orientationchange', function() {
	ww = jQuery(window).width();
	adjustMenu();
});

var adjustMenu = function() {
	if (ww < 981) {
		jQuery(".toggleMenu").css("display", "block");
		if (!jQuery(".toggleMenu").hasClass("active")) {
			jQuery(".sitenav").hide();
		} else {
			jQuery(".sitenav").show();
		}
		jQuery(".sitenav li").unbind('mouseenter mouseleave');
	} else {
		jQuery(".toggleMenu").css("display", "none");
		jQuery(".sitenav").show();
		jQuery(".sitenav li").removeClass("hover");
		jQuery(".sitenav li a").unbind('click');
		jQuery(".sitenav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
			jQuery(this).toggleClass('hover');
		});
	}
}


jQuery(document).ready(function(){
	// hide #back-top first
	jQuery("#back-top").hide();	
	// fade in #back-top
	jQuery(function () {
		jQuery(window).scroll(function () {
			if (jQuery(this).scrollTop() > 50) {
				jQuery('#back-top').fadeIn();
			} else {
				jQuery('#back-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		jQuery('#back-top').click(function () {
			jQuery('body,html').animate({
				scrollTop: 50
			}, 800);
			return false;
		});
	});

});


//Client Logo jquery   
jQuery(window).load(function() { 
    jQuery("#flexiselDemo3").flexisel({
        visibleItems: 6,
        animationSpeed: 1000,
        autoPlay: true,
        autoPlaySpeed: 3000,            
        pauseOnHover: true,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: { 
            portrait: { 
                changePoint:480,
                visibleItems: 1
            }, 
            landscape: { 
                changePoint:640,
                visibleItems: 2
            },
            tablet: { 
                changePoint:768,
                visibleItems: 2
            },
			tab: {
				changePoint:1169,
				visibleItems: 4
			}
        }
    });    
});

//Counter jquery
jQuery(document).ready(function(  ) {
        jQuery('.counter').counterUp({
            delay: 10,
            time: 1000
   });
});

//Portfolio Fancybox Gallery
jQuery(document).ready(function() {
	jQuery('#mixitup').mixitup({
		animation: {
		  effects: 'fade rotateZ(-180deg)', /* fade scale */
		  duration: 700 /* 600 */
		},
	});
});  

jQuery(document).ready(function(){
  jQuery('[data-fancybox]').fancybox({
    loop : true,
    protect: true,
    thumbs : {
      autoStart   : true,                  // Display thumbnails on opening
      hideOnClose : true,                   // Hide thumbnail grid when closing animation starts
      parentEl    : '.fancybox-container',  // Container is injected into this element
      axis        : 'y'                     // Vertical (y) or horizontal (x) scrolling
    },
    transitionEffect : "circular",
    transitionDuration : 1000,
  });
});

// skill bar script
jQuery(document).ready(function() {
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});

// Remove empty p tag
jQuery(document).ready( function() {
  jQuery('p:empty').remove();
});
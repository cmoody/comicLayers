$(function() {

	"user strict";

	var $container = $('#slideshow-inner img');
	var $layers = $('.layers');
	var $panel = $('.panel');
	var is_skewed = false;

	$layers.on('click', function(e) {
		e.preventDefault();

		$panel.removeClass('offscreen');

		if(is_skewed) {
			$panel.removeClass('skewed');
			is_skewed = false;
		}else{
			$panel.addClass('skewed');
			is_skewed = true;
		}
	});

	$container.hammer().on("swipeleft", function() {
	    //console.log('you swiped left!');

	    changePanel('left');
	});

	$container.hammer().on("swiperight", function() {
	    //console.log('you swiped right!');

	    changePanel('right');
	});

	$panel.hammer().on("tap", function(event) {
		if(is_skewed) {
        	// Make this better for all after selected
        	is_skewed = false;

        	$('.active').removeClass('active');
        	$('.skewed').removeClass('skewed');

        	$(this)
        		.addClass('active')
        		.next()
        		.addClass('offscreen')
        		.next()
        		.addClass('offscreen');
        }
    });

	// Clean up logic to scale
    function changePanel(direction) {
    	if(direction === 'right') {
    		// Swipe Right
    		if(!$('#slide1').hasClass('active')) {
		    	$('.active')
			    	.addClass('offscreen')
			    	.removeClass('active')
			    	.prev()
			    	.addClass('active');
			}
		}else if(direction === 'left') {
    		// Swipe Left
    		if(!$('#slide3').hasClass('active')) {
	    		$('.active')
			    	.removeClass('active')
			    	.next()
			    	.addClass('active')
			    	.removeClass('offscreen');
			}
    	}
    }
});
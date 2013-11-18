$(function() {

	"user strict";

	var $container = $('#slideshow-inner img');
	var $layers = $('.layers');
	var $panel = $('.panel');

	$layers.on('click', function(e) {
		e.preventDefault();

		// var is_skewed = $pencil.hasClass('skewed');

		// if(is_skewed) {
		// 	$panel.removeClass('skewed');
		// }else{
		// 	$panel.addClass('skewed');
		// }

		// Remove all .offscreen
		// Add skewed class

		//$('#slideshow-inner ul').addClass('skew-list');
		$panel
			.removeClass('offscreen')
			.addClass('skewed');
	});

	$container.hammer().on("swipeleft", function() {
	    console.log('you swiped left!');

	    // Figure out logic to add .offscreen class
	    // Select active
	    // Add offscreen
	    // Remove active
	    // Grab parent and add active
	    $('.active')
	    	.addClass('offscreen')
	    	.removeClass('active')
	    	.prev()
	    	.addClass('active');

	    // Maybe make switch
	    // if(active === pencil)
	    //
	    // else if(active === ink)
	    //
	    // else if(active === color)
	    //
	});

	$container.hammer().on("swiperight", function() {
	    console.log('you swiped right!');

	    $('.active')
	    	.addClass('offscreen')
	    	.removeClass('active')
	    	.prev()
	    	.addClass('active');
	});

	$panel.hammer().on("tap", function(event) {
        console.log('tap ' + this);
    });

    function changePanel() {

    }
});
$(function(){
	$('.prev').hammer().on("tap", function(event) {
		console.log("Going Previous!");
    });

    $('.next').hammer().on("tap", function(event) {
		console.log("Going Next!");
    });

    $('.settings').hammer().on("tap", function(event) {
		console.log("Settings!");
    });

    $('.navigation').hammer().on("swipedown", function() {
	    console.log("You swiped down!");
	});

	$('.navigation').hammer({
		swipe_max_touches: 2
	}).on("swipedown", function() {
	    console.log("You swiped with 2 fingers!");
	});

});
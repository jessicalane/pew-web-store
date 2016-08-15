$(document).ready(function() {

// Mobile navigation functions for scrolling/clicking
	function mobileNav() {

		$(document).on('click', function() {
			$('.collapse').collapse('hide');
		});

		$(document).on('scroll', function() {
			$('.collapse').collapse('hide');
		});
	}

	mobileNav();

//Testing screen size
	function screenSize() {
		if ($(document).width() <= 1000) {
			console.log("yay");
		} else {
			console.log("fuck yay");
		};
	}

	screenSize();

});
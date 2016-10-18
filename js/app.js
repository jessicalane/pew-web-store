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

//Menu config for mobile
	function mobileConfig() {
		if ($(document).width() <= 1000) {
			$('.final').hide();
			$('.secondlayer').addClass('disabled');
		} else {
			console.log("working");
		};
	}

	mobileConfig();

});
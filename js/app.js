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

});
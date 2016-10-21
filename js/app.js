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

//Item List Category Auto-Heights
	function catItemHeights() {
		var elementHeights = $('.cat-items').map(function() {
			return $(this).height();
		}).get();

		var maxHeight = Math.max.apply(null, elementHeights);

		$('.cat-items').height(maxHeight);
	}

	catItemHeights();

//Related Items Auto-Heights
	function relatedItemHeights() {
		var elementHeights = $('.related-items').map(function() {
			return $(this).height();
		}).get();

		var maxHeight = Math.max.apply(null, elementHeights);

		$('.related-items').height(maxHeight);
	}

	relatedItemHeights();


});
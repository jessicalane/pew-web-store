 $(document).ready(function() {

// Mobile navigation functions for scrolling/clicking
	// function mobileNav() {

	// 	// $(document).on('click', function() {
	// 	// 	$('.collapse').collapse('hide');
	// 	// });

	// 	$(document).on('scroll', function() {
	// 		$('.collapse').collapse('hide');
	// 	});
	// }

	// mobileNav();

//Menu config for mobile
	function mobileConfig() {
		if ($(document).width() <= 1000) {
			$('.final').hide();
			$('.secondlayer').addClass('disabled');
		} 
	}

	mobileConfig();

//Item List Category Auto-Heights
	function catItemHeights() {
		var elementHeights = $('.cat-items').map(function() {
			return $(this).height();
		}).get();

		var maxHeight = (Math.max.apply(null, elementHeights)) + 10;

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

//Register Login Styling Override
	function loginStyle() {
		$('a:contains("Register")').addClass("register-link");
		$('.smalltext:contains("Log")').addClass("login-link");
	}

	loginStyle();

//Centering Images on Drilldown Template

	function centerImageDrilldown() {
		var imgHeight = $('#item-img').height();
		var marginVariance = (300 - imgHeight) / 2;

		if(imgHeight < 300) {
			$('#item-img').css('margin-top', marginVariance);
		}
		
	}

	centerImageDrilldown();


//Remove NetSuite unnecessary stylesheet

	function removeStylesheet() {
		$('link[rel=stylesheet][href="http://store.pewabic.co/core/styles/pagestyles.nl?ct=72&bglt=E9E9F1&bgmd=A7A7BE&bgdk=6F6F80&bgon=414181&bgoff=B6B6CE&bgbar=C6C6D7&tasktitletext=000000&crumbtext=000000&headertext=000000&ontab=FFFFFF&offtab=000000&text=000000&link=000000&bgbody=FFFFFF&bghead=FFFFFF&portlet=C6C6D7&portletlabel=000000&bgbutton=D2D2C8&bgrequiredfld=FFFFE5&font=Arial%2CHelvetica%2Csans-serif&size_site_content=9pt&size_site_title=9pt&size=1.0&nlinputstyles=T&accessibility=F&NS_VER=2016.2.0"]').remove();
	}

	removeStylesheet();

//Styling for 'No Results Found'
	function noResultsStyle() {
		$('p:contains("No items found.")').addClass("search-results");
	}

	noResultsStyle();

//Removing Menu from Cart

	function cartMenu() {
		if (window.location.href.indexOf("checkout") > -1) {
   			$('#pewabic-navigation').css('display', 'none');
   			$('link[rel=stylesheet][href="https://checkout.na2.netsuite.com/site/css/bootstrap.css"]').remove();
   			$('#checkout-pewabic-navigation').css('display', 'inline-block');
		}
	}	

	cartMenu();

});
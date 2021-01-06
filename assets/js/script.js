(function ($) {
	$(document).ready(function() {
		   preloaderCheck();
	});	


		function showPreloader() {
		  $("#preloader").fadeIn("slow");
			console.log('offcanvas beforeshow 1');
		}

		function hidePreloader() {
		  $("#preloader").delay(1000).fadeOut("slow");
		  console.log('offcanvas beforeshow 2');
		}

		function preloaderCheck() {
			showPreloader();
			$(window).load(function() {
				hidePreloader();
				console.log('offcanvas beforeshow 3');
			});
		}

})(jQuery);


UIkit.util.on('#offcanvas-nav-primary', 'beforeshow', function () {
  // do something
  console.log('offcanvas beforeshow');
});

UIkit.util.on('#offcanvas-nav-primary', 'show', function () {
  // do something
  console.log('offcanvas show');
});

UIkit.util.on('#offcanvas-nav-primary', 'shown', function () {
  // do something
  console.log('offcanvas shown');
});

UIkit.util.on('#offcanvas-nav-primary', 'beforehide', function () {
  // do something
  console.log('offcanvas beforehide');
});

UIkit.util.on('#offcanvas-nav-primary', 'hide', function () {
  // do something
  console.log('offcanvas hide');
});

UIkit.util.on('#offcanvas-nav-primary', 'hidden', function () {
  // do something
  console.log('offcanvas hidden');
});






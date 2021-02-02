(function ($) {
	$(document).ready(function() {
		   preloaderCheck();
	});	


		function showPreloader() {
		  $("#preloader").fadeIn("slow");
			console.log('offcanvas beforeshow 1');
		}

		function hidePreloader() {
		  $("#preloader").delay(400).fadeOut("slow");
		  console.log('offcanvas beforeshow 2');
		}

		function preloaderCheck() {
			showPreloader();
			$(document).ready(function() {
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

(function($) { "use strict";

		
	$(document).ready(function(){"use strict";
	
		//Scroll back to top
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
		
	});
	
})(jQuery); 





$(document).ready(function(){
	var dl = $('.dilivery');

	$('.open-dilivery').click(function(){
		dl.addClass('modal-view-active');
	});

	$('.order-buy-open').click(function(){
		$('.order-buy').addClass('modal-view-active');
	});



	$('.modal-close').click(function(){
		$('.modal-view-active').removeClass('modal-view-active');
	});

	$('.modal-close-wrap').click(function(){
		$('.modal-view-active').removeClass('modal-view-active');
	});


	$('.slide').click(function(){
		if($(this).hasClass('slide-active')){
			return 0;
		}

		$('.slide-active').removeClass('slide-active');

		$(this).addClass('slide-active');

		var bg = $(this).css('background-image');

		$('.res-slider').addClass('res-slider-tr');

		var refreshId = setInterval(function() {
		  if ($('.res-slider').css('opacity') == 0) {

		  	$('.res-slider').css('background-image', bg); 
			$('.res-slider-tr').removeClass('res-slider-tr');		    
		    clearInterval(refreshId);

		  }
		}, 100);
	});

});


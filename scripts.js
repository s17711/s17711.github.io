$(document).ready(function(){
	var image = new Image();
	image.src = "image/bg1-1920x1080.jpg";

	image.onload = function(){
		var node = document.querySelector('.startboardBg');
		node.style.opacity = '1';
	}


	var dl = $('.dilivery');

	$('.open-dilivery').click(function(){
		dl.addClass('modal-view-active');
	});

	$('.order-buy-open').click(function(){
		$('.order-buy-s').addClass('modal-view-active');
	});

	$('.phone-box-open').click(function(){

		if($('.phone-box-open').hasClass('phone-box-open-active')){
			
			$('.phone-box-open').removeClass('phone-box-open-active');
			$('.modal-view-active').removeClass('modal-view-active');

		} else {
			
			$('.phone-box-open').addClass('phone-box-open-active');
			$('.phone-box').addClass('modal-view-active');
		}
	});


	$('.phone-box-close').click(function(){
		if($('.phone-box-open').hasClass('phone-box-open-active'))
			$('.phone-box-open').removeClass('phone-box-open-active');
	});

	$('.phone-s-open').click(function(){
		$('.phone-s').addClass('modal-view-active');
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


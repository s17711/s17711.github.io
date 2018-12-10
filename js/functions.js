var sliderMove = true;
var canSlide = true;

$(document).on('mousewheel DOMMouseScroll', '.container', function(event){
	if(!canSlide)
		return 0;

	canSlide = false;

	var wheel = event.deltaY || event.detail;
	var navActive = $('.side-nav--list-active');
	var slideActive = $('.slide--active');

	if(wheel > 0){
		if(navActive.index() == navActive.parent().children().length - 1){
			navActive.removeClass('side-nav--list-active')
				.parent()
				.children()
				.eq(0)
				.addClass('side-nav--list-active');
			slideActive.removeClass('slide--active');
			
			setTimeout(function(){
				removeNextPrev();

				slideActive.removeClass('slide--active')
					.parent()
					.children()
					.eq(0)
					.addClass('slide--active');

				canSlide = true;
			}, 400);

		} else {
			navActive.removeClass('side-nav--list-active').next().addClass('side-nav--list-active');
			slideActive.removeClass('slide--active').addClass('slide--next');

			setTimeout(function(){
				removeNextPrev();
				
				slideActive.next().addClass('slide--active');

				canSlide = true;
			}, 400);
		}
	} else {
		if(navActive.index() == 0){
			navActive.removeClass('side-nav--list-active')
				.parent()
				.children()
				.eq(navActive.parent().children().length - 1)
				.addClass('side-nav--list-active');

			slideActive.removeClass('slide--active');

			setTimeout(function(){
				removeNextPrev();

				slideActive.removeClass('slide--active')
					.parent()
					.children()
					.eq(navActive.parent().children().length - 1)
					.addClass('slide--active');

				canSlide = true;
			}, 400);
		} else {
			navActive.removeClass('side-nav--list-active').prev().addClass('side-nav--list-active');
			slideActive.removeClass('slide--active').addClass('slide--prev');

			setTimeout(function(){
				removeNextPrev();
				
				slideActive.prev().addClass('slide--active');

				canSlide = true;
			}, 400);
		}
	}

});

function removeNextPrev(){
	if($('.slide').hasClass('slide--next')){
		$('.slide--next').removeClass('slide--next');
	} else if($('.slide').hasClass('slide--prev')){
		$('.slide--prev').removeClass('slide--prev');
	}
}

$(document).on('click', '.slide-but-left, .slide-but-right', function(event){
	if(!sliderMove){
		return 0;
	}

	sliderMove = false;

	var cont = $('.slider-list');
	var leftout = $('.slider-el--left-out');
	var left = $('.slider-el--left');
	var center = $('.slider-el--center');
	var right = $('.slider-el--right');
	var rightout = $('.slider-el--right-out');

	var leftHtml = left.html();
	var rightHtml = right.html();
	var centerHtml = center.html();
	
	leftout.html(rightHtml);
	rightout.html(leftHtml);

	if($(event.currentTarget).hasClass('slide-but-left')){
		leftout.remove();
		left.addClass('slider-el--left-out').removeClass('slider-el--left');
		center.addClass('slider-el--left').removeClass('slider-el--center');
		right.addClass('slider-el--center').removeClass('slider-el--right');
		rightout.addClass('slider-el--right').removeClass('slider-el--right-out');

		cont.prepend('<li class="slider-el slider-el--right-out"></li>');
		$('.slider-el--right-out').html(centerHtml);

	} else {
		rightout.remove();
		leftout.addClass('slider-el--left').removeClass('slider-el--left-out');
		left.addClass('slider-el--center').removeClass('slider-el--left');
		center.addClass('slider-el--right').removeClass('slider-el--center');
		right.addClass('slider-el--right-out').removeClass('slider-el--right');

		cont.append('<li class="slider-el slider-el--left-out"></li>');
		$('.slider-el--left-out').html(centerHtml);
	}

	setTimeout(function(){
		sliderMove = true;
	}, 500);
});

$(document).on('click', '.side-nav > li', function(event){
	if($(event.currentTarget).hasClass('side-nav--list-active') || !canSlide){
		return 0;
	}

	canSlide = false;


	if($(event.currentTarget).index() > $('.side-nav--list-active').index()){
		$('.slide--active').addClass('slide--next').removeClass('slide--active');
	} else {
		$('.slide--active').addClass('slide--prev').removeClass('slide--active');
	}
	
	setTimeout(function(){
		removeNextPrev();

		document.querySelectorAll('.slide')[$(event.currentTarget).index()].classList.add("slide--active");
		canSlide = true;
	},400);

	$('.side-nav--list-active').removeClass('side-nav--list-active');
	$(event.currentTarget).addClass('side-nav--list-active');
});

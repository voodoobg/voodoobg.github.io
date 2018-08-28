$(document).ready(function(){
	showElems();
	
//	var hash = window.location.hash.substr(1);
//	console.log(hash)
//	$('html,body').animate({scrollTop: $('#'+hash).offset().top - 100});
	
	$('.dropDownButtonHolder').click(function(){
		$(this).find('.moreInfoHolder').slideToggle();
	});
	
	$('.menuButton').click(function(){
		if($(this).hasClass('menuOpen')){
			$('#headerWrapp').slideDown();
			$(this).hide();
			$('.menuButton.menuClose').show();
		}else{
			$('#headerWrapp').slideUp();
			$(this).hide();
			$('.menuButton.menuOpen').show();
		}
	});
	
	$('.menusContainer a').click(function(){
		$('#headerWrapp').hide();
		var aTag = $(this).attr('href');
		$('.menuButton.menuOpen').show();
	    $('html,body').animate({scrollTop: $(aTag).offset().top - 100},'slow');
	});
	
	$('.eventsSliderHolder').slick({
		arrows: true,
		nextArrow: $('.rightArrow'),
		prevArrow: $('.leftArrow'),
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		fade: true,
	});
	$('.CertCourseOneSlideBoxHolder').slick({
		arrows: true,
		nextArrow: $('.rightArrowCertCourseOne'),
		prevArrow: $('.leftArrowCertCourseOne'),
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		//autoplaySpeed: 3000,
		fade: true,
	});
	$('.CertCourseTwoSlideBoxHolder').slick({
		arrows: true,
		nextArrow: $('.rightArrowCertCourseTwo'),
		prevArrow: $('.leftArrowCertCourseTwo'),
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		//autoplaySpeed: 3000,
		fade: true,
	});
	$('.JustCourseOneSlideBoxHolder').slick({
		arrows: true,
		nextArrow: $('.rightArrowJustCourseOne'),
		prevArrow: $('.leftArrowJustCourseOne'),
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		//autoplaySpeed: 3000,
		fade: true,
	});
	$('.JustCourseTwoSlideBoxHolder').slick({
		arrows: true,
		nextArrow: $('.rightArrowJustCourseTwo'),
		prevArrow: $('.leftArrowJustCourseTwo'),
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		//autoplaySpeed: 3000,
		fade: true,
	});
	$('.testimonialsSliderHolder').slick({
		  infinite: true,
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  //nextArrow: $('.nextArrow'),
		  //prevArrow: $('.previousArrow'),
		  autoplay: true,
		  autoplaySpeed: 4000,
		  responsive: [
			
					{
					  breakpoint: 1024,
					  settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					  }
					},
					{
					  breakpoint: 796,
					  settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					  }
					}
					// You can unslick at a given breakpoint now by adding:
					// settings: "unslick"
					// instead of a settings object
				  ]
	});
});
function showElems(){
	if ($('.animatedContainer').visible(true,true)){
		 var time = 0;
	 	 $('.animatedContainer').each(function() {                 
	 	     var $this  = $(this);
	 	     var animation= $(this).attr('data-animation');
	 	     function delayed() {
	 	    	 $this.addClass('animated ' + animation);
	 	     }
	 	     setTimeout( delayed , time );
	 	     time += 100;
	 	 });
 	 }
} 


$(window).scroll(function() {
	if( $(window).scrollTop() > 2 ) {
        $('.sticky').addClass('fixedMenu');
        $('.menuLogo').removeClass('hidden');
	} else {
		$('.sticky').removeClass('fixedMenu');
		$('.menuLogo').addClass('hidden');
	}
	
	showElems();
});

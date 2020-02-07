$(document).ready(function() {

	
	var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    loop: true,
    slidesPerView: 1,
    navigation: {
    		nextEl: '.arrow',
  		},
  	breakpoints: {
  		576: {
  			slidesPerView: 2
  		}
  	}
	});

	
});
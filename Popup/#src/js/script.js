
//Slick-Slider
$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});



	jQuery(document).ready(function($){
		$('#popup').fadeOut(); //скрываем кнопку
	$(window).scroll(function () {
if ($(this).scrollTop() > 200) { // при прокрутке страницы на 200 пикселей вниз
		$('#popup').fadeIn();   // отображаем кнопку
} else {
		$('#popup').fadeOut(); // в противном случае скрываем
}
});
});

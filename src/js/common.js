'use strict';

$(document).ready(function() {
	// Слайдеры
	$('.path__tabs')
		.slick({
			arrows: false,
			dots: false,
			infinite: false,
			focusOnSelect: true,
			lazyLoad: 'ondemand',
			responsive: [
				{
					breakpoint: 10000,
					settings: 'unslick' // destroys slick
				}, {
					breakpoint: 1024,
					settings: {
						slidesToShow: 1,
						variableWidth: true
					}
				}
			]
		});
});

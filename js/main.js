$(document).ready(function () {

	$('.icon-menu').click(function (event) {
		$(this).toggleClass('active');
		$('.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
		$('.menu__list').removeClass('menu__list-left');
		$('.menu__tel').removeClass('menu__tel-left');
		$('.menu__call').removeClass('menu__call-left');
		$('.fall-menu').removeClass('active');
	});

	$('.menu__link--f').on('click', function (event) {
		event.preventDefault();

		$('.fall-menu').toggleClass('active');
		$('.menu__list').toggleClass('menu__list-left');
		$('.menu__link--f').toggleClass('active');

		if ($('#fall-menu').hasClass('active')) {
			$('.menu__tel').addClass('menu__call-left');
			$('.menu__call').addClass('menu__tel-left');
		}
		else {
			$('.menu__tel').removeClass('menu__call-left');
			$('.menu__call').removeClass('menu__tel-left');
		}
	});


	document.documentElement.addEventListener('click', function (e) {
		if (!e.target.closest('.menu__link--f')) {
			let menu = document.querySelector('.fall-menu');
			let menubtn = document.querySelector(".menu__link--f")
			menu.classList.remove('active');
			menubtn.classList.remove('active')
		}
	});

	$('.slider-intro').slick({
		arrows: false,
		dots: true,
		adaptiveHeight: true, /*Адаптирует под высоту активной картинки*/
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		speed: 500,
		easing: 'ease',
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnFocus: true,
		pauseOnHover: false,
		pauseOnDotsHover: true,
	});

	$('.slider-adv').slick({
		arrows: false,
		dots: true,
		adaptiveHeight: true, /*Адаптирует под высоту активной картинки*/
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		speed: 500,
		easing: 'ease',
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
	});

	$('.block-2__slider').slick({
		arrows: true,
		prevArrow: '<button id="prev" type="button" class="slick-prev"><i class="far fa-arrow-alt-circle-left icon-slider"></i></button>',
		nextArrow: '<button id="next" type="button" class="slick-next"><i class="far fa-arrow-alt-circle-right icon-slider"></i></button>',
		dots: false,
		adaptiveHeight: true, /*Адаптирует под высоту активной картинки*/
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		easing: 'ease',
		infinite: true,
		autoplay: false,
		autoplaySpeed: 5000,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
	});

	var mainH = $('.intro').innerHeight() - 75;
	scrollOffset = $(window).scrollTop;

	$(".scroll").click(function (event) {

		$("html, body").animate({
			scrollTop: mainH
		}, 500);

	});

	checkScroll(scrollOffset) //чтобы при заходе на страницу выполнялась эта функция

	$(window).on("scroll", function () {

		scrollOffset = $(this).scrollTop(); // Показывет значение, которое проскролленно

		checkScroll(scrollOffset);
	});

	function checkScroll(scrollOffset) {
		if (scrollOffset >= 500) {
			$('.header').addClass('fixed');
		}
		else {
			$('.header').removeClass('fixed');
		}
	}

	$(".list__item-link").on("click", function (event) {
		event.preventDefault();

		// $('.list__item-link').removeClass('active');
		$('.list__item').removeClass('active')
		$(this).parent().addClass("active");

		$(".portfolio__content").removeClass('active')
	});


	$("#t-1").on('click', function (event) {
		$('#tab-1').addClass('active');
	});

	$("#t-2").on('click', function (event) {
		$('#tab-2').addClass('active');
	});

	$("#t-3").on('click', function (event) {
		$('#tab-3').addClass('active');
	});

	$("#t-4").on('click', function (event) {
		$('#tab-4').addClass('active');
	});

	$("#t-5").on('click', function (event) {
		$('#tab-5').addClass('active');
	});



	$(function nextBtn() {
		$('.content-portfolio__next').on('click', function (event) {
			event.preventDefault();

			var current = $('.content-portfolio.active');
			var currentList = $('.list__item.active');


			current.removeClass('active');
			current.next('.content-portfolio').addClass('active');
			currentList.removeClass('active');
			currentList.next('.list__item').addClass('active');

			if (current.hasClass('last__portfolio')) {
				$('#tab-1').addClass('active');
				$('#t-1').parent().addClass('active')
			}

		})
	});



	$('.number').on('click', function (event) {
		event.preventDefault();
		var x = $(this).find('a');

		$('.number').removeClass('active');
		$(this).addClass("active");
		$('.number__item').removeClass('active');
		x.addClass('active');
	});

	$("#n-1").on('click', function (event) {
		$('.how__content').removeClass('active')
		$('#num-1').addClass('active');
	});

	$("#n-2").on('click', function (event) {
		$('.how__content').removeClass('active')
		$('#num-2').addClass('active');
	});

	$("#n-3").on('click', function (event) {
		$('.how__content').removeClass('active')
		$('#num-3').addClass('active');
	});

	$("#n-4").on('click', function (event) {
		$('.how__content').removeClass('active')
		$('#num-4').addClass('active');
	});

	$("#n-5").on('click', function (event) {
		$('.how__content').removeClass('active')
		$('#num-5').addClass('active');
	});



	$("#i_1").on('click', function (event) {
		$('.portfolio__item').addClass('active');
	});

	$("#i_2").on('click', function (event) {
		$('.portfolio__item').removeClass('active');
		$('.smm').addClass('active');
	});

	$("#i_3").on('click', function (event) {
		$('.portfolio__item').removeClass('active');
		$('.des').addClass('active');
	});

	$("#i_4").on('click', function (event) {
		$('.portfolio__item').removeClass('active');
		$('.seo').addClass('active');
	});

	$("#i_5").on('click', function (event) {
		$('.portfolio__item').removeClass('active');
		$('.site').addClass('active');
	});

});
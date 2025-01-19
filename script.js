// $(function () {

const rellax = new Rellax(".image");

var tabs = document.querySelectorAll(".tab");
var contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
	tab.addEventListener("mouseenter", () => {
		const target = tab.getAttribute("data-tab");

		tabs.forEach((t) => t.classList.remove("active"));
		tab.classList.add("active");

		contents.forEach((content) => {
			content.classList.remove("active");
			if (content.id === target) {
				content.classList.add("active");
			}
		});
	});
});
const swiper = new Swiper(".swiper", {
	slidesPerView: "auto",
	spaceBetween: "3%", // スライド間のスペース
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		// レスポンシブ設定
		640: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	},
});
$(function () {
	// スクロールイベントを監視
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 50) {
			$(".header").addClass("scrolled");
			$(".reserve").addClass("transform");
			$(".logo").addClass("headerLogoScroll");
			$(".hamburger__line").addClass("change");
		} else {
			$(".header").removeClass("scrolled");
			$(".reserve").removeClass("transform");
			$(".logo").removeClass("headerLogoScroll");
			$(".hamburger__line").removeClass("change");
		}
	});
});
$("#js-hamburger").on("click", function () {
	// js-btnクラスをクリックすると、
	$(".nav__items").toggleClass("open"); // メニューとバーガーの線にopenクラスをつけ外しする
	$(".header__nav,.hamburger").toggleClass("active"); // メニューとバーガーの線にopenクラスをつけ外しする
});
$(".page__link").on("click", function () {
	$(".nav__items").removeClass("open");
	$(".header__nav,.hamburger").removeClass("active");
});
// });
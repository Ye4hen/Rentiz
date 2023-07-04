const burger = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu');
const body = document.body;

if (burger && menu) {
	burger.addEventListener('click', () => {
		burger.classList.toggle('_active');
		menu.classList.toggle('_active');
		body.classList.toggle('_lock');
	});
}

// --- Filter dropdown

const filter = document.querySelector('.filter');

if (filter) {
	const items = filter.querySelectorAll('.block-filter')

	items.forEach(item => {
		item.addEventListener('click', event => {
			item.querySelector('.block-filter__dropdawn').classList.toggle('_active');
			item.querySelector('.block-filter__icon').classList.toggle('_active');

			if (event.target.classList.contains('block-filter__item')) {
				item.querySelector('.block-filter__value').textContent = event.target.textContent;
			}
		})
	})
}

// --- Swiper

const popularSlider = new Swiper('.popular-slider', {
	spaceBetween: 20,
	slidesPerView: 1,
	loop: true,
	// Navigation arrows
	navigation: {
		nextEl: '.popular-slider-next',
		prevEl: '.popular-slider-prev',
	},
	breakpoints: {
		1050: {
			slidesPerView: 3
		},
		700: {
			slidesPerView: 2
		}
	}
});

// --- Another Swiper

const commentsSlider = new Swiper('.slider-comments', {
	spaceBetween: 20,
	slidesPerView: 1,
	autoHeight: true,
	// Navigation arrows
	navigation: {
		nextEl: '.slider-comments-next',
		prevEl: '.slider-comments-prev',
	},
});

// --- Gallery Swiper

const galleryItems = document.querySelectorAll(".gallery__item");

if (galleryItems.length > 0) {
	galleryItems.forEach(item => {
		new Swiper(item, {
			slidesPerView: 1,
			autoplay: {
				delay: 5000,
			},
			effect: 'fade',
		})
	})
}
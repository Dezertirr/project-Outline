const buyNowSlider = new Swiper('.sellers-swiperbuy', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.sellers-swiper-pagination',
    clickable: true,
  },
});

const reviewsSlider = new Swiper('.myswipernav', {
  slidesPerView: 1,
  spaceBetween: 16,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 18,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
});

var productSlider = new Swiper('.myswwiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 18,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  },
});

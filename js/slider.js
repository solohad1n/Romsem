const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: true,
  speed: 500,
  pagination: {
    el: '.swiper-pagination',
  },
});


const swiper2 = new Swiper('.products-swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: true,
  slidesPerView: 3,
  spaceBetween: 40,
  speed: 800,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper3 = new Swiper('.recommend__slider', {
  direction: 'horizontal',
  loop: true,
  autoplay: true,
  slidesPerView: 1,
  spaceBetween: 40,
  speed: 800,

  navigation: {
    nextEl: '.recommend__button-next',
    prevEl: '.recommend__button-prev',
  },
  breakpoints: {
    724: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});
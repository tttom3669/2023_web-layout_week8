import Swiper from '../../node_modules/swiper/swiper-bundle';

const swiper = new Swiper('.mySwiper_news', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper2 = new Swiper('.mySwiper_comment', {
  slidesPerView: 4,
  spaceBetween: 24,
  scrollbar: {
    el: '.swiper-scrollbar',
    //hide: true,
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const swiperDefault = new Swiper(".swiper.slider-default", {
    direction: "horizontal",
    loop: true,
    allowTouchMove: true,
    spaceBetween: 1,
    slidesPerView: 1,
    centeredSlides: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

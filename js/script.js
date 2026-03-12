//Swipper
const productsSwiper = new Swiper(".productsSwiper", {
  loop: true,
  speed: 800,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".products-pagination",
    clickable: true,
  },
});

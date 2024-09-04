var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3, // Số lượng thẻ hiển thị mặc định
    spaceBetween: 30, // Khoảng cách giữa các thẻ
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  });
//hamburger
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("button").addEventListener("click", function () {
    document.querySelector(".c-hamburger").classList.toggle("is-active")
    document.querySelector(".c-drawer").classList.toggle("is-active");
    document.body.classList.toggle("no-scroll"); // スクロールを無効化
  });
})





    //swiper
    const swiper1 = new Swiper(".swiper1", {
      loop: true, // デフォルトはfalse
      autoplay: { // 自動再生
        delay: 3000, // 3秒後に次のスライド（初期値：3000）
        disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
      }
    });




    const swiper2 = new Swiper(".swiper2", {
      loop: true, // デフォルトはfalse
      slidesPerView: 2,// 一度に表示するスライド数（初期値：1）
      autoplay: { // 自動再生
        delay: 3000, // 3秒後に次のスライド（初期値：3000）
        disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
      },
      spaceBetween: 20 ,// 画面幅768px未満では20px
      breakpoints: {
        768: {
          spaceBetween: 40, // 画面幅768px未満では20px
        },
      },
    });


    const swiper3 = new Swiper(".swiper3", {
      loop: true, // デフォルトはfalse
      autoplay: { // 自動再生
        delay: 3000, // 3秒後に次のスライド（初期値：3000）
        disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
      }
    });


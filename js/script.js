//hamburger
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("button").addEventListener("click", function() {
      document.querySelector(".c-hamburger").classList.toggle("is-active")
      console.log("test")
    });
  })

//swiper
const swiper = new Swiper(".swiper", {
    loop: true, // デフォルトはfalse
    effect: "fade", // デフォルトはslide
    autoplay: { // 自動再生
        delay: 3000, // 3秒後に次のスライド（初期値：3000）
        disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    }});
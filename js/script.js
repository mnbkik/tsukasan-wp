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
  spaceBetween: 20,// 画面幅768px未満では20px
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



//accordion
const questions = document.querySelectorAll('.p-accordion__question');
questions.forEach(function (question) {
  question.addEventListener('click', function (e) {
    e.preventDefault(); // デフォルトのクリック動作を防止

    // .p-accordion__answer のクラスをトグル
    const answer = question.nextElementSibling;
    answer.classList.toggle('is-active');

    // .p-accordion__mark のクラスをトグル
    const mark = question.querySelector('.p-accordion__mark');
    mark.classList.toggle('is-active');
  });
});




//ページ内スムーススクロール
// document.addEventListener('DOMContentLoaded', function () {
//   const headerHeight = document.querySelector('.l-header').getBoundingClientRect().height;

//   document.querySelectorAll('a[href^="#"]').forEach(function (link) {
//     link.addEventListener('click', function (event) {
//       event.preventDefault();

//       const href = this.getAttribute('href');
//       const target = document.querySelector(href);
//       const position = target.getBoundingClientRect().top + window.scrollY - headerHeight;

//       window.scrollTo({
//         top: position,
//         behavior: 'smooth'
//       });
//     });
//   });
// });






// console.log(history);

//ページ外スムーススクロール
document.addEventListener('DOMContentLoaded', function () {
  const headerHeight = document.querySelector('.l-header').getBoundingClientRect().height;
  const urlHash = window.location.hash;

  if (urlHash) {
    window.history.replaceState(null, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(function () {
      const target = document.querySelector(urlHash);
      const position = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({
        top: position,
        behavior: 'smooth'
      });
    }, 100);
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      const href = this.getAttribute('href');
      const target = document.querySelector(href);
      const position = target.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: position,
        behavior: 'smooth'
      });
    });
  });
});


















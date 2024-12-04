<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap"
    rel="stylesheet">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Shippori+Mincho:wght@400;500;600;700;800&display=swap"
    rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
  <script defer src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  <script defer src="./js/script.js"></script>
  <link rel="stylesheet" href="./style.css">
  <title>Document</title>
</head>

<header class="l-header">
    <div class=" l-header__inner">
        <h1 class="l-header__logo">
            <a href="#"><img src="./images/logo 1.png" alt="つかさんのロゴ"></a>
        </h1>
        <div class="l-header__block">
            <div class="l-header__buttons">
                <a href="#" class="l-header__link l-header__link--instagram">
                    <img src="./images/icon-Instagram.png" alt="インスタグラムアイコン">
                </a>
                <a href="#" class="l-header__link u-hidden-sp">お問い合わせ</a>
                <a href="#" class="l-header__link l-header__link--mail u-hidden-sp">
                    <img src="./images/icon-mail.png" alt="メールアイコン">
                </a>
                <!-- hamburger -->
                <button class="c-hamburger" id="button">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <nav class="l-header__nav">
                <ul class="l-header__lists">
                    <li class="l-header__list l-header__list-image">
                        <a href="#" class="l-header__list--home">
                            <img src="./images/icon-home.png" alt="ホームアイコン">
                        </a>
                    </li>
                    <li class="l-header__list"><a href="#concept">事業案内</a></li>
                    <li class="l-header__list"><a href="#message">会社案内</a></li>
                    <li class="l-header__list"><a href="#point">施工事例</a></li>
                    <li class="l-header__list"><a href="about.html#wind">スタッフ紹介</a></li>
                    <li class="l-header__list"><a href="#">お知らせ</a></li>
                </ul>
            </nav>
        </div>
    </div>
    <!-- drawer-menu -->
    <div class="c-drawer js-drawer u-hidden-pc">
        <hr class="c-line">
        <div class="c-drawer-inner c-inner">
            <div class="c-drawer__nav">
                <ul class="c-drawer__lists">
                    <li class="c-drawer__list">
                        <a href="" class="c-drawer__link">home</a>
                    </li>
                    <li class="c-drawer__list">
                        <a href="" class="c-drawer__link">事業案内</a>
                    </li>
                    <li class="c-drawer__list">
                        <a href="" class="c-drawer__link">会社案内</a>
                    </li>
                    <li class="c-drawer__list">
                        <a href="" class="c-drawer__link">施工事例</a>
                    </li>
                    <li class="c-drawer__list">
                        <a href="" class="c-drawer__link">スタッフ紹介</a>
                    </li>
                    <li class="c-drawer__list">
                        <a href="" class="c-drawer__link">お知らせ</a>
                    </li>
                </ul>
            </div>
            <div class="c-drawer__icons">
                <div class="c-drawer__icon">
                    <a href="#"><img src="./images//icon-tel.png" alt="tel"></a>
                </div>
                <div class="c-drawer__icon">
                    <a href="#"><img src="./images//icon-mail.png" alt="mail"></a>
                </div>
            </div>
        </div>
        <hr class="c-line">
    </div>
</header>
// ハンバーガーメニュー
var hamburger = $('.header__hamburger-menu');

$('.header__hamburger-button').on('click', function () {
    hamburger.toggleClass('header__hamburger-menu--open');
});

$(window).on('resize', function () {
    hamburger.removeClass('header__hamburger-menu--open');
});

$('.header__hamburger-menu-list-item').on('click', function () {
    hamburger.removeClass('header__hamburger-menu--open');
});

// スマートタブ
$('#smarttab').smartTab({
    enableUrlHash: false
});
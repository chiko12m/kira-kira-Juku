// ハンバーガーメニュー
var hamburger = $('.header__hamburger-menu');

$('.header__hamburger-button').on('click', function () {
    console.log('Hamburger button clicked');
    hamburger.toggleClass('header__hamburger-menu--open');
});

$(window).on('resize', function () {
    hamburger.removeClass('header__hamburger-menu--open');
});

// スマートタブ
$(function() {
    // SmartTab initialize
    $('#smarttab').smartTab();
});
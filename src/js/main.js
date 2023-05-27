import jQuery from 'jquery';

const $ = jQuery;

$(() => {
  $('nav a').on('click', (e) => {
    e.preventDefault();

    const target = $.attr(e.target, 'href');

    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 300, 'swing');

    $('#mobile-menu').toggleClass('translate-x-0');
  });

  $('#hamburger').click(() => {
    $('#mobile-menu').toggleClass('translate-x-0');
  });
});

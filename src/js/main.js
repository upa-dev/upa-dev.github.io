$(document).ready(function () {
  $('nav a').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 700, 'swing');
    $('#mobile-menu').toggleClass('translate-x-0');
  });

  $('#hamburger').click(function () {
    $('#mobile-menu').toggleClass('translate-x-0');
  });
});

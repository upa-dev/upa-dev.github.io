$(document).ready(function () {
  $('.nav-item, .contact-btn').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 700, 'swing');
  });

  $('#hamburger').click(function () {
    $('#mobile-menu').toggleClass('translate-x-0');
  });
});

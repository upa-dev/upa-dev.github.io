$(document).ready(function () {
  $('#hamburger').click(function (e) {
    $('#mobile-menu').toggle()
  })

  $('.nav-item, .contact-btn').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 700, 'swing');
    $('#mobile-menu').toggle();
  });
});

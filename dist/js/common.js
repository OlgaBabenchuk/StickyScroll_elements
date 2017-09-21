$(document).ready(function() {
 
  /*   toggle sidebar menu   */

  $(".mob-trigger").on("click", function() {
    $("body").toggleClass('menu-open');
    $(this).toggleClass('mob-trigger-close');
  });


  /*   settings for card slider   */

  $('.slider-card').slick({
    dots: true,
    arrows: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
  });

});



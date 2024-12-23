(function ($) {
  "use strict";

 


  // Magnific popup image js
  $('.image-popup').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    },
  });
  
  

  // Mobile menu control js
  $(".menu-control-btn").on("click", function () {
    $(".navbar-collapse, .mobile-menu-overlay").addClass("open")
  })
  $(".sidebar-close-btn, .mobile-menu-overlay").on("click", function () {
    $(".navbar-collapse, .mobile-menu-overlay").removeClass("open")
  })

  

  /* Odometer Activeate js */
  $(document).ready(function () {
    $('.odometer').appear(function () {
      var odo = $(".odometer");
      odo.each(function () {
        var countNumber = $(this).attr("data-count");
        $(this).html(countNumber);
      });
    });
  });

  // Testimonial slider js
  $('.client-feedback-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    prevArrow: '<i class="fa-solid arrow arrow-prev fa-angle-left"></i>',
    nextArrow: '<i class="fa-solid arrow arrow-next fa-angle-right"></i>',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }]
  });

})(jQuery);
$(document).ready(function () {
    $(".testimonial_slider").slick({
      slidesToShow:3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      dots: true,
     arrows: true,
 appendArrows: $('.testimonial_slider_arrow_box'),
 nextArrow: '<a class="testimonial_pre_arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></a>',
 prevArrow: '<a class="testimonial_pre_arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></a>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow:2,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 1500,
           dots: true,
            arrows: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 1500,
                  dots: true,
              arrows: true,
          },
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 1500,
                dots: true,
            arrows: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
          autoplaySpeed: 1500,
            dots: true,
             arrows: true,
          },
        },
      ],
    });
  });
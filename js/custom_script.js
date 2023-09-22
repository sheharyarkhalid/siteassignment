  $(document).ready(function () {
    
    $(".res_toggle_button").click(function () {
      $(".header_links").toggleClass("active");
    });

      $(".product_brand_slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        appendArrows: $('.brand_slider_arrow_box'),
        nextArrow: '<a class="slider_arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></a>',
        prevArrow: '<a class="slider_arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></a>',
        responsive: [

          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              autoplay: false,
              autoplaySpeed: 1500,
              dots: false,
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
              dots: false,
              arrows: true,
            },
          },

        ],
      });
    });


  $(document).mouseup(function (e) {

    var container_two = $(".header_links.active");
    if(!container_two.is(e.target) && 
    container_two.has(e.target).length === 0) {
      container_two.removeClass("active");
    }
  });


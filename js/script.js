$(document).ready(function(){
    $(".home_banner_slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        appendDots: $(".home_banner_slider-dots"),
        fade: true,
        cssEase: "linear",
        arrows: false,
        prevArrow:
            " < button class = 'slick-prev home_banner_slider_prev_arrow' > < i class = 'mdi mdi-chevron-left' > < /i> < /button>",
        nextArrow:
            " < button class = 'slick-next home_banner_slider_next_arrow' > < i class = 'mdi mdi-chevron-right' > < /i> < /button>",
    });
  });
  
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.home_banner_slider').slick('setPosition');
  });
$(document).ready(function () {
    $(".open_close_nav").click(function () {
        $(".responsive_nav_bar").toggleClass("responsive_bar");
    });


    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    };


});



function NewsletteronSubmit(token) {
    $("#quick_newslatter_recaptcha").submit();
}

function validate_newslatter(event) {
    event.preventDefault();

    $("#quick_newslatter_recaptcha").validate({
        rules: {

            first_name: {
                required: true,
                maxlength: 20, // Maximum of 20 characters
            lettersOnly: true, // Custom rule for alpha characters only
            },    
            last_name: {
                required: true,
                maxlength: 20, // Maximum of 20 characters
            lettersOnly: true, // Custom rule for alpha characters only

            },    
            Job_reference_number: {
                required: true,
                exactLength: 5, // Custom rule for exactly 5 characters
               alphanumericOnly: true, // Custom rule for alphanumeric characters only
            },    
            date_of_birth: {
                required: true,
            },    
            street_address: {
                required: true,
                maxlength: 40, // Maximum of 40 characters
            },    
            Suburb_town: {
                required: true,
                maxlength: 40, // Maximum of 40 characters
            },    
            postcode: {
                required: true,
                exactLength: 4, // Custom rule for exactly 5 characters
            },               
            email_address: {
                required: true,
                email: true
            },    
            state: {
                required: true,
            },    
            number: {
                required: true,
                validFirstName: "Number must be 8 to 12 digits or spaces.",
            },    
            gender: {
                required: true,
            },    
            skill: {
                required: true,
            },    
            otherskill: {
                required: true,
            },    
           
        }

    });

    // Custom rule for 8 to 12 digits or spaces
$.validator.addMethod("validFirstName", function (value, element) {
    return this.optional(element) || /^[0-9\s]{8,12}$/.test(value);
}, "First name must be 8 to 12 digits or spaces.");

      // Add custom rule for alpha characters only
$.validator.addMethod("lettersOnly", function (value, element) {
    return this.optional(element) || /^[a-zA-Z]+$/.test(value);
}, "Please enter alphabetic characters only.");

// Custom rule for exact length
$.validator.addMethod("exactLength", function (value, element, param) {
    return this.optional(element) || value.length === param;
}, $.validator.format("Please enter exactly {0} characters."));

// Custom rule for alphanumeric characters only
$.validator.addMethod("alphanumericOnly", function (value, element) {
    return this.optional(element) || /^[a-zA-Z0-9]+$/.test(value);
}, "Please enter alphanumeric characters only.");

     if ($('#quick_newslatter_recaptcha').valid()) {
         grecaptcha.execute();
     }

}

 function onload() {

     var element = document.getElementById('newsletter-submit-recaptcha');
     element.onclick = validate_newslatter;
 }
 

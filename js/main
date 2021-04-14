(function ($) {
    "use strict";


    /*-------------------------------------
    On Load
    -------------------------------------*/
    $(window).on('load resize', function () {

        $('body').imagesLoaded().done(function (instance) {
            $('body').addClass('loaded');
        });
    });
 
    /*-------------------------------------
    Subscribe Form Activation
    -------------------------------------*/
    $('[data-pixsaas]').each(function () {
        var $this = $(this);
        $('.form-result', $this).css('display', 'none');

        $this.submit(function () {

            $('button[type="submit"]', $this).addClass('clicked');

            // Create a object and assign all fields name and value.
            var values = {};

            $('[name]', $this).each(function () {
                var $this = $(this),
                    $name = $this.attr('name'),
                    $value = $this.val();
                values[$name] = $value;
            });

            // Make Request
            $.ajax({
                url: $this.attr('action'),
                type: 'POST',
                data: values,
                success: function success(data) {

                    if (data.error == true) {
                        $('.form-result', $this).addClass('alert-warning').removeClass('alert-success alert-danger').fadeIn(100).show();

                        $(".fxt-subscribe-form > .input-group").addClass("fxt-animation-shake");
                        setTimeout(function() {
                            $(".fxt-subscribe-form > .input-group").removeClass("fxt-animation-shake");
                        }, 1200)

                    } else {
                        $('.form-result', $this).addClass('alert-success').removeClass('alert-warning alert-danger').fadeIn(200).show().delay(5000).fadeOut(300);
                    }
                    $('.form-result > .content', $this).html(data.message);
                    $('button[type="submit"]', $this).removeClass('clicked');
                    $this.trigger("reset");
                },
                error: function error() {
                    $('.form-result', $this).addClass('alert-danger').removeClass('alert-warning alert-success').css('display', 'block');
                    $('.form-result > .content', $this).html('Sorry, an error occurred.');
                    $('button[type="submit"]', $this).removeClass('clicked');                   
                }
            });
            return false;
        });

    }); 

    /*-------------------------------------
    Contact Form initiating
    -------------------------------------*/
    var contactForm = $('#contact-form'); 
	if ($.fn.validator !== undefined && contactForm.length) {
		contactForm.validator().on('submit', function (e) {
			var $this = $(this),
				$target = contactForm.find('.form-result');
			if (e.isDefaultPrevented()) {
                $target.html("<div class='alert alert-danger'>Please select all required field.</div>");
                $(".fxt-contact-form").addClass("fxt-animation-shake");
                setTimeout(function() {
                    $(".fxt-contact-form").removeClass("fxt-animation-shake");
                }, 1200)
			} else {
				$.ajax({
					url: "vendor/php/mailer.php",
					type: "POST",
					data: contactForm.serialize(),
					beforeSend: function () {
						$target.html("<div class='alert alert-info'>Loading . . .</div>");
					},
					success: function (text) {
						if (text === "success") {
							$this[0].reset();
							$target.html("<div class='alert alert-success'>Message has been sent successfully.</div>");
						} else {
							$target.html("<div class='alert alert-success'>" + text + "</div>");
						}
					}
				});
				return false;
			}
		});
	}
  
    /*-------------------------------------
    Youtube Video
    -------------------------------------*/   
    if ($.fn.YTPlayer !== undefined && $("#fxtVideo").length) { 
        $("#fxtVideo").YTPlayer({useOnMobile:true});
    }  
    
    /*-------------------------------------
    Vegas Slider
    -------------------------------------*/
    if ($.fn.vegas !== undefined && $("#vegas-slide").length) {
        var target_slider = $("#vegas-slide"),
            vegas_options = target_slider.data('vegas-options');
        if (typeof vegas_options === "object") {
            target_slider.vegas(vegas_options);
        }
    }

    /*-------------------------------------
    Background image
    -------------------------------------*/
    $("[data-bg-image]").each(function () {
        var img = $(this).data("bg-image");
        $(this).css({
            backgroundImage: "url(" + img + ")"
        });
    });

    /*-------------------------------------
	Carousel slider initiation
    -------------------------------------*/
    if ($.fn.owlCarousel) {
        $('.rc-carousel').each(function() {
            var carousel = $(this),
			    loop = carousel.data('loop'),
				autoplay = carousel.data('autoplay'),
				autoplayTimeout = carousel.data('autoplay-timeout'),
                smartSpeed = carousel.data('smart-speed'),                
				items = carousel.data('items');
			carousel.addClass('owl-carousel');
			var owl = carousel.owlCarousel({
				loop: (loop ? true : false),
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
				autoplay: (autoplay ? true : false),
				autoplayTimeout: (autoplayTimeout ? autoplayTimeout : 1000),
				smartSpeed: (smartSpeed ? smartSpeed : 250),
                items: (items ? items : 1)
			});
        });
    }
	
    /*-------------------------------------
    Countdown activation code
    -------------------------------------*/
    $(function () {
        var eventCounter = $(".countdown");
        if (eventCounter.length) {
            eventCounter.countdown("2021/06/01", function (e) {
                $(this).html(
                    e.strftime(
                        "<div class='countdown-section'><div><div class='countdown-number'>%D</div> <div class='countdown-unit'>Day%!D</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%H</div> <div class='countdown-unit'>Hour%!H</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%M</div> <div class='countdown-unit'>Minutes</div> </div></div><div class='countdown-section'><div><div class='countdown-number'>%S</div> <div class='countdown-unit'>Second</div> </div></div>"
                    )
                );
            });
        }
    });      

})(jQuery);

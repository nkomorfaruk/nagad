(function ($) {
  ("use strict");

  // slick slider activation
  // slick slider  slider-active basic slider
  function mainSlider() {
    var BasicSlider = $(".slider-active");
    BasicSlider.on("init", function (e, slick) {
      var $firstAnimatingElements = $(".single-slider:first-child").find(
        "[data-animation]"
      );
      doAnimations($firstAnimatingElements);
    });
    BasicSlider.on(
      "beforeChange",
      function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $(
          '.single-slider[data-slick-index="' + nextSlide + '"]'
        ).find("[data-animation]");
        doAnimations($animatingElements);
      }
    );
    BasicSlider.slick({
      autoplay: false,
      autoplaySpeed: 3000,
      dots: true,
      fade: false,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: { dots: false, arrows: false, slidesToShow: 1 },
        },
      ],
    });

    function doAnimations(elements) {
      var animationEndEvents =
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data("delay");
        var $animationType = "animated " + $this.data("animation");
        $this.css({
          "animation-delay": $animationDelay,
          "-webkit-animation-delay": $animationDelay,
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();

  //  dual slider
  $(".account-slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    centerPadding: "60px",
    dots: true,
    arrows: false,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });

  // modal js activation
  $(document).ready(function () {
    var variants = {
      youtube: {
        args: [
          {
            title: "Your title here",
            content: "https://www.youtube.com/watch?v=tZrpoSUQCJ0",
            theme: $.sweetModal.THEME_DARK,
          },
        ],
      },
    };

    for (var key in variants) {
      if (variants.hasOwnProperty(key)) {
        var variant = variants[key];

        $("#" + key).on("click", { variant: variant }, function (e) {
          var variant = e.data.variant;

          variant.fn = variant.fn || $.sweetModal;
          variant.fn.apply(this, variant.args);
        });
      }
    }
  });
})(jQuery);

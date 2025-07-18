function fullScreenHeight() {
  var e = $(window).height();
  $(".section-fullscreen").css({ height: e });
}
function googleMap() {
  function e() {
    var e = {
        center: t,
        zoom: 16,
        scrollwheel: !1,
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"],
        },
      },
      a = new google.maps.Map(document.getElementById("googleMap"), e),
      i = new google.maps.Marker({ position: o, icon: $obj.data("icon") });
    i.setMap(a);
  }
  if ($("#googleMap").length > 0) {
    $obj = $("#googleMap");
    var t = new google.maps.LatLng($obj.data("lat"), $obj.data("lon")),
      o = new google.maps.LatLng($obj.data("lat"), $obj.data("lon"));
    google.maps.event.addDomListener(window, "load", e);
  }
}
function owlCarousel() {
  $(".logo-carousel").length > 0 &&
    $(".logo-carousel").each(function () {
      var e = "true" === $(this).attr("data-auto-play") ? !0 : !1;
      $(this).owlCarousel({
        items: $(this).attr("data-desktop"),
        loop: !0,
        mouseDrag: !0,
        navigation: !1,
        dots: !1,
        pagination: !1,
        autoPlay: e,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !0,
        smartSpeed: 1e3,
        autoplayHoverPause: !0,
        itemsDesktop: [1199, $(this).attr("data-desktop")],
        itemsDesktopSmall: [979, $(this).attr("data-laptop")],
        itemsTablet: [768, $(this).attr("data-tablet")],
        itemsMobile: [479, $(this).attr("data-mobile")],
      });
    }),
    $(".testimonial-carousel").length > 0 &&
      $(".testimonial-carousel").each(function () {
        var e = "true" === $(this).attr("data-auto-play") ? !0 : !1;
        $(this).owlCarousel({
          items: $(this).attr("data-desktop"),
          loop: !0,
          mouseDrag: !0,
          navigation: !1,
          dots: !1,
          pagination: !1,
          autoPlay: e,
          autoplayTimeout: 5e3,
          autoplayHoverPause: !0,
          smartSpeed: 1e3,
          autoplayHoverPause: !0,
          itemsDesktop: [1199, $(this).attr("data-desktop")],
          itemsDesktopSmall: [979, $(this).attr("data-laptop")],
          itemsTablet: [768, $(this).attr("data-tablet")],
          itemsMobile: [479, $(this).attr("data-mobile")],
        });
      }),
    $(".team-carousel").length > 0 &&
      $(".team-carousel").each(function () {
        var e = "true" === $(this).attr("data-auto-play") ? !0 : !1;
        $(this).owlCarousel({
          items: $(this).attr("data-desktop"),
          loop: !0,
          mouseDrag: !0,
          navigation: !1,
          dots: !0,
          pagination: !0,
          autoPlay: e,
          autoplayTimeout: 5e3,
          autoplayHoverPause: !0,
          smartSpeed: 1e3,
          autoplayHoverPause: !0,
          itemsDesktop: [1199, $(this).attr("data-desktop")],
          itemsDesktopSmall: [979, $(this).attr("data-laptop")],
          itemsTablet: [768, $(this).attr("data-tablet")],
          itemsMobile: [479, $(this).attr("data-mobile")],
        });
      }),
    $(".blog-carousel").length > 0 &&
      $(".blog-carousel").each(function () {
        var e = "true" === $(this).attr("data-auto-play") ? !0 : !1;
        $(this).owlCarousel({
          items: $(this).attr("data-desktop"),
          loop: !0,
          mouseDrag: !0,
          navigation: !1,
          dots: !1,
          pagination: !1,
          autoPlay: e,
          autoplayTimeout: 5e3,
          autoplayHoverPause: !0,
          smartSpeed: 1e3,
          autoplayHoverPause: !0,
          itemsDesktop: [1199, $(this).attr("data-desktop")],
          itemsDesktopSmall: [979, $(this).attr("data-laptop")],
          itemsTablet: [768, $(this).attr("data-tablet")],
          itemsMobile: [479, $(this).attr("data-mobile")],
        });
      }),
    $(".relate-film-carousel").length > 0 &&
      $(".relate-film-carousel").each(function () {
        var e = "true" === $(this).attr("data-auto-play") ? !0 : !1;
        $(this).owlCarousel({
          items: $(this).attr("data-desktop"),
          loop: !0,
          mouseDrag: !0,
          navigation: !1,
          dots: !1,
          pagination: !0,
          autoPlay: e,
          autoplayTimeout: 5e3,
          autoplayHoverPause: !0,
          smartSpeed: 1e3,
          autoplayHoverPause: !0,
          itemsDesktop: [1199, $(this).attr("data-desktop")],
          itemsDesktopSmall: [979, $(this).attr("data-laptop")],
          itemsTablet: [768, $(this).attr("data-tablet")],
          itemsMobile: [479, $(this).attr("data-mobile")],
        });
      }),
    $(".film-detail-info-carousel").length > 0 &&
      $(".film-detail-info-carousel").each(function () {
        var e = "true" === $(this).attr("data-auto-play") ? !0 : !1;
        $(this).owlCarousel({
          items: $(this).attr("data-desktop"),
          loop: !0,
          mouseDrag: !0,
          navigation: !1,
          dots: !1,
          pagination: !0,
          autoPlay: e,
          autoplayTimeout: 5e3,
          autoplayHoverPause: !0,
          smartSpeed: 1e3,
          autoplayHoverPause: !0,
          itemsDesktop: [1199, $(this).attr("data-desktop")],
          itemsDesktopSmall: [979, $(this).attr("data-laptop")],
          itemsTablet: [768, $(this).attr("data-tablet")],
          itemsMobile: [479, $(this).attr("data-mobile")],
        });
      });
}
function slideSlick() {
  $("#film-gallery-carousel").slick({
    infinite: !0,
    centerMode: !0,
    variableWidth: !0,
    slidesToShow: 3,
    dots: !1,
    arrows: !1,
    autoplay: !1,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, centerMode: !1, variableWidth: !1 },
      },
    ],
  });
}
function bannerSlick() {
  $(".film-post-slider .post-slider").slick({ arrows: !1 }),
    $(".film-post-slider .post-slider").on(
      "beforeChange",
      function (e, t, o, a) {
        var i = $(this)
          .next(".slider-nav-container")
          .find("li[data-slide=" + a + "]");
        i.css({ display: "none" }).siblings().css({ display: "block" });
      }
    ),
    jQuery(".slider-nav-container li").on("click", function () {
      jQuery(".film-post-slider .post-slider").slick(
        "slickGoTo",
        $(this).data("slide"),
        !1
      );
    });
}
function filterScroll() {
  var e = $(".team-filter-scroll"),
    t = e.find("ul"),
    o = 0;
  t.find("li").each(function () {
    o += $(this).outerWidth();
  }),
    e.mousemove(function (a) {
      var i = e.outerWidth();
      if (o > i) {
        var s = e.offset(),
          l = a.pageX - s.left,
          n = ((o - i) * l) / i;
        t.css({ marginLeft: -n });
      }
    });
}
function progressBar() {
  $(".block-progressbar").each(function () {
    $(this).find(".progressbar").progressbar({ display_text: "center" }),
      $(this)
        .find(".progressbar")
        .css(
          "background-color",
          $(this).find(".progressbar").attr("data-color")
        );
  });
}
function RevolutionInit() {
  $("#rev_slider")
    .show()
    .revolution({
      sliderType: "standard",
      sliderLayout: "fullscreen",
      dottedOverlay: "none",
      delay: 15000,
      navigation: {
        keyboardNavigation: "off",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        mouseScrollReverse: "default",
        onHoverStop: "off",
        arrows: {
          style: "hebe",
          enable: !0,
          hide_onmobile: !1,
          hide_onleave: !0,
          hide_delay: 200,
          hide_delay_mobile: 1200,
          tmp: '<div class="tp-title-wrap">	<span class="tp-arr-titleholder">{{title}}</span>    <span class="tp-arr-imgholder"></span> </div>',
          left: {
            h_align: "left",
            v_align: "center",
            h_offset: 20,
            v_offset: 0,
          },
          right: {
            h_align: "right",
            v_align: "center",
            h_offset: 20,
            v_offset: 0,
          },
        },
      },
      responsiveLevels: [1240, 1024, 778, 480],
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: [1920, 1024, 778, 480],
      gridheight: [1e3, 1e3, 1e3, 1e3],
      lazyType: "none",
      shadow: 0,
      spinner: "spinner3",
      stopLoop: "off",
      stopAfterLoops: -1,
      stopAtSlide: -1,
      shuffle: "off",
      autoHeight: "off",
      fullScreenAutoWidth: "off",
      fullScreenAlignForce: "off",
      fullScreenOffsetContainer: "",
      fullScreenOffset: "",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: !1,
      fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: !1,
      },
    });
}
function RevolutionInit2() {
  $("#rev_slider_2")
    .show()
    .revolution({
      sliderType: "standard",
      sliderLayout: "fullscreen",
      dottedOverlay: "none",
      delay: 9e3,
      navigation: { onHoverStop: "off" },
      responsiveLevels: [1240, 1024, 778, 480],
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: [1920, 1024, 778, 480],
      gridheight: [900, 768, 960, 720],
      lazyType: "none",
      shadow: 0,
      spinner: "spinner3",
      stopLoop: "off",
      stopAfterLoops: -1,
      stopAtSlide: -1,
      shuffle: "off",
      autoHeight: "off",
      fullScreenAutoWidth: "off",
      fullScreenAlignForce: "off",
      fullScreenOffsetContainer: "",
      fullScreenOffset: "",
      disableProgressBar: "on",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: !1,
      fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: !1,
      },
    });
}
function RevolutionInit3() {
  $("#rev_slider_3")
    .show()
    .revolution({
      sliderType: "standard",
      sliderLayout: "auto",
      dottedOverlay: "none",
      delay: 9e3,
      navigation: { onHoverStop: "off" },
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: 1920,
      gridheight: [1e3, 1e3, 1e3, 2e3],
      lazyType: "none",
      parallax: {
        type: "mouse",
        origo: "enterpoint",
        speed: 400,
        levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
      },
      shadow: 0,
      spinner: "spinner3",
      stopLoop: "off",
      stopAfterLoops: -1,
      stopAtSlide: -1,
      shuffle: "off",
      autoHeight: "off",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: !1,
      fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: !1,
      },
    });
}
!(function (e, t, o) {
  "use strict";
  o(e).on("load", function () {
    o(".noo-spinner").fadeOut(500, function () {
      o(".noo-spinner").remove();
    });
  }),
    o(e).on("resize", function () {}),
    o(e).on("scroll", function () {
      o(this).scrollTop() > 0
        ? o(".header-desktop").addClass("scrolling-menu")
        : o(".header-desktop").removeClass("scrolling-menu"),
        o(this).scrollTop() > 100
          ? o("#backtotop").addClass("show")
          : o("#backtotop").removeClass("show");
    }),
    o(t).ready(function (o) {
      var a = o(".top-search");
      o(".top-search-btn").on("click", function () {
        a.hasClass("open")
          ? a.slideUp().removeClass("open")
          : (a.addClass("open").slideDown(), o(".top-search-input").focus());
      }),
        o(t).on("click", function (e) {
          0 == o(e.target).closest(a).length &&
            0 == o(e.target).closest(".top-search-btn").length &&
            a.hasClass("open") &&
            a.slideUp().removeClass("open");
        }),
        owlCarousel(),
        slideSlick(),
        o(".md-trigger, .md-close").on("click", function () {
          o(".md-overlay").toggleClass("show");
        }),
        o(".icon-boxes-bg").each(function () {
          o(this).children(".icon-boxes-icon").attr("data-bg-image") &&
            o(this)
              .children(".icon-boxes-icon")
              .css(
                "background-image",
                'url("' +
                  o(this).children(".icon-boxes-icon").attr("data-bg-image") +
                  '")'
              );
        }),
        o(".film-post-slider .item").each(function () {
          o(this).attr("data-bg-image") &&
            o(this).css(
              "background-image",
              'url("' + o(this).attr("data-bg-image") + '")'
            );
        }),
        o(".film-post-slider").length > 0 && bannerSlick(),
        o('[data-toggle="tooltip"]').tooltip(),
        o(".open-popup-link").magnificPopup({ type: "inline", midClick: !0 }),
        o(".gallery-item").length > 0 &&
          o(".gallery-item").magnificPopup({ gallery: { enabled: !0 } }),
        o(".hamburger-menu").on("click", function () {
          o("body").addClass("open-right"),
            o(".open-right-content").addClass("open");
        }),
        o(".open-right-close .ion-android-close").on("click", function () {
          o("body").removeClass("open-right"),
            o(".open-right-content").removeClass("open");
        }),
        o(".counter-wraper").length > 0 &&
          o(".counter-wraper").each(function (e) {
            var t = o(this);
            t.waypoint({
              handler: function (e) {
                t.find(".counter-digit:not(.counted)")
                  .countTo()
                  .addClass("counted");
              },
              offset: "90%",
            });
          });
      var i = o(e).height();
      o(".film-one-page .film-one-page-item").css("height", i + "px"),
        o(".film-one-page .film-one-page-item").each(function () {
          var e = o(this).children(".film-one-page-item-inner").height();
          o(this)
            .find(".col-md-6")
            .css("height", e + "px");
        }),
        o(".onepage-pagination").length > 0 &&
          o(".onepage-pagination").singlePageNav({
            offset: 70,
            filter: ".onepage",
          }),
        o(".team-filter-scroll").length > 0 && filterScroll(),
        o("#open-left").on("click", function (e) {
          o(".site").addClass("open"), o(".slideout-menu").addClass("open");
        }),
        o(".site").on("click", function (e) {
          0 === o(e.target).closest("#open-left").length &&
            (o(".site").hasClass("open") && e.preventDefault(),
            o(this).removeClass("open"),
            o(".slideout-menu").removeClass("open"));
        }),
        o(".sub-menu-toggle").on("click", function (e) {
          o(this).parent("li").toggleClass("expand"),
            o(this).siblings(".sub-menu").slideToggle();
        }),
        fullScreenHeight(),
        googleMap(),
        progressBar(),
        o("#backtotop").on("click", function () {
          return o("html, body").animate({ scrollTop: 0 }, 0), !1;
        }),
        o("#rev_slider").length > 0 && RevolutionInit(),
        o("#rev_slider_2").length > 0 && RevolutionInit2(),
        o("#rev_slider_3").length > 0 && RevolutionInit3();
    });
})(window, document, jQuery);


jQuery(document).on("click",".close-btn",function(){
    jQuery("#menu-slideout").removeClass("open");
    jQuery(".site").removeClass("open");
});


jQuery('#mobile-menu li a').on('click', function () {
    //console.log("inner page")
    jQuery("#menu-slideout").removeClass("open");
    jQuery(".site").removeClass("open");
  });
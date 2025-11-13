/*

	Template Name: Automobile
	Author: Themewinter
	Author URI: https://themeforest.net/user/themewinter
	Description: Automobile
   Version: 1.0
   
   1. Main Slider
   2. Site Search
   
   
  
*/

$(function ($) {
   "use strict";


   $(window).on('load', function () {
      /* -----------------------------------------
                  prelaoder
      -------------------------------------------- */
      $('#preloader').addClass('loaded');

      $('.prelaoder-btn').on('click', function (e) {
         e.preventDefault();
         if (!($('#preloader').hasClass('loaded'))) {
            $('#preloader').addClass('loaded');
         }
      })
   })

   /* ---------------------------------------------
                     Menu Toggle 
   ------------------------------------------------ */

   if ($(window).width() < 991) {
      $(".navbar-nav li a").on("click", function () {
         $(this).parent("li").find(".dropdown-menu").slideToggle();
         $(this).find("i").toggleClass("fa-angle-up fa-angle-down");
      });
   }

   /* ---------------------------------------------
                     Main Slider 
   ------------------------------------------------ */

   $(".ts-slider-area").owlCarousel({
      items: 1,
      loop: true,
      smartSpeed: 900,
      dots: false,
      nav: true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      autoplay: false,
      mouseDrag: true,
      responsive: {
         0: {
            nav: false,
            mouseDrag: false,
         },
         600: {
            nav: false,
            mouseDrag: false,
         },
         1000: {
            nav: true,
            mouseDrag: true,
         }
      }
   });

   /* ---------------------------------------------
                     Intro Slider 
   ------------------------------------------------ */

   $(".intro-content-carousel").owlCarousel({
      items: 1,
      loop: true,
      smartSpeed: 900,
      dots: false,
      nav: true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      autoplay: false
   });

   /* ---------------------------------------------
                     Service Slider 
   ------------------------------------------------ */

   $(".service-carousel").owlCarousel({
      items: 3,
      loop: true,
      smartSpeed: 900,
      dots: false,
      nav: true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      autoplay: false,
      responsive: {
         0: {
            items: 1,
         },
         600: {
            items: 2,
         },
         1000: {
            items: 3,
         }
      }
   });


   /* ---------------------------------------------
               Testimonnial Slider 1
   ------------------------------------------------ */

   $(".testimonial-carousel").owlCarousel({
      items: 1,
      loop: true,
      smartSpeed: 900,
      dots: true,
      nav: false,
      autoplay: false
   });


   /* ---------------------------------------------
               Testimonnial Slider 2
   ------------------------------------------------ */

   $(".ts-testimonial").owlCarousel({
      items: 3,
      loop: true,
      smartSpeed: 900,
      dots: true,
      margin: 30,
      nav: false,
      autoplay: false,
      responsive: {
         0: {
            items: 1,
         },
         600: {
            items: 2,
         },
         1000: {
            items: 3,
         }
      }
   });

   /* ---------------------------------------------
               Testimonnial Slider 3
   ------------------------------------------------ */

   $(".testimonial-standard").owlCarousel({
      items: 2,
      loop: true,
      smartSpeed: 900,
      dots: false,
      margin: 45,
      nav: true,
      autoplay: false,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      responsive: {
         0: {
            items: 1,
         },
         600: {
            items: 2,
         },
         1000: {
            items: 2,
         }
      }
   });

   /* ---------------------------------------------
               Testimonnial Slider 4
   ------------------------------------------------ */

   $(".testimonial-classic").owlCarousel({
      items: 1,
      loop: true,
      smartSpeed: 900,
      dots: true,
      nav: false,
      autoplay: false,
   });

   /* ---------------------------------------------
               Testimonnial Slider 5
   ------------------------------------------------ */

   $(".testimonial-slide").owlCarousel({
      items: 1,
      loop: true,
      smartSpeed: 900,
      dots: false,
      nav: true,
      autoplay: false,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
   });

   /* ---------------------------------------------
                     News Slider 
   ------------------------------------------------ */

   $(".news-carousel").owlCarousel({
      items: 3,
      loop: false,
      smartSpeed: 900,
      margin: 30,
      dots: false,
      nav: true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      autoplay: false,
      responsive: {
         0: {
            items: 1,
         },
         600: {
            items: 2,
         },
         1000: {
            items: 3,
         },
      }
   });

   /* ---------------------------------------------
                     Team Slider 
   ------------------------------------------------ */

   $(".team-carousel").owlCarousel({
      items: 3,
      loop: true,
      smartSpeed: 900,
      margin: 30,
      dots: false,
      nav: true,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      autoplay: false,
      responsive: {
         0: {
            items: 1,
         },
         600: {
            items: 2,
         },
         1000: {
            items: 3,
         },
      }
   });

   /* ---------------------------------------------
                     Partner Slider 
   ------------------------------------------------ */

   $(".partner-carousel").owlCarousel({
      items: 5,
      loop: true,
      smartSpeed: 900,
      dots: false,
      nav: false,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      autoplay: true,
      responsive: {
         0: {
            items: 2,
         },
         600: {
            items: 3,
         },
         1000: {
            items: 5,
         }
      }
   });

   /* ---------------------------------------------
                     Site Search 
   ------------------------------------------------ */


   $(".cart-link i.icon-cross").on("click", function (event) {
      event.preventDefault()
      $(".cart-link i.icon-search").addClass("show");
      $(".cart-link form .search-box").removeClass("show");
      $(".cart-link i.icon-cross").removeClass("show");
   });
   $(".cart-link i.icon-search").on("click", function () {
      $(".cart-link i.icon-search").removeClass("show");
      $(".cart-link form .search-box").addClass("show");
      $(".cart-link i.icon-cross").addClass("show");
   });

   /* ---------------------------------------------
                     Back to top 
   ------------------------------------------------ */

   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
         $('#back-to-top').fadeIn();
      } else {
         $('#back-to-top').fadeOut();
      }
   });

   /* ---------------------------------------------
                     Back to top 
   ------------------------------------------------ */
   $('#back-to-top').on('click', function () {
      $('#back-to-top').tooltip('hide');
      $('body,html').animate({
         scrollTop: 0
      }, 800);
      return false;
   });

   $('#back-to-top').tooltip('hide');

   /* ---------------------------------------------
                     Popup video 
   ------------------------------------------------ */

   if ($('.img-gallery').length > 0) {
      $('.img-gallery').magnificPopup({
         delegate: 'a',
         type: 'image',
         tLoading: 'Loading image #%curr%...',
         mainClass: 'mfp-img-mobile',
         gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
         },
         image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
               return item.el.attr('title') + '<small>Credit</small>';
            }
         }
      });
   }

   /* ---------------------------------------------
                     Popup Image 
   ------------------------------------------------ */

   if ($('.popup-btn').length > 0) {
      $('.popup-btn').magnificPopup({
         disableOn: 500,
         type: 'iframe',
         mainClass: 'mfp-fade',
         removalDelay: 160,
         preloader: false,

         fixedContentPos: false
      });
   }

   /* ---------------------------------------------
                        Progress Bar 
      ------------------------------------------------ */
   function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();

      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
   }

   $(window).scroll(function () {
      if ($('.progress-bar').lentgh > 0) {
         if (isScrolledIntoView('.progress-bar') === true) {
            $('.progress-bar').css(
               'transition-duration', '2s'
            );
         }
      }

   });

   if ($('.progress .progress-bar').length > 0) {
      $('.progress .progress-bar').css("width", function () {
         return $(this).attr("aria-valuenow") + "%";
      });
   }
});
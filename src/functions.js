import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Functions() {
    if ($('#preloader').length) {
      $('#preloader').delay(1750).fadeOut('slow', function() {
        $(this).remove();
      });
    }

    var scrolltoOffset = $('#header').outerHeight() - 2;
    $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
      if (window.location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && window.location.hostname == this.hostname) {
        var target = $(this.hash);
        if (target.length) {
          e.preventDefault();
  
          var scrollto = target.offset().top - scrolltoOffset;
          if ($(this).attr("href") == '#header') {
            scrollto = 0;
          }
  
          $('html, body').animate({
            scrollTop: scrollto
          }, 1500);
  
          if ($(this).parents('.nav-menu, .mobile-nav').length) {
            $('.nav-menu .active, .mobile-nav .active').removeClass('active');
            $(this).closest('li').addClass('active');
          }
  
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').fadeOut();
          }
          return false;
        }
      }
    });
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500);
      }
    }
    if ($('.nav-menu').length) {
      var $mobile_nav = $('.nav-menu').clone().prop({
        class: 'mobile-nav d-lg-none'
      });
      $('body').append($mobile_nav);
      $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
      $('body').append('<div class="mobile-nav-overly"></div>');
  
      $(document).on('click', '.mobile-nav-toggle', function(e) {
        $('body').toggleClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        $('.mobile-nav-overly').toggle();
      });
  
      $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
        e.preventDefault();
        $(this).next().slideToggle(300);
        $(this).parent().toggleClass('active');
      });
  
      $(document).on('click',function(e) {
        var container = $(".mobile-nav, .mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').fadeOut();
          }
        }
      });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
      $(".mobile-nav, .mobile-nav-toggle").hide();
    }
    var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');
  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
      $('.back-to-top').fadeIn('slow');
    } else {
      $('#header').removeClass('header-scrolled');
      $('.back-to-top').fadeOut('slow');
    }
  });
  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }
  $('.back-to-top').on('click',function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500);
    return false;
  });
  
  $('.progress .progress-bar').each(function() {
    $(this).css("width", $(this).attr("aria-valuenow") + '%');
  });
  $('.collapse').collapse()

  var button_boxButton = function(e) {

    e.preventDefault();
    //reset animation
    e.target.classList.remove('button_box');
    
    e.target.classList.add('button_box');
    setTimeout(function(){
      e.target.classList.remove('button_box');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', button_boxButton, false);
  }


// !function(f,b,e,v,n,t,s)
// {
//   if(f.fbq) return;

//   n=f.fbq=function()
//   {n.callMethod?
// n.callMethod.apply(n,arguments):n.queue.push(arguments)};
// if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
// n.queue=[];t=b.createElement(e);t.async=!0;
// t.src=v;s=b.getElementsByTagName(e)[0];
// s.parentNode.insertBefore(t,s)
// }

// (window, document,'script',
// 'https://connect.facebook.net/en_US/fbevents.js');


// function waitForFbq(callback){
//   if(typeof fbq !== 'undefined'){
//       callback()
//   } else {
//       setTimeout(function () {
//           waitForFbq(callback)
//       }, 1000000)
//   }
// }

// waitForFbq(function () {
//   fbq('track', 'Registered');
// })


// fbq('init', '4074841039275197');
// fbq('track', 'PageView');


// <noscript><img height="1" width="1" style="display:none"
// src="https://www.facebook.com/tr?id=4074841039275197&ev=PageView&noscript=1"
// />
// </noscript>

}
export default Functions;
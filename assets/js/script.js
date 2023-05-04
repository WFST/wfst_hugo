// Passive event listeners
jQuery.event.special.touchstart = {
  setup: function (_, ns, handle) {
    'use strict';
    this.addEventListener('touchstart', handle, {
      passive: !ns.includes('noPreventDefault')
    });
  }
};
jQuery.event.special.touchmove = {
  setup: function (_, ns, handle) {
    'use strict';
    this.addEventListener('touchmove', handle, {
      passive: !ns.includes('noPreventDefault')
    });
  }
};

// Preloader js
$(window).on('load', function () {
  'use strict';
  $('.preloader').fadeOut(0);
});

$(document).ready(function () {
  'use strict';

  // 自定义的特效
  const transparentHeight = ($('.slider').outerHeight() || $('.page-title').outerHeight()) - $('.navigation').outerHeight();
  $('.section-subtitle').css('color', 'transparent')
  $(window).scroll(function () {
    let topDistance = $(document).scrollTop();
    let windowHeight = $(window).height();
    // 导航栏变色
    if (topDistance > transparentHeight) {
      $('.navigation').addClass('navi-milk');
      $('.navigation').removeClass('navi-ice');
    }
    else {
      $('.navigation').addClass('navi-ice');
      $('.navigation').removeClass('navi-milk');
      if (topDistance) {

      }
    }

    //首页子标题浮现
    $('.section-subtitle').each(function () {
      if (topDistance > $(this).offset().top - windowHeight * 2 / 3) {
        $(this).css('color', '');
        $(this).addClass('tracking-in-expand-fwd');
      }
      else if (topDistance <= Math.max(0, $(this).offset().top - windowHeight)) {
        $(this).removeClass('tracking-in-expand-fwd');
        $(this).css('color', 'transparent');
      }
    })
  })
  // 初始滑动
  $(window).scroll();

  // 图片懒加载
  function lazyload() {
    $('[bg-img]').each(function () {
      $(this).attr('style', $(this).attr('bg-img'));
    })
    $('[data-src]').each(function () {
      $(this).attr('src', $(this).attr('data-src'));
    })
  }
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
  lazyload();

  // Shuffle js filter and masonry
  var containerEl = document.querySelector('.shuffle-wrapper');
  if (containerEl) {
    var Shuffle = window.Shuffle;
    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
      itemSelector: '.shuffle-item',
      buffer: 1
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
      var input = evt.currentTarget;
      if (input.checked) {
        myShuffle.filter(input.value);
      }
    });
  }

  $('.portfolio-single-slider').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000

  });

  $('.clients-logo').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.testimonial-slider').slick({
    // centerMode: true,
    // centerPadding: '60px',
    slidesToShow: 1,
    infinite: true,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: true,
  });

  //  Count Up
  function counter() {
    var oTop;
    if ($('.count').length !== 0) {
      oTop = $('.count').offset().top - window.innerHeight;
    }
    if ($(window).scrollTop() > oTop) {
      $('.count').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 1000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }
        });
      });
    }
  }
  $(window).on('scroll', function () {
    counter();
  });

  // Turn cloaked e-mail addresses into clickable mailto links
  let emailSpans = document.getElementsByClassName("cloaked-e-mail");

  for (let emailSpan of emailSpans) {
    let emailLink = document.createElement("a");
    let emailAddress = emailSpan.attributes.getNamedItem("data-user").value.split('').reverse().join('') + "@" + emailSpan.attributes.getNamedItem("data-domain").value.split('').reverse().join('');
    emailLink.href = "mailto:" + emailAddress;
    emailLink.innerText = emailAddress;
    emailSpan.parentElement.insertBefore(emailLink, emailSpan);
    emailSpan.parentElement.removeChild(emailSpan)
  }

  // map initialize
  $(map);
});
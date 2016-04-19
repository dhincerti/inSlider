(function($) {
  $.fn.inSlider = function(options) {

    var defaults = {
      'interval' : 5000,
      'slidesClass' : '.item',
      'height' : 'auto'
    };

    var settings = $.extend({}, defaults, options);
    var mainDefaultClass = "inSlider";
    var itemDefaultClass = "item";
    var activeClass = "active";
    var paginationClass = "slider-pagination";
    var paginationItemClass = "pagination-item";
    var element;
    var slideList;
    var slideLength = 0;
    var nextIndex = 1;
    var interval;

    /* One time sets */
    var setElement = function(el) {
      element = el;
    };

    var setSlideList = function() {
      slideList = element.find(settings.slidesClass);
    };

    var setSlideLength = function() {
      slideLength = slideList.length;
    };

    /* Pagination */
    var setNextIndex = function(index) {
      nextIndex = nextIndex + 1 < slideLength ? index + 1 : 0;
    };

    var addPagination = function() {
      var pagination = '<ul class="' + paginationClass + '">';
      for (i = 1; i <= slideLength; i++) {
        pagination += '<li class="' + paginationItemClass + '" data-index="' + i + '">' + i + '</li>';
      }
      pagination += '</ul>';
      element.append(pagination);
    };

    var setPaginationElements = function() {
      paginationElements = element.find('.' + paginationClass + ' li');
    };

    var clickPaginationHandler = function() {
      $('body').delegate('.' + paginationItemClass, "click", function() {
        clearInterval(interval);
        var goToIndex = $(this).data('index') - 1;
        goToSlide(goToIndex);
        startAnimation();
      });
    };

    /* Animate Slide */

    var addSlideDefaultClasses = function() {
      element.addClass(mainDefaultClass);
      slideList.addClass(itemDefaultClass);
    };

    var setSlideHeight = function() {
      if (settings.height == 'auto') {
        var activeSlide = element.find('.' + itemDefaultClass + '.' + activeClass);
        if (activeSlide.lenght < 1) {
          activeSlide = slideList.first();
        }
        var newHeight = activeSlide.height();
        element.height(newHeight);
      } else {
        element.height(settings.height);
      }
    };

    var goToSlide = function(index) {
      slideList.removeClass(activeClass);
      paginationElements.removeClass(activeClass);
      slideList.eq(index).addClass(activeClass);
      paginationElements.eq(index).addClass(activeClass);
      setSlideHeight();
      setNextIndex(index);
    };

    var startAnimation = function() {
      interval = setInterval(function() {
        goToSlide(nextIndex);
      }, options.interval);
    };

    /* Start slide */

    var init = function(element) {
      setElement(element);
      setSlideList();
      setSlideLength();
      addSlideDefaultClasses();
      addPagination();
      setPaginationElements();
      slideList.eq(0).addClass(activeClass);
      paginationElements.eq(0).addClass(activeClass);
      setSlideHeight();
      startAnimation();
      clickPaginationHandler();
    };

    return this.each(function() {
      init($(this));
    });

  };
})(jQuery);
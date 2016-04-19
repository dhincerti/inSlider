(function($) {
  $.fn.inSlider = function(options) {

    var defaults = {
      'interval' : 5000,
      'slidesClass' : '.item',
      'height' : 'auto',
      'paginationPosition' : 'bottom'
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
    var nextIndex = 0;
    var interval;

    var setElement = function(el) {
      element = el;
    };

    var setSlideList = function() {
      slideList = element.find(settings.slidesClass);
    };

    var setSlideLength = function() {
      slideLength = slideList.length;
    };

    var setNextIndex = function(index) {
      nextIndex = nextIndex + 1 < slideLength ? index + 1 : 0;
    };

    var addPagination = function() {
      var paginationPositionClass = paginationClass + '-' + settings.paginationPosition;
      var pagination = '<ul class="' + paginationClass + ' ' + paginationPositionClass + '">';
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

    var addSlideDefaultClasses = function() {
      element.addClass(mainDefaultClass);
      slideList.addClass(itemDefaultClass);
    };

    var setSlideHeight = function() {
      if (settings.height == 'auto') {
        var activeSlide = element.find('.' + itemDefaultClass + '.' + activeClass);
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
      }, settings.interval);
    };
    
    var sliderConf = function(element) {
      setElement(element);
      setSlideList();
      setSlideLength();
      addSlideDefaultClasses();
    };
    
    var paginationConf = function() {
      addPagination();
      setPaginationElements();
      clickPaginationHandler();
    };

    var init = function(element) {
      sliderConf(element);
      paginationConf();

      // Prevent the plugin to start before the images load
      $(window).load(function() {
        goToSlide(nextIndex);
        startAnimation();
      });
    };

    return this.each(function() {
      init($(this));
    });

  };
})(jQuery);
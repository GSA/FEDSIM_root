
jQuery.extend({
  randomColor: function() {
    return '#' + Math.floor(Math.random()*256*256*256).toString(16);
  }
});

(function(removeClass) {
  jQuery.fn.removeClass = function(value) {
    if(value && typeof value.test === 'function') {
      for(var i = 0; i < this.length; i++) {
        var elem = this[i];
        if( elem.nodeType === 1 && elem.className ) {
          var classNames = elem.className.split(/\s+/);
          for(var n = 0; n < classNames.length; n++) {
            if(value.test(classNames[n])) {
              classNames.splice(n, 1);
            }
          }
          elem.className = jQuery.trim(classNames.join(" "));
        }
      }
    } else {
      removeClass.call(this, value);
    }

    return this
  }
})(jQuery.fn.removeClass);

jQuery(document).ready(function() {
  jQuery('html').removeClass('no-js');
});


// The following are from codekit project

// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
jQuery(document).foundation();


(function($) {
  $(document).ready(function() {

    $('.milestone strong').appear(function() {
      $(this).countTo(100);
    });

    $(".bars").each(function() {
      $('> li > .highlighted', $(this)).each(function() {
        $(this).appear(function() {
          var percent = $(this).attr("data-percent");
          // $bar.html('<p class="highlighted"><span class="tip">'+percent+'%</span></p>');
          // http://stackoverflow.com/questions/3363035/jquery-animate-forces-style-overflowhidden
          $(this).animate({
            'width': percent + '%'
          }, 1700, function() { $(this).css('overflow', 'visible'); });
        });
      });
    });

    $(".members").each(function() {

      var members = $(this);

      $(this).find('.member').each(function() {
        $(this).click(function() {
          $(members).find('.member').removeClass('active');
          $(this).addClass('active');
          var target = $(this).attr('data-target');
          // console.log($(members).find('.member-intro'));
          $(members).find('.member-intro').removeClass('active');
          $(target).addClass('active');
        });
      });

    });

    $('.fadeinleft, .fadeinright, .fadein').appear(function() {
      var delay = $(this).data('delay');
      var that = this;

      setTimeout(function() {
        $(that).addClass('appear');
      }, delay)

      // $(this).delay(delay).addClass('appear');
      // $.delay(delay).addClass('appear');
      // $(this).addClass('appear');
    });

    $('ul#filter li a').click(function() {
      $('ul#filter li').removeClass('current');
      $(this).closest('li').addClass('current');

      var cat = $(this).attr('data-cat');

      var gallery = $('ul#filter').closest('.gallery-wrapper').find('ul.gallery');

      if (cat === 'all') {
        $('li', gallery).removeClass('hidden');
      } else {
        $('li', gallery).each(function() {
          if ($(this).hasClass(cat)) {
            $(this).removeClass('hidden');
          } else {
            $(this).addClass('hidden');
          }
        });
      }

      return false;
    });


    $('form#contact').validate({
      messages: { },
      submitHandler: function(form) {
        $.ajax({
          type: 'POST',
          url: 'send.php',
          data: $(form).serialize(),
          success: function(data) {
            if(data.match(/success/)) {
              $(form).trigger('reset');
              $('#thanks').show().fadeOut(5000);
            }
          }
        });
        return false;
      }
    });


  });
})(jQuery);



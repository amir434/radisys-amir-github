// //*
//  |--------------------------------------------------------------------------
//  | Sticky Sidebar
//  |--------------------------------------------------------------------------
// */
if ($(".uberflip-vertical")[0]) {
  $.fn.stickyTopBottom = function (options) {
    var $el,
      container_top,
      current_translate,
      element_top,
      last_viewport_top,
      viewport_height;
    if (options == null) {
      options = {};
    }
    options = $.extend(
      {
        container: $("body"),
        top_offset: 0,
        bottom_offset: 0,
      },
      options
    );
    $el = $(this);
    container_top = options.container.offset().top;
    element_top = $el.offset().top;
    viewport_height = $(window).height();
    $(window).on("resize", function () {
      return (viewport_height = $(window).height());
    });
    current_translate = 0;
    last_viewport_top =
      document.documentElement.scrollTop || document.body.scrollTop;
    return $(window).scroll(function (event) {
      var container_bottom,
        effective_viewport_bottom,
        effective_viewport_top,
        element_fits_in_viewport,
        element_height,
        is_scrolling_up,
        new_translation,
        viewport_bottom,
        viewport_top;
      viewport_top =
        document.documentElement.scrollTop || document.body.scrollTop;
      viewport_bottom = viewport_top + viewport_height;
      effective_viewport_top = viewport_top + options.top_offset;
      effective_viewport_bottom = viewport_bottom - options.bottom_offset;
      element_height = $el.height();
      is_scrolling_up = viewport_top < last_viewport_top;
      element_fits_in_viewport = element_height < viewport_height;
      new_translation = null;
      if (is_scrolling_up) {
        if (effective_viewport_top < container_top) {
          new_translation = 0;
        } else if (effective_viewport_top < element_top + current_translate) {
          new_translation = effective_viewport_top - element_top;
        }
      } else if (element_fits_in_viewport) {
        if (effective_viewport_top > element_top + current_translate) {
          new_translation = effective_viewport_top - element_top;
        }
      } else {
        container_bottom = container_top + options.container.height();
        if (effective_viewport_bottom > container_bottom) {
          new_translation = container_bottom - (element_top + element_height);
        } else if (
          effective_viewport_bottom >
          element_top + element_height + current_translate
        ) {
          new_translation =
            effective_viewport_bottom - (element_top + element_height);
        }
      }
      if (new_translation !== null) {
        current_translate = new_translation;
        $el.css("transform", "translate(0, " + current_translate + "px)");
      }
      return (last_viewport_top = viewport_top);
    });
  };

  $(".uberflip-vertical_inner").stickyTopBottom({
    container: $(".uberflip-vertical-col"),
  });
}

// Sidebar width adjustment
function sidebarWidthAdjust() {
  var sidebarWidth = $(".uberflip-vertical").width();
  $(".uberflip-vertical_inner").css("width", sidebarWidth);
}

sidebarWidthAdjust();

$(window).resize(function () {
  sidebarWidthAdjust();
});

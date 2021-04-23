// //*
//  |--------------------------------------------------------------------------
//  | Hamburger Menu
//  |--------------------------------------------------------------------------
// */
var burgerMenu = $("#burger--menu");
var burgerMenuLinks = $("nav#block-radisys-main-menu ul.menu.menu-level-0");
function closeMegaMenuMobile() {
  burgerMenuLinks.css("display", "none");
  $("ul.menu.menu-level-0>li>a").removeClass("opened");
  $("ul.menu.menu-level-1>li").removeClass("opened");
  $("ul.menu.menu-level-1").removeClass("menu-level-1--open");
  $(".mega-menu-filter").css("display", "none");
  $("body").css("overflow", "auto");
  $("header").removeClass("header-scroll");
}
function openMegaMenuMobile() {
  burgerMenuLinks.css("display", "block");
  $("body").css("overflow", "hidden");
  $("header").addClass("header-scroll");
}
console.log(burgerMenu);
$(burgerMenu).click(function () {
  if ($(burgerMenuLinks).css("display") == "block") {
    closeMegaMenuMobile();
    $(this).removeClass("burger-menu--open");
  } else {
    openMegaMenuMobile();
    $(this).addClass("burger-menu--open");
  }
});

$(".menu.menu-level-2").scroll(function () {
  var scroll = $(this).scrollTop();
  console.log(scroll);
  if (scroll > 0) {
    $(this).find(".menu-item--back_level2").addClass("mobile-menu--scrolling");
  } else {
    $(this)
      .find(".menu-item--back_level2")
      .removeClass("mobile-menu--scrolling");
  }
});

function megaMenuMobile() {
  var mobileMenuHeaderHeight = $(".region.region-header").height();
  // $("ul.menu.menu-level-0").css("top", mobileMenuHeaderHeight + "px");
  // if ($("ul.menu.menu-level-1 .menu-item").hasClass("menu-item--back_level1")) {
  // } else {
  //   $("ul.menu.menu-level-1").prepend(
  //     "<li class='menu-item menu-item--back_level1'> <a href><span class='icon-arrow-lefttrendy'></span> Back</a> </li>"
  //   );
  // }
  if ($("ul.menu.menu-level-2 .menu-item").hasClass("menu-item--back_level2")) {
  } else {
    $("ul.menu.menu-level-2").prepend(
      "<li class='menu-item menu-item--back_level2'> <a href><span class='icon-arrow-lefttrendy'></span> Back</a> </li>"
    );
  }

  $(".menu-item--back_level1").click(function () {
    console.log(this);
    event.preventDefault();
    $(this).parent().removeClass("menu-level-1--open");
    $(".menu.menu-level-2").scrollTop(0);
  });
  $(".menu-item--back_level2").click(function () {
    console.log($(this).parent().parent().parent());
    event.preventDefault();
    $(this).parent().parent().parent().removeClass("opened");
    $(".menu.menu-level-2").scrollTop(0);
    $('ul.menu.menu-level-1').removeClass('menu-level-1--open');
  });
}

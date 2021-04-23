// //*
//  |--------------------------------------------------------------------------
//  | Generate menu h4 title
//  |--------------------------------------------------------------------------
// */
$(".mega-menu--title").each(function () {
  var menuTitle = $(this).parents().eq(2).prev().text();
  $(this).text(menuTitle);
});

// //*
//  |--------------------------------------------------------------------------
//  | Adjust menu position (Y-axis depending on header nav height)
//  |--------------------------------------------------------------------------
// */
$(window).on("scroll", function () {
  scrollingDown();
});
scrollingDown = () => {
  let windowScrollTop = window.pageYOffset;
  if (windowScrollTop > 50) {
    $(".header-regular").addClass("header-scroll");
    //   $("body").css("paddingTop", headerNavHeight);
    //   $("body").attr(
    //     "style",
    //     "padding-top:" + headerNavHeight + "px!important"
    //   );
    // } else {
    //   $("body").css("paddingTop", "0");
    //   $("body").attr("style", "padding-top:" + 0 + "px!important");
  } else {
    $(".header-regular").removeClass("header-scroll");
  }
};

// //*
//  |--------------------------------------------------------------------------
//  | Adjust menu position when user logged in
//  |--------------------------------------------------------------------------
// */
// var headerNavHeight = $(".header-regular").height();
// console.log(headerNavHeight);
// $("ul.menu.menu-level-1").css("top", headerNavHeight);
if ($(".toolbar-horizontal")[0]) {
  // Do something if class exists
} else {
  // // Do something if class does not exist
  // $("body").css("paddingTop", headerNavHeight);
  // $("body").attr(
  //   "style",
  //   "padding-top:" + headerNavHeight + "px!important"
  // );
}

// //*
//  |--------------------------------------------------------------------------
//  | Fix Menu Height
//  |--------------------------------------------------------------------------
// */
var menuMaxHeight = [];
function megaMenuHeight(menuLevelOneItem) {
  // var menuMaxHeight = [];
  var menuLevel1 = $(menuLevelOneItem);
  var menuLevel2 = $(menuLevelOneItem).find("ul.menu.menu-level-2");

  menuLevel1.css("height", "auto");
  menuLevel2.css("height", "auto");

  var menuLevel1Height = $(".menu-level-1").height();
  var menuLevel2Height = $(menuLevelOneItem)
    .find("ul.menu.menu-level-2")
    .height();

  menuMaxHeight.push(menuLevel1Height);
  menuMaxHeight.push(menuLevel2Height);
}

function initalizeMegaMenuHeight() {
  $(".menu-level-1 > .menu-item--expanded").each(function () {
    megaMenuHeight(this);
    var largest = Math.max.apply(Math, menuMaxHeight);
    $(".menu-level-1").height(largest);
  });
}

if ($(window).width() < 991) {
  // Less than 991
  megaMenuMobile();
  window.addEventListener("resize", megaMenuMobile);
} else {
  // More than 991
  initalizeMegaMenuHeight();
  window.addEventListener("resize", initalizeMegaMenuHeight);
}


/* Create a configuration object */
var ss360Config = {
  /* Your site id */
  siteId: 'www.radisys.com',
  /* A CSS selector that points to your search  box */
  searchBox: {selector: '#searchBox'}
};
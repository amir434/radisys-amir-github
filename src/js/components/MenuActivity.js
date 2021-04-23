// //*
//  |--------------------------------------------------------------------------
//  | Menu Activity
//  |--------------------------------------------------------------------------
// */
// Dealing with top level navigation
var menuTopLevelItems = $(".menu.menu-level-0 > .menu-item");
$(menuTopLevelItems).each(function () {
  $(this)
    .find("a")
    .first()
    .click(function (event) {
      if ($(event.target).attr("href") === "") {
        event.preventDefault();
        // alert("target has no href!");
        if ($(event.target).hasClass("opened")) {
          $(event.target)
            .removeClass("opened")
            .parent()
            .find(".menu-level-1")
            .removeClass("menu-level-1--open");
          $(".mega-menu-filter").fadeOut().css("display", "none");
        } else {
          $(".menu-level-1").removeClass("menu-level-1--open");
          $(
            "ul.menu.menu-level-0 > .menu-item--expanded > a.opened"
          ).removeClass("opened");

          $(event.target)
            .addClass("opened")
            .parent()
            .find(".menu-level-1")
            .addClass("menu-level-1--open");
          $("ul.menu.menu-level-1>li").removeClass("opened");
          console.log($(window).width());
          if ($(window).width() < 991) {
            // alert('Less than 960');
          } else {
            // alert('More than 960');
            $("ul.menu.menu-level-1>li:first-of-type").addClass("opened");
          }
          $(".mega-menu-filter").fadeIn().css("display", "block");
        }
      }
    });
});
// //*
//  |--------------------------------------------------------------------------
//  | Filter Click
//  |--------------------------------------------------------------------------
// */
function closeMenu() {
  $("ul.menu.menu-level-1 .menu-item").removeClass("opened");
  $(".menu-level-1").removeClass("menu-level-1--open");
  $("ul.menu.menu-level-0 > .menu-item--expanded > a.opened").removeClass(
    "opened"
  );
  $(".mega-menu-filter").fadeOut().css("display", "none");
  $(".menu-level-1").css("height", "0px");
  initalizeMegaMenuHeight();
}

$("#mega-menu-filter").click(function () {
  closeMenu();
});

// Dealing with mid (2nd level) navigation
var menuMidLevels = $(".menu-level-1 > .menu-item--expanded");
$(menuMidLevels).each(function (i, el) {
  console.log("mid level");
  if (i === 0) {
    // $(this).find("ul.menu.menu-level-2").css("opacity", "1");
  }
  $(this)
    .find("a")
    .first()
    .click(function (event) {
      if ($(event.target).attr("href") === "") {
        event.preventDefault();
        // alert("target has no href!");
        $("ul.menu.menu-level-1>li").removeClass("opened");
        $(event.target).parent().addClass("opened");
        // alert("hi");
      }
    });
});

$('li.menu-item.menu-item--expanded > a:contains(".")').remove();

// Replace search icon with search text (footer partner search)
$(
  ".ready-to-learn_section form#views-exposed-form-partner-search-page-1 .js-form-submit"
).replaceWith(
  '<button data-drupal-selector="edit-submit-partner-search-2" type="submit" id="edit-submit-partner-search--2" value="" class="button js-form-submit--partner-search js-form-submit form-submit"><span class="icon-searchtrendy"></span></button>'
);

// Grab menu links names
let linkNum = -1;
let menuItems = [];
$("ul.menu.menu-level-1 > li").each(function () {
  linkNum++;
  let linkText = $(this).find("a").first().text();
  menuItems.push(this);
  console.log(menuItems);
  $(".menu-level-0").append(
    '<li class="menu-item menu-item--expanded menu-added-item_dynamic' +
      linkNum +
      '" id="' +
      linkNum +
      '"><a class="cursor-pointer menu--link_dynamic">' +
      linkText +
      "</a></li>"
  );
  $(document).on(
    "click",
    ".menu-added-item_dynamic" + linkNum + "",
    function () {
      let clickedItem = menuItems[this.id];
      console.log(clickedItem.classList.contains("opened"));
      if (clickedItem.classList.contains("opened")) {
        clickedItem.classList.remove("opened");
        closeMenu();
      } else {
        $("li.menu-item.menu-item--expanded").removeClass("opened");
        clickedItem.classList.add("opened");
        $("ul.menu.menu-level-1").addClass("menu-level-1--open");
        $(".mega-menu-filter").fadeIn().css("display", "block");
      }
    }
  );
});

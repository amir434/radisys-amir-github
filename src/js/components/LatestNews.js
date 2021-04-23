// Set up the vars
var latestNews = $(".latest-news_content");
var newsElementsNumber = $(".latest-news_content").length;
var slidePosition = 0;
var newsSlideCount = 1;
// var slideUpStyle = {'transformY': + '-' + slidePosition + 'px'}

// Set up the function
function slideUp() {
  var newsElementHeight = $(".latest-news_content").height();
  newsSlideCount++;
  $(".row.latest-news_content").addClass("fadeFlash");
  if (newsSlideCount <= newsElementsNumber) {
    slidePosition += newsElementHeight;
    $(".row.latest-news_content").css({
      transform: "translateY(" + "-" + slidePosition + "px" + ")",
    });
    $(".latest-news_content").css("transition", "all 1s ease-out");
  } else {
    slidePosition = 0;
    $(".row.latest-news_content").css({
      transform: "translateY(" + 0 + "px" + ")",
    });
    newsSlideCount = 1;
  }

  setTimeout(function () {
    $(".row.latest-news_content").removeClass("fadeFlash");
  }, 1000);
}

timer = setInterval(function () {
  slideUp();
}, 4000);
$(".header--news").hover(
  function (ev) {
    clearInterval(timer);
  },
  function (ev) {
    timer = setInterval(function () {
      slideUp();
    }, 4000);
  }
);

function heroSliderMatchVideo() {
  $(".hero-slider--home_wrapper").height(
    $(".hero-banner--video_wrapper").height()
  );
}

heroSliderMatchVideo();

function timeOutFade(thefader, bgColor) {
  setTimeout(function () {
    $(thefader).attr("class", "hero-slider--home");
    $(thefader).addClass(bgColor);
  }, 400);
}

const video = $('#hero-banner--video').get(0);
const pauseButton = $('#pause-button');
console.log(video);

$(pauseButton).click(function(){
  if (!video.paused) {
    $(this).addClass('video-paused').find('span').attr('class', '').addClass('icon-playtrendy');
    video.pause();
  } else {
    $(this).removeClass('video-paused').find('span').attr('class', '').addClass('icon-pausetrendy');
    video.play();
  }
});
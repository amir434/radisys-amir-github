// //*
//  |--------------------------------------------------------------------------
//  | Hero Slider
//  |--------------------------------------------------------------------------
// */
if ($(".hero-slider--home")[0]) {
  console.log("it exists!");
  const siemaHome = new Siema({
    selector: ".hero-slider--home",
    onInit: printSlideIndex,
    loop: true,
    duration: 1300,
    easing: "ease-out",
    onChange: printSlideIndex,
  });

  function printSlideIndex() {
    var slides = document.querySelectorAll(".slide-item");
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[this.currentSlide + 1].classList.add("active");
    // slides[this.currentSlide + 1].find(".slide-item--color").textContent;
    var slideBgColor = slides[this.currentSlide + 1].querySelectorAll(
      ".slide-item--color"
    )[0].innerText;

    $(this.selector).addClass("fade-out");

    timeOutFade(this.selector, slideBgColor);
  
  }

  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

  prev.addEventListener("click", () => siemaHome.prev());
  next.addEventListener("click", () => siemaHome.next());

  if ($(".hero-slider--home_wrapper").length > 0) {
 
    // listen for keydown event.slide-item
    timerHero = setInterval(function () {
      siemaHome.next();
    }, 8000);
    $(".hero-slider--home_wrapper").hover(
      function (ev) {
        clearInterval(timerHero);
        console.log("u are hovering");
      },
      function (ev) {
        console.log("NOT hovering");
        timerHero = setInterval(function () {
          siemaHome.next();
        }, 8000);
      }
    );
      
  }

  // adjust slide text width
  function slideTextWidth() {
    let winWidth = $(window).width();
    let containerWidth = $(".container").width();
    console.log("container width" + containerWidth);
    let winWidthMinusCon = winWidth - containerWidth;
    let windowWidthPadding = winWidthMinusCon / 2 + 15;
    console.log(windowWidthPadding);
    $(".slide-item").css("paddingRight", windowWidthPadding + "px");
    $(".hero-slide-arrow--container").css(
      "paddingRight",
      windowWidthPadding - 60 + "px"
    );
  }
  slideTextWidth();

  $(window).resize(function () {
    slideTextWidth();
    heroSliderMatchVideo();
  });


  // Add a function that generates pager
  Siema.prototype.addPagination = function () {
    for (let i = 0; i < this.innerElements.length; i++) {
      const btn = document.createElement("li");
      btn.className = "slider-bullet";
      btn.addEventListener("click", () => this.goTo(i));
      document.getElementById("home-carousel-nav").appendChild(btn);
      // this.selector.appendChild(btn);
      //console.log(divs);
    }
  };

 // Trigger pagination creator
 siemaHome.addPagination();

 //Get the container element
  var heroBtnContainer = document.getElementById("home-carousel-nav");

  // Get all buttons with class="btn" inside the container
  var herobtns = heroBtnContainer.getElementsByClassName("slider-bullet");

  //active class to current slide
  var herocurrent = document.getElementsByClassName("hero-btn-active ");

  // ADD btn-active CLASS
  herobtns[0].className += " hero-btn-active ";

  // Loop through the buttons and add the hero-btn-active  class to the current/clicked button
  for (var i = 0; i < herobtns.length; i++) {
    herobtns[i].addEventListener("click", function () {
      // If there's no hero-btn-active  class
      if (herocurrent.length > 0) {
        herocurrent[0].className = herocurrent[0].className.replace(" hero-btn-active ", "");
      }
      // Add the hero-btn-active  class to the herocurrent/clicked button
      //remove hero-btn-active  from herocurrent and add hero-btn-active  to clicked one
      $( herocurrent ).removeClass("hero-btn-active ");
      this.className += " hero-btn-active ";
    });
  }

}


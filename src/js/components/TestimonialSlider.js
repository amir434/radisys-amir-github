// //*
//  |--------------------------------------------------------------------------
//  | Testimonials Slider
//  |--------------------------------------------------------------------------
// */


// extend a Siema class by two methods
// addDots - to create a markup for dots
// updateDots - to update classes on dots on change callback
class SiemaWithDots extends Siema {

  addDots() {
    // create a contnier for all dots
    // add a class 'dots' for styling reason
    this.dots = document.createElement('div');
    this.dots.classList.add('dots');

    // loop through slides to create a number of dots
    for (let i = 0; i < this.innerElements.length; i++) {
      // create a dot
      const dot = document.createElement('button');

      // add a class to dot
      dot.classList.add('dots__item');

      // add an event handler to each of them
      dot.addEventListener('click', () => {
        this.goTo(i);
      })

      // append dot to a container for all of them
      this.dots.appendChild(dot);
    }

    // add the container full of dots after selector
    this.selector.parentNode.insertBefore(this.dots, this.selector.nextSibling);
  }

  updateDots() {
    // loop through all dots
    for (let i = 0; i < this.dots.querySelectorAll('button').length; i++) {
      // if current dot matches currentSlide prop, add a class to it, remove otherwise
      const addOrRemove = this.currentSlide === i ? 'add' : 'remove';
      this.dots.querySelectorAll('button')[i].classList[addOrRemove]('dots__item--active');
    }
  }
}

if ($(".testimonials-container")[0]) {
  const testimonialSlider = new SiemaWithDots({
    selector: ".testimoninals-slide ",
    loop: true,
    duration: 1000,
    easing: "ease-out",
    // on init trigger method created above
    onInit: function () {
      this.addDots();
      this.updateDots();
    },
    // on change trigger method created above
    onChange: function () {
      this.updateDots()
    },
  });
  // set the auto change 
  if ($(".testimoninals-slide").length > 0) {
    // listen for keydown event.
    timerTestimonials = setInterval(function () {
      testimonialSlider.next();
    }, 7000);
    $(".testimoninals-slide").hover(
      function (ev) {
        clearInterval(timerTestimonials);
      },
      function (ev) {
        timerTestimonials = setInterval(function () {
          testimonialSlider.next();
        }, 7000);
      }
    );

  }
  
}


// if ($(".testimonials-container")[0]) {
//   const testimonialSlider = new Siema({
//     selector: ".testimoninals-slide ",
//     loop: true,
//     easing: 'linear',
//   });

//   const commentPrev = document.querySelector(".prev-comment");
//   const commentNext = document.querySelector(".next-comment");

//   commentPrev.addEventListener("click", () => testimonialSlider.prev());
//   commentNext.addEventListener("click", () => testimonialSlider.next());

//   // Add a function that generates pager
//   Siema.prototype.addPagination = function () {
//     for (let i = 0; i < this.innerElements.length; i++) {
//       const btn = document.createElement("li");
//       btn.className = "slider-bullet";
//       btn.addEventListener("click", () => this.goTo(i));
//       document.getElementById("carousel-nav").appendChild(btn);
//       // this.selector.appendChild(btn);
//       //console.log(divs);
//     }
//   };

//   // Trigger pagination creator
//   testimonialSlider.addPagination();

//   // Get the container element
//   var btnContainer = document.getElementById("carousel-nav");

//   // Get all buttons with class="btn" inside the container
//   var btns = btnContainer.getElementsByClassName("slider-bullet");

//   //active class to current slide
//   var current = document.getElementsByClassName("btn-active");

//   // ADD ACTIVE CLASS
//   btns[0].className += " btn-active";

//   // Loop through the buttons and add the active class to the current/clicked button
//   for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function () {
//       // If there's no active class
//       if (current.length > 0) {
//         current[0].className = current[0].className.replace(" btn-active", "");
//       }
//       // Add the active class to the current/clicked button
//       //remove active from current and add active to clicked one
//       $( current ).removeClass(" btn-active ");
//       this.className += " btn-active";
//     });
//   }

//   $(commentNext).click(function () {
//     var btns = $(".slider-bullet");
//     var current = document.querySelector(".slider-bullet.active");
//     var next = $(".slider-bullet.active").next();

//     $(".slider-bullet.active").next().addClass("active");
//     $(current).removeClass("active");

//     if (next.length < 1) {
//       var firstBtn = btns.eq(0);
//       firstBtn.addClass("active");
//     }
//   });

//   $(commentPrev).click(function () {
//     var btns = $(".slider-bullet");
//     var current = document.querySelector(".slider-bullet.active");
//     var prev = $(".slider-bullet.active").prev();

//     $(".slider-bullet.active").prev().addClass("active");
//     $(current).removeClass("active");

//     if (prev.length < 1) {
//       var lastBtn = btns.last();
//       lastBtn.addClass("active");
//     }
//   });

//   if ($(".testimoninals-slide").length > 0) {

//     // listen for keydown event.
//     timerTestimonials = setInterval(function () {
//       testimonialSlider.next();
//     }, 6000);
//     $(".testimoninals-slide").hover(
//       function (ev) {
//         clearInterval(timerTestimonials);
//       },
//       function (ev) {
//         timerTestimonials = setInterval(function () {
//           testimonialSlider.next();
//         }, 6000);
//       }
//     );

//   }
// }

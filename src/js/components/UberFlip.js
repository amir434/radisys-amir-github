// if ($(".uberflip-horizontal_slider").length > 0) {
//   var flipHorizontal = new Siema({
//     selector: ".uberflip-horizontal_slider",
//     howManySlides: "3",
//     perPage: {
//       768: 2,
//       1024: 3,
//       1503: 4,
//     },
//     center: true,
//     offset: 0.15,
//     loop: true,
//   });
// }

// get the slide number
var items = $('.uberflip-slide');
var Ufcount = items.length;
//define slides number when there are more than 1 slide to 
//avoid bug in Solution page template 
if ( Ufcount > 3 ) {
  console.log( Ufcount );
  const ufSlider = new Siema({
    selector: ".uberflip-horizontal_slider",
    howManySlides: "3",
    perPage: {
      768: 2,
      1024: 3,
      1503: 4,
    },
    loop: true,
    center: true,
       offset: 0.15,
  });
} else if( Ufcount == 3 ){
  // when there is only 3 slide, "perPage" cause bug
  console.log( Ufcount );
  const ufSlider = new Siema({
    selector: ".uberflip-horizontal_slider",
    howManySlides: "3",
    perPage: {
      768: 2,
      1024: 3,
      1503: 3,
    },
    loop: true,
    center: true,
    offset: 0.15,
  });
} else if( Ufcount == 2 ){
  // when there is only one slide, "perPage" cause bug
  console.log( Ufcount );
  const ufSlider = new Siema({
    selector: ".uberflip-horizontal_slider",
    perPage: {
      768: 2,
      1024: 2,
      1503: 2,
    },
    center: true,
    offset: 0.15,
  });
}else if( Ufcount == 1 ){
  // when there is only one slide, "perPage" cause bug
  const ufSlider = new Siema({
    selector: ".uberflip-horizontal_slider",
    center: true,
       offset: 0.15,
  });
}
else {
  //do nothing
}
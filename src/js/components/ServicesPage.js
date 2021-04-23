if ( $( ".page-node-type-services-page" ).length ) {
    if ($(window).width() < 992) {
      // Less than 992
      } else {
      // More than 992
      function uberFlipHeightVertical() {
        const uberFlipSectionHeight = $('.page-showcase-section').outerHeight();
        const verticalUberfilp = $('.uberflip-vertical-col');
        // alert(uberFlipSectionHeight);
        verticalUberfilp.css('marginBottom', uberFlipSectionHeight + 'px' );
      }
      uberFlipHeightVertical();
      window.addEventListener('resize', uberFlipHeightVertical);
    }


    if ($(".label-holder").text().length > 0) {
      // alert('text has content!');
      let labelText = $('.label-holder').text();
      $('.label--text').text(labelText);
    }     
}


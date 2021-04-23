// //*
//  |--------------------------------------------------------------------------
//  | Search Button Component / Functionality
//  |--------------------------------------------------------------------------
// */
$("#search-btn").on("click", (e) => {
  // alert("Search function called");
  $('#popup-search').css('display','flex');
  $('input#searchBox').focus();
  if ($('.popup-search--inner').hasClass('search-open')) {

  } else {
    $('.popup-search--inner').addClass('search-open');    
  }
});

$(window).click(function() {
  //Hide the menus if visible
  $('#popup-search').css('display','none');
  $('.popup-search--inner').removeClass('search-open');
  });
  
  $('div#popup-search section').click(function(event){
      event.stopPropagation();
  });
  $('span#search-btn').click(function(event){
    event.stopPropagation();
  });
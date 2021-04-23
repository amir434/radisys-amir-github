let ctaSlideout;
ctaSlideout = $('div#cta-slideout');
ctaSlideoutHeight = ctaSlideout.height() - 56;
SlideoutHeading = $('.cta-slideout_heading');

// Initialize
ctaSlideout.css('bottom','-'+ctaSlideoutHeight+'px');
ctaSlideout.css('opacity','1');

//Click
SlideoutHeading.click(function(){
    if ($(this).hasClass('slideout--opened')) {
        ctaSlideout.css('bottom','-'+ctaSlideoutHeight+'px');
        $(this).removeClass('slideout--opened');
    } else {
        ctaSlideout.css('bottom','0px');
        $(this).addClass('slideout--opened');
    }
});


console.log(ctaSlideoutHeight);
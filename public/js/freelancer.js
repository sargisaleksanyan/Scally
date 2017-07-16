// Freelancer Theme JavaScript
/*
var count=0;
var array=["img/scale.png","img/five.jpg","img/fore.jpg",
    "img/hand.jpg","img/logo.jpg"];
var trigger =function (number){
    var imageSlide=document.getElementById("slideimage");
    var image=array[number];
    imageSlide.src=image;
    var elem=imageSlide;
}

function plusSlides(number){
    if(count==0&&number==-1){
        count=array.length-2;
    }
    else if (count==3&&number==1){
        count=0;
    }
    else{
        count=count+number;
    }
    var imageSlide=document.getElementById("slideimage");
    var image=array[count];
    imageSlide.src=image;
}
*/

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

})(jQuery); // End of use strict

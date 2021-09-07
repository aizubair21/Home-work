 

$(function() {
  const options = {};

  const filterizr = new Filterizr('.filter-container')


  $('.gallery-navs a').on("click", function (e) {
    e.preventDefault();
  });


  /*wow js initialization*/
  
});

var nav_item = $('.nav-item');
nav_item.on("click", function (e) {
    nav_item.removeClass("active");

    $(this).addClass("active");
    $('.gallery').css({"background":"#8aa7c4", "padding" : "5px"});
    $('.image-container').css({"boxShadow":"0px 0px 5px black"});
  
});

wow = new WOW ({
    animateClass: 'animated',
    offset: 100,
    callback:     function(box) {
      console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
  });
  wow.init();
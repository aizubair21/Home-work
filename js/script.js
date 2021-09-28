 

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



//active class to nav items 
// let item = $(".nav-items");

// item.forEach(items => {
//   item.on("click", function () {
//     item.removeClass('active')
//   });
// });
$(".nav-items").on("click", function () {
  $(".nav-items").removeClass("active");
  $(this).addClass("active");
})


// tsParticles
/*$("#tsparticles")
  .particles()
  .init(
    {
      background: {
        color: {
          value: "#0d47a1",
        },
      },
      fpsLimit: 60,
      interactivity: {
        detectsOn: "canvas",
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          random: true,
          value: 5,
        },
      },
      detectRetina: true,
    },
    function (container) {
      // container is the particles container where you can play/pause or stop/start.
      // the container is already started, you don't need to start it manually.
    }
  );
// or

$("#tsparticles")
  .particles()
  .ajax("particles.json", function (container) {
    // container is the particles container where you can play/pause or stop/start.
    // the container is already started, you don't need to start it manually.
  });
  */

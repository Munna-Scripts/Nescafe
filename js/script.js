const circleElement = document.querySelector('.circle');

const mouse = {
    x: 0,
    y: 0
  },
  circle = {
    x: 0,
    y: 0
  };

window.addEventListener('mousemove', e => {
  mouse.x = e.x;
  mouse.y = e.y;
});

// Speed factor
// Between 0 and 1 (0 = smoother, 1 = instant)
const speed = 0.15;

const tick = () => {
  // (mouse.x - circle.x) calculates the difference between the current x-coordinate of the mouse and the current x-coordinate of the circle.
  // (mouse.x - circle.x) * speed multiplies the difference by the speed factor, which determines how quickly the circle should move towards the mouse position
  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;

  // Update circle element's position
  circleElement.style.transform = `translate(${circle.x}px, ${circle.y}px)`;

  // Call function on next frame
  window.requestAnimationFrame(tick);
}

tick();

//------------------- Slider---------
$('.counter').counterUp({
  delay: 10,
  time: 1000
});



$('.food_slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1500,
  prevArrow: '<i class="fa-solid arrows prr fa-chevron-left"></i>',
  nextArrow: '<i class="fa-solid arrows nrr fa-chevron-right"></i>',
  dots: false,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true,
        prevArrow: '<i class="fa-solid arrows prr fa-chevron-left"></i>',
        nextArrow: '<i class="fa-solid arrows nrr fa-chevron-right"></i>',
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow: '<i class="fa-solid arrows prr fa-chevron-left"></i>',
        nextArrow: '<i class="fa-solid arrows nrr fa-chevron-right"></i>',
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow: '<i class="fa-solid arrows prr fa-chevron-left"></i>',
        nextArrow: '<i class="fa-solid arrows nrr fa-chevron-right"></i>',
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
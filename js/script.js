// Aos Animation ------------------
AOS.init();
// Mouse Follower circle------------
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
const speed = 0.05;

const tick = () => {
  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;
  circleElement.style.transform = `translate(${circle.x}px, ${circle.y}px)`;
  window.requestAnimationFrame(tick);
}

tick();

//Food Slider--------------------
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
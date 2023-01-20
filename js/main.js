// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
};
// menu end


// slider
$(function () {
  $(".hero__inner-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 600,
    autoplay: false,
    fade: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1181,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
        },
      },
      {
        breakpoint: 931,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
        },
      },
    ],
  });
});

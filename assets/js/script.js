// SMOOTH SCROLL
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// SIDEMENU TOGGLE

let sidemenu = document.querySelector(".menu");
let sidebar = document.querySelector(".sidebar");
let contentWidth = document.querySelectorAll(".content-wd");
let headerMenu = document.querySelector(".header-menu")
let leftSec = document.querySelector(".left-sec")
sidemenu.addEventListener("click", () => {
  leftSec.classList.remove("active")
  sidebar.classList.toggle("active");
  contentWidth.forEach((contnet) => {
    contnet.classList.toggle("active");
  });
});
headerMenu.addEventListener("click",()=>{
  leftSec.classList.add("active")
})

// TRIP PACKAGE CAROUSEL 

$(".travel-slider-wrap").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 790,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// SEARCH RESULT CAROUSEL 

$(".hotel-slid").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  infinite: false,
  infinite: true,
  autoplay: true,
  speed: 1000,
  asNavFor: ".hotel-thumb",
  arrows: true,
  prevArrow: `<button type="button" data-role="none" class="slide-arrow slide-prev" aria-label="Previous" tabindex="0" role="button">
    <span class="material-symbols-outlined">chevron_left</span>
    </button>`,
  nextArrow: `<button type="button" data-role="none" class="slide-arrow slide-next" aria-label="Next" tabindex="0" role="button">
    <span class="material-symbols-outlined">chevron_right</span>
    </button>`,
});
$(".hotel-thumb").slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  asNavFor: ".hotel-slid",
  dots: false,
  centerMode: false,
  focusOnSelect: true,
});


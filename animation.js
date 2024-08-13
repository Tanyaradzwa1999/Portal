const hamBurgerMenuShow = document.querySelector(".hamBurgerShow");
const SidebarMenu = document.querySelector(".SidebarMenu");
const btnhamBurger = document.querySelector(".btnhamBurger");
const addModal = document.querySelector(".modalShow");
const animated = document.querySelector(".animated");
const slides = document.querySelectorAll(".slide");
let slider = document.querySelector(".slider");
const sliderBtnLeft = document.querySelectorAll(".sliderBtnLeft");
const sliderBtnRight = document.querySelectorAll(".sliderBtnRight");
const sliderContainer = document.querySelector(".sliderContainer");
let slideStep = 0;
let slideNumber = 0;
let prevLeft = false;
let prevRight = false;
let resetLeft = false;
// sliding slides
sliderContainer.addEventListener("click", function (e) {
  const clickedRight = e.target.closest(".sliderBtnRight");
  const clickedLeft = e.target.closest(".sliderBtnLeft");
  const slide = e.target.closest(".slide");
  console.log(slideNumber);
  //check left or right button
  if (!clickedRight && !clickedLeft) return;
  if (!slide) return;
  if (clickedRight) {
    // remofe right side animes
    slides.forEach((s) => {
      s.classList.remove("linearSlideLeft");
    });
    prevRight = true;
    //hide previous slide
    slide.classList.add("hidden");
    //check clicked button before adding
    if (!prevLeft) {
      slideNumber += 1;
    }
    if (resetLeft) {
      slideNumber = 0;
      resetLeft = false;
    }
    prevLeft = false;
    if (slideNumber >= slides.length) {
      slideNumber = 0;
      console.log(`restarted RIGHT  show slide number ${slideNumber}`);
      slides[0].classList.remove("hidden");
      slides[0].classList.add("linearPic");
      return;
    }
    slides.forEach((s, i) => {
      if (slideNumber == i) {
        console.log(`show slide number for RIGHT ${i}`);
        s.classList.remove("hidden");
        s.classList.add("linearPic");
      }
    });
  }
  // slide to previous picture
  if (clickedLeft) {
    //hide clicked slide
    slides.forEach((s) => {
      s.classList.remove("linearPic");
    });
    prevLeft = true;
    slide.classList.add("hidden");
    //check clicked button before subtracting
    if (!prevRight) {
      prevRight = false;
      slideNumber -= 1;
    }
    prevRight = false;
    if (slideNumber < 0) {
      slideNumber = slides.length - 1; //the last slide was popped already
      resetLeft = true;
      console.log(`restarted left show slide number ${slideNumber}`);
      slides[slides.length - 1].classList.remove("hidden");
      slides[slides.length - 1].classList.add("linearSlideLeft");
      return;
    }
    slides.forEach((s, i) => {
      if (slideNumber == i) {
        console.log(`show slide number for left ${i}`);
        s.classList.remove("hidden");
        s.classList.add("linearSlideLeft");
      }
    });
  }
});

// sliderBtnRight.forEach((s) =>
//   s.addEventListener("click", function () {
//     curSlide++;
//
//   })
// );

animated.addEventListener("animationend", function (e) {
  if (e.animationName === "moveback") hamBurgerMenuShow.classList.add("hidden");
});
const closeSidebar = function () {};
// if the user selects the intended menu item
SidebarMenu.addEventListener("click", function (e) {
  const clicked = e.target.closest(".sidebarItem");
  if (!clicked) return;
  hamBurgerMenuShow.classList.add("moveback");
  addModal.classList.remove("modal");
});

// start anime on click hamburger
const startAnime = function () {
  console.log("show");
  hamBurgerMenuShow.classList.remove("hidden");
  addModal.classList.add("modal");
  hamBurgerMenuShow.classList.add("linear");
  hamBurgerMenuShow.classList.remove("moveback");
};
// on click enywhere on modal by user, close
addModal.addEventListener("click", function () {
  addModal.classList.remove("modal");
  hamBurgerMenuShow.classList.add("moveback");
});
btnhamBurger.addEventListener("click", startAnime);

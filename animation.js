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
sliderContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".sliderBtnLeft");

  slideStep -= 300;
  if (!clicked) return;
  if (Math.abs(slideStep) >= 300 * slides.length) {
    console.log("End");
    sliderContainer.style.transform = `translateX(${10}px)`;
    slideStep = 0;
    return;
  }
  sliderContainer.style.transform = `translateX(${slideStep}px)`;
});

// sliderBtnRight.forEach((s) =>
//   s.addEventListener("click", function () {
//     curSlide++;
//     slides.forEach((s, i) => {
//       s.style.transform = `translateX(${(i - curSlide) * 20}%)`;
//     });
//   })
// );
slides.forEach((s, i) => {
  s.style.transform = `translateX(${20 * i}%)`;
});
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

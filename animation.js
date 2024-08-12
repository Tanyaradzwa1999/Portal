const hamBurgerMenuShow = document.querySelector(".hamBurgerShow");
const SidebarMenu = document.querySelector(".SidebarMenu");
const btnhamBurger = document.querySelector(".btnhamBurger");
const addModal = document.querySelector(".modalShow");
const animated = document.querySelector(".moveback");

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

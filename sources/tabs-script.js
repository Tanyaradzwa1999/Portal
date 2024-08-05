const tabs = document.querySelectorAll(".tab");
const selectionMenu = document.querySelector(".selectionMenu");
const dropDownItem = document.querySelectorAll(".dropDownItem");
const panels = document.querySelectorAll(".panel");
const navItems = document.querySelectorAll(".menu-item");
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");
const dropdownMenu = document.querySelector(".dropdownMenu");
const select_menu = document.querySelector(".select-menu");
const experience = document.querySelector(".experience");
const skills = document.querySelector(".skills");
const profile = document.querySelector(".profile");

// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener("click", onTabClick));
dropDownItem.forEach((drop) => drop.addEventListener("click", onDropDownClick));
navItems.forEach((item) => item.addEventListener("click", onItemSelect));
// Hamburger button listener
btn.addEventListener("click", navToggle);
select_menu.addEventListener("click", ShowMenuClick); //the top menu selection box
dropdownMenu.addEventListener("click", HidePanelClick); //for closing the panel when selection is made
//dropdown menu show

function HidePanelClick() {
  dropdownMenu.classList.toggle("hidden");
}
function ShowMenuClick() {
  dropdownMenu.classList.toggle("hidden");
}

function onTabClick(e) {
  // Deactivate all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      "border-softRed",
      "border-b-4",
      "md:border-b-0"
    );
  });

  // Hide all panels
  panels.forEach((panel) => panel.classList.add("hidden"));

  // Activate a new tab and panel based on the target

  e.target.classList.add("border-softRed", "border-b-4");
  selectionMenu.innerText = e.target.innerText; //echo the selected item to the mobile view
  const classString = e.target.getAttribute("data-target");
  document
    .getElementById("panels")
    .getElementsByClassName(classString)[0]
    .classList.remove("hidden");
}

// dropdoen menu click *********************
function onDropDownClick(e) {
  // Deactivate all tabs
  dropDownItem.forEach((dropItem) => {
    dropItem.classList.remove("bg-ExperiencesBlue", "text-white");
  });
  e.target.classList.add("bg-ExperiencesBlue", "text-white");
  selectionMenu.innerText = e.target.innerText;
  //echo to medium screen if selected on mobile
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      "border-softRed",
      "border-b-4",
      "md:border-b-0"
    );
  });
  panels.forEach((panel) => panel.classList.add("hidden"));

  if (e.target.innerText == "EXPERIENCE") {
    experience.classList.add("border-softRed", "border-b-4");
    console.log("done");
  }
  if (e.target.innerText == "SKILLS") {
    skills.classList.add("border-softRed", "border-b-4");
    console.log("done");
  }
  if (e.target.innerText == "PROFILE") {
    profile.classList.add("border-softRed", "border-b-4");
    console.log("done");
  }

  // Hide all panels
  panels.forEach((panel) => panel.classList.add("hidden"));

  // Activate a new tab and panel based on the target

  const classString = e.target.getAttribute("data-target");
  document
    .getElementById("panels")
    .getElementsByClassName(classString)[0]
    .classList.remove("hidden");
}
//************** */

// nav menu selection
function onItemSelect(e) {
  menu.classList.add("hidden");
  btn.classList.toggle("open");
}

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");

  if (menu.classList.contains("flex")) {
    logo.setAttribute("src", "./images/logo-bookmark-footer.svg");
  } else {
    logo.setAttribute("src", "./images/logo-bookmark.svg");
  }
}
// select element

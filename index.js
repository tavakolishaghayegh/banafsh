// popup

// const popup = document.querySelector("#popup");
// setTimeout(() => {
//   popup.classList.add("popup");
// }, 3000);

// function closePopup() {
//   popup.classList.remove("popup");
// }
// popup.addEventListener("click", closePopup);

//Burger Menu
const burger = document.querySelector("#burger");
function menu() {
  const navItems = document.querySelectorAll(".nav-item");
  for (const navItem of navItems) {
    if (navItem.classList.contains("nav-item-show")) {
      navItem.classList.remove("nav-item-show");
    } else {
      navItem.classList.add("nav-item-show");
    }
  }
}
burger.addEventListener("click", menu);

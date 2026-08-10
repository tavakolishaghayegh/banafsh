// popup

const popup = document.querySelector("#popup");
setTimeout(() => {
  popup.classList.add("popup");
}, 3000);

function closePopup() {
  popup.classList.remove("popup");
}
popup.addEventListener("click", closePopup);

//Variables
let openBtn = document.getElementById("open-btn");
let modalContainer = document.getElementById("modal-container");
let closeBtn = document.getElementById("close-btn");

//Event Listeners

openBtn.addEventListener("click", function () {
  modalContainer.style.display = "block"; // show modal
});

closeBtn.addEventListener("click", function () {
  modalContainer.style.display = "none"; // close modal
});

window.addEventListener("click", function (e) {
  // outside container
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});

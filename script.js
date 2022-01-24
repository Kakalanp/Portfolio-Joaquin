document.querySelector(".menu").addEventListener("click", function () {
  var menuContainer = document.querySelector(".menu-container");
  menuContainer.style.display = "flex";

  var closeButton = document.createElement("a");
  closeButton.classList.add("closeButton");

  var items = document.querySelectorAll(".menu-container a");
  var itemsArr = Array.from(items);
  itemsArr.unshift(closeButton);

  itemsArr.map(function (el) {});
});

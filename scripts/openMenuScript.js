let openMenuButton = document.querySelector("#open-menu-btn");
let links = document.querySelector(".links");

openMenuButton.addEventListener("click", function () {
  if (links.style.display === "none") {
    links.style.display = "flex";
  } else {
    links.style.display = "none";
  }
});

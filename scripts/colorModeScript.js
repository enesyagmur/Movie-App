let body = document.body;
let modeButton = document.querySelector("#mode-button");

const modeChangeFunc = () => {
  if (body.className) {
    body.classList.remove("light");
    modeButton.classList.remove("left");
  } else {
    body.classList.add("light");
    modeButton.classList.add("left");
  }
};

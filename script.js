const changeModeFunc = () => {
  var button = document.getElementById("mode-button");

  if (document.body.className) {
    document.body.classList.remove("light");
    button.classList.remove("left");
  } else {
    button.classList.add("left");

    document.body.classList.add("light");
  }
};

let sliderList = document.querySelector(".slider-list");

const scrollToRight = () => {
  if (sliderList.scrollLeft === 1682) {
    sliderList.scrollBy({
      top: 0,
      left: -1682,
      behavior: "smooth",
    });
  } else {
    sliderList.scrollBy({
      top: 0,
      left: 450,
      behavior: "smooth",
    });
  }
};

const scrollToLeft = () => {
  if (sliderList.scrollLeft > 0) {
    sliderList.scrollBy({
      top: 0,
      left: -450,
      behavior: "smooth",
    });
  }
};

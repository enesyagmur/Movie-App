//SLIDER----------------------------------------------------------------

let seriesSlider = document.querySelector("#series-slider");
let documentarySlider = document.querySelector("#documentary-slider");
let moviesSlider = document.querySelector("#movies-slider");

const scrollToRight = (slider) => {
  if (slider === "movies-slider") {
    moviesSlider.scrollBy({
      top: 0,
      left: 550,
      behavior: "smooth",
    });
  } else if (slider === "series-slider") {
    seriesSlider.scrollBy({
      top: 0,
      left: 550,
      behavior: "smooth",
    });
  } else if (slider === "documentary-slider") {
    documentarySlider.scrollBy({
      top: 0,
      left: 550,
      behavior: "smooth",
    });
  }
};

const scrollToLeft = (slider) => {
  if (slider === "movies-slider") {
    moviesSlider.scrollBy({
      top: 0,
      left: -550,
      behavior: "smooth",
    });
  } else if (slider === "series-slider") {
    seriesSlider.scrollBy({
      top: 0,
      left: -550,
      behavior: "smooth",
    });
  } else if (slider === "documentary-slider") {
    documentarySlider.scrollBy({
      top: 0,
      left: -550,
      behavior: "smooth",
    });
  }
};

//seriesSlider------------
let seriesRightButton = document.querySelector("#seriesRightButton");
seriesRightButton.addEventListener(`click`, function () {
  scrollToRight("series-slider");
});

let seriesLefttButton = document.querySelector("#seriesLeftButton");
seriesLefttButton.addEventListener(`click`, function () {
  scrollToLeft("series-slider");
});

//moviesSlider----
let moviesRightButton = document.querySelector("#moviesRightButton");
moviesRightButton.addEventListener(`click`, function () {
  moviesSlider.scrollBy({
    top: 0,
    left: 550,
    behavior: "smooth",
  });
});

let moviesLeftButton = document.querySelector("#moviesLeftButton");
moviesLeftButton.addEventListener(`click`, function () {
  moviesSlider.scrollBy({
    top: 0,
    left: -550,
    behavior: "smooth",
  });
});

//documentarySlider---
let documentaryRightButton = document.querySelector("#documentaryRightButton");
documentaryRightButton.addEventListener(`click`, () => {
  scrollToRight("documentary-slider");
});

let documentaryLeftButton = document.querySelector("#documentaryLeftButton");
documentaryLeftButton.addEventListener(`click`, () => {
  scrollToLeft("documentary-slider");
});

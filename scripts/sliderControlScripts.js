//SLIDER----------------------------------------------------------------
let moviesSlider = document.querySelector("#movies-slider");
let seriesSlider = document.querySelector("#series-slider");
let documentarySlider = document.querySelector("#documentary-slider");

const scrollToRight = (slider) => {
  if (slider === "movies-slider") {
    moviesSlider.scrollBy({
      top: 0,
      left: 450,
      behavior: "smooth",
    });
  } else if (slider === "series-slider") {
    seriesSlider.scrollBy({
      top: 0,
      left: 450,
      behavior: "smooth",
    });
  } else if (slider === "documentary-slider") {
    documentarySlider.scrollBy({
      top: 0,
      left: 450,
      behavior: "smooth",
    });
  }
};

const scrollToLeft = (slider) => {
  if (slider === "movies-slider") {
    moviesSlider.scrollBy({
      top: 0,
      left: -450,
      behavior: "smooth",
    });
  } else if (slider === "series-slider") {
    seriesSlider.scrollBy({
      top: 0,
      left: -450,
      behavior: "smooth",
    });
  } else if (slider === "documentary-slider") {
    documentarySlider.scrollBy({
      top: 0,
      left: -450,
      behavior: "smooth",
    });
  }
};

// 20 tl filmi çekebildim ama tam olarak istediğim veriyi çekebilmiş değilim
// dark mode çalışmıyor
// 3. videonun iconları değişmiyor

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

//SLIDER
let slider1 = document.querySelector("#first-slider");
let slider2 = document.querySelector("#second-slider");
let slider3 = document.querySelector("#thirt-slider");

const scrollToRight = (slider) => {
  if (slider === "first-slider") {
    if (slider1.scrollLeft === 1682) {
      slider1.scrollBy({
        top: 0,
        left: -1682,
        behavior: "smooth",
      });
    } else {
      slider1.scrollBy({
        top: 0,
        left: 450,
        behavior: "smooth",
      });
    }
  } else if (slider === "second-slider") {
    if (slider2.scrollLeft === 1682) {
      slider2.scrollBy({
        top: 0,
        left: -1682,
        behavior: "smooth",
      });
    } else {
      slider2.scrollBy({
        top: 0,
        left: 450,
        behavior: "smooth",
      });
    }
  } else if (slider === "thirt-slider") {
    if (slider3.scrollLeft === 1682) {
      slider3.scrollBy({
        top: 0,
        left: -1682,
        behavior: "smooth",
      });
    } else {
      slider3.scrollBy({
        top: 0,
        left: 450,
        behavior: "smooth",
      });
    }
  }
};

const scrollToLeft = (slider) => {
  if (slider === "first-slider") {
    slider1.scrollBy({
      top: 0,
      left: -450,
      behavior: "smooth",
    });
  } else if (slider === "second-slider") {
    slider2.scrollBy({
      top: 0,
      left: -450,
      behavior: "smooth",
    });
  } else if (slider === "thirt-slider") {
    slider3.scrollBy({
      top: 0,
      left: -450,
      behavior: "smooth",
    });
  }
};

//VIDEO

let video = document.querySelector(".video");
let playButton = document.querySelector("#play-btn");
let soundButton = document.querySelector("#sound-btn");

const playVideo = () => {
  if (video.paused) {
    video.play();
    playButton.className = "fa-solid fa-stop";
  } else {
    video.pause();
    playButton.className = "fa-solid fa-play";
  }
};

const muteVideo = () => {
  if (video.muted === false) {
    video.muted = true;
    soundButton.className = "fa-solid fa-volume-high";
  } else if (video.muted === true) {
    video.muted = false;
    soundButton.className = "fa-solid fa-volume-xmark";
  }
};

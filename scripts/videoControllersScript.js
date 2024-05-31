//VIDEO-----------------------------------------------------------

let interstallerVideo = document.querySelector("#interstallerVideo");
let interstallerPlayButton = document.querySelector("#interstaller-play-btn");
let interstallerSoundButton = document.querySelector("#interstaller-sound-btn");
let interstallerDetail = document.querySelector("#interstaller-detail");

let darkVideo = document.querySelector("#darkVideo");
let darkPlayButton = document.querySelector("#dark-play-btn");
let darkSoundButton = document.querySelector("#dark-sound-btn");
let darkDetail = document.querySelector("#dark-detail");

let djangoVideo = document.querySelector("#djangoVideo");
let djangoPlayButton = document.querySelector("#django-play-btn");
let djangoSoundButton = document.querySelector("#django-sound-btn");
let djangoDetail = document.querySelector("#django-detail");

const interstallerVideoPlay = () => {
  if (interstallerVideo.paused) {
    interstallerVideo.play();
    interstallerPlayButton.className = "fa-solid fa-stop";
    interstallerDetail.style.display = "none";
  } else {
    interstallerVideo.pause();
    interstallerPlayButton.className = "fa-solid fa-play";
    interstallerDetail.style.display = "flex";
  }
};

const darkVideoPlay = () => {
  if (darkVideo.paused) {
    darkVideo.play();
    darkPlayButton.className = "fa-solid fa-stop";
    darkDetail.style.display = "none";
  } else {
    darkVideo.pause();
    darkPlayButton.className = "fa-solid fa-play";
    darkDetail.style.display = "flex";
  }
};

const djangoVideoPlay = () => {
  if (djangoVideo.paused) {
    djangoVideo.play();
    djangoPlayButton.className = "fa-solid fa-stop";
    djangoDetail.style.display = "none";
  } else {
    djangoVideo.pause();
    djangoPlayButton.className = "fa-solid fa-play";
    djangoDetail.style.display = "flex";
  }
};

const interstallerVideoMute = () => {
  if (interstallerVideo.muted === false) {
    interstallerVideo.muted = true;
    interstallerSoundButton.className = "fa-solid fa-volume-high";
  } else if (interstallerVideo.muted === true) {
    interstallerVideo.muted = false;
    interstallerSoundButton.className = "fa-solid fa-volume-xmark";
  }
};

const darkVideoMute = () => {
  if (darkVideo.muted === false) {
    darkVideo.muted = true;
    darkSoundButton.className = "fa-solid fa-volume-high";
  } else if (darkVideo.muted === true) {
    darkVideo.muted = false;
    darkSoundButton.className = "fa-solid fa-volume-xmark";
  }
};

const djangoVideoMute = () => {
  if (djangoVideo.muted === false) {
    djangoVideo.muted = true;
    djangoSoundButton.className = "fa-solid fa-volume-high";
  } else if (djangoVideo.muted === true) {
    djangoVideo.muted = false;
    djangoSoundButton.className = "fa-solid fa-volume-xmark";
  }
};

const videoPlay = (video) => {
  if (video === "interstaller") {
    interstallerVideoPlay();
    darkVideo.pause();
    djangoVideo.pause();
  } else if (video === "dark") {
    darkVideoPlay();
    interstallerVideo.pause();
    djangoVideo.pause();
  } else if (video === "django") {
    djangoVideoPlay();
    interstallerVideo.pause();
    darkVideo.pause();
  }
};

const videoMute = (video) => {
  if (video === "interstaller") {
    interstallerVideoMute();
  } else if (video === "dark") {
    darkVideoMute();
  } else if (video === "django") {
    djangoVideoMute();
  }
};

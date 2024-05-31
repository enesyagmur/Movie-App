//SLIDER----------------------------------------------------------------
let slider1 = document.querySelector("#first-slider");
let slider2 = document.querySelector("#second-slider");
let slider3 = document.querySelector("#thirt-slider");

const scrollToRight = (slider) => {
  if (slider === "first-slider") {
    if (slider1.scrollLeft === 1664) {
      slider1.scrollBy({
        top: 0,
        left: -1664,
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
    if (slider2.scrollLeft === 1664) {
      slider2.scrollBy({
        top: 0,
        left: -1664,
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
    if (slider3.scrollLeft === 1664) {
      slider3.scrollBy({
        top: 0,
        left: -1664,
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

// GET
const apiKey = "28e89d863e28cef1a0f8056f0c27867a";

const documentaryUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=tr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99`;
const populerSeriesUrl = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=tr-TR&page=1`;
const populerMoviessUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=tr&page=1`;

fetch(populerMoviessUrl)
  .then((response) => response.json())
  .then((data) => {
    data.results.map((movie) => {
      slider1.innerHTML += `<div class="slide" key=${movie.id}>
      <img src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}" alt="" />
      <div class="slide-detail">
        <p class="name">${movie.original_title}</p>
        <p class="detail">
         ${movie.overview}
        </p>
      </div>
    </div>`;
    });
  })
  .catch((err) => console.error(err));

fetch(populerSeriesUrl)
  .then((response) => response.json())
  .then((data) => {
    data.results.map((serie) => {
      slider2.innerHTML += `<div class="slide" key=${serie.id}>
      <img src="https://image.tmdb.org/t/p/w500${serie.backdrop_path}" alt="" />
      <div class="slide-detail">
        <p class="name">${serie.original_name}</p>
        <p class="detail">
         ${serie.overview}
        </p>
      </div>
    </div>`;
    });
  })
  .catch((err) => console.error(err));

fetch(documentaryUrl)
  .then((response) => response.json())
  .then((data) => {
    data.results.map((documentary) => {
      if (documentary.overview) {
        slider3.innerHTML += `<div class="slide" key=${documentary.id}>
        <img src="https://image.tmdb.org/t/p/w500${documentary.backdrop_path}" alt="" />
        <div class="slide-detail">
          <p class="name">${documentary.title}</p>
          <p class="detail">
           ${documentary.overview}
          </p>
        </div>
      </div>`;
      }
    });
  })
  .catch((err) => console.error(err));

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
  } else if (video === "dark") {
    darkVideoPlay();
  } else if (video === "django") {
    djangoVideoPlay();
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

// 20 tl filmi çekebildim ama tam olarak istediğim veriyi çekebilmiş değilim
// dark mode çalışmıyor
// 3. videonun iconları değişmiyor

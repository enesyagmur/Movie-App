let moviesSlider = document.querySelector("#movies-slider");
let seriesSlider = document.querySelector("#series-slider");
let documentarySlider = document.querySelector("#documentary-slider");

const apiKey = "28e89d863e28cef1a0f8056f0c27867a";

const documentaryUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=tr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99`;
const populerSeriesUrl = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=tr-TR&page=1`;
const populerMoviessUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=tr&page=1`;

fetch(populerMoviessUrl)
  .then((response) => response.json())
  .then((data) => {
    data.results.map((movie) => {
      if (movie.overview) {
        moviesSlider.innerHTML += `<div class="slide" key=${movie.id}>
      <img src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}" alt="" />
      <div class="slide-detail">
        <p class="name">${movie.title}</p>
        <p class="detail">
         ${movie.overview}
        </p>
      </div>
    </div>`;
      }
    });
  })
  .catch((err) => console.error(err));

fetch(populerSeriesUrl)
  .then((response) => response.json())
  .then((data) => {
    data.results.map((serie) => {
      if (serie.overview) {
        seriesSlider.innerHTML += `<div class="slide" key=${serie.id}>
      <img src="https://image.tmdb.org/t/p/w500${serie.backdrop_path}" alt="" />
      <div class="slide-detail">
        <p class="name">${serie.name}</p>
        <p class="detail">
         ${serie.overview}
        </p>
      </div>
    </div>`;
      }
    });
  })
  .catch((err) => console.error(err));

fetch(documentaryUrl)
  .then((response) => response.json())
  .then((data) => {
    data.results.map((documentary) => {
      if (documentary.overview) {
        documentarySlider.innerHTML += `<div class="slide" key=${documentary.id}>
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

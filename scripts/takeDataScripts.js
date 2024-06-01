let movieSlide = document.querySelector("#movies-slider");
let serieSlide = document.querySelector("#series-slider");
let documentarySlide = document.querySelector("#documentary-slider");

const apiKey = "28e89d863e28cef1a0f8056f0c27867a";

const documentaryUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=tr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99`;
const populerSeriesUrl = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=tr-TR&page=1`;
const populerMoviessUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=tr&page=1`;

fetch(populerMoviessUrl)
  .then((response) => response.json())
  .then((data) => {
    data.results.map((movie) => {
      if (movie.overview) {
        //tanımlamalar
        const slide = document.createElement("div");
        slide.className = "slide";
        slide.setAttribute("key", movie.id);

        const img = document.createElement("img");
        img.src = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
        img.alt = movie.title;

        const slideDetail = document.createElement("div");
        slideDetail.className = "slide-detail";

        const name = document.createElement("p");
        name.className = "name";
        name.textContent = movie.title;

        const detail = document.createElement("p");
        detail.className = "detail";
        detail.textContent = movie.overview;

        //soy ağacı

        movieSlide.appendChild(slide);
        slide.appendChild(img);
        slide.append(slideDetail);
        slideDetail.appendChild(name);
        slideDetail.appendChild(detail);
      }
    });
  })
  .catch((err) => console.error(err));

fetch(populerSeriesUrl)
  .then((response) => response.json())
  .then((data) => {
    data.results.map((serie) => {
      if (serie.overview) {
        serieSlide.innerHTML += `<div class="slide" key=${serie.id}>
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
    data.results.forEach((documentary) => {
      if (documentary.overview) {
        //tanımlamalar----
        const slide = document.createElement("div");
        slide.className = "slide";
        slide.setAttribute("key", documentary.id);

        const img = document.createElement("img");
        img.src = `https://image.tmdb.org/t/p/w500${documentary.backdrop_path}`;
        img.alt = documentary.title;

        const slideDetail = document.createElement("div");
        slideDetail.className = "slide-detail";

        const name = document.createElement("p");
        name.className = "name";
        name.textContent = documentary.title;

        const detail = document.createElement("p");
        detail.className = "detail";
        detail.textContent = documentary.overview;

        //soy ağacı oluşturma :D
        documentarySlide.appendChild(slide);
        slide.appendChild(img);
        slide.appendChild(slideDetail);
        slideDetail.appendChild(name);
        slideDetail.appendChild(detail);
      }
    });
  })
  .catch((err) => console.error(err));

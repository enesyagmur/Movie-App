let movieSlide = document.querySelector("#movies-slider");
let serieSlide = document.querySelector("#series-slider");
let documentarySlide = document.querySelector("#documentary-slider");

const apiKey = "28e89d863e28cef1a0f8056f0c27867a";

const documentaryUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=tr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99`;
const populerSeriesUrl = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=tr-TR&page=1`;
const populerMoviessUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=tr&page=1`;

async function takeDataAndWrite(url, slider) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP hatası! durum:${response.status}`);
    }
    const data = await response.json();

    data.results.forEach((element) => {
      if (element.overview) {
        //tanımlamalar
        const slide = document.createElement("div");
        slide.className = "slide";
        slide.setAttribute("key", element.id);

        const img = document.createElement("img");
        img.src = `https://image.tmdb.org/t/p/w500${element.backdrop_path}`;
        img.alt = element.title;

        const slideDetail = document.createElement("div");
        slideDetail.className = "slide-detail";

        const name = document.createElement("p");
        name.className = "name";
        if (slider === movieSlide) {
          name.textContent = element.title;
        } else {
          name.textContent = element.name;
        }

        const detail = document.createElement("p");
        detail.className = "detail";
        detail.textContent = element.overview;

        //soy ağacı

        slider.appendChild(slide);
        slide.appendChild(img);
        slide.append(slideDetail);
        slideDetail.appendChild(name);
        slideDetail.appendChild(detail);
      }
    });
  } catch (err) {
    console.error("fetch işleminde hata", err);
  }
}

takeDataAndWrite(populerMoviessUrl, movieSlide);
takeDataAndWrite(populerSeriesUrl, serieSlide);

//farklı veri çekme ve yazdırma yöntemi
fetch(documentaryUrl)
  .then((response) => response.json())
  .then((data) => {
    data.results.map((element) => {
      if (element.overview) {
        documentarySlide.innerHTML += `<div class="slide" key=${element.id}>
      <img src="https://image.tmdb.org/t/p/w500${element.backdrop_path}" alt="" />
      <div class="slide-detail">
        <p class="name">${element.name}</p>
        <p class="detail">
         ${element.overview}
        </p>
      </div>
    </div>`;
      }
    });
  })
  .catch((err) => console.error(err));

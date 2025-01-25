const list = document.querySelector(".list");
const apiKey = process.env.JS_APP_API_KEY;

const movieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&page=1`;
const serieUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&page=1`;
const trendUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`;

let category = "";
let data = [];

showMoviesList = () => {
  data.forEach((element) => {
    const box = document.createElement("div");
    box.className = "box";
    box.setAttribute("key", element.id);

    const img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/w500${element.poster_path}`;

    const detailTop = document.createElement("div");
    detailTop.className = "detail-top";

    const language = document.createElement("p");
    language.className = "language";
    language.textContent = element.original_language;

    const date = document.createElement("p");
    date.className = "date";
    date.textContent = element.release_date.split("-")[0];

    const detailBottom = document.createElement("div");
    detailBottom.className = "detail-bottom";

    const popularity = document.createElement("p");
    popularity.className = "popularity";
    let popularityText = String(element.popularity).split("");
    if (popularityText.length > 7) {
      let first = popularityText.slice(0, 1) + ".";
      popularityText.splice(0, 1);

      let yeniMetin = first + popularityText.join("");
      popularity.textContent = yeniMetin;
    } else {
      popularity.textContent = element.popularity;
    }

    const average = document.createElement("p");
    average.className = "average";
    let point = String(element.vote_average).substring(0, 3);
    average.textContent = point;

    list.appendChild(box);
    box.appendChild(img);
    box.appendChild(detailTop);
    detailTop.appendChild(language);
    detailTop.appendChild(date);
    box.appendChild(detailBottom);
    detailBottom.appendChild(popularity);

    detailBottom.appendChild(average);
  });
};

showSeriesList = () => {
  data.forEach((element) => {
    const box = document.createElement("div");
    box.className = "box";
    box.setAttribute("key", element.id);

    const img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/w500${element.poster_path}`;

    const detailTop = document.createElement("div");
    detailTop.className = "detail-top";

    const language = document.createElement("p");
    language.className = "language";
    language.textContent = element.original_language;

    const date = document.createElement("p");
    date.className = "date";
    date.textContent = element.first_air_date.split("-")[0];

    const detailBottom = document.createElement("div");
    detailBottom.className = "detail-bottom";

    const popularity = document.createElement("p");
    popularity.className = "popularity";
    let popularityText = String(element.popularity).split("");
    if (popularityText.length > 7) {
      let first = popularityText.slice(0, 1) + ".";
      popularityText.splice(0, 1);

      let yeniMetin = first + popularityText.join("");
      popularity.textContent = yeniMetin;
    } else {
      popularity.textContent = element.popularity;
    }

    const average = document.createElement("p");
    average.className = "average";
    let point = String(element.vote_average).substring(0, 3);
    average.textContent = point;

    list.appendChild(box);
    box.appendChild(img);
    box.appendChild(detailTop);
    detailTop.appendChild(language);
    detailTop.appendChild(date);
    box.appendChild(detailBottom);
    detailBottom.appendChild(popularity);

    detailBottom.appendChild(average);
  });
};

showTredsList = () => {
  data.forEach((element) => {
    const box = document.createElement("div");
    box.className = "box";
    box.setAttribute("key", element.id);

    const img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/w500${element.poster_path}`;

    const detailTop = document.createElement("div");
    detailTop.className = "detail-top";

    const language = document.createElement("p");
    language.className = "language";
    language.textContent = element.original_language;

    const date = document.createElement("p");
    date.className = "date";
    if (element.first_air_date) {
      date.textContent = element.first_air_date.split("-")[0];
    } else if (element.release_date) {
      date.textContent = element.release_date.split("-")[0];
    }

    const detailBottom = document.createElement("div");
    detailBottom.className = "detail-bottom";

    const popularity = document.createElement("p");
    popularity.className = "popularity";
    let popularityText = String(element.popularity).split("");
    if (popularityText.length > 7) {
      let first = popularityText.slice(0, 1) + ".";
      popularityText.splice(0, 1);

      let yeniMetin = first + popularityText.join("");
      popularity.textContent = yeniMetin;
    } else {
      popularity.textContent = element.popularity;
    }

    const average = document.createElement("p");
    average.className = "average";
    let point = String(element.vote_average).substring(0, 3);
    average.textContent = point;

    list.appendChild(box);
    box.appendChild(img);
    box.appendChild(detailTop);
    detailTop.appendChild(language);
    detailTop.appendChild(date);
    box.appendChild(detailBottom);
    detailBottom.appendChild(popularity);

    detailBottom.appendChild(average);
  });
};

const takeDataList = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`list sayfasında http hatası!  durum:${response.status}`);
    }
    const responseJson = await response.json();
    responseJson.results.forEach((element) => {
      data.push(element);
    });
    if (data) {
      if (category === "series") {
        showSeriesList();
      } else if (category === "movies") {
        showMoviesList();
      } else if (category === "trends") {
        showTredsList();
      }
    }
  } catch (error) {
    console.error("list sayfasında fetch hatası:", error);
  }
};

const takeParams = () => {
  const params = new URLSearchParams(window.location.search);
  category = params.get("category");

  if (category === "movies") {
    takeDataList(movieUrl);
  } else if (category === "series") {
    takeDataList(serieUrl);
  } else if (category === "trends") {
    takeDataList(trendUrl);
  }
};
takeParams();

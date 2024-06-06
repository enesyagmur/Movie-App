const searchBar = document.querySelector(".search-bar");
const openSearchButton = document.querySelector("#open-search-button");
let textbox = document.querySelector(".search-input");
let searchList = document.querySelector(".search-list");

const searchReset = () => {
  searchList.innerHTML = "";
  textbox.value = "";
};

const openSearchFunc = () => {
  searchReset();

  searchList.style.display = "none";
  if (searchBar.style.display === "flex") {
    searchBar.style.display = "none";
    openSearchButton.classList.remove("fa-xmark");
    openSearchButton.classList.add("fa-magnifying-glass");
  } else {
    searchBar.style.display = "flex";
    openSearchButton.classList.remove("fa-magnifying-glass");
    openSearchButton.classList.add("fa-xmark");
  }
};

const key = "28e89d863e28cef1a0f8056f0c27867a";

const searchFunc = () => {
  searchList.style.display = "flex";
  let query = textbox.value;
  let url = `https://api.themoviedb.org/3/search/multi?api_key=${key}&language=tr-TR&query=${query}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((element) => {
        if (element.overview && element.backdrop_path && element.name) {
          //tanımlamalar
          const found = document.createElement("div");
          found.className = "found";
          found.setAttribute("key", element.id);

          const img = document.createElement("img");
          img.src = `https://image.tmdb.org/t/p/w500${element.backdrop_path}`;
          img.alt = element.title;

          const foundDetail = document.createElement("div");
          foundDetail.className = "found-detail";

          const name = document.createElement("p");
          name.className = "name";
          name.textContent = element.name;

          const detail = document.createElement("p");
          detail.className = "explanation";
          detail.textContent = element.overview;

          //soy ağacı

          searchList.appendChild(found);
          found.appendChild(img);
          found.append(foundDetail);
          foundDetail.appendChild(name);
          foundDetail.appendChild(detail);
        }
      });
    })
    .catch((err) => console.log(err));

  searchReset();
};

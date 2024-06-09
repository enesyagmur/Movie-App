let id = 0;
let category = "";
const contentDetail = document.querySelector(".content-detail");

const takeParams = () => {
  const params = new URLSearchParams(window.location.search);
  id = params.get("id");
  category = params.get("category");
};
takeParams();

const key = "28e89d863e28cef1a0f8056f0c27867a";
const url = `https://api.themoviedb.org/3/${category}/${id}?api_key=${key}&language=tr-TR`;

fetch(url)
  .then((response) => response.json())
  .then((jsonResponse) => {
    showData(jsonResponse);
  })
  .catch((err) => console.log(err));

const showData = (data) => {
  let name = "";
  if (category === "movie") {
    name = data.title;
  } else {
    name = data.name;
  }
  contentDetail.innerHTML += `
    <div class="detail-top">
       <div class="detail-text">
         <p class="title">${name}</p>
         <p class="explation">
          ${data.overview}
         </p>
       </div>
       <div class="detail-img">
         <img src="https://image.tmdb.org/t/p/w500${data.backdrop_path}" alt="" />
       </div>
     </div>
     <div class="detail-bottom">
       <div class="vote-avarage">
         <i class="fa-brands fa-gratipay"></i>
         <p>${data.vote_average}</p>
       </div>
       <div class="vote-count">
         <i class="fa-solid fa-square-poll-vertical"></i>
         <p>${data.vote_count}</p>
       </div>
       <div class="popularity">
         <i class="fa-solid fa-users"></i>
         <p>${data.popularity}</p>
       </div>
       <div class="date">
         <i class="fa-solid fa-calendar-days"></i>
         <p>${data.release_date}</p>
       </div>
     </div>
   `;
};

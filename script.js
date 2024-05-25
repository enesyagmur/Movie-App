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

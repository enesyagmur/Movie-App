const changeModeFunc = () => {
  if (document.body.className) {
    document.body.classList.remove("light");
    var button = document.getElementsByClassName("mode-button-right");
  } else {
    document.body.classList.add("light");
  }
};

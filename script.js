const changeModeFunc = () => {
  if (document.body.className) {
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
  }
};

let modeButton = document.querySelector("#mode-btn");

const modeChangeFunc = () => {
  if (!modeButton.className) {
    modeButton.classList.add("left");
  } else {
    modeButton.classList.remove("left");
  }

  const root = document.documentElement;

  const currentModeColor = getComputedStyle(root)
    .getPropertyValue(`--bgColor`)
    .trim();

  let newBgColor;
  let newFontColor;

  if (currentModeColor === "#151515") {
    newFontColor = "#151515";
    newBgColor = "#d6d6d6";
  } else if (currentModeColor === "#d6d6d6") {
    newFontColor = "#d6d6d6";
    newBgColor = "#151515";
  }

  if (newBgColor) {
    root.style.setProperty(`--bgColor`, newBgColor);
  }

  if (newFontColor) {
    root.style.setProperty(`--fontColor`, newFontColor);
  }
};

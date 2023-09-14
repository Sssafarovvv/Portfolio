export const iconData = {
  "1": "bx bxl-react icon__react",
  "2": "bx bxl-nodejs icon",
  "3": "bx bxl-mongodb icon",
  "4": "bx bxl-typescript icon",
  "5": "bx bxl-redux icon",
  "6": "bx bxl-html5 icon",
  "7": "bx bxl-css3 icon",
  "8": "bx bxl-git icon",
};

export const iconsArray = Object.entries(iconData).map(([key, value]) => ({
  key,
  className: value,
}));
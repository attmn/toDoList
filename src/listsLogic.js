import { initPagesExport, shortenStr, createElement } from "./initpages.js";
import { importStored } from "./storage.js";

document.body.firstElementChild.tabIndex = 1;

const list = (title, color1, color2) => {
  let items = [];
  return { title, color1, color2, items };
};

const domObjects = initPagesExport.domObjects;

export function createList(
  parentProject,
  title,
  color1 = "#4DB4FF",
  color2 = color1
) {
  const listName = list(title, color1, color2);
  parentProject.unshift(listName);
}

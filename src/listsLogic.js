import {
  clearPage,
  initPagesExport,
  maxLimitForContenteditableDiv,
} from "./initpages.js";
import { writeToLocal, importStored } from "./storage.js";
import { buildLists } from "./listsDOM.js";

const list = (title, color1, color2) => {
  let items = [];
  return { title, color1, color2, items };
};

export function createList(
  parentProject,
  title,
  color1 = "#4DB4FF",
  color2 = color1
) {
  const listName = list(title, color1, color2);
  parentProject.unshift(listName);
}

export function listsLogic(currentProject, projectsArray) {
  const domObjects = initPagesExport.domObjects;
  const listsArray = currentProject.lists;
  window.addEventListener("wheel", function(e) {
    if (e.deltaY > 0) domObjects.listsTable.scrollLeft += 100;
    else domObjects.listsTable.scrollLeft -= 100;
  });

  function buildListsLogic() {
    for (let i = 0; i < listsArray.length; i++) {
      const listOptionsBtn = document.getElementById(`list${i}OptionsBtn`);
      listOptionsBtn.addEventListener("click", (e) => {
        deleteList(e.target.getAttribute("data-list-id"));
      });

      const listTitle = domObjects[`list${i}Title`];
      listTitle.addEventListener("keydown", (e) => {
        maxLimitForContenteditableDiv(e, listTitle, 20);
      });
      listTitle.addEventListener("paste", (e) => {
        maxLimitForContenteditableDiv(e, listTitle, 20);
      });
      listTitle.addEventListener("focus", (e) => {
        e.target.setAttribute(
          "style",
          `border: solid 1px ${listsArray[i].color1};
                box-shadow: 0px 0px 4px ${listsArray[i].color1};`
        );
      });
      listTitle.addEventListener("blur", (e) => {
        e.target.setAttribute("style", "");
        listsArray[i].title = listTitle.innerHTML;
        writeToLocal(projectsArray);
      });
    }
  }
  buildListsLogic();

  function deleteList(id) {
    listsArray.splice(id, 1);
    clearPage("list");
    buildLists(currentProject);
    buildListsLogic();
    addListBtn();
    writeToLocal(projectsArray);
  }

  function addListBtn() {
    domObjects.addListBtn.addEventListener("click", function() {
      createList(currentProject.lists, "New list");
      clearPage("list");
      buildLists(currentProject);
      buildListsLogic();
      addListBtn();
      writeToLocal(projectsArray);
    });
  }
  addListBtn();
}

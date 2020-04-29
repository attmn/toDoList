import {
  clearPage,
  initPagesExport,
  maxLimitForContenteditableDiv,
} from "./initpages.js";
import { writeToLocal, importStored } from "./storage.js";
import { buildLists } from "./listsDOM.js";
import { add } from "date-fns";

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

const listItem = (title, description, date = false) => {
  let complete = false;
  return { title, description, date, complete };
};

function createItem(parentList, title, description, date) {
  const item = listItem(title, description, date);
  parentList.unshift(item);
}

export function listsLogic(currentProject, projectsArray) {
  const domObjects = initPagesExport.domObjects;
  const listsArray = currentProject.lists;
  window.addEventListener("wheel", function(e) {
    if (e.deltaY > 0) domObjects.listsTable.scrollLeft += 100;
    else domObjects.listsTable.scrollLeft -= 100;
  });

  window.onclick = function(event) {
    if (event.target == domObjects["droppedItemDiv"]) {
      domObjects["droppedItemDiv"].style.display = "none";
    }
  };

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

      const addItemBtn = domObjects[`addItemBtn${i}`];
      addItemBtn.addEventListener("click", () => {
        submitItem(listsArray[i]);
        domObjects["droppedItemDiv"].style.display = "block";
      });

      let sourceItem;

      for (let index = 0; index < listsArray[i].items.length; index++) {
        const list = listsArray[i];
        const itemBox = domObjects[`list${i}Item${index}Box`];
        const itemCheckbox = domObjects[`list${i}Item${index}Checkbox`];
        const item = domObjects[`list${i}Item${index}`];

        itemBox.addEventListener("dragstart", (e) => {
          sourceItem = e.target;
          const itemId = e.target.getAttribute("data-item-id");
          e.dataTransfer.setData(
            "text/plain",
            JSON.stringify(list.items[itemId])
          );
          e.dataTransfer.effectAllowed = "move";
        });

        itemBox.addEventListener("dragover", (e) => {
          e.preventDefault();
          e.dataTransfer.dropEffect = "move";
        });

        itemBox.addEventListener("drop", (e) => {
          e.preventDefault();
          e.stopPropagation();
          const droppedItem = JSON.parse(e.dataTransfer.getData("text/plain"));
          const itemId = e.target.getAttribute("data-item-id");
          const sourceItemID = sourceItem.getAttribute("data-item-id");
          sourceItem.childNodes[1].innerHTML = e.target.innerHTML;
          e.target.innerHTML = droppedItem.title;
          list.items[sourceItemID] = list.items[itemId];
          list.items[itemId] = droppedItem;
          clearPage("list");
          buildLists(currentProject);
          buildListsLogic();
          addListBtn();
          writeToLocal(projectsArray);
        });

        itemCheckbox.addEventListener("change", (e) => {
          if (itemCheckbox.checked) {
            listsArray[i].items[index].complete = true;
            item.classList.add("completedItem");
            writeToLocal(projectsArray);
          } else {
            listsArray[i].items[index].complete = false;
            item.classList.remove("completedItem");
            writeToLocal(projectsArray);
          }
        });

        if (listsArray[i].items[index].complete === true) {
          item.classList.add("completedItem");
          itemCheckbox.checked = true;
        } else {
          item.classList.remove("completedItem");
          itemCheckbox.checked = false;
        }
      }
    }
  }

  function submitItem(list) {
    const title = domObjects["itemTitleInput"];
    const description = domObjects["itemDescInput"];
    const date = domObjects["itemDateInput"];
    const droppedItemForm = domObjects["droppedItemForm"];
    const droppedItemSubmit = domObjects["droppedItemSubmit"];
    droppedItemSubmit.addEventListener("click", () => {
      document.forms["droppedItemForm"].submit();
    });
    droppedItemForm.addEventListener("submit", () => {
      createItem(list.items, title.value, description.value, date.value);
      domObjects["droppedItemDiv"].style.display = "block";
      clearPage("list");
      buildLists(currentProject);
      buildListsLogic();
      addListBtn();
      writeToLocal(projectsArray);
    });
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
    domObjects.addListBtn.addEventListener("click", () => {
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

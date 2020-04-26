import { initPagesExport, shortenStr, createElement } from "./initpages.js";

export function buildLists(currentProject) {
  document.body.firstElementChild.tabIndex = 1;

  const domObjects = initPagesExport.domObjects;

  createElement(domObjects.topBar, "button", "addListBtn", "addBtn", "+");

  createElement(domObjects.bodyDiv, "div", "listsBody");
  createElement(domObjects.listsBody, "h1", "listsPageTitle", "pageTitle", "");
  const listsPageTitle = domObjects["listsPageTitle"];
  listsPageTitle.outerHTML = `<h2 id="listsPageTitle" class="pageTitle"><a href="" class="pageTitle">${currentProject.title}</a> > Lists</h2>`;

  createElement(domObjects.listsBody, "div", "listsTable");

  while (domObjects.listsTable.firstChild) {
    domObjects.listsTable.removeChild(domObjects.listsTable.lastChild);
  }
  for (let i = 0; i < currentProject.lists.length; i++) {
    createElement(
      domObjects.listsTable,
      "div",
      `list${i}CellDiv`,
      "listCellDiv"
    );
    const listCellDiv = domObjects[`list${i}CellDiv`];

    createElement(listCellDiv, "div", `list${i}Options`, "options");
    const listOptions = domObjects[`list${i}Options`];

    createElement(listOptions, "a", `list${i}OptionsBtn`, "optionsBtn");
    const listOptionsBtn = domObjects[`list${i}OptionsBtn`];
    listOptionsBtn.innerHTML = "...";
    listOptionsBtn.setAttribute("data-list-id", i);

    //Project div
    createElement(listCellDiv, "div", `list${i}`, "listCell");
    const list = domObjects[`list${i}`];

    //Project element
    createElement(list, "h2", `list${i}Title`, "listTitle");
    const listTitle = domObjects[`list${i}Title`];
    listTitle.innerHTML = shortenStr(currentProject.lists[i].title, 20);
    listTitle.setAttribute("contentEditable", "true");
    listTitle.setAttribute("spellcheck", "false");

    createElement(list, "div", `list${i}Color`, "listColor");
    const listColor = domObjects[`list${i}Color`];
    listColor.style.background = `linear-gradient(232.33deg, ${currentProject.lists[i].color1} 0%, ${currentProject.lists[i].color2} 100.01%)`;

    createElement(list, "h3", `list${i}ListHeading`, "listListHeading");
    const listListHeading = domObjects[`list${i}ListHeading`];
    listListHeading.innerHTML = "ITEMS";

    createElement(list, "div", `list${i}ItemsDiv`, "listItemsDiv");
    const listItemsDiv = domObjects[`list${i}ItemsDiv`];

    if (currentProject.lists[i].items.length > 0) {
      for (let index = 0; index < 4; index++) {
        createElement(
          listItemsDiv,
          "div",
          `list${i}Items${index}Box`,
          "listListBox"
        );
        const listItemBox = domObjects[`list${i}Item${index}Box`];

        createElement(listItemBox, "p", `list${i}Item${index}`, "listItem");
        const listItem = domObjects[`list${i}Item${index}`];
        listItem.innerHTML = currentProject.lists[i].items[index].title;
      }
    } else {
      createElement(listItemsDiv, "div", `list${i}NoItemBox`, "listItemBox");
      const listNoItemBox = domObjects[`list${i}NoItemBox`];

      createElement(listNoItemBox, "p", `list${i}NoItem`, "listNoItem");
      const listNoItem = domObjects[`list${i}NoItem`];
      listNoItem.innerHTML = "Add new item";
    }
  }
}

import { initPagesExport, shortenStr, createElement } from "./initpages.js";

export function buildLists(currentProject) {
  document.body.firstElementChild.tabIndex = 1;

  const domObjects = initPagesExport.domObjects;

  createElement(domObjects.topBar, "button", "addListBtn", "addBtn", "+");

  createElement(domObjects.bodyDiv, "div", "listsBody");

  createElement(domObjects.listsBody, "div", "newItemDiv", "newItemDiv");
  const newItemDiv = domObjects["newItemDiv"];
  createElement(newItemDiv, "form", "newItemForm", "itemForm");
  const newItemForm = domObjects["newItemForm"];
  createElement(newItemForm, "div", "newItemContainer", "newItemContainer");
  const newItemContainer = domObjects["newItemContainer"];

  createElement(
    newItemContainer,
    "label",
    "itemTitleLabel",
    "itemFormLabel",
    "Title"
  );
  const itemTitleLabel = domObjects["itemTitleLabel"];
  itemTitleLabel.setAttribute("for", "title");
  createElement(newItemContainer, "input", "itemTitleInput", "itemFormInput");
  const itemTitleInput = domObjects["itemTitleInput"];
  itemTitleInput.setAttribute("type", "text");
  itemTitleInput.setAttribute("required", "");

  createElement(
    newItemContainer,
    "label",
    "itemDescLabel",
    "itemFormLabel",
    "Description"
  );
  const itemDescLabel = domObjects["itemDescLabel"];
  itemDescLabel.setAttribute("for", "desc");
  createElement(newItemContainer, "input", "itemDescInput", "itemDescInput");
  const itemDescInput = domObjects["itemDescInput"];
  itemDescInput.setAttribute("type", "text");

  createElement(
    newItemContainer,
    "label",
    "itemDateLabel",
    "itemFormLabel",
    "Due Date"
  );
  const itemDateLabel = domObjects["itemDateLabel"];
  itemDateLabel.setAttribute("for", "date");
  createElement(newItemContainer, "input", "itemDateInput", "itemDateInput");
  const itemDateInput = domObjects["itemDateInput"];
  itemDateInput.setAttribute("type", "date");

  createElement(newItemContainer, "input", "newItemSubmit", "submit");
  const newItemSubmit = domObjects["newItemSubmit"];
  newItemSubmit.setAttribute("type", "submit");
  newItemSubmit.setAttribute("value", "Add Item to List");

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

    createElement(list, "div", `list${i}HeadingDiv`, "listHeadingDiv");
    const listHeadingDiv = domObjects[`list${i}HeadingDiv`];

    createElement(listHeadingDiv, "h3", `list${i}Heading`, "listHeading");
    const listHeading = domObjects[`list${i}Heading`];
    listHeading.innerHTML = "ITEMS";

    createElement(listHeadingDiv, "button", `addItemBtn${i}`, "addItemBtn");
    const addItemBtn = domObjects[`addItemBtn${i}`];
    addItemBtn.innerHTML = "+";

    createElement(list, "ul", `list${i}ItemsDiv`, "itemsDiv");
    const itemsDiv = domObjects[`list${i}ItemsDiv`];

    if (currentProject.lists[i].items.length > 0) {
      for (
        let index = 0;
        index < currentProject.lists[i].items.length;
        index++
      ) {
        createElement(itemsDiv, "li", `list${i}Item${index}Box`, "itemBox");
        const itemBox = domObjects[`list${i}Item${index}Box`];
        itemBox.setAttribute("draggable", "true");
        itemBox.setAttribute("data-item-id", index);

        createElement(
          itemBox,
          "input",
          `list${i}Item${index}Checkbox`,
          "itemCheckbox"
        );
        const itemCheckbox = domObjects[`list${i}Item${index}Checkbox`];
        itemCheckbox.setAttribute("type", "checkbox");

        createElement(itemBox, "p", `list${i}Item${index}`, "item");
        const item = domObjects[`list${i}Item${index}`];
        item.setAttribute("data-item-id", index);
        item.innerHTML = currentProject.lists[i].items[index].title;
      }
    } else {
      createElement(itemsDiv, "div", `list${i}NoItemBox`, "itemBox");
      const listNoItemBox = domObjects[`list${i}NoItemBox`];

      createElement(listNoItemBox, "a", `list${i}NoItem`, "listNoItem");
      const listNoItem = domObjects[`list${i}NoItem`];
      listNoItem.innerHTML = "No items";
    }
  }
}

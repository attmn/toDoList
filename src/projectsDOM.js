import { initPagesExport, shortenStr, createElement } from "./initpages.js";

export function staticBuildProjects() {
  const domObjects = initPagesExport.domObjects;

  createElement(domObjects.topBar, "button", "addProjectBtn", "addBtn", "+");

  createElement(domObjects.bodyDiv, "div", "projectsBody");
  createElement(
    domObjects.projectsBody,
    "h1",
    "projectsPageTitle",
    "pageTitle",
    "PROJECTS"
  );
  createElement(domObjects.projectsBody, "div", "projectsTable");
}

export function buildProjects(projectsArray) {
  document.body.firstElementChild.tabIndex = 1;

  const domObjects = initPagesExport.domObjects;

  while (domObjects.projectsTable.firstChild) {
    domObjects.projectsTable.removeChild(domObjects.projectsTable.lastChild);
  }

  for (let i = 0; i < projectsArray.length; i++) {
    createElement(
      domObjects.projectsTable,
      "div",
      `project${i}CellDiv`,
      "projectCellDiv"
    );
    const projectCellDiv = domObjects[`project${i}CellDiv`];

    createElement(projectCellDiv, "div", `project${i}Options`, "options");
    const projectOptions = domObjects[`project${i}Options`];

    createElement(projectOptions, "a", `project${i}OptionsBtn`, "optionsBtn");
    const projectOptionsBtn = domObjects[`project${i}OptionsBtn`];
    projectOptionsBtn.innerHTML = "...";
    projectOptionsBtn.setAttribute("data-project-id", i);

    //Project div
    createElement(projectCellDiv, "div", `project${i}`, "projectCell");
    const project = domObjects[`project${i}`];

    //Project element
    createElement(project, "h2", `project${i}Title`, "projectTitle");
    const projectTitle = domObjects[`project${i}Title`];
    projectTitle.innerHTML = shortenStr(projectsArray[i].title, 20);
    projectTitle.setAttribute("contentEditable", "true");
    projectTitle.setAttribute("spellcheck", "false");

    createElement(project, "div", `project${i}Color`, "projectColor");
    const projectColor = domObjects[`project${i}Color`];
    projectColor.style.background = `linear-gradient(232.33deg, ${projectsArray[i].color1} 0%, ${projectsArray[i].color2} 100.01%)`;

    createElement(
      project,
      "h3",
      `project${i}ListHeading`,
      "projectListHeading"
    );
    const projectListHeading = domObjects[`project${i}ListHeading`];
    projectListHeading.innerHTML = "LISTS";

    createElement(project, "div", `project${i}ListsDiv`, "projectListsDiv");
    const projectListsDiv = domObjects[`project${i}ListsDiv`];

    if (projectsArray[i].lists.length > 0) {
      let listsInProject;
      if (projectsArray[i].lists.length < 4) {
        listsInProject = projectsArray[i].lists.length;
      } else {
        listsInProject = 4;
      }
      for (let index = 0; index < listsInProject; index++) {
        createElement(
          projectListsDiv,
          "div",
          `project${i}List${index}Box`,
          "projectListBox"
        );
        const projectListBox = domObjects[`project${i}List${index}Box`];

        createElement(
          projectListBox,
          "p",
          `project${i}List${index}`,
          "projectList"
        );
        const projectList = domObjects[`project${i}List${index}`];
        projectList.innerHTML = projectsArray[i].lists[index].title;
      }
    } else {
      createElement(
        projectListsDiv,
        "div",
        `project${i}NoListBox`,
        "projectListBox"
      );
      const projectNoListBox = domObjects[`project${i}NoListBox`];

      createElement(
        projectNoListBox,
        "p",
        `project${i}NoList`,
        "projectNoList"
      );
      const projectNoList = domObjects[`project${i}NoList`];
      projectNoList.innerHTML = "View project to add new list";
    }

    createElement(project, "div", `project${i}ViewDiv`, "projectViewDiv");
    const projectViewDiv = domObjects[`project${i}ViewDiv`];

    createElement(
      projectViewDiv,
      "a",
      `project${i}ViewLink`,
      "projectViewLink"
    );
    const projectViewLink = domObjects[`project${i}ViewLink`];
    projectViewLink.innerHTML = "VIEW";
  }
}

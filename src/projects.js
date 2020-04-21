import { initPagesExport, shortenStr, createElement } from "./initpages.js";
import { writeToLocal, importStored } from "./storage.js";
import { createList } from "./lists.js";

(function projects() {
  document.body.firstElementChild.tabIndex = 1;

  const project = (title, description, color1, color2) => {
    let lists = [];
    return { title, description, color1, color2, lists };
  };

  const projectsArray = importStored("project").array.values;
  const domObjects = initPagesExport.domObjects;

  function createProject(
    title,
    description = "",
    color1 = "#4DB4FF",
    color2 = color1
  ) {
    const projName = project(title, description, color1, color2);
    projectsArray.unshift(projName);
  }

  domObjects.addProjectBtn.addEventListener("click", function() {
    createProject("New Project", "");
    buildProjects();
  });

  function deleteProject(id) {
    projectsArray.splice(id, 1);
    writeToLocal(projectsArray);
    buildProjects();
  }

  // createList(projectsArray[0].lists, "Homework");

  function maxLimitForContenteditableDiv(e, element, limit) {
    let allowedKeys = false;

    if (e.type === "keydown") {
      allowedKeys =
        e.which === 8 /* BACKSPACE */ ||
        e.which === 35 /* END */ ||
        e.which === 36 /* HOME */ ||
        e.which === 37 /* LEFT */ ||
        e.which === 38 /* UP */ ||
        e.which === 39 /* RIGHT*/ ||
        e.which === 40 /* DOWN */ ||
        e.which === 46 /* DEL*/ ||
        (e.ctrlKey === true && e.which === 65) /* CTRL + A */ ||
        (e.ctrlKey === true && e.which === 88) /* CTRL + X */ ||
        (e.ctrlKey === true && e.which === 67) /* CTRL + C */ ||
        (e.ctrlKey === true && e.which === 86) /* CTRL + V */ ||
        (e.ctrlKey === true && e.which === 90) /* CTRL + Z */;
    }

    if (e.type === "paste") {
      setTimeout(function() {
        e.target.textContent = e.target.textContent.slice(0, limit);
        element.style.background = "pink";
      });
    } else {
      element.style.background = "";
    }

    if (!allowedKeys && e.target.textContent.length >= limit) {
      e.preventDefault();
      element.style.background = "pink";
    } else {
      element.style.background = "";
    }
  }

  function buildProjects() {
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

      createElement(
        projectCellDiv,
        "div",
        `project${i}Options`,
        "projectOptions"
      );
      const projectOptions = domObjects[`project${i}Options`];

      createElement(
        projectOptions,
        "a",
        `project${i}OptionsBtn`,
        "projectOptionsBtn"
      );
      const projectOptionsBtn = domObjects[`project${i}OptionsBtn`];
      projectOptionsBtn.innerHTML = "...";
      projectOptionsBtn.setAttribute("data-project-id", i);
      projectOptionsBtn.addEventListener("click", function(e) {
        deleteProject(e.target.getAttribute("data-project-id"));
      });

      //Project div
      createElement(projectCellDiv, "div", `project${i}`, "projectCell");
      const project = domObjects[`project${i}`];

      //Project element
      createElement(project, "h2", `project${i}Title`, "projectTitle");
      const projectTitle = domObjects[`project${i}Title`];
      projectTitle.innerHTML = shortenStr(projectsArray[i].title, 20);
      projectTitle.setAttribute("contentEditable", "true");
      projectTitle.setAttribute("spellcheck", "false");
      projectTitle.addEventListener("keydown", (e) => {
        maxLimitForContenteditableDiv(e, projectTitle, 20);
      });
      projectTitle.addEventListener("paste", (e) => {
        maxLimitForContenteditableDiv(e, projectTitle, 20);
      });
      projectTitle.addEventListener("focus", (e) => {
        e.target.setAttribute(
          "style",
          `border: solid 1px ${projectsArray[i].color1};
        box-shadow: 0px 0px 4px ${projectsArray[i].color1};`
        );
      });
      projectTitle.addEventListener("blur", (e) => {
        e.target.setAttribute("style", "");
        projectsArray[i].title = projectTitle.innerHTML;
        console.log(projectsArray[i].title);
        writeToLocal(projectsArray);
      });

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

      console.log(projectsArray[i]);
      if (projectsArray[i].lists.length > 0) {
        for (let index = 0; index < 4; index++) {
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
    writeToLocal(projectsArray);
  }
  buildProjects();
})();

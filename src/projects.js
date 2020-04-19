import { initPagesExport, shortenStr, createElement } from "./initpages.js";
import { writeToLocal, importStored } from "./storage.js";

(function projects() {
  const project = (title, description, color1, color2) => {
    let lists = [];
    return { title, description, color1, color2, lists };
  };

  const projectsArray = importStored("project", projectsArray).array.values;
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
    if (projectsArray.length > 0) {
      while (domObjects.projectsTable.firstChild) {
        domObjects.projectsTable.removeChild(
          domObjects.projectsTable.lastChild
        );
      }
    }
    for (let i = 0; i < projectsArray.length; i++) {
      createElement(
        domObjects.projectsTable,
        "div",
        `project${i}`,
        "projectCell"
      );
      const projectCell = domObjects[`project${i}Cell`];

      createElement(
        domObjects[`project${i}`],
        "span",
        `project${i}Title`,
        "projectTitle"
      );
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
        e.target.style.border = `solid 1px ${projectsArray[i].color1}`;
      });
      projectTitle.addEventListener("blur", (e) => {
        e.target.style.border = "";
      });

      createElement(
        domObjects[`project${i}`],
        "div",
        `project${i}Color`,
        "projectColor"
      );
      const projectColor = domObjects[`project${i}Color`];
      projectColor.style.background = `linear-gradient(232.33deg, ${projectsArray[i].color1} 0%, ${projectsArray[i].color2} 100.01%)`;

      createElement(
        domObjects[`project${i}`],
        "div",
        `project${i}Lists`,
        "projectLists"
      );

      const projectLists = domObjects[`project${i}Lists`];

      createElement(
        domObjects[`project${i}`],
        "div",
        `project${i}ViewDiv`,
        "projectViewDiv"
      );
      const projectViewDiv = domObjects[`project${i}ViewDiv`];

      createElement(
        domObjects[`project${i}ViewDiv`],
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

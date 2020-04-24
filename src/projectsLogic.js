import {
  clearPage,
  initPagesExport,
  maxLimitForContenteditableDiv,
} from "./initpages.js";
import { writeToLocal, importStored } from "./storage.js";
import { buildProjects } from "./projectsDOM.js";
import { createList, listsLogic } from "./listsLogic.js";
import { buildLists } from "./listsDOM.js";

(function projectsLogic() {
  const projectsArray = importStored("project").array.values;

  document.body.firstElementChild.tabIndex = 1;

  const project = (title, description, color1, color2) => {
    let lists = [];
    return { title, description, color1, color2, lists };
  };

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

  function deleteProject(id) {
    projectsArray.splice(id, 1);
    buildProjects(projectsArray);
    buildProjectsLogic();
    writeToLocal(projectsArray);
  }

  function buildProjectsLogic() {
    for (let i = 0; i < projectsArray.length; i++) {
      const projectOptionsBtn = document.getElementById(
        `project${i}OptionsBtn`
      );
      projectOptionsBtn.addEventListener("click", (e) => {
        console.log(e);
        deleteProject(e.target.getAttribute("data-project-id"));
      });

      const projectTitle = domObjects[`project${i}Title`];
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
        writeToLocal(projectsArray);
      });

      const projectView = domObjects[`project${i}ViewLink`];
      projectView.addEventListener("click", (e) => {
        clearPage("project");
        buildLists(projectsArray[i]);
        listsLogic(projectsArray[i], projectsArray);
      });
    }
  }
  buildProjects(projectsArray);
  buildProjectsLogic();

  (function addProjectBtn() {
    domObjects.addProjectBtn.addEventListener("click", function() {
      createProject("New Project", "");
      buildProjects(projectsArray);
      buildProjectsLogic();
      writeToLocal(projectsArray);
    });
  })();
})();

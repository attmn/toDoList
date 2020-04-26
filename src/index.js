import { clearPage } from "./initpages.js";
import { staticBuildProjects } from "./projectsDOM.js";
import { projectsLogic } from "./projectsLogic.js";
import { buildLists } from "./listsDOM.js";
import { listsLogic } from "./listsLogic.js";
import { importStored } from "./storage.js";

(function checkURL() {
  function showPage() {
    const projectsArray = importStored("project").array.values;
    if (window.location.href.indexOf("project") != -1) {
      const urlHash = window.location.hash;
      const urlHashIndex = urlHash.replace("#project", "");
      clearPage("project");
      clearPage("list");
      buildLists(projectsArray[urlHashIndex]);
      listsLogic(projectsArray[urlHashIndex], projectsArray);
    } else {
      clearPage("list");
      staticBuildProjects();
      projectsLogic();
    }
  }

  window.addEventListener("hashchange", () => {
    showPage();
  });

  showPage();
})();

const domObjects = {
  content: document.getElementById("content"),
  topBar: document.getElementById("topBar"),
  bodyDiv: document.getElementById("bodyDiv"),
};

export function shortenStr(str, maxLen) {
  if (str.length <= maxLen) return str;
  return str.substr(0, maxLen) + "...";
}

export function createElement(
  parent,
  type,
  atrName,
  className = "",
  innerHTML = "",
  atr = "id"
) {
  const element = document.createElement(type);

  if (className !== "") {
    element.classList.add(className);
  }
  element.setAttribute(atr, atrName);
  element.innerHTML = innerHTML;

  parent.appendChild(element);
  domObjects[atrName] = document.getElementById(atrName);
}

function createProjectsPage() {
  createElement(domObjects.topBar, "button", "addProjectBtn", "addBtn", "+");
  createElement(domObjects.bodyDiv, "div", "projectsBody");
  createElement(
    domObjects.projectsBody,
    "h1",
    "projectsTitle",
    "pageTitle",
    "PROJECTS"
  );
  createElement(domObjects.projectsBody, "div", "projectsTable");
}

function initPages() {
  createProjectsPage();
}

export const initPagesExport = {
  create: initPages(),
  domObjects: domObjects,
};

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

export function maxLimitForContenteditableDiv(e, element, limit) {
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

export function clearPage(pageName) {
  let pageNameMid = pageName[0].toUpperCase() + pageName.slice(1).toLowerCase();
  domObjects[`add${pageNameMid}Btn`].remove();
  domObjects[`${pageName}sBody`].remove();
}

export const initPagesExport = {
  domObjects: domObjects,
};

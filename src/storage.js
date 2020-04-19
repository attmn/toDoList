//Check if storage is available
function storageAvailable(type) {
  var storage;
  try {
    storage = window[type];
    var x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

let data = {
  set: function(key, value) {
    if (!key || !value) {
      return;
    }

    if (typeof value === "object") {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  },
  get: function(key) {
    var value = localStorage.getItem(key);

    if (!value) {
      return;
    }

    // assume it is an object that has been stringified
    if (value[0] === "{") {
      value = JSON.parse(value);
    }

    return value;
  },
};

//Save to localstorage
/* export function writeToLocal(array) {
  if (storageAvailable("localStorage")) {
    localStorage.clear();
    for (let i = 0; i < array.length; i++) {
      for (let i = 0; i < Object.entries(array[i]).length; i++) {
        let key = Objects.entries(array[i])[i][0];
        let value = Object.entries(array[i][i][1]);
        data.set(key, value);
      }
    }
  }
} */

export function writeToLocal(array) {
  console.log(array);
}

//Populates from localStorage
export function readFromLocal() {
  if (storageAvailable("localStorage")) {
    for (let i = 0; i < localStorage.length / 4; i++) {
      let title = localStorage.getItem(`project${i} title`);
      let project = createProject(title);
      projectsArray.push(project);
    }
  }
  buildProjects();
}

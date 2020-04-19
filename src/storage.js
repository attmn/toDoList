import { projectsStorageObject } from "./projects.js";

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
/*export function writeToLocal(array) {
  if (storageAvailable("localStorage")) {
    localStorage.clear();
    for (let i = 0; i < array.length; i++) {
      //Number of projects in total
      for (let index = 0; index < Object.entries(array[i]).length; index++) {
        //Entries inside each object
        let id = document.getElementById(`project${i}`).id;
        let key = Object.entries(array[i])[index][0]; //Key
        let value = Object.entries(array[i])[index][1]; //Value
        data.set(id + key, value);
      }
    }
  }
} */

export function writeToLocal(array) {
  if (storageAvailable("localStorage")) {
    localStorage.clear();
    for (let i = 0; i < array.length; i++) {
      let id = document.getElementById(`project${i}`).id;
      let arrayObject = array[i];
      localStorage.setItem(id, JSON.stringify(arrayObject));
    }
    console.log("written to local");
  }
}

export function getStored(keyName) {
  if (storageAvailable("localStorage")) {
    const entries = Object.entries(localStorage);
    let values = [];

    for (let i = 0; i < entries.length; i++) {
      if (entries[i][0].includes(keyName)) {
        let storedObject = localStorage.getItem(keyName + i);
        values.push(JSON.parse(storedObject));
      }
    }
    console.log("retireved");
    return { values };
  }
  console.log("nothing stored");
  return false;
}

export function importStored(keyName, array) {
  let storedArray = getStored(keyName);
  if (storedArray != false) {
    array = storedArray;
  } else {
    array = [];
  }
  return { array };
}

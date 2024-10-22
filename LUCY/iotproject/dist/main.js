/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Dustbincardstyles.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Dustbincardstyles.css ***!
  \*************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap);"]);
exports.push([module.id, "@import url(https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css);"]);
// Module
exports.push([module.id, "/*=============== GOOGLE FONTS ===============*/\r\n\r\n\r\n/*=============== CSS VARIABLES ===============*/\r\n:root {\r\n  /*========== Color Palette ==========*/\r\n  --primary-color: #3498db;\r\n  --secondary-color: #2ecc71;\r\n  --warning-color: #f39c12;\r\n  --danger-color: #e74c3c;\r\n  --background-color: #f4f6f9;\r\n  --card-color: #ffffff;\r\n  --text-color-dark: #333;\r\n  --text-color-light: #fff;\r\n  --shadow-color: rgba(0, 0, 0, 0.1);\r\n  --highlight-color: rgba(255, 255, 255, 0.2); /* Soft light highlight */\r\n\r\n  /*========== Typography ==========*/\r\n  --font-primary: 'Poppins', sans-serif;\r\n  --font-size-large: 4.5rem;\r\n  --font-size-medium: 1.5rem;\r\n  --font-size-small: 1.5rem;\r\n  --font-weight-bold: 700;\r\n  --font-weight-semi-bold: 600;\r\n  --font-weight-regular: 400;\r\n\r\n  /*========== Spacing ==========*/\r\n  --spacing-small: 8px;\r\n  --spacing-medium: 16px;\r\n  --spacing-large: 32px;\r\n\r\n  /*========== Border Radius ==========*/\r\n  --border-radius: 16px;\r\n}\r\n\r\n/*=============== GLOBAL STYLES ===============*/\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: var(--font-primary);\r\n  background-color: var(--background-color);\r\n  color: var(--text-color-dark);\r\n  padding: var(--spacing-large);\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n  font-weight: var(--font-weight-bold);\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n/*=============== CARD CONTAINER ===============*/\r\n.bin {\r\n  display: flex; /* Use flexbox for a horizontal layout */\r\n  flex-wrap: wrap; \r\n  gap: 10px; /* Adjust spacing between the cards */\r\n  justify-content: space-around; /* Center the items and give space around */\r\n}\r\n\r\n\r\n.bin-card {\r\n  background-color: var(--card-color);\r\n  border-radius: var(--border-radius);\r\n  max-width: 350px;\r\n  padding: var(--spacing-large);\r\n  box-shadow: 0 4px 20px var(--shadow-color);\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  position: relative;\r\n  transition: all 0.3s ease;\r\n  overflow: hidden;\r\n}\r\n\r\n/*=============== TEXT STYLES ===============*/\r\n.bin-text {\r\n  font-size: var(--font-size-medium);\r\n  font-weight: var(--font-weight-regular);\r\n  margin-bottom: var(--spacing-small);\r\n  color: var(--text-color-dark);\r\n}\r\n\r\n.bin-percentage {\r\n  font-size: var(--font-size-large);\r\n  font-weight: var(--font-weight-bold);\r\n  color: var(--primary-color);\r\n}\r\n\r\n.bin-status {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: var(--spacing-small);\r\n  font-size: var(--font-size-small);\r\n  margin-top: var(--spacing-medium);\r\n  color: var(--text-color-dark);\r\n}\r\n\r\n.bin-location {\r\n  margin-top: var(--spacing-small);\r\n  font-size: var(--font-size-small);\r\n  color: var(--secondary-color);\r\n  font-weight: 800;\r\n}\r\n\r\n/*=============== PILL STYLES ===============*/\r\n.bin-pill {\r\n  position: relative;\r\n  margin-left: 25px;\r\n  width: 100px;\r\n  height: 220px;\r\n  background-color: var(--background-color);\r\n  border-radius: 50px; /* Keep the pill shape intact */\r\n  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.1);\r\n  overflow: hidden;\r\n  transition: all 0.3s ease;\r\n  border: 2px solid rgba(0, 0, 0, 0.05);\r\n  \r\n}\r\n\r\n.bin-level {\r\n  position: absolute;\r\n  inset: 4px;\r\n  border-radius: 50px;\r\n  overflow: hidden;\r\n  \r\n}\r\n/* Update your CSS file */\r\n.bin-status i {\r\n    font-size: 1.25rem;\r\n    transition: color 0.3s ease; /* Add transition for smoother color change */\r\n}\r\n\r\n/* Specific colors for each state */\r\n.animated-red {\r\n    color: var(--danger-color); /* Ensure this variable is defined */\r\n}\r\n\r\n.animated-green {\r\n    color: var(--secondary-color); /* Ensure this variable is defined */\r\n}\r\n\r\n.animated-orange {\r\n    color: var(--warning-color); /* Define for the low state */\r\n}\r\n\r\n\r\n/* Updated bin liquid styles for better visibility and animation */\r\n.bin-liquid {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 0; /* Set initial height to 0, will update dynamically */\r\n  background: var(--secondary-color);\r\n  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.2);\r\n  transition: height 0.5s ease, background-color 0.5s ease;\r\n}\r\n\r\n/*=============== COLOR STATES ===============*/\r\n.gradient-color-green {\r\n  background: var(--secondary-color);\r\n}\r\n\r\n.gradient-color-orange {\r\n  background: var(--warning-color);\r\n}\r\n\r\n.gradient-color-red {\r\n  background: var(--danger-color);\r\n}\r\n\r\n/*=============== KEYFRAMES ===============*/\r\n@keyframes pulse-orange {\r\n  0% { box-shadow: 0 0 15px var(--warning-color); }\r\n  100% { box-shadow: 0 0 30px var(--warning-color); }\r\n}\r\n\r\n@keyframes pulse-red {\r\n  0% { box-shadow: 0 0 15px var(--danger-color); }\r\n  100% { box-shadow: 0 0 30px var(--danger-color); }\r\n}\r\n\r\n/*=============== RESPONSIVE STYLES =============== */\r\n@media screen and (min-width: 768px) {\r\n  :root {\r\n    --font-size-large: 5rem;\r\n    --font-size-medium: 1.75rem;\r\n  }\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/sidebarStyles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/sidebarStyles.css ***!
  \*********************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "/* Super-styled sidebar */\r\n.sidebar {\r\n    background: linear-gradient(135deg, #00c6ff, #0072ff); /* Gradient background */\r\n    height: 100%;\r\n    width: 100%;\r\n    color: white;\r\n    display: flex;\r\n    flex-direction: column;\r\n    box-sizing: border-box;\r\n    border-radius: 20px;\r\n    padding: 25px;\r\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); /* Soft shadow for elevated effect */\r\n    font-family: 'Poppins', sans-serif; /* Modern font */\r\n    transition: transform 0.3s ease;\r\n    align-items: center;\r\n    justify-content: space-between; /* Adjusted to give space for buttons */\r\n}\r\n\r\n.sidebar:hover {\r\n    transform: scale(1.02); /* Slight zoom on hover */\r\n}\r\n\r\n.sidebarnav {\r\n    list-style-type: none;\r\n    padding: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px; /* More space between the items */\r\n    align-items: center;\r\n}\r\n\r\n/* Fixed size for each li */\r\n.sidebarnav li {\r\n    width: 200px; /* Set a specific width */\r\n    height: 50px; /* Set a specific height */\r\n    display: flex; /* Align content inside the li */\r\n    justify-content: center; /* Center horizontally */\r\n    align-items: center; /* Center vertically */\r\n    background-color: rgba(255, 255, 255, 0.1); /* Background color for the box */\r\n    border-radius: 10px; /* Rounded corners */\r\n    margin-bottom: 0px; /* Space between items */\r\n}\r\n\r\n/* Style the a inside the li */\r\n.sidebarnav a {\r\n    text-decoration: none;\r\n    color: white;\r\n    font-size: 18px;\r\n    padding: 5px;\r\n    width: 100%; /* Fill the entire li width */\r\n    height: 100%; /* Fill the entire li height */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 10px;\r\n    background-color: rgba(255, 255, 255, 0.1); /* Semi-transparent background */\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.sidebarnav a:hover {\r\n    background-color: #00b4ff; /* Bright blue on hover */\r\n    color: white;\r\n}\r\n\r\n.sidebar .logo {\r\n    height: 100px;\r\n    width: 100px;\r\n    border-radius: 50%; /* Circular logo */\r\n}\r\n\r\n/* Style for the control buttons (Add/Delete) */\r\n.sidebar-controls {\r\n    display: flex;\r\n    gap: 10px; /* Space between buttons */\r\n    justify-content: center;\r\n    margin-top: 20px;\r\n}\r\n\r\n/* Style for individual buttons */\r\n.sidebar-controls button {\r\n    background-color: rgba(255, 255, 255, 0.2); /* Semi-transparent background */\r\n    color: white;\r\n    border: none;\r\n    padding: 10px 20px;\r\n    font-size: 16px;\r\n    border-radius: 10px;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s ease;\r\n    font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n.sidebar-controls button:hover {\r\n    background-color: #0072ff; /* Bright blue on hover */\r\n}\r\n\r\n/* Form for adding new links */\r\n.add-link-form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.add-link-form input {\r\n    width: 200px;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    border: none;\r\n    outline: none;\r\n    background-color: rgba(255, 255, 255, 0.1); /* Semi-transparent input */\r\n    color: white;\r\n    font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n.add-link-form input::placeholder {\r\n    color: rgba(255, 255, 255, 0.7); /* Lighter placeholder text */\r\n}\r\n\r\n.add-link-form button {\r\n    background-color: rgba(255, 255, 255, 0.2); /* Semi-transparent background */\r\n    color: white;\r\n    border: none;\r\n    padding: 10px 20px;\r\n    font-size: 16px;\r\n    border-radius: 10px;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s ease;\r\n}\r\n\r\n.add-link-form button:hover {\r\n    background-color: #0072ff; /* Bright blue on hover */\r\n}\r\n\r\n/* Cancel button styling */\r\n.cancel-button {\r\n    background-color: rgba(255, 255, 255, 0.2); /* Semi-transparent background */\r\n    color: white;\r\n    border: none;\r\n    padding: 10px 20px;\r\n    font-size: 16px;\r\n    border-radius: 10px;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s ease;\r\n    margin-top: 10px;\r\n}\r\n\r\n.cancel-button:hover {\r\n    background-color: #ff4b5c; /* Bright red on hover */\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/Dustbincardstyles.css":
/*!***********************************!*\
  !*** ./src/Dustbincardstyles.css ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./Dustbincardstyles.css */ "./node_modules/css-loader/dist/cjs.js!./src/Dustbincardstyles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/sidebarStyles.css":
/*!*******************************!*\
  !*** ./src/sidebarStyles.css ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./sidebarStyles.css */ "./node_modules/css-loader/dist/cjs.js!./src/sidebarStyles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "react"));
const uxp_1 = __webpack_require__(/*! ./uxp */ "./src/uxp.ts");
const react_1 = __webpack_require__(/*! react */ "react");
const recharts_1 = __webpack_require__(/*! recharts */ "recharts");
__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
__webpack_require__(/*! ./Dustbincardstyles.css */ "./src/Dustbincardstyles.css");
__webpack_require__(/*! ./sidebarStyles.css */ "./src/sidebarStyles.css");
const DustbinWidget = (props) => {
    const [dustbins, setDustbins] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        getData();
    }, []);
    function getData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield props.uxpContext.executeAction(props.model, props.action, {}, { json: true });
                if (res && Array.isArray(res) && res.length > 0) {
                    setDustbins(res);
                }
                else {
                    console.error('Invalid response data format or empty array', res);
                }
            }
            catch (error) {
                console.error('Error fetching dustbin data', error);
            }
        });
    }
    const getBinStatus = (level) => {
        let status = '';
        let color = '';
        if (level >= 100) {
            status = `Full bin <i class="ri-delete-bin-3-line animated-red"></i>`;
            color = 'gradient-color-red';
        }
        else if (level > 60) {
            status = `Almost Full <i class="ri-delete-bin-3-line animated-orange"></i>`;
            color = 'gradient-color-red';
        }
        else if (level > 35) {
            status = `Low bin <i class="ri-delete-bin-3-line animated-yellow"></i>`;
            color = 'gradient-color-orange';
        }
        else {
            status = `Very Low <i class="ri-delete-bin-3-line animated-green"></i>`;
            color = 'gradient-color-green';
        }
        return { status, color };
    };
    return (React.createElement("section", { className: "bin" }, dustbins.map((data) => {
        const { value, name, location } = data; // Destructure the properties you need
        const binLevel = Number(value);
        const { status, color } = getBinStatus(binLevel); // Get the status and color for the current bin
        const binPercentage = `${binLevel}%`; // Calculate the percentage
        return (React.createElement("div", { className: "bin-card", id: name, key: name },
            React.createElement("div", { className: "bin-data" },
                React.createElement("p", { className: "bin-text" }, name),
                React.createElement("h1", { className: "bin-percentage" }, binPercentage),
                React.createElement("p", { className: "bin-status", dangerouslySetInnerHTML: { __html: status } }),
                React.createElement("p", { className: "bin-location" }, location)),
            React.createElement("div", { className: "bin-pill" },
                React.createElement("div", { className: "bin-level" },
                    React.createElement("div", { className: `bin-liquid ${color}`, style: { height: binPercentage } })))));
    })));
};
const SidebarWidget = (props) => {
    const [links, setLinks] = (0, react_1.useState)([
        { title: 'BINS', url: 'https://www.google.com/' },
        { title: 'CATEGORIES', url: '#' },
        { title: 'SETTINGS', url: '#' },
    ]);
    const [newLink, setNewLink] = (0, react_1.useState)({ title: '', url: '' });
    const [isAddMode, setIsAddMode] = (0, react_1.useState)(false); // Toggle form visibility
    const [isDeleteMode, setIsDeleteMode] = (0, react_1.useState)(false); // Toggle delete mode
    // Add link to the sidebar
    const addLink = () => {
        if (newLink.title && newLink.url) {
            setLinks([...links, newLink]);
            setNewLink({ title: '', url: '' }); // Reset input fields
            setIsAddMode(false); // Hide the form after adding
        }
    };
    // Remove link from the sidebar
    const removeLink = (index) => {
        const updatedLinks = links.filter((_, i) => i !== index);
        setLinks(updatedLinks);
    };
    // Cancel any current mode (Add or Delete)
    const cancelAction = () => {
        setIsAddMode(false);
        setIsDeleteMode(false);
        setNewLink({ title: '', url: '' }); // Reset the form input if any
    };
    return (React.createElement("div", { className: "sidebar" },
        React.createElement("img", { src: "Red.jpg", alt: "logo", className: "logo" }),
        React.createElement("ul", { className: "sidebarnav" }, links.map((link, index) => (React.createElement("li", { key: index },
            React.createElement("a", { href: link.url }, link.title),
            isDeleteMode && React.createElement("button", { onClick: () => removeLink(index) }, "Delete"))))),
        React.createElement("div", { className: "sidebar-controls" },
            React.createElement("button", { onClick: () => { setIsAddMode(!isAddMode); setIsDeleteMode(false); } }, "Add Item"),
            React.createElement("button", { onClick: () => { setIsDeleteMode(!isDeleteMode); setIsAddMode(false); } }, "Delete Item")),
        (isAddMode || isDeleteMode) && (React.createElement("div", { className: "sidebar-actions" },
            isAddMode && (React.createElement("div", { className: "add-link-form" },
                React.createElement("input", { type: "text", placeholder: "Link title", value: newLink.title, onChange: (e) => setNewLink(Object.assign(Object.assign({}, newLink), { title: e.target.value })) }),
                React.createElement("input", { type: "text", placeholder: "Link URL", value: newLink.url, onChange: (e) => setNewLink(Object.assign(Object.assign({}, newLink), { url: e.target.value })) }),
                React.createElement("button", { onClick: addLink }, "Add Link"))),
            React.createElement("button", { className: "cancel-button", onClick: cancelAction }, "Cancel")))));
};
const StackedAreaChartWidget = (props) => {
    const [trends, setTrends] = React.useState('');
    const [data, setData] = React.useState([]);
    // async function getBinNamesForTrends() {
    //     try {
    //         const res = await props.uxpContext.executeAction('ranuga-exercise-model', 'getwastedata', {}, { json: true });
    //         console.log("Full API Response:", res);
    //         if (Array.isArray(res)) {
    //             let _bins = res.map(bin => bin);
    //             const ids = _bins.map(bin => bin.id).join(',');
    //             console.log("Extracted IDs:", ids);
    //             setTrends(ids);
    //         } else {
    //             console.error("Error: Unexpected API response format.");
    //         }
    //     } catch (err) {
    //         console.error("API Error:", err);
    //     }
    // }
    // useEffect(() => {
    //     getBinNamesForTrends();
    // }, []);
    // useEffect(() => {
    //     if (trends) {
    //         getChartData();
    //     }
    // }, [trends]);
    // async function getChartData() {
    //     try {
    //         const res2 = await props.uxpContext.executeAction('ranuga-exercise-model', 'getTrendDataFromuxp', { trends }, { json: true });
    //         console.log(res2);
    //         let combinedData = {
    //             name: res2.date,
    //             ...Object.fromEntries(res2.bins.map((bin: Bin) => [bin.name, bin.value]))
    //         };
    //         setData([combinedData]);
    //         console.log([combinedData]);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
    const data1 = [
        { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
        { name: 'Page H', uv: 3490, pv: 4300, amt: 2100 },
        { name: 'Page I', uv: 3490, pv: 4300, amt: 2100 },
        { name: 'Page J', uv: 3490, pv: 4300, amt: 2100 },
        { name: 'Page K', uv: 3490, pv: 4300, amt: 2100 },
        { name: 'Page L', uv: 3490, pv: 4300, amt: 2100 },
        { name: 'Page M', uv: 3490, pv: 4300, amt: 2100 },
        { name: 'Page N', uv: 3490, pv: 4300, amt: 2100 },
        { name: 'Page O', uv: 3490, pv: 4300, amt: 2100 },
    ];
    return (React.createElement("div", { style: { overflowX: 'hidden', height: '400px' } },
        React.createElement("div", { style: { minWidth: '900px', height: '100%' } },
            React.createElement(recharts_1.ResponsiveContainer, { width: "100%", height: "100%" },
                React.createElement(recharts_1.AreaChart, { data: data1, margin: {
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    } },
                    React.createElement(recharts_1.CartesianGrid, { strokeDasharray: "3 3" }),
                    React.createElement(recharts_1.XAxis, { dataKey: "name" }),
                    React.createElement(recharts_1.YAxis, null),
                    React.createElement(recharts_1.Tooltip, null),
                    data1.length > 0 && Object.keys(data1[0]).filter(key => key !== 'name').map((binName, index) => (React.createElement(recharts_1.Area, { key: index, type: "monotone", dataKey: binName, stackId: "1", stroke: `#${Math.floor(Math.random() * 16777215).toString(16)}`, fill: `#${Math.floor(Math.random() * 16777215).toString(16)}` }))))))));
};
/**
 * Register as a Widget
 */
// registerWidget({
//     id: "iotproject",
//     widget: IotprojectWidget,
//     configs: {
//         layout: {
//             // w: 12,
//             // h: 12,
//             // minH: 12,
//             // minW: 12
//         }
//     }
// });
(0, uxp_1.registerWidget)({
    id: "dustbin",
    widget: DustbinWidget,
    configs: {
        layout: {
        // w: 12,
        // h: 12,
        // minH: 12,
        // minW: 12
        },
        props: [
            {
                name: "model",
                label: "WIdget model",
                type: "text",
                validate: {
                    required: false,
                },
            },
            {
                name: "action",
                label: "WIdget action",
                type: "text",
                validate: {
                    required: false,
                },
            },
        ],
    },
    defaultProps: {
        'model': 'ranuga-exercise-model',
        'action': 'getwastedata',
    }
});
(0, uxp_1.registerWidget)({
    id: "sidebar",
    widget: SidebarWidget,
    configs: {
        layout: {
        // w: 12,
        // h: 12,
        // minH: 12,
        // minW: 12
        }
    }
});
(0, uxp_1.registerWidget)({
    id: "srchart",
    widget: StackedAreaChartWidget,
    configs: {
        layout: {
        // w: 12,
        // h: 12,
        // minH: 12,
        // minW: 12
        },
        props: [
            {
                name: "model",
                label: "WIdget model",
                type: "text",
                validate: {
                    required: false,
                },
            },
            {
                name: "action",
                label: "WIdget action",
                type: "text",
                validate: {
                    required: false,
                },
            },
        ]
    },
    defaultProps: {
        'model': 'ranuga-exercise-model',
        'action': 'getTrendDataFromuxp',
    }
});
/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "iotproject",
    label: "Iotproject",
    // click: () => alert("Hello"),
    component: IotprojectWidget
});
*/
/**
 * Register as a UI
 */
/*
registerUI({
   id:"iotproject",
   component: IotprojectWidget
});
*/
/**
 * Register as a Widget template
 * This will enable this widget to be edited through the designer
 */
/**
registerCustomWidgetTemplate({
    id: "iotproject", // use all lowercase letters
    name: 'Iotproject',
    description: 'Tempalte Description',
    template: IotprojectWidget,
    moduleId: BundleConfig.id,
    complexity: 'advanced',
    icon: ['fas', 'list'],
    expectedSchema: 'dictionary-array'
});
*/
/**
 * Enable localization
 *
 * This will enable the localization
 *
 * you can use uxpContext.$L() function
 *
 * Ex: Assume you  have a localization message in localization json
 *
 * ```
 * // localization.json
 *
 * {
 *      "uxp.my-widget.title": {
 *          "en": "This is my widget" // english translation,
 *          "ar": "<arabic tranlation >",
 *          ... here goes other translations
 *      }
 * }
 *
 * ```
 *
 *
 * thne in your widget
 *
 * ```
 * // your widget
 *
 * return <WidgetWrapper>
 *      <div class='title'>
 *          {props.uxpContext.$L('uxp.my-widget.title')}
 *      </div>
 *  </WidgetWrapper>
 *
 * ```
 *
 * /// you can have parameters as well
 * // we use `$` mark to identify params
 * // Ex: $name, $location
 *
 * ```
 * // localization.json
 *
 * {
 *      ...
 *      "uxp.my-widget.user-welcom-msg":{
 *          "en": "$userName welcome to my widget"
 *      }
 * }
 * ```
 *
 * in widget
 *
 * ```
 *      ...
 *      <div> {props.uxpContext.$L('uxp.my-widget.user-welcom-msg', {userName: "Jane Doe"})} </div>
 * ```
 *
 *
 */
// enableLocalization()


/***/ }),

/***/ "./src/uxp.ts":
/*!********************!*\
  !*** ./src/uxp.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerCustomWidgetTemplate = exports.getUrlFriendlyString = exports.enableLocalization = exports.registerUI = exports.registerMenuItem = exports.registerLink = exports.registerWidget = void 0;
const bundle_json_1 = __importDefault(__webpack_require__(/*! ../bundle.json */ "./bundle.json"));
const localization_json_1 = __importDefault(__webpack_require__(/*! ../localization.json */ "./localization.json"));
function registerWidget(_widget) {
    var _a;
    let id = (bundle_json_1.default.id + '/widget/' + _widget.id).toLowerCase();
    if (!window.registerWidget) {
        console.error('This code is not being run within the context of UXP');
        return;
    }
    // get widget details from bundle.json 
    // get widget
    let _widgetDetails = (_a = bundle_json_1.default.widgets) === null || _a === void 0 ? void 0 : _a.find((w) => w.id == _widget.id);
    if (!_widgetDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The widget you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedWidget = Object.assign(Object.assign(Object.assign({}, _widget), _widgetDetails), { id });
    window.registerWidget(updatedWidget);
}
exports.registerWidget = registerWidget;
function registerLink(_link) {
    var _a;
    let id = (bundle_json_1.default.id + '/sidebarlink/' + _link.id).toLowerCase();
    if (!window.registerLink) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering link....', id);
    // get widget details from bundle.json 
    // get widget
    let _linkDetails = (_a = bundle_json_1.default.sidebarLinks) === null || _a === void 0 ? void 0 : _a.find((s) => s.id == _link.id);
    if (!_linkDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The sidebar link you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedLink = Object.assign(Object.assign(Object.assign({}, _link), _linkDetails), { id });
    window.registerLink(updatedLink);
}
exports.registerLink = registerLink;
function registerMenuItem(_menuItem) {
    let id = (bundle_json_1.default.id + '/menuitem/' + _menuItem.id).toLowerCase();
    if (!window.registerMenuItem) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering menu item....', id);
    // get widget details from bundle.json 
    // get widget
    let _menuItemDetails = bundle_json_1.default.menuItems.find((s) => s.id == _menuItem.id);
    if (!_menuItemDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The menu item you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedMenuItem = Object.assign(Object.assign(Object.assign({}, _menuItem), _menuItemDetails), { id });
    window.registerMenuItem(updatedMenuItem);
}
exports.registerMenuItem = registerMenuItem;
function registerUI(_ui) {
    let id = (bundle_json_1.default.id + '/ui/' + _ui.id).toLowerCase();
    if (!window.registerUI) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering link....', id);
    // get widget details from bundle.json 
    // get widget
    let _uiDetails = bundle_json_1.default.uis.find((s) => s.id == _ui.id);
    if (!_uiDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The ui you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedUI = Object.assign(Object.assign(Object.assign({}, _ui), _uiDetails), { id });
    window.registerUI(updatedUI);
}
exports.registerUI = registerUI;
function enableLocalization() {
    window.registerLocalization(localization_json_1.default);
}
exports.enableLocalization = enableLocalization;
const getUrlFriendlyString = (string, removeSlashes) => {
    const from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
    const to = "aaaaaeeeeeiiiiooooouuuunc------";
    const newText = string.split('').map((letter, i) => letter.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i)));
    return newText
        .toString() // Cast to string
        .toLowerCase() // Convert the string to lowercase letters
        .trim() // Remove whitespace from both sides of a string
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/'/g, '-e') // Replace single quates with -
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-'); // Replace multiple - with single -
};
exports.getUrlFriendlyString = getUrlFriendlyString;
function registerCustomWidgetTemplate(template) {
    let id = (0, exports.getUrlFriendlyString)(template.id);
    if (!template.icon)
        template.icon = ['fad', 'align-justify'];
    window.registerCustomWidgetTemplate(template);
    registerWidget({
        id: id,
        widget: template.template,
        isTemplate: true,
        isDefaultTemplate: false,
        configs: {
            layout: template.layout || { w: 10, h: 10 },
            props: [
                {
                    name: "uiProps",
                    label: "UI",
                    type: "json"
                }
            ],
            preLoader: (template === null || template === void 0 ? void 0 : template.preLoader) || 'default'
        },
        defaultProps: {
            uiProps: {},
        }
    });
}
exports.registerCustomWidgetTemplate = registerCustomWidgetTemplate;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = React;

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "Recharts" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = Recharts;

/***/ }),

/***/ "./bundle.json":
/*!*********************!*\
  !*** ./bundle.json ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"id":"2648d2ed-3633-4fb3-dcf2-5cec24ba41dc","author":"","widgets":[{"id":"iotproject","name":"iotproject","description":"A sample widget","icon":"","tags":[],"category":"","isTemplate":false},{"id":"dustbin","name":"dustbin","description":"A sample widget","icon":"","tags":[],"category":"","isTemplate":false},{"id":"sidebar","name":"sidebar","description":"A  sidebar widget","icon":"","tags":[],"category":"","isTemplate":false},{"id":"srchart","name":"srchart","description":"Stacked are chart widget","icon":"","tags":[],"category":"","isTemplate":false}],"sidebarLinks":[],"uis":[],"menuItems":[]}');

/***/ }),

/***/ "./localization.json":
/*!***************************!*\
  !*** ./localization.json ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.tsx");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map
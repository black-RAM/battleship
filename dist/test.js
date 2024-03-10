/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
! tailwindcss v3.4.1 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}
.visible {
  visibility: visible;
}
.collapse {
  visibility: collapse;
}
.relative {
  position: relative;
}
.block {
  display: block;
}
.\\!table {
  display: table !important;
}
.table {
  display: table;
}
.grid {
  display: grid;
}
.contents {
  display: contents;
}
.hidden {
  display: none;
}
.border-collapse {
  border-collapse: collapse;
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.resize {
  resize: both;
}
.border {
  border-width: 1px;
}
.underline {
  text-decoration-line: underline;
}
.outline {
  outline-style: solid;
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import 'tailwindcss/base';\n@import 'tailwindcss/components';\n@import 'tailwindcss/utilities';"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ "./src/view.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/model.ts");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



const defaultFunctionParameters = {
    getter: _view__WEBPACK_IMPORTED_MODULE_0__.getUserCoordinates,
    viewUpdater: _view__WEBPACK_IMPORTED_MODULE_0__.updateBoards,
    announcer: _view__WEBPACK_IMPORTED_MODULE_0__.announce
};
class GameController {
    constructor(p) {
        this.human = new _model__WEBPACK_IMPORTED_MODULE_1__.Player(p.userName);
        this.computer = new _model__WEBPACK_IMPORTED_MODULE_1__.Computer();
        this.human.setEnemy(this.computer);
        this.humanTurn = p.humanStarts;
        this.rounds = 0;
    }
    async mainLoop(f = defaultFunctionParameters) {
        while (!(this.human.board.allSunk() || this.computer.board.allSunk())) {
            f.viewUpdater(this.human.board, this.computer.board);
            if (this.humanTurn) {
                this.human.makeMove(await f.getter());
                this.rounds++;
            }
            else {
                this.computer.automaticPlay();
            }
            this.changeTurn();
        }
        return this.endGame(f.announcer);
    }
    endGame(announcer) {
        const winner = this.humanTurn ? this.computer : this.human;
        announcer(winner.name + "has won!");
        return this.rounds;
    }
    changeTurn() {
        this.humanTurn = !this.humanTurn;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameController);


/***/ }),

/***/ "./src/model.ts":
/*!**********************!*\
  !*** ./src/model.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Computer: () => (/* binding */ Computer),
/* harmony export */   GameBoard: () => (/* binding */ GameBoard),
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   Ship: () => (/* binding */ Ship),
/* harmony export */   ShipDatum: () => (/* binding */ ShipDatum)
/* harmony export */ });
class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.sunken = false;
    }
    hit() {
        this.hits++;
        this.isSunk();
    }
    isSunk() {
        this.sunken = this.hits >= this.length;
        return this.sunken;
    }
}
class ShipDatum {
    constructor(ship) {
        this.ship = ship;
        this.wasHit = false;
    }
}
class GameBoard {
    constructor(size = 10) {
        this.board = Array.from({ length: size }, () => Array.from({ length: size }, () => false));
    }
    buildNavy(lengths = [2, 3, 3, 4, 5]) {
        const production = [];
        for (const length of lengths) {
            const model = new Ship(length);
            for (const [row, col] of this.generatePositions(length, model)) {
                this.board[row][col] = new ShipDatum(model);
            }
            production.push(model);
        }
        this.navy = new Set(production);
    }
    generatePositions(length, ship) {
        let positions = [];
        let [row, col] = Array.from({ length: 2 }, () => Math.floor(Math.random() * 10));
        const horizontal = Math.floor(Math.random() * 2) == 0;
        const size = this.board.length;
        while (positions.length < length) {
            const outOfBounds = col >= size || row >= size;
            const neighbors = [[-1, 0], [0, -1], [0, 0], [0, 1], [1, 0]].map(([offsetX, offsetY]) => {
                const [r, c] = [row + offsetX, col + offsetY];
                if (r >= 0 && r < size && c >= 0 && c < size) {
                    return this.board[r][c];
                }
            });
            const shipNearby = neighbors.some(neighbor => neighbor instanceof ShipDatum && neighbor.ship !== ship);
            if (shipNearby || outOfBounds)
                return this.generatePositions(length, ship);
            positions.push([row, col]);
            horizontal ? col++ : row++;
        }
        return positions;
    }
    receiveAttack(row, col) {
        if (row >= 0 && row < this.board.length && col >= 0 && col < this.board.length) {
            const cell = this.board[row][col];
            if (cell instanceof ShipDatum) {
                cell.wasHit = true;
                cell.ship.hit();
                return true;
            }
            this.board[row][col] = true;
        }
    }
    allSunk() {
        if (!this.navy)
            throw new Error("There is no navy. Call this.buildNavy()");
        return [...this.navy].every(ship => ship.sunken);
    }
}
class Player {
    constructor(name) {
        this.name = name;
        this.board = new GameBoard();
        this.board.buildNavy();
    }
    setEnemy(player) {
        this.enemy = player;
        this.enemy.enemy = this; // reciprocal relationship
    }
    makeMove(coordinates) {
        const [guessRow, guessCol] = coordinates;
        if (!this.enemy)
            throw new Error("cannot makeMove without enemy");
        return !!this.enemy.board.receiveAttack(guessRow, guessCol);
    }
}
class Computer extends Player {
    constructor() {
        super("Computer");
        this.history = [];
    }
    automaticPlay() {
        const [randomRow, randomCol] = Array.from({ length: 2 }, () => Math.floor(Math.random() * 10));
        if (this.history.includes([randomRow, randomCol]))
            return this.automaticPlay(); // try again
        this.history.push([randomRow, randomCol]);
        this.makeMove([randomRow, randomCol]);
    }
}



/***/ }),

/***/ "./src/view.ts":
/*!*********************!*\
  !*** ./src/view.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   announce: () => (/* binding */ announce),
/* harmony export */   getInitialParameters: () => (/* binding */ getInitialParameters),
/* harmony export */   getUserCoordinates: () => (/* binding */ getUserCoordinates),
/* harmony export */   updateBoards: () => (/* binding */ updateBoards)
/* harmony export */ });
async function getInitialParameters() {
    return {};
}
async function getUserCoordinates() {
    return [];
}
function updateBoards(humanBoard, computerBoard) {
    // console.clear()
    // const parse = (cells: (boolean | ShipDatum)[]) => {
    //   return cells.map(cell => cell == false ? 0 : cell == true ? 1 : !cell.wasHit ? 2 : 3)
    // }
    // const humanTable = new Table()
    // for (const row of humanBoard.board) {
    //   humanTable.addRow(parse(row))
    // }
    // console.log("Human board: ")
    // humanTable.printTable()
    // const computerTable = new Table()
    // for (const row of computerBoard.board) {
    //   computerTable.addRow(parse(row))
    // }
    // console.log("Computer board: ")
    // computerTable.printTable()
}
function announce(message) {
    // console.log(message)
}



/***/ }),

/***/ "./tests/model.tests.ts":
/*!******************************!*\
  !*** ./tests/model.tests.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/model */ "./src/model.ts");

describe("Ship class", () => {
    const ship = new _src_model__WEBPACK_IMPORTED_MODULE_0__.Ship(5);
    it("initializes length, hits, and sunken properties", () => {
        expect(ship.length).toBe(5);
        expect(ship.hits).toBe(0);
        expect(ship.sunken).toBe(false);
    });
    it(".hit() method increments hits", () => {
        ship.hit();
        expect(ship.hits).toBe(1);
    });
    it(".hit() invokes .isSunk()", () => {
        const mock = jest.spyOn(ship, "isSunk");
        ship.hit();
        expect(mock).toHaveBeenCalled();
    });
    it(".isSunk() returns false if hits are less than length", () => {
        expect(ship.isSunk()).toBe(false);
    });
    it(".isSunk() returns true if hits are equal to its length", () => {
        while (ship.length - ship.hits >= 0)
            ship.hit();
        expect(ship.isSunk()).toBe(true);
    });
    it(".isSunk() updates .sunken property", () => {
        expect(ship.sunken).toBe(true);
    });
});
describe("GameBoard class", () => {
    const size = 10;
    const game = new _src_model__WEBPACK_IMPORTED_MODULE_0__.GameBoard(size);
    it("initializes the board property as a square matrix of falsy values", () => {
        expect(game.board.length).toEqual(size);
        game.board.forEach(row => {
            expect(row.length).toEqual(size);
            row.forEach(cell => expect(cell).toBeFalsy());
        });
    });
    it("buildNavy method assigns a set of Ship objects to navy parameter", () => {
        game.buildNavy();
        expect(game.navy).toBeTruthy();
    });
    it("buildNavy method populates .board with ship datums of expected length", () => {
        if (!game.navy)
            throw new Error("no navy to test!");
        const positionLengths = new Map();
        for (const row of game.board) {
            for (const cell of row) {
                if (cell instanceof _src_model__WEBPACK_IMPORTED_MODULE_0__.ShipDatum) {
                    expect(cell.wasHit).toBeFalsy();
                    const value = positionLengths.get(cell.ship) || 0;
                    positionLengths.set(cell.ship, value + 1);
                    continue;
                }
            }
        }
        for (const ship of game.navy) {
            const positionLength = positionLengths.get(ship) || 0;
            expect(ship.length).toBe(positionLength);
        }
    });
    it("receiveAttack() mutates board to truthy value (and calls .hit on ShipDatum)", () => {
        if (game.board[0][0] instanceof _src_model__WEBPACK_IMPORTED_MODULE_0__.ShipDatum) {
            const mock = jest.spyOn(game.board[0][0].ship, "hit");
            game.receiveAttack(0, 0);
            expect(mock).toHaveBeenCalled();
            expect(game.board[0][0].wasHit).toBeTruthy();
        }
        else {
            game.receiveAttack(0, 0);
            expect(game.board[0][0]).toBeTruthy();
        }
    });
    it("allSunk() returns true if all the ships on the board are sunk", () => {
        if (!game.navy)
            throw new Error("no navy to test!");
        // collect coordinates of each ship
        const coordinates = new Map();
        for (let i = 0; i < game.board.length; i++) {
            for (let j = 0; j < game.board[i].length; j++) {
                const cell = game.board[i][j];
                if (cell instanceof _src_model__WEBPACK_IMPORTED_MODULE_0__.ShipDatum) {
                    const oldCoordinates = coordinates.get(cell.ship) || [];
                    coordinates.set(cell.ship, oldCoordinates.concat([[i, j]]));
                }
            }
        }
        // sink all ships
        for (const ship of game.navy) {
            const placement = coordinates.get(ship) || [];
            for (const [row, col] of placement) {
                game.receiveAttack(row, col);
            }
        }
        // check if allSunk() works
        expect(game.allSunk()).toBe(true);
    });
});
describe("Player class", () => {
    const humanPlayer = new _src_model__WEBPACK_IMPORTED_MODULE_0__.Player("Bob");
    const computerPlayer = new _src_model__WEBPACK_IMPORTED_MODULE_0__.Computer();
    it("initializes a board property", () => {
        expect(humanPlayer.board).toBeInstanceOf(_src_model__WEBPACK_IMPORTED_MODULE_0__.GameBoard);
        expect(computerPlayer.board).toBeInstanceOf(_src_model__WEBPACK_IMPORTED_MODULE_0__.GameBoard);
    });
    it("player1.setEnemy(player2) method creates a reciprocal 'enemy' relationship", () => {
        humanPlayer.setEnemy(computerPlayer);
        expect(humanPlayer.enemy).toBe(computerPlayer);
        expect(computerPlayer.enemy).toBe(humanPlayer);
    });
    it("makeMove calls receiveAttack on enemy board", () => {
        const enemyBoard = jest.spyOn(computerPlayer.board, "receiveAttack");
        humanPlayer.makeMove([0, 0]);
        expect(enemyBoard).toHaveBeenCalled();
    });
});
describe("Computer class", () => {
    const dummyPlayer = new _src_model__WEBPACK_IMPORTED_MODULE_0__.Player("Bob");
    const computer = new _src_model__WEBPACK_IMPORTED_MODULE_0__.Computer();
    computer.setEnemy(dummyPlayer);
    it("inherits from Player class", () => {
        expect(computer).toBeInstanceOf(_src_model__WEBPACK_IMPORTED_MODULE_0__.Player);
    });
    it("automaticPlay calls makeMove with random coordinates", () => {
        const makeMoveMock = jest.spyOn(computer, "makeMove");
        computer.automaticPlay();
        expect(makeMoveMock).toHaveBeenCalled();
    });
});


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./tests/index.tests.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model_tests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.tests */ "./tests/model.tests.ts");
/* harmony import */ var _src_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/model */ "./src/model.ts");
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src */ "./src/index.ts");
// import other test suites

// import modules to test


// fail-safe, easy manual implementations of mocks
// jest.mock("../src/view") was being ignored in bundled dist/test.js
const getInitialParameters = jest.fn(async () => ({ userName: "Human", humanStarts: true }));
const getUserCoordinates = jest.fn(async () => Array.from({ length: 2 }, () => Math.floor(Math.random() * 10)));
const updateBoards = jest.fn();
const announce = jest.fn();
const mockedFunctionParameters = {
    getter: getUserCoordinates,
    viewUpdater: updateBoards,
    announcer: announce
};
describe("GameController class", () => {
    it("sets human and computer player objects as enemies", async () => {
        const game = new _src__WEBPACK_IMPORTED_MODULE_2__["default"](await getInitialParameters());
        expect(game.human).toBeInstanceOf(_src_model__WEBPACK_IMPORTED_MODULE_1__.Player);
        expect(game.computer).toBeInstanceOf(_src_model__WEBPACK_IMPORTED_MODULE_1__.Computer);
        expect(game.human.enemy).toBe(game.computer);
        expect(game.computer.enemy).toBe(game.human);
    });
    it("makes the human and computer play in turn", async () => {
        const game = new _src__WEBPACK_IMPORTED_MODULE_2__["default"](await getInitialParameters());
        const humanSpy = jest.spyOn(game.human, "makeMove");
        const computerSpy = jest.spyOn(game.computer, "makeMove");
        const rounds = await game.mainLoop(mockedFunctionParameters);
        expect(humanSpy).toHaveBeenCalledTimes(rounds);
        expect(computerSpy.mock.calls.length).toBeCloseTo(rounds, -1);
    });
    it("updates the user interface with each play", async () => {
        const game = new _src__WEBPACK_IMPORTED_MODULE_2__["default"](await getInitialParameters());
        const rounds = await game.mainLoop(mockedFunctionParameters);
        expect(updateBoards.mock.calls.length).toBeGreaterThanOrEqual(rounds);
    });
    it("announces the winner at the end of the game", async () => {
        const game = new _src__WEBPACK_IMPORTED_MODULE_2__["default"](await getInitialParameters());
        await game.mainLoop(mockedFunctionParameters);
        expect(game.human.board.allSunk() || game.computer.board.allSunk()).toBe(true);
        expect(announce).toHaveBeenCalled();
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsY0FBYyxPQUFPLFFBQVEsd0JBQXdCLHdCQUF3Qix5QkFBeUIseUJBQXlCLE1BQU0sT0FBTyxZQUFZLE1BQU0sYUFBYSxPQUFPLE9BQU8sd0JBQXdCLHlCQUF5Qix5QkFBeUIsWUFBWSx3QkFBd0IseUJBQXlCLHlCQUF5Qix5QkFBeUIseUJBQXlCLE1BQU0sUUFBUSxPQUFPLE1BQU0sdUJBQXVCLHlCQUF5QixNQUFNLFNBQVMsT0FBTyxNQUFNLHVCQUF1Qix3QkFBd0IseUJBQXlCLE1BQU0sT0FBTyxPQUFPLE1BQU0sWUFBWSxhQUFhLE1BQU0sT0FBTyxPQUFPLFdBQVcsWUFBWSxhQUFhLE1BQU0sT0FBTyxPQUFPLE1BQU0sV0FBVyxhQUFhLE1BQU0sT0FBTyxPQUFPLE9BQU8sWUFBWSxNQUFNLFVBQVUsT0FBTyxTQUFTLHdCQUF3Qix5QkFBeUIseUJBQXlCLHdCQUF3QixNQUFNLE9BQU8sT0FBTyxNQUFNLFdBQVcsTUFBTSxPQUFPLE9BQU8sT0FBTyxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sU0FBUyxPQUFPLE1BQU0sdUJBQXVCLHlCQUF5Qix5QkFBeUIsTUFBTSxTQUFTLE9BQU8sVUFBVSx3QkFBd0IseUJBQXlCLHlCQUF5Qix3QkFBd0IseUJBQXlCLHlCQUF5Qix3QkFBd0Isd0JBQXdCLHdCQUF3QixNQUFNLE9BQU8sT0FBTyxPQUFPLFlBQVksTUFBTSxRQUFRLE9BQU8sU0FBUyx3QkFBd0IseUJBQXlCLHlCQUF5QixNQUFNLE9BQU8sT0FBTyxNQUFNLFdBQVcsTUFBTSxPQUFPLE9BQU8sTUFBTSxZQUFZLE1BQU0sT0FBTyxPQUFPLE1BQU0sWUFBWSxNQUFNLE9BQU8sT0FBTyxPQUFPLFdBQVcsTUFBTSxRQUFRLE9BQU8sTUFBTSx3QkFBd0IseUJBQXlCLE1BQU0sT0FBTyxPQUFPLE1BQU0sWUFBWSxNQUFNLFFBQVEsT0FBTyxNQUFNLHdCQUF3Qix3QkFBd0IsTUFBTSxPQUFPLE9BQU8sTUFBTSxZQUFZLE1BQU0sT0FBTyxPQUFPLGtCQUFrQixXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksTUFBTSxNQUFNLFdBQVcsTUFBTSxRQUFRLFlBQVksWUFBWSxZQUFZLE1BQU0sT0FBTyxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sT0FBTyxNQUFNLFlBQVksTUFBTSxRQUFRLE9BQU8sTUFBTSx1QkFBdUIsd0JBQXdCLE1BQU0sT0FBTyx1QkFBdUIsd0JBQXdCLE1BQU0sT0FBTyxPQUFPLE9BQU8sV0FBVyxNQUFNLE9BQU8sTUFBTSxNQUFNLFdBQVcsTUFBTSxTQUFTLE9BQU8sYUFBYSx1QkFBdUIseUJBQXlCLE1BQU0sT0FBTyxPQUFPLE9BQU8sV0FBVyxZQUFZLE1BQU0sYUFBYSxNQUFNLFdBQVcsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsWUFBWSxhQUFhLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLFlBQVksWUFBWSxZQUFZLFlBQVksWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxZQUFZLGFBQWEsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLHFEQUFxRCxtQ0FBbUMsa0NBQWtDLG1CQUFtQjtBQUN4cEk7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNwaUIxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBOEk7QUFDOUk7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw4SEFBTzs7OztBQUl3RjtBQUNoSCxPQUFPLGlFQUFlLDhIQUFPLElBQUksOEhBQU8sVUFBVSw4SEFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNib0U7QUFDekI7QUFDdEI7QUFDckI7QUFDQSxZQUFZLHFEQUFrQjtBQUM5QixpQkFBaUIsK0NBQVk7QUFDN0IsZUFBZSwyQ0FBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMENBQU07QUFDL0IsNEJBQTRCLDRDQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxjQUFjLHFCQUFxQixjQUFjO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsV0FBVztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsV0FBVztBQUMvRDtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUN3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEd4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNEU7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDNUU7QUFDQSxxQkFBcUIsNENBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBLHFCQUFxQixpREFBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGlEQUFTO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx3Q0FBd0MsaURBQVM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DLDRCQUE0QiwwQkFBMEI7QUFDdEQ7QUFDQSxvQ0FBb0MsaURBQVM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQSw0QkFBNEIsOENBQU07QUFDbEMsK0JBQStCLGdEQUFRO0FBQ3ZDO0FBQ0EsaURBQWlELGlEQUFTO0FBQzFELG9EQUFvRCxpREFBUztBQUM3RCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0EsNEJBQTRCLDhDQUFNO0FBQ2xDLHlCQUF5QixnREFBUTtBQUNqQztBQUNBO0FBQ0Esd0NBQXdDLDhDQUFNO0FBQzlDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOzs7Ozs7O1VDaklEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ3VCO0FBQ3ZCO0FBQ2dEO0FBQ1o7QUFDcEM7QUFDQTtBQUNBLG9EQUFvRCxzQ0FBc0M7QUFDMUYsNERBQTRELFdBQVc7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDRDQUFjO0FBQ3ZDLDBDQUEwQyw4Q0FBTTtBQUNoRCw2Q0FBNkMsZ0RBQVE7QUFDckQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHlCQUF5Qiw0Q0FBYztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EseUJBQXlCLDRDQUFjO0FBQ3ZDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx5QkFBeUIsNENBQWM7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz85MDExIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy50cyIsIndlYnBhY2s6Ly8vLi90ZXN0cy9tb2RlbC50ZXN0cy50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8vLi90ZXN0cy9pbmRleC50ZXN0cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLypcbiEgdGFpbHdpbmRjc3MgdjMuNC4xIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL3RhaWx3aW5kY3NzLmNvbVxuKi8vKlxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcbjIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2KVxuKi9cblxuKixcbjo6YmVmb3JlLFxuOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cbiAgYm9yZGVyLWNvbG9yOiAjZTVlN2ViOyAvKiAyICovXG59XG5cbjo6YmVmb3JlLFxuOjphZnRlciB7XG4gIC0tdHctY29udGVudDogJyc7XG59XG5cbi8qXG4xLiBVc2UgYSBjb25zaXN0ZW50IHNlbnNpYmxlIGxpbmUtaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cbjQuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgc2Fuc1xcYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxuNS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxuNi4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG43LiBEaXNhYmxlIHRhcCBoaWdobGlnaHRzIG9uIGlPU1xuKi9cblxuaHRtbCxcbjpob3N0IHtcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMSAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cbiAgLW1vei10YWItc2l6ZTogNDsgLyogMyAqL1xuICAtby10YWItc2l6ZTogNDtcbiAgICAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiOyAvKiA0ICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsOyAvKiA1ICovXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBub3JtYWw7IC8qIDYgKi9cbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDsgLyogNyAqL1xufVxuXG4vKlxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIFxcYGh0bWxcXGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIFxcYGh0bWxcXGAgZWxlbWVudC5cbiovXG5cbmJvZHkge1xuICBtYXJnaW46IDA7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cbiovXG5cbmhyIHtcbiAgaGVpZ2h0OiAwOyAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDsgLyogMyAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXG4qL1xuXG5hYmJyOndoZXJlKFt0aXRsZV0pIHtcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSBhbmQgd2VpZ2h0IGZvciBoZWFkaW5ncy5cbiovXG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi8qXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxuKi9cblxuYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxuKi9cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi8qXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cbjIuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LWZlYXR1cmUtc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjMuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LXZhcmlhdGlvbi1zZXR0aW5ncyBieSBkZWZhdWx0LlxuNC4gQ29ycmVjdCB0aGUgb2RkIFxcYGVtXFxgIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiovXG5cbmNvZGUsXG5rYmQsXG5zYW1wLFxucHJlIHtcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDsgLyogMiAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogbm9ybWFsOyAvKiAzICovXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiA0ICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiovXG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG5cbi8qXG5QcmV2ZW50IFxcYHN1YlxcYCBhbmQgXFxgc3VwXFxgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5zdWIsXG5zdXAge1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG4vKlxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcbjMuIFJlbW92ZSBnYXBzIGJldHdlZW4gdGFibGUgYm9yZGVycyBieSBkZWZhdWx0LlxuKi9cblxudGFibGUge1xuICB0ZXh0LWluZGVudDogMDsgLyogMSAqL1xuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLyogMyAqL1xufVxuXG4vKlxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXG4zLiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nIGluIGFsbCBicm93c2Vycy5cbiovXG5cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cbiAgbWFyZ2luOiAwOyAvKiAyICovXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cbn1cblxuLypcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cbiovXG5cbmJ1dHRvbixcbnNlbGVjdCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXG4qL1xuXG5idXR0b24sXG5bdHlwZT0nYnV0dG9uJ10sXG5bdHlwZT0ncmVzZXQnXSxcblt0eXBlPSdzdWJtaXQnXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cbn1cblxuLypcblVzZSB0aGUgbW9kZXJuIEZpcmVmb3ggZm9jdXMgc3R5bGUgZm9yIGFsbCBmb2N1c2FibGUgZWxlbWVudHMuXG4qL1xuXG46LW1vei1mb2N1c3Jpbmcge1xuICBvdXRsaW5lOiBhdXRvO1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIFxcYDppbnZhbGlkXFxgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXG4qL1xuXG46LW1vei11aS1pbnZhbGlkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxuKi9cblxucHJvZ3Jlc3Mge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXG4qL1xuXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxuKi9cblxuW3R5cGU9J3NlYXJjaCddIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cbn1cblxuLypcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cbiovXG5cbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIFxcYGluaGVyaXRcXGAgaW4gU2FmYXJpLlxuKi9cblxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxuKi9cblxuc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbn1cblxuLypcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cbiovXG5cbmJsb2NrcXVvdGUsXG5kbCxcbmRkLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxuaHIsXG5maWd1cmUsXG5wLFxucHJlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5maWVsZHNldCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxubGVnZW5kIHtcbiAgcGFkZGluZzogMDtcbn1cblxub2wsXG51bCxcbm1lbnUge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qXG5SZXNldCBkZWZhdWx0IHN0eWxpbmcgZm9yIGRpYWxvZ3MuXG4qL1xuZGlhbG9nIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLypcblByZXZlbnQgcmVzaXppbmcgdGV4dGFyZWFzIGhvcml6b250YWxseSBieSBkZWZhdWx0LlxuKi9cblxudGV4dGFyZWEge1xuICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG4vKlxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcbjIuIFNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBjb2xvciB0byB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgZ3JheSA0MDAgY29sb3IuXG4qL1xuXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxOyAvKiAxICovXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXG59XG5cbmlucHV0OjpwbGFjZWhvbGRlcixcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cbn1cblxuLypcblNldCB0aGUgZGVmYXVsdCBjdXJzb3IgZm9yIGJ1dHRvbnMuXG4qL1xuXG5idXR0b24sXG5bcm9sZT1cImJ1dHRvblwiXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLypcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXG4qL1xuOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4vKlxuMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBcXGBkaXNwbGF5OiBibG9ja1xcYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcbjIuIEFkZCBcXGB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXFxgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcbiAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50IGVycm9yIGluIHNvbWUgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cbiovXG5cbmltZyxcbnN2ZyxcbnZpZGVvLFxuY2FudmFzLFxuYXVkaW8sXG5pZnJhbWUsXG5lbWJlZCxcbm9iamVjdCB7XG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cbn1cblxuLypcbkNvbnN0cmFpbiBpbWFnZXMgYW5kIHZpZGVvcyB0byB0aGUgcGFyZW50IHdpZHRoIGFuZCBwcmVzZXJ2ZSB0aGVpciBpbnRyaW5zaWMgYXNwZWN0IHJhdGlvLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcbiovXG5cbmltZyxcbnZpZGVvIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qIE1ha2UgZWxlbWVudHMgd2l0aCB0aGUgSFRNTCBoaWRkZW4gYXR0cmlidXRlIHN0YXkgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cbltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcbiAgLS10dy10cmFuc2xhdGUteDogMDtcbiAgLS10dy10cmFuc2xhdGUteTogMDtcbiAgLS10dy1yb3RhdGU6IDA7XG4gIC0tdHctc2tldy14OiAwO1xuICAtLXR3LXNrZXcteTogMDtcbiAgLS10dy1zY2FsZS14OiAxO1xuICAtLXR3LXNjYWxlLXk6IDE7XG4gIC0tdHctcGFuLXg6ICA7XG4gIC0tdHctcGFuLXk6ICA7XG4gIC0tdHctcGluY2gtem9vbTogIDtcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XG4gIC0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb246ICA7XG4gIC0tdHctb3JkaW5hbDogIDtcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XG4gIC0tdHctcmluZy1pbnNldDogIDtcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xuICAtLXR3LXJpbmctY29sb3I6IHJnYig1OSAxMzAgMjQ2IC8gMC41KTtcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCAjMDAwMDtcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xuICAtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgIzAwMDA7XG4gIC0tdHctYmx1cjogIDtcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWNvbnRyYXN0OiAgO1xuICAtLXR3LWdyYXlzY2FsZTogIDtcbiAgLS10dy1odWUtcm90YXRlOiAgO1xuICAtLXR3LWludmVydDogIDtcbiAgLS10dy1zYXR1cmF0ZTogIDtcbiAgLS10dy1zZXBpYTogIDtcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XG59XG5cbjo6YmFja2Ryb3Age1xuICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcbiAgLS10dy10cmFuc2xhdGUteDogMDtcbiAgLS10dy10cmFuc2xhdGUteTogMDtcbiAgLS10dy1yb3RhdGU6IDA7XG4gIC0tdHctc2tldy14OiAwO1xuICAtLXR3LXNrZXcteTogMDtcbiAgLS10dy1zY2FsZS14OiAxO1xuICAtLXR3LXNjYWxlLXk6IDE7XG4gIC0tdHctcGFuLXg6ICA7XG4gIC0tdHctcGFuLXk6ICA7XG4gIC0tdHctcGluY2gtem9vbTogIDtcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XG4gIC0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XG4gIC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb246ICA7XG4gIC0tdHctb3JkaW5hbDogIDtcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XG4gIC0tdHctcmluZy1pbnNldDogIDtcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xuICAtLXR3LXJpbmctY29sb3I6IHJnYig1OSAxMzAgMjQ2IC8gMC41KTtcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCAjMDAwMDtcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xuICAtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgIzAwMDA7XG4gIC0tdHctYmx1cjogIDtcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWNvbnRyYXN0OiAgO1xuICAtLXR3LWdyYXlzY2FsZTogIDtcbiAgLS10dy1odWUtcm90YXRlOiAgO1xuICAtLXR3LWludmVydDogIDtcbiAgLS10dy1zYXR1cmF0ZTogIDtcbiAgLS10dy1zZXBpYTogIDtcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XG59XG4udmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4uY29sbGFwc2Uge1xuICB2aXNpYmlsaXR5OiBjb2xsYXBzZTtcbn1cbi5yZWxhdGl2ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLlxcXFwhdGFibGUge1xuICBkaXNwbGF5OiB0YWJsZSAhaW1wb3J0YW50O1xufVxuLnRhYmxlIHtcbiAgZGlzcGxheTogdGFibGU7XG59XG4uZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG4uY29udGVudHMge1xuICBkaXNwbGF5OiBjb250ZW50cztcbn1cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmJvcmRlci1jb2xsYXBzZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG59XG4udHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4ucmVzaXplIHtcbiAgcmVzaXplOiBib3RoO1xufVxuLmJvcmRlciB7XG4gIGJvcmRlci13aWR0aDogMXB4O1xufVxuLnVuZGVybGluZSB7XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG59XG4ub3V0bGluZSB7XG4gIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xufVxuLmZpbHRlciB7XG4gIGZpbHRlcjogdmFyKC0tdHctYmx1cikgdmFyKC0tdHctYnJpZ2h0bmVzcykgdmFyKC0tdHctY29udHJhc3QpIHZhcigtLXR3LWdyYXlzY2FsZSkgdmFyKC0tdHctaHVlLXJvdGF0ZSkgdmFyKC0tdHctaW52ZXJ0KSB2YXIoLS10dy1zYXR1cmF0ZSkgdmFyKC0tdHctc2VwaWEpIHZhcigtLXR3LWRyb3Atc2hhZG93KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0NBQTBCLENBQTFCOzs7Q0FBMEI7O0FBQTFCOzs7RUFBQSxzQkFBMEIsRUFBMUIsTUFBMEI7RUFBMUIsZUFBMEIsRUFBMUIsTUFBMEI7RUFBMUIsbUJBQTBCLEVBQTFCLE1BQTBCO0VBQTFCLHFCQUEwQixFQUExQixNQUEwQjtBQUFBOztBQUExQjs7RUFBQSxnQkFBMEI7QUFBQTs7QUFBMUI7Ozs7Ozs7O0NBQTBCOztBQUExQjs7RUFBQSxnQkFBMEIsRUFBMUIsTUFBMEI7RUFBMUIsOEJBQTBCLEVBQTFCLE1BQTBCO0VBQTFCLGdCQUEwQixFQUExQixNQUEwQjtFQUExQixjQUEwQjtLQUExQixXQUEwQixFQUExQixNQUEwQjtFQUExQiwrSEFBMEIsRUFBMUIs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QTtBQUErQjtBQUEvQjtFQUFBO0FBQStCO0FBQS9CO0VBQUE7QUFBK0I7QUFBL0I7RUFBQTtBQUErQjtBQUEvQjtFQUFBO0FBQStCO0FBQS9CO0VBQUE7QUFBK0I7QUFBL0I7RUFBQTtBQUErQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICd0YWlsd2luZGNzcy9iYXNlJztcXG5AaW1wb3J0ICd0YWlsd2luZGNzcy9jb21wb25lbnRzJztcXG5AaW1wb3J0ICd0YWlsd2luZGNzcy91dGlsaXRpZXMnO1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGdldFVzZXJDb29yZGluYXRlcywgdXBkYXRlQm9hcmRzLCBhbm5vdW5jZSB9IGZyb20gXCIuL3ZpZXdcIjtcbmltcG9ydCB7IENvbXB1dGVyLCBQbGF5ZXIgfSBmcm9tIFwiLi9tb2RlbFwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmNvbnN0IGRlZmF1bHRGdW5jdGlvblBhcmFtZXRlcnMgPSB7XG4gICAgZ2V0dGVyOiBnZXRVc2VyQ29vcmRpbmF0ZXMsXG4gICAgdmlld1VwZGF0ZXI6IHVwZGF0ZUJvYXJkcyxcbiAgICBhbm5vdW5jZXI6IGFubm91bmNlXG59O1xuY2xhc3MgR2FtZUNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKHApIHtcbiAgICAgICAgdGhpcy5odW1hbiA9IG5ldyBQbGF5ZXIocC51c2VyTmFtZSk7XG4gICAgICAgIHRoaXMuY29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXIoKTtcbiAgICAgICAgdGhpcy5odW1hbi5zZXRFbmVteSh0aGlzLmNvbXB1dGVyKTtcbiAgICAgICAgdGhpcy5odW1hblR1cm4gPSBwLmh1bWFuU3RhcnRzO1xuICAgICAgICB0aGlzLnJvdW5kcyA9IDA7XG4gICAgfVxuICAgIGFzeW5jIG1haW5Mb29wKGYgPSBkZWZhdWx0RnVuY3Rpb25QYXJhbWV0ZXJzKSB7XG4gICAgICAgIHdoaWxlICghKHRoaXMuaHVtYW4uYm9hcmQuYWxsU3VuaygpIHx8IHRoaXMuY29tcHV0ZXIuYm9hcmQuYWxsU3VuaygpKSkge1xuICAgICAgICAgICAgZi52aWV3VXBkYXRlcih0aGlzLmh1bWFuLmJvYXJkLCB0aGlzLmNvbXB1dGVyLmJvYXJkKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmh1bWFuVHVybikge1xuICAgICAgICAgICAgICAgIHRoaXMuaHVtYW4ubWFrZU1vdmUoYXdhaXQgZi5nZXR0ZXIoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3VuZHMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZXIuYXV0b21hdGljUGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VUdXJuKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZW5kR2FtZShmLmFubm91bmNlcik7XG4gICAgfVxuICAgIGVuZEdhbWUoYW5ub3VuY2VyKSB7XG4gICAgICAgIGNvbnN0IHdpbm5lciA9IHRoaXMuaHVtYW5UdXJuID8gdGhpcy5jb21wdXRlciA6IHRoaXMuaHVtYW47XG4gICAgICAgIGFubm91bmNlcih3aW5uZXIubmFtZSArIFwiaGFzIHdvbiFcIik7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdW5kcztcbiAgICB9XG4gICAgY2hhbmdlVHVybigpIHtcbiAgICAgICAgdGhpcy5odW1hblR1cm4gPSAhdGhpcy5odW1hblR1cm47XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgR2FtZUNvbnRyb2xsZXI7XG4iLCJjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgICAgIHRoaXMuc3Vua2VuID0gZmFsc2U7XG4gICAgfVxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy5oaXRzKys7XG4gICAgICAgIHRoaXMuaXNTdW5rKCk7XG4gICAgfVxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgdGhpcy5zdW5rZW4gPSB0aGlzLmhpdHMgPj0gdGhpcy5sZW5ndGg7XG4gICAgICAgIHJldHVybiB0aGlzLnN1bmtlbjtcbiAgICB9XG59XG5jbGFzcyBTaGlwRGF0dW0ge1xuICAgIGNvbnN0cnVjdG9yKHNoaXApIHtcbiAgICAgICAgdGhpcy5zaGlwID0gc2hpcDtcbiAgICAgICAgdGhpcy53YXNIaXQgPSBmYWxzZTtcbiAgICB9XG59XG5jbGFzcyBHYW1lQm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKHNpemUgPSAxMCkge1xuICAgICAgICB0aGlzLmJvYXJkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogc2l6ZSB9LCAoKSA9PiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBzaXplIH0sICgpID0+IGZhbHNlKSk7XG4gICAgfVxuICAgIGJ1aWxkTmF2eShsZW5ndGhzID0gWzIsIDMsIDMsIDQsIDVdKSB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3Rpb24gPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBsZW5ndGggb2YgbGVuZ3Rocykge1xuICAgICAgICAgICAgY29uc3QgbW9kZWwgPSBuZXcgU2hpcChsZW5ndGgpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBbcm93LCBjb2xdIG9mIHRoaXMuZ2VuZXJhdGVQb3NpdGlvbnMobGVuZ3RoLCBtb2RlbCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXSA9IG5ldyBTaGlwRGF0dW0obW9kZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvZHVjdGlvbi5wdXNoKG1vZGVsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5hdnkgPSBuZXcgU2V0KHByb2R1Y3Rpb24pO1xuICAgIH1cbiAgICBnZW5lcmF0ZVBvc2l0aW9ucyhsZW5ndGgsIHNoaXApIHtcbiAgICAgICAgbGV0IHBvc2l0aW9ucyA9IFtdO1xuICAgICAgICBsZXQgW3JvdywgY29sXSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDIgfSwgKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKTtcbiAgICAgICAgY29uc3QgaG9yaXpvbnRhbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID09IDA7XG4gICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLmJvYXJkLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKHBvc2l0aW9ucy5sZW5ndGggPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IG91dE9mQm91bmRzID0gY29sID49IHNpemUgfHwgcm93ID49IHNpemU7XG4gICAgICAgICAgICBjb25zdCBuZWlnaGJvcnMgPSBbWy0xLCAwXSwgWzAsIC0xXSwgWzAsIDBdLCBbMCwgMV0sIFsxLCAwXV0ubWFwKChbb2Zmc2V0WCwgb2Zmc2V0WV0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbciwgY10gPSBbcm93ICsgb2Zmc2V0WCwgY29sICsgb2Zmc2V0WV07XG4gICAgICAgICAgICAgICAgaWYgKHIgPj0gMCAmJiByIDwgc2l6ZSAmJiBjID49IDAgJiYgYyA8IHNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbcl1bY107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBzaGlwTmVhcmJ5ID0gbmVpZ2hib3JzLnNvbWUobmVpZ2hib3IgPT4gbmVpZ2hib3IgaW5zdGFuY2VvZiBTaGlwRGF0dW0gJiYgbmVpZ2hib3Iuc2hpcCAhPT0gc2hpcCk7XG4gICAgICAgICAgICBpZiAoc2hpcE5lYXJieSB8fCBvdXRPZkJvdW5kcylcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVBvc2l0aW9ucyhsZW5ndGgsIHNoaXApO1xuICAgICAgICAgICAgcG9zaXRpb25zLnB1c2goW3JvdywgY29sXSk7XG4gICAgICAgICAgICBob3Jpem9udGFsID8gY29sKysgOiByb3crKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9zaXRpb25zO1xuICAgIH1cbiAgICByZWNlaXZlQXR0YWNrKHJvdywgY29sKSB7XG4gICAgICAgIGlmIChyb3cgPj0gMCAmJiByb3cgPCB0aGlzLmJvYXJkLmxlbmd0aCAmJiBjb2wgPj0gMCAmJiBjb2wgPCB0aGlzLmJvYXJkLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuYm9hcmRbcm93XVtjb2xdO1xuICAgICAgICAgICAgaWYgKGNlbGwgaW5zdGFuY2VvZiBTaGlwRGF0dW0pIHtcbiAgICAgICAgICAgICAgICBjZWxsLndhc0hpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2VsbC5zaGlwLmhpdCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFsbFN1bmsoKSB7XG4gICAgICAgIGlmICghdGhpcy5uYXZ5KVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlcmUgaXMgbm8gbmF2eS4gQ2FsbCB0aGlzLmJ1aWxkTmF2eSgpXCIpO1xuICAgICAgICByZXR1cm4gWy4uLnRoaXMubmF2eV0uZXZlcnkoc2hpcCA9PiBzaGlwLnN1bmtlbik7XG4gICAgfVxufVxuY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XG4gICAgICAgIHRoaXMuYm9hcmQuYnVpbGROYXZ5KCk7XG4gICAgfVxuICAgIHNldEVuZW15KHBsYXllcikge1xuICAgICAgICB0aGlzLmVuZW15ID0gcGxheWVyO1xuICAgICAgICB0aGlzLmVuZW15LmVuZW15ID0gdGhpczsgLy8gcmVjaXByb2NhbCByZWxhdGlvbnNoaXBcbiAgICB9XG4gICAgbWFrZU1vdmUoY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgY29uc3QgW2d1ZXNzUm93LCBndWVzc0NvbF0gPSBjb29yZGluYXRlcztcbiAgICAgICAgaWYgKCF0aGlzLmVuZW15KVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2Fubm90IG1ha2VNb3ZlIHdpdGhvdXQgZW5lbXlcIik7XG4gICAgICAgIHJldHVybiAhIXRoaXMuZW5lbXkuYm9hcmQucmVjZWl2ZUF0dGFjayhndWVzc1JvdywgZ3Vlc3NDb2wpO1xuICAgIH1cbn1cbmNsYXNzIENvbXB1dGVyIGV4dGVuZHMgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoXCJDb21wdXRlclwiKTtcbiAgICAgICAgdGhpcy5oaXN0b3J5ID0gW107XG4gICAgfVxuICAgIGF1dG9tYXRpY1BsYXkoKSB7XG4gICAgICAgIGNvbnN0IFtyYW5kb21Sb3csIHJhbmRvbUNvbF0gPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAyIH0sICgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSk7XG4gICAgICAgIGlmICh0aGlzLmhpc3RvcnkuaW5jbHVkZXMoW3JhbmRvbVJvdywgcmFuZG9tQ29sXSkpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdXRvbWF0aWNQbGF5KCk7IC8vIHRyeSBhZ2FpblxuICAgICAgICB0aGlzLmhpc3RvcnkucHVzaChbcmFuZG9tUm93LCByYW5kb21Db2xdKTtcbiAgICAgICAgdGhpcy5tYWtlTW92ZShbcmFuZG9tUm93LCByYW5kb21Db2xdKTtcbiAgICB9XG59XG5leHBvcnQgeyBTaGlwLCBTaGlwRGF0dW0sIEdhbWVCb2FyZCwgUGxheWVyLCBDb21wdXRlciB9O1xuIiwiYXN5bmMgZnVuY3Rpb24gZ2V0SW5pdGlhbFBhcmFtZXRlcnMoKSB7XG4gICAgcmV0dXJuIHt9O1xufVxuYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckNvb3JkaW5hdGVzKCkge1xuICAgIHJldHVybiBbXTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZUJvYXJkcyhodW1hbkJvYXJkLCBjb21wdXRlckJvYXJkKSB7XG4gICAgLy8gY29uc29sZS5jbGVhcigpXG4gICAgLy8gY29uc3QgcGFyc2UgPSAoY2VsbHM6IChib29sZWFuIHwgU2hpcERhdHVtKVtdKSA9PiB7XG4gICAgLy8gICByZXR1cm4gY2VsbHMubWFwKGNlbGwgPT4gY2VsbCA9PSBmYWxzZSA/IDAgOiBjZWxsID09IHRydWUgPyAxIDogIWNlbGwud2FzSGl0ID8gMiA6IDMpXG4gICAgLy8gfVxuICAgIC8vIGNvbnN0IGh1bWFuVGFibGUgPSBuZXcgVGFibGUoKVxuICAgIC8vIGZvciAoY29uc3Qgcm93IG9mIGh1bWFuQm9hcmQuYm9hcmQpIHtcbiAgICAvLyAgIGh1bWFuVGFibGUuYWRkUm93KHBhcnNlKHJvdykpXG4gICAgLy8gfVxuICAgIC8vIGNvbnNvbGUubG9nKFwiSHVtYW4gYm9hcmQ6IFwiKVxuICAgIC8vIGh1bWFuVGFibGUucHJpbnRUYWJsZSgpXG4gICAgLy8gY29uc3QgY29tcHV0ZXJUYWJsZSA9IG5ldyBUYWJsZSgpXG4gICAgLy8gZm9yIChjb25zdCByb3cgb2YgY29tcHV0ZXJCb2FyZC5ib2FyZCkge1xuICAgIC8vICAgY29tcHV0ZXJUYWJsZS5hZGRSb3cocGFyc2Uocm93KSlcbiAgICAvLyB9XG4gICAgLy8gY29uc29sZS5sb2coXCJDb21wdXRlciBib2FyZDogXCIpXG4gICAgLy8gY29tcHV0ZXJUYWJsZS5wcmludFRhYmxlKClcbn1cbmZ1bmN0aW9uIGFubm91bmNlKG1lc3NhZ2UpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhtZXNzYWdlKVxufVxuZXhwb3J0IHsgZ2V0SW5pdGlhbFBhcmFtZXRlcnMsIGdldFVzZXJDb29yZGluYXRlcywgdXBkYXRlQm9hcmRzLCBhbm5vdW5jZSB9O1xuIiwiaW1wb3J0IHsgU2hpcCwgR2FtZUJvYXJkLCBTaGlwRGF0dW0sIFBsYXllciwgQ29tcHV0ZXIgfSBmcm9tIFwiLi4vc3JjL21vZGVsXCI7XG5kZXNjcmliZShcIlNoaXAgY2xhc3NcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcCg1KTtcbiAgICBpdChcImluaXRpYWxpemVzIGxlbmd0aCwgaGl0cywgYW5kIHN1bmtlbiBwcm9wZXJ0aWVzXCIsICgpID0+IHtcbiAgICAgICAgZXhwZWN0KHNoaXAubGVuZ3RoKS50b0JlKDUpO1xuICAgICAgICBleHBlY3Qoc2hpcC5oaXRzKS50b0JlKDApO1xuICAgICAgICBleHBlY3Qoc2hpcC5zdW5rZW4pLnRvQmUoZmFsc2UpO1xuICAgIH0pO1xuICAgIGl0KFwiLmhpdCgpIG1ldGhvZCBpbmNyZW1lbnRzIGhpdHNcIiwgKCkgPT4ge1xuICAgICAgICBzaGlwLmhpdCgpO1xuICAgICAgICBleHBlY3Qoc2hpcC5oaXRzKS50b0JlKDEpO1xuICAgIH0pO1xuICAgIGl0KFwiLmhpdCgpIGludm9rZXMgLmlzU3VuaygpXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgbW9jayA9IGplc3Quc3B5T24oc2hpcCwgXCJpc1N1bmtcIik7XG4gICAgICAgIHNoaXAuaGl0KCk7XG4gICAgICAgIGV4cGVjdChtb2NrKS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgfSk7XG4gICAgaXQoXCIuaXNTdW5rKCkgcmV0dXJucyBmYWxzZSBpZiBoaXRzIGFyZSBsZXNzIHRoYW4gbGVuZ3RoXCIsICgpID0+IHtcbiAgICAgICAgZXhwZWN0KHNoaXAuaXNTdW5rKCkpLnRvQmUoZmFsc2UpO1xuICAgIH0pO1xuICAgIGl0KFwiLmlzU3VuaygpIHJldHVybnMgdHJ1ZSBpZiBoaXRzIGFyZSBlcXVhbCB0byBpdHMgbGVuZ3RoXCIsICgpID0+IHtcbiAgICAgICAgd2hpbGUgKHNoaXAubGVuZ3RoIC0gc2hpcC5oaXRzID49IDApXG4gICAgICAgICAgICBzaGlwLmhpdCgpO1xuICAgICAgICBleHBlY3Qoc2hpcC5pc1N1bmsoKSkudG9CZSh0cnVlKTtcbiAgICB9KTtcbiAgICBpdChcIi5pc1N1bmsoKSB1cGRhdGVzIC5zdW5rZW4gcHJvcGVydHlcIiwgKCkgPT4ge1xuICAgICAgICBleHBlY3Qoc2hpcC5zdW5rZW4pLnRvQmUodHJ1ZSk7XG4gICAgfSk7XG59KTtcbmRlc2NyaWJlKFwiR2FtZUJvYXJkIGNsYXNzXCIsICgpID0+IHtcbiAgICBjb25zdCBzaXplID0gMTA7XG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lQm9hcmQoc2l6ZSk7XG4gICAgaXQoXCJpbml0aWFsaXplcyB0aGUgYm9hcmQgcHJvcGVydHkgYXMgYSBzcXVhcmUgbWF0cml4IG9mIGZhbHN5IHZhbHVlc1wiLCAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChnYW1lLmJvYXJkLmxlbmd0aCkudG9FcXVhbChzaXplKTtcbiAgICAgICAgZ2FtZS5ib2FyZC5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICBleHBlY3Qocm93Lmxlbmd0aCkudG9FcXVhbChzaXplKTtcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKGNlbGwgPT4gZXhwZWN0KGNlbGwpLnRvQmVGYWxzeSgpKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgaXQoXCJidWlsZE5hdnkgbWV0aG9kIGFzc2lnbnMgYSBzZXQgb2YgU2hpcCBvYmplY3RzIHRvIG5hdnkgcGFyYW1ldGVyXCIsICgpID0+IHtcbiAgICAgICAgZ2FtZS5idWlsZE5hdnkoKTtcbiAgICAgICAgZXhwZWN0KGdhbWUubmF2eSkudG9CZVRydXRoeSgpO1xuICAgIH0pO1xuICAgIGl0KFwiYnVpbGROYXZ5IG1ldGhvZCBwb3B1bGF0ZXMgLmJvYXJkIHdpdGggc2hpcCBkYXR1bXMgb2YgZXhwZWN0ZWQgbGVuZ3RoXCIsICgpID0+IHtcbiAgICAgICAgaWYgKCFnYW1lLm5hdnkpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJubyBuYXZ5IHRvIHRlc3QhXCIpO1xuICAgICAgICBjb25zdCBwb3NpdGlvbkxlbmd0aHMgPSBuZXcgTWFwKCk7XG4gICAgICAgIGZvciAoY29uc3Qgcm93IG9mIGdhbWUuYm9hcmQpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2VsbCBvZiByb3cpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbCBpbnN0YW5jZW9mIFNoaXBEYXR1bSkge1xuICAgICAgICAgICAgICAgICAgICBleHBlY3QoY2VsbC53YXNIaXQpLnRvQmVGYWxzeSgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHBvc2l0aW9uTGVuZ3Rocy5nZXQoY2VsbC5zaGlwKSB8fCAwO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkxlbmd0aHMuc2V0KGNlbGwuc2hpcCwgdmFsdWUgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3Qgc2hpcCBvZiBnYW1lLm5hdnkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uTGVuZ3RoID0gcG9zaXRpb25MZW5ndGhzLmdldChzaGlwKSB8fCAwO1xuICAgICAgICAgICAgZXhwZWN0KHNoaXAubGVuZ3RoKS50b0JlKHBvc2l0aW9uTGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGl0KFwicmVjZWl2ZUF0dGFjaygpIG11dGF0ZXMgYm9hcmQgdG8gdHJ1dGh5IHZhbHVlIChhbmQgY2FsbHMgLmhpdCBvbiBTaGlwRGF0dW0pXCIsICgpID0+IHtcbiAgICAgICAgaWYgKGdhbWUuYm9hcmRbMF1bMF0gaW5zdGFuY2VvZiBTaGlwRGF0dW0pIHtcbiAgICAgICAgICAgIGNvbnN0IG1vY2sgPSBqZXN0LnNweU9uKGdhbWUuYm9hcmRbMF1bMF0uc2hpcCwgXCJoaXRcIik7XG4gICAgICAgICAgICBnYW1lLnJlY2VpdmVBdHRhY2soMCwgMCk7XG4gICAgICAgICAgICBleHBlY3QobW9jaykudG9IYXZlQmVlbkNhbGxlZCgpO1xuICAgICAgICAgICAgZXhwZWN0KGdhbWUuYm9hcmRbMF1bMF0ud2FzSGl0KS50b0JlVHJ1dGh5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBnYW1lLnJlY2VpdmVBdHRhY2soMCwgMCk7XG4gICAgICAgICAgICBleHBlY3QoZ2FtZS5ib2FyZFswXVswXSkudG9CZVRydXRoeSgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaXQoXCJhbGxTdW5rKCkgcmV0dXJucyB0cnVlIGlmIGFsbCB0aGUgc2hpcHMgb24gdGhlIGJvYXJkIGFyZSBzdW5rXCIsICgpID0+IHtcbiAgICAgICAgaWYgKCFnYW1lLm5hdnkpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJubyBuYXZ5IHRvIHRlc3QhXCIpO1xuICAgICAgICAvLyBjb2xsZWN0IGNvb3JkaW5hdGVzIG9mIGVhY2ggc2hpcFxuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdhbWUuYm9hcmRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZ2FtZS5ib2FyZFtpXVtqXTtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbCBpbnN0YW5jZW9mIFNoaXBEYXR1bSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvbGRDb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzLmdldChjZWxsLnNoaXApIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcy5zZXQoY2VsbC5zaGlwLCBvbGRDb29yZGluYXRlcy5jb25jYXQoW1tpLCBqXV0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2luayBhbGwgc2hpcHNcbiAgICAgICAgZm9yIChjb25zdCBzaGlwIG9mIGdhbWUubmF2eSkge1xuICAgICAgICAgICAgY29uc3QgcGxhY2VtZW50ID0gY29vcmRpbmF0ZXMuZ2V0KHNoaXApIHx8IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBbcm93LCBjb2xdIG9mIHBsYWNlbWVudCkge1xuICAgICAgICAgICAgICAgIGdhbWUucmVjZWl2ZUF0dGFjayhyb3csIGNvbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgaWYgYWxsU3VuaygpIHdvcmtzXG4gICAgICAgIGV4cGVjdChnYW1lLmFsbFN1bmsoKSkudG9CZSh0cnVlKTtcbiAgICB9KTtcbn0pO1xuZGVzY3JpYmUoXCJQbGF5ZXIgY2xhc3NcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGh1bWFuUGxheWVyID0gbmV3IFBsYXllcihcIkJvYlwiKTtcbiAgICBjb25zdCBjb21wdXRlclBsYXllciA9IG5ldyBDb21wdXRlcigpO1xuICAgIGl0KFwiaW5pdGlhbGl6ZXMgYSBib2FyZCBwcm9wZXJ0eVwiLCAoKSA9PiB7XG4gICAgICAgIGV4cGVjdChodW1hblBsYXllci5ib2FyZCkudG9CZUluc3RhbmNlT2YoR2FtZUJvYXJkKTtcbiAgICAgICAgZXhwZWN0KGNvbXB1dGVyUGxheWVyLmJvYXJkKS50b0JlSW5zdGFuY2VPZihHYW1lQm9hcmQpO1xuICAgIH0pO1xuICAgIGl0KFwicGxheWVyMS5zZXRFbmVteShwbGF5ZXIyKSBtZXRob2QgY3JlYXRlcyBhIHJlY2lwcm9jYWwgJ2VuZW15JyByZWxhdGlvbnNoaXBcIiwgKCkgPT4ge1xuICAgICAgICBodW1hblBsYXllci5zZXRFbmVteShjb21wdXRlclBsYXllcik7XG4gICAgICAgIGV4cGVjdChodW1hblBsYXllci5lbmVteSkudG9CZShjb21wdXRlclBsYXllcik7XG4gICAgICAgIGV4cGVjdChjb21wdXRlclBsYXllci5lbmVteSkudG9CZShodW1hblBsYXllcik7XG4gICAgfSk7XG4gICAgaXQoXCJtYWtlTW92ZSBjYWxscyByZWNlaXZlQXR0YWNrIG9uIGVuZW15IGJvYXJkXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgZW5lbXlCb2FyZCA9IGplc3Quc3B5T24oY29tcHV0ZXJQbGF5ZXIuYm9hcmQsIFwicmVjZWl2ZUF0dGFja1wiKTtcbiAgICAgICAgaHVtYW5QbGF5ZXIubWFrZU1vdmUoWzAsIDBdKTtcbiAgICAgICAgZXhwZWN0KGVuZW15Qm9hcmQpLnRvSGF2ZUJlZW5DYWxsZWQoKTtcbiAgICB9KTtcbn0pO1xuZGVzY3JpYmUoXCJDb21wdXRlciBjbGFzc1wiLCAoKSA9PiB7XG4gICAgY29uc3QgZHVtbXlQbGF5ZXIgPSBuZXcgUGxheWVyKFwiQm9iXCIpO1xuICAgIGNvbnN0IGNvbXB1dGVyID0gbmV3IENvbXB1dGVyKCk7XG4gICAgY29tcHV0ZXIuc2V0RW5lbXkoZHVtbXlQbGF5ZXIpO1xuICAgIGl0KFwiaW5oZXJpdHMgZnJvbSBQbGF5ZXIgY2xhc3NcIiwgKCkgPT4ge1xuICAgICAgICBleHBlY3QoY29tcHV0ZXIpLnRvQmVJbnN0YW5jZU9mKFBsYXllcik7XG4gICAgfSk7XG4gICAgaXQoXCJhdXRvbWF0aWNQbGF5IGNhbGxzIG1ha2VNb3ZlIHdpdGggcmFuZG9tIGNvb3JkaW5hdGVzXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgbWFrZU1vdmVNb2NrID0gamVzdC5zcHlPbihjb21wdXRlciwgXCJtYWtlTW92ZVwiKTtcbiAgICAgICAgY29tcHV0ZXIuYXV0b21hdGljUGxheSgpO1xuICAgICAgICBleHBlY3QobWFrZU1vdmVNb2NrKS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gICAgfSk7XG59KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIGltcG9ydCBvdGhlciB0ZXN0IHN1aXRlc1xuaW1wb3J0IFwiLi9tb2RlbC50ZXN0c1wiO1xuLy8gaW1wb3J0IG1vZHVsZXMgdG8gdGVzdFxuaW1wb3J0IHsgUGxheWVyLCBDb21wdXRlciB9IGZyb20gXCIuLi9zcmMvbW9kZWxcIjtcbmltcG9ydCBHYW1lQ29udHJvbGxlciBmcm9tIFwiLi4vc3JjXCI7XG4vLyBmYWlsLXNhZmUsIGVhc3kgbWFudWFsIGltcGxlbWVudGF0aW9ucyBvZiBtb2Nrc1xuLy8gamVzdC5tb2NrKFwiLi4vc3JjL3ZpZXdcIikgd2FzIGJlaW5nIGlnbm9yZWQgaW4gYnVuZGxlZCBkaXN0L3Rlc3QuanNcbmNvbnN0IGdldEluaXRpYWxQYXJhbWV0ZXJzID0gamVzdC5mbihhc3luYyAoKSA9PiAoeyB1c2VyTmFtZTogXCJIdW1hblwiLCBodW1hblN0YXJ0czogdHJ1ZSB9KSk7XG5jb25zdCBnZXRVc2VyQ29vcmRpbmF0ZXMgPSBqZXN0LmZuKGFzeW5jICgpID0+IEFycmF5LmZyb20oeyBsZW5ndGg6IDIgfSwgKCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKSk7XG5jb25zdCB1cGRhdGVCb2FyZHMgPSBqZXN0LmZuKCk7XG5jb25zdCBhbm5vdW5jZSA9IGplc3QuZm4oKTtcbmNvbnN0IG1vY2tlZEZ1bmN0aW9uUGFyYW1ldGVycyA9IHtcbiAgICBnZXR0ZXI6IGdldFVzZXJDb29yZGluYXRlcyxcbiAgICB2aWV3VXBkYXRlcjogdXBkYXRlQm9hcmRzLFxuICAgIGFubm91bmNlcjogYW5ub3VuY2Vcbn07XG5kZXNjcmliZShcIkdhbWVDb250cm9sbGVyIGNsYXNzXCIsICgpID0+IHtcbiAgICBpdChcInNldHMgaHVtYW4gYW5kIGNvbXB1dGVyIHBsYXllciBvYmplY3RzIGFzIGVuZW1pZXNcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBnYW1lID0gbmV3IEdhbWVDb250cm9sbGVyKGF3YWl0IGdldEluaXRpYWxQYXJhbWV0ZXJzKCkpO1xuICAgICAgICBleHBlY3QoZ2FtZS5odW1hbikudG9CZUluc3RhbmNlT2YoUGxheWVyKTtcbiAgICAgICAgZXhwZWN0KGdhbWUuY29tcHV0ZXIpLnRvQmVJbnN0YW5jZU9mKENvbXB1dGVyKTtcbiAgICAgICAgZXhwZWN0KGdhbWUuaHVtYW4uZW5lbXkpLnRvQmUoZ2FtZS5jb21wdXRlcik7XG4gICAgICAgIGV4cGVjdChnYW1lLmNvbXB1dGVyLmVuZW15KS50b0JlKGdhbWUuaHVtYW4pO1xuICAgIH0pO1xuICAgIGl0KFwibWFrZXMgdGhlIGh1bWFuIGFuZCBjb21wdXRlciBwbGF5IGluIHR1cm5cIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBnYW1lID0gbmV3IEdhbWVDb250cm9sbGVyKGF3YWl0IGdldEluaXRpYWxQYXJhbWV0ZXJzKCkpO1xuICAgICAgICBjb25zdCBodW1hblNweSA9IGplc3Quc3B5T24oZ2FtZS5odW1hbiwgXCJtYWtlTW92ZVwiKTtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJTcHkgPSBqZXN0LnNweU9uKGdhbWUuY29tcHV0ZXIsIFwibWFrZU1vdmVcIik7XG4gICAgICAgIGNvbnN0IHJvdW5kcyA9IGF3YWl0IGdhbWUubWFpbkxvb3AobW9ja2VkRnVuY3Rpb25QYXJhbWV0ZXJzKTtcbiAgICAgICAgZXhwZWN0KGh1bWFuU3B5KS50b0hhdmVCZWVuQ2FsbGVkVGltZXMocm91bmRzKTtcbiAgICAgICAgZXhwZWN0KGNvbXB1dGVyU3B5Lm1vY2suY2FsbHMubGVuZ3RoKS50b0JlQ2xvc2VUbyhyb3VuZHMsIC0xKTtcbiAgICB9KTtcbiAgICBpdChcInVwZGF0ZXMgdGhlIHVzZXIgaW50ZXJmYWNlIHdpdGggZWFjaCBwbGF5XCIsIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lQ29udHJvbGxlcihhd2FpdCBnZXRJbml0aWFsUGFyYW1ldGVycygpKTtcbiAgICAgICAgY29uc3Qgcm91bmRzID0gYXdhaXQgZ2FtZS5tYWluTG9vcChtb2NrZWRGdW5jdGlvblBhcmFtZXRlcnMpO1xuICAgICAgICBleHBlY3QodXBkYXRlQm9hcmRzLm1vY2suY2FsbHMubGVuZ3RoKS50b0JlR3JlYXRlclRoYW5PckVxdWFsKHJvdW5kcyk7XG4gICAgfSk7XG4gICAgaXQoXCJhbm5vdW5jZXMgdGhlIHdpbm5lciBhdCB0aGUgZW5kIG9mIHRoZSBnYW1lXCIsIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lQ29udHJvbGxlcihhd2FpdCBnZXRJbml0aWFsUGFyYW1ldGVycygpKTtcbiAgICAgICAgYXdhaXQgZ2FtZS5tYWluTG9vcChtb2NrZWRGdW5jdGlvblBhcmFtZXRlcnMpO1xuICAgICAgICBleHBlY3QoZ2FtZS5odW1hbi5ib2FyZC5hbGxTdW5rKCkgfHwgZ2FtZS5jb21wdXRlci5ib2FyZC5hbGxTdW5rKCkpLnRvQmUodHJ1ZSk7XG4gICAgICAgIGV4cGVjdChhbm5vdW5jZSkudG9IYXZlQmVlbkNhbGxlZCgpO1xuICAgIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
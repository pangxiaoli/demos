/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("var form = document.querySelector('#form');\nvar strategys = {\n  isNotEmpty: function isNotEmpty(value, errorMsg) {\n    if (value === '') {\n      return errorMsg;\n    }\n  },\n  minLength: function minLength(value, length, errorMsg) {\n    if (value.length < length) {\n      return errorMsg;\n    }\n  }\n};\nvar Validator = function Validator() {\n  this.cache = [];\n};\nValidator.prototype.add = function (dom, rule, errorMsg) {\n  var str = rule.split(\":\");\n  this.cache.push(function () {\n    var strategy = str.shift();\n    str.unshift(dom.value);\n    str.push(errorMsg);\n    return strategys[strategy].apply(dom, str);\n  });\n};\nValidator.prototype.start = function () {\n  for (var i = 0; i < this.cache.length; i++) {\n    var msg = this.cache[i]();\n    if (msg) {\n      return msg;\n    }\n  }\n};\nvar validateFunc = function validateFunc() {\n  var validator = new Validator();\n  validator.add(form.userName, 'isNotEmpty', '用户名不能为空');\n  validator.add(form.passwd, 'minLength:6', '密码长度不能小于6位');\n  var errorMsg = validator.start();\n  return errorMsg;\n};\nform.onsubmit = function () {\n  var errorMsg = validateFunc();\n  if (errorMsg) {\n    alert(errorMsg);\n    return false;\n  }\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;
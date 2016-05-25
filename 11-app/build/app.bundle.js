/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _request = __webpack_require__(1);
	
	var _request2 = _interopRequireDefault(_request);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _request2.default)({ url: "employees.json" }).then(function (data) {
	    var employees = JSON.parse(data);
	    var html = "";
	    employees.forEach(function (employee) {
	        return html = html + ("<div>\n                <img src='" + employee.picture + "'/>\n                <div>\n                    " + employee.firstName + " " + employee.lastName + "\n                    <p>" + employee.phone + "</p>\n                </div>\n            </div>");
	    });
	    document.getElementById("list").innerHTML = html;
	}).catch(function (error) {
	    return console.log(error);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (obj) {
	    return new Promise(function (resolve, reject) {
	        var xhr = new XMLHttpRequest();
	        xhr.open(obj.method || "GET", obj.url);
	        if (obj.headers) {
	            Object.keys(obj.headers).forEach(function (key) {
	                return xhr.setRequestHeader(key, obj.headers[key]);
	            });
	        }
	        xhr.onload = function () {
	            if (xhr.status >= 200 && xhr.status < 300) {
	                resolve(xhr.response);
	            } else {
	                reject(xhr.statusText);
	            }
	        };
	        xhr.onerror = function () {
	            return reject(xhr.statusText);
	        };
	        xhr.send(obj.body);
	    });
	};

/***/ }
/******/ ]);
//# sourceMappingURL=app.bundle.js.map
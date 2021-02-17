/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const hamburger = document.querySelector('.hamburger')\r\nconst hamburgerModal = document.querySelector('.modal')\r\nconst catalogMb = document.querySelector('.catalog-mb')\r\nconst menu = document.querySelectorAll('.menu__item--mobile')\r\nconst menuMb = document.querySelectorAll('.menu__item--mobile__link')\r\nconst menuMbLink = document.querySelectorAll('.menu__item-link--mobile')\r\nconst arrayElem = []\r\n\r\nfor (var i = 0; i < menuMb.length; i++){\r\n  arrayElem.push(menuMb[i]);\r\n  console.log(arrayElem.indexOf());\r\n  menuMb[i].addEventListener('click', function(e){\r\n      const id = arrayElem.indexOf(e.target);\r\n      if (menuMb[id].classList.contains('block')) {\r\n          menuMb[id].classList.remove('block')\r\n          menuMbLink[id].classList.remove('block')\r\n      } else {\r\n          menuMb[id].classList.add('block')\r\n          menuMbLink[id].classList.add('block')\r\n      }\r\n\r\n      \r\n  });\r\n} \r\n\r\n\r\nhamburger.addEventListener('click', () => {\r\n  if (hamburger.classList.contains('hamburger-active')) {\r\n    hamburger.classList.remove('hamburger-active')\r\n    hamburgerModal.classList.remove('flex')\r\n    document.getElementsByTagName('body')[0].style.background=\"#fff\";\r\n  } else {\r\n    hamburger.classList.add('hamburger-active')\r\n    hamburgerModal.classList.add('flex')\r\n    document.getElementsByTagName('body')[0].style.background=\"#0000006e\";\r\n  }\r\n\r\n})\r\n\r\ncatalogMb.addEventListener('click', () => {\r\n  if (catalogMb.classList.contains('block')) {\r\n    catalogMb.classList.remove('block')\r\n    menu.forEach((el) => {\r\n      el.classList.remove(\"block\");\r\n    });\r\n  } else {\r\n    catalogMb.classList.add('block')\r\n    menu.forEach((el) => {\r\n      el.classList.add(\"block\");\r\n    });\r\n  }\r\n})\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack:///./src/assets/js/file2.js?");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/file2.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\д\\Desktop\\Frontend\\TOP3DSHOP\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\д\\Desktop\\Frontend\\TOP3DSHOP\\src\\assets\\js\\file2.js */\"./src/assets/js/file2.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/file2.js?");

/***/ })

/******/ });
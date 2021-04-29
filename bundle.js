/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/body.ts":
/*!*********************!*\
  !*** ./src/body.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ET_Body": () => (/* binding */ ET_Body)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");

class ET_Body {
    constructor(Interface) {
        this.body_class = "et_body";
        this.body_loaded = false;
        this.interface = Interface;
    }
    Init() {
        _utils__WEBPACK_IMPORTED_MODULE_0__.ET_Utils.print("info", "Loading Body...");
        this.body_loaded = (this.interface.Init());
        document.body.append(this.interface.elm);
        _utils__WEBPACK_IMPORTED_MODULE_0__.ET_Utils.print("info", "Loaded Body!");
        return this.body_loaded;
    }
}


/***/ }),

/***/ "./src/head.ts":
/*!*********************!*\
  !*** ./src/head.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ET_Head": () => (/* binding */ ET_Head)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");

class ET_Head {
    constructor() {
        // Title Stuff
        this.title_text = "Night The Fox's Page";
        this.title_loaded = false;
        this.title_id = "et_title";
        // CSS Stuff
        this.css_file = "style.css";
        this.css_loaded = false;
        this.css_id = "et_stylesheet";
        // Head Stuff
        this.head_loaded = false;
        this.head_class = "et_head";
    }
    Init() {
        _utils__WEBPACK_IMPORTED_MODULE_0__.ET_Utils.print("info", "Loading Head...");
        this.head_loaded = (this.loadTitle() && this.hasCSSLoaded());
        _utils__WEBPACK_IMPORTED_MODULE_0__.ET_Utils.print("info", "Loaded Head!");
        return this.head_loaded;
    }
    hasCSSLoaded() {
        if (_utils__WEBPACK_IMPORTED_MODULE_0__.ET_Utils.ElmExistID("et_stylesheet")) {
            this.css_loaded = true;
        }
        return this.css_loaded;
    }
    loadTitle() {
        _utils__WEBPACK_IMPORTED_MODULE_0__.ET_Utils.print("info", "Loading Head Title...");
        const title = document.createElement("title");
        title.innerHTML = this.title_text;
        title.id = this.title_id;
        title.className = this.head_class;
        document.head.append(title);
        this.title_loaded = true;
        _utils__WEBPACK_IMPORTED_MODULE_0__.ET_Utils.print("info", "Loaded Head Title!");
        return this.title_loaded;
    }
}


/***/ }),

/***/ "./src/interface.ts":
/*!**************************!*\
  !*** ./src/interface.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ET_Interface": () => (/* binding */ ET_Interface)
/* harmony export */ });
class ET_Interface {
    constructor(navbar, content, footer) {
        this.elm = null;
        this.content = content;
        this.navbar = navbar;
        this.footer = footer;
    }
    Init() {
        this.elm = document.createElement("div");
        const content = this.content.Init();
        const navbar = this.navbar.Init();
        const footer = this.footer.Init();
        this.elm.append(navbar.elm, content.elm, footer.elm);
        return true;
    }
}


/***/ }),

/***/ "./src/interface/content.ts":
/*!**********************************!*\
  !*** ./src/interface/content.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ET_Content": () => (/* binding */ ET_Content)
/* harmony export */ });
class ET_Content {
    constructor() {
        this.elm = null;
        this.wip_text = "This Page is currently Work In Progress (WIP)";
    }
    Init() {
        this.elm = document.createElement("div");
        const wip_elm = document.createElement("p");
        wip_elm.innerHTML = this.wip_text;
        this.elm.append(wip_elm);
        return this;
    }
}


/***/ }),

/***/ "./src/interface/footer.ts":
/*!*********************************!*\
  !*** ./src/interface/footer.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ET_Footer": () => (/* binding */ ET_Footer)
/* harmony export */ });
class ET_Footer {
    constructor() {
        this.elm = null;
        this.text = "<small>&copy; Copyright " + new Date().getFullYear() + "</small>";
    }
    Init() {
        this.elm = document.createElement("footer");
        this.elm.innerHTML = this.text;
        return this;
    }
}


/***/ }),

/***/ "./src/interface/navbar.ts":
/*!*********************************!*\
  !*** ./src/interface/navbar.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ET_Navbar": () => (/* binding */ ET_Navbar)
/* harmony export */ });
class ET_Navbar {
    constructor() {
        this.elm = null;
        this.title = "N1ghtTheF0x's Page";
        this.links = new Map([
            ["Home", "/home"],
            ["Projects", "/projects"],
            ["About", "/about"]
        ]);
    }
    Init() {
        this.elm = document.createElement("nav");
        const title_elm = document.createElement("h1");
        title_elm.innerHTML = this.title;
        title_elm.id = "et_nav_title";
        this.elm.append(title_elm);
        const nav_table = document.createElement("table");
        nav_table.id = "et_nav_table";
        const nav_table_row = document.createElement("tr");
        for (const [key, value] of this.links.entries()) {
            const nav_table_col = document.createElement("th");
            const attribute = document.createElement("a");
            attribute.innerHTML = " " + key + " ";
            attribute.href = location.origin + value;
            attribute.className = "et_navbar_link";
            attribute.id = "et_navbar_link_" + key;
            nav_table_col.append(attribute);
            nav_table_row.append(nav_table_col);
        }
        nav_table.append(nav_table_row);
        this.elm.append(nav_table);
        return this;
    }
}


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ET_Utils": () => (/* binding */ ET_Utils)
/* harmony export */ });
const ET_UtilsPrintTypeColor = new Map([
    ["info", "rgb(0, 255, 0)"],
    ["error", "red"],
    ["warn", "yellow"],
    ["debug", "rgb(133, 0, 133)"]
]);
var ET_Utils;
(function (ET_Utils) {
    function ElmExistID(id) {
        return document.getElementById(id) !== null;
    }
    ET_Utils.ElmExistID = ElmExistID;
    function print(type, message) {
        const date = new Date();
        console.info("%c[%c" + date.toLocaleDateString() + "%c] [%c" + date.toLocaleTimeString() + "%c] - %c" + type.toUpperCase() + "%c - %c" + message, "color: gray;", "color: green;", "color: gray;", "color: green;", "color: gray;", `color: ${ET_UtilsPrintTypeColor.get(type)}`, "color: gray;", "color: white");
    }
    ET_Utils.print = print;
})(ET_Utils || (ET_Utils = {}));


/***/ }),

/***/ "./src/website.ts":
/*!************************!*\
  !*** ./src/website.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ET_Website": () => (/* binding */ ET_Website)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");

class ET_Website {
    constructor(head, body) {
        this.head = head;
        this.body = body;
    }
    Init() {
        _utils__WEBPACK_IMPORTED_MODULE_0__.ET_Utils.print("info", "Loading Website...");
        this.head.Init();
        this.body.Init();
        _utils__WEBPACK_IMPORTED_MODULE_0__.ET_Utils.print("info", "Loaded Website!");
    }
}


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./body */ "./src/body.ts");
/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./head */ "./src/head.ts");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interface */ "./src/interface.ts");
/* harmony import */ var _interface_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interface/content */ "./src/interface/content.ts");
/* harmony import */ var _interface_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interface/footer */ "./src/interface/footer.ts");
/* harmony import */ var _interface_navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interface/navbar */ "./src/interface/navbar.ts");
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./website */ "./src/website.ts");







document.body.onload = function () {
    const HEAD = new _head__WEBPACK_IMPORTED_MODULE_1__.ET_Head();
    const BODY = new _body__WEBPACK_IMPORTED_MODULE_0__.ET_Body(new _interface__WEBPACK_IMPORTED_MODULE_2__.ET_Interface(new _interface_navbar__WEBPACK_IMPORTED_MODULE_5__.ET_Navbar(), new _interface_content__WEBPACK_IMPORTED_MODULE_3__.ET_Content(), new _interface_footer__WEBPACK_IMPORTED_MODULE_4__.ET_Footer()));
    new _website__WEBPACK_IMPORTED_MODULE_6__.ET_Website(HEAD, BODY).Init();
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uMWdodHRoZWYweC5naXRodWIuaW8vLi9zcmMvYm9keS50cyIsIndlYnBhY2s6Ly9uMWdodHRoZWYweC5naXRodWIuaW8vLi9zcmMvaGVhZC50cyIsIndlYnBhY2s6Ly9uMWdodHRoZWYweC5naXRodWIuaW8vLi9zcmMvaW50ZXJmYWNlLnRzIiwid2VicGFjazovL24xZ2h0dGhlZjB4LmdpdGh1Yi5pby8uL3NyYy9pbnRlcmZhY2UvY29udGVudC50cyIsIndlYnBhY2s6Ly9uMWdodHRoZWYweC5naXRodWIuaW8vLi9zcmMvaW50ZXJmYWNlL2Zvb3Rlci50cyIsIndlYnBhY2s6Ly9uMWdodHRoZWYweC5naXRodWIuaW8vLi9zcmMvaW50ZXJmYWNlL25hdmJhci50cyIsIndlYnBhY2s6Ly9uMWdodHRoZWYweC5naXRodWIuaW8vLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vbjFnaHR0aGVmMHguZ2l0aHViLmlvLy4vc3JjL3dlYnNpdGUudHMiLCJ3ZWJwYWNrOi8vbjFnaHR0aGVmMHguZ2l0aHViLmlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL24xZ2h0dGhlZjB4LmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbjFnaHR0aGVmMHguZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbjFnaHR0aGVmMHguZ2l0aHViLmlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbjFnaHR0aGVmMHguZ2l0aHViLmlvLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNrQztBQUUzQixNQUFNLE9BQU87SUFNaEIsWUFBWSxTQUF1QjtRQUUvQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVM7UUFDM0IsSUFBSSxDQUFD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cmZhY2UgfSBmcm9tIFwiLi9pbnRlcmZhY2VcIlxyXG5pbXBvcnQgeyBFVF9VdGlscyB9IGZyb20gXCIuL3V0aWxzXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBFVF9Cb2R5XHJcbntcclxuICAgIGJvZHlfbG9hZGVkOiBib29sZWFuXHJcbiAgICBib2R5X2NsYXNzOiBzdHJpbmdcclxuXHJcbiAgICBpbnRlcmZhY2U6IEVUX0ludGVyZmFjZVxyXG4gICAgY29uc3RydWN0b3IoSW50ZXJmYWNlOiBFVF9JbnRlcmZhY2UpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ib2R5X2NsYXNzID0gXCJldF9ib2R5XCJcclxuICAgICAgICB0aGlzLmJvZHlfbG9hZGVkID0gZmFsc2VcclxuICAgICAgICB0aGlzLmludGVyZmFjZSA9IEludGVyZmFjZVxyXG4gICAgfVxyXG4gICAgSW5pdCgpXHJcbiAgICB7XHJcbiAgICAgICAgRVRfVXRpbHMucHJpbnQoXCJpbmZvXCIsXCJMb2FkaW5nIEJvZHkuLi5cIilcclxuICAgICAgICB0aGlzLmJvZHlfbG9hZGVkID0gKHRoaXMuaW50ZXJmYWNlLkluaXQoKSlcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLmludGVyZmFjZS5lbG0pXHJcbiAgICAgICAgRVRfVXRpbHMucHJpbnQoXCJpbmZvXCIsXCJMb2FkZWQgQm9keSFcIilcclxuICAgICAgICByZXR1cm4gdGhpcy5ib2R5X2xvYWRlZFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRVRfVXRpbHMgfSBmcm9tIFwiLi91dGlsc1wiXHJcblxyXG5leHBvcnQgY2xhc3MgRVRfSGVhZFxyXG57XHJcbiAgICAvLyBUaXRsZSBQcm9wZXJ0aWVzXHJcbiAgICB0aXRsZV90ZXh0OiBzdHJpbmdcclxuICAgIHRpdGxlX2xvYWRlZDogYm9vbGVhblxyXG4gICAgdGl0bGVfaWQ6IHN0cmluZ1xyXG4gICAgLy8gQ1NTIFByb3BlcnRpZXNcclxuICAgIGNzc19maWxlOiBzdHJpbmdcclxuICAgIGNzc19sb2FkZWQ6IGJvb2xlYW5cclxuICAgIGNzc19pZDogc3RyaW5nXHJcbiAgICAvLyBIZWFkIFByb3BlcnRpZXNcclxuICAgIGhlYWRfY2xhc3M6IHN0cmluZ1xyXG4gICAgaGVhZF9sb2FkZWQ6IGJvb2xlYW5cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICAvLyBUaXRsZSBTdHVmZlxyXG4gICAgICAgIHRoaXMudGl0bGVfdGV4dCA9IFwiTmlnaHQgVGhlIEZveCdzIFBhZ2VcIlxyXG4gICAgICAgIHRoaXMudGl0bGVfbG9hZGVkID0gZmFsc2VcclxuICAgICAgICB0aGlzLnRpdGxlX2lkID0gXCJldF90aXRsZVwiXHJcbiAgICAgICAgLy8gQ1NTIFN0dWZmXHJcbiAgICAgICAgdGhpcy5jc3NfZmlsZSA9IFwic3R5bGUuY3NzXCJcclxuICAgICAgICB0aGlzLmNzc19sb2FkZWQgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuY3NzX2lkID0gXCJldF9zdHlsZXNoZWV0XCJcclxuICAgICAgICAvLyBIZWFkIFN0dWZmXHJcbiAgICAgICAgdGhpcy5oZWFkX2xvYWRlZCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5oZWFkX2NsYXNzID0gXCJldF9oZWFkXCJcclxuICAgIH1cclxuICAgIEluaXQoKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIEVUX1V0aWxzLnByaW50KFwiaW5mb1wiLFwiTG9hZGluZyBIZWFkLi4uXCIpXHJcbiAgICAgICAgdGhpcy5oZWFkX2xvYWRlZCA9ICh0aGlzLmxvYWRUaXRsZSgpICYmIHRoaXMuaGFzQ1NTTG9hZGVkKCkpXHJcbiAgICAgICAgRVRfVXRpbHMucHJpbnQoXCJpbmZvXCIsXCJMb2FkZWQgSGVhZCFcIilcclxuICAgICAgICByZXR1cm4gdGhpcy5oZWFkX2xvYWRlZFxyXG4gICAgfVxyXG4gICAgaGFzQ1NTTG9hZGVkKCk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBpZihFVF9VdGlscy5FbG1FeGlzdElEKFwiZXRfc3R5bGVzaGVldFwiKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY3NzX2xvYWRlZCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3NzX2xvYWRlZFxyXG4gICAgfVxyXG4gICAgbG9hZFRpdGxlKCk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBFVF9VdGlscy5wcmludChcImluZm9cIixcIkxvYWRpbmcgSGVhZCBUaXRsZS4uLlwiKVxyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRpdGxlXCIpXHJcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gdGhpcy50aXRsZV90ZXh0XHJcbiAgICAgICAgdGl0bGUuaWQgPSB0aGlzLnRpdGxlX2lkXHJcbiAgICAgICAgdGl0bGUuY2xhc3NOYW1lID0gdGhpcy5oZWFkX2NsYXNzXHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmQodGl0bGUpXHJcbiAgICAgICAgdGhpcy50aXRsZV9sb2FkZWQgPSB0cnVlXHJcbiAgICAgICAgRVRfVXRpbHMucHJpbnQoXCJpbmZvXCIsXCJMb2FkZWQgSGVhZCBUaXRsZSFcIilcclxuICAgICAgICByZXR1cm4gdGhpcy50aXRsZV9sb2FkZWRcclxuICAgIH1cclxufSIsImltcG9ydCB7IEVUX05hdmJhciB9IGZyb20gXCIuL2ludGVyZmFjZS9uYXZiYXJcIlxyXG5pbXBvcnQgeyBFVF9Db250ZW50IH0gZnJvbSBcIi4vaW50ZXJmYWNlL2NvbnRlbnRcIlxyXG5pbXBvcnQgeyBFVF9Gb290ZXIgfSBmcm9tIFwiLi9pbnRlcmZhY2UvZm9vdGVyXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBFVF9JbnRlcmZhY2Vcclxue1xyXG4gICAgZWxtOiBIVE1MRGl2RWxlbWVudFxyXG4gICAgbmF2YmFyOiBFVF9OYXZiYXJcclxuICAgIGNvbnRlbnQ6IEVUX0NvbnRlbnRcclxuICAgIGZvb3RlcjogRVRfRm9vdGVyXHJcbiAgICBjb25zdHJ1Y3RvcihuYXZiYXI6IEVUX05hdmJhcixjb250ZW50OiBFVF9Db250ZW50LGZvb3RlcjogRVRfRm9vdGVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZWxtID0gbnVsbFxyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnRcclxuICAgICAgICB0aGlzLm5hdmJhciA9IG5hdmJhclxyXG4gICAgICAgIHRoaXMuZm9vdGVyID0gZm9vdGVyXHJcbiAgICB9XHJcbiAgICBJbml0KCk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICB0aGlzLmVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50LkluaXQoKVxyXG4gICAgICAgIGNvbnN0IG5hdmJhciA9IHRoaXMubmF2YmFyLkluaXQoKVxyXG4gICAgICAgIGNvbnN0IGZvb3RlciA9IHRoaXMuZm9vdGVyLkluaXQoKVxyXG4gICAgICAgIHRoaXMuZWxtLmFwcGVuZChuYXZiYXIuZWxtLGNvbnRlbnQuZWxtLGZvb3Rlci5lbG0pXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBFVF9Db250ZW50XHJcbntcclxuICAgIGVsbTogSFRNTERpdkVsZW1lbnRcclxuICAgIHdpcF90ZXh0OiBzdHJpbmdcclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmVsbSA9IG51bGxcclxuICAgICAgICB0aGlzLndpcF90ZXh0ID0gXCJUaGlzIFBhZ2UgaXMgY3VycmVudGx5IFdvcmsgSW4gUHJvZ3Jlc3MgKFdJUClcIlxyXG4gICAgfVxyXG4gICAgSW5pdCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5lbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgY29uc3Qgd2lwX2VsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICAgICAgd2lwX2VsbS5pbm5lckhUTUwgPSB0aGlzLndpcF90ZXh0XHJcbiAgICAgICAgdGhpcy5lbG0uYXBwZW5kKHdpcF9lbG0pXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBFVF9Gb290ZXJcclxue1xyXG4gICAgZWxtOiBIVE1MRWxlbWVudFxyXG4gICAgdGV4dDogc3RyaW5nXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5lbG0gPSBudWxsXHJcbiAgICAgICAgdGhpcy50ZXh0ID0gXCI8c21hbGw+JmNvcHk7IENvcHlyaWdodCBcIituZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkrXCI8L3NtYWxsPlwiXHJcbiAgICB9XHJcbiAgICBJbml0KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIilcclxuICAgICAgICB0aGlzLmVsbS5pbm5lckhUTUwgPSB0aGlzLnRleHRcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG59IiwidHlwZSBMaW5rTmFtZSA9IHN0cmluZ1xyXG50eXBlIExpbmtVcmwgPSBzdHJpbmdcclxuXHJcbmV4cG9ydCBjbGFzcyBFVF9OYXZiYXJcclxue1xyXG4gICAgZWxtOiBIVE1MRWxlbWVudFxyXG5cclxuICAgIHRpdGxlOiBzdHJpbmdcclxuICAgIGxpbmtzOiBNYXA8TGlua05hbWUsTGlua1VybD5cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmVsbSA9IG51bGxcclxuICAgICAgICB0aGlzLnRpdGxlID0gXCJOMWdodFRoZUYweCdzIFBhZ2VcIlxyXG4gICAgICAgIHRoaXMubGlua3MgPSBuZXcgTWFwKFtcclxuICAgICAgICAgICAgW1wiSG9tZVwiLFwiL2hvbWVcIl0sXHJcbiAgICAgICAgICAgIFtcIlByb2plY3RzXCIsXCIvcHJvamVjdHNcIl0sXHJcbiAgICAgICAgICAgIFtcIkFib3V0XCIsXCIvYWJvdXRcIl1cclxuICAgICAgICBdKVxyXG4gICAgfVxyXG4gICAgSW5pdCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5lbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpXHJcbiAgICAgICAgY29uc3QgdGl0bGVfZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXHJcbiAgICAgICAgdGl0bGVfZWxtLmlubmVySFRNTCA9IHRoaXMudGl0bGVcclxuICAgICAgICB0aXRsZV9lbG0uaWQgPSBcImV0X25hdl90aXRsZVwiXHJcbiAgICAgICAgdGhpcy5lbG0uYXBwZW5kKHRpdGxlX2VsbSlcclxuICAgICAgICBjb25zdCBuYXZfdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIilcclxuICAgICAgICBuYXZfdGFibGUuaWQgPSBcImV0X25hdl90YWJsZVwiXHJcbiAgICAgICAgY29uc3QgbmF2X3RhYmxlX3JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKVxyXG4gICAgICAgIGZvcihjb25zdCBba2V5LHZhbHVlXSBvZiB0aGlzLmxpbmtzLmVudHJpZXMoKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hdl90YWJsZV9jb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIilcclxuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIilcclxuICAgICAgICAgICAgYXR0cmlidXRlLmlubmVySFRNTCA9IFwiIFwiK2tleStcIiBcIlxyXG4gICAgICAgICAgICBhdHRyaWJ1dGUuaHJlZiA9IGxvY2F0aW9uLm9yaWdpbit2YWx1ZVxyXG4gICAgICAgICAgICBhdHRyaWJ1dGUuY2xhc3NOYW1lID0gXCJldF9uYXZiYXJfbGlua1wiXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZS5pZCA9IFwiZXRfbmF2YmFyX2xpbmtfXCIra2V5XHJcbiAgICAgICAgICAgIG5hdl90YWJsZV9jb2wuYXBwZW5kKGF0dHJpYnV0ZSlcclxuICAgICAgICAgICAgbmF2X3RhYmxlX3Jvdy5hcHBlbmQobmF2X3RhYmxlX2NvbClcclxuICAgICAgICB9XHJcbiAgICAgICAgbmF2X3RhYmxlLmFwcGVuZChuYXZfdGFibGVfcm93KVxyXG4gICAgICAgIHRoaXMuZWxtLmFwcGVuZChuYXZfdGFibGUpXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxufSIsInR5cGUgRVRfVXRpbHNQcmludFR5cGUgPSBcImluZm9cIiB8IFwid2FyblwiIHwgXCJlcnJvclwiIHwgXCJkZWJ1Z1wiXHJcbmNvbnN0IEVUX1V0aWxzUHJpbnRUeXBlQ29sb3I6IE1hcDxFVF9VdGlsc1ByaW50VHlwZSxzdHJpbmc+ID0gbmV3IE1hcChbXHJcbiAgICBbXCJpbmZvXCIsXCJyZ2IoMCwgMjU1LCAwKVwiXSxcclxuICAgIFtcImVycm9yXCIsXCJyZWRcIl0sXHJcbiAgICBbXCJ3YXJuXCIsXCJ5ZWxsb3dcIl0sXHJcbiAgICBbXCJkZWJ1Z1wiLFwicmdiKDEzMywgMCwgMTMzKVwiXVxyXG5dKVxyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBFVF9VdGlsc1xyXG57XHJcbiAgICBleHBvcnQgZnVuY3Rpb24gRWxtRXhpc3RJRChpZDogc3RyaW5nKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkgIT09IG51bGxcclxuICAgIH1cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBwcmludCh0eXBlOiBFVF9VdGlsc1ByaW50VHlwZSxtZXNzYWdlOiBzdHJpbmcpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgICAgICBjb25zb2xlLmluZm8oXCIlY1slY1wiK2RhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCkrXCIlY10gWyVjXCIrZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKStcIiVjXSAtICVjXCIrdHlwZS50b1VwcGVyQ2FzZSgpK1wiJWMgLSAlY1wiK21lc3NhZ2UsXHJcbiAgICAgICAgXCJjb2xvcjogZ3JheTtcIixcclxuICAgICAgICBcImNvbG9yOiBncmVlbjtcIixcclxuICAgICAgICBcImNvbG9yOiBncmF5O1wiLFxyXG4gICAgICAgIFwiY29sb3I6IGdyZWVuO1wiLFxyXG4gICAgICAgIFwiY29sb3I6IGdyYXk7XCIsXHJcbiAgICAgICAgYGNvbG9yOiAke0VUX1V0aWxzUHJpbnRUeXBlQ29sb3IuZ2V0KHR5cGUpfWAsXHJcbiAgICAgICAgXCJjb2xvcjogZ3JheTtcIixcclxuICAgICAgICBcImNvbG9yOiB3aGl0ZVwiKVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRVRfQm9keSB9IGZyb20gXCIuL2JvZHlcIjtcclxuaW1wb3J0IHsgRVRfSGVhZCB9IGZyb20gXCIuL2hlYWRcIjtcclxuaW1wb3J0IHsgRVRfVXRpbHMgfSBmcm9tIFwiLi91dGlsc1wiXHJcblxyXG5leHBvcnQgY2xhc3MgRVRfV2Vic2l0ZVxyXG57XHJcbiAgICBoZWFkOiBFVF9IZWFkXHJcbiAgICBib2R5OiBFVF9Cb2R5XHJcbiAgICBjb25zdHJ1Y3RvcihoZWFkOiBFVF9IZWFkLGJvZHk6IEVUX0JvZHkpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5oZWFkID0gaGVhZFxyXG4gICAgICAgIHRoaXMuYm9keSA9IGJvZHlcclxuICAgIH1cclxuICAgIEluaXQoKVxyXG4gICAge1xyXG4gICAgICAgIEVUX1V0aWxzLnByaW50KFwiaW5mb1wiLFwiTG9hZGluZyBXZWJzaXRlLi4uXCIpXHJcbiAgICAgICAgdGhpcy5oZWFkLkluaXQoKVxyXG4gICAgICAgIHRoaXMuYm9keS5Jbml0KClcclxuICAgICAgICBFVF9VdGlscy5wcmludChcImluZm9cIixcIkxvYWRlZCBXZWJzaXRlIVwiKVxyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBFVF9Cb2R5IH0gZnJvbSBcIi4vYm9keVwiXHJcbmltcG9ydCB7IEVUX0hlYWQgfSBmcm9tIFwiLi9oZWFkXCJcclxuaW1wb3J0IHsgRVRfSW50ZXJmYWNlIH0gZnJvbSBcIi4vaW50ZXJmYWNlXCJcclxuaW1wb3J0IHsgRVRfQ29udGVudCB9IGZyb20gXCIuL2ludGVyZmFjZS9jb250ZW50XCJcclxuaW1wb3J0IHsgRVRfRm9vdGVyIH0gZnJvbSBcIi4vaW50ZXJmYWNlL2Zvb3RlclwiXHJcbmltcG9ydCB7IEVUX05hdmJhciB9IGZyb20gXCIuL2ludGVyZmFjZS9uYXZiYXJcIlxyXG5pbXBvcnQgeyBFVF9VdGlscyB9IGZyb20gXCIuL3V0aWxzXCJcclxuaW1wb3J0IHsgRVRfV2Vic2l0ZSB9IGZyb20gXCIuL3dlYnNpdGVcIlxyXG5cclxuZG9jdW1lbnQuYm9keS5vbmxvYWQ9ZnVuY3Rpb24oKVxyXG57XHJcbiAgICBjb25zdCBIRUFEID0gbmV3IEVUX0hlYWQoKVxyXG4gICAgY29uc3QgQk9EWSA9IG5ldyBFVF9Cb2R5KG5ldyBFVF9JbnRlcmZhY2UobmV3IEVUX05hdmJhcigpLG5ldyBFVF9Db250ZW50KCksbmV3IEVUX0Zvb3RlcigpKSlcclxuXHJcbiAgICBuZXcgRVRfV2Vic2l0ZShIRUFELEJPRFkpLkluaXQoKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
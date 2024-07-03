/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./docs/src/index.js":
/*!***************************!*\
  !*** ./docs/src/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var simple_parallax_js_vanilla__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-parallax-js/vanilla */ \"./node_modules/simple-parallax-js/dist/vanilla/simpleParallaxVanilla.es.js\");\n\r\n\r\n    //slides\r\n    let slideIndex = 0;\r\n    let isPaused = false;\r\n    const autoSlideInterval = 2000;\r\n    const pauseDuration = 5000; \r\n\r\n    showSlides();\r\n\r\n    function showSlides() {\r\n        if (isPaused) return;\r\n\r\n        var slides = document.getElementsByClassName('slides');\r\n        var dots = document.getElementsByClassName('dots');\r\n\r\n        slideIndex++;\r\n        for(let i = 0 ; i < slides.length ; i++){\r\n            slides[i].style.display = 'none';\r\n        }\r\n        for(let i = 0 ; i < dots.length ; i++){\r\n            dots[i].style.backgroundColor = 'initial';\r\n            dots[i].onclick = function(e) {\r\n                for(let j = 0 ; j < dots.length ; j++){\r\n                    slides[j].style.display = 'none';\r\n                    dots[j].style.backgroundColor = 'initial';\r\n                }\r\n                slideIndex = i + 1;\r\n                slides[slideIndex-1].style.display = 'block';\r\n                dots[slideIndex-1].style.backgroundColor = '#709339';\r\n                pauseSlideshow()\r\n            };\r\n        }\r\n        \r\n        if(slideIndex > slides.length){slideIndex = 1};\r\n        slides[slideIndex-1].style.display = 'block';\r\n        dots[slideIndex-1].style.backgroundColor = '#709339';\r\n    }\r\n    setInterval(showSlides, autoSlideInterval);\r\n\r\n\r\n    function pauseSlideshow() {\r\n        if(isPaused) return;\r\n        isPaused = true;\r\n        setTimeout(() => {\r\n            isPaused = false;\r\n        }, pauseDuration);\r\n    }\r\n    \r\n\r\n    //gotop\r\n    document.getElementById('goTop').onclick = () => {\r\n        window.scrollTo({ top: 0, behavior: 'smooth' });\r\n    }\r\n\r\n    var products = document.querySelector('.products')\r\n    var rect = products.getBoundingClientRect().top\r\n    var productsTop = rect + window.scrollY - 100;\r\n\r\n    window.addEventListener(\"scroll\",function(){\r\n        goTop.style.opacity = (this.scrollY) > productsTop ? 1 : 0\r\n    })\r\n    \r\n    //SimpleParallax\r\n    var image = document.getElementsByClassName('thumbnail');\r\n    new simple_parallax_js_vanilla__WEBPACK_IMPORTED_MODULE_0__[\"default\"](image);\r\n\r\n    //mobile\r\n\r\n    var openbtn = document.getElementById('openbtn');\r\n    var content = document.getElementById('content');\r\n    var close = document.getElementById('close');\r\n    var onMenu = document.getElementById('onMenu');\r\n    var menuaria = document.getElementById('menuaria');\r\n\r\n    openbtn.onclick = () => {\r\n        content.style.left = '0%';\r\n    }\r\n    close.onclick = () => {\r\n        content.style.left = '100%';\r\n        if(content.style.left == '100%'){\r\n            menuaria.classList.remove(\"isOpen\");\r\n        }\r\n    }\r\n    onMenu.onclick = (e) => {\r\n        e.preventDefault();\r\n        menuaria.classList.toggle(\"isOpen\");\r\n    }\n\n//# sourceURL=webpack:///./docs/src/index.js?");

/***/ }),

/***/ "./node_modules/simple-parallax-js/dist/vanilla/simpleParallaxVanilla.es.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/simple-parallax-js/dist/vanilla/simpleParallaxVanilla.es.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ g)\n/* harmony export */ });\nconst h = (s) => NodeList.prototype.isPrototypeOf(s) || HTMLCollection.prototype.isPrototypeOf(s) ? Array.from(s) : typeof s == \"string\" || s instanceof String ? document.querySelectorAll(s) : [s], p = () => Element.prototype.closest && \"IntersectionObserver\" in window;\nclass u {\n  constructor() {\n    this.positions = {\n      top: 0,\n      bottom: 0,\n      height: 0\n    };\n  }\n  setViewportTop(t) {\n    return this.positions.top = t ? t.scrollTop : window.pageYOffset, this.positions;\n  }\n  setViewportBottom() {\n    return this.positions.bottom = this.positions.top + this.positions.height, this.positions;\n  }\n  setViewportAll(t) {\n    return this.positions.top = t ? t.scrollTop : window.pageYOffset, this.positions.height = t ? t.clientHeight : document.documentElement.clientHeight, this.positions.bottom = this.positions.top + this.positions.height, this.positions;\n  }\n}\nconst i = new u(), c = () => {\n  const s = \"transform webkitTransform mozTransform oTransform msTransform\".split(\n    \" \"\n  );\n  let t, e = 0;\n  for (; t === void 0; )\n    t = document.createElement(\"div\").style[s[e]] !== void 0 ? s[e] : void 0, e += 1;\n  return t;\n}, r = c(), f = (s) => s.tagName.toLowerCase() !== \"img\" && s.tagName.toLowerCase() !== \"picture\" ? !0 : !(!s || !s.complete || typeof s.naturalWidth < \"u\" && s.naturalWidth === 0);\nclass d {\n  constructor(t, e) {\n    this.element = t, this.elementContainer = t, this.settings = e, this.isVisible = !0, this.isInit = !1, this.oldTranslateValue = -1, this.init = this.init.bind(this), this.customWrapper = this.settings.customWrapper && this.element.closest(this.settings.customWrapper) ? this.element.closest(this.settings.customWrapper) : null, f(t) ? this.init() : this.element.addEventListener(\"load\", () => {\n      setTimeout(() => {\n        this.init(!0);\n      }, 50);\n    });\n  }\n  init(t) {\n    this.isInit || (t && (this.rangeMax = null), !this.element.closest(\".simpleParallax\") && (this.settings.overflow === !1 && this.wrapElement(this.element), this.setTransformCSS(), this.getElementOffset(), this.intersectionObserver(), this.getTranslateValue(), this.animate(), this.settings.delay > 0 ? setTimeout(() => {\n      this.setTransitionCSS(), this.elementContainer.classList.add(\n        \"simple-parallax-initialized\"\n      );\n    }, 10) : this.elementContainer.classList.add(\"simple-parallax-initialized\"), this.isInit = !0));\n  }\n  // if overflow option is set to false\n  // wrap the element into a .simpleParallax div and apply overflow hidden to hide the image excedant (result of the scale)\n  wrapElement() {\n    const t = this.element.closest(\"picture\") || this.element;\n    let e = this.customWrapper || document.createElement(\"div\");\n    e.classList.add(\"simpleParallax\"), e.style.overflow = \"hidden\", this.customWrapper || (t.parentNode.insertBefore(e, t), e.appendChild(t)), this.elementContainer = e;\n  }\n  // unwrap the element from .simpleParallax wrapper container\n  unWrapElement() {\n    const t = this.elementContainer;\n    this.customWrapper ? (t.classList.remove(\"simpleParallax\"), t.style.overflow = \"\") : t.replaceWith(...t.childNodes);\n  }\n  // apply default style on element\n  setTransformCSS() {\n    this.settings.overflow === !1 && (this.element.style[r] = `scale(${this.settings.scale})`), this.element.style.willChange = \"transform\";\n  }\n  // apply the transition effet\n  setTransitionCSS() {\n    this.element.style.transition = `transform ${this.settings.delay}s ${this.settings.transition}`;\n  }\n  // remove style of the element\n  unSetStyle() {\n    this.element.style.willChange = \"\", this.element.style[r] = \"\", this.element.style.transition = \"\";\n  }\n  // get the current element offset\n  getElementOffset() {\n    const t = this.elementContainer.getBoundingClientRect();\n    if (this.elementHeight = t.height, this.elementTop = t.top + i.positions.top, this.settings.customContainer) {\n      const e = this.settings.customContainer.getBoundingClientRect();\n      this.elementTop = t.top - e.top + i.positions.top;\n    }\n    this.elementBottom = this.elementHeight + this.elementTop;\n  }\n  // build the Threshold array to cater change for every pixel scrolled\n  buildThresholdList() {\n    const t = [];\n    for (let e = 1; e <= this.elementHeight; e++) {\n      const o = e / this.elementHeight;\n      t.push(o);\n    }\n    return t;\n  }\n  // create the Intersection Observer\n  intersectionObserver() {\n    const t = {\n      root: null,\n      threshold: this.buildThresholdList()\n    };\n    this.observer = new IntersectionObserver(\n      this.intersectionObserverCallback.bind(this),\n      t\n    ), this.observer.observe(this.element);\n  }\n  // Intersection Observer Callback to set the element at visible state or not\n  intersectionObserverCallback(t) {\n    t.forEach((e) => {\n      e.isIntersecting ? this.isVisible = !0 : this.isVisible = !1;\n    });\n  }\n  // check if the current element is visible in the Viewport\n  // for browser that not support Intersection Observer API\n  checkIfVisible() {\n    return this.elementBottom > i.positions.top && this.elementTop < i.positions.bottom;\n  }\n  // calculate the range between image will be translated\n  getRangeMax() {\n    const t = this.element.clientHeight;\n    this.rangeMax = t * this.settings.scale - t;\n  }\n  // get the percentage and the translate value to apply on the element\n  getTranslateValue() {\n    let t = ((i.positions.bottom - this.elementTop) / ((i.positions.height + this.elementHeight) / 100)).toFixed(1);\n    return t = Math.min(100, Math.max(0, t)), this.settings.maxTransition !== 0 && t > this.settings.maxTransition && (t = this.settings.maxTransition), this.oldPercentage === t || (this.rangeMax || this.getRangeMax(), this.translateValue = (t / 100 * this.rangeMax - this.rangeMax / 2).toFixed(0), this.oldTranslateValue === this.translateValue) ? !1 : (this.oldPercentage = t, this.oldTranslateValue = this.translateValue, !0);\n  }\n  // animate the image\n  animate() {\n    let t = 0, e = 0, o;\n    (this.settings.orientation.includes(\"left\") || this.settings.orientation.includes(\"right\")) && (e = `${this.settings.orientation.includes(\"left\") ? this.translateValue * -1 : this.translateValue}px`), (this.settings.orientation.includes(\"up\") || this.settings.orientation.includes(\"down\")) && (t = `${this.settings.orientation.includes(\"up\") ? this.translateValue * -1 : this.translateValue}px`), this.settings.overflow === !1 ? o = `translate3d(${e}, ${t}, 0) scale(${this.settings.scale})` : o = `translate3d(${e}, ${t}, 0)`, this.element.style[r] = o;\n  }\n}\nlet l = !1, n = [], a, m;\nclass g {\n  constructor(t, e) {\n    t && p() && (this.elements = h(t), this.defaults = {\n      delay: 0,\n      orientation: \"up\",\n      scale: 1.3,\n      overflow: !1,\n      transition: \"cubic-bezier(0,0,0,1)\",\n      customContainer: \"\",\n      customWrapper: \"\",\n      maxTransition: 0\n    }, this.settings = Object.assign(this.defaults, e), this.settings.customContainer && ([this.customContainer] = h(\n      this.settings.customContainer\n    )), this.lastPosition = -1, this.resizeIsDone = this.resizeIsDone.bind(this), this.refresh = this.refresh.bind(this), this.proceedRequestAnimationFrame = this.proceedRequestAnimationFrame.bind(this), this.init());\n  }\n  init() {\n    i.setViewportAll(this.customContainer), n = [\n      ...this.elements.map(\n        (t) => new d(t, this.settings)\n      ),\n      ...n\n    ], l || (this.proceedRequestAnimationFrame(), window.addEventListener(\"resize\", this.resizeIsDone), l = !0);\n  }\n  // wait for resize to be completely done\n  resizeIsDone() {\n    clearTimeout(m), m = setTimeout(this.refresh, 200);\n  }\n  // animation frame\n  proceedRequestAnimationFrame() {\n    if (i.setViewportTop(this.customContainer), this.lastPosition === i.positions.top) {\n      a = window.requestAnimationFrame(\n        this.proceedRequestAnimationFrame\n      );\n      return;\n    }\n    i.setViewportBottom(), n.forEach((t) => {\n      this.proceedElement(t);\n    }), a = window.requestAnimationFrame(\n      this.proceedRequestAnimationFrame\n    ), this.lastPosition = i.positions.top;\n  }\n  // proceed the element\n  proceedElement(t) {\n    let e = !1;\n    this.customContainer ? e = t.checkIfVisible() : e = t.isVisible, e && t.getTranslateValue() && t.animate();\n  }\n  refresh() {\n    i.setViewportAll(this.customContainer), n.forEach((t) => {\n      t.getElementOffset(), t.getRangeMax();\n    }), this.lastPosition = -1;\n  }\n  destroy() {\n    const t = [];\n    n = n.filter((e) => this.elements.includes(e.element) ? (t.push(e), !1) : e), t.forEach((e) => {\n      e.unSetStyle(), this.settings.overflow === !1 && e.unWrapElement();\n    }), n.length || (window.cancelAnimationFrame(a), window.removeEventListener(\"resize\", this.refresh), l = !1);\n  }\n}\n\n\n\n//# sourceURL=webpack:///./node_modules/simple-parallax-js/dist/vanilla/simpleParallaxVanilla.es.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./docs/src/index.js");
/******/ 	
/******/ })()
;
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/rc-resize-observer";
exports.ids = ["vendor-chunks/rc-resize-observer"];
exports.modules = {

/***/ "(ssr)/./node_modules/rc-resize-observer/es/Collection.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-resize-observer/es/Collection.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Collection: () => (/* binding */ Collection),\n/* harmony export */   CollectionContext: () => (/* binding */ CollectionContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar CollectionContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);\n/**\n * Collect all the resize event from children ResizeObserver\n */\nfunction Collection(_ref) {\n  var children = _ref.children,\n    onBatchResize = _ref.onBatchResize;\n  var resizeIdRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);\n  var resizeInfosRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef([]);\n  var onCollectionResize = react__WEBPACK_IMPORTED_MODULE_0__.useContext(CollectionContext);\n  var onResize = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (size, element, data) {\n    resizeIdRef.current += 1;\n    var currentId = resizeIdRef.current;\n    resizeInfosRef.current.push({\n      size: size,\n      element: element,\n      data: data\n    });\n    Promise.resolve().then(function () {\n      if (currentId === resizeIdRef.current) {\n        onBatchResize === null || onBatchResize === void 0 || onBatchResize(resizeInfosRef.current);\n        resizeInfosRef.current = [];\n      }\n    });\n\n    // Continue bubbling if parent exist\n    onCollectionResize === null || onCollectionResize === void 0 || onCollectionResize(size, element, data);\n  }, [onBatchResize, onCollectionResize]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CollectionContext.Provider, {\n    value: onResize\n  }, children);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmMtcmVzaXplLW9ic2VydmVyL2VzL0NvbGxlY3Rpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQjtBQUN4QixxQ0FBcUMsZ0RBQW1CO0FBQy9EO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLG9CQUFvQix5Q0FBWTtBQUNoQyx1QkFBdUIseUNBQVk7QUFDbkMsMkJBQTJCLDZDQUFnQjtBQUMzQyxpQkFBaUIsOENBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsR0FBRztBQUNILHNCQUFzQixnREFBbUI7QUFDekM7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZW5vLy4vbm9kZV9tb2R1bGVzL3JjLXJlc2l6ZS1vYnNlcnZlci9lcy9Db2xsZWN0aW9uLmpzPzBiOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IHZhciBDb2xsZWN0aW9uQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuLyoqXG4gKiBDb2xsZWN0IGFsbCB0aGUgcmVzaXplIGV2ZW50IGZyb20gY2hpbGRyZW4gUmVzaXplT2JzZXJ2ZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIENvbGxlY3Rpb24oX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgIG9uQmF0Y2hSZXNpemUgPSBfcmVmLm9uQmF0Y2hSZXNpemU7XG4gIHZhciByZXNpemVJZFJlZiA9IFJlYWN0LnVzZVJlZigwKTtcbiAgdmFyIHJlc2l6ZUluZm9zUmVmID0gUmVhY3QudXNlUmVmKFtdKTtcbiAgdmFyIG9uQ29sbGVjdGlvblJlc2l6ZSA9IFJlYWN0LnVzZUNvbnRleHQoQ29sbGVjdGlvbkNvbnRleHQpO1xuICB2YXIgb25SZXNpemUgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoc2l6ZSwgZWxlbWVudCwgZGF0YSkge1xuICAgIHJlc2l6ZUlkUmVmLmN1cnJlbnQgKz0gMTtcbiAgICB2YXIgY3VycmVudElkID0gcmVzaXplSWRSZWYuY3VycmVudDtcbiAgICByZXNpemVJbmZvc1JlZi5jdXJyZW50LnB1c2goe1xuICAgICAgc2l6ZTogc2l6ZSxcbiAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSk7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoY3VycmVudElkID09PSByZXNpemVJZFJlZi5jdXJyZW50KSB7XG4gICAgICAgIG9uQmF0Y2hSZXNpemUgPT09IG51bGwgfHwgb25CYXRjaFJlc2l6ZSA9PT0gdm9pZCAwIHx8IG9uQmF0Y2hSZXNpemUocmVzaXplSW5mb3NSZWYuY3VycmVudCk7XG4gICAgICAgIHJlc2l6ZUluZm9zUmVmLmN1cnJlbnQgPSBbXTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIENvbnRpbnVlIGJ1YmJsaW5nIGlmIHBhcmVudCBleGlzdFxuICAgIG9uQ29sbGVjdGlvblJlc2l6ZSA9PT0gbnVsbCB8fCBvbkNvbGxlY3Rpb25SZXNpemUgPT09IHZvaWQgMCB8fCBvbkNvbGxlY3Rpb25SZXNpemUoc2l6ZSwgZWxlbWVudCwgZGF0YSk7XG4gIH0sIFtvbkJhdGNoUmVzaXplLCBvbkNvbGxlY3Rpb25SZXNpemVdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbGxlY3Rpb25Db250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IG9uUmVzaXplXG4gIH0sIGNoaWxkcmVuKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rc-resize-observer/es/Collection.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/rc-resize-observer/es/SingleObserver/DomWrapper.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rc-resize-observer/es/SingleObserver/DomWrapper.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DomWrapper)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"(ssr)/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"(ssr)/./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"(ssr)/./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ \"(ssr)/./node_modules/@babel/runtime/helpers/esm/createSuper.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n/**\n * Fallback to findDOMNode if origin ref do not provide any dom element\n */\nvar DomWrapper = /*#__PURE__*/function (_React$Component) {\n  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(DomWrapper, _React$Component);\n  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(DomWrapper);\n  function DomWrapper() {\n    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, DomWrapper);\n    return _super.apply(this, arguments);\n  }\n  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(DomWrapper, [{\n    key: \"render\",\n    value: function render() {\n      return this.props.children;\n    }\n  }]);\n  return DomWrapper;\n}(react__WEBPACK_IMPORTED_MODULE_4__.Component);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmMtcmVzaXplLW9ic2VydmVyL2VzL1NpbmdsZU9ic2VydmVyL0RvbVdyYXBwZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3RTtBQUNOO0FBQ047QUFDTTtBQUNuQztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0VBQVM7QUFDWCxlQUFlLGtGQUFZO0FBQzNCO0FBQ0EsSUFBSSxxRkFBZTtBQUNuQjtBQUNBO0FBQ0EsRUFBRSxrRkFBWTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQyxDQUFDLDRDQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVuby8uL25vZGVfbW9kdWxlcy9yYy1yZXNpemUtb2JzZXJ2ZXIvZXMvU2luZ2xlT2JzZXJ2ZXIvRG9tV3JhcHBlci5qcz82Yzc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jcmVhdGVDbGFzc1wiO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNcIjtcbmltcG9ydCBfY3JlYXRlU3VwZXIgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZVN1cGVyXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG4vKipcbiAqIEZhbGxiYWNrIHRvIGZpbmRET01Ob2RlIGlmIG9yaWdpbiByZWYgZG8gbm90IHByb3ZpZGUgYW55IGRvbSBlbGVtZW50XG4gKi9cbnZhciBEb21XcmFwcGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhEb21XcmFwcGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihEb21XcmFwcGVyKTtcbiAgZnVuY3Rpb24gRG9tV3JhcHBlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRG9tV3JhcHBlcik7XG4gICAgcmV0dXJuIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG4gIF9jcmVhdGVDbGFzcyhEb21XcmFwcGVyLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBEb21XcmFwcGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuZXhwb3J0IHsgRG9tV3JhcHBlciBhcyBkZWZhdWx0IH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rc-resize-observer/es/SingleObserver/DomWrapper.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/rc-resize-observer/es/SingleObserver/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/rc-resize-observer/es/SingleObserver/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ \"(ssr)/./node_modules/@babel/runtime/helpers/esm/objectSpread2.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ \"(ssr)/./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var rc_util_es_Dom_findDOMNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/Dom/findDOMNode */ \"(ssr)/./node_modules/rc-util/es/Dom/findDOMNode.js\");\n/* harmony import */ var rc_util_es_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/ref */ \"(ssr)/./node_modules/rc-util/es/ref.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Collection */ \"(ssr)/./node_modules/rc-resize-observer/es/Collection.js\");\n/* harmony import */ var _utils_observerUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/observerUtil */ \"(ssr)/./node_modules/rc-resize-observer/es/utils/observerUtil.js\");\n/* harmony import */ var _DomWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DomWrapper */ \"(ssr)/./node_modules/rc-resize-observer/es/SingleObserver/DomWrapper.js\");\n\n\n\n\n\n\n\n\nfunction SingleObserver(props, ref) {\n  var children = props.children,\n    disabled = props.disabled;\n  var elementRef = react__WEBPACK_IMPORTED_MODULE_4__.useRef(null);\n  var wrapperRef = react__WEBPACK_IMPORTED_MODULE_4__.useRef(null);\n  var onCollectionResize = react__WEBPACK_IMPORTED_MODULE_4__.useContext(_Collection__WEBPACK_IMPORTED_MODULE_5__.CollectionContext);\n\n  // =========================== Children ===========================\n  var isRenderProps = typeof children === 'function';\n  var mergedChildren = isRenderProps ? children(elementRef) : children;\n\n  // ============================= Size =============================\n  var sizeRef = react__WEBPACK_IMPORTED_MODULE_4__.useRef({\n    width: -1,\n    height: -1,\n    offsetWidth: -1,\n    offsetHeight: -1\n  });\n\n  // ============================= Ref ==============================\n  var canRef = !isRenderProps && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.isValidElement(mergedChildren) && (0,rc_util_es_ref__WEBPACK_IMPORTED_MODULE_3__.supportRef)(mergedChildren);\n  var originRef = canRef ? mergedChildren.ref : null;\n  var mergedRef = (0,rc_util_es_ref__WEBPACK_IMPORTED_MODULE_3__.useComposeRef)(originRef, elementRef);\n  var getDom = function getDom() {\n    var _elementRef$current;\n    return (0,rc_util_es_Dom_findDOMNode__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(elementRef.current) || (\n    // Support `nativeElement` format\n    elementRef.current && (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(elementRef.current) === 'object' ? (0,rc_util_es_Dom_findDOMNode__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((_elementRef$current = elementRef.current) === null || _elementRef$current === void 0 ? void 0 : _elementRef$current.nativeElement) : null) || (0,rc_util_es_Dom_findDOMNode__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(wrapperRef.current);\n  };\n  react__WEBPACK_IMPORTED_MODULE_4__.useImperativeHandle(ref, function () {\n    return getDom();\n  });\n\n  // =========================== Observe ============================\n  var propsRef = react__WEBPACK_IMPORTED_MODULE_4__.useRef(props);\n  propsRef.current = props;\n\n  // Handler\n  var onInternalResize = react__WEBPACK_IMPORTED_MODULE_4__.useCallback(function (target) {\n    var _propsRef$current = propsRef.current,\n      onResize = _propsRef$current.onResize,\n      data = _propsRef$current.data;\n    var _target$getBoundingCl = target.getBoundingClientRect(),\n      width = _target$getBoundingCl.width,\n      height = _target$getBoundingCl.height;\n    var offsetWidth = target.offsetWidth,\n      offsetHeight = target.offsetHeight;\n\n    /**\n     * Resize observer trigger when content size changed.\n     * In most case we just care about element size,\n     * let's use `boundary` instead of `contentRect` here to avoid shaking.\n     */\n    var fixedWidth = Math.floor(width);\n    var fixedHeight = Math.floor(height);\n    if (sizeRef.current.width !== fixedWidth || sizeRef.current.height !== fixedHeight || sizeRef.current.offsetWidth !== offsetWidth || sizeRef.current.offsetHeight !== offsetHeight) {\n      var size = {\n        width: fixedWidth,\n        height: fixedHeight,\n        offsetWidth: offsetWidth,\n        offsetHeight: offsetHeight\n      };\n      sizeRef.current = size;\n\n      // IE is strange, right?\n      var mergedOffsetWidth = offsetWidth === Math.round(width) ? width : offsetWidth;\n      var mergedOffsetHeight = offsetHeight === Math.round(height) ? height : offsetHeight;\n      var sizeInfo = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, size), {}, {\n        offsetWidth: mergedOffsetWidth,\n        offsetHeight: mergedOffsetHeight\n      });\n\n      // Let collection know what happened\n      onCollectionResize === null || onCollectionResize === void 0 || onCollectionResize(sizeInfo, target, data);\n      if (onResize) {\n        // defer the callback but not defer to next frame\n        Promise.resolve().then(function () {\n          onResize(sizeInfo, target);\n        });\n      }\n    }\n  }, []);\n\n  // Dynamic observe\n  react__WEBPACK_IMPORTED_MODULE_4__.useEffect(function () {\n    var currentElement = getDom();\n    if (currentElement && !disabled) {\n      (0,_utils_observerUtil__WEBPACK_IMPORTED_MODULE_6__.observe)(currentElement, onInternalResize);\n    }\n    return function () {\n      return (0,_utils_observerUtil__WEBPACK_IMPORTED_MODULE_6__.unobserve)(currentElement, onInternalResize);\n    };\n  }, [elementRef.current, disabled]);\n\n  // ============================ Render ============================\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_DomWrapper__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    ref: wrapperRef\n  }, canRef ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.cloneElement(mergedChildren, {\n    ref: mergedRef\n  }) : mergedChildren);\n}\nvar RefSingleObserver = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.forwardRef(SingleObserver);\nif (true) {\n  RefSingleObserver.displayName = 'SingleObserver';\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RefSingleObserver);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmMtcmVzaXplLW9ic2VydmVyL2VzL1NpbmdsZU9ic2VydmVyL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBcUU7QUFDYjtBQUNIO0FBQ007QUFDNUI7QUFDbUI7QUFDUztBQUNyQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIseUNBQVk7QUFDL0IsbUJBQW1CLHlDQUFZO0FBQy9CLDJCQUEyQiw2Q0FBZ0IsQ0FBQywwREFBaUI7O0FBRTdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQix5Q0FBWTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSw4Q0FBOEMsaURBQW9CLG9CQUFvQiwwREFBVTtBQUNoRztBQUNBLGtCQUFrQiw2REFBYTtBQUMvQjtBQUNBO0FBQ0EsV0FBVyxzRUFBVztBQUN0QjtBQUNBLDBCQUEwQiw2RUFBTyxvQ0FBb0Msc0VBQVcsZ0pBQWdKLHNFQUFXO0FBQzNPO0FBQ0EsRUFBRSxzREFBeUI7QUFDM0I7QUFDQSxHQUFHOztBQUVIO0FBQ0EsaUJBQWlCLHlDQUFZO0FBQzdCOztBQUVBO0FBQ0EseUJBQXlCLDhDQUFpQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0ZBQWEsQ0FBQyxvRkFBYSxHQUFHLFdBQVc7QUFDOUQ7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsRUFBRSw0Q0FBZTtBQUNqQjtBQUNBO0FBQ0EsTUFBTSw0REFBTztBQUNiO0FBQ0E7QUFDQSxhQUFhLDhEQUFTO0FBQ3RCO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLHNCQUFzQixnREFBbUIsQ0FBQyxtREFBVTtBQUNwRDtBQUNBLEdBQUcsd0JBQXdCLCtDQUFrQjtBQUM3QztBQUNBLEdBQUc7QUFDSDtBQUNBLHFDQUFxQyw2Q0FBZ0I7QUFDckQsSUFBSSxJQUFxQztBQUN6QztBQUNBO0FBQ0EsaUVBQWUsaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVuby8uL25vZGVfbW9kdWxlcy9yYy1yZXNpemUtb2JzZXJ2ZXIvZXMvU2luZ2xlT2JzZXJ2ZXIvaW5kZXguanM/YjQzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX29iamVjdFNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0U3ByZWFkMlwiO1xuaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuaW1wb3J0IGZpbmRET01Ob2RlIGZyb20gXCJyYy11dGlsL2VzL0RvbS9maW5kRE9NTm9kZVwiO1xuaW1wb3J0IHsgc3VwcG9ydFJlZiwgdXNlQ29tcG9zZVJlZiB9IGZyb20gXCJyYy11dGlsL2VzL3JlZlwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbkNvbnRleHQgfSBmcm9tIFwiLi4vQ29sbGVjdGlvblwiO1xuaW1wb3J0IHsgb2JzZXJ2ZSwgdW5vYnNlcnZlIH0gZnJvbSBcIi4uL3V0aWxzL29ic2VydmVyVXRpbFwiO1xuaW1wb3J0IERvbVdyYXBwZXIgZnJvbSBcIi4vRG9tV3JhcHBlclwiO1xuZnVuY3Rpb24gU2luZ2xlT2JzZXJ2ZXIocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkO1xuICB2YXIgZWxlbWVudFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIHdyYXBwZXJSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIHZhciBvbkNvbGxlY3Rpb25SZXNpemUgPSBSZWFjdC51c2VDb250ZXh0KENvbGxlY3Rpb25Db250ZXh0KTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gQ2hpbGRyZW4gPT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHZhciBpc1JlbmRlclByb3BzID0gdHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nO1xuICB2YXIgbWVyZ2VkQ2hpbGRyZW4gPSBpc1JlbmRlclByb3BzID8gY2hpbGRyZW4oZWxlbWVudFJlZikgOiBjaGlsZHJlbjtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBTaXplID09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHZhciBzaXplUmVmID0gUmVhY3QudXNlUmVmKHtcbiAgICB3aWR0aDogLTEsXG4gICAgaGVpZ2h0OiAtMSxcbiAgICBvZmZzZXRXaWR0aDogLTEsXG4gICAgb2Zmc2V0SGVpZ2h0OiAtMVxuICB9KTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBSZWYgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHZhciBjYW5SZWYgPSAhaXNSZW5kZXJQcm9wcyAmJiAvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQobWVyZ2VkQ2hpbGRyZW4pICYmIHN1cHBvcnRSZWYobWVyZ2VkQ2hpbGRyZW4pO1xuICB2YXIgb3JpZ2luUmVmID0gY2FuUmVmID8gbWVyZ2VkQ2hpbGRyZW4ucmVmIDogbnVsbDtcbiAgdmFyIG1lcmdlZFJlZiA9IHVzZUNvbXBvc2VSZWYob3JpZ2luUmVmLCBlbGVtZW50UmVmKTtcbiAgdmFyIGdldERvbSA9IGZ1bmN0aW9uIGdldERvbSgpIHtcbiAgICB2YXIgX2VsZW1lbnRSZWYkY3VycmVudDtcbiAgICByZXR1cm4gZmluZERPTU5vZGUoZWxlbWVudFJlZi5jdXJyZW50KSB8fCAoXG4gICAgLy8gU3VwcG9ydCBgbmF0aXZlRWxlbWVudGAgZm9ybWF0XG4gICAgZWxlbWVudFJlZi5jdXJyZW50ICYmIF90eXBlb2YoZWxlbWVudFJlZi5jdXJyZW50KSA9PT0gJ29iamVjdCcgPyBmaW5kRE9NTm9kZSgoX2VsZW1lbnRSZWYkY3VycmVudCA9IGVsZW1lbnRSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2VsZW1lbnRSZWYkY3VycmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2VsZW1lbnRSZWYkY3VycmVudC5uYXRpdmVFbGVtZW50KSA6IG51bGwpIHx8IGZpbmRET01Ob2RlKHdyYXBwZXJSZWYuY3VycmVudCk7XG4gIH07XG4gIFJlYWN0LnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGdldERvbSgpO1xuICB9KTtcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gT2JzZXJ2ZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHZhciBwcm9wc1JlZiA9IFJlYWN0LnVzZVJlZihwcm9wcyk7XG4gIHByb3BzUmVmLmN1cnJlbnQgPSBwcm9wcztcblxuICAvLyBIYW5kbGVyXG4gIHZhciBvbkludGVybmFsUmVzaXplID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHZhciBfcHJvcHNSZWYkY3VycmVudCA9IHByb3BzUmVmLmN1cnJlbnQsXG4gICAgICBvblJlc2l6ZSA9IF9wcm9wc1JlZiRjdXJyZW50Lm9uUmVzaXplLFxuICAgICAgZGF0YSA9IF9wcm9wc1JlZiRjdXJyZW50LmRhdGE7XG4gICAgdmFyIF90YXJnZXQkZ2V0Qm91bmRpbmdDbCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIHdpZHRoID0gX3RhcmdldCRnZXRCb3VuZGluZ0NsLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gX3RhcmdldCRnZXRCb3VuZGluZ0NsLmhlaWdodDtcbiAgICB2YXIgb2Zmc2V0V2lkdGggPSB0YXJnZXQub2Zmc2V0V2lkdGgsXG4gICAgICBvZmZzZXRIZWlnaHQgPSB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgLyoqXG4gICAgICogUmVzaXplIG9ic2VydmVyIHRyaWdnZXIgd2hlbiBjb250ZW50IHNpemUgY2hhbmdlZC5cbiAgICAgKiBJbiBtb3N0IGNhc2Ugd2UganVzdCBjYXJlIGFib3V0IGVsZW1lbnQgc2l6ZSxcbiAgICAgKiBsZXQncyB1c2UgYGJvdW5kYXJ5YCBpbnN0ZWFkIG9mIGBjb250ZW50UmVjdGAgaGVyZSB0byBhdm9pZCBzaGFraW5nLlxuICAgICAqL1xuICAgIHZhciBmaXhlZFdpZHRoID0gTWF0aC5mbG9vcih3aWR0aCk7XG4gICAgdmFyIGZpeGVkSGVpZ2h0ID0gTWF0aC5mbG9vcihoZWlnaHQpO1xuICAgIGlmIChzaXplUmVmLmN1cnJlbnQud2lkdGggIT09IGZpeGVkV2lkdGggfHwgc2l6ZVJlZi5jdXJyZW50LmhlaWdodCAhPT0gZml4ZWRIZWlnaHQgfHwgc2l6ZVJlZi5jdXJyZW50Lm9mZnNldFdpZHRoICE9PSBvZmZzZXRXaWR0aCB8fCBzaXplUmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0ICE9PSBvZmZzZXRIZWlnaHQpIHtcbiAgICAgIHZhciBzaXplID0ge1xuICAgICAgICB3aWR0aDogZml4ZWRXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBmaXhlZEhlaWdodCxcbiAgICAgICAgb2Zmc2V0V2lkdGg6IG9mZnNldFdpZHRoLFxuICAgICAgICBvZmZzZXRIZWlnaHQ6IG9mZnNldEhlaWdodFxuICAgICAgfTtcbiAgICAgIHNpemVSZWYuY3VycmVudCA9IHNpemU7XG5cbiAgICAgIC8vIElFIGlzIHN0cmFuZ2UsIHJpZ2h0P1xuICAgICAgdmFyIG1lcmdlZE9mZnNldFdpZHRoID0gb2Zmc2V0V2lkdGggPT09IE1hdGgucm91bmQod2lkdGgpID8gd2lkdGggOiBvZmZzZXRXaWR0aDtcbiAgICAgIHZhciBtZXJnZWRPZmZzZXRIZWlnaHQgPSBvZmZzZXRIZWlnaHQgPT09IE1hdGgucm91bmQoaGVpZ2h0KSA/IGhlaWdodCA6IG9mZnNldEhlaWdodDtcbiAgICAgIHZhciBzaXplSW5mbyA9IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgc2l6ZSksIHt9LCB7XG4gICAgICAgIG9mZnNldFdpZHRoOiBtZXJnZWRPZmZzZXRXaWR0aCxcbiAgICAgICAgb2Zmc2V0SGVpZ2h0OiBtZXJnZWRPZmZzZXRIZWlnaHRcbiAgICAgIH0pO1xuXG4gICAgICAvLyBMZXQgY29sbGVjdGlvbiBrbm93IHdoYXQgaGFwcGVuZWRcbiAgICAgIG9uQ29sbGVjdGlvblJlc2l6ZSA9PT0gbnVsbCB8fCBvbkNvbGxlY3Rpb25SZXNpemUgPT09IHZvaWQgMCB8fCBvbkNvbGxlY3Rpb25SZXNpemUoc2l6ZUluZm8sIHRhcmdldCwgZGF0YSk7XG4gICAgICBpZiAob25SZXNpemUpIHtcbiAgICAgICAgLy8gZGVmZXIgdGhlIGNhbGxiYWNrIGJ1dCBub3QgZGVmZXIgdG8gbmV4dCBmcmFtZVxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBvblJlc2l6ZShzaXplSW5mbywgdGFyZ2V0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgLy8gRHluYW1pYyBvYnNlcnZlXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGN1cnJlbnRFbGVtZW50ID0gZ2V0RG9tKCk7XG4gICAgaWYgKGN1cnJlbnRFbGVtZW50ICYmICFkaXNhYmxlZCkge1xuICAgICAgb2JzZXJ2ZShjdXJyZW50RWxlbWVudCwgb25JbnRlcm5hbFJlc2l6ZSk7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdW5vYnNlcnZlKGN1cnJlbnRFbGVtZW50LCBvbkludGVybmFsUmVzaXplKTtcbiAgICB9O1xuICB9LCBbZWxlbWVudFJlZi5jdXJyZW50LCBkaXNhYmxlZF0pO1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gUmVuZGVyID09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERvbVdyYXBwZXIsIHtcbiAgICByZWY6IHdyYXBwZXJSZWZcbiAgfSwgY2FuUmVmID8gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChtZXJnZWRDaGlsZHJlbiwge1xuICAgIHJlZjogbWVyZ2VkUmVmXG4gIH0pIDogbWVyZ2VkQ2hpbGRyZW4pO1xufVxudmFyIFJlZlNpbmdsZU9ic2VydmVyID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoU2luZ2xlT2JzZXJ2ZXIpO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgUmVmU2luZ2xlT2JzZXJ2ZXIuZGlzcGxheU5hbWUgPSAnU2luZ2xlT2JzZXJ2ZXInO1xufVxuZXhwb3J0IGRlZmF1bHQgUmVmU2luZ2xlT2JzZXJ2ZXI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rc-resize-observer/es/SingleObserver/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/rc-resize-observer/es/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-resize-observer/es/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   _rs: () => (/* reexport safe */ _utils_observerUtil__WEBPACK_IMPORTED_MODULE_6__._rs),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"(ssr)/./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-util/es/Children/toArray */ \"(ssr)/./node_modules/rc-util/es/Children/toArray.js\");\n/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/es/warning */ \"(ssr)/./node_modules/rc-util/es/warning.js\");\n/* harmony import */ var _SingleObserver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SingleObserver */ \"(ssr)/./node_modules/rc-resize-observer/es/SingleObserver/index.js\");\n/* harmony import */ var _Collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Collection */ \"(ssr)/./node_modules/rc-resize-observer/es/Collection.js\");\n/* harmony import */ var _utils_observerUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/observerUtil */ \"(ssr)/./node_modules/rc-resize-observer/es/utils/observerUtil.js\");\n\n\n\n\n\n\nvar INTERNAL_PREFIX_KEY = 'rc-observer-key';\n\n\nfunction ResizeObserver(props, ref) {\n  var children = props.children;\n  var childNodes = typeof children === 'function' ? [children] : (0,rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(children);\n  if (true) {\n    if (childNodes.length > 1) {\n      (0,rc_util_es_warning__WEBPACK_IMPORTED_MODULE_3__.warning)(false, 'Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.');\n    } else if (childNodes.length === 0) {\n      (0,rc_util_es_warning__WEBPACK_IMPORTED_MODULE_3__.warning)(false, '`children` of ResizeObserver is empty. Nothing is in observe.');\n    }\n  }\n  return childNodes.map(function (child, index) {\n    var key = (child === null || child === void 0 ? void 0 : child.key) || \"\".concat(INTERNAL_PREFIX_KEY, \"-\").concat(index);\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_SingleObserver__WEBPACK_IMPORTED_MODULE_4__[\"default\"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n      key: key,\n      ref: index === 0 ? ref : undefined\n    }), child);\n  });\n}\nvar RefResizeObserver = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(ResizeObserver);\nif (true) {\n  RefResizeObserver.displayName = 'ResizeObserver';\n}\nRefResizeObserver.Collection = _Collection__WEBPACK_IMPORTED_MODULE_5__.Collection;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RefResizeObserver);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmMtcmVzaXplLW9ic2VydmVyL2VzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDM0I7QUFDbUI7QUFDTDtBQUNDO0FBQ0o7QUFDMUM7QUFDMkM7QUFFckM7QUFDTjtBQUNBO0FBQ0EsaUVBQWlFLHVFQUFPO0FBQ3hFLE1BQU0sSUFBcUM7QUFDM0M7QUFDQSxNQUFNLDJEQUFPO0FBQ2IsTUFBTTtBQUNOLE1BQU0sMkRBQU87QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnREFBbUIsQ0FBQyx1REFBYyxFQUFFLDhFQUFRLEdBQUc7QUFDdkU7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxxQ0FBcUMsNkNBQWdCO0FBQ3JELElBQUksSUFBcUM7QUFDekM7QUFDQTtBQUNBLCtCQUErQixtREFBVTtBQUN6QyxpRUFBZSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZW5vLy4vbm9kZV9tb2R1bGVzL3JjLXJlc2l6ZS1vYnNlcnZlci9lcy9pbmRleC5qcz8zYjc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRvQXJyYXkgZnJvbSBcInJjLXV0aWwvZXMvQ2hpbGRyZW4vdG9BcnJheVwiO1xuaW1wb3J0IHsgd2FybmluZyB9IGZyb20gXCJyYy11dGlsL2VzL3dhcm5pbmdcIjtcbmltcG9ydCBTaW5nbGVPYnNlcnZlciBmcm9tIFwiLi9TaW5nbGVPYnNlcnZlclwiO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gXCIuL0NvbGxlY3Rpb25cIjtcbnZhciBJTlRFUk5BTF9QUkVGSVhfS0VZID0gJ3JjLW9ic2VydmVyLWtleSc7XG5pbXBvcnQgeyBfcnMgfSBmcm9tIFwiLi91dGlscy9vYnNlcnZlclV0aWxcIjtcbmV4cG9ydCB7IC8qKiBAcHJpdmF0ZSBUZXN0IG9ubHkgZm9yIG1vY2sgdHJpZ2dlciByZXNpemUgZXZlbnQgKi9cbl9ycyB9O1xuZnVuY3Rpb24gUmVzaXplT2JzZXJ2ZXIocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcbiAgdmFyIGNoaWxkTm9kZXMgPSB0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicgPyBbY2hpbGRyZW5dIDogdG9BcnJheShjaGlsZHJlbik7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgd2FybmluZyhmYWxzZSwgJ0ZpbmQgbW9yZSB0aGFuIG9uZSBjaGlsZCBub2RlIHdpdGggYGNoaWxkcmVuYCBpbiBSZXNpemVPYnNlcnZlci4gUGxlYXNlIHVzZSBSZXNpemVPYnNlcnZlci5Db2xsZWN0aW9uIGluc3RlYWQuJyk7XG4gICAgfSBlbHNlIGlmIChjaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgd2FybmluZyhmYWxzZSwgJ2BjaGlsZHJlbmAgb2YgUmVzaXplT2JzZXJ2ZXIgaXMgZW1wdHkuIE5vdGhpbmcgaXMgaW4gb2JzZXJ2ZS4nKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNoaWxkTm9kZXMubWFwKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICB2YXIga2V5ID0gKGNoaWxkID09PSBudWxsIHx8IGNoaWxkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjaGlsZC5rZXkpIHx8IFwiXCIuY29uY2F0KElOVEVSTkFMX1BSRUZJWF9LRVksIFwiLVwiKS5jb25jYXQoaW5kZXgpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTaW5nbGVPYnNlcnZlciwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIHJlZjogaW5kZXggPT09IDAgPyByZWYgOiB1bmRlZmluZWRcbiAgICB9KSwgY2hpbGQpO1xuICB9KTtcbn1cbnZhciBSZWZSZXNpemVPYnNlcnZlciA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKFJlc2l6ZU9ic2VydmVyKTtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFJlZlJlc2l6ZU9ic2VydmVyLmRpc3BsYXlOYW1lID0gJ1Jlc2l6ZU9ic2VydmVyJztcbn1cblJlZlJlc2l6ZU9ic2VydmVyLkNvbGxlY3Rpb24gPSBDb2xsZWN0aW9uO1xuZXhwb3J0IGRlZmF1bHQgUmVmUmVzaXplT2JzZXJ2ZXI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rc-resize-observer/es/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/rc-resize-observer/es/utils/observerUtil.js":
/*!******************************************************************!*\
  !*** ./node_modules/rc-resize-observer/es/utils/observerUtil.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   _el: () => (/* binding */ _el),\n/* harmony export */   _rs: () => (/* binding */ _rs),\n/* harmony export */   observe: () => (/* binding */ observe),\n/* harmony export */   unobserve: () => (/* binding */ unobserve)\n/* harmony export */ });\n/* harmony import */ var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resize-observer-polyfill */ \"(ssr)/./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js\");\n\n// =============================== Const ===============================\nvar elementListeners = new Map();\nfunction onResize(entities) {\n  entities.forEach(function (entity) {\n    var _elementListeners$get;\n    var target = entity.target;\n    (_elementListeners$get = elementListeners.get(target)) === null || _elementListeners$get === void 0 || _elementListeners$get.forEach(function (listener) {\n      return listener(target);\n    });\n  });\n}\n\n// Note: ResizeObserver polyfill not support option to measure border-box resize\nvar resizeObserver = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_0__[\"default\"](onResize);\n\n// Dev env only\nvar _el =  true ? elementListeners : 0; // eslint-disable-line\nvar _rs =  true ? onResize : 0; // eslint-disable-line\n\n// ============================== Observe ==============================\nfunction observe(element, callback) {\n  if (!elementListeners.has(element)) {\n    elementListeners.set(element, new Set());\n    resizeObserver.observe(element);\n  }\n  elementListeners.get(element).add(callback);\n}\nfunction unobserve(element, callback) {\n  if (elementListeners.has(element)) {\n    elementListeners.get(element).delete(callback);\n    if (!elementListeners.get(element).size) {\n      resizeObserver.unobserve(element);\n      elementListeners.delete(element);\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmMtcmVzaXplLW9ic2VydmVyL2VzL3V0aWxzL29ic2VydmVyVXRpbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBLHlCQUF5QixnRUFBYzs7QUFFdkM7QUFDTyxVQUFVLEtBQXFDLHNCQUFzQixDQUFJLEVBQUU7QUFDM0UsVUFBVSxLQUFxQyxjQUFjLENBQUksRUFBRTs7QUFFMUU7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlbm8vLi9ub2RlX21vZHVsZXMvcmMtcmVzaXplLW9ic2VydmVyL2VzL3V0aWxzL29ic2VydmVyVXRpbC5qcz83OTJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXNpemVPYnNlcnZlciBmcm9tICdyZXNpemUtb2JzZXJ2ZXItcG9seWZpbGwnO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBDb25zdCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG52YXIgZWxlbWVudExpc3RlbmVycyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIG9uUmVzaXplKGVudGl0aWVzKSB7XG4gIGVudGl0aWVzLmZvckVhY2goZnVuY3Rpb24gKGVudGl0eSkge1xuICAgIHZhciBfZWxlbWVudExpc3RlbmVycyRnZXQ7XG4gICAgdmFyIHRhcmdldCA9IGVudGl0eS50YXJnZXQ7XG4gICAgKF9lbGVtZW50TGlzdGVuZXJzJGdldCA9IGVsZW1lbnRMaXN0ZW5lcnMuZ2V0KHRhcmdldCkpID09PSBudWxsIHx8IF9lbGVtZW50TGlzdGVuZXJzJGdldCA9PT0gdm9pZCAwIHx8IF9lbGVtZW50TGlzdGVuZXJzJGdldC5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIGxpc3RlbmVyKHRhcmdldCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vLyBOb3RlOiBSZXNpemVPYnNlcnZlciBwb2x5ZmlsbCBub3Qgc3VwcG9ydCBvcHRpb24gdG8gbWVhc3VyZSBib3JkZXItYm94IHJlc2l6ZVxudmFyIHJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKG9uUmVzaXplKTtcblxuLy8gRGV2IGVudiBvbmx5XG5leHBvcnQgdmFyIF9lbCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBlbGVtZW50TGlzdGVuZXJzIDogbnVsbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuZXhwb3J0IHZhciBfcnMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gb25SZXNpemUgOiBudWxsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBPYnNlcnZlID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgaWYgKCFlbGVtZW50TGlzdGVuZXJzLmhhcyhlbGVtZW50KSkge1xuICAgIGVsZW1lbnRMaXN0ZW5lcnMuc2V0KGVsZW1lbnQsIG5ldyBTZXQoKSk7XG4gICAgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgfVxuICBlbGVtZW50TGlzdGVuZXJzLmdldChlbGVtZW50KS5hZGQoY2FsbGJhY2spO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVub2JzZXJ2ZShlbGVtZW50LCBjYWxsYmFjaykge1xuICBpZiAoZWxlbWVudExpc3RlbmVycy5oYXMoZWxlbWVudCkpIHtcbiAgICBlbGVtZW50TGlzdGVuZXJzLmdldChlbGVtZW50KS5kZWxldGUoY2FsbGJhY2spO1xuICAgIGlmICghZWxlbWVudExpc3RlbmVycy5nZXQoZWxlbWVudCkuc2l6ZSkge1xuICAgICAgcmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgZWxlbWVudExpc3RlbmVycy5kZWxldGUoZWxlbWVudCk7XG4gICAgfVxuICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/rc-resize-observer/es/utils/observerUtil.js\n");

/***/ })

};
;
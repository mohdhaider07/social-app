"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/dashboard",{

/***/ "./components/cards/followingPeople.js":
/*!*********************************************!*\
  !*** ./components/cards/followingPeople.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar FollowingPeople = function(param) {\n    var people = param.people, handleUnfollow = param.handleUnfollow;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showPeople = ref[0], setShowPeople = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-1 p-2 shadow-md \",\n                style: {\n                    cursor: \"pointer\"\n                },\n                onClick: function() {\n                    setShowPeople(!showPeople);\n                },\n                children: [\n                    people.length,\n                    \" Following \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\afzal\\\\OneDrive\\\\Desktop\\\\MERN\\\\client\\\\components\\\\cards\\\\followingPeople.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this),\n            showPeople && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.List, {\n                itemLayout: \"horizontal\",\n                dataSource: people,\n                renderItem: function(user) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.List.Item, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.List.Item.Meta, {\n                            avatar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                                href: \"/user/\".concat(user._id),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"items-center\",\n                                    children: user.image ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Avatar, {\n                                        src: user.image.url\n                                    }, void 0, false, void 0, void 0) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Avatar, {\n                                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.UserOutlined, {}, void 0, false, void 0, void 0)\n                                    }, void 0, false, void 0, void 0)\n                                }, void 0, false, void 0, void 0)\n                            }, void 0, false, void 0, void 0),\n                            title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-between \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                                        href: \"/user/\".concat(user._id),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            style: {\n                                                cursor: \"pointer\"\n                                            },\n                                            children: user.name\n                                        }, void 0, false, void 0, void 0)\n                                    }, void 0, false, void 0, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            cursor: \"pointer\"\n                                        },\n                                        onClick: function() {\n                                            return handleUnfollow(user);\n                                        },\n                                        className: \"text-blue-600\",\n                                        href: \"#\",\n                                        children: \"Unfollow\"\n                                    }, void 0, false, void 0, void 0)\n                                ]\n                            }, void 0, true, void 0, void 0)\n                        }, void 0, false, void 0, void 0)\n                    }, void 0, false, void 0, void 0);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\afzal\\\\OneDrive\\\\Desktop\\\\MERN\\\\client\\\\components\\\\cards\\\\followingPeople.js\",\n                lineNumber: 15,\n                columnNumber: 23\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(FollowingPeople, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = FollowingPeople;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FollowingPeople);\nvar _c;\n$RefreshReg$(_c, \"FollowingPeople\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzL2ZvbGxvd2luZ1Blb3BsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQWlDO0FBQ0c7QUFDVTs7QUFFOUMsSUFBTUksZUFBZSxHQUFHLGdCQUE2QjtRQUEzQkMsTUFBTSxTQUFOQSxNQUFNLEVBQUNDLGNBQWMsU0FBZEEsY0FBYzs7SUFDM0MsSUFBaUNOLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFMcEQsVUFLcUIsR0FBZ0JBLEdBQWUsR0FBL0IsRUFMckIsYUFLbUMsR0FBRUEsR0FBZSxHQUFqQjtJQUcvQixxQkFDRTs7MEJBQ0EsOERBQUNTLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxxQkFBcUI7Z0JBQUVDLEtBQUssRUFBRTtvQkFBQ0MsTUFBTSxFQUFFLFNBQVM7aUJBQUM7Z0JBQUVDLE9BQU8sRUFBRSxXQUFJO29CQUM3RUwsYUFBYSxDQUFDLENBQUNELFVBQVUsQ0FBQztpQkFFekI7O29CQUFHRixNQUFNLENBQUNTLE1BQU07b0JBQUMsYUFBVzs7Ozs7O3FCQUFNO1lBQ25DUCxVQUFVLGtCQUFJLDhEQUFDTCxzQ0FBSTtnQkFDbkJhLFVBQVUsRUFBQyxZQUFZO2dCQUN2QkMsVUFBVSxFQUFFWCxNQUFNO2dCQUNsQlksVUFBVSxFQUFFLFNBQUNDLElBQUk7eUNBQ25CLDhEQUFDaEIsMkNBQVM7a0NBQ1IsNEVBQUNBLGdEQUFjOzRCQUNibUIsTUFBTSxnQkFDSiw4REFBQ0MsSUFBSTtnQ0FBQ0MsSUFBSSxFQUFFLFFBQU8sQ0FBVyxPQUFUTCxJQUFJLENBQUNNLEdBQUcsQ0FBRTswQ0FDakMsNEVBQUNmLEtBQUc7b0NBQUNDLFNBQVMsRUFBQyxjQUFjOzhDQUN4QlEsSUFBSSxDQUFDTyxLQUFLLGlCQUFFLDhEQUFDeEIsd0NBQU07d0NBQUN5QixHQUFHLEVBQUVSLElBQUksQ0FBQ08sS0FBSyxDQUFDRSxHQUFHO3FFQUFHLGlCQUFHLDhEQUFDMUIsd0NBQU07d0NBQUMyQixJQUFJLGdCQUFFLDhEQUFDekIsMkRBQVksb0NBQUc7cUVBQUk7aUVBQzlFOzZEQUNDOzRCQUVQMEIsS0FBSyxnQkFBRSw4REFBQ3BCLEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxvQ0FBb0M7O2tEQUN2RCw4REFBQ1ksSUFBSTt3Q0FBQ0MsSUFBSSxFQUFFLFFBQU8sQ0FBVyxPQUFUTCxJQUFJLENBQUNNLEdBQUcsQ0FBRTtrREFDaEMsNEVBQUNNLE1BQUk7NENBQUNuQixLQUFLLEVBQUU7Z0RBQUNDLE1BQU0sRUFBRSxTQUFTOzZDQUFDO3NEQUFJTSxJQUFJLENBQUNhLElBQUk7eUVBQVE7cUVBQzlDO2tEQUNQLDhEQUFDRCxNQUFJO3dDQUFDbkIsS0FBSyxFQUFFOzRDQUFDQyxNQUFNLEVBQUUsU0FBUzt5Q0FBQzt3Q0FBRUMsT0FBTyxFQUFFO21EQUFJUCxjQUFjLENBQUNZLElBQUksQ0FBQzt5Q0FBQTt3Q0FBRVIsU0FBUyxFQUFDLGVBQWU7d0NBQUNhLElBQUksRUFBQyxHQUFHO2tEQUFDLFVBQVE7cUVBQU87OzREQUFNO3lEQUUvSDtxREFDUTtpQkFDYjs7Ozs7cUJBQ0s7O29CQUNBLENBQ0o7Q0FDTDtHQW5DS25CLGVBQWU7QUFBZkEsS0FBQUEsZUFBZTtBQW9DckIsK0RBQWVBLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NhcmRzL2ZvbGxvd2luZ1Blb3BsZS5qcz83NGE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBdmF0YXIgLExpc3QgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHtVc2VyT3V0bGluZWR9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJ1xyXG5cclxuY29uc3QgRm9sbG93aW5nUGVvcGxlID0gKHtwZW9wbGUsaGFuZGxlVW5mb2xsb3d9KSA9PiB7XHJcbiAgICBjb25zdCBbc2hvd1Blb3BsZSxzZXRTaG93UGVvcGxlXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0xIHAtMiBzaGFkb3ctbWQgXCIgIHN0eWxlPXt7Y3Vyc29yOiBcInBvaW50ZXJcIn19IG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgc2V0U2hvd1Blb3BsZSghc2hvd1Blb3BsZSlcclxuICAgICAgICBcclxuICAgICAgICB9fT57cGVvcGxlLmxlbmd0aH0gRm9sbG93aW5nIDwvZGl2PlxyXG4gICAgICAge3Nob3dQZW9wbGUgJiYgPExpc3RcclxuICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgZGF0YVNvdXJjZT17cGVvcGxlfVxyXG4gICAgICAgIHJlbmRlckl0ZW09eyh1c2VyKSA9PiAoXHJcbiAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgPExpc3QuSXRlbS5NZXRhXHJcbiAgICAgICAgICBhdmF0YXI9e1xyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3VzZXIvJHt1c2VyLl9pZH1gfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgeyB1c2VyLmltYWdlPyg8QXZhdGFyIHNyYz17dXNlci5pbWFnZS51cmx9Lz4pOig8QXZhdGFyIGljb249ezxVc2VyT3V0bGluZWQgLz4gfS8+KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGl0bGU9ezxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gJz5cclxuICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlci8ke3VzZXIuX2lkfWB9PlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCJ9fSA+e3VzZXIubmFtZX08L3NwYW4+IFxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y3Vyc29yOiBcInBvaW50ZXJcIn19IG9uQ2xpY2s9eygpPT5oYW5kbGVVbmZvbGxvdyh1c2VyKX0gY2xhc3NOYW1lPSd0ZXh0LWJsdWUtNjAwJyBocmVmPScjJz5VbmZvbGxvdzwvc3Bhbj48L2Rpdj59XHJcbiAgICAgICAgIFxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgKX1cclxuICAgICAgICAvPn1cclxuICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dpbmdQZW9wbGU7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQXZhdGFyIiwiTGlzdCIsIlVzZXJPdXRsaW5lZCIsIkZvbGxvd2luZ1Blb3BsZSIsInBlb3BsZSIsImhhbmRsZVVuZm9sbG93Iiwic2hvd1Blb3BsZSIsInNldFNob3dQZW9wbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImN1cnNvciIsIm9uQ2xpY2siLCJsZW5ndGgiLCJpdGVtTGF5b3V0IiwiZGF0YVNvdXJjZSIsInJlbmRlckl0ZW0iLCJ1c2VyIiwiSXRlbSIsIk1ldGEiLCJhdmF0YXIiLCJMaW5rIiwiaHJlZiIsIl9pZCIsImltYWdlIiwic3JjIiwidXJsIiwiaWNvbiIsInRpdGxlIiwic3BhbiIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/cards/followingPeople.js\n");

/***/ })

});
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

/***/ "./components/cards/followerPeople.js":
/*!********************************************!*\
  !*** ./components/cards/followerPeople.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context */ \"./context/index.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar FollowerPeople = function(param) {\n    var people = param.people, handleFollow = param.handleFollow, handleUnfollow = param.handleUnfollow;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showPeople = ref[0], setShowPeople = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.UserContext), state = ref1[0];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-1 p-2 shadow-md \",\n                style: {\n                    cursor: \"pointer\"\n                },\n                onClick: function() {\n                    setShowPeople(!showPeople);\n                },\n                children: [\n                    people.length,\n                    \" Followers\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\afzal\\\\OneDrive\\\\Desktop\\\\MERN\\\\client\\\\components\\\\cards\\\\followerPeople.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, _this),\n            showPeople && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.List, {\n                itemLayout: \"horizontal\",\n                dataSource: people,\n                renderItem: function(user) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.List.Item, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.List.Item.Meta, {\n                            avatar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                                href: \"/user/\".concat(user._id),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"items-center\",\n                                    children: user.image ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Avatar, {\n                                        src: user.image.url\n                                    }, void 0, false, void 0, void 0) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_3__.Avatar, {\n                                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.UserOutlined, {}, void 0, false, void 0, void 0)\n                                    }, void 0, false, void 0, void 0)\n                                }, void 0, false, void 0, void 0)\n                            }, void 0, false, void 0, void 0),\n                            title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-between \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                                        href: \"/user/\".concat(user._id),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            style: {\n                                                cursor: \"pointer\"\n                                            },\n                                            children: user.name\n                                        }, void 0, false, void 0, void 0)\n                                    }, void 0, false, void 0, void 0),\n                                    state && state.user && state.user.following.includes(user._id) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            cursor: \"pointer\"\n                                        },\n                                        onClick: function() {\n                                            return handleUnfollow(user);\n                                        },\n                                        className: \"text-blue-600\",\n                                        href: \"#\",\n                                        children: \"Unfollow\"\n                                    }, void 0, false, void 0, void 0) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            cursor: \"pointer\"\n                                        },\n                                        onClick: function() {\n                                            return handleFollow(user);\n                                        },\n                                        className: \"text-blue-600\",\n                                        href: \"#\",\n                                        children: \"Followback\"\n                                    }, void 0, false, void 0, void 0)\n                                ]\n                            }, void 0, true, void 0, void 0)\n                        }, void 0, false, void 0, void 0)\n                    }, void 0, false, void 0, void 0);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\afzal\\\\OneDrive\\\\Desktop\\\\MERN\\\\client\\\\components\\\\cards\\\\followerPeople.js\",\n                lineNumber: 16,\n                columnNumber: 23\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(FollowerPeople, \"wKeupA0BBTWJmQqXPW/5tyE610Y=\");\n_c = FollowerPeople;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FollowerPeople);\nvar _c;\n$RefreshReg$(_c, \"FollowerPeople\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzL2ZvbGxvd2VyUGVvcGxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQTRDO0FBQ1I7QUFDVTtBQUNGOztBQUM1QyxJQUFNTSxjQUFjLEdBQUcsZ0JBQTBDO1FBQXhDQyxNQUFNLFNBQU5BLE1BQU0sRUFBQ0MsWUFBWSxTQUFaQSxZQUFZLEVBQUNDLGNBQWMsU0FBZEEsY0FBYzs7SUFDdkQsSUFBaUNULEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFMcEQsVUFLcUIsR0FBZ0JBLEdBQWUsR0FBL0IsRUFMckIsYUFLbUMsR0FBRUEsR0FBZSxHQUFqQjtJQUMvQixJQUFhQyxJQUF1QixHQUF2QkEsaURBQVUsQ0FBQ0ksaURBQVcsQ0FBQyxFQU54QyxLQU1lLEdBQUVKLElBQXVCLEdBQXpCO0lBRVgscUJBQ0U7OzBCQUVBLDhEQUFDWSxLQUFHO2dCQUFDQyxTQUFTLEVBQUMscUJBQXFCO2dCQUFFQyxLQUFLLEVBQUU7b0JBQUNDLE1BQU0sRUFBRSxTQUFTO2lCQUFDO2dCQUFFQyxPQUFPLEVBQUUsV0FBSTtvQkFDN0VOLGFBQWEsQ0FBQyxDQUFDRCxVQUFVLENBQUM7aUJBRXpCOztvQkFBR0gsTUFBTSxDQUFDVyxNQUFNO29CQUFDLFlBQVU7Ozs7OztxQkFBTTtZQUNsQ1IsVUFBVSxrQkFBSSw4REFBQ1Asc0NBQUk7Z0JBQ25CZ0IsVUFBVSxFQUFDLFlBQVk7Z0JBQ3ZCQyxVQUFVLEVBQUViLE1BQU07Z0JBQ2xCYyxVQUFVLEVBQUUsU0FBQ0MsSUFBSTt5Q0FDbkIsOERBQUNuQiwyQ0FBUztrQ0FDUiw0RUFBQ0EsZ0RBQWM7NEJBQ2JzQixNQUFNLGdCQUNKLDhEQUFDQyxJQUFJO2dDQUFDQyxJQUFJLEVBQUUsUUFBTyxDQUFXLE9BQVRMLElBQUksQ0FBQ00sR0FBRyxDQUFFOzBDQUNqQyw0RUFBQ2YsS0FBRztvQ0FBQ0MsU0FBUyxFQUFDLGNBQWM7OENBQ3hCUSxJQUFJLENBQUNPLEtBQUssaUJBQUUsOERBQUMzQix3Q0FBTTt3Q0FBQzRCLEdBQUcsRUFBRVIsSUFBSSxDQUFDTyxLQUFLLENBQUNFLEdBQUc7cUVBQUcsaUJBQUcsOERBQUM3Qix3Q0FBTTt3Q0FBQzhCLElBQUksZ0JBQUUsOERBQUM1QiwyREFBWSxvQ0FBRztxRUFBSTtpRUFDOUU7NkRBQU87NEJBSWI2QixLQUFLLGdCQUFFLDhEQUFDcEIsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLG9DQUFvQzs7a0RBQ3ZELDhEQUFDWSxJQUFJO3dDQUFDQyxJQUFJLEVBQUUsUUFBTyxDQUFXLE9BQVRMLElBQUksQ0FBQ00sR0FBRyxDQUFFO2tEQUNoQyw0RUFBQ00sTUFBSTs0Q0FBQ25CLEtBQUssRUFBRTtnREFBQ0MsTUFBTSxFQUFFLFNBQVM7NkNBQUM7c0RBQUlNLElBQUksQ0FBQ2EsSUFBSTt5RUFBUTtxRUFBTztvQ0FDckV2QixLQUFLLElBQUdBLEtBQUssQ0FBQ1UsSUFBSSxJQUFJVixLQUFLLENBQUNVLElBQUksQ0FBQ2MsU0FBUyxDQUFDQyxRQUFRLENBQUNmLElBQUksQ0FBQ00sR0FBRyxDQUFDLGlCQUFHLDhEQUFDTSxNQUFJO3dDQUFDbkIsS0FBSyxFQUFFOzRDQUFDQyxNQUFNLEVBQUUsU0FBUzt5Q0FBQzt3Q0FBRUMsT0FBTyxFQUFFO21EQUFJUixjQUFjLENBQUNhLElBQUksQ0FBQzt5Q0FBQTt3Q0FBRVIsU0FBUyxFQUFDLGVBQWU7d0NBQUNhLElBQUksRUFBQyxHQUFHO2tEQUFDLFVBQVE7cUVBQU8saUJBQUksOERBQUNPLE1BQUk7d0NBQUNuQixLQUFLLEVBQUU7NENBQUNDLE1BQU0sRUFBRSxTQUFTO3lDQUFDO3dDQUFFQyxPQUFPLEVBQUU7bURBQUlULFlBQVksQ0FBQ2MsSUFBSSxDQUFDO3lDQUFBO3dDQUFFUixTQUFTLEVBQUMsZUFBZTt3Q0FBQ2EsSUFBSSxFQUFDLEdBQUc7a0RBQUMsWUFBVTtxRUFBTzs7NERBR3JTO3lEQUVOO3FEQUNRO2lCQUNiOzs7OztxQkFDSzs7b0JBQ0EsQ0FDSjtDQUNMO0dBdkNLckIsY0FBYztBQUFkQSxLQUFBQSxjQUFjO0FBd0NwQiwrREFBZUEsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2FyZHMvZm9sbG93ZXJQZW9wbGUuanM/Y2I1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSx1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBdmF0YXIgLExpc3QgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHtVc2VyT3V0bGluZWR9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJ1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQnO1xyXG5jb25zdCBGb2xsb3dlclBlb3BsZSA9ICh7cGVvcGxlLGhhbmRsZUZvbGxvdyxoYW5kbGVVbmZvbGxvd30pID0+IHtcclxuICAgIGNvbnN0IFtzaG93UGVvcGxlLHNldFNob3dQZW9wbGVdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0W3N0YXRlXT11c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMSBwLTIgc2hhZG93LW1kIFwiICBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCJ9fSBvbkNsaWNrPXsoKT0+e1xyXG4gICAgICAgIHNldFNob3dQZW9wbGUoIXNob3dQZW9wbGUpXHJcbiAgICAgICAgXHJcbiAgICAgICAgfX0+e3Blb3BsZS5sZW5ndGh9IEZvbGxvd2VyczwvZGl2PlxyXG4gICAgICAge3Nob3dQZW9wbGUgJiYgPExpc3RcclxuICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgZGF0YVNvdXJjZT17cGVvcGxlfVxyXG4gICAgICAgIHJlbmRlckl0ZW09eyh1c2VyKSA9PiAoXHJcbiAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgPExpc3QuSXRlbS5NZXRhXHJcbiAgICAgICAgICBhdmF0YXI9e1xyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3VzZXIvJHt1c2VyLl9pZH1gfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgeyB1c2VyLmltYWdlPyg8QXZhdGFyIHNyYz17dXNlci5pbWFnZS51cmx9Lz4pOig8QXZhdGFyIGljb249ezxVc2VyT3V0bGluZWQgLz4gfS8+KX1cclxuICAgICAgICAgIDwvZGl2PjwvTGluaz5cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgdGl0bGU9ezxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gJz5cclxuICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlci8ke3VzZXIuX2lkfWB9PlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCJ9fSA+e3VzZXIubmFtZX08L3NwYW4+PC9MaW5rPlxyXG4geyBzdGF0ZSAmJnN0YXRlLnVzZXIgJiYgc3RhdGUudXNlci5mb2xsb3dpbmcuaW5jbHVkZXModXNlci5faWQpPyggPHNwYW4gc3R5bGU9e3tjdXJzb3I6IFwicG9pbnRlclwifX0gb25DbGljaz17KCk9PmhhbmRsZVVuZm9sbG93KHVzZXIpfSBjbGFzc05hbWU9J3RleHQtYmx1ZS02MDAnIGhyZWY9JyMnPlVuZm9sbG93PC9zcGFuPik6KCA8c3BhbiBzdHlsZT17e2N1cnNvcjogXCJwb2ludGVyXCJ9fSBvbkNsaWNrPXsoKT0+aGFuZGxlRm9sbG93KHVzZXIpfSBjbGFzc05hbWU9J3RleHQtYmx1ZS02MDAnIGhyZWY9JyMnPkZvbGxvd2JhY2s8L3NwYW4+KX1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgIFxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgKX1cclxuICAgICAgICAvPn1cclxuICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dlclBlb3BsZTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiQXZhdGFyIiwiTGlzdCIsIlVzZXJPdXRsaW5lZCIsIlVzZXJDb250ZXh0IiwiRm9sbG93ZXJQZW9wbGUiLCJwZW9wbGUiLCJoYW5kbGVGb2xsb3ciLCJoYW5kbGVVbmZvbGxvdyIsInNob3dQZW9wbGUiLCJzZXRTaG93UGVvcGxlIiwic3RhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImN1cnNvciIsIm9uQ2xpY2siLCJsZW5ndGgiLCJpdGVtTGF5b3V0IiwiZGF0YVNvdXJjZSIsInJlbmRlckl0ZW0iLCJ1c2VyIiwiSXRlbSIsIk1ldGEiLCJhdmF0YXIiLCJMaW5rIiwiaHJlZiIsIl9pZCIsImltYWdlIiwic3JjIiwidXJsIiwiaWNvbiIsInRpdGxlIiwic3BhbiIsIm5hbWUiLCJmb2xsb3dpbmciLCJpbmNsdWRlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/cards/followerPeople.js\n");

/***/ })

});
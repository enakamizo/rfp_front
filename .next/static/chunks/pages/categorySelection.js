/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/categorySelection"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5C81902%5CDesktop%5Crfp_front-main%5Crfp_front%5Cpages%5CcategorySelection.js&page=%2FcategorySelection!":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5C81902%5CDesktop%5Crfp_front-main%5Crfp_front%5Cpages%5CcategorySelection.js&page=%2FcategorySelection! ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/categorySelection\",\n      function () {\n        return __webpack_require__(/*! ./pages/categorySelection.js */ \"./pages/categorySelection.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/categorySelection\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD1DJTNBJTVDVXNlcnMlNUM4MTkwMiU1Q0Rlc2t0b3AlNUNyZnBfZnJvbnQtbWFpbiU1Q3JmcF9mcm9udCU1Q3BhZ2VzJTVDY2F0ZWdvcnlTZWxlY3Rpb24uanMmcGFnZT0lMkZjYXRlZ29yeVNlbGVjdGlvbiEiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyxrRUFBOEI7QUFDckQ7QUFDQTtBQUNBLE9BQU8sSUFBVTtBQUNqQixNQUFNLFVBQVU7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvY2F0ZWdvcnlTZWxlY3Rpb25cIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3BhZ2VzL2NhdGVnb3J5U2VsZWN0aW9uLmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9jYXRlZ29yeVNlbGVjdGlvblwiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5C81902%5CDesktop%5Crfp_front-main%5Crfp_front%5Cpages%5CcategorySelection.js&page=%2FcategorySelection!\n"));

/***/ }),

/***/ "./pages/categorySelection.js":
/*!************************************!*\
  !*** ./pages/categorySelection.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CategorySelection)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction CategorySelection() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { date, score, incorrect, correct } = router.query;\n    const incorrectQuestions = incorrect ? JSON.parse(incorrect) : [];\n    const correctQuestions = correct ? JSON.parse(correct) : [];\n    const handleCategorySelect = (category)=>{\n        // カテゴリとクエリ全体を次の画面に渡す\n        router.push({\n            pathname: \"/questionPage\",\n            query: {\n                category: category,\n                date: date,\n                score: score,\n                incorrect: incorrect,\n                correct: correct\n            }\n        });\n    };\n    const handleQuestionClick = (questionNumber)=>{\n        // 問題番号やクエリ情報を次の画面に渡す\n        const query = {\n            question: questionNumber,\n            date,\n            score,\n            incorrect: JSON.stringify(incorrectQuestions),\n            correct: JSON.stringify(correctQuestions)\n        };\n        router.push({\n            pathname: \"/questionPage\",\n            query\n        });\n    };\n    const handleReset = ()=>{\n        router.push(\"/categorySelection?date=\".concat(date, \"&score=0&incorrect=[]&correct=[]\"));\n    };\n    const handleBackToHome = ()=>{\n        router.push(\"/\");\n    };\n    const getButtonColor = (questionNumber)=>{\n        if (correctQuestions.includes(questionNumber)) {\n            return \"bg-green-500 text-white hover:bg-green-600\"; // 正解\n        }\n        if (incorrectQuestions.includes(questionNumber)) {\n            return \"bg-red-500 text-white hover:bg-red-600\"; // 不正解\n        }\n        return \"bg-blue-500 text-white hover:bg-blue-600\"; // 未回答\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center min-h-screen bg-orange-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-6 rounded shadow-md w-full max-w-sm\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-xl font-bold mb-4\",\n                    children: [\n                        date,\n                        \" - 受講後理解度テスト\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\81902\\\\Desktop\\\\rfp_front-main\\\\rfp_front\\\\pages\\\\categorySelection.js\",\n                    lineNumber: 50,\n                    columnNumber: 17\n                }, this),\n                score !== undefined && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4 p-4 bg-green-100 text-green-800 rounded text-center\",\n                    children: [\n                        \"あなたのスコア: \",\n                        score,\n                        \"/5 点\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\81902\\\\Desktop\\\\rfp_front-main\\\\rfp_front\\\\pages\\\\categorySelection.js\",\n                    lineNumber: 52,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"space-y-3\",\n                    children: [\n                        1,\n                        2,\n                        3,\n                        4,\n                        5\n                    ].map((questionNumber)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>handleQuestionClick(questionNumber),\n                            className: \"w-full py-2 px-4 border rounded \".concat(getButtonColor(questionNumber)),\n                            children: [\n                                \"問\",\n                                questionNumber\n                            ]\n                        }, questionNumber, true, {\n                            fileName: \"C:\\\\Users\\\\81902\\\\Desktop\\\\rfp_front-main\\\\rfp_front\\\\pages\\\\categorySelection.js\",\n                            lineNumber: 58,\n                            columnNumber: 25\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\81902\\\\Desktop\\\\rfp_front-main\\\\rfp_front\\\\pages\\\\categorySelection.js\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleReset,\n                            className: \"w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 mb-2\",\n                            children: \"リセット\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\81902\\\\Desktop\\\\rfp_front-main\\\\rfp_front\\\\pages\\\\categorySelection.js\",\n                            lineNumber: 70,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleBackToHome,\n                            className: \"w-full py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-600\",\n                            children: \"最初の画面に戻る\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\81902\\\\Desktop\\\\rfp_front-main\\\\rfp_front\\\\pages\\\\categorySelection.js\",\n                            lineNumber: 76,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\81902\\\\Desktop\\\\rfp_front-main\\\\rfp_front\\\\pages\\\\categorySelection.js\",\n                    lineNumber: 69,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\81902\\\\Desktop\\\\rfp_front-main\\\\rfp_front\\\\pages\\\\categorySelection.js\",\n            lineNumber: 49,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\81902\\\\Desktop\\\\rfp_front-main\\\\rfp_front\\\\pages\\\\categorySelection.js\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, this);\n}\n_s(CategorySelection, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = CategorySelection;\nvar _c;\n$RefreshReg$(_c, \"CategorySelection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXRlZ29yeVNlbGVjdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXdDO0FBRXpCLFNBQVNDOztJQUNwQixNQUFNQyxTQUFTRixzREFBU0E7SUFDeEIsTUFBTSxFQUFFRyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsU0FBUyxFQUFFQyxPQUFPLEVBQUUsR0FBR0osT0FBT0ssS0FBSztJQUN4RCxNQUFNQyxxQkFBcUJILFlBQVlJLEtBQUtDLEtBQUssQ0FBQ0wsYUFBYSxFQUFFO0lBQ2pFLE1BQU1NLG1CQUFtQkwsVUFBVUcsS0FBS0MsS0FBSyxDQUFDSixXQUFXLEVBQUU7SUFFM0QsTUFBTU0sdUJBQXVCLENBQUNDO1FBQzFCLHFCQUFxQjtRQUNyQlgsT0FBT1ksSUFBSSxDQUFDO1lBQ1JDLFVBQVU7WUFDVlIsT0FBTztnQkFBRU0sVUFBVUE7Z0JBQVVWLE1BQU1BO2dCQUFNQyxPQUFPQTtnQkFBT0MsV0FBV0E7Z0JBQVdDLFNBQVNBO1lBQVE7UUFDbEc7SUFDSjtJQUVBLE1BQU1VLHNCQUFzQixDQUFDQztRQUN6QixxQkFBcUI7UUFDckIsTUFBTVYsUUFBUTtZQUNWVyxVQUFVRDtZQUNWZDtZQUNBQztZQUNBQyxXQUFXSSxLQUFLVSxTQUFTLENBQUNYO1lBQzFCRixTQUFTRyxLQUFLVSxTQUFTLENBQUNSO1FBQzVCO1FBQ0FULE9BQU9ZLElBQUksQ0FBQztZQUFFQyxVQUFVO1lBQWlCUjtRQUFNO0lBQ25EO0lBRUEsTUFBTWEsY0FBYztRQUNoQmxCLE9BQU9ZLElBQUksQ0FBQywyQkFBZ0MsT0FBTFgsTUFBSztJQUNoRDtJQUVBLE1BQU1rQixtQkFBbUI7UUFDckJuQixPQUFPWSxJQUFJLENBQUM7SUFDaEI7SUFFQSxNQUFNUSxpQkFBaUIsQ0FBQ0w7UUFDcEIsSUFBSU4saUJBQWlCWSxRQUFRLENBQUNOLGlCQUFpQjtZQUMzQyxPQUFPLDhDQUE4QyxLQUFLO1FBQzlEO1FBQ0EsSUFBSVQsbUJBQW1CZSxRQUFRLENBQUNOLGlCQUFpQjtZQUM3QyxPQUFPLDBDQUEwQyxNQUFNO1FBQzNEO1FBQ0EsT0FBTyw0Q0FBNEMsTUFBTTtJQUM3RDtJQUVBLHFCQUNJLDhEQUFDTztRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ0M7b0JBQUdELFdBQVU7O3dCQUEwQnRCO3dCQUFLOzs7Ozs7O2dCQUM1Q0MsVUFBVXVCLDJCQUNQLDhEQUFDSDtvQkFBSUMsV0FBVTs7d0JBQTJEO3dCQUM1RHJCO3dCQUFNOzs7Ozs7OzhCQUd4Qiw4REFBQ29CO29CQUFJQyxXQUFVOzhCQUNWO3dCQUFDO3dCQUFHO3dCQUFHO3dCQUFHO3dCQUFHO3FCQUFFLENBQUNHLEdBQUcsQ0FBQyxDQUFDWCwrQkFDbEIsOERBQUNZOzRCQUVHQyxTQUFTLElBQU1kLG9CQUFvQkM7NEJBQ25DUSxXQUFXLG1DQUVULE9BRjRDSCxlQUMxQ0w7O2dDQUVQO2dDQUNLQTs7MkJBTkdBOzs7Ozs7Ozs7OzhCQVVqQiw4REFBQ087b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDSTs0QkFDR0MsU0FBU1Y7NEJBQ1RLLFdBQVU7c0NBQ2I7Ozs7OztzQ0FHRCw4REFBQ0k7NEJBQ0dDLFNBQVNUOzRCQUNUSSxXQUFVO3NDQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9yQjtHQW5Gd0J4Qjs7UUFDTEQsa0RBQVNBOzs7S0FESkMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcODE5MDJcXERlc2t0b3BcXHJmcF9mcm9udC1tYWluXFxyZnBfZnJvbnRcXHBhZ2VzXFxjYXRlZ29yeVNlbGVjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnlTZWxlY3Rpb24oKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBkYXRlLCBzY29yZSwgaW5jb3JyZWN0LCBjb3JyZWN0IH0gPSByb3V0ZXIucXVlcnk7XG4gICAgY29uc3QgaW5jb3JyZWN0UXVlc3Rpb25zID0gaW5jb3JyZWN0ID8gSlNPTi5wYXJzZShpbmNvcnJlY3QpIDogW107XG4gICAgY29uc3QgY29ycmVjdFF1ZXN0aW9ucyA9IGNvcnJlY3QgPyBKU09OLnBhcnNlKGNvcnJlY3QpIDogW107XG5cbiAgICBjb25zdCBoYW5kbGVDYXRlZ29yeVNlbGVjdCA9IChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAvLyDjgqvjg4bjgrTjg6rjgajjgq/jgqjjg6rlhajkvZPjgpLmrKHjga7nlLvpnaLjgavmuKHjgZlcbiAgICAgICAgcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgcGF0aG5hbWU6IFwiL3F1ZXN0aW9uUGFnZVwiLFxuICAgICAgICAgICAgcXVlcnk6IHsgY2F0ZWdvcnk6IGNhdGVnb3J5LCBkYXRlOiBkYXRlLCBzY29yZTogc2NvcmUsIGluY29ycmVjdDogaW5jb3JyZWN0LCBjb3JyZWN0OiBjb3JyZWN0IH0sXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVRdWVzdGlvbkNsaWNrID0gKHF1ZXN0aW9uTnVtYmVyKSA9PiB7XG4gICAgICAgIC8vIOWVj+mhjOeVquWPt+OChOOCr+OCqOODquaDheWgseOCkuasoeOBrueUu+mdouOBq+a4oeOBmVxuICAgICAgICBjb25zdCBxdWVyeSA9IHtcbiAgICAgICAgICAgIHF1ZXN0aW9uOiBxdWVzdGlvbk51bWJlcixcbiAgICAgICAgICAgIGRhdGUsXG4gICAgICAgICAgICBzY29yZSxcbiAgICAgICAgICAgIGluY29ycmVjdDogSlNPTi5zdHJpbmdpZnkoaW5jb3JyZWN0UXVlc3Rpb25zKSxcbiAgICAgICAgICAgIGNvcnJlY3Q6IEpTT04uc3RyaW5naWZ5KGNvcnJlY3RRdWVzdGlvbnMpLFxuICAgICAgICB9O1xuICAgICAgICByb3V0ZXIucHVzaCh7IHBhdGhuYW1lOiBcIi9xdWVzdGlvblBhZ2VcIiwgcXVlcnkgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xuICAgICAgICByb3V0ZXIucHVzaChgL2NhdGVnb3J5U2VsZWN0aW9uP2RhdGU9JHtkYXRlfSZzY29yZT0wJmluY29ycmVjdD1bXSZjb3JyZWN0PVtdYCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUJhY2tUb0hvbWUgPSAoKSA9PiB7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0QnV0dG9uQ29sb3IgPSAocXVlc3Rpb25OdW1iZXIpID0+IHtcbiAgICAgICAgaWYgKGNvcnJlY3RRdWVzdGlvbnMuaW5jbHVkZXMocXVlc3Rpb25OdW1iZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJiZy1ncmVlbi01MDAgdGV4dC13aGl0ZSBob3ZlcjpiZy1ncmVlbi02MDBcIjsgLy8g5q2j6KejXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluY29ycmVjdFF1ZXN0aW9ucy5pbmNsdWRlcyhxdWVzdGlvbk51bWJlcikpIHtcbiAgICAgICAgICAgIHJldHVybiBcImJnLXJlZC01MDAgdGV4dC13aGl0ZSBob3ZlcjpiZy1yZWQtNjAwXCI7IC8vIOS4jeato+ino1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgaG92ZXI6YmctYmx1ZS02MDBcIjsgLy8g5pyq5Zue562UXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIGJnLW9yYW5nZS0xMDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC02IHJvdW5kZWQgc2hhZG93LW1kIHctZnVsbCBtYXgtdy1zbVwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi00XCI+e2RhdGV9IC0g5Y+X6Kyb5b6M55CG6Kej5bqm44OG44K544OIPC9oMT5cbiAgICAgICAgICAgICAgICB7c2NvcmUgIT09IHVuZGVmaW5lZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCBwLTQgYmctZ3JlZW4tMTAwIHRleHQtZ3JlZW4tODAwIHJvdW5kZWQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOOBguOBquOBn+OBruOCueOCs+OCojoge3Njb3JlfS81IOeCuVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIHtbMSwgMiwgMywgNCwgNV0ubWFwKChxdWVzdGlvbk51bWJlcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cXVlc3Rpb25OdW1iZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUXVlc3Rpb25DbGljayhxdWVzdGlvbk51bWJlcil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIHB5LTIgcHgtNCBib3JkZXIgcm91bmRlZCAke2dldEJ1dHRvbkNvbG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbk51bWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDllY97cXVlc3Rpb25OdW1iZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJlc2V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTIgcHgtNCBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQgaG92ZXI6YmctYmx1ZS02MDAgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIOODquOCu+ODg+ODiFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQmFja1RvSG9tZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS0yIHB4LTQgYmctZ3JheS01MDAgdGV4dC13aGl0ZSByb3VuZGVkIGhvdmVyOmJnLWdyYXktNjAwXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAg5pyA5Yid44Gu55S76Z2i44Gr5oi744KLXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJDYXRlZ29yeVNlbGVjdGlvbiIsInJvdXRlciIsImRhdGUiLCJzY29yZSIsImluY29ycmVjdCIsImNvcnJlY3QiLCJxdWVyeSIsImluY29ycmVjdFF1ZXN0aW9ucyIsIkpTT04iLCJwYXJzZSIsImNvcnJlY3RRdWVzdGlvbnMiLCJoYW5kbGVDYXRlZ29yeVNlbGVjdCIsImNhdGVnb3J5IiwicHVzaCIsInBhdGhuYW1lIiwiaGFuZGxlUXVlc3Rpb25DbGljayIsInF1ZXN0aW9uTnVtYmVyIiwicXVlc3Rpb24iLCJzdHJpbmdpZnkiLCJoYW5kbGVSZXNldCIsImhhbmRsZUJhY2tUb0hvbWUiLCJnZXRCdXR0b25Db2xvciIsImluY2x1ZGVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ1bmRlZmluZWQiLCJtYXAiLCJidXR0b24iLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/categorySelection.js\n"));

/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/client/router */ \"./node_modules/next/dist/client/router.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9yb3V0ZXIuanMiLCJtYXBwaW5ncyI6IkFBQUEsNkdBQWdEIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXDgxOTAyXFxEZXNrdG9wXFxyZnBfZnJvbnQtbWFpblxccmZwX2Zyb250XFxub2RlX21vZHVsZXNcXG5leHRcXHJvdXRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvcm91dGVyJylcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/router.js\n"));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["pages/_app","main"], () => (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5CUsers%5C81902%5CDesktop%5Crfp_front-main%5Crfp_front%5Cpages%5CcategorySelection.js&page=%2FcategorySelection!")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
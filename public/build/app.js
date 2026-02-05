"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "./node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _pages_auth_AuthPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/auth/AuthPage */ "./assets/pages/auth/AuthPage.tsx");
/* harmony import */ var _pages_auth_AuthPage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pages_auth_AuthPage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_notes_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/notes/page */ "./assets/pages/notes/page.tsx");
/* harmony import */ var _pages_notes_page__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pages_notes_page__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");

/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */





var rootNode = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_5__.createRoot)(document.getElementById('app'));

// Detect current page and render appropriate component
var path = window.location.pathname;
if (path === '/notes') {
  rootNode.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_pages_notes_page__WEBPACK_IMPORTED_MODULE_4___default()), null));
} else if (path.startsWith('/confirm/')) {
  // Don't render React app on confirmation page - let Twig handle it
} else {
  // Auth page handles both login and register
  rootNode.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_pages_auth_AuthPage__WEBPACK_IMPORTED_MODULE_3___default()), null));
}

/***/ }),

/***/ "./assets/components/layout/GlobalLoader.tsx":
/*!***************************************************!*\
  !*** ./assets/components/layout/GlobalLoader.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.GlobalLoader = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var framer_motion_1 = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/cjs/index.js");
function GlobalLoader() {
  return react_1["default"].createElement(framer_motion_1.motion.div, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    },
    className: "fixed inset-0 z-[100] flex items-center justify-center bg-white/80 backdrop-blur-sm"
  }, react_1["default"].createElement("div", {
    className: "flex flex-col items-center gap-4"
  }, react_1["default"].createElement(framer_motion_1.motion.div, {
    className: "h-10 w-10 rounded-full border-4 border-gray-200 border-t-gray-900",
    animate: {
      rotate: 360
    },
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear"
    }
  }), react_1["default"].createElement("p", {
    className: "text-sm font-medium text-gray-600"
  }, "Loading...")));
}
exports.GlobalLoader = GlobalLoader;

/***/ }),

/***/ "./assets/components/layout/Header.tsx":
/*!*********************************************!*\
  !*** ./assets/components/layout/Header.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Header = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var lucide_react_1 = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/lucide-react.js");
function Header(_a) {
  var onMenuClick = _a.onMenuClick,
    _b = _a.title,
    title = _b === void 0 ? "Notes" : _b;
  return react_1["default"].createElement("header", {
    className: "sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-gray-200 bg-white px-4 lg:px-6"
  }, react_1["default"].createElement("button", {
    onClick: onMenuClick,
    className: "rounded-md p-2 hover:bg-gray-100 lg:hidden"
  }, react_1["default"].createElement(lucide_react_1.Menu, {
    className: "h-5 w-5 text-gray-600"
  })), react_1["default"].createElement("h1", {
    className: "text-lg font-semibold text-gray-900 lg:text-xl"
  }, title), react_1["default"].createElement("div", {
    className: "flex-1"
  }));
}
exports.Header = Header;

/***/ }),

/***/ "./assets/components/layout/MainLayout.tsx":
/*!*************************************************!*\
  !*** ./assets/components/layout/MainLayout.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MainLayout = void 0;
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var framer_motion_1 = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/cjs/index.js");
var react_hot_toast_1 = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/index.js");
var Sidebar_1 = __webpack_require__(/*! ./Sidebar */ "./assets/components/layout/Sidebar.tsx");
var Header_1 = __webpack_require__(/*! ./Header */ "./assets/components/layout/Header.tsx");
var GlobalLoader_1 = __webpack_require__(/*! ./GlobalLoader */ "./assets/components/layout/GlobalLoader.tsx");
function MainLayout(_a) {
  var _this = this;
  var children = _a.children,
    title = _a.title,
    _b = _a.isLoading,
    isLoading = _b === void 0 ? false : _b;
  var _c = (0, react_1.useState)(false),
    sidebarOpen = _c[0],
    setSidebarOpen = _c[1];
  var _d = (0, react_1.useState)(),
    userEmail = _d[0],
    setUserEmail = _d[1];
  (0, react_1.useEffect)(function () {
    var handleResize = function handleResize() {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return function () {
      return window.removeEventListener("resize", handleResize);
    };
  }, []);
  (0, react_1.useEffect)(function () {
    fetch("/api/check-session", {
      credentials: "include"
    }).then(function (res) {
      return res.ok ? res.json() : null;
    }).then(function (data) {
      var _a;
      if ((data === null || data === void 0 ? void 0 : data.authenticated) && ((_a = data.user) === null || _a === void 0 ? void 0 : _a.email)) {
        setUserEmail(data.user.email);
        localStorage.setItem("user_email", data.user.email);
      } else {
        var cachedEmail = localStorage.getItem("user_email");
        if (cachedEmail) {
          setUserEmail(cachedEmail);
        }
      }
    })["catch"](function () {
      var cachedEmail = localStorage.getItem("user_email");
      if (cachedEmail) {
        setUserEmail(cachedEmail);
      }
    });
  }, []);
  var handleLogout = function handleLogout() {
    return __awaiter(_this, void 0, void 0, function () {
      var error_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2,, 3]);
            return [4, fetch("/api/logout", {
              method: "POST"
            })];
          case 1:
            _a.sent();
            window.location.href = "/";
            return [3, 3];
          case 2:
            error_1 = _a.sent();
            console.error("Logout failed:", error_1);
            return [3, 3];
          case 3:
            return [2];
        }
      });
    });
  };
  var toggleSidebar = function toggleSidebar() {
    return setSidebarOpen(!sidebarOpen);
  };
  return react_1["default"].createElement("div", {
    className: "flex h-screen bg-gray-50"
  }, react_1["default"].createElement(react_hot_toast_1.Toaster, {
    position: "top-right",
    toastOptions: {
      duration: 4000,
      style: {
        background: "#1f2937",
        color: "#fff",
        borderRadius: "8px"
      },
      success: {
        iconTheme: {
          primary: "#10b981",
          secondary: "#fff"
        }
      },
      error: {
        iconTheme: {
          primary: "#ef4444",
          secondary: "#fff"
        }
      }
    }
  }), react_1["default"].createElement(framer_motion_1.AnimatePresence, null, isLoading && react_1["default"].createElement(GlobalLoader_1.GlobalLoader, null)), react_1["default"].createElement(Sidebar_1.Sidebar, {
    isOpen: sidebarOpen,
    onToggle: toggleSidebar,
    onLogout: handleLogout,
    userEmail: userEmail
  }), react_1["default"].createElement("div", {
    className: "flex flex-1 flex-col overflow-hidden"
  }, react_1["default"].createElement(Header_1.Header, {
    onMenuClick: toggleSidebar,
    title: title
  }), react_1["default"].createElement("main", {
    className: "flex-1 overflow-auto p-4 lg:p-6"
  }, react_1["default"].createElement(framer_motion_1.motion.div, {
    initial: {
      opacity: 0,
      y: 10
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.3
    }
  }, children))));
}
exports.MainLayout = MainLayout;

/***/ }),

/***/ "./assets/components/layout/Sidebar.tsx":
/*!**********************************************!*\
  !*** ./assets/components/layout/Sidebar.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Sidebar = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var framer_motion_1 = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/cjs/index.js");
var lucide_react_1 = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/lucide-react.js");
var utils_1 = __webpack_require__(/*! ../../lib/utils */ "./assets/lib/utils.ts");
var dropdown_menu_1 = __webpack_require__(/*! ../ui/dropdown-menu */ "./assets/components/ui/dropdown-menu.tsx");
var navItems = [{
  icon: lucide_react_1.StickyNote,
  label: "Notes",
  href: "/notes",
  active: true
}];
function Sidebar(_a) {
  var isOpen = _a.isOpen,
    onToggle = _a.onToggle,
    onLogout = _a.onLogout,
    userEmail = _a.userEmail;
  return react_1["default"].createElement(react_1["default"].Fragment, null, isOpen && react_1["default"].createElement(framer_motion_1.motion.div, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    },
    className: "fixed inset-0 z-40 bg-black/50 lg:hidden",
    onClick: onToggle
  }), react_1["default"].createElement(framer_motion_1.motion.aside, {
    initial: false,
    animate: {
      width: isOpen ? 256 : 0,
      x: isOpen ? 0 : -256
    },
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    },
    className: (0, utils_1.cn)("fixed left-0 top-0 z-50 h-screen bg-gray-900 text-white lg:relative lg:z-auto", isOpen ? "w-64" : "w-0 lg:w-0")
  }, react_1["default"].createElement("div", {
    className: "flex h-full flex-col overflow-hidden"
  }, react_1["default"].createElement("div", {
    className: "flex h-16 items-center justify-between border-b border-gray-800 px-4"
  }, react_1["default"].createElement(framer_motion_1.motion.div, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    className: "flex items-center gap-2"
  }, react_1["default"].createElement(lucide_react_1.StickyNote, {
    className: "h-6 w-6 text-blue-400"
  }), react_1["default"].createElement("span", {
    className: "text-lg font-semibold"
  }, "VTC Notes")), react_1["default"].createElement("button", {
    onClick: onToggle,
    className: "rounded-md p-1.5 hover:bg-gray-800 lg:hidden"
  }, react_1["default"].createElement(lucide_react_1.X, {
    className: "h-5 w-5"
  }))), react_1["default"].createElement("nav", {
    className: "flex-1 space-y-1 p-4"
  }, navItems.map(function (item) {
    return react_1["default"].createElement("a", {
      key: item.label,
      href: item.href,
      className: (0, utils_1.cn)("flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors", item.active ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-800")
    }, react_1["default"].createElement(item.icon, {
      className: "h-5 w-5"
    }), item.label);
  })), react_1["default"].createElement("div", {
    className: "border-t border-gray-800 p-4"
  }, react_1["default"].createElement(dropdown_menu_1.DropdownMenu, null, react_1["default"].createElement(dropdown_menu_1.DropdownMenuTrigger, {
    asChild: true
  }, react_1["default"].createElement("button", {
    className: "flex w-full items-center gap-3 rounded-lg px-2 py-2 hover:bg-gray-800 transition-colors"
  }, react_1["default"].createElement("div", {
    className: "flex h-9 w-9 items-center justify-center rounded-full bg-gray-700"
  }, react_1["default"].createElement(lucide_react_1.User, {
    className: "h-5 w-5 text-gray-300"
  })), react_1["default"].createElement("div", {
    className: "flex-1 truncate text-left"
  }, react_1["default"].createElement("p", {
    className: "truncate text-sm font-medium",
    title: userEmail || "User"
  }, userEmail || "User"), react_1["default"].createElement("p", {
    className: "text-xs text-gray-400"
  }, "Logged in")))), react_1["default"].createElement(dropdown_menu_1.DropdownMenuContent, {
    align: "end",
    className: "w-56"
  }, react_1["default"].createElement(dropdown_menu_1.DropdownMenuLabel, {
    className: "font-normal"
  }, react_1["default"].createElement("div", {
    className: "flex flex-col space-y-1"
  }, react_1["default"].createElement("p", {
    className: "text-sm font-medium leading-none"
  }, "Account"), react_1["default"].createElement("p", {
    className: "text-xs leading-none text-gray-500 truncate"
  }, userEmail || "User"))), react_1["default"].createElement(dropdown_menu_1.DropdownMenuSeparator, null), react_1["default"].createElement(dropdown_menu_1.DropdownMenuItem, {
    onClick: onLogout,
    className: "text-red-600 focus:text-red-600 focus:bg-red-50 cursor-pointer"
  }, react_1["default"].createElement(lucide_react_1.LogOut, {
    className: "mr-2 h-4 w-4"
  }), "Log out")))))));
}
exports.Sidebar = Sidebar;

/***/ }),

/***/ "./assets/components/notes/DeleteConfirmDialog.tsx":
/*!*********************************************************!*\
  !*** ./assets/components/notes/DeleteConfirmDialog.tsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DeleteConfirmDialog = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var lucide_react_1 = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/lucide-react.js");
var alert_dialog_1 = __webpack_require__(/*! ../ui/alert-dialog */ "./assets/components/ui/alert-dialog.tsx");
function DeleteConfirmDialog(_a) {
  var isOpen = _a.isOpen,
    onClose = _a.onClose,
    onConfirm = _a.onConfirm,
    _b = _a.title,
    title = _b === void 0 ? "Delete Note" : _b,
    _c = _a.description,
    description = _c === void 0 ? "Are you sure you want to delete this note? This action cannot be undone." : _c,
    _d = _a.isDeleting,
    isDeleting = _d === void 0 ? false : _d;
  return react_1["default"].createElement(alert_dialog_1.AlertDialog, {
    open: isOpen,
    onOpenChange: onClose
  }, react_1["default"].createElement(alert_dialog_1.AlertDialogContent, null, react_1["default"].createElement(alert_dialog_1.AlertDialogHeader, null, react_1["default"].createElement("div", {
    className: "mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100"
  }, react_1["default"].createElement(lucide_react_1.Trash2, {
    className: "h-6 w-6 text-red-600"
  })), react_1["default"].createElement(alert_dialog_1.AlertDialogTitle, {
    className: "text-center"
  }, title), react_1["default"].createElement(alert_dialog_1.AlertDialogDescription, {
    className: "text-center"
  }, description)), react_1["default"].createElement(alert_dialog_1.AlertDialogFooter, {
    className: "sm:justify-center"
  }, react_1["default"].createElement(alert_dialog_1.AlertDialogCancel, {
    disabled: isDeleting
  }, "Cancel"), react_1["default"].createElement(alert_dialog_1.AlertDialogAction, {
    onClick: onConfirm,
    disabled: isDeleting
  }, isDeleting ? "Deleting..." : "Delete"))));
}
exports.DeleteConfirmDialog = DeleteConfirmDialog;

/***/ }),

/***/ "./assets/components/notes/NoteCard.tsx":
/*!**********************************************!*\
  !*** ./assets/components/notes/NoteCard.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.NoteCard = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var framer_motion_1 = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/cjs/index.js");
var lucide_react_1 = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/lucide-react.js");
var card_1 = __webpack_require__(/*! ../ui/card */ "./assets/components/ui/card.tsx");
var badge_1 = __webpack_require__(/*! ../ui/badge */ "./assets/components/ui/badge.tsx");
var button_1 = __webpack_require__(/*! ../ui/button */ "./assets/components/ui/button.tsx");
function NoteCard(_a) {
  var note = _a.note,
    onEdit = _a.onEdit,
    onDelete = _a.onDelete,
    onView = _a.onView,
    _b = _a.index,
    index = _b === void 0 ? 0 : _b;
  var formatDate = function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };
  return react_1["default"].createElement(framer_motion_1.motion.div, {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      scale: 0.95
    },
    transition: {
      duration: 0.2,
      delay: index * 0.05
    },
    layout: true
  }, react_1["default"].createElement(card_1.Card, {
    className: "group flex h-[240px] cursor-pointer flex-col overflow-hidden transition-shadow hover:shadow-md",
    onClick: function onClick() {
      return onView(note);
    }
  }, react_1["default"].createElement(card_1.CardHeader, {
    className: "pb-2"
  }, react_1["default"].createElement("div", {
    className: "flex items-start justify-between gap-2"
  }, react_1["default"].createElement(card_1.CardTitle, {
    className: "line-clamp-1 text-base"
  }, note.title), react_1["default"].createElement(badge_1.Badge, {
    variant: note.status
  }, note.status))), react_1["default"].createElement(card_1.CardContent, {
    className: "flex-1 overflow-hidden"
  }, react_1["default"].createElement("p", {
    className: "max-h-[4.5rem] overflow-hidden whitespace-pre-line break-words text-sm text-gray-600"
  }, note.content)), react_1["default"].createElement(card_1.CardFooter, {
    className: "mt-auto flex items-center justify-between border-t border-gray-200 pt-3"
  }, react_1["default"].createElement("div", {
    className: "flex flex-col gap-1 text-xs text-gray-500"
  }, note.category && react_1["default"].createElement("div", {
    className: "flex items-center gap-1"
  }, react_1["default"].createElement(lucide_react_1.Tag, {
    className: "h-3 w-3"
  }), react_1["default"].createElement("span", null, note.category)), react_1["default"].createElement("div", {
    className: "flex items-center gap-1"
  }, react_1["default"].createElement(lucide_react_1.Calendar, {
    className: "h-3 w-3"
  }), react_1["default"].createElement("span", null, formatDate(note.createdAt)))), react_1["default"].createElement("div", {
    className: "flex gap-1 opacity-0 transition-opacity group-hover:opacity-100"
  }, react_1["default"].createElement(button_1.Button, {
    variant: "ghost",
    size: "icon",
    onClick: function onClick(event) {
      event.stopPropagation();
      onEdit(note);
    },
    className: "h-8 w-8"
  }, react_1["default"].createElement(lucide_react_1.Pencil, {
    className: "h-4 w-4"
  })), react_1["default"].createElement(button_1.Button, {
    variant: "ghost",
    size: "icon",
    onClick: function onClick(event) {
      event.stopPropagation();
      onDelete(note.id);
    },
    className: "h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
  }, react_1["default"].createElement(lucide_react_1.Trash2, {
    className: "h-4 w-4"
  }))))));
}
exports.NoteCard = NoteCard;

/***/ }),

/***/ "./assets/components/notes/NoteForm.tsx":
/*!**********************************************!*\
  !*** ./assets/components/notes/NoteForm.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.NoteForm = void 0;
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var sheet_1 = __webpack_require__(/*! ../ui/sheet */ "./assets/components/ui/sheet.tsx");
var button_1 = __webpack_require__(/*! ../ui/button */ "./assets/components/ui/button.tsx");
var input_1 = __webpack_require__(/*! ../ui/input */ "./assets/components/ui/input.tsx");
var textarea_1 = __webpack_require__(/*! ../ui/textarea */ "./assets/components/ui/textarea.tsx");
var label_1 = __webpack_require__(/*! ../ui/label */ "./assets/components/ui/label.tsx");
function NoteForm(_a) {
  var _this = this;
  var isOpen = _a.isOpen,
    onClose = _a.onClose,
    onSubmit = _a.onSubmit,
    note = _a.note,
    _b = _a.isSubmitting,
    isSubmitting = _b === void 0 ? false : _b;
  var _c = (0, react_1.useState)(""),
    title = _c[0],
    setTitle = _c[1];
  var _d = (0, react_1.useState)(""),
    content = _d[0],
    setContent = _d[1];
  var _e = (0, react_1.useState)(""),
    category = _e[0],
    setCategory = _e[1];
  var _f = (0, react_1.useState)("new"),
    status = _f[0],
    setStatus = _f[1];
  (0, react_1.useEffect)(function () {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
      setCategory(note.category);
      setStatus(note.status);
    } else {
      setTitle("");
      setContent("");
      setCategory("");
      setStatus("new");
    }
  }, [note, isOpen]);
  var handleSubmit = function handleSubmit(e) {
    return __awaiter(_this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            e.preventDefault();
            return [4, onSubmit({
              title: title,
              content: content,
              category: category,
              status: status
            })];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  };
  return react_1["default"].createElement(sheet_1.Sheet, {
    open: isOpen,
    onOpenChange: onClose
  }, react_1["default"].createElement(sheet_1.SheetContent, {
    side: "right",
    className: "overflow-y-auto"
  }, react_1["default"].createElement("form", {
    onSubmit: handleSubmit,
    className: "flex flex-col h-full"
  }, react_1["default"].createElement(sheet_1.SheetHeader, {
    className: "mb-6"
  }, react_1["default"].createElement(sheet_1.SheetTitle, null, note ? "Edit Note" : "Create New Note"), react_1["default"].createElement(sheet_1.SheetDescription, null, note ? "Update the details of your note below." : "Fill in the details to create a new note.")), react_1["default"].createElement("div", {
    className: "flex-1 space-y-5"
  }, react_1["default"].createElement("div", {
    className: "space-y-2"
  }, react_1["default"].createElement(label_1.Label, {
    htmlFor: "title"
  }, "Title"), react_1["default"].createElement(input_1.Input, {
    id: "title",
    value: title,
    onChange: function onChange(e) {
      return setTitle(e.target.value);
    },
    placeholder: "Enter note title...",
    required: true
  })), react_1["default"].createElement("div", {
    className: "space-y-2"
  }, react_1["default"].createElement(label_1.Label, {
    htmlFor: "content"
  }, "Content"), react_1["default"].createElement(textarea_1.Textarea, {
    id: "content",
    value: content,
    onChange: function onChange(e) {
      return setContent(e.target.value);
    },
    placeholder: "Enter note content...",
    rows: 6,
    required: true
  })), react_1["default"].createElement("div", {
    className: "space-y-2"
  }, react_1["default"].createElement(label_1.Label, {
    htmlFor: "category"
  }, "Category"), react_1["default"].createElement(input_1.Input, {
    id: "category",
    value: category,
    onChange: function onChange(e) {
      return setCategory(e.target.value);
    },
    placeholder: "e.g., Work, Personal",
    required: true
  })), react_1["default"].createElement("div", {
    className: "space-y-2"
  }, react_1["default"].createElement(label_1.Label, {
    htmlFor: "status"
  }, "Status"), react_1["default"].createElement("select", {
    id: "status",
    value: status,
    onChange: function onChange(e) {
      return setStatus(e.target.value);
    },
    className: "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
  }, react_1["default"].createElement("option", {
    value: "new"
  }, "New"), react_1["default"].createElement("option", {
    value: "todo"
  }, "Todo"), react_1["default"].createElement("option", {
    value: "done"
  }, "Done")))), react_1["default"].createElement(sheet_1.SheetFooter, {
    className: "mt-6 pt-4 border-t border-gray-200"
  }, react_1["default"].createElement(button_1.Button, {
    type: "button",
    variant: "outline",
    onClick: onClose
  }, "Cancel"), react_1["default"].createElement(button_1.Button, {
    type: "submit",
    disabled: isSubmitting
  }, isSubmitting ? "Saving..." : note ? "Update Note" : "Create Note")))));
}
exports.NoteForm = NoteForm;

/***/ }),

/***/ "./assets/components/notes/NotesSkeleton.tsx":
/*!***************************************************!*\
  !*** ./assets/components/notes/NotesSkeleton.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.NotesFilterSkeleton = exports.NotesGridSkeleton = exports.NoteCardSkeleton = void 0;
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var skeleton_1 = __webpack_require__(/*! ../ui/skeleton */ "./assets/components/ui/skeleton.tsx");
var card_1 = __webpack_require__(/*! ../ui/card */ "./assets/components/ui/card.tsx");
function NoteCardSkeleton() {
  return react_1["default"].createElement(card_1.Card, {
    className: "h-full"
  }, react_1["default"].createElement(card_1.CardHeader, {
    className: "pb-2"
  }, react_1["default"].createElement("div", {
    className: "flex items-start justify-between"
  }, react_1["default"].createElement(skeleton_1.Skeleton, {
    className: "h-5 w-3/4"
  }), react_1["default"].createElement(skeleton_1.Skeleton, {
    className: "h-5 w-16 rounded-full"
  }))), react_1["default"].createElement(card_1.CardContent, null, react_1["default"].createElement(skeleton_1.Skeleton, {
    className: "h-4 w-full mb-2"
  }), react_1["default"].createElement(skeleton_1.Skeleton, {
    className: "h-4 w-5/6 mb-4"
  }), react_1["default"].createElement("div", {
    className: "flex items-center justify-between"
  }, react_1["default"].createElement(skeleton_1.Skeleton, {
    className: "h-4 w-24"
  }), react_1["default"].createElement(skeleton_1.Skeleton, {
    className: "h-4 w-20"
  }))));
}
exports.NoteCardSkeleton = NoteCardSkeleton;
function NotesGridSkeleton(_a) {
  var _b = _a.count,
    count = _b === void 0 ? 6 : _b;
  return react_1["default"].createElement("div", {
    className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
  }, Array.from({
    length: count
  }).map(function (_, i) {
    return react_1["default"].createElement(NoteCardSkeleton, {
      key: i
    });
  }));
}
exports.NotesGridSkeleton = NotesGridSkeleton;
function NotesFilterSkeleton() {
  return react_1["default"].createElement("div", {
    className: "mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
  }, react_1["default"].createElement("div", {
    className: "flex flex-1 gap-2"
  }, react_1["default"].createElement(skeleton_1.Skeleton, {
    className: "h-10 w-full sm:max-w-xs"
  }), react_1["default"].createElement(skeleton_1.Skeleton, {
    className: "h-10 w-32"
  }), react_1["default"].createElement(skeleton_1.Skeleton, {
    className: "h-10 w-32"
  })), react_1["default"].createElement(skeleton_1.Skeleton, {
    className: "h-10 w-32"
  }));
}
exports.NotesFilterSkeleton = NotesFilterSkeleton;

/***/ }),

/***/ "./assets/components/ui/alert-dialog.tsx":
/*!***********************************************!*\
  !*** ./assets/components/ui/alert-dialog.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



__webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AlertDialogCancel = exports.AlertDialogAction = exports.AlertDialogDescription = exports.AlertDialogTitle = exports.AlertDialogFooter = exports.AlertDialogHeader = exports.AlertDialogContent = exports.AlertDialogTrigger = exports.AlertDialogOverlay = exports.AlertDialogPortal = exports.AlertDialog = void 0;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var AlertDialogPrimitive = __importStar(__webpack_require__(/*! @radix-ui/react-alert-dialog */ "./node_modules/@radix-ui/react-alert-dialog/dist/index.js"));
var utils_1 = __webpack_require__(/*! ../../lib/utils */ "./assets/lib/utils.ts");
var button_1 = __webpack_require__(/*! ./button */ "./assets/components/ui/button.tsx");
var AlertDialog = AlertDialogPrimitive.Root;
exports.AlertDialog = AlertDialog;
var AlertDialogTrigger = AlertDialogPrimitive.Trigger;
exports.AlertDialogTrigger = AlertDialogTrigger;
var AlertDialogPortal = AlertDialogPrimitive.Portal;
exports.AlertDialogPortal = AlertDialogPortal;
var AlertDialogOverlay = React.forwardRef(function (_a, ref) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return React.createElement(AlertDialogPrimitive.Overlay, __assign({
    className: (0, utils_1.cn)("fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className)
  }, props, {
    ref: ref
  }));
});
exports.AlertDialogOverlay = AlertDialogOverlay;
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
var AlertDialogContent = React.forwardRef(function (_a, ref) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return React.createElement(AlertDialogPortal, null, React.createElement(AlertDialogOverlay, null), React.createElement(AlertDialogPrimitive.Content, __assign({
    ref: ref,
    className: (0, utils_1.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-gray-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className)
  }, props)));
});
exports.AlertDialogContent = AlertDialogContent;
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
var AlertDialogHeader = function AlertDialogHeader(_a) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return React.createElement("div", __assign({
    className: (0, utils_1.cn)("flex flex-col space-y-2 text-center sm:text-left", className)
  }, props));
};
exports.AlertDialogHeader = AlertDialogHeader;
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = function AlertDialogFooter(_a) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return React.createElement("div", __assign({
    className: (0, utils_1.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)
  }, props));
};
exports.AlertDialogFooter = AlertDialogFooter;
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = React.forwardRef(function (_a, ref) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return React.createElement(AlertDialogPrimitive.Title, __assign({
    ref: ref,
    className: (0, utils_1.cn)("text-lg font-semibold", className)
  }, props));
});
exports.AlertDialogTitle = AlertDialogTitle;
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
var AlertDialogDescription = React.forwardRef(function (_a, ref) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return React.createElement(AlertDialogPrimitive.Description, __assign({
    ref: ref,
    className: (0, utils_1.cn)("text-sm text-gray-500", className)
  }, props));
});
exports.AlertDialogDescription = AlertDialogDescription;
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;
var AlertDialogAction = React.forwardRef(function (_a, ref) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return React.createElement(AlertDialogPrimitive.Action, __assign({
    ref: ref,
    className: (0, utils_1.cn)((0, button_1.buttonVariants)({
      variant: "destructive"
    }), className)
  }, props));
});
exports.AlertDialogAction = AlertDialogAction;
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
var AlertDialogCancel = React.forwardRef(function (_a, ref) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return React.createElement(AlertDialogPrimitive.Cancel, __assign({
    ref: ref,
    className: (0, utils_1.cn)((0, button_1.buttonVariants)({
      variant: "outline"
    }), "mt-2 sm:mt-0", className)
  }, props));
});
exports.AlertDialogCancel = AlertDialogCancel;
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

/***/ }),

/***/ "./assets/components/ui/badge.tsx":
/*!****************************************!*\
  !*** ./assets/components/ui/badge.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



__webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.badgeVariants = exports.Badge = void 0;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var class_variance_authority_1 = __webpack_require__(/*! class-variance-authority */ "./node_modules/class-variance-authority/dist/index.js");
var utils_1 = __webpack_require__(/*! ../../lib/utils */ "./assets/lib/utils.ts");
var badgeVariants = (0, class_variance_authority_1.cva)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
  variants: {
    variant: {
      "default": "border-transparent bg-gray-900 text-white shadow",
      secondary: "border-transparent bg-gray-100 text-gray-900",
      destructive: "border-transparent bg-red-500 text-white shadow",
      outline: "text-gray-900",
      "new": "border-transparent bg-blue-100 text-blue-800",
      todo: "border-transparent bg-amber-100 text-amber-800",
      done: "border-transparent bg-green-100 text-green-800"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
exports.badgeVariants = badgeVariants;
function Badge(_a) {
  var className = _a.className,
    variant = _a.variant,
    props = __rest(_a, ["className", "variant"]);
  return React.createElement("div", __assign({
    className: (0, utils_1.cn)(badgeVariants({
      variant: variant
    }), className)
  }, props));
}
exports.Badge = Badge;

/***/ }),

/***/ "./assets/components/ui/button.tsx":
/*!*****************************************!*\
  !*** ./assets/components/ui/button.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



__webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.buttonVariants = exports.Button = void 0;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_slot_1 = __webpack_require__(/*! @radix-ui/react-slot */ "./node_modules/@radix-ui/react-slot/dist/index.js");
var class_variance_authority_1 = __webpack_require__(/*! class-variance-authority */ "./node_modules/class-variance-authority/dist/index.js");
var utils_1 = __webpack_require__(/*! ../../lib/utils */ "./assets/lib/utils.ts");
var buttonVariants = (0, class_variance_authority_1.cva)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
  variants: {
    variant: {
      "default": "bg-gray-900 text-white shadow hover:bg-gray-800",
      destructive: "bg-red-500 text-white shadow-sm hover:bg-red-600",
      outline: "border border-gray-300 bg-white shadow-sm hover:bg-gray-100",
      secondary: "bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-200",
      ghost: "hover:bg-gray-100",
      link: "text-gray-900 underline-offset-4 hover:underline"
    },
    size: {
      "default": "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
exports.buttonVariants = buttonVariants;
var Button = React.forwardRef(function (_a, ref) {
  var className = _a.className,
    variant = _a.variant,
    size = _a.size,
    _b = _a.asChild,
    asChild = _b === void 0 ? false : _b,
    props = __rest(_a, ["className", "variant", "size", "asChild"]);
  var Comp = asChild ? react_slot_1.Slot : "button";
  return React.createElement(Comp, __assign({
    className: (0, utils_1.cn)(buttonVariants({
      variant: variant,
      size: size,
      className: className
    })),
    ref: ref
  }, props));
});
exports.Button = Button;
Button.displayName = "Button";

/***/ }),

/***/ "./assets/components/ui/card.tsx":
/*!***************************************!*\
  !*** ./assets/components/ui/card.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



__webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CardContent = exports.CardDescription = exports.CardTitle = exports.CardFooter = exports.CardHeader = exports.Card = void 0;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var utils_1 = __webpack_require__(/*! ../../lib/utils */ "./assets/lib/utils.ts");
var Card = React.forwardRef(function (_a, ref) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return React.createElement("div", __assign({
    ref: ref,
    className: (0, utils_1.cn)("rounded-xl border border-gray-200 bg-white shadow-sm", className)
  }, props));
});
exports.Card = Card;
Card.displayName = "Card";
var CardHeader = React.forwardRef(function (_a, ref) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return React.createElement("div", __assign({
    ref: ref,
    className: (0, utils_1.cn)("flex flex-col space-y-1.5 p-6", className)
  }, props));
});
exports.CardHeader = CardHeader;
CardHeader.displayName = "CardHeader";
var CardTitle = React.forwardRef(function (_a, ref) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return React.createElement("h3", __assign({
    ref: ref,
    className: (0, utils_1.cn)("font-semibold leading-none tracking-tight", className)
  }, props));
});
exports.CardTitle = CardTitle;
CardTitle.displayName = "CardTitle";
var CardDescription = React.forwardRef(function (_a, ref) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return React.createElement("p", __assign({
    ref: ref,
    className: (0, utils_1.cn)("text-sm text-gray-500", className)
  }, props));
});
exports.CardDescription = CardDescription;
CardDescription.displayName = "CardDescription";
var CardContent = React.forwardRef(function (_a, ref) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return React.createElement("div", __assign({
    ref: ref,
    className: (0, utils_1.cn)("p-6 pt-0", className)
  }, props));
});
exports.CardContent = CardContent;
CardContent.displayName = "CardContent";
var CardFooter = React.forwardRef(function (_a, ref) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return React.createElement("div", __assign({
    ref: ref,
    className: (0, utils_1.cn)("flex items-center p-6 pt-0", className)
  }, props));
});
exports.CardFooter = CardFooter;
CardFooter.displayName = "CardFooter";

/***/ }),

/***/ "./assets/components/ui/dropdown-menu.tsx":
/*!************************************************!*\
  !*** ./assets/components/ui/dropdown-menu.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



__webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DropdownMenuRadioGroup = exports.DropdownMenuSubTrigger = exports.DropdownMenuSubContent = exports.DropdownMenuSub = exports.DropdownMenuPortal = exports.DropdownMenuGroup = exports.DropdownMenuShortcut = exports.DropdownMenuSeparator = exports.DropdownMenuLabel = exports.DropdownMenuRadioItem = exports.DropdownMenuCheckboxItem = exports.DropdownMenuItem = exports.DropdownMenuContent = exports.DropdownMenuTrigger = exports.DropdownMenu = void 0;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var DropdownMenuPrimitive = __importStar(__webpack_require__(/*! @radix-ui/react-dropdown-menu */ "./node_modules/@radix-ui/react-dropdown-menu/dist/index.js"));
var lucide_react_1 = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/lucide-react.js");
var utils_1 = __webpack_require__(/*! ../../lib/utils */ "./assets/lib/utils.ts");
var DropdownMenu = DropdownMenuPrimitive.Root;
exports.DropdownMenu = DropdownMenu;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
exports.DropdownMenuTrigger = DropdownMenuTrigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
exports.DropdownMenuGroup = DropdownMenuGroup;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
exports.DropdownMenuPortal = DropdownMenuPortal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
exports.DropdownMenuSub = DropdownMenuSub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
exports.DropdownMenuRadioGroup = DropdownMenuRadioGroup;
var DropdownMenuSubTrigger = React.forwardRef(function (_a, ref) {
  var className = _a.className,
    inset = _a.inset,
    children = _a.children,
    props = __rest(_a, ["className", "inset", "children"]);
  return React.createElement(DropdownMenuPrimitive.SubTrigger, __assign({
    ref: ref,
    className: (0, utils_1.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-gray-100 data-[state=open]:bg-gray-100", inset && "pl-8", className)
  }, props), children, React.createElement(lucide_react_1.ChevronRight, {
    className: "ml-auto h-4 w-4"
  }));
});
exports.DropdownMenuSubTrigger = DropdownMenuSubTrigger;
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React.forwardRef(function (_a, ref) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return React.createElement(DropdownMenuPrimitive.SubContent, __assign({
    ref: ref,
    className: (0, utils_1.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 text-gray-950 shadow-lg", className)
  }, props));
});
exports.DropdownMenuSubContent = DropdownMenuSubContent;
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React.forwardRef(function (_a, ref) {
  var className = _a.className,
    _b = _a.sideOffset,
    sideOffset = _b === void 0 ? 4 : _b,
    props = __rest(_a, ["className", "sideOffset"]);
  return React.createElement(DropdownMenuPrimitive.Portal, null, React.createElement(DropdownMenuPrimitive.Content, __assign({
    ref: ref,
    sideOffset: sideOffset,
    className: (0, utils_1.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 text-gray-950 shadow-md", className)
  }, props)));
});
exports.DropdownMenuContent = DropdownMenuContent;
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React.forwardRef(function (_a, ref) {
  var className = _a.className,
    inset = _a.inset,
    props = __rest(_a, ["className", "inset"]);
  return React.createElement(DropdownMenuPrimitive.Item, __assign({
    ref: ref,
    className: (0, utils_1.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50", inset && "pl-8", className)
  }, props));
});
exports.DropdownMenuItem = DropdownMenuItem;
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React.forwardRef(function (_a, ref) {
  var className = _a.className,
    children = _a.children,
    checked = _a.checked,
    props = __rest(_a, ["className", "children", "checked"]);
  return React.createElement(DropdownMenuPrimitive.CheckboxItem, __assign({
    ref: ref,
    className: (0, utils_1.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
    checked: checked
  }, props), React.createElement("span", {
    className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
  }, React.createElement(DropdownMenuPrimitive.ItemIndicator, null, React.createElement(lucide_react_1.Check, {
    className: "h-4 w-4"
  }))), children);
});
exports.DropdownMenuCheckboxItem = DropdownMenuCheckboxItem;
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React.forwardRef(function (_a, ref) {
  var className = _a.className,
    children = _a.children,
    props = __rest(_a, ["className", "children"]);
  return React.createElement(DropdownMenuPrimitive.RadioItem, __assign({
    ref: ref,
    className: (0, utils_1.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className)
  }, props), React.createElement("span", {
    className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
  }, React.createElement(DropdownMenuPrimitive.ItemIndicator, null, React.createElement(lucide_react_1.Circle, {
    className: "h-2 w-2 fill-current"
  }))), children);
});
exports.DropdownMenuRadioItem = DropdownMenuRadioItem;
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React.forwardRef(function (_a, ref) {
  var className = _a.className,
    inset = _a.inset,
    props = __rest(_a, ["className", "inset"]);
  return React.createElement(DropdownMenuPrimitive.Label, __assign({
    ref: ref,
    className: (0, utils_1.cn)("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)
  }, props));
});
exports.DropdownMenuLabel = DropdownMenuLabel;
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React.forwardRef(function (_a, ref) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return React.createElement(DropdownMenuPrimitive.Separator, __assign({
    ref: ref,
    className: (0, utils_1.cn)("-mx-1 my-1 h-px bg-gray-100", className)
  }, props));
});
exports.DropdownMenuSeparator = DropdownMenuSeparator;
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = function DropdownMenuShortcut(_a) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return React.createElement("span", __assign({
    className: (0, utils_1.cn)("ml-auto text-xs tracking-widest opacity-60", className)
  }, props));
};
exports.DropdownMenuShortcut = DropdownMenuShortcut;
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

/***/ }),

/***/ "./assets/components/ui/input.tsx":
/*!****************************************!*\
  !*** ./assets/components/ui/input.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



__webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Input = void 0;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var utils_1 = __webpack_require__(/*! ../../lib/utils */ "./assets/lib/utils.ts");
var Input = React.forwardRef(function (_a, ref) {
  var className = _a.className,
    type = _a.type,
    props = __rest(_a, ["className", "type"]);
  return React.createElement("input", __assign({
    type: type,
    className: (0, utils_1.cn)("flex h-9 w-full rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-50", className),
    ref: ref
  }, props));
});
exports.Input = Input;
Input.displayName = "Input";

/***/ }),

/***/ "./assets/components/ui/label.tsx":
/*!****************************************!*\
  !*** ./assets/components/ui/label.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



__webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Label = void 0;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var LabelPrimitive = __importStar(__webpack_require__(/*! @radix-ui/react-label */ "./node_modules/@radix-ui/react-label/dist/index.js"));
var class_variance_authority_1 = __webpack_require__(/*! class-variance-authority */ "./node_modules/class-variance-authority/dist/index.js");
var utils_1 = __webpack_require__(/*! ../../lib/utils */ "./assets/lib/utils.ts");
var labelVariants = (0, class_variance_authority_1.cva)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = React.forwardRef(function (_a, ref) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return React.createElement(LabelPrimitive.Root, __assign({
    ref: ref,
    className: (0, utils_1.cn)(labelVariants(), className)
  }, props));
});
exports.Label = Label;
Label.displayName = LabelPrimitive.Root.displayName;

/***/ }),

/***/ "./assets/components/ui/select.tsx":
/*!*****************************************!*\
  !*** ./assets/components/ui/select.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



__webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SelectScrollDownButton = exports.SelectScrollUpButton = exports.SelectSeparator = exports.SelectItem = exports.SelectLabel = exports.SelectContent = exports.SelectTrigger = exports.SelectValue = exports.SelectGroup = exports.Select = void 0;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var SelectPrimitive = __importStar(__webpack_require__(/*! @radix-ui/react-select */ "./node_modules/@radix-ui/react-select/dist/index.js"));
var lucide_react_1 = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/lucide-react.js");
var utils_1 = __webpack_require__(/*! ../../lib/utils */ "./assets/lib/utils.ts");
var Select = SelectPrimitive.Root;
exports.Select = Select;
var SelectGroup = SelectPrimitive.Group;
exports.SelectGroup = SelectGroup;
var SelectValue = SelectPrimitive.Value;
exports.SelectValue = SelectValue;
var SelectTrigger = React.forwardRef(function (_a, ref) {
  var className = _a.className,
    children = _a.children,
    props = __rest(_a, ["className", "children"]);
  return React.createElement(SelectPrimitive.Trigger, __assign({
    ref: ref,
    className: (0, utils_1.cn)("flex h-9 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-1 text-sm ring-offset-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className)
  }, props), children, React.createElement(SelectPrimitive.Icon, {
    asChild: true
  }, React.createElement(lucide_react_1.ChevronDown, {
    className: "h-4 w-4 opacity-50"
  })));
});
exports.SelectTrigger = SelectTrigger;
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React.forwardRef(function (_a, ref) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return React.createElement(SelectPrimitive.ScrollUpButton, __assign({
    ref: ref,
    className: (0, utils_1.cn)("flex cursor-default items-center justify-center py-1", className)
  }, props), React.createElement(lucide_react_1.ChevronUp, {
    className: "h-4 w-4"
  }));
});
exports.SelectScrollUpButton = SelectScrollUpButton;
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React.forwardRef(function (_a, ref) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return React.createElement(SelectPrimitive.ScrollDownButton, __assign({
    ref: ref,
    className: (0, utils_1.cn)("flex cursor-default items-center justify-center py-1", className)
  }, props), React.createElement(lucide_react_1.ChevronDown, {
    className: "h-4 w-4"
  }));
});
exports.SelectScrollDownButton = SelectScrollDownButton;
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React.forwardRef(function (_a, ref) {
  var className = _a.className,
    children = _a.children,
    _b = _a.position,
    position = _b === void 0 ? "popper" : _b,
    props = __rest(_a, ["className", "children", "position"]);
  return React.createElement(SelectPrimitive.Portal, null, React.createElement(SelectPrimitive.Content, __assign({
    ref: ref,
    className: (0, utils_1.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white text-gray-950 shadow-md", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
    position: position
  }, props), React.createElement(SelectScrollUpButton, null), React.createElement(SelectPrimitive.Viewport, {
    className: (0, utils_1.cn)("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]")
  }, children), React.createElement(SelectScrollDownButton, null)));
});
exports.SelectContent = SelectContent;
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React.forwardRef(function (_a, ref) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return React.createElement(SelectPrimitive.Label, __assign({
    ref: ref,
    className: (0, utils_1.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", className)
  }, props));
});
exports.SelectLabel = SelectLabel;
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React.forwardRef(function (_a, ref) {
  var className = _a.className,
    children = _a.children,
    props = __rest(_a, ["className", "children"]);
  return React.createElement(SelectPrimitive.Item, __assign({
    ref: ref,
    className: (0, utils_1.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-gray-100 focus:text-gray-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className)
  }, props), React.createElement("span", {
    className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
  }, React.createElement(SelectPrimitive.ItemIndicator, null, React.createElement(lucide_react_1.Check, {
    className: "h-4 w-4"
  }))), React.createElement(SelectPrimitive.ItemText, null, children));
});
exports.SelectItem = SelectItem;
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React.forwardRef(function (_a, ref) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return React.createElement(SelectPrimitive.Separator, __assign({
    ref: ref,
    className: (0, utils_1.cn)("-mx-1 my-1 h-px bg-gray-100", className)
  }, props));
});
exports.SelectSeparator = SelectSeparator;
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

/***/ }),

/***/ "./assets/components/ui/sheet.tsx":
/*!****************************************!*\
  !*** ./assets/components/ui/sheet.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



__webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SheetDescription = exports.SheetTitle = exports.SheetFooter = exports.SheetHeader = exports.SheetContent = exports.SheetClose = exports.SheetTrigger = exports.SheetOverlay = exports.SheetPortal = exports.Sheet = void 0;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var DialogPrimitive = __importStar(__webpack_require__(/*! @radix-ui/react-dialog */ "./node_modules/@radix-ui/react-dialog/dist/index.js"));
var lucide_react_1 = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/lucide-react.js");
var utils_1 = __webpack_require__(/*! ../../lib/utils */ "./assets/lib/utils.ts");
var Sheet = DialogPrimitive.Root;
exports.Sheet = Sheet;
var SheetTrigger = DialogPrimitive.Trigger;
exports.SheetTrigger = SheetTrigger;
var SheetClose = DialogPrimitive.Close;
exports.SheetClose = SheetClose;
var SheetPortal = DialogPrimitive.Portal;
exports.SheetPortal = SheetPortal;
var SheetOverlay = React.forwardRef(function (_a, ref) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return React.createElement(DialogPrimitive.Overlay, __assign({
    className: (0, utils_1.cn)("sheet-overlay fixed inset-0 z-50 bg-black/50", className)
  }, props, {
    ref: ref
  }));
});
exports.SheetOverlay = SheetOverlay;
SheetOverlay.displayName = DialogPrimitive.Overlay.displayName;
var sheetVariants = {
  right: "inset-y-0 right-0 h-full w-full sm:w-[400px] border-l border-gray-200",
  left: "inset-y-0 left-0 h-full w-full sm:w-[400px] border-r border-gray-200",
  top: "inset-x-0 top-0 h-auto border-b border-gray-200",
  bottom: "inset-x-0 bottom-0 h-auto border-t border-gray-200"
};
var SheetContent = React.forwardRef(function (_a, ref) {
  var _b = _a.side,
    side = _b === void 0 ? "right" : _b,
    className = _a.className,
    children = _a.children,
    props = __rest(_a, ["side", "className", "children"]);
  return React.createElement(SheetPortal, null, React.createElement(SheetOverlay, null), React.createElement(DialogPrimitive.Content, __assign({
    ref: ref,
    "data-side": side,
    className: (0, utils_1.cn)("sheet-content fixed z-50 gap-4 bg-white p-6 shadow-xl", sheetVariants[side], className)
  }, props), children, React.createElement(DialogPrimitive.Close, {
    className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none"
  }, React.createElement(lucide_react_1.X, {
    className: "h-4 w-4"
  }), React.createElement("span", {
    className: "sr-only"
  }, "Close"))));
});
exports.SheetContent = SheetContent;
SheetContent.displayName = DialogPrimitive.Content.displayName;
var SheetHeader = function SheetHeader(_a) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return React.createElement("div", __assign({
    className: (0, utils_1.cn)("flex flex-col space-y-2 text-center sm:text-left", className)
  }, props));
};
exports.SheetHeader = SheetHeader;
SheetHeader.displayName = "SheetHeader";
var SheetFooter = function SheetFooter(_a) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return React.createElement("div", __assign({
    className: (0, utils_1.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)
  }, props));
};
exports.SheetFooter = SheetFooter;
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React.forwardRef(function (_a, ref) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return React.createElement(DialogPrimitive.Title, __assign({
    ref: ref,
    className: (0, utils_1.cn)("text-lg font-semibold text-gray-900", className)
  }, props));
});
exports.SheetTitle = SheetTitle;
SheetTitle.displayName = DialogPrimitive.Title.displayName;
var SheetDescription = React.forwardRef(function (_a, ref) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return React.createElement(DialogPrimitive.Description, __assign({
    ref: ref,
    className: (0, utils_1.cn)("text-sm text-gray-500", className)
  }, props));
});
exports.SheetDescription = SheetDescription;
SheetDescription.displayName = DialogPrimitive.Description.displayName;

/***/ }),

/***/ "./assets/components/ui/skeleton.tsx":
/*!*******************************************!*\
  !*** ./assets/components/ui/skeleton.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



__webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Skeleton = void 0;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var utils_1 = __webpack_require__(/*! ../../lib/utils */ "./assets/lib/utils.ts");
function Skeleton(_a) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return React.createElement("div", __assign({
    className: (0, utils_1.cn)("animate-pulse rounded-md bg-gray-200", className)
  }, props));
}
exports.Skeleton = Skeleton;

/***/ }),

/***/ "./assets/components/ui/textarea.tsx":
/*!*******************************************!*\
  !*** ./assets/components/ui/textarea.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



__webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Textarea = void 0;
var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var utils_1 = __webpack_require__(/*! ../../lib/utils */ "./assets/lib/utils.ts");
var Textarea = React.forwardRef(function (_a, ref) {
  var className = _a.className,
    props = __rest(_a, ["className"]);
  return React.createElement("textarea", __assign({
    className: (0, utils_1.cn)("flex min-h-[120px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-50", className),
    ref: ref
  }, props));
});
exports.Textarea = Textarea;
Textarea.displayName = "Textarea";

/***/ }),

/***/ "./assets/lib/utils.ts":
/*!*****************************!*\
  !*** ./assets/lib/utils.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.cn = void 0;
var clsx_1 = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.js");
var tailwind_merge_1 = __webpack_require__(/*! tailwind-merge */ "./node_modules/tailwind-merge/dist/bundle-cjs.js");
function cn() {
  var inputs = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    inputs[_i] = arguments[_i];
  }
  return (0, tailwind_merge_1.twMerge)((0, clsx_1.clsx)(inputs));
}
exports.cn = cn;

/***/ }),

/***/ "./assets/pages/auth/AuthPage.tsx":
/*!****************************************!*\
  !*** ./assets/pages/auth/AuthPage.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var framer_motion_1 = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/cjs/index.js");
var react_hot_toast_1 = __importStar(__webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/index.js"));
var lucide_react_1 = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/lucide-react.js");
var card_1 = __webpack_require__(/*! ../../components/ui/card */ "./assets/components/ui/card.tsx");
var button_1 = __webpack_require__(/*! ../../components/ui/button */ "./assets/components/ui/button.tsx");
var input_1 = __webpack_require__(/*! ../../components/ui/input */ "./assets/components/ui/input.tsx");
var label_1 = __webpack_require__(/*! ../../components/ui/label */ "./assets/components/ui/label.tsx");
function AuthPage() {
  var _this = this;
  var _a = (0, react_1.useState)("login"),
    mode = _a[0],
    setMode = _a[1];
  var _b = (0, react_1.useState)(""),
    email = _b[0],
    setEmail = _b[1];
  var _c = (0, react_1.useState)(""),
    password = _c[0],
    setPassword = _c[1];
  var _d = (0, react_1.useState)(false),
    loading = _d[0],
    setLoading = _d[1];
  var _e = (0, react_1.useState)(false),
    needsConfirmation = _e[0],
    setNeedsConfirmation = _e[1];
  var _f = (0, react_1.useState)(""),
    confirmationEmail = _f[0],
    setConfirmationEmail = _f[1];
  var handleSubmit = function handleSubmit(event) {
    return __awaiter(_this, void 0, void 0, function () {
      var response, payload, response, payload, error_1;
      var _a, _b;
      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            event.preventDefault();
            setLoading(true);
            setNeedsConfirmation(false);
            _c.label = 1;
          case 1:
            _c.trys.push([1, 8, 9, 10]);
            if (!(mode === "register")) return [3, 4];
            return [4, fetch("/api/register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                email: email,
                password: password
              })
            })];
          case 2:
            response = _c.sent();
            return [4, response.json()["catch"](function () {
              return {};
            })];
          case 3:
            payload = _c.sent();
            if (!response.ok) {
              react_hot_toast_1["default"].error((_a = payload.message) !== null && _a !== void 0 ? _a : "Registration failed");
            } else {
              react_hot_toast_1["default"].success("Account created! Check your email to confirm.");
              setMode("login");
              setPassword("");
            }
            return [3, 7];
          case 4:
            return [4, fetch("/api/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                email: email,
                password: password
              })
            })];
          case 5:
            response = _c.sent();
            return [4, response.json()["catch"](function () {
              return {};
            })];
          case 6:
            payload = _c.sent();
            if (!response.ok) {
              if (payload.needsConfirmation) {
                setNeedsConfirmation(true);
                setConfirmationEmail(email);
                react_hot_toast_1["default"].error("Please confirm your email first");
              } else {
                react_hot_toast_1["default"].error((_b = payload.message) !== null && _b !== void 0 ? _b : "Login failed");
              }
            } else {
              react_hot_toast_1["default"].success("Login successful!");
              localStorage.setItem("user_email", email);
              setTimeout(function () {
                window.location.href = "/notes";
              }, 500);
            }
            _c.label = 7;
          case 7:
            return [3, 10];
          case 8:
            error_1 = _c.sent();
            react_hot_toast_1["default"].error("Something went wrong");
            return [3, 10];
          case 9:
            setLoading(false);
            return [7];
          case 10:
            return [2];
        }
      });
    });
  };
  var handleResendConfirmation = function handleResendConfirmation() {
    return __awaiter(_this, void 0, void 0, function () {
      var response, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            setLoading(true);
            _b.label = 1;
          case 1:
            _b.trys.push([1, 3, 4, 5]);
            return [4, fetch("/api/resend-confirmation", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                email: confirmationEmail
              })
            })];
          case 2:
            response = _b.sent();
            if (response.ok) {
              react_hot_toast_1["default"].success("Confirmation email sent!");
              setNeedsConfirmation(false);
            } else {
              react_hot_toast_1["default"].error("Failed to send confirmation email");
            }
            return [3, 5];
          case 3:
            _a = _b.sent();
            react_hot_toast_1["default"].error("Failed to send confirmation email");
            return [3, 5];
          case 4:
            setLoading(false);
            return [7];
          case 5:
            return [2];
        }
      });
    });
  };
  var toggleMode = function toggleMode() {
    setMode(mode === "login" ? "register" : "login");
    setNeedsConfirmation(false);
  };
  return react_1["default"].createElement("div", {
    className: "min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4"
  }, react_1["default"].createElement(react_hot_toast_1.Toaster, {
    position: "top-center"
  }), react_1["default"].createElement(framer_motion_1.motion.div, {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.4
    },
    className: "w-full max-w-md"
  }, react_1["default"].createElement(framer_motion_1.AnimatePresence, {
    mode: "wait"
  }, react_1["default"].createElement(framer_motion_1.motion.div, {
    key: mode,
    initial: {
      opacity: 0,
      x: mode === "login" ? -20 : 20
    },
    animate: {
      opacity: 1,
      x: 0
    },
    exit: {
      opacity: 0,
      x: mode === "login" ? 20 : -20
    },
    transition: {
      duration: 0.2
    }
  }, react_1["default"].createElement(card_1.Card, {
    className: "border-0 shadow-xl"
  }, react_1["default"].createElement(card_1.CardHeader, {
    className: "space-y-1 pb-4"
  }, react_1["default"].createElement(card_1.CardTitle, {
    className: "text-2xl text-center"
  }, mode === "login" ? "Welcome back" : "Create account"), react_1["default"].createElement("p", {
    className: "text-sm text-center text-gray-500"
  }, mode === "login" ? "Sign in to access your notes" : "Get started with your free account")), react_1["default"].createElement(card_1.CardContent, null, needsConfirmation ? react_1["default"].createElement("div", {
    className: "space-y-4 text-center"
  }, react_1["default"].createElement("div", {
    className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100"
  }, react_1["default"].createElement(lucide_react_1.Mail, {
    className: "h-6 w-6 text-yellow-600"
  })), react_1["default"].createElement("div", null, react_1["default"].createElement("h3", {
    className: "font-semibold text-gray-900"
  }, "Email not confirmed"), react_1["default"].createElement("p", {
    className: "mt-1 text-sm text-gray-500"
  }, "Please check your inbox and confirm your email before logging in.")), react_1["default"].createElement(button_1.Button, {
    onClick: handleResendConfirmation,
    disabled: loading,
    className: "w-full"
  }, loading ? react_1["default"].createElement(lucide_react_1.Loader2, {
    className: "mr-2 h-4 w-4 animate-spin"
  }) : react_1["default"].createElement(lucide_react_1.Mail, {
    className: "mr-2 h-4 w-4"
  }), "Resend confirmation email"), react_1["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setNeedsConfirmation(false);
    },
    className: "text-sm text-gray-500 hover:text-gray-700"
  }, "Back to login")) : react_1["default"].createElement("form", {
    onSubmit: handleSubmit,
    className: "space-y-4"
  }, react_1["default"].createElement("div", {
    className: "space-y-2"
  }, react_1["default"].createElement(label_1.Label, {
    htmlFor: "email"
  }, "Email"), react_1["default"].createElement("div", {
    className: "relative"
  }, react_1["default"].createElement(lucide_react_1.Mail, {
    className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
  }), react_1["default"].createElement(input_1.Input, {
    id: "email",
    type: "email",
    placeholder: "you@example.com",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    className: "pl-9",
    required: true
  }))), react_1["default"].createElement("div", {
    className: "space-y-2"
  }, react_1["default"].createElement(label_1.Label, {
    htmlFor: "password"
  }, "Password"), react_1["default"].createElement("div", {
    className: "relative"
  }, react_1["default"].createElement(lucide_react_1.Lock, {
    className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
  }), react_1["default"].createElement(input_1.Input, {
    id: "password",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    },
    className: "pl-9",
    minLength: 6,
    autoComplete: "off",
    required: true
  }))), react_1["default"].createElement(button_1.Button, {
    type: "submit",
    className: "w-full",
    disabled: loading
  }, loading && react_1["default"].createElement(lucide_react_1.Loader2, {
    className: "mr-2 h-4 w-4 animate-spin"
  }), mode === "login" ? "Sign in" : "Create account"))), !needsConfirmation && react_1["default"].createElement(card_1.CardFooter, {
    className: "flex justify-center pb-6"
  }, react_1["default"].createElement("p", {
    className: "text-sm text-gray-500"
  }, mode === "login" ? "Don't have an account?" : "Already have an account?", " ", react_1["default"].createElement("button", {
    type: "button",
    onClick: toggleMode,
    className: "font-semibold text-gray-900 hover:underline"
  }, mode === "login" ? "Sign up" : "Sign in"))))))));
}
exports["default"] = AuthPage;

/***/ }),

/***/ "./assets/pages/notes/page.tsx":
/*!*************************************!*\
  !*** ./assets/pages/notes/page.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



__webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
__webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var framer_motion_1 = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/cjs/index.js");
var react_hot_toast_1 = __importDefault(__webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/index.js"));
var lucide_react_1 = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/lucide-react.js");
var MainLayout_1 = __webpack_require__(/*! ../../components/layout/MainLayout */ "./assets/components/layout/MainLayout.tsx");
var button_1 = __webpack_require__(/*! ../../components/ui/button */ "./assets/components/ui/button.tsx");
var input_1 = __webpack_require__(/*! ../../components/ui/input */ "./assets/components/ui/input.tsx");
var select_1 = __webpack_require__(/*! ../../components/ui/select */ "./assets/components/ui/select.tsx");
var NoteCard_1 = __webpack_require__(/*! ../../components/notes/NoteCard */ "./assets/components/notes/NoteCard.tsx");
var NoteForm_1 = __webpack_require__(/*! ../../components/notes/NoteForm */ "./assets/components/notes/NoteForm.tsx");
var DeleteConfirmDialog_1 = __webpack_require__(/*! ../../components/notes/DeleteConfirmDialog */ "./assets/components/notes/DeleteConfirmDialog.tsx");
var NotesSkeleton_1 = __webpack_require__(/*! ../../components/notes/NotesSkeleton */ "./assets/components/notes/NotesSkeleton.tsx");
var sheet_1 = __webpack_require__(/*! ../../components/ui/sheet */ "./assets/components/ui/sheet.tsx");
var badge_1 = __webpack_require__(/*! ../../components/ui/badge */ "./assets/components/ui/badge.tsx");
function NotesPage() {
  var _this = this;
  var _a = (0, react_1.useState)([]),
    notes = _a[0],
    setNotes = _a[1];
  var _b = (0, react_1.useState)([]),
    categories = _b[0],
    setCategories = _b[1];
  var _c = (0, react_1.useState)(true),
    isLoading = _c[0],
    setIsLoading = _c[1];
  var _d = (0, react_1.useState)(false),
    isSubmitting = _d[0],
    setIsSubmitting = _d[1];
  var _e = (0, react_1.useState)(false),
    isDeleting = _e[0],
    setIsDeleting = _e[1];
  var _f = (0, react_1.useState)(""),
    search = _f[0],
    setSearch = _f[1];
  var _g = (0, react_1.useState)("all"),
    statusFilter = _g[0],
    setStatusFilter = _g[1];
  var _h = (0, react_1.useState)("all"),
    categoryFilter = _h[0],
    setCategoryFilter = _h[1];
  var _j = (0, react_1.useState)(false),
    isFormOpen = _j[0],
    setIsFormOpen = _j[1];
  var _k = (0, react_1.useState)(null),
    editingNote = _k[0],
    setEditingNote = _k[1];
  var _l = (0, react_1.useState)(null),
    viewingNote = _l[0],
    setViewingNote = _l[1];
  var _m = (0, react_1.useState)(null),
    deleteNoteId = _m[0],
    setDeleteNoteId = _m[1];
  var fetchNotes = (0, react_1.useCallback)(function () {
    return __awaiter(_this, void 0, void 0, function () {
      var params, response, data, error_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 3, 4, 5]);
            params = new URLSearchParams();
            if (search) params.append("search", search);
            if (statusFilter && statusFilter !== "all") params.append("status", statusFilter);
            if (categoryFilter && categoryFilter !== "all") params.append("category", categoryFilter);
            return [4, fetch("/api/notes?".concat(params))];
          case 1:
            response = _a.sent();
            if (!response.ok) throw new Error("Failed to fetch notes");
            return [4, response.json()];
          case 2:
            data = _a.sent();
            setNotes(data.notes || []);
            setCategories(data.categories || []);
            return [3, 5];
          case 3:
            error_1 = _a.sent();
            react_hot_toast_1["default"].error("Failed to load notes");
            console.error(error_1);
            return [3, 5];
          case 4:
            setIsLoading(false);
            return [7];
          case 5:
            return [2];
        }
      });
    });
  }, [search, statusFilter, categoryFilter]);
  (0, react_1.useEffect)(function () {
    fetchNotes();
  }, [fetchNotes]);
  var handleCreateNote = function handleCreateNote(data) {
    return __awaiter(_this, void 0, void 0, function () {
      var response, error_2;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            setIsSubmitting(true);
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, 4, 5]);
            return [4, fetch("/api/notes", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(data)
            })];
          case 2:
            response = _a.sent();
            if (!response.ok) throw new Error("Failed to create note");
            react_hot_toast_1["default"].success("Note created successfully!");
            setIsFormOpen(false);
            fetchNotes();
            return [3, 5];
          case 3:
            error_2 = _a.sent();
            react_hot_toast_1["default"].error("Failed to create note");
            return [3, 5];
          case 4:
            setIsSubmitting(false);
            return [7];
          case 5:
            return [2];
        }
      });
    });
  };
  var handleUpdateNote = function handleUpdateNote(data) {
    return __awaiter(_this, void 0, void 0, function () {
      var response, error_3;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!editingNote) return [2];
            setIsSubmitting(true);
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, 4, 5]);
            return [4, fetch("/api/notes/".concat(editingNote.id), {
              method: "PUT",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(data)
            })];
          case 2:
            response = _a.sent();
            if (!response.ok) throw new Error("Failed to update note");
            react_hot_toast_1["default"].success("Note updated successfully!");
            setIsFormOpen(false);
            setEditingNote(null);
            fetchNotes();
            return [3, 5];
          case 3:
            error_3 = _a.sent();
            react_hot_toast_1["default"].error("Failed to update note");
            return [3, 5];
          case 4:
            setIsSubmitting(false);
            return [7];
          case 5:
            return [2];
        }
      });
    });
  };
  var handleDeleteNote = function handleDeleteNote(id) {
    return __awaiter(_this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        setDeleteNoteId(id);
        return [2];
      });
    });
  };
  var confirmDelete = function confirmDelete() {
    return __awaiter(_this, void 0, void 0, function () {
      var response, error_4;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!deleteNoteId) return [2];
            setIsDeleting(true);
            _a.label = 1;
          case 1:
            _a.trys.push([1, 3, 4, 5]);
            return [4, fetch("/api/notes/".concat(deleteNoteId), {
              method: "DELETE"
            })];
          case 2:
            response = _a.sent();
            if (!response.ok) throw new Error("Failed to delete note");
            react_hot_toast_1["default"].success("Note deleted");
            setDeleteNoteId(null);
            fetchNotes();
            return [3, 5];
          case 3:
            error_4 = _a.sent();
            react_hot_toast_1["default"].error("Failed to delete note");
            return [3, 5];
          case 4:
            setIsDeleting(false);
            return [7];
          case 5:
            return [2];
        }
      });
    });
  };
  var handleEdit = function handleEdit(note) {
    setEditingNote(note);
    setIsFormOpen(true);
  };
  var handleView = function handleView(note) {
    setViewingNote(note);
  };
  var handleCloseForm = function handleCloseForm() {
    setIsFormOpen(false);
    setEditingNote(null);
  };
  var handleCloseView = function handleCloseView(open) {
    if (open === false || open === undefined) {
      setViewingNote(null);
    }
  };
  var handleSubmit = editingNote ? handleUpdateNote : handleCreateNote;
  return react_1["default"].createElement(MainLayout_1.MainLayout, {
    title: "My Notes",
    isLoading: isLoading
  }, react_1["default"].createElement("div", {
    className: "mb-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
  }, react_1["default"].createElement("div", {
    className: "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
  }, react_1["default"].createElement("div", {
    className: "flex flex-1 flex-col gap-3 sm:flex-row"
  }, react_1["default"].createElement("div", {
    className: "relative flex-1"
  }, react_1["default"].createElement(lucide_react_1.Search, {
    className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
  }), react_1["default"].createElement(input_1.Input, {
    type: "text",
    placeholder: "Search notes...",
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    className: "pl-9"
  })), react_1["default"].createElement("div", {
    className: "flex gap-2"
  }, react_1["default"].createElement(select_1.Select, {
    value: statusFilter,
    onValueChange: setStatusFilter
  }, react_1["default"].createElement(select_1.SelectTrigger, {
    className: "h-9 w-[140px]"
  }, react_1["default"].createElement(select_1.SelectValue, {
    placeholder: "All Status"
  })), react_1["default"].createElement(select_1.SelectContent, null, react_1["default"].createElement(select_1.SelectItem, {
    value: "all"
  }, "All Status"), react_1["default"].createElement(select_1.SelectItem, {
    value: "new"
  }, "New"), react_1["default"].createElement(select_1.SelectItem, {
    value: "todo"
  }, "Todo"), react_1["default"].createElement(select_1.SelectItem, {
    value: "done"
  }, "Done"))), react_1["default"].createElement(select_1.Select, {
    value: categoryFilter,
    onValueChange: setCategoryFilter
  }, react_1["default"].createElement(select_1.SelectTrigger, {
    className: "h-9 w-[160px]"
  }, react_1["default"].createElement(select_1.SelectValue, {
    placeholder: "All Categories"
  })), react_1["default"].createElement(select_1.SelectContent, null, react_1["default"].createElement(select_1.SelectItem, {
    value: "all"
  }, "All Categories"), categories.map(function (cat) {
    return react_1["default"].createElement(select_1.SelectItem, {
      key: cat,
      value: cat
    }, cat);
  }))))), react_1["default"].createElement("div", {
    className: "flex gap-2"
  }, react_1["default"].createElement(button_1.Button, {
    variant: "outline",
    onClick: function onClick() {
      setSearch("");
      setStatusFilter("all");
      setCategoryFilter("all");
    },
    disabled: !search && statusFilter === "all" && categoryFilter === "all"
  }, react_1["default"].createElement(lucide_react_1.X, {
    className: "mr-2 h-4 w-4"
  }), "Clear"), react_1["default"].createElement(button_1.Button, {
    onClick: function onClick() {
      return setIsFormOpen(true);
    }
  }, react_1["default"].createElement(lucide_react_1.Plus, {
    className: "mr-2 h-4 w-4"
  }), "New Note")))), isLoading ? react_1["default"].createElement(NotesSkeleton_1.NotesGridSkeleton, {
    count: 6
  }) : notes.length === 0 ? react_1["default"].createElement(framer_motion_1.motion.div, {
    initial: {
      opacity: 0,
      scale: 0.95
    },
    animate: {
      opacity: 1,
      scale: 1
    },
    className: "flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-200 bg-white p-12"
  }, react_1["default"].createElement(lucide_react_1.StickyNote, {
    className: "mb-4 h-12 w-12 text-gray-300"
  }), react_1["default"].createElement("h3", {
    className: "mb-2 text-lg font-semibold text-gray-900"
  }, "No notes yet"), react_1["default"].createElement("p", {
    className: "mb-4 text-sm text-gray-500"
  }, search || statusFilter || categoryFilter ? "No notes match your filters" : "Create your first note to get started"), !search && !statusFilter && !categoryFilter && react_1["default"].createElement(button_1.Button, {
    onClick: function onClick() {
      return setIsFormOpen(true);
    }
  }, react_1["default"].createElement(lucide_react_1.Plus, {
    className: "mr-2 h-4 w-4"
  }), "Create Note")) : react_1["default"].createElement("div", {
    className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
  }, react_1["default"].createElement(framer_motion_1.AnimatePresence, {
    mode: "popLayout"
  }, notes.map(function (note, index) {
    return react_1["default"].createElement(NoteCard_1.NoteCard, {
      key: note.id,
      note: note,
      onEdit: handleEdit,
      onDelete: handleDeleteNote,
      onView: handleView,
      index: index
    });
  }))), react_1["default"].createElement(sheet_1.Sheet, {
    open: viewingNote !== null,
    onOpenChange: handleCloseView
  }, react_1["default"].createElement(sheet_1.SheetContent, {
    side: "right",
    className: "flex flex-col"
  }, viewingNote && react_1["default"].createElement(react_1["default"].Fragment, null, react_1["default"].createElement(sheet_1.SheetHeader, {
    className: "mb-4"
  }, react_1["default"].createElement(sheet_1.SheetTitle, null, viewingNote.title), react_1["default"].createElement(sheet_1.SheetDescription, {
    className: "flex flex-wrap items-center gap-2"
  }, react_1["default"].createElement(badge_1.Badge, {
    variant: viewingNote.status
  }, viewingNote.status), viewingNote.category && react_1["default"].createElement("span", {
    className: "text-xs text-gray-500"
  }, viewingNote.category), react_1["default"].createElement("span", {
    className: "text-xs text-gray-400"
  }, new Date(viewingNote.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  })))), react_1["default"].createElement("div", {
    className: "flex-1 overflow-y-auto"
  }, react_1["default"].createElement("p", {
    className: "whitespace-pre-line break-words text-sm text-gray-700"
  }, viewingNote.content)), react_1["default"].createElement(sheet_1.SheetFooter, {
    className: "mt-6 border-t border-gray-200 pt-4"
  }, react_1["default"].createElement(button_1.Button, {
    variant: "outline",
    onClick: function onClick() {
      return setViewingNote(null);
    }
  }, "Close"))))), react_1["default"].createElement(NoteForm_1.NoteForm, {
    isOpen: isFormOpen,
    onClose: handleCloseForm,
    onSubmit: handleSubmit,
    note: editingNote,
    isSubmitting: isSubmitting
  }), react_1["default"].createElement(DeleteConfirmDialog_1.DeleteConfirmDialog, {
    isOpen: deleteNoteId !== null,
    onClose: function onClose() {
      return setDeleteNoteId(null);
    },
    onConfirm: confirmDelete,
    isDeleting: isDeleting
  }));
}
exports["default"] = NotesPage;

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_radix-ui_react-alert-dialog_dist_index_js-node_modules_radix-ui_react-dr-a0f92a"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE4QixNQUFNO0lBQUNULE9BQU8sRUFBQyxTQUFTO0lBQUNsSSxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFNLE9BQUEyVixjQUFjLENBQUMsSUFBSSxDQUFDO0lBQXBCO0VBQW9CLFdBRXBELENBQ0csQ0FFakIsQ0FDWSxDQUNULEVBR1JwWCxPQUFBLFlBQUFGLGFBQUEsQ0FBQzRWLFVBQUEsQ0FBQTVLLFFBQVE7SUFDUDFGLE1BQU0sRUFBRXlSLFVBQVU7SUFDbEJ6UCxPQUFPLEVBQUVpUixlQUFlO0lBQ3hCdE4sUUFBUSxFQUFFUSxZQUFZO0lBQ3RCL0MsSUFBSSxFQUFFd08sV0FBVztJQUNqQmhNLFlBQVksRUFBRUE7RUFBWSxFQUMxQixFQUdGaEwsT0FBQSxZQUFBRixhQUFBLENBQUM2VixxQkFBQSxDQUFBeE8sbUJBQW1CO0lBQ2xCL0IsTUFBTSxFQUFFa1MsWUFBWSxLQUFLLElBQUk7SUFDN0JsUSxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFNLE9BQUFtUSxlQUFlLENBQUMsSUFBSSxDQUFDO0lBQXJCLENBQXFCO0lBQ3BDbFEsU0FBUyxFQUFFNlEsYUFBYTtJQUN4QjNRLFVBQVUsRUFBRUE7RUFBVSxFQUN0QixDQUNTO0FBRWpCO0FBMVNBckcsa0JBQUEsR0FBQTlCLFNBQUE7Ozs7Ozs7Ozs7O0FDdENBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9sYXlvdXQvR2xvYmFsTG9hZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9sYXlvdXQvTWFpbkxheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbGF5b3V0L1NpZGViYXIudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL25vdGVzL0RlbGV0ZUNvbmZpcm1EaWFsb2cudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL25vdGVzL05vdGVDYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9ub3Rlcy9Ob3RlRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbm90ZXMvTm90ZXNTa2VsZXRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWkvYWxlcnQtZGlhbG9nLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91aS9iYWRnZS50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWkvYnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91aS9jYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91aS9kcm9wZG93bi1tZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91aS9pbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWkvbGFiZWwudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL3NlbGVjdC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvdWkvc2hlZXQudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL3VpL3NrZWxldG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy91aS90ZXh0YXJlYS50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvYXV0aC9BdXRoUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3BhZ2VzL25vdGVzL3BhZ2UudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/M2U4YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5cclxuaW1wb3J0IEF1dGhQYWdlIGZyb20gXCIuL3BhZ2VzL2F1dGgvQXV0aFBhZ2VcIjtcclxuaW1wb3J0IE5vdGVzUGFnZSBmcm9tIFwiLi9wYWdlcy9ub3Rlcy9wYWdlXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xyXG5cclxuY29uc3Qgcm9vdE5vZGUgPSBjcmVhdGVSb290KFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXHJcbik7XHJcblxyXG4vLyBEZXRlY3QgY3VycmVudCBwYWdlIGFuZCByZW5kZXIgYXBwcm9wcmlhdGUgY29tcG9uZW50XHJcbmNvbnN0IHBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcblxyXG5pZiAocGF0aCA9PT0gJy9ub3RlcycpIHtcclxuICAgIHJvb3ROb2RlLnJlbmRlcig8Tm90ZXNQYWdlIC8+KTtcclxufSBlbHNlIGlmIChwYXRoLnN0YXJ0c1dpdGgoJy9jb25maXJtLycpKSB7XHJcbiAgICAvLyBEb24ndCByZW5kZXIgUmVhY3QgYXBwIG9uIGNvbmZpcm1hdGlvbiBwYWdlIC0gbGV0IFR3aWcgaGFuZGxlIGl0XHJcbn0gZWxzZSB7XHJcbiAgICAvLyBBdXRoIHBhZ2UgaGFuZGxlcyBib3RoIGxvZ2luIGFuZCByZWdpc3RlclxyXG4gICAgcm9vdE5vZGUucmVuZGVyKDxBdXRoUGFnZSAvPik7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdsb2JhbExvYWRlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5kaXZcclxuICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XHJcbiAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxyXG4gICAgICBleGl0PXt7IG9wYWNpdHk6IDAgfX1cclxuICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB6LVsxMDBdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLXdoaXRlLzgwIGJhY2tkcm9wLWJsdXItc21cIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC00XCI+XHJcbiAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTAgdy0xMCByb3VuZGVkLWZ1bGwgYm9yZGVyLTQgYm9yZGVyLWdyYXktMjAwIGJvcmRlci10LWdyYXktOTAwXCJcclxuICAgICAgICAgIGFuaW1hdGU9e3sgcm90YXRlOiAzNjAgfX1cclxuICAgICAgICAgIHRyYW5zaXRpb249e3tcclxuICAgICAgICAgICAgZHVyYXRpb246IDEsXHJcbiAgICAgICAgICAgIHJlcGVhdDogSW5maW5pdHksXHJcbiAgICAgICAgICAgIGVhc2U6IFwibGluZWFyXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNjAwXCI+TG9hZGluZy4uLjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21vdGlvbi5kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgSGVhZGVyUHJvcHMge1xyXG4gIG9uTWVudUNsaWNrOiAoKSA9PiB2b2lkO1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSGVhZGVyKHsgb25NZW51Q2xpY2ssIHRpdGxlID0gXCJOb3Rlc1wiIH06IEhlYWRlclByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwic3RpY2t5IHRvcC0wIHotMzAgZmxleCBoLTE2IGl0ZW1zLWNlbnRlciBnYXAtNCBib3JkZXItYiBib3JkZXItZ3JheS0yMDAgYmctd2hpdGUgcHgtNCBsZzpweC02XCI+XHJcbiAgICAgIHsvKiBNZW51IGJ1dHRvbiAqL31cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIG9uQ2xpY2s9e29uTWVudUNsaWNrfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgcC0yIGhvdmVyOmJnLWdyYXktMTAwIGxnOmhpZGRlblwiXHJcbiAgICAgID5cclxuICAgICAgICA8TWVudSBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQtZ3JheS02MDBcIiAvPlxyXG4gICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIHsvKiBUaXRsZSAqL31cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwIGxnOnRleHQteGxcIj57dGl0bGV9PC9oMT5cclxuXHJcbiAgICAgIHsvKiBTcGFjZXIgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCIgLz5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgeyBUb2FzdGVyIH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5pbXBvcnQgeyBTaWRlYmFyIH0gZnJvbSBcIi4vU2lkZWJhclwiO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IHsgR2xvYmFsTG9hZGVyIH0gZnJvbSBcIi4vR2xvYmFsTG9hZGVyXCI7XHJcblxyXG5pbnRlcmZhY2UgTWFpbkxheW91dFByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIGlzTG9hZGluZz86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNYWluTGF5b3V0KHsgY2hpbGRyZW4sIHRpdGxlLCBpc0xvYWRpbmcgPSBmYWxzZSB9OiBNYWluTGF5b3V0UHJvcHMpIHtcclxuICBjb25zdCBbc2lkZWJhck9wZW4sIHNldFNpZGViYXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXNlckVtYWlsLCBzZXRVc2VyRW1haWxdID0gdXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gQ2hlY2sgaWYgd2UncmUgb24gZGVza3RvcCwgb3BlbiBzaWRlYmFyIGJ5IGRlZmF1bHRcclxuICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcclxuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID49IDEwMjQpIHtcclxuICAgICAgICBzZXRTaWRlYmFyT3Blbih0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGhhbmRsZVJlc2l6ZSgpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEZldGNoIGN1cnJlbnQgdXNlciBpbmZvXHJcbiAgICBmZXRjaChcIi9hcGkvY2hlY2stc2Vzc2lvblwiLCB7IGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIiB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiAocmVzLm9rID8gcmVzLmpzb24oKSA6IG51bGwpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhPy5hdXRoZW50aWNhdGVkICYmIGRhdGEudXNlcj8uZW1haWwpIHtcclxuICAgICAgICAgIHNldFVzZXJFbWFpbChkYXRhLnVzZXIuZW1haWwpO1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyX2VtYWlsXCIsIGRhdGEudXNlci5lbWFpbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IGNhY2hlZEVtYWlsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2VtYWlsXCIpO1xyXG4gICAgICAgICAgaWYgKGNhY2hlZEVtYWlsKSB7XHJcbiAgICAgICAgICAgIHNldFVzZXJFbWFpbChjYWNoZWRFbWFpbCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhY2hlZEVtYWlsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyX2VtYWlsXCIpO1xyXG4gICAgICAgIGlmIChjYWNoZWRFbWFpbCkge1xyXG4gICAgICAgICAgc2V0VXNlckVtYWlsKGNhY2hlZEVtYWlsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgZmV0Y2goXCIvYXBpL2xvZ291dFwiLCB7IG1ldGhvZDogXCJQT1NUXCIgfSk7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCI7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiTG9nb3V0IGZhaWxlZDpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVNpZGViYXIgPSAoKSA9PiBzZXRTaWRlYmFyT3Blbighc2lkZWJhck9wZW4pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtc2NyZWVuIGJnLWdyYXktNTBcIj5cclxuICAgICAgPFRvYXN0ZXJcclxuICAgICAgICBwb3NpdGlvbj1cInRvcC1yaWdodFwiXHJcbiAgICAgICAgdG9hc3RPcHRpb25zPXt7XHJcbiAgICAgICAgICBkdXJhdGlvbjogNDAwMCxcclxuICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzFmMjkzN1wiLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI4cHhcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzOiB7XHJcbiAgICAgICAgICAgIGljb25UaGVtZToge1xyXG4gICAgICAgICAgICAgIHByaW1hcnk6IFwiIzEwYjk4MVwiLFxyXG4gICAgICAgICAgICAgIHNlY29uZGFyeTogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZXJyb3I6IHtcclxuICAgICAgICAgICAgaWNvblRoZW1lOiB7XHJcbiAgICAgICAgICAgICAgcHJpbWFyeTogXCIjZWY0NDQ0XCIsXHJcbiAgICAgICAgICAgICAgc2Vjb25kYXJ5OiBcIiNmZmZcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxBbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgICAge2lzTG9hZGluZyAmJiA8R2xvYmFsTG9hZGVyIC8+fVxyXG4gICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cclxuXHJcbiAgICAgIDxTaWRlYmFyXHJcbiAgICAgICAgaXNPcGVuPXtzaWRlYmFyT3Blbn1cclxuICAgICAgICBvblRvZ2dsZT17dG9nZ2xlU2lkZWJhcn1cclxuICAgICAgICBvbkxvZ291dD17aGFuZGxlTG9nb3V0fVxyXG4gICAgICAgIHVzZXJFbWFpbD17dXNlckVtYWlsfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtMSBmbGV4LWNvbCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICA8SGVhZGVyIG9uTWVudUNsaWNrPXt0b2dnbGVTaWRlYmFyfSB0aXRsZT17dGl0bGV9IC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleC0xIG92ZXJmbG93LWF1dG8gcC00IGxnOnAtNlwiPlxyXG4gICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAxMCB9fVxyXG4gICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cclxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4zIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCB7IFN0aWNreU5vdGUsIExvZ091dCwgVXNlciwgWCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcclxuaW1wb3J0IHsgY24gfSBmcm9tIFwiLi4vLi4vbGliL3V0aWxzXCI7XHJcbmltcG9ydCB7XHJcbiAgRHJvcGRvd25NZW51LFxyXG4gIERyb3Bkb3duTWVudUNvbnRlbnQsXHJcbiAgRHJvcGRvd25NZW51SXRlbSxcclxuICBEcm9wZG93bk1lbnVMYWJlbCxcclxuICBEcm9wZG93bk1lbnVTZXBhcmF0b3IsXHJcbiAgRHJvcGRvd25NZW51VHJpZ2dlcixcclxufSBmcm9tIFwiLi4vdWkvZHJvcGRvd24tbWVudVwiO1xyXG5cclxuaW50ZXJmYWNlIFNpZGViYXJQcm9wcyB7XHJcbiAgaXNPcGVuOiBib29sZWFuO1xyXG4gIG9uVG9nZ2xlOiAoKSA9PiB2b2lkO1xyXG4gIG9uTG9nb3V0OiAoKSA9PiB2b2lkO1xyXG4gIHVzZXJFbWFpbD86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgbmF2SXRlbXMgPSBbXHJcbiAgeyBpY29uOiBTdGlja3lOb3RlLCBsYWJlbDogXCJOb3Rlc1wiLCBocmVmOiBcIi9ub3Rlc1wiLCBhY3RpdmU6IHRydWUgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTaWRlYmFyKHsgaXNPcGVuLCBvblRvZ2dsZSwgb25Mb2dvdXQsIHVzZXJFbWFpbCB9OiBTaWRlYmFyUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgey8qIE1vYmlsZSBvdmVybGF5ICovfVxyXG4gICAgICB7aXNPcGVuICYmIChcclxuICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XHJcbiAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cclxuICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCB9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCB6LTQwIGJnLWJsYWNrLzUwIGxnOmhpZGRlblwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtvblRvZ2dsZX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgey8qIFNpZGViYXIgKi99XHJcbiAgICAgIDxtb3Rpb24uYXNpZGVcclxuICAgICAgICBpbml0aWFsPXtmYWxzZX1cclxuICAgICAgICBhbmltYXRlPXt7XHJcbiAgICAgICAgICB3aWR0aDogaXNPcGVuID8gMjU2IDogMCxcclxuICAgICAgICAgIHg6IGlzT3BlbiA/IDAgOiAtMjU2LFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4yLCBlYXNlOiBcImVhc2VJbk91dFwiIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgIFwiZml4ZWQgbGVmdC0wIHRvcC0wIHotNTAgaC1zY3JlZW4gYmctZ3JheS05MDAgdGV4dC13aGl0ZSBsZzpyZWxhdGl2ZSBsZzp6LWF1dG9cIixcclxuICAgICAgICAgIGlzT3BlbiA/IFwidy02NFwiIDogXCJ3LTAgbGc6dy0wXCJcclxuICAgICAgICApfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtZnVsbCBmbGV4LWNvbCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgICAgIHsvKiBMb2dvICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtMTYgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXItYiBib3JkZXItZ3JheS04MDAgcHgtNFwiPlxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxyXG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxTdGlja3lOb3RlIGNsYXNzTmFtZT1cImgtNiB3LTYgdGV4dC1ibHVlLTQwMFwiIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkXCI+VlRDIE5vdGVzPC9zcGFuPlxyXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtvblRvZ2dsZX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIHAtMS41IGhvdmVyOmJnLWdyYXktODAwIGxnOmhpZGRlblwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8WCBjbGFzc05hbWU9XCJoLTUgdy01XCIgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogTmF2aWdhdGlvbiAqL31cclxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleC0xIHNwYWNlLXktMSBwLTRcIj5cclxuICAgICAgICAgICAge25hdkl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmhyZWZ9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgICBcImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHJvdW5kZWQtbGcgcHgtMyBweS0yLjUgdGV4dC1zbSBmb250LW1lZGl1bSB0cmFuc2l0aW9uLWNvbG9yc1wiLFxyXG4gICAgICAgICAgICAgICAgICBpdGVtLmFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgID8gXCJiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwidGV4dC1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTgwMFwiXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpdGVtLmljb24gY2xhc3NOYW1lPVwiaC01IHctNVwiIC8+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgICAgICAgey8qIFVzZXIgc2VjdGlvbiB3aXRoIGRyb3Bkb3duICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItdCBib3JkZXItZ3JheS04MDAgcC00XCI+XHJcbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnU+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duTWVudVRyaWdnZXIgYXNDaGlsZD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgaXRlbXMtY2VudGVyIGdhcC0zIHJvdW5kZWQtbGcgcHgtMiBweS0yIGhvdmVyOmJnLWdyYXktODAwIHRyYW5zaXRpb24tY29sb3JzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLTkgdy05IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgYmctZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VXNlciBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQtZ3JheS0zMDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgdHJ1bmNhdGUgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidHJ1bmNhdGUgdGV4dC1zbSBmb250LW1lZGl1bVwiIHRpdGxlPXt1c2VyRW1haWwgfHwgXCJVc2VyXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAge3VzZXJFbWFpbCB8fCBcIlVzZXJcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNDAwXCI+TG9nZ2VkIGluPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51VHJpZ2dlcj5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25NZW51Q29udGVudCBhbGlnbj1cImVuZFwiIGNsYXNzTmFtZT1cInctNTZcIj5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVMYWJlbCBjbGFzc05hbWU9XCJmb250LW5vcm1hbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSBsZWFkaW5nLW5vbmVcIj5BY2NvdW50PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgbGVhZGluZy1ub25lIHRleHQtZ3JheS01MDAgdHJ1bmNhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHt1c2VyRW1haWwgfHwgXCJVc2VyXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51TGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51U2VwYXJhdG9yIC8+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkxvZ291dH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwIGZvY3VzOnRleHQtcmVkLTYwMCBmb2N1czpiZy1yZWQtNTAgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TG9nT3V0IGNsYXNzTmFtZT1cIm1yLTIgaC00IHctNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIExvZyBvdXRcclxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51SXRlbT5cclxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudUNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbW90aW9uLmFzaWRlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRyYXNoMiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBBbGVydERpYWxvZyxcclxuICBBbGVydERpYWxvZ0FjdGlvbixcclxuICBBbGVydERpYWxvZ0NhbmNlbCxcclxuICBBbGVydERpYWxvZ0NvbnRlbnQsXHJcbiAgQWxlcnREaWFsb2dEZXNjcmlwdGlvbixcclxuICBBbGVydERpYWxvZ0Zvb3RlcixcclxuICBBbGVydERpYWxvZ0hlYWRlcixcclxuICBBbGVydERpYWxvZ1RpdGxlLFxyXG59IGZyb20gXCIuLi91aS9hbGVydC1kaWFsb2dcIjtcclxuXHJcbmludGVyZmFjZSBEZWxldGVDb25maXJtRGlhbG9nUHJvcHMge1xyXG4gIGlzT3BlbjogYm9vbGVhbjtcclxuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xyXG4gIG9uQ29uZmlybTogKCkgPT4gdm9pZDtcclxuICB0aXRsZT86IHN0cmluZztcclxuICBkZXNjcmlwdGlvbj86IHN0cmluZztcclxuICBpc0RlbGV0aW5nPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERlbGV0ZUNvbmZpcm1EaWFsb2coe1xyXG4gIGlzT3BlbixcclxuICBvbkNsb3NlLFxyXG4gIG9uQ29uZmlybSxcclxuICB0aXRsZSA9IFwiRGVsZXRlIE5vdGVcIixcclxuICBkZXNjcmlwdGlvbiA9IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIG5vdGU/IFRoaXMgYWN0aW9uIGNhbm5vdCBiZSB1bmRvbmUuXCIsXHJcbiAgaXNEZWxldGluZyA9IGZhbHNlLFxyXG59OiBEZWxldGVDb25maXJtRGlhbG9nUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFsZXJ0RGlhbG9nIG9wZW49e2lzT3Blbn0gb25PcGVuQ2hhbmdlPXtvbkNsb3NlfT5cclxuICAgICAgPEFsZXJ0RGlhbG9nQ29udGVudD5cclxuICAgICAgICA8QWxlcnREaWFsb2dIZWFkZXI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWItNCBmbGV4IGgtMTIgdy0xMiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGJnLXJlZC0xMDBcIj5cclxuICAgICAgICAgICAgPFRyYXNoMiBjbGFzc05hbWU9XCJoLTYgdy02IHRleHQtcmVkLTYwMFwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxBbGVydERpYWxvZ1RpdGxlIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+e3RpdGxlfTwvQWxlcnREaWFsb2dUaXRsZT5cclxuICAgICAgICAgIDxBbGVydERpYWxvZ0Rlc2NyaXB0aW9uIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgIDwvQWxlcnREaWFsb2dEZXNjcmlwdGlvbj5cclxuICAgICAgICA8L0FsZXJ0RGlhbG9nSGVhZGVyPlxyXG4gICAgICAgIDxBbGVydERpYWxvZ0Zvb3RlciBjbGFzc05hbWU9XCJzbTpqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPEFsZXJ0RGlhbG9nQ2FuY2VsIGRpc2FibGVkPXtpc0RlbGV0aW5nfT5DYW5jZWw8L0FsZXJ0RGlhbG9nQ2FuY2VsPlxyXG4gICAgICAgICAgPEFsZXJ0RGlhbG9nQWN0aW9uIG9uQ2xpY2s9e29uQ29uZmlybX0gZGlzYWJsZWQ9e2lzRGVsZXRpbmd9PlxyXG4gICAgICAgICAgICB7aXNEZWxldGluZyA/IFwiRGVsZXRpbmcuLi5cIiA6IFwiRGVsZXRlXCJ9XHJcbiAgICAgICAgICA8L0FsZXJ0RGlhbG9nQWN0aW9uPlxyXG4gICAgICAgIDwvQWxlcnREaWFsb2dGb290ZXI+XHJcbiAgICAgIDwvQWxlcnREaWFsb2dDb250ZW50PlxyXG4gICAgPC9BbGVydERpYWxvZz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IHsgUGVuY2lsLCBUcmFzaDIsIENhbGVuZGFyLCBUYWcgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XHJcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBDYXJkRm9vdGVyLCBDYXJkSGVhZGVyLCBDYXJkVGl0bGUgfSBmcm9tIFwiLi4vdWkvY2FyZFwiO1xyXG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gXCIuLi91aS9iYWRnZVwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vdWkvYnV0dG9uXCI7XHJcblxyXG5pbnRlcmZhY2UgTm90ZSB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuICBjYXRlZ29yeTogc3RyaW5nO1xyXG4gIHN0YXR1czogXCJuZXdcIiB8IFwidG9kb1wiIHwgXCJkb25lXCI7XHJcbiAgY3JlYXRlZEF0OiBzdHJpbmc7XHJcbiAgdXBkYXRlZEF0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBOb3RlQ2FyZFByb3BzIHtcclxuICBub3RlOiBOb3RlO1xyXG4gIG9uRWRpdDogKG5vdGU6IE5vdGUpID0+IHZvaWQ7XHJcbiAgb25EZWxldGU6IChpZDogbnVtYmVyKSA9PiB2b2lkO1xyXG4gIG9uVmlldzogKG5vdGU6IE5vdGUpID0+IHZvaWQ7XHJcbiAgaW5kZXg/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOb3RlQ2FyZCh7IG5vdGUsIG9uRWRpdCwgb25EZWxldGUsIG9uVmlldywgaW5kZXggPSAwIH06IE5vdGVDYXJkUHJvcHMpIHtcclxuICBjb25zdCBmb3JtYXREYXRlID0gKGRhdGVTdHJpbmc6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGVTdHJpbmcpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIHtcclxuICAgICAgbW9udGg6IFwic2hvcnRcIixcclxuICAgICAgZGF5OiBcIm51bWVyaWNcIixcclxuICAgICAgeWVhcjogXCJudW1lcmljXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5kaXZcclxuICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fVxyXG4gICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cclxuICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCBzY2FsZTogMC45NSB9fVxyXG4gICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjIsIGRlbGF5OiBpbmRleCAqIDAuMDUgfX1cclxuICAgICAgbGF5b3V0XHJcbiAgICA+XHJcbiAgICAgIDxDYXJkXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgZmxleCBoLVsyNDBweF0gY3Vyc29yLXBvaW50ZXIgZmxleC1jb2wgb3ZlcmZsb3ctaGlkZGVuIHRyYW5zaXRpb24tc2hhZG93IGhvdmVyOnNoYWRvdy1tZFwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gb25WaWV3KG5vdGUpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPENhcmRIZWFkZXIgY2xhc3NOYW1lPVwicGItMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiBnYXAtMlwiPlxyXG4gICAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cImxpbmUtY2xhbXAtMSB0ZXh0LWJhc2VcIj57bm90ZS50aXRsZX08L0NhcmRUaXRsZT5cclxuICAgICAgICAgICAgPEJhZGdlIHZhcmlhbnQ9e25vdGUuc3RhdHVzfT57bm90ZS5zdGF0dXN9PC9CYWRnZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwiZmxleC0xIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWF4LWgtWzQuNXJlbV0gb3ZlcmZsb3ctaGlkZGVuIHdoaXRlc3BhY2UtcHJlLWxpbmUgYnJlYWstd29yZHMgdGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+XHJcbiAgICAgICAgICAgIHtub3RlLmNvbnRlbnR9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICA8Q2FyZEZvb3RlciBjbGFzc05hbWU9XCJtdC1hdXRvIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXItdCBib3JkZXItZ3JheS0yMDAgcHQtM1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0xIHRleHQteHMgdGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICB7bm90ZS5jYXRlZ29yeSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMVwiPlxyXG4gICAgICAgICAgICAgICAgPFRhZyBjbGFzc05hbWU9XCJoLTMgdy0zXCIgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntub3RlLmNhdGVnb3J5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMVwiPlxyXG4gICAgICAgICAgICAgIDxDYWxlbmRhciBjbGFzc05hbWU9XCJoLTMgdy0zXCIgLz5cclxuICAgICAgICAgICAgICA8c3Bhbj57Zm9ybWF0RGF0ZShub3RlLmNyZWF0ZWRBdCl9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0xIG9wYWNpdHktMCB0cmFuc2l0aW9uLW9wYWNpdHkgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDBcIj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJnaG9zdFwiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cImljb25cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBvbkVkaXQobm90ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTggdy04XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxQZW5jaWwgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcclxuICAgICAgICAgICAgICBzaXplPVwiaWNvblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIG9uRGVsZXRlKG5vdGUuaWQpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC04IHctOCB0ZXh0LXJlZC01MDAgaG92ZXI6dGV4dC1yZWQtNjAwIGhvdmVyOmJnLXJlZC01MFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8VHJhc2gyIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ2FyZEZvb3Rlcj5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBTaGVldCxcclxuICBTaGVldENvbnRlbnQsXHJcbiAgU2hlZXRIZWFkZXIsXHJcbiAgU2hlZXRUaXRsZSxcclxuICBTaGVldEZvb3RlcixcclxuICBTaGVldERlc2NyaXB0aW9uLFxyXG59IGZyb20gXCIuLi91aS9zaGVldFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vdWkvYnV0dG9uXCI7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIi4uL3VpL2lucHV0XCI7XHJcbmltcG9ydCB7IFRleHRhcmVhIH0gZnJvbSBcIi4uL3VpL3RleHRhcmVhXCI7XHJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcIi4uL3VpL2xhYmVsXCI7XHJcblxyXG5pbnRlcmZhY2UgTm90ZSB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuICBjYXRlZ29yeTogc3RyaW5nO1xyXG4gIHN0YXR1czogXCJuZXdcIiB8IFwidG9kb1wiIHwgXCJkb25lXCI7XHJcbiAgY3JlYXRlZEF0OiBzdHJpbmc7XHJcbiAgdXBkYXRlZEF0OiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBOb3RlRm9ybVByb3BzIHtcclxuICBpc09wZW46IGJvb2xlYW47XHJcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcclxuICBvblN1Ym1pdDogKGRhdGE6IHsgdGl0bGU6IHN0cmluZzsgY29udGVudDogc3RyaW5nOyBjYXRlZ29yeTogc3RyaW5nOyBzdGF0dXM6IHN0cmluZyB9KSA9PiBQcm9taXNlPHZvaWQ+O1xyXG4gIG5vdGU/OiBOb3RlIHwgbnVsbDtcclxuICBpc1N1Ym1pdHRpbmc/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTm90ZUZvcm0oeyBpc09wZW4sIG9uQ2xvc2UsIG9uU3VibWl0LCBub3RlLCBpc1N1Ym1pdHRpbmcgPSBmYWxzZSB9OiBOb3RlRm9ybVByb3BzKSB7XHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShcIm5ld1wiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChub3RlKSB7XHJcbiAgICAgIHNldFRpdGxlKG5vdGUudGl0bGUpO1xyXG4gICAgICBzZXRDb250ZW50KG5vdGUuY29udGVudCk7XHJcbiAgICAgIHNldENhdGVnb3J5KG5vdGUuY2F0ZWdvcnkpO1xyXG4gICAgICBzZXRTdGF0dXMobm90ZS5zdGF0dXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VGl0bGUoXCJcIik7XHJcbiAgICAgIHNldENvbnRlbnQoXCJcIik7XHJcbiAgICAgIHNldENhdGVnb3J5KFwiXCIpO1xyXG4gICAgICBzZXRTdGF0dXMoXCJuZXdcIik7XHJcbiAgICB9XHJcbiAgfSwgW25vdGUsIGlzT3Blbl0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBhd2FpdCBvblN1Ym1pdCh7IHRpdGxlLCBjb250ZW50LCBjYXRlZ29yeSwgc3RhdHVzIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2hlZXQgb3Blbj17aXNPcGVufSBvbk9wZW5DaGFuZ2U9e29uQ2xvc2V9PlxyXG4gICAgICA8U2hlZXRDb250ZW50IHNpZGU9XCJyaWdodFwiIGNsYXNzTmFtZT1cIm92ZXJmbG93LXktYXV0b1wiPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaC1mdWxsXCI+XHJcbiAgICAgICAgICA8U2hlZXRIZWFkZXIgY2xhc3NOYW1lPVwibWItNlwiPlxyXG4gICAgICAgICAgICA8U2hlZXRUaXRsZT57bm90ZSA/IFwiRWRpdCBOb3RlXCIgOiBcIkNyZWF0ZSBOZXcgTm90ZVwifTwvU2hlZXRUaXRsZT5cclxuICAgICAgICAgICAgPFNoZWV0RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAge25vdGUgPyBcIlVwZGF0ZSB0aGUgZGV0YWlscyBvZiB5b3VyIG5vdGUgYmVsb3cuXCIgOiBcIkZpbGwgaW4gdGhlIGRldGFpbHMgdG8gY3JlYXRlIGEgbmV3IG5vdGUuXCJ9XHJcbiAgICAgICAgICAgIDwvU2hlZXREZXNjcmlwdGlvbj5cclxuICAgICAgICAgIDwvU2hlZXRIZWFkZXI+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHNwYWNlLXktNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwidGl0bGVcIj5UaXRsZTwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBpZD1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBub3RlIHRpdGxlLi4uXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiY29udGVudFwiPkNvbnRlbnQ8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDxUZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJjb250ZW50XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb250ZW50fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb250ZW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgbm90ZSBjb250ZW50Li4uXCJcclxuICAgICAgICAgICAgICAgIHJvd3M9ezZ9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImNhdGVnb3J5XCI+Q2F0ZWdvcnk8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJjYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENhdGVnb3J5KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiwgV29yaywgUGVyc29uYWxcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJzdGF0dXNcIj5TdGF0dXM8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgIGlkPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0dXN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFN0YXR1cyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGgtMTAgdy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBiZy13aGl0ZSBweC0zIHB5LTIgdGV4dC1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctZ3JheS05MDAgZm9jdXM6cmluZy1vZmZzZXQtMlwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm5ld1wiPk5ldzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRvZG9cIj5Ub2RvPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZG9uZVwiPkRvbmU8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8U2hlZXRGb290ZXIgY2xhc3NOYW1lPVwibXQtNiBwdC00IGJvcmRlci10IGJvcmRlci1ncmF5LTIwMFwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiB2YXJpYW50PVwib3V0bGluZVwiIG9uQ2xpY2s9e29uQ2xvc2V9PlxyXG4gICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30+XHJcbiAgICAgICAgICAgICAge2lzU3VibWl0dGluZyA/IFwiU2F2aW5nLi4uXCIgOiBub3RlID8gXCJVcGRhdGUgTm90ZVwiIDogXCJDcmVhdGUgTm90ZVwifVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvU2hlZXRGb290ZXI+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L1NoZWV0Q29udGVudD5cclxuICAgIDwvU2hlZXQ+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFNrZWxldG9uIH0gZnJvbSBcIi4uL3VpL3NrZWxldG9uXCI7XHJcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBDYXJkSGVhZGVyIH0gZnJvbSBcIi4uL3VpL2NhcmRcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOb3RlQ2FyZFNrZWxldG9uKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCBjbGFzc05hbWU9XCJoLWZ1bGxcIj5cclxuICAgICAgPENhcmRIZWFkZXIgY2xhc3NOYW1lPVwicGItMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgIDxTa2VsZXRvbiBjbGFzc05hbWU9XCJoLTUgdy0zLzRcIiAvPlxyXG4gICAgICAgICAgPFNrZWxldG9uIGNsYXNzTmFtZT1cImgtNSB3LTE2IHJvdW5kZWQtZnVsbFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgIDxTa2VsZXRvbiBjbGFzc05hbWU9XCJoLTQgdy1mdWxsIG1iLTJcIiAvPlxyXG4gICAgICAgIDxTa2VsZXRvbiBjbGFzc05hbWU9XCJoLTQgdy01LzYgbWItNFwiIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgIDxTa2VsZXRvbiBjbGFzc05hbWU9XCJoLTQgdy0yNFwiIC8+XHJcbiAgICAgICAgICA8U2tlbGV0b24gY2xhc3NOYW1lPVwiaC00IHctMjBcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOb3Rlc0dyaWRTa2VsZXRvbih7IGNvdW50ID0gNiB9OiB7IGNvdW50PzogbnVtYmVyIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC00IHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zXCI+XHJcbiAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiBjb3VudCB9KS5tYXAoKF8sIGkpID0+IChcclxuICAgICAgICA8Tm90ZUNhcmRTa2VsZXRvbiBrZXk9e2l9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE5vdGVzRmlsdGVyU2tlbGV0b24oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNiBmbGV4IGZsZXgtY29sIGdhcC00IHNtOmZsZXgtcm93IHNtOml0ZW1zLWNlbnRlciBzbTpqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtMSBnYXAtMlwiPlxyXG4gICAgICAgIDxTa2VsZXRvbiBjbGFzc05hbWU9XCJoLTEwIHctZnVsbCBzbTptYXgtdy14c1wiIC8+XHJcbiAgICAgICAgPFNrZWxldG9uIGNsYXNzTmFtZT1cImgtMTAgdy0zMlwiIC8+XHJcbiAgICAgICAgPFNrZWxldG9uIGNsYXNzTmFtZT1cImgtMTAgdy0zMlwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8U2tlbGV0b24gY2xhc3NOYW1lPVwiaC0xMCB3LTMyXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIEFsZXJ0RGlhbG9nUHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtYWxlcnQtZGlhbG9nXCI7XHJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIi4uLy4uL2xpYi91dGlsc1wiO1xyXG5pbXBvcnQgeyBidXR0b25WYXJpYW50cyB9IGZyb20gXCIuL2J1dHRvblwiO1xyXG5cclxuY29uc3QgQWxlcnREaWFsb2cgPSBBbGVydERpYWxvZ1ByaW1pdGl2ZS5Sb290O1xyXG5cclxuY29uc3QgQWxlcnREaWFsb2dUcmlnZ2VyID0gQWxlcnREaWFsb2dQcmltaXRpdmUuVHJpZ2dlcjtcclxuXHJcbmNvbnN0IEFsZXJ0RGlhbG9nUG9ydGFsID0gQWxlcnREaWFsb2dQcmltaXRpdmUuUG9ydGFsO1xyXG5cclxuY29uc3QgQWxlcnREaWFsb2dPdmVybGF5ID0gUmVhY3QuZm9yd2FyZFJlZjxcclxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBBbGVydERpYWxvZ1ByaW1pdGl2ZS5PdmVybGF5PixcclxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIEFsZXJ0RGlhbG9nUHJpbWl0aXZlLk92ZXJsYXk+XHJcbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcclxuICA8QWxlcnREaWFsb2dQcmltaXRpdmUuT3ZlcmxheVxyXG4gICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgXCJmaXhlZCBpbnNldC0wIHotNTAgYmctYmxhY2svNTAgZGF0YS1bc3RhdGU9b3Blbl06YW5pbWF0ZS1pbiBkYXRhLVtzdGF0ZT1jbG9zZWRdOmFuaW1hdGUtb3V0IGRhdGEtW3N0YXRlPWNsb3NlZF06ZmFkZS1vdXQtMCBkYXRhLVtzdGF0ZT1vcGVuXTpmYWRlLWluLTBcIixcclxuICAgICAgY2xhc3NOYW1lXHJcbiAgICApfVxyXG4gICAgey4uLnByb3BzfVxyXG4gICAgcmVmPXtyZWZ9XHJcbiAgLz5cclxuKSk7XHJcbkFsZXJ0RGlhbG9nT3ZlcmxheS5kaXNwbGF5TmFtZSA9IEFsZXJ0RGlhbG9nUHJpbWl0aXZlLk92ZXJsYXkuZGlzcGxheU5hbWU7XHJcblxyXG5jb25zdCBBbGVydERpYWxvZ0NvbnRlbnQgPSBSZWFjdC5mb3J3YXJkUmVmPFxyXG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIEFsZXJ0RGlhbG9nUHJpbWl0aXZlLkNvbnRlbnQ+LFxyXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgQWxlcnREaWFsb2dQcmltaXRpdmUuQ29udGVudD5cclxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxyXG4gIDxBbGVydERpYWxvZ1BvcnRhbD5cclxuICAgIDxBbGVydERpYWxvZ092ZXJsYXkgLz5cclxuICAgIDxBbGVydERpYWxvZ1ByaW1pdGl2ZS5Db250ZW50XHJcbiAgICAgIHJlZj17cmVmfVxyXG4gICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgIFwiZml4ZWQgbGVmdC1bNTAlXSB0b3AtWzUwJV0gei01MCBncmlkIHctZnVsbCBtYXgtdy1sZyB0cmFuc2xhdGUteC1bLTUwJV0gdHJhbnNsYXRlLXktWy01MCVdIGdhcC00IGJvcmRlciBib3JkZXItZ3JheS0yMDAgYmctd2hpdGUgcC02IHNoYWRvdy1sZyBkdXJhdGlvbi0yMDAgZGF0YS1bc3RhdGU9b3Blbl06YW5pbWF0ZS1pbiBkYXRhLVtzdGF0ZT1jbG9zZWRdOmFuaW1hdGUtb3V0IGRhdGEtW3N0YXRlPWNsb3NlZF06ZmFkZS1vdXQtMCBkYXRhLVtzdGF0ZT1vcGVuXTpmYWRlLWluLTAgZGF0YS1bc3RhdGU9Y2xvc2VkXTp6b29tLW91dC05NSBkYXRhLVtzdGF0ZT1vcGVuXTp6b29tLWluLTk1IGRhdGEtW3N0YXRlPWNsb3NlZF06c2xpZGUtb3V0LXRvLWxlZnQtMS8yIGRhdGEtW3N0YXRlPWNsb3NlZF06c2xpZGUtb3V0LXRvLXRvcC1bNDglXSBkYXRhLVtzdGF0ZT1vcGVuXTpzbGlkZS1pbi1mcm9tLWxlZnQtMS8yIGRhdGEtW3N0YXRlPW9wZW5dOnNsaWRlLWluLWZyb20tdG9wLVs0OCVdIHNtOnJvdW5kZWQtbGdcIixcclxuICAgICAgICBjbGFzc05hbWVcclxuICAgICAgKX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgLz5cclxuICA8L0FsZXJ0RGlhbG9nUG9ydGFsPlxyXG4pKTtcclxuQWxlcnREaWFsb2dDb250ZW50LmRpc3BsYXlOYW1lID0gQWxlcnREaWFsb2dQcmltaXRpdmUuQ29udGVudC5kaXNwbGF5TmFtZTtcclxuXHJcbmNvbnN0IEFsZXJ0RGlhbG9nSGVhZGVyID0gKHtcclxuICBjbGFzc05hbWUsXHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+KSA9PiAoXHJcbiAgPGRpdlxyXG4gICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgXCJmbGV4IGZsZXgtY29sIHNwYWNlLXktMiB0ZXh0LWNlbnRlciBzbTp0ZXh0LWxlZnRcIixcclxuICAgICAgY2xhc3NOYW1lXHJcbiAgICApfVxyXG4gICAgey4uLnByb3BzfVxyXG4gIC8+XHJcbik7XHJcbkFsZXJ0RGlhbG9nSGVhZGVyLmRpc3BsYXlOYW1lID0gXCJBbGVydERpYWxvZ0hlYWRlclwiO1xyXG5cclxuY29uc3QgQWxlcnREaWFsb2dGb290ZXIgPSAoe1xyXG4gIGNsYXNzTmFtZSxcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4pID0+IChcclxuICA8ZGl2XHJcbiAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICBcImZsZXggZmxleC1jb2wtcmV2ZXJzZSBzbTpmbGV4LXJvdyBzbTpqdXN0aWZ5LWVuZCBzbTpzcGFjZS14LTJcIixcclxuICAgICAgY2xhc3NOYW1lXHJcbiAgICApfVxyXG4gICAgey4uLnByb3BzfVxyXG4gIC8+XHJcbik7XHJcbkFsZXJ0RGlhbG9nRm9vdGVyLmRpc3BsYXlOYW1lID0gXCJBbGVydERpYWxvZ0Zvb3RlclwiO1xyXG5cclxuY29uc3QgQWxlcnREaWFsb2dUaXRsZSA9IFJlYWN0LmZvcndhcmRSZWY8XHJcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgQWxlcnREaWFsb2dQcmltaXRpdmUuVGl0bGU+LFxyXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgQWxlcnREaWFsb2dQcmltaXRpdmUuVGl0bGU+XHJcbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcclxuICA8QWxlcnREaWFsb2dQcmltaXRpdmUuVGl0bGVcclxuICAgIHJlZj17cmVmfVxyXG4gICAgY2xhc3NOYW1lPXtjbihcInRleHQtbGcgZm9udC1zZW1pYm9sZFwiLCBjbGFzc05hbWUpfVxyXG4gICAgey4uLnByb3BzfVxyXG4gIC8+XHJcbikpO1xyXG5BbGVydERpYWxvZ1RpdGxlLmRpc3BsYXlOYW1lID0gQWxlcnREaWFsb2dQcmltaXRpdmUuVGl0bGUuZGlzcGxheU5hbWU7XHJcblxyXG5jb25zdCBBbGVydERpYWxvZ0Rlc2NyaXB0aW9uID0gUmVhY3QuZm9yd2FyZFJlZjxcclxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBBbGVydERpYWxvZ1ByaW1pdGl2ZS5EZXNjcmlwdGlvbj4sXHJcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBBbGVydERpYWxvZ1ByaW1pdGl2ZS5EZXNjcmlwdGlvbj5cclxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxyXG4gIDxBbGVydERpYWxvZ1ByaW1pdGl2ZS5EZXNjcmlwdGlvblxyXG4gICAgcmVmPXtyZWZ9XHJcbiAgICBjbGFzc05hbWU9e2NuKFwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCIsIGNsYXNzTmFtZSl9XHJcbiAgICB7Li4ucHJvcHN9XHJcbiAgLz5cclxuKSk7XHJcbkFsZXJ0RGlhbG9nRGVzY3JpcHRpb24uZGlzcGxheU5hbWUgPVxyXG4gIEFsZXJ0RGlhbG9nUHJpbWl0aXZlLkRlc2NyaXB0aW9uLmRpc3BsYXlOYW1lO1xyXG5cclxuY29uc3QgQWxlcnREaWFsb2dBY3Rpb24gPSBSZWFjdC5mb3J3YXJkUmVmPFxyXG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIEFsZXJ0RGlhbG9nUHJpbWl0aXZlLkFjdGlvbj4sXHJcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBBbGVydERpYWxvZ1ByaW1pdGl2ZS5BY3Rpb24+XHJcbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcclxuICA8QWxlcnREaWFsb2dQcmltaXRpdmUuQWN0aW9uXHJcbiAgICByZWY9e3JlZn1cclxuICAgIGNsYXNzTmFtZT17Y24oYnV0dG9uVmFyaWFudHMoeyB2YXJpYW50OiBcImRlc3RydWN0aXZlXCIgfSksIGNsYXNzTmFtZSl9XHJcbiAgICB7Li4ucHJvcHN9XHJcbiAgLz5cclxuKSk7XHJcbkFsZXJ0RGlhbG9nQWN0aW9uLmRpc3BsYXlOYW1lID0gQWxlcnREaWFsb2dQcmltaXRpdmUuQWN0aW9uLmRpc3BsYXlOYW1lO1xyXG5cclxuY29uc3QgQWxlcnREaWFsb2dDYW5jZWwgPSBSZWFjdC5mb3J3YXJkUmVmPFxyXG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIEFsZXJ0RGlhbG9nUHJpbWl0aXZlLkNhbmNlbD4sXHJcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBBbGVydERpYWxvZ1ByaW1pdGl2ZS5DYW5jZWw+XHJcbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcclxuICA8QWxlcnREaWFsb2dQcmltaXRpdmUuQ2FuY2VsXHJcbiAgICByZWY9e3JlZn1cclxuICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgIGJ1dHRvblZhcmlhbnRzKHsgdmFyaWFudDogXCJvdXRsaW5lXCIgfSksXHJcbiAgICAgIFwibXQtMiBzbTptdC0wXCIsXHJcbiAgICAgIGNsYXNzTmFtZVxyXG4gICAgKX1cclxuICAgIHsuLi5wcm9wc31cclxuICAvPlxyXG4pKTtcclxuQWxlcnREaWFsb2dDYW5jZWwuZGlzcGxheU5hbWUgPSBBbGVydERpYWxvZ1ByaW1pdGl2ZS5DYW5jZWwuZGlzcGxheU5hbWU7XHJcblxyXG5leHBvcnQge1xyXG4gIEFsZXJ0RGlhbG9nLFxyXG4gIEFsZXJ0RGlhbG9nUG9ydGFsLFxyXG4gIEFsZXJ0RGlhbG9nT3ZlcmxheSxcclxuICBBbGVydERpYWxvZ1RyaWdnZXIsXHJcbiAgQWxlcnREaWFsb2dDb250ZW50LFxyXG4gIEFsZXJ0RGlhbG9nSGVhZGVyLFxyXG4gIEFsZXJ0RGlhbG9nRm9vdGVyLFxyXG4gIEFsZXJ0RGlhbG9nVGl0bGUsXHJcbiAgQWxlcnREaWFsb2dEZXNjcmlwdGlvbixcclxuICBBbGVydERpYWxvZ0FjdGlvbixcclxuICBBbGVydERpYWxvZ0NhbmNlbCxcclxufTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGN2YSwgdHlwZSBWYXJpYW50UHJvcHMgfSBmcm9tIFwiY2xhc3MtdmFyaWFuY2UtYXV0aG9yaXR5XCI7XHJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIi4uLy4uL2xpYi91dGlsc1wiO1xyXG5cclxuY29uc3QgYmFkZ2VWYXJpYW50cyA9IGN2YShcclxuICBcImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciByb3VuZGVkLW1kIGJvcmRlciBweC0yLjUgcHktMC41IHRleHQteHMgZm9udC1zZW1pYm9sZCB0cmFuc2l0aW9uLWNvbG9ycyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcmluZyBmb2N1czpyaW5nLW9mZnNldC0yXCIsXHJcbiAge1xyXG4gICAgdmFyaWFudHM6IHtcclxuICAgICAgdmFyaWFudDoge1xyXG4gICAgICAgIGRlZmF1bHQ6IFwiYm9yZGVyLXRyYW5zcGFyZW50IGJnLWdyYXktOTAwIHRleHQtd2hpdGUgc2hhZG93XCIsXHJcbiAgICAgICAgc2Vjb25kYXJ5OiBcImJvcmRlci10cmFuc3BhcmVudCBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktOTAwXCIsXHJcbiAgICAgICAgZGVzdHJ1Y3RpdmU6IFwiYm9yZGVyLXRyYW5zcGFyZW50IGJnLXJlZC01MDAgdGV4dC13aGl0ZSBzaGFkb3dcIixcclxuICAgICAgICBvdXRsaW5lOiBcInRleHQtZ3JheS05MDBcIixcclxuICAgICAgICBuZXc6IFwiYm9yZGVyLXRyYW5zcGFyZW50IGJnLWJsdWUtMTAwIHRleHQtYmx1ZS04MDBcIixcclxuICAgICAgICB0b2RvOiBcImJvcmRlci10cmFuc3BhcmVudCBiZy1hbWJlci0xMDAgdGV4dC1hbWJlci04MDBcIixcclxuICAgICAgICBkb25lOiBcImJvcmRlci10cmFuc3BhcmVudCBiZy1ncmVlbi0xMDAgdGV4dC1ncmVlbi04MDBcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBkZWZhdWx0VmFyaWFudHM6IHtcclxuICAgICAgdmFyaWFudDogXCJkZWZhdWx0XCIsXHJcbiAgICB9LFxyXG4gIH1cclxuKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFkZ2VQcm9wc1xyXG4gIGV4dGVuZHMgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+LFxyXG4gICAgVmFyaWFudFByb3BzPHR5cGVvZiBiYWRnZVZhcmlhbnRzPiB7fVxyXG5cclxuZnVuY3Rpb24gQmFkZ2UoeyBjbGFzc05hbWUsIHZhcmlhbnQsIC4uLnByb3BzIH06IEJhZGdlUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NuKGJhZGdlVmFyaWFudHMoeyB2YXJpYW50IH0pLCBjbGFzc05hbWUpfSB7Li4ucHJvcHN9IC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IHsgQmFkZ2UsIGJhZGdlVmFyaWFudHMgfTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFNsb3QgfSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LXNsb3RcIjtcclxuaW1wb3J0IHsgY3ZhLCB0eXBlIFZhcmlhbnRQcm9wcyB9IGZyb20gXCJjbGFzcy12YXJpYW5jZS1hdXRob3JpdHlcIjtcclxuaW1wb3J0IHsgY24gfSBmcm9tIFwiLi4vLi4vbGliL3V0aWxzXCI7XHJcblxyXG5jb25zdCBidXR0b25WYXJpYW50cyA9IGN2YShcclxuICBcImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3aGl0ZXNwYWNlLW5vd3JhcCByb3VuZGVkLW1kIHRleHQtc20gZm9udC1tZWRpdW0gdHJhbnNpdGlvbi1jb2xvcnMgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW5vbmUgZm9jdXMtdmlzaWJsZTpyaW5nLTEgZm9jdXMtdmlzaWJsZTpyaW5nLXJpbmcgZGlzYWJsZWQ6cG9pbnRlci1ldmVudHMtbm9uZSBkaXNhYmxlZDpvcGFjaXR5LTUwXCIsXHJcbiAge1xyXG4gICAgdmFyaWFudHM6IHtcclxuICAgICAgdmFyaWFudDoge1xyXG4gICAgICAgIGRlZmF1bHQ6IFwiYmctZ3JheS05MDAgdGV4dC13aGl0ZSBzaGFkb3cgaG92ZXI6YmctZ3JheS04MDBcIixcclxuICAgICAgICBkZXN0cnVjdGl2ZTogXCJiZy1yZWQtNTAwIHRleHQtd2hpdGUgc2hhZG93LXNtIGhvdmVyOmJnLXJlZC02MDBcIixcclxuICAgICAgICBvdXRsaW5lOiBcImJvcmRlciBib3JkZXItZ3JheS0zMDAgYmctd2hpdGUgc2hhZG93LXNtIGhvdmVyOmJnLWdyYXktMTAwXCIsXHJcbiAgICAgICAgc2Vjb25kYXJ5OiBcImJnLWdyYXktMTAwIHRleHQtZ3JheS05MDAgc2hhZG93LXNtIGhvdmVyOmJnLWdyYXktMjAwXCIsXHJcbiAgICAgICAgZ2hvc3Q6IFwiaG92ZXI6YmctZ3JheS0xMDBcIixcclxuICAgICAgICBsaW5rOiBcInRleHQtZ3JheS05MDAgdW5kZXJsaW5lLW9mZnNldC00IGhvdmVyOnVuZGVybGluZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICBzaXplOiB7XHJcbiAgICAgICAgZGVmYXVsdDogXCJoLTkgcHgtNCBweS0yXCIsXHJcbiAgICAgICAgc206IFwiaC04IHJvdW5kZWQtbWQgcHgtMyB0ZXh0LXhzXCIsXHJcbiAgICAgICAgbGc6IFwiaC0xMCByb3VuZGVkLW1kIHB4LThcIixcclxuICAgICAgICBpY29uOiBcImgtOSB3LTlcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBkZWZhdWx0VmFyaWFudHM6IHtcclxuICAgICAgdmFyaWFudDogXCJkZWZhdWx0XCIsXHJcbiAgICAgIHNpemU6IFwiZGVmYXVsdFwiLFxyXG4gICAgfSxcclxuICB9XHJcbik7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvblByb3BzXHJcbiAgZXh0ZW5kcyBSZWFjdC5CdXR0b25IVE1MQXR0cmlidXRlczxIVE1MQnV0dG9uRWxlbWVudD4sXHJcbiAgICBWYXJpYW50UHJvcHM8dHlwZW9mIGJ1dHRvblZhcmlhbnRzPiB7XHJcbiAgYXNDaGlsZD86IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IEJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWY8SFRNTEJ1dHRvbkVsZW1lbnQsIEJ1dHRvblByb3BzPihcclxuICAoeyBjbGFzc05hbWUsIHZhcmlhbnQsIHNpemUsIGFzQ2hpbGQgPSBmYWxzZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiB7XHJcbiAgICBjb25zdCBDb21wID0gYXNDaGlsZCA/IFNsb3QgOiBcImJ1dHRvblwiO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENvbXBcclxuICAgICAgICBjbGFzc05hbWU9e2NuKGJ1dHRvblZhcmlhbnRzKHsgdmFyaWFudCwgc2l6ZSwgY2xhc3NOYW1lIH0pKX1cclxuICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH1cclxuKTtcclxuQnV0dG9uLmRpc3BsYXlOYW1lID0gXCJCdXR0b25cIjtcclxuXHJcbmV4cG9ydCB7IEJ1dHRvbiwgYnV0dG9uVmFyaWFudHMgfTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIi4uLy4uL2xpYi91dGlsc1wiO1xyXG5cclxuY29uc3QgQ2FyZCA9IFJlYWN0LmZvcndhcmRSZWY8XHJcbiAgSFRNTERpdkVsZW1lbnQsXHJcbiAgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+XHJcbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcclxuICA8ZGl2XHJcbiAgICByZWY9e3JlZn1cclxuICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgIFwicm91bmRlZC14bCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIGJnLXdoaXRlIHNoYWRvdy1zbVwiLFxyXG4gICAgICBjbGFzc05hbWVcclxuICAgICl9XHJcbiAgICB7Li4ucHJvcHN9XHJcbiAgLz5cclxuKSk7XHJcbkNhcmQuZGlzcGxheU5hbWUgPSBcIkNhcmRcIjtcclxuXHJcbmNvbnN0IENhcmRIZWFkZXIgPSBSZWFjdC5mb3J3YXJkUmVmPFxyXG4gIEhUTUxEaXZFbGVtZW50LFxyXG4gIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PlxyXG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXHJcbiAgPGRpdlxyXG4gICAgcmVmPXtyZWZ9XHJcbiAgICBjbGFzc05hbWU9e2NuKFwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTEuNSBwLTZcIiwgY2xhc3NOYW1lKX1cclxuICAgIHsuLi5wcm9wc31cclxuICAvPlxyXG4pKTtcclxuQ2FyZEhlYWRlci5kaXNwbGF5TmFtZSA9IFwiQ2FyZEhlYWRlclwiO1xyXG5cclxuY29uc3QgQ2FyZFRpdGxlID0gUmVhY3QuZm9yd2FyZFJlZjxcclxuICBIVE1MUGFyYWdyYXBoRWxlbWVudCxcclxuICBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MSGVhZGluZ0VsZW1lbnQ+XHJcbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcclxuICA8aDNcclxuICAgIHJlZj17cmVmfVxyXG4gICAgY2xhc3NOYW1lPXtjbihcImZvbnQtc2VtaWJvbGQgbGVhZGluZy1ub25lIHRyYWNraW5nLXRpZ2h0XCIsIGNsYXNzTmFtZSl9XHJcbiAgICB7Li4ucHJvcHN9XHJcbiAgLz5cclxuKSk7XHJcbkNhcmRUaXRsZS5kaXNwbGF5TmFtZSA9IFwiQ2FyZFRpdGxlXCI7XHJcblxyXG5jb25zdCBDYXJkRGVzY3JpcHRpb24gPSBSZWFjdC5mb3J3YXJkUmVmPFxyXG4gIEhUTUxQYXJhZ3JhcGhFbGVtZW50LFxyXG4gIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxQYXJhZ3JhcGhFbGVtZW50PlxyXG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXHJcbiAgPHBcclxuICAgIHJlZj17cmVmfVxyXG4gICAgY2xhc3NOYW1lPXtjbihcInRleHQtc20gdGV4dC1ncmF5LTUwMFwiLCBjbGFzc05hbWUpfVxyXG4gICAgey4uLnByb3BzfVxyXG4gIC8+XHJcbikpO1xyXG5DYXJkRGVzY3JpcHRpb24uZGlzcGxheU5hbWUgPSBcIkNhcmREZXNjcmlwdGlvblwiO1xyXG5cclxuY29uc3QgQ2FyZENvbnRlbnQgPSBSZWFjdC5mb3J3YXJkUmVmPFxyXG4gIEhUTUxEaXZFbGVtZW50LFxyXG4gIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PlxyXG4+KCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXHJcbiAgPGRpdiByZWY9e3JlZn0gY2xhc3NOYW1lPXtjbihcInAtNiBwdC0wXCIsIGNsYXNzTmFtZSl9IHsuLi5wcm9wc30gLz5cclxuKSk7XHJcbkNhcmRDb250ZW50LmRpc3BsYXlOYW1lID0gXCJDYXJkQ29udGVudFwiO1xyXG5cclxuY29uc3QgQ2FyZEZvb3RlciA9IFJlYWN0LmZvcndhcmRSZWY8XHJcbiAgSFRNTERpdkVsZW1lbnQsXHJcbiAgUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+XHJcbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcclxuICA8ZGl2XHJcbiAgICByZWY9e3JlZn1cclxuICAgIGNsYXNzTmFtZT17Y24oXCJmbGV4IGl0ZW1zLWNlbnRlciBwLTYgcHQtMFwiLCBjbGFzc05hbWUpfVxyXG4gICAgey4uLnByb3BzfVxyXG4gIC8+XHJcbikpO1xyXG5DYXJkRm9vdGVyLmRpc3BsYXlOYW1lID0gXCJDYXJkRm9vdGVyXCI7XHJcblxyXG5leHBvcnQgeyBDYXJkLCBDYXJkSGVhZGVyLCBDYXJkRm9vdGVyLCBDYXJkVGl0bGUsIENhcmREZXNjcmlwdGlvbiwgQ2FyZENvbnRlbnQgfTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIERyb3Bkb3duTWVudVByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWRyb3Bkb3duLW1lbnVcIjtcclxuaW1wb3J0IHsgQ2hlY2ssIENoZXZyb25SaWdodCwgQ2lyY2xlIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xyXG5pbXBvcnQgeyBjbiB9IGZyb20gXCIuLi8uLi9saWIvdXRpbHNcIjtcclxuXHJcbmNvbnN0IERyb3Bkb3duTWVudSA9IERyb3Bkb3duTWVudVByaW1pdGl2ZS5Sb290O1xyXG5cclxuY29uc3QgRHJvcGRvd25NZW51VHJpZ2dlciA9IERyb3Bkb3duTWVudVByaW1pdGl2ZS5UcmlnZ2VyO1xyXG5cclxuY29uc3QgRHJvcGRvd25NZW51R3JvdXAgPSBEcm9wZG93bk1lbnVQcmltaXRpdmUuR3JvdXA7XHJcblxyXG5jb25zdCBEcm9wZG93bk1lbnVQb3J0YWwgPSBEcm9wZG93bk1lbnVQcmltaXRpdmUuUG9ydGFsO1xyXG5cclxuY29uc3QgRHJvcGRvd25NZW51U3ViID0gRHJvcGRvd25NZW51UHJpbWl0aXZlLlN1YjtcclxuXHJcbmNvbnN0IERyb3Bkb3duTWVudVJhZGlvR3JvdXAgPSBEcm9wZG93bk1lbnVQcmltaXRpdmUuUmFkaW9Hcm91cDtcclxuXHJcbmNvbnN0IERyb3Bkb3duTWVudVN1YlRyaWdnZXIgPSBSZWFjdC5mb3J3YXJkUmVmPFxyXG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5TdWJUcmlnZ2VyPixcclxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5TdWJUcmlnZ2VyPiAmIHtcclxuICAgIGluc2V0PzogYm9vbGVhbjtcclxuICB9XHJcbj4oKHsgY2xhc3NOYW1lLCBpbnNldCwgY2hpbGRyZW4sIC4uLnByb3BzIH0sIHJlZikgPT4gKFxyXG4gIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuU3ViVHJpZ2dlclxyXG4gICAgcmVmPXtyZWZ9XHJcbiAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICBcImZsZXggY3Vyc29yLWRlZmF1bHQgc2VsZWN0LW5vbmUgaXRlbXMtY2VudGVyIHJvdW5kZWQtc20gcHgtMiBweS0xLjUgdGV4dC1zbSBvdXRsaW5lLW5vbmUgZm9jdXM6YmctZ3JheS0xMDAgZGF0YS1bc3RhdGU9b3Blbl06YmctZ3JheS0xMDBcIixcclxuICAgICAgaW5zZXQgJiYgXCJwbC04XCIsXHJcbiAgICAgIGNsYXNzTmFtZVxyXG4gICAgKX1cclxuICAgIHsuLi5wcm9wc31cclxuICA+XHJcbiAgICB7Y2hpbGRyZW59XHJcbiAgICA8Q2hldnJvblJpZ2h0IGNsYXNzTmFtZT1cIm1sLWF1dG8gaC00IHctNFwiIC8+XHJcbiAgPC9Ecm9wZG93bk1lbnVQcmltaXRpdmUuU3ViVHJpZ2dlcj5cclxuKSk7XHJcbkRyb3Bkb3duTWVudVN1YlRyaWdnZXIuZGlzcGxheU5hbWUgPVxyXG4gIERyb3Bkb3duTWVudVByaW1pdGl2ZS5TdWJUcmlnZ2VyLmRpc3BsYXlOYW1lO1xyXG5cclxuY29uc3QgRHJvcGRvd25NZW51U3ViQ29udGVudCA9IFJlYWN0LmZvcndhcmRSZWY8XHJcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLlN1YkNvbnRlbnQ+LFxyXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLlN1YkNvbnRlbnQ+XHJcbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcclxuICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLlN1YkNvbnRlbnRcclxuICAgIHJlZj17cmVmfVxyXG4gICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgXCJ6LTUwIG1pbi13LVs4cmVtXSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIGJnLXdoaXRlIHAtMSB0ZXh0LWdyYXktOTUwIHNoYWRvdy1sZ1wiLFxyXG4gICAgICBjbGFzc05hbWVcclxuICAgICl9XHJcbiAgICB7Li4ucHJvcHN9XHJcbiAgLz5cclxuKSk7XHJcbkRyb3Bkb3duTWVudVN1YkNvbnRlbnQuZGlzcGxheU5hbWUgPVxyXG4gIERyb3Bkb3duTWVudVByaW1pdGl2ZS5TdWJDb250ZW50LmRpc3BsYXlOYW1lO1xyXG5cclxuY29uc3QgRHJvcGRvd25NZW51Q29udGVudCA9IFJlYWN0LmZvcndhcmRSZWY8XHJcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLkNvbnRlbnQ+LFxyXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLkNvbnRlbnQ+XHJcbj4oKHsgY2xhc3NOYW1lLCBzaWRlT2Zmc2V0ID0gNCwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXHJcbiAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5Qb3J0YWw+XHJcbiAgICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLkNvbnRlbnRcclxuICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgIHNpZGVPZmZzZXQ9e3NpZGVPZmZzZXR9XHJcbiAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgXCJ6LTUwIG1pbi13LVs4cmVtXSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIGJnLXdoaXRlIHAtMSB0ZXh0LWdyYXktOTUwIHNoYWRvdy1tZFwiLFxyXG4gICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICApfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gIDwvRHJvcGRvd25NZW51UHJpbWl0aXZlLlBvcnRhbD5cclxuKSk7XHJcbkRyb3Bkb3duTWVudUNvbnRlbnQuZGlzcGxheU5hbWUgPSBEcm9wZG93bk1lbnVQcmltaXRpdmUuQ29udGVudC5kaXNwbGF5TmFtZTtcclxuXHJcbmNvbnN0IERyb3Bkb3duTWVudUl0ZW0gPSBSZWFjdC5mb3J3YXJkUmVmPFxyXG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5JdGVtPixcclxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5JdGVtPiAmIHtcclxuICAgIGluc2V0PzogYm9vbGVhbjtcclxuICB9XHJcbj4oKHsgY2xhc3NOYW1lLCBpbnNldCwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXHJcbiAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5JdGVtXHJcbiAgICByZWY9e3JlZn1cclxuICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgIFwicmVsYXRpdmUgZmxleCBjdXJzb3ItZGVmYXVsdCBzZWxlY3Qtbm9uZSBpdGVtcy1jZW50ZXIgcm91bmRlZC1zbSBweC0yIHB5LTEuNSB0ZXh0LXNtIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uLWNvbG9ycyBmb2N1czpiZy1ncmF5LTEwMCBmb2N1czp0ZXh0LWdyYXktOTAwIGRhdGEtW2Rpc2FibGVkXTpwb2ludGVyLWV2ZW50cy1ub25lIGRhdGEtW2Rpc2FibGVkXTpvcGFjaXR5LTUwXCIsXHJcbiAgICAgIGluc2V0ICYmIFwicGwtOFwiLFxyXG4gICAgICBjbGFzc05hbWVcclxuICAgICl9XHJcbiAgICB7Li4ucHJvcHN9XHJcbiAgLz5cclxuKSk7XHJcbkRyb3Bkb3duTWVudUl0ZW0uZGlzcGxheU5hbWUgPSBEcm9wZG93bk1lbnVQcmltaXRpdmUuSXRlbS5kaXNwbGF5TmFtZTtcclxuXHJcbmNvbnN0IERyb3Bkb3duTWVudUNoZWNrYm94SXRlbSA9IFJlYWN0LmZvcndhcmRSZWY8XHJcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLkNoZWNrYm94SXRlbT4sXHJcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBEcm9wZG93bk1lbnVQcmltaXRpdmUuQ2hlY2tib3hJdGVtPlxyXG4+KCh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIGNoZWNrZWQsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxyXG4gIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuQ2hlY2tib3hJdGVtXHJcbiAgICByZWY9e3JlZn1cclxuICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgIFwicmVsYXRpdmUgZmxleCBjdXJzb3ItZGVmYXVsdCBzZWxlY3Qtbm9uZSBpdGVtcy1jZW50ZXIgcm91bmRlZC1zbSBweS0xLjUgcGwtOCBwci0yIHRleHQtc20gb3V0bGluZS1ub25lIHRyYW5zaXRpb24tY29sb3JzIGZvY3VzOmJnLWdyYXktMTAwIGZvY3VzOnRleHQtZ3JheS05MDAgZGF0YS1bZGlzYWJsZWRdOnBvaW50ZXItZXZlbnRzLW5vbmUgZGF0YS1bZGlzYWJsZWRdOm9wYWNpdHktNTBcIixcclxuICAgICAgY2xhc3NOYW1lXHJcbiAgICApfVxyXG4gICAgY2hlY2tlZD17Y2hlY2tlZH1cclxuICAgIHsuLi5wcm9wc31cclxuICA+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTIgZmxleCBoLTMuNSB3LTMuNSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5JdGVtSW5kaWNhdG9yPlxyXG4gICAgICAgIDxDaGVjayBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cclxuICAgICAgPC9Ecm9wZG93bk1lbnVQcmltaXRpdmUuSXRlbUluZGljYXRvcj5cclxuICAgIDwvc3Bhbj5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L0Ryb3Bkb3duTWVudVByaW1pdGl2ZS5DaGVja2JveEl0ZW0+XHJcbikpO1xyXG5Ecm9wZG93bk1lbnVDaGVja2JveEl0ZW0uZGlzcGxheU5hbWUgPVxyXG4gIERyb3Bkb3duTWVudVByaW1pdGl2ZS5DaGVja2JveEl0ZW0uZGlzcGxheU5hbWU7XHJcblxyXG5jb25zdCBEcm9wZG93bk1lbnVSYWRpb0l0ZW0gPSBSZWFjdC5mb3J3YXJkUmVmPFxyXG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5SYWRpb0l0ZW0+LFxyXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLlJhZGlvSXRlbT5cclxuPigoeyBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9LCByZWYpID0+IChcclxuICA8RHJvcGRvd25NZW51UHJpbWl0aXZlLlJhZGlvSXRlbVxyXG4gICAgcmVmPXtyZWZ9XHJcbiAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICBcInJlbGF0aXZlIGZsZXggY3Vyc29yLWRlZmF1bHQgc2VsZWN0LW5vbmUgaXRlbXMtY2VudGVyIHJvdW5kZWQtc20gcHktMS41IHBsLTggcHItMiB0ZXh0LXNtIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uLWNvbG9ycyBmb2N1czpiZy1ncmF5LTEwMCBmb2N1czp0ZXh0LWdyYXktOTAwIGRhdGEtW2Rpc2FibGVkXTpwb2ludGVyLWV2ZW50cy1ub25lIGRhdGEtW2Rpc2FibGVkXTpvcGFjaXR5LTUwXCIsXHJcbiAgICAgIGNsYXNzTmFtZVxyXG4gICAgKX1cclxuICAgIHsuLi5wcm9wc31cclxuICA+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTIgZmxleCBoLTMuNSB3LTMuNSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgPERyb3Bkb3duTWVudVByaW1pdGl2ZS5JdGVtSW5kaWNhdG9yPlxyXG4gICAgICAgIDxDaXJjbGUgY2xhc3NOYW1lPVwiaC0yIHctMiBmaWxsLWN1cnJlbnRcIiAvPlxyXG4gICAgICA8L0Ryb3Bkb3duTWVudVByaW1pdGl2ZS5JdGVtSW5kaWNhdG9yPlxyXG4gICAgPC9zcGFuPlxyXG4gICAge2NoaWxkcmVufVxyXG4gIDwvRHJvcGRvd25NZW51UHJpbWl0aXZlLlJhZGlvSXRlbT5cclxuKSk7XHJcbkRyb3Bkb3duTWVudVJhZGlvSXRlbS5kaXNwbGF5TmFtZSA9IERyb3Bkb3duTWVudVByaW1pdGl2ZS5SYWRpb0l0ZW0uZGlzcGxheU5hbWU7XHJcblxyXG5jb25zdCBEcm9wZG93bk1lbnVMYWJlbCA9IFJlYWN0LmZvcndhcmRSZWY8XHJcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLkxhYmVsPixcclxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5MYWJlbD4gJiB7XHJcbiAgICBpbnNldD86IGJvb2xlYW47XHJcbiAgfVxyXG4+KCh7IGNsYXNzTmFtZSwgaW5zZXQsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxyXG4gIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuTGFiZWxcclxuICAgIHJlZj17cmVmfVxyXG4gICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgXCJweC0yIHB5LTEuNSB0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIixcclxuICAgICAgaW5zZXQgJiYgXCJwbC04XCIsXHJcbiAgICAgIGNsYXNzTmFtZVxyXG4gICAgKX1cclxuICAgIHsuLi5wcm9wc31cclxuICAvPlxyXG4pKTtcclxuRHJvcGRvd25NZW51TGFiZWwuZGlzcGxheU5hbWUgPSBEcm9wZG93bk1lbnVQcmltaXRpdmUuTGFiZWwuZGlzcGxheU5hbWU7XHJcblxyXG5jb25zdCBEcm9wZG93bk1lbnVTZXBhcmF0b3IgPSBSZWFjdC5mb3J3YXJkUmVmPFxyXG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIERyb3Bkb3duTWVudVByaW1pdGl2ZS5TZXBhcmF0b3I+LFxyXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgRHJvcGRvd25NZW51UHJpbWl0aXZlLlNlcGFyYXRvcj5cclxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxyXG4gIDxEcm9wZG93bk1lbnVQcmltaXRpdmUuU2VwYXJhdG9yXHJcbiAgICByZWY9e3JlZn1cclxuICAgIGNsYXNzTmFtZT17Y24oXCItbXgtMSBteS0xIGgtcHggYmctZ3JheS0xMDBcIiwgY2xhc3NOYW1lKX1cclxuICAgIHsuLi5wcm9wc31cclxuICAvPlxyXG4pKTtcclxuRHJvcGRvd25NZW51U2VwYXJhdG9yLmRpc3BsYXlOYW1lID0gRHJvcGRvd25NZW51UHJpbWl0aXZlLlNlcGFyYXRvci5kaXNwbGF5TmFtZTtcclxuXHJcbmNvbnN0IERyb3Bkb3duTWVudVNob3J0Y3V0ID0gKHtcclxuICBjbGFzc05hbWUsXHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTFNwYW5FbGVtZW50PikgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3BhblxyXG4gICAgICBjbGFzc05hbWU9e2NuKFwibWwtYXV0byB0ZXh0LXhzIHRyYWNraW5nLXdpZGVzdCBvcGFjaXR5LTYwXCIsIGNsYXNzTmFtZSl9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuRHJvcGRvd25NZW51U2hvcnRjdXQuZGlzcGxheU5hbWUgPSBcIkRyb3Bkb3duTWVudVNob3J0Y3V0XCI7XHJcblxyXG5leHBvcnQge1xyXG4gIERyb3Bkb3duTWVudSxcclxuICBEcm9wZG93bk1lbnVUcmlnZ2VyLFxyXG4gIERyb3Bkb3duTWVudUNvbnRlbnQsXHJcbiAgRHJvcGRvd25NZW51SXRlbSxcclxuICBEcm9wZG93bk1lbnVDaGVja2JveEl0ZW0sXHJcbiAgRHJvcGRvd25NZW51UmFkaW9JdGVtLFxyXG4gIERyb3Bkb3duTWVudUxhYmVsLFxyXG4gIERyb3Bkb3duTWVudVNlcGFyYXRvcixcclxuICBEcm9wZG93bk1lbnVTaG9ydGN1dCxcclxuICBEcm9wZG93bk1lbnVHcm91cCxcclxuICBEcm9wZG93bk1lbnVQb3J0YWwsXHJcbiAgRHJvcGRvd25NZW51U3ViLFxyXG4gIERyb3Bkb3duTWVudVN1YkNvbnRlbnQsXHJcbiAgRHJvcGRvd25NZW51U3ViVHJpZ2dlcixcclxuICBEcm9wZG93bk1lbnVSYWRpb0dyb3VwLFxyXG59O1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY24gfSBmcm9tIFwiLi4vLi4vbGliL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElucHV0UHJvcHNcclxuICBleHRlbmRzIFJlYWN0LklucHV0SFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4ge31cclxuXHJcbmNvbnN0IElucHV0ID0gUmVhY3QuZm9yd2FyZFJlZjxIVE1MSW5wdXRFbGVtZW50LCBJbnB1dFByb3BzPihcclxuICAoeyBjbGFzc05hbWUsIHR5cGUsIC4uLnByb3BzIH0sIHJlZikgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgXCJmbGV4IGgtOSB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGJnLXdoaXRlIHB4LTMgcHktMSB0ZXh0LXNtIHNoYWRvdy1zbSB0cmFuc2l0aW9uLWNvbG9ycyBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNDAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIGRpc2FibGVkOm9wYWNpdHktNTBcIixcclxuICAgICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICAgICl9XHJcbiAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9XHJcbik7XHJcbklucHV0LmRpc3BsYXlOYW1lID0gXCJJbnB1dFwiO1xyXG5cclxuZXhwb3J0IHsgSW5wdXQgfTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIExhYmVsUHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3QtbGFiZWxcIjtcclxuaW1wb3J0IHsgY3ZhLCB0eXBlIFZhcmlhbnRQcm9wcyB9IGZyb20gXCJjbGFzcy12YXJpYW5jZS1hdXRob3JpdHlcIjtcclxuaW1wb3J0IHsgY24gfSBmcm9tIFwiLi4vLi4vbGliL3V0aWxzXCI7XHJcblxyXG5jb25zdCBsYWJlbFZhcmlhbnRzID0gY3ZhKFxyXG4gIFwidGV4dC1zbSBmb250LW1lZGl1bSBsZWFkaW5nLW5vbmUgcGVlci1kaXNhYmxlZDpjdXJzb3Itbm90LWFsbG93ZWQgcGVlci1kaXNhYmxlZDpvcGFjaXR5LTcwXCJcclxuKTtcclxuXHJcbmNvbnN0IExhYmVsID0gUmVhY3QuZm9yd2FyZFJlZjxcclxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBMYWJlbFByaW1pdGl2ZS5Sb290PixcclxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIExhYmVsUHJpbWl0aXZlLlJvb3Q+ICZcclxuICAgIFZhcmlhbnRQcm9wczx0eXBlb2YgbGFiZWxWYXJpYW50cz5cclxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxyXG4gIDxMYWJlbFByaW1pdGl2ZS5Sb290XHJcbiAgICByZWY9e3JlZn1cclxuICAgIGNsYXNzTmFtZT17Y24obGFiZWxWYXJpYW50cygpLCBjbGFzc05hbWUpfVxyXG4gICAgey4uLnByb3BzfVxyXG4gIC8+XHJcbikpO1xyXG5MYWJlbC5kaXNwbGF5TmFtZSA9IExhYmVsUHJpbWl0aXZlLlJvb3QuZGlzcGxheU5hbWU7XHJcblxyXG5leHBvcnQgeyBMYWJlbCB9O1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgU2VsZWN0UHJpbWl0aXZlIGZyb20gXCJAcmFkaXgtdWkvcmVhY3Qtc2VsZWN0XCI7XHJcbmltcG9ydCB7IENoZWNrLCBDaGV2cm9uRG93biwgQ2hldnJvblVwIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xyXG5pbXBvcnQgeyBjbiB9IGZyb20gXCIuLi8uLi9saWIvdXRpbHNcIjtcclxuXHJcbmNvbnN0IFNlbGVjdCA9IFNlbGVjdFByaW1pdGl2ZS5Sb290O1xyXG5cclxuY29uc3QgU2VsZWN0R3JvdXAgPSBTZWxlY3RQcmltaXRpdmUuR3JvdXA7XHJcblxyXG5jb25zdCBTZWxlY3RWYWx1ZSA9IFNlbGVjdFByaW1pdGl2ZS5WYWx1ZTtcclxuXHJcbmNvbnN0IFNlbGVjdFRyaWdnZXIgPSBSZWFjdC5mb3J3YXJkUmVmPFxyXG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIFNlbGVjdFByaW1pdGl2ZS5UcmlnZ2VyPixcclxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIFNlbGVjdFByaW1pdGl2ZS5UcmlnZ2VyPlxyXG4+KCh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0sIHJlZikgPT4gKFxyXG4gIDxTZWxlY3RQcmltaXRpdmUuVHJpZ2dlclxyXG4gICAgcmVmPXtyZWZ9XHJcbiAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICBcImZsZXggaC05IHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBiZy13aGl0ZSBweC0zIHB5LTEgdGV4dC1zbSByaW5nLW9mZnNldC13aGl0ZSBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ncmF5LTk1MCBmb2N1czpyaW5nLW9mZnNldC0yIGRpc2FibGVkOmN1cnNvci1ub3QtYWxsb3dlZCBkaXNhYmxlZDpvcGFjaXR5LTUwIFsmPnNwYW5dOmxpbmUtY2xhbXAtMVwiLFxyXG4gICAgICBjbGFzc05hbWVcclxuICAgICl9XHJcbiAgICB7Li4ucHJvcHN9XHJcbiAgPlxyXG4gICAge2NoaWxkcmVufVxyXG4gICAgPFNlbGVjdFByaW1pdGl2ZS5JY29uIGFzQ2hpbGQ+XHJcbiAgICAgIDxDaGV2cm9uRG93biBjbGFzc05hbWU9XCJoLTQgdy00IG9wYWNpdHktNTBcIiAvPlxyXG4gICAgPC9TZWxlY3RQcmltaXRpdmUuSWNvbj5cclxuICA8L1NlbGVjdFByaW1pdGl2ZS5UcmlnZ2VyPlxyXG4pKTtcclxuU2VsZWN0VHJpZ2dlci5kaXNwbGF5TmFtZSA9IFNlbGVjdFByaW1pdGl2ZS5UcmlnZ2VyLmRpc3BsYXlOYW1lO1xyXG5cclxuY29uc3QgU2VsZWN0U2Nyb2xsVXBCdXR0b24gPSBSZWFjdC5mb3J3YXJkUmVmPFxyXG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIFNlbGVjdFByaW1pdGl2ZS5TY3JvbGxVcEJ1dHRvbj4sXHJcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBTZWxlY3RQcmltaXRpdmUuU2Nyb2xsVXBCdXR0b24+XHJcbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcclxuICA8U2VsZWN0UHJpbWl0aXZlLlNjcm9sbFVwQnV0dG9uXHJcbiAgICByZWY9e3JlZn1cclxuICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgIFwiZmxleCBjdXJzb3ItZGVmYXVsdCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktMVwiLFxyXG4gICAgICBjbGFzc05hbWVcclxuICAgICl9XHJcbiAgICB7Li4ucHJvcHN9XHJcbiAgPlxyXG4gICAgPENoZXZyb25VcCBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cclxuICA8L1NlbGVjdFByaW1pdGl2ZS5TY3JvbGxVcEJ1dHRvbj5cclxuKSk7XHJcblNlbGVjdFNjcm9sbFVwQnV0dG9uLmRpc3BsYXlOYW1lID0gU2VsZWN0UHJpbWl0aXZlLlNjcm9sbFVwQnV0dG9uLmRpc3BsYXlOYW1lO1xyXG5cclxuY29uc3QgU2VsZWN0U2Nyb2xsRG93bkJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWY8XHJcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgU2VsZWN0UHJpbWl0aXZlLlNjcm9sbERvd25CdXR0b24+LFxyXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgU2VsZWN0UHJpbWl0aXZlLlNjcm9sbERvd25CdXR0b24+XHJcbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcclxuICA8U2VsZWN0UHJpbWl0aXZlLlNjcm9sbERvd25CdXR0b25cclxuICAgIHJlZj17cmVmfVxyXG4gICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgXCJmbGV4IGN1cnNvci1kZWZhdWx0IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS0xXCIsXHJcbiAgICAgIGNsYXNzTmFtZVxyXG4gICAgKX1cclxuICAgIHsuLi5wcm9wc31cclxuICA+XHJcbiAgICA8Q2hldnJvbkRvd24gY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XHJcbiAgPC9TZWxlY3RQcmltaXRpdmUuU2Nyb2xsRG93bkJ1dHRvbj5cclxuKSk7XHJcblNlbGVjdFNjcm9sbERvd25CdXR0b24uZGlzcGxheU5hbWUgPVxyXG4gIFNlbGVjdFByaW1pdGl2ZS5TY3JvbGxEb3duQnV0dG9uLmRpc3BsYXlOYW1lO1xyXG5cclxuY29uc3QgU2VsZWN0Q29udGVudCA9IFJlYWN0LmZvcndhcmRSZWY8XHJcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgU2VsZWN0UHJpbWl0aXZlLkNvbnRlbnQ+LFxyXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgU2VsZWN0UHJpbWl0aXZlLkNvbnRlbnQ+XHJcbj4oKHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgcG9zaXRpb24gPSBcInBvcHBlclwiLCAuLi5wcm9wcyB9LCByZWYpID0+IChcclxuICA8U2VsZWN0UHJpbWl0aXZlLlBvcnRhbD5cclxuICAgIDxTZWxlY3RQcmltaXRpdmUuQ29udGVudFxyXG4gICAgICByZWY9e3JlZn1cclxuICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICBcInJlbGF0aXZlIHotNTAgbWF4LWgtOTYgbWluLXctWzhyZW1dIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItZ3JheS0yMDAgYmctd2hpdGUgdGV4dC1ncmF5LTk1MCBzaGFkb3ctbWRcIixcclxuICAgICAgICBwb3NpdGlvbiA9PT0gXCJwb3BwZXJcIiAmJlxyXG4gICAgICAgICAgXCJkYXRhLVtzaWRlPWJvdHRvbV06dHJhbnNsYXRlLXktMSBkYXRhLVtzaWRlPWxlZnRdOi10cmFuc2xhdGUteC0xIGRhdGEtW3NpZGU9cmlnaHRdOnRyYW5zbGF0ZS14LTEgZGF0YS1bc2lkZT10b3BdOi10cmFuc2xhdGUteS0xXCIsXHJcbiAgICAgICAgY2xhc3NOYW1lXHJcbiAgICAgICl9XHJcbiAgICAgIHBvc2l0aW9uPXtwb3NpdGlvbn1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICA8U2VsZWN0U2Nyb2xsVXBCdXR0b24gLz5cclxuICAgICAgPFNlbGVjdFByaW1pdGl2ZS5WaWV3cG9ydFxyXG4gICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICBcInAtMVwiLFxyXG4gICAgICAgICAgcG9zaXRpb24gPT09IFwicG9wcGVyXCIgJiZcclxuICAgICAgICAgICAgXCJoLVt2YXIoLS1yYWRpeC1zZWxlY3QtdHJpZ2dlci1oZWlnaHQpXSB3LWZ1bGwgbWluLXctW3ZhcigtLXJhZGl4LXNlbGVjdC10cmlnZ2VyLXdpZHRoKV1cIlxyXG4gICAgICAgICl9XHJcbiAgICAgID5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvU2VsZWN0UHJpbWl0aXZlLlZpZXdwb3J0PlxyXG4gICAgICA8U2VsZWN0U2Nyb2xsRG93bkJ1dHRvbiAvPlxyXG4gICAgPC9TZWxlY3RQcmltaXRpdmUuQ29udGVudD5cclxuICA8L1NlbGVjdFByaW1pdGl2ZS5Qb3J0YWw+XHJcbikpO1xyXG5TZWxlY3RDb250ZW50LmRpc3BsYXlOYW1lID0gU2VsZWN0UHJpbWl0aXZlLkNvbnRlbnQuZGlzcGxheU5hbWU7XHJcblxyXG5jb25zdCBTZWxlY3RMYWJlbCA9IFJlYWN0LmZvcndhcmRSZWY8XHJcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgU2VsZWN0UHJpbWl0aXZlLkxhYmVsPixcclxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIFNlbGVjdFByaW1pdGl2ZS5MYWJlbD5cclxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxyXG4gIDxTZWxlY3RQcmltaXRpdmUuTGFiZWxcclxuICAgIHJlZj17cmVmfVxyXG4gICAgY2xhc3NOYW1lPXtjbihcInB5LTEuNSBwbC04IHByLTIgdGV4dC1zbSBmb250LXNlbWlib2xkXCIsIGNsYXNzTmFtZSl9XHJcbiAgICB7Li4ucHJvcHN9XHJcbiAgLz5cclxuKSk7XHJcblNlbGVjdExhYmVsLmRpc3BsYXlOYW1lID0gU2VsZWN0UHJpbWl0aXZlLkxhYmVsLmRpc3BsYXlOYW1lO1xyXG5cclxuY29uc3QgU2VsZWN0SXRlbSA9IFJlYWN0LmZvcndhcmRSZWY8XHJcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgU2VsZWN0UHJpbWl0aXZlLkl0ZW0+LFxyXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgU2VsZWN0UHJpbWl0aXZlLkl0ZW0+XHJcbj4oKHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSwgcmVmKSA9PiAoXHJcbiAgPFNlbGVjdFByaW1pdGl2ZS5JdGVtXHJcbiAgICByZWY9e3JlZn1cclxuICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgIFwicmVsYXRpdmUgZmxleCB3LWZ1bGwgY3Vyc29yLWRlZmF1bHQgc2VsZWN0LW5vbmUgaXRlbXMtY2VudGVyIHJvdW5kZWQtc20gcHktMS41IHBsLTggcHItMiB0ZXh0LXNtIG91dGxpbmUtbm9uZSBmb2N1czpiZy1ncmF5LTEwMCBmb2N1czp0ZXh0LWdyYXktOTAwIGRhdGEtW2Rpc2FibGVkXTpwb2ludGVyLWV2ZW50cy1ub25lIGRhdGEtW2Rpc2FibGVkXTpvcGFjaXR5LTUwXCIsXHJcbiAgICAgIGNsYXNzTmFtZVxyXG4gICAgKX1cclxuICAgIHsuLi5wcm9wc31cclxuICA+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTIgZmxleCBoLTMuNSB3LTMuNSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgPFNlbGVjdFByaW1pdGl2ZS5JdGVtSW5kaWNhdG9yPlxyXG4gICAgICAgIDxDaGVjayBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cclxuICAgICAgPC9TZWxlY3RQcmltaXRpdmUuSXRlbUluZGljYXRvcj5cclxuICAgIDwvc3Bhbj5cclxuXHJcbiAgICA8U2VsZWN0UHJpbWl0aXZlLkl0ZW1UZXh0PntjaGlsZHJlbn08L1NlbGVjdFByaW1pdGl2ZS5JdGVtVGV4dD5cclxuICA8L1NlbGVjdFByaW1pdGl2ZS5JdGVtPlxyXG4pKTtcclxuU2VsZWN0SXRlbS5kaXNwbGF5TmFtZSA9IFNlbGVjdFByaW1pdGl2ZS5JdGVtLmRpc3BsYXlOYW1lO1xyXG5cclxuY29uc3QgU2VsZWN0U2VwYXJhdG9yID0gUmVhY3QuZm9yd2FyZFJlZjxcclxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBTZWxlY3RQcmltaXRpdmUuU2VwYXJhdG9yPixcclxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIFNlbGVjdFByaW1pdGl2ZS5TZXBhcmF0b3I+XHJcbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcclxuICA8U2VsZWN0UHJpbWl0aXZlLlNlcGFyYXRvclxyXG4gICAgcmVmPXtyZWZ9XHJcbiAgICBjbGFzc05hbWU9e2NuKFwiLW14LTEgbXktMSBoLXB4IGJnLWdyYXktMTAwXCIsIGNsYXNzTmFtZSl9XHJcbiAgICB7Li4ucHJvcHN9XHJcbiAgLz5cclxuKSk7XHJcblNlbGVjdFNlcGFyYXRvci5kaXNwbGF5TmFtZSA9IFNlbGVjdFByaW1pdGl2ZS5TZXBhcmF0b3IuZGlzcGxheU5hbWU7XHJcblxyXG5leHBvcnQge1xyXG4gIFNlbGVjdCxcclxuICBTZWxlY3RHcm91cCxcclxuICBTZWxlY3RWYWx1ZSxcclxuICBTZWxlY3RUcmlnZ2VyLFxyXG4gIFNlbGVjdENvbnRlbnQsXHJcbiAgU2VsZWN0TGFiZWwsXHJcbiAgU2VsZWN0SXRlbSxcclxuICBTZWxlY3RTZXBhcmF0b3IsXHJcbiAgU2VsZWN0U2Nyb2xsVXBCdXR0b24sXHJcbiAgU2VsZWN0U2Nyb2xsRG93bkJ1dHRvbixcclxufTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIERpYWxvZ1ByaW1pdGl2ZSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWRpYWxvZ1wiO1xyXG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCB7IFggfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XHJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIi4uLy4uL2xpYi91dGlsc1wiO1xyXG5cclxuY29uc3QgU2hlZXQgPSBEaWFsb2dQcmltaXRpdmUuUm9vdDtcclxuXHJcbmNvbnN0IFNoZWV0VHJpZ2dlciA9IERpYWxvZ1ByaW1pdGl2ZS5UcmlnZ2VyO1xyXG5cclxuY29uc3QgU2hlZXRDbG9zZSA9IERpYWxvZ1ByaW1pdGl2ZS5DbG9zZTtcclxuXHJcbmNvbnN0IFNoZWV0UG9ydGFsID0gRGlhbG9nUHJpbWl0aXZlLlBvcnRhbDtcclxuXHJcbmNvbnN0IFNoZWV0T3ZlcmxheSA9IFJlYWN0LmZvcndhcmRSZWY8XHJcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgRGlhbG9nUHJpbWl0aXZlLk92ZXJsYXk+LFxyXG4gIFJlYWN0LkNvbXBvbmVudFByb3BzV2l0aG91dFJlZjx0eXBlb2YgRGlhbG9nUHJpbWl0aXZlLk92ZXJsYXk+XHJcbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcclxuICA8RGlhbG9nUHJpbWl0aXZlLk92ZXJsYXlcclxuICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgIFwic2hlZXQtb3ZlcmxheSBmaXhlZCBpbnNldC0wIHotNTAgYmctYmxhY2svNTBcIixcclxuICAgICAgY2xhc3NOYW1lXHJcbiAgICApfVxyXG4gICAgey4uLnByb3BzfVxyXG4gICAgcmVmPXtyZWZ9XHJcbiAgLz5cclxuKSk7XHJcblNoZWV0T3ZlcmxheS5kaXNwbGF5TmFtZSA9IERpYWxvZ1ByaW1pdGl2ZS5PdmVybGF5LmRpc3BsYXlOYW1lO1xyXG5cclxuaW50ZXJmYWNlIFNoZWV0Q29udGVudFByb3BzXHJcbiAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIERpYWxvZ1ByaW1pdGl2ZS5Db250ZW50PiB7XHJcbiAgc2lkZT86IFwidG9wXCIgfCBcImJvdHRvbVwiIHwgXCJsZWZ0XCIgfCBcInJpZ2h0XCI7XHJcbn1cclxuXHJcbmNvbnN0IHNoZWV0VmFyaWFudHMgPSB7XHJcbiAgcmlnaHQ6IFwiaW5zZXQteS0wIHJpZ2h0LTAgaC1mdWxsIHctZnVsbCBzbTp3LVs0MDBweF0gYm9yZGVyLWwgYm9yZGVyLWdyYXktMjAwXCIsXHJcbiAgbGVmdDogXCJpbnNldC15LTAgbGVmdC0wIGgtZnVsbCB3LWZ1bGwgc206dy1bNDAwcHhdIGJvcmRlci1yIGJvcmRlci1ncmF5LTIwMFwiLFxyXG4gIHRvcDogXCJpbnNldC14LTAgdG9wLTAgaC1hdXRvIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMFwiLFxyXG4gIGJvdHRvbTogXCJpbnNldC14LTAgYm90dG9tLTAgaC1hdXRvIGJvcmRlci10IGJvcmRlci1ncmF5LTIwMFwiLFxyXG59O1xyXG5cclxuY29uc3QgU2hlZXRDb250ZW50ID0gUmVhY3QuZm9yd2FyZFJlZjxcclxuICBSZWFjdC5FbGVtZW50UmVmPHR5cGVvZiBEaWFsb2dQcmltaXRpdmUuQ29udGVudD4sXHJcbiAgU2hlZXRDb250ZW50UHJvcHNcclxuPigoeyBzaWRlID0gXCJyaWdodFwiLCBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9LCByZWYpID0+IChcclxuICA8U2hlZXRQb3J0YWw+XHJcbiAgICA8U2hlZXRPdmVybGF5IC8+XHJcbiAgICA8RGlhbG9nUHJpbWl0aXZlLkNvbnRlbnRcclxuICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgIGRhdGEtc2lkZT17c2lkZX1cclxuICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICBcInNoZWV0LWNvbnRlbnQgZml4ZWQgei01MCBnYXAtNCBiZy13aGl0ZSBwLTYgc2hhZG93LXhsXCIsXHJcbiAgICAgICAgc2hlZXRWYXJpYW50c1tzaWRlXSxcclxuICAgICAgICBjbGFzc05hbWVcclxuICAgICAgKX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDxEaWFsb2dQcmltaXRpdmUuQ2xvc2UgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtNCB0b3AtNCByb3VuZGVkLXNtIG9wYWNpdHktNzAgcmluZy1vZmZzZXQtd2hpdGUgdHJhbnNpdGlvbi1vcGFjaXR5IGhvdmVyOm9wYWNpdHktMTAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ncmF5LTk1MCBmb2N1czpyaW5nLW9mZnNldC0yIGRpc2FibGVkOnBvaW50ZXItZXZlbnRzLW5vbmVcIj5cclxuICAgICAgICA8WCBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+Q2xvc2U8L3NwYW4+XHJcbiAgICAgIDwvRGlhbG9nUHJpbWl0aXZlLkNsb3NlPlxyXG4gICAgPC9EaWFsb2dQcmltaXRpdmUuQ29udGVudD5cclxuICA8L1NoZWV0UG9ydGFsPlxyXG4pKTtcclxuU2hlZXRDb250ZW50LmRpc3BsYXlOYW1lID0gRGlhbG9nUHJpbWl0aXZlLkNvbnRlbnQuZGlzcGxheU5hbWU7XHJcblxyXG5jb25zdCBTaGVldEhlYWRlciA9ICh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PikgPT4gKFxyXG4gIDxkaXZcclxuICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgIFwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTIgdGV4dC1jZW50ZXIgc206dGV4dC1sZWZ0XCIsXHJcbiAgICAgIGNsYXNzTmFtZVxyXG4gICAgKX1cclxuICAgIHsuLi5wcm9wc31cclxuICAvPlxyXG4pO1xyXG5TaGVldEhlYWRlci5kaXNwbGF5TmFtZSA9IFwiU2hlZXRIZWFkZXJcIjtcclxuXHJcbmNvbnN0IFNoZWV0Rm9vdGVyID0gKHtcclxuICBjbGFzc05hbWUsXHJcbiAgLi4ucHJvcHNcclxufTogUmVhY3QuSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+KSA9PiAoXHJcbiAgPGRpdlxyXG4gICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgXCJmbGV4IGZsZXgtY29sLXJldmVyc2Ugc206ZmxleC1yb3cgc206anVzdGlmeS1lbmQgc206c3BhY2UteC0yXCIsXHJcbiAgICAgIGNsYXNzTmFtZVxyXG4gICAgKX1cclxuICAgIHsuLi5wcm9wc31cclxuICAvPlxyXG4pO1xyXG5TaGVldEZvb3Rlci5kaXNwbGF5TmFtZSA9IFwiU2hlZXRGb290ZXJcIjtcclxuXHJcbmNvbnN0IFNoZWV0VGl0bGUgPSBSZWFjdC5mb3J3YXJkUmVmPFxyXG4gIFJlYWN0LkVsZW1lbnRSZWY8dHlwZW9mIERpYWxvZ1ByaW1pdGl2ZS5UaXRsZT4sXHJcbiAgUmVhY3QuQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPHR5cGVvZiBEaWFsb2dQcmltaXRpdmUuVGl0bGU+XHJcbj4oKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IChcclxuICA8RGlhbG9nUHJpbWl0aXZlLlRpdGxlXHJcbiAgICByZWY9e3JlZn1cclxuICAgIGNsYXNzTmFtZT17Y24oXCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiLCBjbGFzc05hbWUpfVxyXG4gICAgey4uLnByb3BzfVxyXG4gIC8+XHJcbikpO1xyXG5TaGVldFRpdGxlLmRpc3BsYXlOYW1lID0gRGlhbG9nUHJpbWl0aXZlLlRpdGxlLmRpc3BsYXlOYW1lO1xyXG5cclxuY29uc3QgU2hlZXREZXNjcmlwdGlvbiA9IFJlYWN0LmZvcndhcmRSZWY8XHJcbiAgUmVhY3QuRWxlbWVudFJlZjx0eXBlb2YgRGlhbG9nUHJpbWl0aXZlLkRlc2NyaXB0aW9uPixcclxuICBSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8dHlwZW9mIERpYWxvZ1ByaW1pdGl2ZS5EZXNjcmlwdGlvbj5cclxuPigoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0sIHJlZikgPT4gKFxyXG4gIDxEaWFsb2dQcmltaXRpdmUuRGVzY3JpcHRpb25cclxuICAgIHJlZj17cmVmfVxyXG4gICAgY2xhc3NOYW1lPXtjbihcInRleHQtc20gdGV4dC1ncmF5LTUwMFwiLCBjbGFzc05hbWUpfVxyXG4gICAgey4uLnByb3BzfVxyXG4gIC8+XHJcbikpO1xyXG5TaGVldERlc2NyaXB0aW9uLmRpc3BsYXlOYW1lID0gRGlhbG9nUHJpbWl0aXZlLkRlc2NyaXB0aW9uLmRpc3BsYXlOYW1lO1xyXG5cclxuZXhwb3J0IHtcclxuICBTaGVldCxcclxuICBTaGVldFBvcnRhbCxcclxuICBTaGVldE92ZXJsYXksXHJcbiAgU2hlZXRUcmlnZ2VyLFxyXG4gIFNoZWV0Q2xvc2UsXHJcbiAgU2hlZXRDb250ZW50LFxyXG4gIFNoZWV0SGVhZGVyLFxyXG4gIFNoZWV0Rm9vdGVyLFxyXG4gIFNoZWV0VGl0bGUsXHJcbiAgU2hlZXREZXNjcmlwdGlvbixcclxufTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIi4uLy4uL2xpYi91dGlsc1wiO1xyXG5cclxuZnVuY3Rpb24gU2tlbGV0b24oe1xyXG4gIGNsYXNzTmFtZSxcclxuICAuLi5wcm9wc1xyXG59OiBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2NuKFwiYW5pbWF0ZS1wdWxzZSByb3VuZGVkLW1kIGJnLWdyYXktMjAwXCIsIGNsYXNzTmFtZSl9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IHsgU2tlbGV0b24gfTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNuIH0gZnJvbSBcIi4uLy4uL2xpYi91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUZXh0YXJlYVByb3BzXHJcbiAgZXh0ZW5kcyBSZWFjdC5UZXh0YXJlYUhUTUxBdHRyaWJ1dGVzPEhUTUxUZXh0QXJlYUVsZW1lbnQ+IHt9XHJcblxyXG5jb25zdCBUZXh0YXJlYSA9IFJlYWN0LmZvcndhcmRSZWY8SFRNTFRleHRBcmVhRWxlbWVudCwgVGV4dGFyZWFQcm9wcz4oXHJcbiAgKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9LCByZWYpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICBcImZsZXggbWluLWgtWzEyMHB4XSB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGJnLXdoaXRlIHB4LTMgcHktMiB0ZXh0LXNtIHNoYWRvdy1zbSBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNDAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkIGRpc2FibGVkOm9wYWNpdHktNTBcIixcclxuICAgICAgICAgIGNsYXNzTmFtZVxyXG4gICAgICAgICl9XHJcbiAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9XHJcbik7XHJcblRleHRhcmVhLmRpc3BsYXlOYW1lID0gXCJUZXh0YXJlYVwiO1xyXG5cclxuZXhwb3J0IHsgVGV4dGFyZWEgfTtcclxuIiwiaW1wb3J0IHsgY2xzeCwgdHlwZSBDbGFzc1ZhbHVlIH0gZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHsgdHdNZXJnZSB9IGZyb20gXCJ0YWlsd2luZC1tZXJnZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNuKC4uLmlucHV0czogQ2xhc3NWYWx1ZVtdKSB7XHJcbiAgcmV0dXJuIHR3TWVyZ2UoY2xzeChpbnB1dHMpKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgdG9hc3QsIHsgVG9hc3RlciB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuaW1wb3J0IHsgTWFpbCwgTG9jaywgTG9hZGVyMiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIENhcmRIZWFkZXIsIENhcmRUaXRsZSwgQ2FyZEZvb3RlciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3VpL2NhcmRcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcclxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91aS9sYWJlbFwiO1xyXG5cclxudHlwZSBNb2RlID0gXCJsb2dpblwiIHwgXCJyZWdpc3RlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aFBhZ2UoKSB7XHJcbiAgY29uc3QgW21vZGUsIHNldE1vZGVdID0gdXNlU3RhdGU8TW9kZT4oXCJsb2dpblwiKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtuZWVkc0NvbmZpcm1hdGlvbiwgc2V0TmVlZHNDb25maXJtYXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjb25maXJtYXRpb25FbWFpbCwgc2V0Q29uZmlybWF0aW9uRW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudDogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldE5lZWRzQ29uZmlybWF0aW9uKGZhbHNlKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAobW9kZSA9PT0gXCJyZWdpc3RlclwiKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvcmVnaXN0ZXJcIiwge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBwYXlsb2FkID0gYXdhaXQgcmVzcG9uc2UuanNvbigpLmNhdGNoKCgpID0+ICh7fSkpO1xyXG5cclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICB0b2FzdC5lcnJvcihwYXlsb2FkLm1lc3NhZ2UgPz8gXCJSZWdpc3RyYXRpb24gZmFpbGVkXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiQWNjb3VudCBjcmVhdGVkISBDaGVjayB5b3VyIGVtYWlsIHRvIGNvbmZpcm0uXCIpO1xyXG4gICAgICAgICAgc2V0TW9kZShcImxvZ2luXCIpO1xyXG4gICAgICAgICAgc2V0UGFzc3dvcmQoXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2xvZ2luXCIsIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKS5jYXRjaCgoKSA9PiAoe30pKTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgaWYgKHBheWxvYWQubmVlZHNDb25maXJtYXRpb24pIHtcclxuICAgICAgICAgICAgc2V0TmVlZHNDb25maXJtYXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgIHNldENvbmZpcm1hdGlvbkVtYWlsKGVtYWlsKTtcclxuICAgICAgICAgICAgdG9hc3QuZXJyb3IoXCJQbGVhc2UgY29uZmlybSB5b3VyIGVtYWlsIGZpcnN0XCIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdG9hc3QuZXJyb3IocGF5bG9hZC5tZXNzYWdlID8/IFwiTG9naW4gZmFpbGVkXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiTG9naW4gc3VjY2Vzc2Z1bCFcIik7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJfZW1haWxcIiwgZW1haWwpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvbm90ZXNcIjtcclxuICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0b2FzdC5lcnJvcihcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVzZW5kQ29uZmlybWF0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3Jlc2VuZC1jb25maXJtYXRpb25cIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWw6IGNvbmZpcm1hdGlvbkVtYWlsIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJDb25maXJtYXRpb24gZW1haWwgc2VudCFcIik7XHJcbiAgICAgICAgc2V0TmVlZHNDb25maXJtYXRpb24oZmFsc2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0LmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgY29uZmlybWF0aW9uIGVtYWlsXCIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgdG9hc3QuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBjb25maXJtYXRpb24gZW1haWxcIik7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVNb2RlID0gKCkgPT4ge1xyXG4gICAgc2V0TW9kZShtb2RlID09PSBcImxvZ2luXCIgPyBcInJlZ2lzdGVyXCIgOiBcImxvZ2luXCIpO1xyXG4gICAgc2V0TmVlZHNDb25maXJtYXRpb24oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBiZy1ncmFkaWVudC10by1iciBmcm9tLWdyYXktNTAgdG8tZ3JheS0xMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00XCI+XHJcbiAgICAgIDxUb2FzdGVyIHBvc2l0aW9uPVwidG9wLWNlbnRlclwiIC8+XHJcbiAgICAgIFxyXG4gICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMjAgfX1cclxuICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cclxuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjQgfX1cclxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbWRcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBtb2RlPVwid2FpdFwiPlxyXG4gICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAga2V5PXttb2RlfVxyXG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHg6IG1vZGUgPT09IFwibG9naW5cIiA/IC0yMCA6IDIwIH19XHJcbiAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeDogMCB9fVxyXG4gICAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIHg6IG1vZGUgPT09IFwibG9naW5cIiA/IDIwIDogLTIwIH19XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJib3JkZXItMCBzaGFkb3cteGxcIj5cclxuICAgICAgICAgICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9XCJzcGFjZS15LTEgcGItNFwiPlxyXG4gICAgICAgICAgICAgICAgPENhcmRUaXRsZSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICB7bW9kZSA9PT0gXCJsb2dpblwiID8gXCJXZWxjb21lIGJhY2tcIiA6IFwiQ3JlYXRlIGFjY291bnRcIn1cclxuICAgICAgICAgICAgICAgIDwvQ2FyZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgIHttb2RlID09PSBcImxvZ2luXCJcclxuICAgICAgICAgICAgICAgICAgICA/IFwiU2lnbiBpbiB0byBhY2Nlc3MgeW91ciBub3Rlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIkdldCBzdGFydGVkIHdpdGggeW91ciBmcmVlIGFjY291bnRcIn1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L0NhcmRIZWFkZXI+XHJcblxyXG4gICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgIHtuZWVkc0NvbmZpcm1hdGlvbiA/IChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gZmxleCBoLTEyIHctMTIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBiZy15ZWxsb3ctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWFpbCBjbGFzc05hbWU9XCJoLTYgdy02IHRleHQteWVsbG93LTYwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIj5FbWFpbCBub3QgY29uZmlybWVkPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTEgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsZWFzZSBjaGVjayB5b3VyIGluYm94IGFuZCBjb25maXJtIHlvdXIgZW1haWwgYmVmb3JlIGxvZ2dpbmcgaW4uXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUmVzZW5kQ29uZmlybWF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9hZGVyMiBjbGFzc05hbWU9XCJtci0yIGgtNCB3LTQgYW5pbWF0ZS1zcGluXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNYWlsIGNsYXNzTmFtZT1cIm1yLTIgaC00IHctNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgUmVzZW5kIGNvbmZpcm1hdGlvbiBlbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TmVlZHNDb25maXJtYXRpb24oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS03MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEJhY2sgdG8gbG9naW5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1haWwgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0zIHRvcC0xLzIgaC00IHctNCAtdHJhbnNsYXRlLXktMS8yIHRleHQtZ3JheS00MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwieW91QGV4YW1wbGUuY29tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGwtOVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvY2sgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0zIHRvcC0xLzIgaC00IHctNCAtdHJhbnNsYXRlLXktMS8yIHRleHQtZ3JheS00MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGwtOVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoPXs2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBkaXNhYmxlZD17bG9hZGluZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyAmJiA8TG9hZGVyMiBjbGFzc05hbWU9XCJtci0yIGgtNCB3LTQgYW5pbWF0ZS1zcGluXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICB7bW9kZSA9PT0gXCJsb2dpblwiID8gXCJTaWduIGluXCIgOiBcIkNyZWF0ZSBhY2NvdW50XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuXHJcbiAgICAgICAgICAgICAgeyFuZWVkc0NvbmZpcm1hdGlvbiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8Q2FyZEZvb3RlciBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHBiLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge21vZGUgPT09IFwibG9naW5cIiA/IFwiRG9uJ3QgaGF2ZSBhbiBhY2NvdW50P1wiIDogXCJBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD9cIn17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVNb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwIGhvdmVyOnVuZGVybGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAge21vZGUgPT09IFwibG9naW5cIiA/IFwiU2lnbiB1cFwiIDogXCJTaWduIGluXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZEZvb3Rlcj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IHRvYXN0IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuaW1wb3J0IHsgUGx1cywgU2VhcmNoLCBTdGlja3lOb3RlLCBYIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xyXG5pbXBvcnQgeyBNYWluTGF5b3V0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L01haW5MYXlvdXRcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcclxuaW1wb3J0IHtcclxuICBTZWxlY3QsXHJcbiAgU2VsZWN0Q29udGVudCxcclxuICBTZWxlY3RJdGVtLFxyXG4gIFNlbGVjdFRyaWdnZXIsXHJcbiAgU2VsZWN0VmFsdWUsXHJcbn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdWkvc2VsZWN0XCI7XHJcbmltcG9ydCB7IE5vdGVDYXJkIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbm90ZXMvTm90ZUNhcmRcIjtcclxuaW1wb3J0IHsgTm90ZUZvcm0gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9ub3Rlcy9Ob3RlRm9ybVwiO1xyXG5pbXBvcnQgeyBEZWxldGVDb25maXJtRGlhbG9nIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbm90ZXMvRGVsZXRlQ29uZmlybURpYWxvZ1wiO1xyXG5pbXBvcnQgeyBOb3Rlc0dyaWRTa2VsZXRvbiB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL25vdGVzL05vdGVzU2tlbGV0b25cIjtcclxuaW1wb3J0IHtcclxuICBTaGVldCxcclxuICBTaGVldENvbnRlbnQsXHJcbiAgU2hlZXRIZWFkZXIsXHJcbiAgU2hlZXRUaXRsZSxcclxuICBTaGVldERlc2NyaXB0aW9uLFxyXG4gIFNoZWV0Rm9vdGVyLFxyXG59IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3VpL3NoZWV0XCI7XHJcbmltcG9ydCB7IEJhZGdlIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdWkvYmFkZ2VcIjtcclxuXHJcbmludGVyZmFjZSBOb3RlIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgY29udGVudDogc3RyaW5nO1xyXG4gIGNhdGVnb3J5OiBzdHJpbmc7XHJcbiAgc3RhdHVzOiBcIm5ld1wiIHwgXCJ0b2RvXCIgfCBcImRvbmVcIjtcclxuICBjcmVhdGVkQXQ6IHN0cmluZztcclxuICB1cGRhdGVkQXQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90ZXNQYWdlKCkge1xyXG4gIGNvbnN0IFtub3Rlcywgc2V0Tm90ZXNdID0gdXNlU3RhdGU8Tm90ZVtdPihbXSk7XHJcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2lzU3VibWl0dGluZywgc2V0SXNTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNEZWxldGluZywgc2V0SXNEZWxldGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgXHJcbiAgLy8gRmlsdGVyc1xyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3RhdHVzRmlsdGVyLCBzZXRTdGF0dXNGaWx0ZXJdID0gdXNlU3RhdGUoXCJhbGxcIik7XHJcbiAgY29uc3QgW2NhdGVnb3J5RmlsdGVyLCBzZXRDYXRlZ29yeUZpbHRlcl0gPSB1c2VTdGF0ZShcImFsbFwiKTtcclxuICBcclxuICAvLyBNb2RhbHNcclxuICBjb25zdCBbaXNGb3JtT3Blbiwgc2V0SXNGb3JtT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2VkaXRpbmdOb3RlLCBzZXRFZGl0aW5nTm90ZV0gPSB1c2VTdGF0ZTxOb3RlIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3ZpZXdpbmdOb3RlLCBzZXRWaWV3aW5nTm90ZV0gPSB1c2VTdGF0ZTxOb3RlIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW2RlbGV0ZU5vdGVJZCwgc2V0RGVsZXRlTm90ZUlkXSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpO1xyXG5cclxuICBjb25zdCBmZXRjaE5vdGVzID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbiAgICAgIGlmIChzZWFyY2gpIHBhcmFtcy5hcHBlbmQoXCJzZWFyY2hcIiwgc2VhcmNoKTtcclxuICAgICAgaWYgKHN0YXR1c0ZpbHRlciAmJiBzdGF0dXNGaWx0ZXIgIT09IFwiYWxsXCIpIHBhcmFtcy5hcHBlbmQoXCJzdGF0dXNcIiwgc3RhdHVzRmlsdGVyKTtcclxuICAgICAgaWYgKGNhdGVnb3J5RmlsdGVyICYmIGNhdGVnb3J5RmlsdGVyICE9PSBcImFsbFwiKSBwYXJhbXMuYXBwZW5kKFwiY2F0ZWdvcnlcIiwgY2F0ZWdvcnlGaWx0ZXIpO1xyXG5cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9ub3Rlcz8ke3BhcmFtc31gKTtcclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIG5vdGVzXCIpO1xyXG4gICAgICBcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgc2V0Tm90ZXMoZGF0YS5ub3RlcyB8fCBbXSk7XHJcbiAgICAgIHNldENhdGVnb3JpZXMoZGF0YS5jYXRlZ29yaWVzIHx8IFtdKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRvYXN0LmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgbm90ZXNcIik7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9LCBbc2VhcmNoLCBzdGF0dXNGaWx0ZXIsIGNhdGVnb3J5RmlsdGVyXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaE5vdGVzKCk7XHJcbiAgfSwgW2ZldGNoTm90ZXNdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlTm90ZSA9IGFzeW5jIChkYXRhOiB7IHRpdGxlOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZzsgY2F0ZWdvcnk6IHN0cmluZzsgc3RhdHVzOiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgc2V0SXNTdWJtaXR0aW5nKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvbm90ZXNcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBjcmVhdGUgbm90ZVwiKTtcclxuICAgICAgXHJcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJOb3RlIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5IVwiKTtcclxuICAgICAgc2V0SXNGb3JtT3BlbihmYWxzZSk7XHJcbiAgICAgIGZldGNoTm90ZXMoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRvYXN0LmVycm9yKFwiRmFpbGVkIHRvIGNyZWF0ZSBub3RlXCIpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0SXNTdWJtaXR0aW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVVcGRhdGVOb3RlID0gYXN5bmMgKGRhdGE6IHsgdGl0bGU6IHN0cmluZzsgY29udGVudDogc3RyaW5nOyBjYXRlZ29yeTogc3RyaW5nOyBzdGF0dXM6IHN0cmluZyB9KSA9PiB7XHJcbiAgICBpZiAoIWVkaXRpbmdOb3RlKSByZXR1cm47XHJcbiAgICBcclxuICAgIHNldElzU3VibWl0dGluZyh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvbm90ZXMvJHtlZGl0aW5nTm90ZS5pZH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gdXBkYXRlIG5vdGVcIik7XHJcbiAgICAgIFxyXG4gICAgICB0b2FzdC5zdWNjZXNzKFwiTm90ZSB1cGRhdGVkIHN1Y2Nlc3NmdWxseSFcIik7XHJcbiAgICAgIHNldElzRm9ybU9wZW4oZmFsc2UpO1xyXG4gICAgICBzZXRFZGl0aW5nTm90ZShudWxsKTtcclxuICAgICAgZmV0Y2hOb3RlcygpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdG9hc3QuZXJyb3IoXCJGYWlsZWQgdG8gdXBkYXRlIG5vdGVcIik7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRJc1N1Ym1pdHRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZU5vdGUgPSBhc3luYyAoaWQ6IG51bWJlcikgPT4ge1xyXG4gICAgc2V0RGVsZXRlTm90ZUlkKGlkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb25maXJtRGVsZXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKCFkZWxldGVOb3RlSWQpIHJldHVybjtcclxuICAgIFxyXG4gICAgc2V0SXNEZWxldGluZyh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvbm90ZXMvJHtkZWxldGVOb3RlSWR9YCwgeyBtZXRob2Q6IFwiREVMRVRFXCIgfSk7XHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBkZWxldGUgbm90ZVwiKTtcclxuICAgICAgXHJcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJOb3RlIGRlbGV0ZWRcIik7XHJcbiAgICAgIHNldERlbGV0ZU5vdGVJZChudWxsKTtcclxuICAgICAgZmV0Y2hOb3RlcygpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdG9hc3QuZXJyb3IoXCJGYWlsZWQgdG8gZGVsZXRlIG5vdGVcIik7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRJc0RlbGV0aW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVFZGl0ID0gKG5vdGU6IE5vdGUpID0+IHtcclxuICAgIHNldEVkaXRpbmdOb3RlKG5vdGUpO1xyXG4gICAgc2V0SXNGb3JtT3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVWaWV3ID0gKG5vdGU6IE5vdGUpID0+IHtcclxuICAgIHNldFZpZXdpbmdOb3RlKG5vdGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlRm9ybSA9ICgpID0+IHtcclxuICAgIHNldElzRm9ybU9wZW4oZmFsc2UpO1xyXG4gICAgc2V0RWRpdGluZ05vdGUobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VWaWV3ID0gKG9wZW4/OiBib29sZWFuKSA9PiB7XHJcbiAgICBpZiAob3BlbiA9PT0gZmFsc2UgfHwgb3BlbiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHNldFZpZXdpbmdOb3RlKG51bGwpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGVkaXRpbmdOb3RlID8gaGFuZGxlVXBkYXRlTm90ZSA6IGhhbmRsZUNyZWF0ZU5vdGU7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TWFpbkxheW91dCB0aXRsZT1cIk15IE5vdGVzXCIgaXNMb2FkaW5nPXtpc0xvYWRpbmd9PlxyXG4gICAgICB7LyogVG9vbGJhciAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi02IHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBiZy13aGl0ZSBwLTQgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00IGxnOmZsZXgtcm93IGxnOml0ZW1zLWNlbnRlciBsZzpqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgIHsvKiBTZWFyY2ggYW5kIEZpbHRlcnMgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC0xIGZsZXgtY29sIGdhcC0zIHNtOmZsZXgtcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleC0xXCI+XHJcbiAgICAgICAgICAgICAgPFNlYXJjaCBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTMgdG9wLTEvMiBoLTQgdy00IC10cmFuc2xhdGUteS0xLzIgdGV4dC1ncmF5LTQwMFwiIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBub3Rlcy4uLlwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGwtOVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTJcIj5cclxuICAgICAgICAgICAgICA8U2VsZWN0IHZhbHVlPXtzdGF0dXNGaWx0ZXJ9IG9uVmFsdWVDaGFuZ2U9e3NldFN0YXR1c0ZpbHRlcn0+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0VHJpZ2dlciBjbGFzc05hbWU9XCJoLTkgdy1bMTQwcHhdXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RWYWx1ZSBwbGFjZWhvbGRlcj1cIkFsbCBTdGF0dXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3RUcmlnZ2VyPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIHZhbHVlPVwiYWxsXCI+QWxsIFN0YXR1czwvU2VsZWN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdEl0ZW0gdmFsdWU9XCJuZXdcIj5OZXc8L1NlbGVjdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIHZhbHVlPVwidG9kb1wiPlRvZG88L1NlbGVjdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIHZhbHVlPVwiZG9uZVwiPkRvbmU8L1NlbGVjdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L1NlbGVjdENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgIDxTZWxlY3QgdmFsdWU9e2NhdGVnb3J5RmlsdGVyfSBvblZhbHVlQ2hhbmdlPXtzZXRDYXRlZ29yeUZpbHRlcn0+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0VHJpZ2dlciBjbGFzc05hbWU9XCJoLTkgdy1bMTYwcHhdXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWxlY3RWYWx1ZSBwbGFjZWhvbGRlcj1cIkFsbCBDYXRlZ29yaWVzXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0VHJpZ2dlcj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0SXRlbSB2YWx1ZT1cImFsbFwiPkFsbCBDYXRlZ29yaWVzPC9TZWxlY3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RJdGVtIGtleT17Y2F0fSB2YWx1ZT17Y2F0fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjYXR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0Q29udGVudD5cclxuICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7LyogQWN0aW9ucyAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFNlYXJjaChcIlwiKTtcclxuICAgICAgICAgICAgICAgIHNldFN0YXR1c0ZpbHRlcihcImFsbFwiKTtcclxuICAgICAgICAgICAgICAgIHNldENhdGVnb3J5RmlsdGVyKFwiYWxsXCIpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFzZWFyY2ggJiYgc3RhdHVzRmlsdGVyID09PSBcImFsbFwiICYmIGNhdGVnb3J5RmlsdGVyID09PSBcImFsbFwifVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFggY2xhc3NOYW1lPVwibXItMiBoLTQgdy00XCIgLz5cclxuICAgICAgICAgICAgICBDbGVhclxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc0Zvcm1PcGVuKHRydWUpfT5cclxuICAgICAgICAgICAgICA8UGx1cyBjbGFzc05hbWU9XCJtci0yIGgtNCB3LTRcIiAvPlxyXG4gICAgICAgICAgICAgIE5ldyBOb3RlXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIE5vdGVzIEdyaWQgKi99XHJcbiAgICAgIHtpc0xvYWRpbmcgPyAoXHJcbiAgICAgICAgPE5vdGVzR3JpZFNrZWxldG9uIGNvdW50PXs2fSAvPlxyXG4gICAgICApIDogbm90ZXMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjk1IH19XHJcbiAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHNjYWxlOiAxIH19XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWxnIGJvcmRlci0yIGJvcmRlci1kYXNoZWQgYm9yZGVyLWdyYXktMjAwIGJnLXdoaXRlIHAtMTJcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTdGlja3lOb3RlIGNsYXNzTmFtZT1cIm1iLTQgaC0xMiB3LTEyIHRleHQtZ3JheS0zMDBcIiAvPlxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1sZyBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIj5ObyBub3RlcyB5ZXQ8L2gzPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNCB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAge3NlYXJjaCB8fCBzdGF0dXNGaWx0ZXIgfHwgY2F0ZWdvcnlGaWx0ZXJcclxuICAgICAgICAgICAgICA/IFwiTm8gbm90ZXMgbWF0Y2ggeW91ciBmaWx0ZXJzXCJcclxuICAgICAgICAgICAgICA6IFwiQ3JlYXRlIHlvdXIgZmlyc3Qgbm90ZSB0byBnZXQgc3RhcnRlZFwifVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgeyFzZWFyY2ggJiYgIXN0YXR1c0ZpbHRlciAmJiAhY2F0ZWdvcnlGaWx0ZXIgJiYgKFxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldElzRm9ybU9wZW4odHJ1ZSl9PlxyXG4gICAgICAgICAgICAgIDxQbHVzIGNsYXNzTmFtZT1cIm1yLTIgaC00IHctNFwiIC8+XHJcbiAgICAgICAgICAgICAgQ3JlYXRlIE5vdGVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTQgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTNcIj5cclxuICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2UgbW9kZT1cInBvcExheW91dFwiPlxyXG4gICAgICAgICAgICB7bm90ZXMubWFwKChub3RlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxOb3RlQ2FyZFxyXG4gICAgICAgICAgICAgICAga2V5PXtub3RlLmlkfVxyXG4gICAgICAgICAgICAgICAgbm90ZT17bm90ZX1cclxuICAgICAgICAgICAgICAgIG9uRWRpdD17aGFuZGxlRWRpdH1cclxuICAgICAgICAgICAgICAgIG9uRGVsZXRlPXtoYW5kbGVEZWxldGVOb3RlfVxyXG4gICAgICAgICAgICAgICAgb25WaWV3PXtoYW5kbGVWaWV3fVxyXG4gICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7LyogTm90ZSBEZXRhaWxzIFNoZWV0ICovfVxyXG4gICAgICA8U2hlZXQgb3Blbj17dmlld2luZ05vdGUgIT09IG51bGx9IG9uT3BlbkNoYW5nZT17aGFuZGxlQ2xvc2VWaWV3fT5cclxuICAgICAgICA8U2hlZXRDb250ZW50IHNpZGU9XCJyaWdodFwiIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgIHt2aWV3aW5nTm90ZSAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPFNoZWV0SGVhZGVyIGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgICAgICAgIDxTaGVldFRpdGxlPnt2aWV3aW5nTm90ZS50aXRsZX08L1NoZWV0VGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8U2hlZXREZXNjcmlwdGlvbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPEJhZGdlIHZhcmlhbnQ9e3ZpZXdpbmdOb3RlLnN0YXR1c30+e3ZpZXdpbmdOb3RlLnN0YXR1c308L0JhZGdlPlxyXG4gICAgICAgICAgICAgICAgICB7dmlld2luZ05vdGUuY2F0ZWdvcnkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMFwiPnt2aWV3aW5nTm90ZS5jYXRlZ29yeX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZSh2aWV3aW5nTm90ZS5jcmVhdGVkQXQpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1vbnRoOiBcInNob3J0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvU2hlZXREZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICA8L1NoZWV0SGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBvdmVyZmxvdy15LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIndoaXRlc3BhY2UtcHJlLWxpbmUgYnJlYWstd29yZHMgdGV4dC1zbSB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt2aWV3aW5nTm90ZS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8U2hlZXRGb290ZXIgY2xhc3NOYW1lPVwibXQtNiBib3JkZXItdCBib3JkZXItZ3JheS0yMDAgcHQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZVwiIG9uQ2xpY2s9eygpID0+IHNldFZpZXdpbmdOb3RlKG51bGwpfT5cclxuICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvU2hlZXRGb290ZXI+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L1NoZWV0Q29udGVudD5cclxuICAgICAgPC9TaGVldD5cclxuXHJcbiAgICAgIHsvKiBOb3RlIEZvcm0gU2hlZXQgKi99XHJcbiAgICAgIDxOb3RlRm9ybVxyXG4gICAgICAgIGlzT3Blbj17aXNGb3JtT3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUZvcm19XHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICBub3RlPXtlZGl0aW5nTm90ZX1cclxuICAgICAgICBpc1N1Ym1pdHRpbmc9e2lzU3VibWl0dGluZ31cclxuICAgICAgLz5cclxuXHJcbiAgICAgIHsvKiBEZWxldGUgQ29uZmlybSBEaWFsb2cgKi99XHJcbiAgICAgIDxEZWxldGVDb25maXJtRGlhbG9nXHJcbiAgICAgICAgaXNPcGVuPXtkZWxldGVOb3RlSWQgIT09IG51bGx9XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0RGVsZXRlTm90ZUlkKG51bGwpfVxyXG4gICAgICAgIG9uQ29uZmlybT17Y29uZmlybURlbGV0ZX1cclxuICAgICAgICBpc0RlbGV0aW5nPXtpc0RlbGV0aW5nfVxyXG4gICAgICAvPlxyXG4gICAgPC9NYWluTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIlJlYWN0IiwiQXV0aFBhZ2UiLCJOb3Rlc1BhZ2UiLCJjcmVhdGVSb290Iiwicm9vdE5vZGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicGF0aCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50Iiwic3RhcnRzV2l0aCIsInJlYWN0XzEiLCJfX2ltcG9ydERlZmF1bHQiLCJyZXF1aXJlIiwiZnJhbWVyX21vdGlvbl8xIiwiR2xvYmFsTG9hZGVyIiwibW90aW9uIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwiZXhpdCIsImNsYXNzTmFtZSIsInJvdGF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInJlcGVhdCIsIkluZmluaXR5IiwiZWFzZSIsImV4cG9ydHMiLCJsdWNpZGVfcmVhY3RfMSIsIkhlYWRlciIsIl9hIiwib25NZW51Q2xpY2siLCJfYiIsInRpdGxlIiwib25DbGljayIsIk1lbnUiLCJfX2ltcG9ydFN0YXIiLCJyZWFjdF9ob3RfdG9hc3RfMSIsIlNpZGViYXJfMSIsIkhlYWRlcl8xIiwiR2xvYmFsTG9hZGVyXzEiLCJNYWluTGF5b3V0IiwiX3RoaXMiLCJjaGlsZHJlbiIsImlzTG9hZGluZyIsIl9jIiwidXNlU3RhdGUiLCJzaWRlYmFyT3BlbiIsInNldFNpZGViYXJPcGVuIiwiX2QiLCJ1c2VyRW1haWwiLCJzZXRVc2VyRW1haWwiLCJ1c2VFZmZlY3QiLCJoYW5kbGVSZXNpemUiLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmZXRjaCIsImNyZWRlbnRpYWxzIiwidGhlbiIsInJlcyIsIm9rIiwianNvbiIsImRhdGEiLCJhdXRoZW50aWNhdGVkIiwidXNlciIsImVtYWlsIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImNhY2hlZEVtYWlsIiwiZ2V0SXRlbSIsImhhbmRsZUxvZ291dCIsIl9fYXdhaXRlciIsIm1ldGhvZCIsInNlbnQiLCJocmVmIiwiY29uc29sZSIsImVycm9yIiwiZXJyb3JfMSIsInRvZ2dsZVNpZGViYXIiLCJUb2FzdGVyIiwicG9zaXRpb24iLCJ0b2FzdE9wdGlvbnMiLCJzdHlsZSIsImJhY2tncm91bmQiLCJjb2xvciIsImJvcmRlclJhZGl1cyIsInN1Y2Nlc3MiLCJpY29uVGhlbWUiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiQW5pbWF0ZVByZXNlbmNlIiwiU2lkZWJhciIsImlzT3BlbiIsIm9uVG9nZ2xlIiwib25Mb2dvdXQiLCJ5IiwidXRpbHNfMSIsImRyb3Bkb3duX21lbnVfMSIsIm5hdkl0ZW1zIiwiaWNvbiIsIlN0aWNreU5vdGUiLCJsYWJlbCIsImFjdGl2ZSIsIkZyYWdtZW50IiwiYXNpZGUiLCJ3aWR0aCIsIngiLCJjbiIsIlgiLCJtYXAiLCJpdGVtIiwia2V5IiwiRHJvcGRvd25NZW51IiwiRHJvcGRvd25NZW51VHJpZ2dlciIsImFzQ2hpbGQiLCJVc2VyIiwiRHJvcGRvd25NZW51Q29udGVudCIsImFsaWduIiwiRHJvcGRvd25NZW51TGFiZWwiLCJEcm9wZG93bk1lbnVTZXBhcmF0b3IiLCJEcm9wZG93bk1lbnVJdGVtIiwiTG9nT3V0IiwiYWxlcnRfZGlhbG9nXzEiLCJEZWxldGVDb25maXJtRGlhbG9nIiwib25DbG9zZSIsIm9uQ29uZmlybSIsImRlc2NyaXB0aW9uIiwiaXNEZWxldGluZyIsIkFsZXJ0RGlhbG9nIiwib3BlbiIsIm9uT3BlbkNoYW5nZSIsIkFsZXJ0RGlhbG9nQ29udGVudCIsIkFsZXJ0RGlhbG9nSGVhZGVyIiwiVHJhc2gyIiwiQWxlcnREaWFsb2dUaXRsZSIsIkFsZXJ0RGlhbG9nRGVzY3JpcHRpb24iLCJBbGVydERpYWxvZ0Zvb3RlciIsIkFsZXJ0RGlhbG9nQ2FuY2VsIiwiZGlzYWJsZWQiLCJBbGVydERpYWxvZ0FjdGlvbiIsImNhcmRfMSIsImJhZGdlXzEiLCJidXR0b25fMSIsIk5vdGVDYXJkIiwibm90ZSIsIm9uRWRpdCIsIm9uRGVsZXRlIiwib25WaWV3IiwiaW5kZXgiLCJmb3JtYXREYXRlIiwiZGF0ZVN0cmluZyIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJtb250aCIsImRheSIsInllYXIiLCJzY2FsZSIsImRlbGF5IiwibGF5b3V0IiwiQ2FyZCIsIkNhcmRIZWFkZXIiLCJDYXJkVGl0bGUiLCJCYWRnZSIsInZhcmlhbnQiLCJzdGF0dXMiLCJDYXJkQ29udGVudCIsImNvbnRlbnQiLCJDYXJkRm9vdGVyIiwiY2F0ZWdvcnkiLCJUYWciLCJDYWxlbmRhciIsImNyZWF0ZWRBdCIsIkJ1dHRvbiIsInNpemUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIlBlbmNpbCIsImlkIiwic2hlZXRfMSIsImlucHV0XzEiLCJ0ZXh0YXJlYV8xIiwibGFiZWxfMSIsIk5vdGVGb3JtIiwib25TdWJtaXQiLCJpc1N1Ym1pdHRpbmciLCJzZXRUaXRsZSIsInNldENvbnRlbnQiLCJfZSIsInNldENhdGVnb3J5IiwiX2YiLCJzZXRTdGF0dXMiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJTaGVldCIsIlNoZWV0Q29udGVudCIsInNpZGUiLCJTaGVldEhlYWRlciIsIlNoZWV0VGl0bGUiLCJTaGVldERlc2NyaXB0aW9uIiwiTGFiZWwiLCJodG1sRm9yIiwiSW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsIlRleHRhcmVhIiwicm93cyIsIlNoZWV0Rm9vdGVyIiwidHlwZSIsInNrZWxldG9uXzEiLCJOb3RlQ2FyZFNrZWxldG9uIiwiU2tlbGV0b24iLCJOb3Rlc0dyaWRTa2VsZXRvbiIsImNvdW50IiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsImkiLCJOb3Rlc0ZpbHRlclNrZWxldG9uIiwiQWxlcnREaWFsb2dQcmltaXRpdmUiLCJSb290IiwiQWxlcnREaWFsb2dUcmlnZ2VyIiwiVHJpZ2dlciIsIkFsZXJ0RGlhbG9nUG9ydGFsIiwiUG9ydGFsIiwiQWxlcnREaWFsb2dPdmVybGF5IiwiZm9yd2FyZFJlZiIsInJlZiIsInByb3BzIiwiX19yZXN0IiwiT3ZlcmxheSIsIl9fYXNzaWduIiwiZGlzcGxheU5hbWUiLCJDb250ZW50IiwiVGl0bGUiLCJEZXNjcmlwdGlvbiIsIkFjdGlvbiIsImJ1dHRvblZhcmlhbnRzIiwiQ2FuY2VsIiwiY2xhc3NfdmFyaWFuY2VfYXV0aG9yaXR5XzEiLCJiYWRnZVZhcmlhbnRzIiwiY3ZhIiwidmFyaWFudHMiLCJkZXN0cnVjdGl2ZSIsIm91dGxpbmUiLCJ0b2RvIiwiZG9uZSIsImRlZmF1bHRWYXJpYW50cyIsInJlYWN0X3Nsb3RfMSIsImdob3N0IiwibGluayIsInNtIiwibGciLCJDb21wIiwiU2xvdCIsIkNhcmREZXNjcmlwdGlvbiIsIkRyb3Bkb3duTWVudVByaW1pdGl2ZSIsIkRyb3Bkb3duTWVudUdyb3VwIiwiR3JvdXAiLCJEcm9wZG93bk1lbnVQb3J0YWwiLCJEcm9wZG93bk1lbnVTdWIiLCJTdWIiLCJEcm9wZG93bk1lbnVSYWRpb0dyb3VwIiwiUmFkaW9Hcm91cCIsIkRyb3Bkb3duTWVudVN1YlRyaWdnZXIiLCJpbnNldCIsIlN1YlRyaWdnZXIiLCJDaGV2cm9uUmlnaHQiLCJEcm9wZG93bk1lbnVTdWJDb250ZW50IiwiU3ViQ29udGVudCIsInNpZGVPZmZzZXQiLCJJdGVtIiwiRHJvcGRvd25NZW51Q2hlY2tib3hJdGVtIiwiY2hlY2tlZCIsIkNoZWNrYm94SXRlbSIsIkl0ZW1JbmRpY2F0b3IiLCJDaGVjayIsIkRyb3Bkb3duTWVudVJhZGlvSXRlbSIsIlJhZGlvSXRlbSIsIkNpcmNsZSIsIlNlcGFyYXRvciIsIkRyb3Bkb3duTWVudVNob3J0Y3V0IiwiTGFiZWxQcmltaXRpdmUiLCJsYWJlbFZhcmlhbnRzIiwiU2VsZWN0UHJpbWl0aXZlIiwiU2VsZWN0IiwiU2VsZWN0R3JvdXAiLCJTZWxlY3RWYWx1ZSIsIlZhbHVlIiwiU2VsZWN0VHJpZ2dlciIsIkljb24iLCJDaGV2cm9uRG93biIsIlNlbGVjdFNjcm9sbFVwQnV0dG9uIiwiU2Nyb2xsVXBCdXR0b24iLCJDaGV2cm9uVXAiLCJTZWxlY3RTY3JvbGxEb3duQnV0dG9uIiwiU2Nyb2xsRG93bkJ1dHRvbiIsIlNlbGVjdENvbnRlbnQiLCJWaWV3cG9ydCIsIlNlbGVjdExhYmVsIiwiU2VsZWN0SXRlbSIsIkl0ZW1UZXh0IiwiU2VsZWN0U2VwYXJhdG9yIiwiRGlhbG9nUHJpbWl0aXZlIiwiU2hlZXRUcmlnZ2VyIiwiU2hlZXRDbG9zZSIsIkNsb3NlIiwiU2hlZXRQb3J0YWwiLCJTaGVldE92ZXJsYXkiLCJzaGVldFZhcmlhbnRzIiwicmlnaHQiLCJsZWZ0IiwidG9wIiwiYm90dG9tIiwiY2xzeF8xIiwidGFpbHdpbmRfbWVyZ2VfMSIsImlucHV0cyIsIl9pIiwiYXJndW1lbnRzIiwidHdNZXJnZSIsImNsc3giLCJtb2RlIiwic2V0TW9kZSIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibmVlZHNDb25maXJtYXRpb24iLCJzZXROZWVkc0NvbmZpcm1hdGlvbiIsImNvbmZpcm1hdGlvbkVtYWlsIiwic2V0Q29uZmlybWF0aW9uRW1haWwiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsInBheWxvYWQiLCJtZXNzYWdlIiwic2V0VGltZW91dCIsImhhbmRsZVJlc2VuZENvbmZpcm1hdGlvbiIsInRvZ2dsZU1vZGUiLCJNYWlsIiwiTG9hZGVyMiIsIkxvY2siLCJtaW5MZW5ndGgiLCJhdXRvQ29tcGxldGUiLCJNYWluTGF5b3V0XzEiLCJzZWxlY3RfMSIsIk5vdGVDYXJkXzEiLCJOb3RlRm9ybV8xIiwiRGVsZXRlQ29uZmlybURpYWxvZ18xIiwiTm90ZXNTa2VsZXRvbl8xIiwibm90ZXMiLCJzZXROb3RlcyIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwic2V0SXNMb2FkaW5nIiwic2V0SXNTdWJtaXR0aW5nIiwic2V0SXNEZWxldGluZyIsInNlYXJjaCIsInNldFNlYXJjaCIsIl9nIiwic3RhdHVzRmlsdGVyIiwic2V0U3RhdHVzRmlsdGVyIiwiX2giLCJjYXRlZ29yeUZpbHRlciIsInNldENhdGVnb3J5RmlsdGVyIiwiX2oiLCJpc0Zvcm1PcGVuIiwic2V0SXNGb3JtT3BlbiIsIl9rIiwiZWRpdGluZ05vdGUiLCJzZXRFZGl0aW5nTm90ZSIsIl9sIiwidmlld2luZ05vdGUiLCJzZXRWaWV3aW5nTm90ZSIsIl9tIiwiZGVsZXRlTm90ZUlkIiwic2V0RGVsZXRlTm90ZUlkIiwiZmV0Y2hOb3RlcyIsInVzZUNhbGxiYWNrIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiYXBwZW5kIiwiY29uY2F0IiwiRXJyb3IiLCJoYW5kbGVDcmVhdGVOb3RlIiwiaGFuZGxlVXBkYXRlTm90ZSIsImhhbmRsZURlbGV0ZU5vdGUiLCJjb25maXJtRGVsZXRlIiwiaGFuZGxlRWRpdCIsImhhbmRsZVZpZXciLCJoYW5kbGVDbG9zZUZvcm0iLCJoYW5kbGVDbG9zZVZpZXciLCJ1bmRlZmluZWQiLCJTZWFyY2giLCJvblZhbHVlQ2hhbmdlIiwiY2F0IiwiUGx1cyJdLCJzb3VyY2VSb290IjoiIn0=
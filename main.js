(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _components_main_personal_personal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/main/personal/personal.component */ "./src/app/components/main/personal/personal.component.ts");
/* harmony import */ var _components_main_board_board_board_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main/board/_board/board.component */ "./src/app/components/main/board/_board/board.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_main_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main/_main/main.component */ "./src/app/components/main/_main/main.component.ts");
/* harmony import */ var _components_main_user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main/user/user.component */ "./src/app/components/main/user/user.component.ts");
/* harmony import */ var _components_main_user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main/user/sign-up/sign-up.component */ "./src/app/components/main/user/sign-up/sign-up.component.ts");
/* harmony import */ var _components_main_user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/main/user/sign-in/sign-in.component */ "./src/app/components/main/user/sign-in/sign-in.component.ts");
/* harmony import */ var _authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authGuard/auth.guard */ "./src/app/authGuard/auth.guard.ts");











const routes = [
    {
        path: 'sign-up',
        component: _components_main_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
        children: [{ path: '', component: _components_main_user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"] }],
    },
    {
        path: 'sign-in',
        component: _components_main_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
        children: [{ path: '', component: _components_main_user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__["SignInComponent"] }],
    },
    { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
    {
        path: 'main',
        component: _components_main_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
        canActivate: [_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        children: [
            { path: 'board', component: _components_main_board_board_board_component__WEBPACK_IMPORTED_MODULE_1__["BoardComponent"] },
            { path: 'personal', component: _components_main_personal_personal_component__WEBPACK_IMPORTED_MODULE_0__["PersonalComponent"] }
        ]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_main_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main/main-menu/main-menu.component */ "./src/app/components/main/main-menu/main-menu.component.ts");
/* harmony import */ var _components_main_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main/_main/main.component */ "./src/app/components/main/_main/main.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");






class AppComponent {
    constructor() {
        this.title = 'Gates';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[1, "wrapper"], [1, "main-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-main-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_main_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_2__["MainMenuComponent"], _components_main_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: [".main-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  width: auto;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_enum_to_arr_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/enum-to-arr.pipe */ "./src/app/services/enum-to-arr.pipe.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_main_user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/main/user/sign-up/sign-up.component */ "./src/app/components/main/user/sign-up/sign-up.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _components_main_user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/main/user/user.component */ "./src/app/components/main/user/user.component.ts");
/* harmony import */ var _components_main_user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/main/user/sign-in/sign-in.component */ "./src/app/components/main/user/sign-in/sign-in.component.ts");
/* harmony import */ var _authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./authGuard/auth.guard */ "./src/app/authGuard/auth.guard.ts");
/* harmony import */ var _authGuard_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./authGuard/auth.interceptor */ "./src/app/authGuard/auth.interceptor.ts");
/* harmony import */ var _components_task_boardTask_boardTask_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/task/boardTask/boardTask.component */ "./src/app/components/task/boardTask/boardTask.component.ts");
/* harmony import */ var _components_task_task_task_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/task/task/task.component */ "./src/app/components/task/task/task.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_main_main_main_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/main/_main/main.component */ "./src/app/components/main/_main/main.component.ts");
/* harmony import */ var _components_main_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/main/main-menu/main-menu.component */ "./src/app/components/main/main-menu/main-menu.component.ts");
/* harmony import */ var _components_main_board_board_board_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/main/board/_board/board.component */ "./src/app/components/main/board/_board/board.component.ts");
/* harmony import */ var _components_main_personal_personal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/main/personal/personal.component */ "./src/app/components/main/personal/personal.component.ts");
/* harmony import */ var _components_task_user_task_user_task_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/task/user-task/user-task.component */ "./src/app/components/task/user-task/user-task.component.ts");
/* harmony import */ var _components_task_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/task/task-form/task-form.component */ "./src/app/components/task/task-form/task-form.component.ts");
























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], _authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
            useClass: _authGuard_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _components_main_user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"],
        _components_main_user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"],
        _components_main_user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_10__["SignInComponent"],
        _components_task_boardTask_boardTask_component__WEBPACK_IMPORTED_MODULE_13__["BoardTaskComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
        _components_main_main_main_component__WEBPACK_IMPORTED_MODULE_17__["MainComponent"],
        _components_main_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_18__["MainMenuComponent"],
        _components_main_board_board_board_component__WEBPACK_IMPORTED_MODULE_19__["BoardComponent"],
        _components_task_task_task_component__WEBPACK_IMPORTED_MODULE_14__["TaskComponent"],
        _components_main_personal_personal_component__WEBPACK_IMPORTED_MODULE_20__["PersonalComponent"],
        _components_task_user_task_user_task_component__WEBPACK_IMPORTED_MODULE_21__["UserTaskComponent"],
        _components_task_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_22__["TaskFormComponent"],
        _services_enum_to_arr_pipe__WEBPACK_IMPORTED_MODULE_0__["EnumToArrayPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _components_main_user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"],
                    _components_main_user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"],
                    _components_main_user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_10__["SignInComponent"],
                    _components_task_boardTask_boardTask_component__WEBPACK_IMPORTED_MODULE_13__["BoardTaskComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                    _components_main_main_main_component__WEBPACK_IMPORTED_MODULE_17__["MainComponent"],
                    _components_main_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_18__["MainMenuComponent"],
                    _components_main_board_board_board_component__WEBPACK_IMPORTED_MODULE_19__["BoardComponent"],
                    _components_task_task_task_component__WEBPACK_IMPORTED_MODULE_14__["TaskComponent"],
                    _components_main_personal_personal_component__WEBPACK_IMPORTED_MODULE_20__["PersonalComponent"],
                    _components_task_user_task_user_task_component__WEBPACK_IMPORTED_MODULE_21__["UserTaskComponent"],
                    _components_task_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_22__["TaskFormComponent"],
                    _services_enum_to_arr_pipe__WEBPACK_IMPORTED_MODULE_0__["EnumToArrayPipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
                ],
                providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], _authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                        useClass: _authGuard_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptor"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/authGuard/auth.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/authGuard/auth.guard.ts ***!
  \*****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    // при наличии токена дает возможность перемещаться по сайту, иначе перенаправляет на модуль авторизации
    canActivate(next, state) {
        if (localStorage.getItem('token') != null) {
            return true;
        }
        this.router.navigate(['/main/sign-in']);
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authGuard/auth.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/authGuard/auth.interceptor.ts ***!
  \***********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AuthInterceptor {
    constructor(router) {
        this.router = router;
    }
    // перехватывает запросы пользователя, проверяя на наличие токена
    intercept(req, next) {
        if (req.headers.get('No-Auth') === 'True') {
            return next.handle(req.clone());
        }
        if (localStorage.getItem('token') != null) {
            const clonedreq = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`),
            });
            return next.handle(clonedreq);
        }
        else {
            this.router.navigateByUrl('/sign-in');
        }
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/classes/account.model.ts":
/*!******************************************!*\
  !*** ./src/app/classes/account.model.ts ***!
  \******************************************/
/*! exports provided: AccountModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModel", function() { return AccountModel; });
// Модель аккаунт
class AccountModel {
}


/***/ }),

/***/ "./src/app/classes/boardTask.model.ts":
/*!********************************************!*\
  !*** ./src/app/classes/boardTask.model.ts ***!
  \********************************************/
/*! exports provided: BoardTaskModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardTaskModel", function() { return BoardTaskModel; });
//Класс представляет модель задания для вывода на доску.
class BoardTaskModel {
    constructor() {
        // Приоритет задания.
        this.Priority = 'Trivial';
    }
}


/***/ }),

/***/ "./src/app/classes/task.model.ts":
/*!***************************************!*\
  !*** ./src/app/classes/task.model.ts ***!
  \***************************************/
/*! exports provided: TaskModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModel", function() { return TaskModel; });
//Класс представляет модель задания.
class TaskModel {
    constructor() {
        // Приоритет задания.
        this.Priority = 'Trivial';
        // Статус задания.
        this.Status = 'Await';
    }
}


/***/ }),

/***/ "./src/app/classes/user.model.ts":
/*!***************************************!*\
  !*** ./src/app/classes/user.model.ts ***!
  \***************************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
/* harmony import */ var _account_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.model */ "./src/app/classes/account.model.ts");

// Модель пользователь
class UserModel {
    constructor() {
        this.Account = new _account_model__WEBPACK_IMPORTED_MODULE_0__["AccountModel"]();
    }
}


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 1, vars: 0, consts: [[1, "footer", "wrapper"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "footer", 0);
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  height: 30px;\n  background-color: #694646;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL19jb2xvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtFQUNBLHlCQ0ZXO0FEQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcic7XHJcblxyXG4uZm9vdGVyIHtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRmb290ZXItY29sb3I7XHJcbiAgfSIsIiRoZWFkZXItY29sb3I6ICM1NzU3NTc7XHJcbiRoZWFkZXItYm9yZGVyLWNvbG9yOiAjYThhOGE4O1xyXG4kZm9vdGVyLWNvbG9yOiAjNjk0NjQ2O1xyXG4kbWFpbi1tZW51LWNvbG9yOiAjM2I1MGIxO1xyXG4kbWFpbi1tZW51LWJ1dHRvbi1jb2xvcjogIzE5MmM4NTtcclxuJHRpdGxlLXRleHQtY29sb3I6ICNjNWM3Y2M7XHJcbiR0YXNrLWRldGFpbC1jb2xvcjogI2I2YjZiNjsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 4, vars: 0, consts: [[1, "header", "wrapper"], [1, "header-title"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Gates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".header[_ngcontent-%COMP%] {\n  height: 30px;\n  background-color: #575757;\n  border-bottom: 4px solid #a8a8a8;\n}\n\n.header-title[_ngcontent-%COMP%] {\n  margin: auto 40px;\n  color: #c5c7cc;\n  letter-spacing: 1rem;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL19jb2xvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtFQUNBLHlCQ0pXO0VES1gsZ0NBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0VBQ0EsY0NMZTtFRE1mLG9CQUFBO0VBQ0EseUJBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvclwiO1xyXG5cclxuLmhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGVhZGVyLWNvbG9yO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICRoZWFkZXItYm9yZGVyLWNvbG9yO1xyXG59XHJcblxyXG4uaGVhZGVyLXRpdGxlIHtcclxuICAgIG1hcmdpbjogYXV0byA0MHB4O1xyXG4gICAgY29sb3I6ICR0aXRsZS10ZXh0LWNvbG9yO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59IiwiJGhlYWRlci1jb2xvcjogIzU3NTc1NztcclxuJGhlYWRlci1ib3JkZXItY29sb3I6ICNhOGE4YTg7XHJcbiRmb290ZXItY29sb3I6ICM2OTQ2NDY7XHJcbiRtYWluLW1lbnUtY29sb3I6ICMzYjUwYjE7XHJcbiRtYWluLW1lbnUtYnV0dG9uLWNvbG9yOiAjMTkyYzg1O1xyXG4kdGl0bGUtdGV4dC1jb2xvcjogI2M1YzdjYztcclxuJHRhc2stZGV0YWlsLWNvbG9yOiAjYjZiNmI2OyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/main/_main/main.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/main/_main/main.component.ts ***!
  \*********************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_app_data_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/app-data-storage.service */ "./src/app/services/app-data-storage.service.ts");
/* harmony import */ var src_app_services_shared_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shared-event.service */ "./src/app/services/shared-event.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _task_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../task/task-form/task-form.component */ "./src/app/components/task/task-form/task-form.component.ts");
/* harmony import */ var _task_task_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../task/task/task.component */ "./src/app/components/task/task/task.component.ts");








function MainComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-task-form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-task", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeEmitter", function MainComponent_div_4_Template_app_task_closeEmitter_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.closeDetail($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MainComponent {
    constructor(appDataStorageService, sharedEventService) {
        this.appDataStorageService = appDataStorageService;
        this.sharedEventService = sharedEventService;
        this.showTaskDetail = false;
        sharedEventService.taskDetailEmitted$.subscribe(id => console.log("main: " + id));
    }
    ngOnInit() { }
    showDetail(id) {
        console.log('main detail' + id);
        // this.showTaskDetail = true;
    }
    closeDetail(event) {
        this.showTaskDetail = false;
    }
    closeTaskForm(event) {
        this.showTaskForm = true;
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["AppDataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_shared_event_service__WEBPACK_IMPORTED_MODULE_2__["SharedEventService"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 5, vars: 2, consts: [[1, "main"], [1, "main-body"], ["class", "task-form", 4, "ngIf"], ["class", "task-detail", 4, "ngIf"], [1, "task-form"], [1, "task-detail"], [3, "closeEmitter"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainComponent_div_3_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MainComponent_div_4_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTaskForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTaskDetail);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _task_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_5__["TaskFormComponent"], _task_task_task_component__WEBPACK_IMPORTED_MODULE_6__["TaskComponent"]], styles: [".main[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  flex-direction: row;\n  height: 90vh;\n  min-height: 500px;\n}\n\n.main-body[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  width: 1000px;\n}\n\n.task-detail[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.task-form[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.app-task-form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL19tYWluL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4vX21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBoZWlnaHQ6IDkwdmg7XHJcbiAgbWluLWhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbi5tYWluLWJvZHkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICB3aWR0aDogMTAwMHB4O1xyXG59XHJcblxyXG4udGFzay1kZXRhaWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLy8gei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi50YXNrLWZvcm0ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5hcHAtdGFzay1mb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_app_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["AppDataStorageService"] }, { type: src_app_services_shared_event_service__WEBPACK_IMPORTED_MODULE_2__["SharedEventService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/main/board/_board/board.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/main/board/_board/board.component.ts ***!
  \*****************************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_task_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/task-manager.service */ "./src/app/services/task-manager.service.ts");
/* harmony import */ var src_app_services_app_data_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/app-data-storage.service */ "./src/app/services/app-data-storage.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _task_task_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../task/task/task.component */ "./src/app/components/task/task/task.component.ts");
/* harmony import */ var _task_boardTask_boardTask_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../task/boardTask/boardTask.component */ "./src/app/components/task/boardTask/boardTask.component.ts");







function BoardComponent_app_task_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-task", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function BoardComponent_app_task_2_Template_app_task_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.closeTaskDetail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("task", ctx_r0.task);
} }
function BoardComponent_app_board_task_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-board-task", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("taskIdEmitter", function BoardComponent_app_board_task_6_Template_app_board_task_taskIdEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.getTaskById($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("boardTask", task_r4);
} }
// Компонент - доска для вывода задач.
class BoardComponent {
    constructor(taskManagerService, appDataStorageService) {
        this.taskManagerService = taskManagerService;
        this.appDataStorageService = appDataStorageService;
        this.showDetailEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.boardTasks = [];
    }
    // Инициализация компонента.
    ngOnInit() {
        this.showTaskDetail = false;
        // Запрос на получение всех задач.
        this.taskManagerService.getBoardTasks().subscribe((data) => {
            if (data) {
                this.boardTasks = data;
            }
        });
    }
    // Метод получает задачу по id.
    getTaskById(taskId) {
        this.taskManagerService.getTask(taskId).subscribe((data) => {
            if (data) {
                this.task = data;
                this.showTaskDetail = true;
            }
        });
    }
    // Закрытие детализации задачи.
    closeTaskDetail() {
        this.showTaskDetail = false;
    }
}
BoardComponent.ɵfac = function BoardComponent_Factory(t) { return new (t || BoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_task_manager_service__WEBPACK_IMPORTED_MODULE_1__["TaskManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["AppDataStorageService"])); };
BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardComponent, selectors: [["app-board"]], outputs: { showDetailEmitter: "showDetailEmitter" }, decls: 7, vars: 2, consts: [[1, "board"], ["class", "task-detail", 3, "task", "close", 4, "ngIf"], [1, "board__filter-bar"], [1, "filter-input"], [1, "task-container"], [3, "boardTask", "taskIdEmitter", 4, "ngFor", "ngForOf"], [1, "task-detail", 3, "task", "close"], [3, "boardTask", "taskIdEmitter"]], template: function BoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BoardComponent_app_task_2_Template, 1, 1, "app-task", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BoardComponent_app_board_task_6_Template, 1, 1, "app-board-task", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTaskDetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.boardTasks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _task_task_task_component__WEBPACK_IMPORTED_MODULE_4__["TaskComponent"], _task_boardTask_boardTask_component__WEBPACK_IMPORTED_MODULE_5__["BoardTaskComponent"]], styles: [".board[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #d8d8d8;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.board__filter-bar[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\n.filter-input[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 30px;\n  background-color: #525252;\n  border-radius: 20px;\n}\n\n.task-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 1000px;\n  height: 90%;\n  flex-wrap: wrap;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.task-detail[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL2JvYXJkL19ib2FyZC9ib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4vYm9hcmQvX2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOGQ4ZDg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5ib2FyZF9fZmlsdGVyLWJhciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLmZpbHRlci1pbnB1dCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUyNTI1MjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi50YXNrLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi50YXNrLWRldGFpbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-board',
                templateUrl: './board.component.html',
                styleUrls: ['./board.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_task_manager_service__WEBPACK_IMPORTED_MODULE_1__["TaskManagerService"] }, { type: src_app_services_app_data_storage_service__WEBPACK_IMPORTED_MODULE_2__["AppDataStorageService"] }]; }, { showDetailEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/main/main-menu/main-menu.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/main/main-menu/main-menu.component.ts ***!
  \******************************************************************/
/*! exports provided: MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_shared_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/shared-event.service */ "./src/app/services/shared-event.service.ts");
/* harmony import */ var _services_app_data_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/app-data-storage.service */ "./src/app/services/app-data-storage.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function MainMenuComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainMenuComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.signOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MainMenuComponent {
    constructor(router, sharedEventService, appDataStorageService) {
        this.router = router;
        this.sharedEventService = sharedEventService;
        this.appDataStorageService = appDataStorageService;
        this.isLogged = false;
        // Подписка на событие Клик Sign-in.
        sharedEventService.changeEmitted$.subscribe(logged => this.signIn(logged));
    }
    ngOnInit() {
        this.isLogged = localStorage.getItem('token') ? true : false;
    }
    toBoard() {
        this.router.navigate(['main/board']);
    }
    toPersonal() {
        this.router.navigate(['main/personal']);
    }
    signOut() {
        this.isLogged = false;
        localStorage.clear();
        this.router.navigate(['sign-in']);
    }
    signIn(logged) {
        this.isLogged = logged;
    }
}
MainMenuComponent.ɵfac = function MainMenuComponent_Factory(t) { return new (t || MainMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_event_service__WEBPACK_IMPORTED_MODULE_2__["SharedEventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["AppDataStorageService"])); };
MainMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainMenuComponent, selectors: [["app-main-menu"]], decls: 8, vars: 1, consts: [[1, "main-menu"], [1, "main-menu__button", 3, "click"], [1, "main-menu__button__text"], ["class", "sign", 3, "click", 4, "ngIf"], [1, "sign", 3, "click"]], template: function MainMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainMenuComponent_Template_div_click_1_listener() { return ctx.toBoard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainMenuComponent_Template_div_click_4_listener() { return ctx.toPersonal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cabinet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MainMenuComponent_button_7_Template, 1, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".main-menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex-flow: column wrap;\n  justify-content: flex-start;\n  z-index: 50;\n  left: 0px;\n  width: 150px;\n  height: 100%;\n  background-color: #3b50b1;\n}\n\n.main-menu__button[_ngcontent-%COMP%] {\n  position: relative;\n  width: 90px;\n  height: 40px;\n  margin: 10px auto;\n  text-align: center;\n  transition: 0.2s ease-out;\n  border-radius: 2px;\n  cursor: pointer;\n}\n\n.main-menu__button[_ngcontent-%COMP%]:hover {\n  background-color: #192c85;\n}\n\n.main-menu__button__text[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\n.sign[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  margin: auto auto 5px auto;\n  padding: 5px;\n  border: none;\n  background: none;\n  transition: 0.4s;\n  background-image: url('logout.svg');\n  border-radius: 10px;\n  background-size: cover;\n  cursor: pointer;\n}\n\n.sign[_ngcontent-%COMP%]:hover {\n  background-color: #9b9b9b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4tbWVudS9tYWluLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvX2NvbG9yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJDVGM7QURPbEI7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRko7O0FBS0E7RUFDSSx5QkN2QnFCO0FEcUJ6Qjs7QUFLQTtFQUNJLGNBQUE7QUFGSjs7QUFLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBRko7O0FBS0E7RUFDSSx5QkFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4tbWVudS9tYWluLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29sb3JcIjtcclxuXHJcbi5tYWluLW1lbnUge1xyXG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB6LWluZGV4OiA1MDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLW1lbnUtY29sb3I7XHJcbn1cclxuXHJcbi5tYWluLW1lbnVfX2J1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1haW4tbWVudV9fYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLW1lbnUtYnV0dG9uLWNvbG9yO1xyXG59XHJcblxyXG4ubWFpbi1tZW51X19idXR0b25fX3RleHQge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5zaWduIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvIGF1dG8gNXB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9pY29uL2xvZ291dC5zdmdcIik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNpZ246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzliOWI5YjtcclxufVxyXG4iLCIkaGVhZGVyLWNvbG9yOiAjNTc1NzU3O1xyXG4kaGVhZGVyLWJvcmRlci1jb2xvcjogI2E4YThhODtcclxuJGZvb3Rlci1jb2xvcjogIzY5NDY0NjtcclxuJG1haW4tbWVudS1jb2xvcjogIzNiNTBiMTtcclxuJG1haW4tbWVudS1idXR0b24tY29sb3I6ICMxOTJjODU7XHJcbiR0aXRsZS10ZXh0LWNvbG9yOiAjYzVjN2NjO1xyXG4kdGFzay1kZXRhaWwtY29sb3I6ICNiNmI2YjY7Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-menu',
                templateUrl: './main-menu.component.html',
                styleUrls: ['./main-menu.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_shared_event_service__WEBPACK_IMPORTED_MODULE_2__["SharedEventService"] }, { type: _services_app_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["AppDataStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/main/personal/personal.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/main/personal/personal.component.ts ***!
  \****************************************************************/
/*! exports provided: PersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalComponent", function() { return PersonalComponent; });
/* harmony import */ var _classes_task_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../classes/task.model */ "./src/app/classes/task.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_task_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/task-manager.service */ "./src/app/services/task-manager.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _task_task_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../task/task/task.component */ "./src/app/components/task/task/task.component.ts");
/* harmony import */ var _task_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../task/task-form/task-form.component */ "./src/app/components/task/task-form/task-form.component.ts");
/* harmony import */ var _task_user_task_user_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../task/user-task/user-task.component */ "./src/app/components/task/user-task/user-task.component.ts");








function PersonalComponent_app_task_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-task", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("close", function PersonalComponent_app_task_1_Template_app_task_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.closeTaskDetail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("task", ctx_r0.task);
} }
function PersonalComponent_app_task_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-task-form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("close", function PersonalComponent_app_task_form_2_Template_app_task_form_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.closeTaskForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("changeTask", ctx_r1.task);
} }
function PersonalComponent_app_user_task_11_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-user-task", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("taskIdEmitter", function PersonalComponent_app_user_task_11_Template_app_user_task_taskIdEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.getTaskById($event); })("updateTaskEmitter", function PersonalComponent_app_user_task_11_Template_app_user_task_updateTaskEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.updateTask($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("task", task_r7);
} }
class PersonalComponent {
    constructor(taskManagerService) {
        this.taskManagerService = taskManagerService;
        this.userTasks = [];
    }
    ngOnInit() {
        this.showTaskForm = false;
        this.showTaskDetail = false;
        // Извлечение логина.
        const username = localStorage.getItem('username');
        // Получение задач пользователя по логину.
        this.taskManagerService
            .getUserTasks(username)
            .subscribe((data) => {
            if (data) {
                this.userTasks = data;
            }
        });
    }
    // Метод получает задачу по id.
    getTaskById(taskId) {
        this.taskManagerService.getTask(taskId).subscribe((data) => {
            if (data) {
                // вывести задачу.
                this.showTaskDetail = true;
                this.task = data;
            }
        });
    }
    // Изменение задачи.
    updateTask(taskId) {
        this.taskManagerService.getTask(taskId).subscribe((data) => {
            if (data) {
                this.task = data;
                this.showTaskForm = true;
            }
        });
    }
    // Созание задачи.
    createTask() {
        this.task = new _classes_task_model__WEBPACK_IMPORTED_MODULE_0__["TaskModel"]();
        this.showTaskForm = true;
    }
    // Закрытие формы задачи.
    closeTaskForm() {
        this.showTaskForm = false;
    }
    // Закрытие детализации задачи.
    closeTaskDetail() {
        this.showTaskDetail = false;
    }
    // Создание проекта.
    createProject() { }
}
PersonalComponent.ɵfac = function PersonalComponent_Factory(t) { return new (t || PersonalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_task_manager_service__WEBPACK_IMPORTED_MODULE_2__["TaskManagerService"])); };
PersonalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PersonalComponent, selectors: [["app-personal"]], decls: 19, vars: 3, consts: [[1, "personal-container"], ["class", "task-detail", 3, "task", "close", 4, "ngIf"], ["class", "task-form", 3, "changeTask", "close", 4, "ngIf"], [1, "personal-task"], [1, "title"], [1, "title-text"], [1, "task-control-container"], [1, "task-control", 3, "click"], [1, "task-container"], [3, "task", "taskIdEmitter", "updateTaskEmitter", 4, "ngFor", "ngForOf"], [1, "personal-project"], [1, "task-detail", 3, "task", "close"], [1, "task-form", 3, "changeTask", "close"], [3, "task", "taskIdEmitter", "updateTaskEmitter"]], template: function PersonalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PersonalComponent_app_task_1_Template, 1, 1, "app-task", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PersonalComponent_app_task_form_2_Template, 1, 1, "app-task-form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "My tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PersonalComponent_Template_button_click_8_listener() { return ctx.createTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Create task");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, PersonalComponent_app_user_task_11_Template, 1, 1, "app-user-task", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "My projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PersonalComponent_Template_button_click_17_listener() { return ctx.createProject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Create project ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showTaskDetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showTaskForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.userTasks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _task_task_task_component__WEBPACK_IMPORTED_MODULE_4__["TaskComponent"], _task_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_5__["TaskFormComponent"], _task_user_task_user_task_component__WEBPACK_IMPORTED_MODULE_6__["UserTaskComponent"]], styles: [".personal-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  width: 100%;\n  height: 100%;\n  background-color: #ebebeb;\n  overflow: hidden;\n}\n\n.task-control-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.personal-task[_ngcontent-%COMP%] {\n  width: 850px;\n  height: 100%;\n  background-color: #d1d1d1;\n}\n\n.personal-project[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  width: 400px;\n  height: 100%;\n  background-color: #d1d1d1;\n}\n\n.task-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  height: 100%;\n  padding: 10px;\n  overflow-y: auto;\n}\n\n.task-control[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 50px;\n  margin: 5px;\n  background-color: #cecece;\n  border-radius: 5px;\n}\n\n.task-control[_ngcontent-%COMP%]:hover {\n  background-color: #8f8f8f;\n}\n\n.task-form[_ngcontent-%COMP%], .task-detail[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 850px;\n  height: 100%;\n  z-index: 10;\n}\n\n.title[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  margin: 5px;\n  text-align: center;\n}\n\n.title-text[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL3BlcnNvbmFsL3BlcnNvbmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4vcGVyc29uYWwvcGVyc29uYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGVyc29uYWwtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi50YXNrLWNvbnRyb2wtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ucGVyc29uYWwtdGFzayB7XHJcbiAgd2lkdGg6IDg1MHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFkMWQxO1xyXG59XHJcblxyXG4ucGVyc29uYWwtcHJvamVjdCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWQxZDE7XHJcbn1cclxuXHJcbi50YXNrLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4udGFzay1jb250cm9sIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZWNlY2U7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4udGFzay1jb250cm9sOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGY4ZjhmO1xyXG59XHJcblxyXG4udGFzay1mb3JtLCAudGFzay1kZXRhaWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogODUwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBtYXJnaW46IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXRsZS10ZXh0IHtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PersonalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-personal',
                templateUrl: './personal.component.html',
                styleUrls: ['./personal.component.scss'],
            }]
    }], function () { return [{ type: _services_task_manager_service__WEBPACK_IMPORTED_MODULE_2__["TaskManagerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/main/user/sign-in/sign-in.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/main/user/sign-in/sign-in.component.ts ***!
  \*******************************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _classes_account_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../classes/account.model */ "./src/app/classes/account.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_shared_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../services/shared-event.service */ "./src/app/services/shared-event.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








function SignInComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Incorrect Email or Password\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SignInComponent {
    constructor(userService, router, sharedEventService) {
        this.userService = userService;
        this.router = router;
        this.sharedEventService = sharedEventService;
        // Событие sign-in
        this.loginEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isLoginError = false;
        this.accountModel = new _classes_account_model__WEBPACK_IMPORTED_MODULE_0__["AccountModel"]();
    }
    ngOnInit() {
    }
    onSubmit() {
        this.userService.userAuthentication(this.accountModel).subscribe((data) => {
            localStorage.setItem('token', data.access_token);
            localStorage.setItem('username', this.accountModel.UserName);
            this.router.navigate(['/main']);
            // Отправка события в общий сервис событий.
            this.sharedEventService.emitSignIn(true);
        }, (err) => {
            this.isLoginError = true;
        });
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_shared_event_service__WEBPACK_IMPORTED_MODULE_4__["SharedEventService"])); };
SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], outputs: { loginEmitter: "loginEmitter" }, decls: 17, vars: 4, consts: [["class", "red-text center error-message", 4, "ngIf"], [1, "col", "s12", "white", 3, "ngSubmit"], ["loginForm", "ngForm"], [1, "row"], [1, "input-field", "col", "s12"], ["type", "text", "name", "Login", "minlength", "2", "required", "", 3, "ngModel", "ngModelChange"], ["data-error", "Invalid email"], ["type", "password", "name", "Password", "minlength", "4", "required", "", 3, "ngModel", "ngModelChange"], ["data-error", "Invalid password"], ["type", "submit", 1, "btn-large", "btn-submit", 3, "disabled"], [1, "red-text", "center", "error-message"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SignInComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SignInComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_5_listener($event) { return ctx.accountModel.UserName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_10_listener($event) { return ctx.accountModel.Password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoginError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.accountModel.UserName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.accountModel.Password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !_r1.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi91c2VyL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-sign-in',
                templateUrl: './sign-in.component.html',
                styleUrls: ['./sign-in.component.scss']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_shared_event_service__WEBPACK_IMPORTED_MODULE_4__["SharedEventService"] }]; }, { loginEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/main/user/sign-up/sign-up.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/main/user/sign-up/sign-up.component.ts ***!
  \*******************************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _classes_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../classes/user.model */ "./src/app/classes/user.model.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function SignUpComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F 4 \u0441\u0438\u043C\u0432\u043E\u043B\u0430 \u0438 \u0431\u043E\u043B\u0435\u0435\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u0435\u0442 \u0441 \u043F\u0430\u0440\u043E\u043B\u0435\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SignUpComponent {
    constructor(userService) {
        this.userService = userService;
        this.userModel = new _classes_user_model__WEBPACK_IMPORTED_MODULE_1__["UserModel"]();
    }
    ngOnInit() {
        this.resetForm();
        this.buttonName = 'Sign ';
    }
    // Проверяет на пустые поля и соответствие пароля и его подтверждения
    checkFields() {
        if (this.userModel.Account.UserName !== '' &&
            this.userModel.Account.Password !== '' &&
            this.confirmPassword !== '' &&
            this.userModel.FirstName !== '' &&
            this.userModel.LastName !== '' &&
            this.userModel.Account.Password === this.confirmPassword) {
            return true;
        }
        return false;
    }
    // очищает форму
    resetForm() {
        this.userModel.Account.UserName = '';
        this.userModel.Account.Password = '';
        this.userModel.FirstName = '';
        this.userModel.LastName = '';
        this.confirmPassword = '';
    }
    // срабатывает при нажатии кнопки 'signUp'
    onSubmit() {
        if (this.checkFields()) {
            this.buttonName = 'Sending Data';
            this.userService.registerUser(this.userModel).subscribe(data => {
                // добавить сообщение об успешной регистрации
                this.resetForm();
            }, 
            // вывести нормальное сообщение об ошибке
            error => {
                this.buttonName = 'Error';
            });
        }
        else {
            this.buttonName = 'Error';
        }
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 30, vars: 9, consts: [[1, "col", "s12", "white"], [1, "row"], [1, "input-field", "col", "s12"], ["type", "text", "name", "Login", "minlength", "3", "required", "", 1, "validate", 3, "ngModel", "ngModelChange"], [1, "input-field", "col", "s6"], ["type", "password", "name", "Password", "minlength", "4", "required", "", 1, "validate", 3, "ngModel", "ngModelChange"], ["class", "wrong", 4, "ngIf"], ["type", "password", "name", "confirmPassword", "required", "", "minlength", "4", 1, "validate", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "FirstName", "required", "", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "LastName", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn-large", "btn-submit", 3, "disabled", "click"], [1, "wrong"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_3_listener($event) { return ctx.userModel.Account.UserName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_8_listener($event) { return ctx.userModel.Account.Password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SignUpComponent_span_11_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_13_listener($event) { return ctx.confirmPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Confirm password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SignUpComponent_span_16_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_19_listener($event) { return ctx.userModel.FirstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_23_listener($event) { return ctx.userModel.LastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_28_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userModel.Account.UserName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userModel.Account.Password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userModel.Account.Password.length < 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.confirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userModel.Account.Password !== ctx.confirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userModel.FirstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userModel.LastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.checkFields());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonName);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["div.sm-jumbotron[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 2rem;\n  background-color: #38547b;\n  color: #fff;\n  font-size: 2em;\n}\n\nbutton.btn-submit[_ngcontent-%COMP%] {\n  background-color: #385d7b;\n  color: #fff;\n  width: 100%;\n}\n\nbutton.btn-submit[_ngcontent-%COMP%]:focus, button.btn-submit[_ngcontent-%COMP%]:hover {\n  background-color: #477474;\n}\n\ninput.ng-invalid.ng-dirty[_ngcontent-%COMP%] {\n  border-bottom-color: #e91e63 !important;\n  box-shadow: 0 1px 0 0 #e91e63 !important;\n}\n\n.wrong[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 0.7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL3VzZXIvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5QkFBQTtBQUVGOztBQUFBO0VBQ0UsdUNBQUE7RUFDQSx3Q0FBQTtBQUdGOztBQURBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FBSUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4vdXNlci9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuc20tanVtYm90cm9ue1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NTQ3YjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDJlbTtcclxufVxyXG5cclxuYnV0dG9uLmJ0bi1zdWJtaXR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NWQ3YjtcclxuICBjb2xvcjogI2ZmZjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5idXR0b24uYnRuLXN1Ym1pdDpmb2N1cyxidXR0b24uYnRuLXN1Ym1pdDpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzEsIDExNiwgMTE2KTtcclxufVxyXG5pbnB1dC5uZy1pbnZhbGlkLm5nLWRpcnR5e1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNlOTFlNjMgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiAwIDFweCAwIDAgI2U5MWU2MyAhaW1wb3J0YW50O1xyXG59XHJcbi53cm9uZ3tcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-up',
                templateUrl: './sign-up.component.html',
                styleUrls: ['./sign-up.component.scss']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/main/user/user.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/main/user/user.component.ts ***!
  \********************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class UserComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.signInEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.signUpEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    SignIn(logged) {
        console.log('user');
    }
    emitSignUp(event) {
        this.signUpEmitter.emit(event);
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], outputs: { signInEmitter: "signInEmitter", signUpEmitter: "signUpEmitter" }, decls: 15, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col", "s8", "offset-s2"], [1, "card", "grey", "lighten-2"], [1, "card-tabs"], [1, "tabs", "tabs-fixed-width", "tabs-transparent"], [1, "tab"], ["routerLink", "/sign-in", "routerLinkActive", "active"], ["routerLink", "/sign-up", "routerLinkActive", "active"], [1, "card-content", "white"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 800px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogODAwcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user',
                templateUrl: './user.component.html',
                styleUrls: ['./user.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { signInEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], signUpEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/task/boardTask/boardTask.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/task/boardTask/boardTask.component.ts ***!
  \******************************************************************/
/*! exports provided: BoardTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardTaskComponent", function() { return BoardTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



// Компонент - задача для вывода на доску.
class BoardTaskComponent {
    constructor() {
        // Выходное свойство - идентификатор задачи.
        this.taskIdEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    // Инициализация компонента.
    ngOnInit() {
        if (this.boardTask) {
            const priority = this.boardTask.Priority.toLowerCase();
            this.priorityClass = `task-${priority}`;
            this.author = this.boardTask.AuthorLogin.substr(0, 2);
        }
    }
    // Метод вызывается по клику на задаче. Отдает в общий сервис id задачи.
    boardTaskOnClick() {
        this.taskIdEmitter.emit(this.boardTask.TaskId);
    }
}
BoardTaskComponent.ɵfac = function BoardTaskComponent_Factory(t) { return new (t || BoardTaskComponent)(); };
BoardTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardTaskComponent, selectors: [["app-board-task"]], inputs: { boardTask: "boardTask" }, outputs: { taskIdEmitter: "taskIdEmitter" }, decls: 18, vars: 10, consts: [[1, "task", 3, "click"], [1, "task__description"], [1, "task__group"], [1, "task__footer"], [1, "task__footer__status"], [1, "task__footer__deadlineDate"], [1, "task__footer__author"]], template: function BoardTaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardTaskComponent_Template_div_click_0_listener() { return ctx.boardTaskOnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.priorityClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.boardTask.Description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.boardTask.Project);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.boardTask.Status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 7, ctx.boardTask.DeadlineDate, "mediumDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.author);
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".task[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  width: 300px;\n  height: 200px;\n  margin: 10px;\n  border-radius: 6px;\n  transition: 0.5s;\n  cursor: pointer;\n}\n\n.task[_ngcontent-%COMP%]:hover {\n  box-shadow: 6px 6px #7e7e7e;\n}\n\n.task__description[_ngcontent-%COMP%] {\n  position: relative;\n  width: 250px;\n  height: 80px;\n  margin: 10px auto;\n  overflow: hidden;\n  background-color: #ececec;\n  border-radius: 4px;\n  box-shadow: 2px 2px #4b4b4b;\n}\n\n.task__description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 5px;\n  font-size: 20px;\n  text-align: left;\n}\n\n.task__group[_ngcontent-%COMP%] {\n  position: relative;\n  width: 250px;\n  height: 27px;\n  margin: 5px auto;\n  background-color: #303c72;\n  border-radius: 3px;\n  overflow: hidden;\n  box-shadow: 2px 2px #5c679b;\n}\n\n.task__group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 5px;\n  font-size: 16px;\n  color: #ffffff;\n  text-transform: uppercase;\n  text-align: left;\n}\n\n.task__footer[_ngcontent-%COMP%] {\n  display: flex;\n  width: 270px;\n  height: 50px;\n  margin: 5px auto 10px auto;\n  background-color: #dfdfdf;\n  border: 1px solid #000000;\n  border-radius: 3px;\n  box-shadow: 2px 2px #4b4b4b;\n}\n\n.task__footer__status[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 30px;\n  margin: auto;\n}\n\n.task__footer__status[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 5px;\n  font-size: 16px;\n  text-transform: uppercase;\n  text-align: left;\n}\n\n.task__footer__deadlineDate[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 30px;\n  margin: auto 0;\n}\n\n.task__footer__deadlineDate[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  height: 30px;\n  padding: 5px 0;\n  font-size: 20px;\n  color: #474747;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.task__footer__author[_ngcontent-%COMP%] {\n  display: flex;\n  width: 40px;\n  height: 40px;\n  margin: auto;\n  background-color: #b8432f;\n  border-radius: 30px;\n}\n\n.task__footer__author[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: auto;\n  font-size: 20px;\n}\n\n.task-trivial[_ngcontent-%COMP%] {\n  background-color: rgba(131, 131, 131, 0.7);\n}\n\n.task-minor[_ngcontent-%COMP%] {\n  background-color: rgba(0, 200, 0, 0.7);\n}\n\n.task-major[_ngcontent-%COMP%] {\n  background-color: rgba(50, 50, 250, 0.6);\n}\n\n.task-critical[_ngcontent-%COMP%] {\n  background-color: rgba(250, 150, 30, 0.8);\n}\n\n.task-blocker[_ngcontent-%COMP%] {\n  background-color: rgba(200, 0, 0, 0.7);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YXNrL2JvYXJkVGFzay9ib2FyZFRhc2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBRUUsMENBQUE7QUFBRjs7QUFHQTtFQUVFLHNDQUFBO0FBREY7O0FBSUE7RUFFRSx3Q0FBQTtBQUZGOztBQUtBO0VBRUUseUNBQUE7QUFIRjs7QUFNQTtFQUVFLHNDQUFBO0FBSkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Rhc2svYm9hcmRUYXNrL2JvYXJkVGFzay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YXNrIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRhc2s6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDZweCA2cHggIzdlN2U3ZTtcclxufVxyXG5cclxuLnRhc2tfX2Rlc2NyaXB0aW9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggIzRiNGI0YjtcclxufVxyXG5cclxuLnRhc2tfX2Rlc2NyaXB0aW9uIHAge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnRhc2tfX2dyb3VwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogMjdweDtcclxuICBtYXJnaW46IDVweCBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDNjNzI7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCAjNWM2NzliO1xyXG59XHJcblxyXG4udGFza19fZ3JvdXAgcCB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi50YXNrX19mb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDI3MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW46IDVweCBhdXRvIDEwcHggYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZmRmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggIzRiNGI0YjtcclxufVxyXG5cclxuLnRhc2tfX2Zvb3Rlcl9fc3RhdHVzIHtcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4udGFza19fZm9vdGVyX19zdGF0dXMgcCB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi50YXNrX19mb290ZXJfX2RlYWRsaW5lRGF0ZSB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBtYXJnaW46IGF1dG8gMDtcclxufVxyXG5cclxuLnRhc2tfX2Zvb3Rlcl9fZGVhZGxpbmVEYXRlIHAge1xyXG4gIGhlaWdodDogMzBweDtcclxuICBwYWRkaW5nOiA1cHggMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICM0NzQ3NDc7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi50YXNrX19mb290ZXJfX2F1dGhvciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiODQzMmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxufVxyXG5cclxuLnRhc2tfX2Zvb3Rlcl9fYXV0aG9yIHAge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi50YXNrLXRyaXZpYWwge1xyXG4gIC8vINGB0LXRgNGL0LlcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzMSwgMTMxLCAxMzEsIDAuNyk7XHJcbn1cclxuXHJcbi50YXNrLW1pbm9yIHtcclxuICAvLyDQt9C10LvQtdC90YvQuVxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjAwLCAwLCAwLjcpO1xyXG59XHJcblxyXG4udGFzay1tYWpvciB7XHJcbiAgLy8g0YHQuNC90LjQuVxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsIDUwLCAyNTAsIDAuNik7XHJcbn1cclxuXHJcbi50YXNrLWNyaXRpY2FsIHtcclxuICAvLyDQvtGA0LDQvdC20LXQstGL0LlcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMTUwLCAzMCwgMC44KTtcclxufVxyXG5cclxuLnRhc2stYmxvY2tlciB7XHJcbiAgLy8g0LrRgNCw0YHQvdGL0LlcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwgMCwgMCwgMC43KTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardTaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-board-task',
                templateUrl: './boardTask.component.html',
                styleUrls: ['./boardTask.component.scss'],
            }]
    }], function () { return []; }, { boardTask: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], taskIdEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/task/task-form/task-form.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/task/task-form/task-form.component.ts ***!
  \******************************************************************/
/*! exports provided: TaskFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskFormComponent", function() { return TaskFormComponent; });
/* harmony import */ var _classes_task_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../classes/task.model */ "./src/app/classes/task.model.ts");
/* harmony import */ var _enums_priority_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../enums/priority.enum */ "./src/app/enums/priority.enum.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_task_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/task-manager.service */ "./src/app/services/task-manager.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _services_enum_to_arr_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/enum-to-arr.pipe */ "./src/app/services/enum-to-arr.pipe.ts");










function TaskFormComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskFormComponent_li_10_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const p_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.pickPriority(p_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](p_r1);
} }
// Компонент - форма для ввода параметров задачи.
class TaskFormComponent {
    constructor(formBuilder, taskManager, userService) {
        this.formBuilder = formBuilder;
        this.taskManager = taskManager;
        this.userService = userService;
        // Выходное свойство - закрытие окна.
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        // Поле для выпадающего списка Priority.
        this.priority = _enums_priority_enum__WEBPACK_IMPORTED_MODULE_1__["Priority"];
        // Поле для заполнения данными при создании задачи.
        this.task = new _classes_task_model__WEBPACK_IMPORTED_MODULE_0__["TaskModel"]();
        // Массив логинов пользователей.
        this.usersList = [];
    }
    ngOnInit() {
        this.readonly = false;
        this.priorityText = this.task.Priority;
        this.initForm();
        console.log(this.readonly);
        console.log(this.changeTask);
    }
    // Инициализация формы
    initForm() {
        this.taskFormGroup = this.formBuilder.group({
            title: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-Zа-яА-Я0-9]+'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20),
                ],
            ],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(200)]],
            executor: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            project: ['', []],
            deadlineDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            priority: ['', []],
        });
        const controls = this.taskFormGroup.controls;
        if (this.changeTask.TaskId) {
            this.readonly = true;
            this.priorityText = this.changeTask.Priority;
            controls.title.setValue(this.changeTask.Title);
            controls.description.setValue(this.changeTask.Description);
            controls.executor.setValue(this.changeTask.ExecutorLogin);
            controls.priority.setValue(this.changeTask.Priority);
            controls.deadlineDate.setValue(this.changeTask.DeadlineDate);
        }
    }
    // Отправка задачи на сервер
    onSubmit() {
        const controls = this.taskFormGroup.controls;
        this.task.AuthorLogin = localStorage.getItem('username');
        this.task.Title = controls.title.value;
        this.task.Description = controls.description.value;
        this.task.DeadlineDate = controls.deadlineDate.value;
        if (this.changeTask) {
            this.taskManager.changeTask(this.task).subscribe((data) => {
                console.log('change task');
            });
        }
        else {
            this.taskManager.addTask(this.task).subscribe((data) => {
                console.log('add task');
            });
        }
        this.closeForm();
    }
    // Выбор приоритета задачи в выпадающем списке.
    pickPriority(p) {
        this.priorityText = p;
    }
    // Получение списка польтзователей
    getUsers() {
        this.userService.getLoginOfUsers().subscribe((data) => {
            if (data) {
                this.usersList = data;
            }
        });
    }
    // Закрытие окна
    closeForm() {
        this.close.emit();
    }
}
TaskFormComponent.ɵfac = function TaskFormComponent_Factory(t) { return new (t || TaskFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_task_manager_service__WEBPACK_IMPORTED_MODULE_4__["TaskManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"])); };
TaskFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TaskFormComponent, selectors: [["app-task-form"]], inputs: { parenTaskId: "parenTaskId", changeTask: "changeTask" }, outputs: { close: "close" }, decls: 16, vars: 7, consts: [[1, "task-form-wrapper"], ["action", "#", "method", "POST", 1, "task-form", 3, "formGroup", "submit"], ["formControlName", "title", "placeholder", "Title", 1, "task-form-input", 3, "readonly"], ["formControlName", "description", "placeholder", "Description", 1, "task-form-input", "description", 3, "readonly"], ["formControlName", "executor", "placeholder", "Executor", 1, "task-form-input", 3, "click"], ["formControlName", "project", "placeholder", "Project", 1, "task-form-input"], ["formControlName", "deadlineDate", "placeholder", "Deadline date", 1, "task-form-input"], ["formControlName", "priority", 1, "hide"], [1, "task-form-list"], ["class", "list-option", 3, "click", 4, "ngFor", "ngForOf"], [1, "button-container"], ["type", "submit", "value", "Submit", 1, "button"], ["type", "button", 1, "button", 3, "click"], [1, "list-option", 3, "click"]], template: function TaskFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function TaskFormComponent_Template_form_submit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskFormComponent_Template_input_click_4_listener() { return ctx.getUsers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, TaskFormComponent_li_10_Template, 2, 1, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "enumToArray");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskFormComponent_Template_button_click_14_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Chancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.taskFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readonly", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readonly", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.priorityText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 5, ctx.priority));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_services_enum_to_arr_pipe__WEBPACK_IMPORTED_MODULE_7__["EnumToArrayPipe"]], styles: [".task-form-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(85, 85, 85, 0.2);\n}\n\n.task-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n  margin: auto;\n  width: 600px;\n  height: 400px;\n  background-color: #aaaaaa;\n  border-radius: 10px;\n  box-shadow: 2px 2px #414141;\n}\n\n.task-form-input[_ngcontent-%COMP%] {\n  position: relative;\n  height: 30px;\n  width: 550px;\n  margin: 5px auto;\n  font-size: 1rem;\n}\n\n.description[_ngcontent-%COMP%] {\n  height: 90px;\n  resize: none;\n}\n\n.task-form-list[_ngcontent-%COMP%] {\n  position: relative;\n  height: 30px;\n  width: 550px;\n  margin: 5px auto;\n  font-size: 1rem;\n  list-style: none;\n  cursor: pointer;\n}\n\n.list-option[_ngcontent-%COMP%] {\n  position: absolute;\n  display: none;\n  width: 200px;\n  height: 30px;\n  background-color: #caa9a9;\n  cursor: pointer;\n}\n\n.task-form-list[_ngcontent-%COMP%]:hover   .list-option[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  z-index: 10;\n}\n\n.list-option[_ngcontent-%COMP%]:hover {\n  background-color: #414141;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  margin: 5px auto;\n}\n\n.button[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 30px;\n  margin: 5px;\n  outline: none;\n  border: 1px solid #1f1f1f;\n  border-radius: 3px;\n  background-color: #a5a5a5;\n  transition: 0.3s;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  background-color: #414141;\n}\n\n.button[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\ninput[readonly][_ngcontent-%COMP%], textarea[readonly][_ngcontent-%COMP%] {\n  background-color: #b3bdd3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YXNrL3Rhc2stZm9ybS90YXNrLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Rhc2svdGFzay1mb3JtL3Rhc2stZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YXNrLWZvcm0td3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiByZ2IoODUsIDg1LCA4NSksICRhbHBoYTogMC4yKTtcclxufVxyXG5cclxuLnRhc2stZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhYWFhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCAjNDE0MTQxO1xyXG59XHJcblxyXG4udGFzay1mb3JtLWlucHV0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiA1NTBweDtcclxuICBtYXJnaW46IDVweCBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgcmVzaXplOiBub25lO1xyXG59XHJcblxyXG4udGFzay1mb3JtLWxpc3Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDU1MHB4O1xyXG4gIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubGlzdC1vcHRpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NhYTlhOTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50YXNrLWZvcm0tbGlzdDpob3ZlciAubGlzdC1vcHRpb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLmxpc3Qtb3B0aW9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0MTQxO1xyXG59XHJcblxyXG4uYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiA1cHggYXV0bztcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBtYXJnaW46IDVweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxZjFmMWY7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhNWE1YTU7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNDE0MTtcclxufVxyXG5cclxuLmJ1dHRvbjphY3RpdmUge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbn1cclxuXHJcbi5oaWRlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5pbnB1dFtyZWFkb25seV0sIHRleHRhcmVhW3JlYWRvbmx5XSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IzYmRkMztcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TaskFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-task-form',
                templateUrl: './task-form.component.html',
                styleUrls: ['./task-form.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: src_app_services_task_manager_service__WEBPACK_IMPORTED_MODULE_4__["TaskManagerService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }]; }, { parenTaskId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], changeTask: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/task/task/task.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/task/task/task.component.ts ***!
  \********************************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_app_data_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/app-data-storage.service */ "./src/app/services/app-data-storage.service.ts");
/* harmony import */ var src_app_services_shared_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shared-event.service */ "./src/app/services/shared-event.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function TaskComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_a_9_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.sendHashTag($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hashTag_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hashTag_r1);
} }
class TaskComponent {
    constructor(appDataStorageService, sharedEventService) {
        this.appDataStorageService = appDataStorageService;
        this.sharedEventService = sharedEventService;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.project = this.task.Project ? ` : ${this.task.Project}` : '';
    }
    // Метод возвращает комментарии задачи.
    getComments() {
        console.log(this.task.TaskId);
    }
    // Метод отсылает хэш-тег
    sendHashTag(event) {
        console.log(event.target.innerText);
    }
    // Метод закрывает окно детализации задачи
    closeTaskDetail() {
        this.close.emit();
    }
}
TaskComponent.ɵfac = function TaskComponent_Factory(t) { return new (t || TaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["AppDataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_shared_event_service__WEBPACK_IMPORTED_MODULE_2__["SharedEventService"])); };
TaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskComponent, selectors: [["app-task"]], inputs: { task: "task" }, outputs: { close: "close" }, decls: 43, vars: 16, consts: [[1, "task-wrapper"], [1, "task-container"], [1, "task-title"], [1, "task-title__text"], [1, "close", 3, "click"], [1, "task-description"], [1, "task-description__text"], ["class", "task-hash-tags__tags", 3, "click", 4, "ngFor", "ngForOf"], [1, "task-author-executor"], [1, "task-author", "name"], [1, "span"], [1, "task-executor", "name"], [1, "task-status"], [1, "task-status__text"], [1, "task-priority"], [1, "task-priority__text"], [1, "task-date"], [1, "task-create", "date"], [1, "task-deadline", "date"], [1, "task-comments", 3, "click"], [1, "comments"], [1, "task-hash-tags__tags", 3, "click"]], template: function TaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_div_click_5_listener() { return ctx.closeTaskDetail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TaskComponent_a_9_Template, 2, 1, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Author:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Executor:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Status:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Priority:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Creation date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Finish before:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_40_listener() { return ctx.getComments(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Show comments.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.task.Title, "", ctx.project, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.task.Description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.task.HashTags);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.task.AuthorLogin, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.task.ExecutorLogin, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.task.Status, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.task.Priority, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](34, 10, ctx.task.CreateDate, "mediumDate"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](39, 13, ctx.task.DeadlineDate, "mediumDate"), "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".task-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(85, 85, 85, 0.2);\n}\n\n.task-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  width: 600px;\n  height: 340px;\n  margin: 10px auto auto auto;\n  background-color: #b6b6b6;\n  border: 1px solid #464646;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.task-title[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 40px;\n  margin: 0 auto;\n  background-color: #677286;\n}\n\n.task-title__text[_ngcontent-%COMP%] {\n  width: 550px;\n  text-align: center;\n  font-size: 1.8rem;\n  line-height: 2.5rem;\n  letter-spacing: 0.6rem;\n  color: #ffffff;\n  overflow: hidden;\n}\n\n.close[_ngcontent-%COMP%] {\n  margin-left: auto;\n  width: 35px;\n  height: 35px;\n  background-image: url('close.svg');\n  background-repeat: no-repeat;\n  background-size: contain;\n  cursor: pointer;\n}\n\n.task-description[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 140px;\n  margin: 10px auto 5px auto;\n  border: 2px solid #636363;\n  border-radius: 5px;\n}\n\n.task-description__text[_ngcontent-%COMP%] {\n  height: 110px;\n  padding: 5px 10px;\n}\n\n.task-hash-tags[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 20px;\n  margin: 0 auto;\n  overflow: hidden;\n}\n\n.task-hash-tags__tags[_ngcontent-%COMP%] {\n  display: inline;\n  padding: 5px 10px;\n  font-weight: bold;\n  color: #0b47b8;\n  cursor: pointer;\n}\n\n.task-hash-tags__tags[_ngcontent-%COMP%]::before {\n  content: \"#\";\n}\n\n.task-author-executor[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 90%;\n  height: 20px;\n  margin: 0 auto;\n}\n\n.name[_ngcontent-%COMP%] {\n  display: block;\n  width: 300px;\n  text-align: center;\n  font-size: 1rem;\n  font-weight: bold;\n  line-height: 1.2rem;\n  overflow: hidden;\n}\n\n.task-status[_ngcontent-%COMP%] {\n  display: flex;\n  width: 200px;\n  height: 40px;\n}\n\n.task-status__text[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.task-priority[_ngcontent-%COMP%] {\n  display: flex;\n  width: 200px;\n  height: 40px;\n}\n\n.task-priority__text[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.span[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #677286;\n}\n\n.task-date[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 90%;\n  height: 20px;\n  margin: 0 auto;\n}\n\n.date[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.2rem;\n}\n\n.task-comments[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 30px;\n  margin: 10px auto;\n  border-radius: 5px;\n  outline: none;\n  border: 1px solid #464646;\n  cursor: pointer;\n  transition: 0.5s;\n}\n\n.task-comments[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 10px #4058a7;\n}\n\n.task-comments[_ngcontent-%COMP%]:focus {\n  outline: none;\n  background-color: #ffffff;\n}\n\n.task-comments[_ngcontent-%COMP%]:active {\n  outline: none;\n  background-color: #8f8f8f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YXNrL3Rhc2svdGFzay5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9fY29sb3Iuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkNaZ0I7RURhaEIseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUFESjs7QUFJQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFJQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7QUFESjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlBO0VBQ0ksWUFBQTtBQURKOztBQUlBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxnQ0FBQTtBQURKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFzay90YXNrL3Rhc2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvYXNzZXRzL3Njc3MvY29sb3InO1xyXG5cclxuLnRhc2std3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogcmdiKDg1LCA4NSwgODUpLCAkYWxwaGE6IDAuMik7XHJcbn1cclxuXHJcbi50YXNrLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBoZWlnaHQ6IDM0MHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG8gIGF1dG8gYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0YXNrLWRldGFpbC1jb2xvcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0NjQ2NDY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnRhc2stdGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjc3Mjg2O1xyXG59XHJcblxyXG4udGFzay10aXRsZV9fdGV4dCB7XHJcbiAgICB3aWR0aDogNTUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC42cmVtO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlL2ljb24vY2xvc2Uuc3ZnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGFzay1kZXNjcmlwdGlvbiB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiAxNDBweDtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvIDVweCBhdXRvO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzYzNjM2MztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnRhc2stZGVzY3JpcHRpb25fX3RleHQge1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG59XHJcblxyXG4udGFzay1oYXNoLXRhZ3Mge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnRhc2staGFzaC10YWdzX190YWdzIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzBiNDdiODtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRhc2staGFzaC10YWdzX190YWdzOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyMnO1xyXG59XHJcblxyXG4udGFzay1hdXRob3ItZXhlY3V0b3Ige1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLm5hbWUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjJyZW07XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udGFzay1zdGF0dXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLnRhc2stc3RhdHVzX190ZXh0IHtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnRhc2stcHJpb3JpdHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLnRhc2stcHJpb3JpdHlfX3RleHQge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGNvbG9yOiAjNjc3Mjg2O1xyXG59XHJcblxyXG4udGFzay1kYXRlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5kYXRlIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjJyZW07XHJcbn1cclxuXHJcbi50YXNrLWNvbW1lbnRzIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDY0NjQ2O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLnRhc2stY29tbWVudHM6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICM0MDU4YTc7XHJcbn1cclxuXHJcbi50YXNrLWNvbW1lbnRzOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4udGFzay1jb21tZW50czphY3RpdmUge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZjhmOGY7XHJcbn1cclxuIiwiJGhlYWRlci1jb2xvcjogIzU3NTc1NztcclxuJGhlYWRlci1ib3JkZXItY29sb3I6ICNhOGE4YTg7XHJcbiRmb290ZXItY29sb3I6ICM2OTQ2NDY7XHJcbiRtYWluLW1lbnUtY29sb3I6ICMzYjUwYjE7XHJcbiRtYWluLW1lbnUtYnV0dG9uLWNvbG9yOiAjMTkyYzg1O1xyXG4kdGl0bGUtdGV4dC1jb2xvcjogI2M1YzdjYztcclxuJHRhc2stZGV0YWlsLWNvbG9yOiAjYjZiNmI2OyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-task',
                templateUrl: './task.component.html',
                styleUrls: ['./task.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_app_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["AppDataStorageService"] }, { type: src_app_services_shared_event_service__WEBPACK_IMPORTED_MODULE_2__["SharedEventService"] }]; }, { task: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/task/user-task/user-task.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/task/user-task/user-task.component.ts ***!
  \******************************************************************/
/*! exports provided: UserTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTaskComponent", function() { return UserTaskComponent; });
/* harmony import */ var _classes_boardTask_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../classes/boardTask.model */ "./src/app/classes/boardTask.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_task_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/task-manager.service */ "./src/app/services/task-manager.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





class UserTaskComponent {
    constructor(taskManagerService) {
        this.taskManagerService = taskManagerService;
        this.taskIdEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.updateTaskEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.task = new _classes_boardTask_model__WEBPACK_IMPORTED_MODULE_0__["BoardTaskModel"]();
    }
    ngOnInit() {
        console.log(this.task);
    }
    // Метод вызывается по клику на задаче. Отдает на выход id задачи.
    onClickUserTask() {
        this.taskIdEmitter.emit(this.task.TaskId);
    }
    deleteTask() {
        this.taskManagerService.deleteTask(this.task.TaskId).subscribe((data) => {
            console.log(data);
        });
    }
    // Изменение задачи. На выходное свойство подается id задачи.
    updateTask() {
        this.updateTaskEmitter.emit(this.task.TaskId);
    }
}
UserTaskComponent.ɵfac = function UserTaskComponent_Factory(t) { return new (t || UserTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_task_manager_service__WEBPACK_IMPORTED_MODULE_2__["TaskManagerService"])); };
UserTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserTaskComponent, selectors: [["app-user-task"]], inputs: { task: "task" }, outputs: { taskIdEmitter: "taskIdEmitter", updateTaskEmitter: "updateTaskEmitter" }, decls: 20, vars: 8, consts: [[1, "user-task"], [1, "user-task-container", 3, "click"], [1, "title", "container"], [1, "text"], [1, "description", "container"], [1, "description__text", "text"], [1, "status", "container"], [1, "priority", "container"], [1, "deadline-date", "container"], [1, "change", "button", 3, "click"], [1, "delete", "button", 3, "click"]], template: function UserTaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserTaskComponent_Template_div_click_1_listener() { return ctx.onClickUserTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserTaskComponent_Template_button_click_18_listener() { return ctx.updateTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserTaskComponent_Template_button_click_19_listener() { return ctx.deleteTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.task.Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.task.Description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.task.Status);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.task.Priority);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](17, 5, ctx.task.DeadlineDate, "mediumDate"));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".user-task[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.user-task-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 700px;\n  height: 50px;\n  padding: 5px;\n  margin: 5px;\n  border-radius: 5px;\n  background-color: #9e9e9e;\n  box-shadow: 2px 2px #5f5f5f;\n  transition: 0.4s;\n  cursor: pointer;\n}\n\n.user-task-container[_ngcontent-%COMP%]:hover {\n  background-color: #575757;\n}\n\n.title[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n.description[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.status[_ngcontent-%COMP%] {\n  width: 80px;\n}\n\n.priority[_ngcontent-%COMP%] {\n  width: 80px;\n}\n\n.deadline-date[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  height: 36px;\n  align-items: center;\n  background-color: #cccccc;\n  border-radius: 3px;\n  box-shadow: 2px 2px #5f5f5f;\n}\n\n.text[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  color: #383838;\n  font-weight: bold;\n  text-align: center;\n}\n\n.description__text[_ngcontent-%COMP%] {\n  text-align: justify;\n  height: 100%;\n}\n\n.button[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin: auto 5px;\n  background-color: #cccccc;\n  border: none;\n  background: none;\n  outline: none;\n  transition: 0.4s;\n  border-radius: 100%;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 5px #344291;\n}\n\n.button[_ngcontent-%COMP%]:active {\n  transform: scale(0.9);\n}\n\n.change[_ngcontent-%COMP%] {\n  background-image: url('task_change.svg');\n}\n\n.delete[_ngcontent-%COMP%] {\n  background-image: url('task_delete.svg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YXNrL3VzZXItdGFzay91c2VyLXRhc2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSx3Q0FBQTtBQUNKOztBQUVBO0VBQ0ksd0NBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFzay91c2VyLXRhc2svdXNlci10YXNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItdGFzayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbn1cclxuXHJcbi51c2VyLXRhc2stY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogNzAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZTllOWU7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4ICM1ZjVmNWY7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udXNlci10YXNrLWNvbnRhaW5lcjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTc1NzU3O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5zdGF0dXMge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcbi5wcmlvcml0eSB7XHJcbiAgICB3aWR0aDogODBweDtcclxufVxyXG5cclxuLmRlYWRsaW5lLWRhdGUge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggIzVmNWY1ZjtcclxufVxyXG5cclxuLnRleHQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjMzgzODM4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbl9fdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvIDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggIzM0NDI5MTtcclxufVxyXG5cclxuLmJ1dHRvbjphY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xyXG59XHJcblxyXG4uY2hhbmdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9pY29uL3Rhc2tfY2hhbmdlLnN2Z1wiKTtcclxufVxyXG5cclxuLmRlbGV0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2UvaWNvbi90YXNrX2RlbGV0ZS5zdmdcIik7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserTaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-user-task',
                templateUrl: './user-task.component.html',
                styleUrls: ['./user-task.component.scss']
            }]
    }], function () { return [{ type: src_app_services_task_manager_service__WEBPACK_IMPORTED_MODULE_2__["TaskManagerService"] }]; }, { taskIdEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], updateTaskEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], task: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/enums/priority.enum.ts":
/*!****************************************!*\
  !*** ./src/app/enums/priority.enum.ts ***!
  \****************************************/
/*! exports provided: Priority */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Priority", function() { return Priority; });
// Перечисление - приоритет задачи.
var Priority;
(function (Priority) {
    Priority["Trivial"] = "Trivial";
    Priority["Minor"] = "Minor";
    Priority["Major"] = "Major";
    Priority["Critical"] = "Critical";
    Priority["Blocker"] = "Blocker";
})(Priority || (Priority = {}));


/***/ }),

/***/ "./src/app/services/app-data-storage.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/app-data-storage.service.ts ***!
  \******************************************************/
/*! exports provided: AppDataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDataStorageService", function() { return AppDataStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AppDataStorageService {
    constructor() {
        this.appStorage = {};
    }
    // Функция добавляет данные ключ:значение в хранилище.
    setItem(key, value) {
        this.appStorage.key = value;
    }
    // Функция возвращает значение по ключу. Если ключа не существует, возвращает null.
    getItem(key) {
        if (this.appStorage.key) {
            return this.appStorage.key;
        }
        return null;
    }
    // Удаляет все жанные из хранилища.
    clear() {
        this.appStorage = {};
    }
}
AppDataStorageService.ɵfac = function AppDataStorageService_Factory(t) { return new (t || AppDataStorageService)(); };
AppDataStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppDataStorageService, factory: AppDataStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppDataStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/enum-to-arr.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/services/enum-to-arr.pipe.ts ***!
  \**********************************************/
/*! exports provided: EnumToArrayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumToArrayPipe", function() { return EnumToArrayPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


// Класс возвращает массив ключей объекта.
class EnumToArrayPipe {
    transform(data) {
        return Object.values(data);
    }
}
EnumToArrayPipe.ɵfac = function EnumToArrayPipe_Factory(t) { return new (t || EnumToArrayPipe)(); };
EnumToArrayPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "enumToArray", type: EnumToArrayPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnumToArrayPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'enumToArray' }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/shared-event.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/shared-event.service.ts ***!
  \**************************************************/
/*! exports provided: SharedEventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedEventService", function() { return SharedEventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



// Сервис события для подписки на событие несвязанных компонентов.
class SharedEventService {
    constructor() {
        this.emitChangeSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.changeEmitted$ = this.emitChangeSource.asObservable();
        // private emitShowForm = new Subject<any>();
        // showFormEmitted$ = this.emitShowForm.asObservable();
        this.emitTaskDetailClick = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.taskDetailEmitted$ = this.emitTaskDetailClick.asObservable();
    }
    // Событие нажатия на кнопку SignIn.
    emitSignIn(change) {
        this.emitChangeSource.next(change);
    }
    // // Событие show task form.
    // emitShowTaskForm(change: any) {
    //   this.emitShowForm.next(change);
    // }
    // Событие клик на задаче доски.
    emitTaskDetail(change) {
        this.emitTaskDetailClick.next(change);
    }
}
SharedEventService.ɵfac = function SharedEventService_Factory(t) { return new (t || SharedEventService)(); };
SharedEventService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SharedEventService, factory: SharedEventService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedEventService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/task-manager.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/task-manager.service.ts ***!
  \**************************************************/
/*! exports provided: TaskManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskManagerService", function() { return TaskManagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




// Сервис представляет методы запросов для задач.
class TaskManagerService {
    constructor(http) {
        this.http = http;
        this.rootUrl = "https://localhost:44376";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
        };
    }
    // Запрос на получение всех задач.
    getBoardTasks() {
        this.httpOptions.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        const route = '/board/getboardtasks';
        return this.http.get(`${this.rootUrl}${route}`, this.httpOptions);
    }
    // Запрос на получение задачи по id.
    getTask(taskId) {
        this.httpOptions.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        const route = '/task/gettask';
        return this.http.get(`${this.rootUrl}${route}?taskid=${taskId}`, this.httpOptions);
    }
    // Запрос на добавление задачи.
    addTask(taskModel) {
        const route = '/task/addtask';
        const body = taskModel;
        this.httpOptions.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this.http.post(`${this.rootUrl}${route}`, body, this.httpOptions);
    }
    // Запрос на удаление задачи по id.
    deleteTask(taskId) {
        this.httpOptions.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        const route = '/task/deletetask';
        return this.http.delete(`${this.rootUrl}${route}?taskid=${taskId}`, this.httpOptions);
    }
    // Запрос на изменение задачи.
    changeTask(taskModel) {
        const route = '/task/changetask';
        const body = taskModel;
        this.httpOptions.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this.http.put(`${this.rootUrl}${route}`, body, this.httpOptions);
    }
    // Запрос на добавление подзадачи.
    addSubTask(taskModel, parentTaskId) {
        const route = '/task/changetask';
        const body = taskModel;
        this.httpOptions.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this.http.put(`${this.rootUrl}${route}?parentTaskId=${parentTaskId}`, body, this.httpOptions);
    }
    // Запрос на получение задач пользователя.
    getUserTasks(username) {
        this.httpOptions.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        const route = '/task/gettasksbyuser';
        return this.http.get(`${this.rootUrl}${route}?username=${username}`, this.httpOptions);
    }
}
TaskManagerService.ɵfac = function TaskManagerService_Factory(t) { return new (t || TaskManagerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TaskManagerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TaskManagerService, factory: TaskManagerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskManagerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class UserService {
    constructor(http) {
        this.http = http;
        this.rootUrl = 'https://localhost:44376';
    }
    // Отправляет post запрос на сервер для регистрации нового пользователя
    registerUser(user) {
        return this.http.post(this.rootUrl + '', user);
    }
    // Отправляет post запрос для аутентификации существующего пользователя
    userAuthentication(accountModel) {
        const data = `username=${accountModel.UserName}&password=${accountModel.Password}&grant_type=password`;
        const reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
        return this.http.post(`${this.rootUrl}/token`, data, { headers: reqHeader });
    }
    getLoginOfUsers() {
        const route = '/user/getusers';
        return this.http.get(`${this.rootUrl}${route}`);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\GitHub\_NET-project\frontend-tracking-system\Gates\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
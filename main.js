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











// Настройки роутинга.
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
            { path: 'personal', component: _components_main_personal_personal_component__WEBPACK_IMPORTED_MODULE_0__["PersonalComponent"] },
        ],
    },
];
// Роутинг.
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
                styleUrls: ['./app.component.scss'],
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
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_main_user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/main/user/sign-up/sign-up.component */ "./src/app/components/main/user/sign-up/sign-up.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _components_main_user_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/main/user/user.component */ "./src/app/components/main/user/user.component.ts");
/* harmony import */ var _components_main_user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/main/user/sign-in/sign-in.component */ "./src/app/components/main/user/sign-in/sign-in.component.ts");
/* harmony import */ var _authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./authGuard/auth.guard */ "./src/app/authGuard/auth.guard.ts");
/* harmony import */ var _authGuard_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./authGuard/auth.interceptor */ "./src/app/authGuard/auth.interceptor.ts");
/* harmony import */ var _components_task_boardTask_boardTask_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/task/boardTask/boardTask.component */ "./src/app/components/task/boardTask/boardTask.component.ts");
/* harmony import */ var _components_task_task_task_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/task/task/task.component */ "./src/app/components/task/task/task.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_main_main_main_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/main/_main/main.component */ "./src/app/components/main/_main/main.component.ts");
/* harmony import */ var _components_main_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/main/main-menu/main-menu.component */ "./src/app/components/main/main-menu/main-menu.component.ts");
/* harmony import */ var _components_main_board_board_board_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/main/board/_board/board.component */ "./src/app/components/main/board/_board/board.component.ts");
/* harmony import */ var _components_main_personal_personal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/main/personal/personal.component */ "./src/app/components/main/personal/personal.component.ts");
/* harmony import */ var _components_task_user_task_user_task_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/task/user-task/user-task.component */ "./src/app/components/task/user-task/user-task.component.ts");
/* harmony import */ var _components_task_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/task/task-form/task-form.component */ "./src/app/components/task/task-form/task-form.component.ts");
/* harmony import */ var _components_user_project_user_project_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/user-project/user-project.component */ "./src/app/components/user-project/user-project.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/comment/comment.component */ "./src/app/components/comment/comment.component.ts");































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"],
        _authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
            useClass: _authGuard_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__["AuthInterceptor"],
            multi: true,
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__["BrowserAnimationsModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
        _components_main_user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_11__["SignUpComponent"],
        _components_main_user_user_component__WEBPACK_IMPORTED_MODULE_13__["UserComponent"],
        _components_main_user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_14__["SignInComponent"],
        _components_task_boardTask_boardTask_component__WEBPACK_IMPORTED_MODULE_17__["BoardTaskComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"],
        _components_main_main_main_component__WEBPACK_IMPORTED_MODULE_21__["MainComponent"],
        _components_main_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_22__["MainMenuComponent"],
        _components_main_board_board_board_component__WEBPACK_IMPORTED_MODULE_23__["BoardComponent"],
        _components_task_task_task_component__WEBPACK_IMPORTED_MODULE_18__["TaskComponent"],
        _components_main_personal_personal_component__WEBPACK_IMPORTED_MODULE_24__["PersonalComponent"],
        _components_task_user_task_user_task_component__WEBPACK_IMPORTED_MODULE_25__["UserTaskComponent"],
        _components_task_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_26__["TaskFormComponent"],
        _services_enum_to_arr_pipe__WEBPACK_IMPORTED_MODULE_0__["EnumToArrayPipe"],
        _components_user_project_user_project_component__WEBPACK_IMPORTED_MODULE_27__["UserProjectComponent"],
        _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_29__["CommentComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__["BrowserAnimationsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                    _components_main_user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_11__["SignUpComponent"],
                    _components_main_user_user_component__WEBPACK_IMPORTED_MODULE_13__["UserComponent"],
                    _components_main_user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_14__["SignInComponent"],
                    _components_task_boardTask_boardTask_component__WEBPACK_IMPORTED_MODULE_17__["BoardTaskComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"],
                    _components_main_main_main_component__WEBPACK_IMPORTED_MODULE_21__["MainComponent"],
                    _components_main_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_22__["MainMenuComponent"],
                    _components_main_board_board_board_component__WEBPACK_IMPORTED_MODULE_23__["BoardComponent"],
                    _components_task_task_task_component__WEBPACK_IMPORTED_MODULE_18__["TaskComponent"],
                    _components_main_personal_personal_component__WEBPACK_IMPORTED_MODULE_24__["PersonalComponent"],
                    _components_task_user_task_user_task_component__WEBPACK_IMPORTED_MODULE_25__["UserTaskComponent"],
                    _components_task_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_26__["TaskFormComponent"],
                    _services_enum_to_arr_pipe__WEBPACK_IMPORTED_MODULE_0__["EnumToArrayPipe"],
                    _components_user_project_user_project_component__WEBPACK_IMPORTED_MODULE_27__["UserProjectComponent"],
                    _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_29__["CommentComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__["BrowserAnimationsModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"]
                ],
                providers: [
                    _services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"],
                    _authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                        useClass: _authGuard_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__["AuthInterceptor"],
                        multi: true,
                    },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
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



// Сервис представляет защиту доступа к сайту.
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



// Перехватчик запросов.
class AuthInterceptor {
    constructor(router) {
        this.router = router;
    }
    // Перехватывает запросы пользователя, проверяя на наличие токена.
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

/***/ "./src/app/classes/project.model.ts":
/*!******************************************!*\
  !*** ./src/app/classes/project.model.ts ***!
  \******************************************/
/*! exports provided: ProjectModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectModel", function() { return ProjectModel; });
// Модель проект
class ProjectModel {
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
// Модель пользователь
class UserModel {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/components/comment/comment.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/comment/comment.component.ts ***!
  \*********************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_comment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/comment.service */ "./src/app/services/comment.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




// Компонет комментарии задачи.
class CommentComponent {
    constructor(commentService) {
        this.commentService = commentService;
    }
    ngOnInit() {
        const userName = localStorage.getItem('username');
        this.showControls = userName === this.comment.Login;
    }
}
CommentComponent.ɵfac = function CommentComponent_Factory(t) { return new (t || CommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_comment_service__WEBPACK_IMPORTED_MODULE_1__["CommentService"])); };
CommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentComponent, selectors: [["app-comment"]], inputs: { comment: "comment" }, decls: 11, vars: 6, consts: [[1, "comment-container"], [1, "author"], [1, "content"], [1, "date"], [1, "comment-controls"], [1, "icon", "edit"], [1, "icon", "delete"]], template: function CommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.comment.Login);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.comment.Content);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 3, ctx.comment.CreateDate, "mediumDate"));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".comment-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template: 1fr 30px/90px 1fr;\n  width: 580px;\n  height: auto;\n  max-height: 200px;\n  background-color: #d17c7c;\n  border-radius: 10px;\n}\n\n.content[_ngcontent-%COMP%] {\n  width: 480px;\n  height: auto;\n  min-height: 30px;\n  max-height: 100px;\n  margin: 5px;\n  padding: 5px;\n  resize: none;\n  background-color: #b4b4b4;\n  border: 1px solid #2b2b2b;\n  border-radius: 5px;\n}\n\n.date[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 20px;\n}\n\n.comment-controls[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 30px;\n  height: 20px;\n  border: 1px solid black;\n  cursor: pointer;\n}\n\n.edit[_ngcontent-%COMP%] {\n  background-image: url('comment_edit.svg');\n}\n\n.delete[_ngcontent-%COMP%] {\n  background-image: url('comment_delete.svg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UseUNBQUE7QUFDRjs7QUFFQTtFQUNFLDJDQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbW1lbnQvY29tbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21tZW50LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlOiAxZnIgMzBweCAvIDkwcHggMWZyO1xyXG4gIHdpZHRoOiA1ODBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxN2M3YztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgd2lkdGg6IDQ4MHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtaW4taGVpZ2h0OiAzMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICByZXNpemU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I0YjRiNDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMmIyYjJiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmRhdGUge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jb21tZW50LWNvbnRyb2xzIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmVkaXQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9pY29uL2NvbW1lbnRfZWRpdC5zdmdcIik7XHJcbn1cclxuXHJcbi5kZWxldGUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9pY29uL2NvbW1lbnRfZGVsZXRlLnN2Z1wiKTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comment',
                templateUrl: './comment.component.html',
                styleUrls: ['./comment.component.scss']
            }]
    }], function () { return [{ type: _services_comment_service__WEBPACK_IMPORTED_MODULE_1__["CommentService"] }]; }, { comment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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


// Компонент footer
class FooterComponent {
    constructor() { }
    ngOnInit() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 1, vars: 0, consts: [[1, "footer", "wrapper"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "footer", 0);
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  height: 30px;\n  background-color: #694646;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL19jb2xvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtFQUNBLHlCQ0ZhO0FEQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29sb3JcIjtcclxuXHJcbi5mb290ZXIge1xyXG4gIGhlaWdodDogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9vdGVyLWNvbG9yO1xyXG59XHJcbiIsIiRoZWFkZXItY29sb3I6ICM1NzU3NTc7XHJcbiRoZWFkZXItYm9yZGVyLWNvbG9yOiAjYThhOGE4O1xyXG4kZm9vdGVyLWNvbG9yOiAjNjk0NjQ2O1xyXG4kbWFpbi1tZW51LWNvbG9yOiAjM2I1MGIxO1xyXG4kbWFpbi1tZW51LWJ1dHRvbi1jb2xvcjogIzE5MmM4NTtcclxuJHRpdGxlLXRleHQtY29sb3I6ICNjNWM3Y2M7XHJcbiR0YXNrLWRldGFpbC1jb2xvcjogI2I2YjZiNjtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss'],
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


// Компонент header
class HeaderComponent {
    constructor() { }
    ngOnInit() { }
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
    } }, styles: [".header[_ngcontent-%COMP%] {\n  height: 30px;\n  background-color: #575757;\n  border-bottom: 4px solid #a8a8a8;\n}\n\n.header-title[_ngcontent-%COMP%] {\n  margin: auto 40px;\n  color: #c5c7cc;\n  letter-spacing: 1rem;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL19jb2xvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtFQUNBLHlCQ0phO0VES2IsZ0NBQUE7QUFERjs7QUFJQTtFQUNFLGlCQUFBO0VBQ0EsY0NMaUI7RURNakIsb0JBQUE7RUFDQSx5QkFBQTtBQURGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9yXCI7XHJcblxyXG4uaGVhZGVyIHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGhlYWRlci1jb2xvcjtcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgJGhlYWRlci1ib3JkZXItY29sb3I7XHJcbn1cclxuXHJcbi5oZWFkZXItdGl0bGUge1xyXG4gIG1hcmdpbjogYXV0byA0MHB4O1xyXG4gIGNvbG9yOiAkdGl0bGUtdGV4dC1jb2xvcjtcclxuICBsZXR0ZXItc3BhY2luZzogMXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbiIsIiRoZWFkZXItY29sb3I6ICM1NzU3NTc7XHJcbiRoZWFkZXItYm9yZGVyLWNvbG9yOiAjYThhOGE4O1xyXG4kZm9vdGVyLWNvbG9yOiAjNjk0NjQ2O1xyXG4kbWFpbi1tZW51LWNvbG9yOiAjM2I1MGIxO1xyXG4kbWFpbi1tZW51LWJ1dHRvbi1jb2xvcjogIzE5MmM4NTtcclxuJHRpdGxlLXRleHQtY29sb3I6ICNjNWM3Y2M7XHJcbiR0YXNrLWRldGFpbC1jb2xvcjogI2I2YjZiNjtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



// Основной компонент.
class MainComponent {
    constructor() { }
    ngOnInit() { }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 3, vars: 0, consts: [[1, "main"], [1, "main-body"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".main[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  flex-direction: row;\n  height: 90vh;\n  min-height: 500px;\n}\n\n.main-body[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  width: 1000px;\n}\n\n.task-detail[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.task-form[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.app-task-form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL19tYWluL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4vX21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBoZWlnaHQ6IDkwdmg7XHJcbiAgbWluLWhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbi5tYWluLWJvZHkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICB3aWR0aDogMTAwMHB4O1xyXG59XHJcblxyXG4udGFzay1kZXRhaWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLy8gei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi50YXNrLWZvcm0ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5hcHAtdGFzay1mb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss'],
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _task_task_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../task/task/task.component */ "./src/app/components/task/task/task.component.ts");
/* harmony import */ var _task_boardTask_boardTask_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../task/boardTask/boardTask.component */ "./src/app/components/task/boardTask/boardTask.component.ts");






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
    constructor(taskManagerService) {
        this.taskManagerService = taskManagerService;
        // Массив с задачами.
        this.boardTasks = [];
    }
    // Инициализация компонента.
    ngOnInit() {
        this.showTaskDetail = false;
        // Запрос на получение всех задач.
        this.taskManagerService
            .getBoardTasks()
            .subscribe((data) => {
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
BoardComponent.ɵfac = function BoardComponent_Factory(t) { return new (t || BoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_task_manager_service__WEBPACK_IMPORTED_MODULE_1__["TaskManagerService"])); };
BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardComponent, selectors: [["app-board"]], decls: 7, vars: 2, consts: [[1, "board"], ["class", "task-detail", 3, "task", "close", 4, "ngIf"], [1, "board__filter-bar"], [1, "filter-input"], [1, "task-container"], [3, "boardTask", "taskIdEmitter", 4, "ngFor", "ngForOf"], [1, "task-detail", 3, "task", "close"], [3, "boardTask", "taskIdEmitter"]], template: function BoardComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _task_task_task_component__WEBPACK_IMPORTED_MODULE_3__["TaskComponent"], _task_boardTask_boardTask_component__WEBPACK_IMPORTED_MODULE_4__["BoardTaskComponent"]], styles: [".board[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #d8d8d8;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.board__filter-bar[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\n.filter-input[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 30px;\n  background-color: #525252;\n  border-radius: 20px;\n}\n\n.task-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 1000px;\n  height: 90%;\n  flex-wrap: wrap;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.task-detail[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL2JvYXJkL19ib2FyZC9ib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4vYm9hcmQvX2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvYXJkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDhkODtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmJvYXJkX19maWx0ZXItYmFyIHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLmZpbHRlci1pbnB1dCB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyNTI1MjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4udGFzay1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMDBweDtcclxuICBoZWlnaHQ6IDkwJTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi50YXNrLWRldGFpbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-board',
                templateUrl: './board.component.html',
                styleUrls: ['./board.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_task_manager_service__WEBPACK_IMPORTED_MODULE_1__["TaskManagerService"] }]; }, null); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function MainMenuComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainMenuComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.signOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
// Компонент главное меню.
class MainMenuComponent {
    constructor(router, sharedEventService) {
        this.router = router;
        this.sharedEventService = sharedEventService;
        // Флаг - пользователь залогинен.
        this.isLogged = false;
        // Подписка на событие Клик Sign-in.
        sharedEventService.changeEmitted$.subscribe((logged) => this.signIn(logged));
    }
    // Инициализация компонента.
    ngOnInit() {
        this.isLogged = localStorage.getItem('token') ? true : false;
    }
    // Навигация на доску.
    toBoard() {
        this.router.navigate(['main/board']);
    }
    // Навигация на кабинет.
    toPersonal() {
        this.router.navigate(['main/personal']);
    }
    // Выход пользователя из системы.
    signOut() {
        this.isLogged = false;
        localStorage.clear();
        this.router.navigate(['sign-in']);
    }
    // Вход пользователя в систему.
    signIn(logged) {
        this.isLogged = logged;
    }
}
MainMenuComponent.ɵfac = function MainMenuComponent_Factory(t) { return new (t || MainMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shared_event_service__WEBPACK_IMPORTED_MODULE_2__["SharedEventService"])); };
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".main-menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex-flow: column wrap;\n  justify-content: flex-start;\n  z-index: 50;\n  left: 0px;\n  width: 150px;\n  height: 100%;\n  background-color: #3b50b1;\n}\n\n.main-menu__button[_ngcontent-%COMP%] {\n  position: relative;\n  width: 90px;\n  height: 40px;\n  margin: 10px auto;\n  text-align: center;\n  transition: 0.2s ease-out;\n  border-radius: 2px;\n  cursor: pointer;\n}\n\n.main-menu__button[_ngcontent-%COMP%]:hover {\n  background-color: #192c85;\n}\n\n.main-menu__button__text[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\n.sign[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  margin: auto auto 5px auto;\n  padding: 5px;\n  border: none;\n  background: none;\n  transition: 0.4s;\n  background-image: url('logout.svg');\n  border-radius: 10px;\n  background-size: cover;\n  cursor: pointer;\n}\n\n.sign[_ngcontent-%COMP%]:hover {\n  background-color: #9b9b9b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4tbWVudS9tYWluLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvX2NvbG9yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJDVGdCO0FET2xCOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUtBO0VBQ0UseUJDdkJ1QjtBRHFCekI7O0FBS0E7RUFDRSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUtBO0VBQ0UseUJBQUE7QUFGRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLW1lbnUvbWFpbi1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9yXCI7XHJcblxyXG4ubWFpbi1tZW51IHtcclxuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgei1pbmRleDogNTA7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tbWVudS1jb2xvcjtcclxufVxyXG5cclxuLm1haW4tbWVudV9fYnV0dG9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tYWluLW1lbnVfX2J1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tbWVudS1idXR0b24tY29sb3I7XHJcbn1cclxuXHJcbi5tYWluLW1lbnVfX2J1dHRvbl9fdGV4dCB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5zaWduIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luOiBhdXRvIGF1dG8gNXB4IGF1dG87XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlL2ljb24vbG9nb3V0LnN2Z1wiKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2lnbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzliOWI5YjtcclxufVxyXG4iLCIkaGVhZGVyLWNvbG9yOiAjNTc1NzU3O1xyXG4kaGVhZGVyLWJvcmRlci1jb2xvcjogI2E4YThhODtcclxuJGZvb3Rlci1jb2xvcjogIzY5NDY0NjtcclxuJG1haW4tbWVudS1jb2xvcjogIzNiNTBiMTtcclxuJG1haW4tbWVudS1idXR0b24tY29sb3I6ICMxOTJjODU7XHJcbiR0aXRsZS10ZXh0LWNvbG9yOiAjYzVjN2NjO1xyXG4kdGFzay1kZXRhaWwtY29sb3I6ICNiNmI2YjY7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-menu',
                templateUrl: './main-menu.component.html',
                styleUrls: ['./main-menu.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_shared_event_service__WEBPACK_IMPORTED_MODULE_2__["SharedEventService"] }]; }, null); })();


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
/* harmony import */ var _classes_project_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../classes/project.model */ "./src/app/classes/project.model.ts");
/* harmony import */ var _classes_task_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../classes/task.model */ "./src/app/classes/task.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_task_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/task-manager.service */ "./src/app/services/task-manager.service.ts");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _task_task_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../task/task/task.component */ "./src/app/components/task/task/task.component.ts");
/* harmony import */ var _task_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../task/task-form/task-form.component */ "./src/app/components/task/task-form/task-form.component.ts");
/* harmony import */ var _task_user_task_user_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../task/user-task/user-task.component */ "./src/app/components/task/user-task/user-task.component.ts");
/* harmony import */ var _user_project_user_project_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../user-project/user-project.component */ "./src/app/components/user-project/user-project.component.ts");













function PersonalComponent_app_task_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-task", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("close", function PersonalComponent_app_task_1_Template_app_task_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.closeTaskDetail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("task", ctx_r0.task);
} }
function PersonalComponent_app_task_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-task-form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("close", function PersonalComponent_app_task_form_2_Template_app_task_form_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.closeTaskForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("changeTask", ctx_r1.task);
} }
function PersonalComponent_app_user_task_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-user-task", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("taskIdEmitter", function PersonalComponent_app_user_task_11_Template_app_user_task_taskIdEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.getTaskById($event); })("updateTaskEmitter", function PersonalComponent_app_user_task_11_Template_app_user_task_updateTaskEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.updateTask($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("task", task_r8);
} }
function PersonalComponent_app_user_project_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-user-project", 18);
} if (rf & 2) {
    const project_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("project", project_r12);
} }
const _c0 = function (a0) { return { show: a0 }; };
// Класс личный кабинет.
class PersonalComponent {
    constructor(taskManagerService, formBuilder, projectService) {
        this.taskManagerService = taskManagerService;
        this.formBuilder = formBuilder;
        this.projectService = projectService;
        // Массив проектов пользователя.
        this.projects = [];
        // Массив задач пользователя.
        this.userTasks = [];
    }
    // Инициализация компонента.
    ngOnInit() {
        this.initForm();
        this.showTaskForm = false;
        this.showTaskDetail = false;
        this.showInput = false;
        this.project = new _classes_project_model__WEBPACK_IMPORTED_MODULE_0__["ProjectModel"]();
        // Извлечение логина.
        this.userName = localStorage.getItem('username');
        this.getProjects(this.userName);
    }
    // Инициализация формы.
    initForm() {
        this.projectFormGroup = this.formBuilder.group({
            title: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-Zа-яА-Я0-9_]+'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(40),
                ],
            ],
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
    // Запрос на получение всех проектов пользователя.
    getProjects(userName) {
        this.projectService.getAccountProjects(userName).subscribe((data) => {
            if (data) {
                this.projects = data;
            }
            this.getTasks(this.userName);
        }, (error) => {
            console.log('error');
        });
    }
    // Запрос на получение всех задач пользователя.
    getTasks(userName) {
        // Получение задач пользователя по логину.
        this.taskManagerService
            .getUserTasks(userName)
            .subscribe((data) => {
            if (data) {
                this.userTasks = data;
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
        this.task = new _classes_task_model__WEBPACK_IMPORTED_MODULE_1__["TaskModel"]();
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
    createProject() {
        this.showInput = !this.showInput;
    }
    // Отправка формы проекта.
    onSubmit() {
        this.showInput = false;
        this.project.AuthorId = this.userName;
        this.project.Title = this.projectFormGroup.controls.title.value;
        this.projectService.addProject(this.project).subscribe((data) => {
            if (data) {
                this.getProjects(this.userName);
            }
        });
    }
}
PersonalComponent.ɵfac = function PersonalComponent_Factory(t) { return new (t || PersonalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_task_manager_service__WEBPACK_IMPORTED_MODULE_4__["TaskManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"])); };
PersonalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PersonalComponent, selectors: [["app-personal"]], decls: 23, vars: 8, consts: [[1, "personal-container"], ["class", "task-detail", 3, "task", "close", 4, "ngIf"], ["class", "task-form", 3, "changeTask", "close", 4, "ngIf"], [1, "personal-task"], [1, "title"], [1, "title-text"], [1, "task-control-container"], [1, "task-control", 3, "click"], [1, "task-container"], [3, "task", "taskIdEmitter", "updateTaskEmitter", 4, "ngFor", "ngForOf"], [1, "personal-project"], [1, "project-input-container", 3, "formGroup", "ngClass", "submit"], ["formControlName", "title", "placeholder", "Please enter project name", 1, "project-input"], [1, "personal-project-container"], [3, "project", 4, "ngFor", "ngForOf"], [1, "task-detail", 3, "task", "close"], [1, "task-form", 3, "changeTask", "close"], [3, "task", "taskIdEmitter", "updateTaskEmitter"], [3, "project"]], template: function PersonalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PersonalComponent_app_task_1_Template, 1, 1, "app-task", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PersonalComponent_app_task_form_2_Template, 1, 1, "app-task-form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "My tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PersonalComponent_Template_button_click_8_listener() { return ctx.createTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Create task");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, PersonalComponent_app_user_task_11_Template, 1, 1, "app-user-task", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "My projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PersonalComponent_Template_button_click_17_listener() { return ctx.createProject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Create project ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function PersonalComponent_Template_form_submit_19_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, PersonalComponent_app_user_project_22_Template, 1, 1, "app-user-project", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showTaskDetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showTaskForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.userTasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.projectFormGroup)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, ctx.showInput));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _task_task_task_component__WEBPACK_IMPORTED_MODULE_7__["TaskComponent"], _task_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_8__["TaskFormComponent"], _task_user_task_user_task_component__WEBPACK_IMPORTED_MODULE_9__["UserTaskComponent"], _user_project_user_project_component__WEBPACK_IMPORTED_MODULE_10__["UserProjectComponent"]], styles: [".personal-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  width: 100%;\n  height: 100%;\n  background-color: #ebebeb;\n  overflow: hidden;\n}\n\n.task-control-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.personal-task[_ngcontent-%COMP%] {\n  width: 850px;\n  height: 100%;\n  background-color: #d1d1d1;\n}\n\n.personal-project[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  width: 400px;\n  height: 100%;\n  background-color: #d1d1d1;\n}\n\n.task-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  width: 840px;\n  height: 520px;\n  padding: 10px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.task-control[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 50px;\n  margin: 5px;\n  background-color: #cecece;\n  border-radius: 5px;\n}\n\n.task-control[_ngcontent-%COMP%]:hover {\n  background-color: #8f8f8f;\n}\n\n.task-form[_ngcontent-%COMP%], .task-detail[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 850px;\n  height: 100%;\n  z-index: 10;\n}\n\n.title[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  margin: 5px;\n  text-align: center;\n}\n\n.title-text[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  text-transform: uppercase;\n}\n\n.project-input-container[_ngcontent-%COMP%] {\n  margin: auto auto auto 5px;\n  transition: 0.4s;\n  transform: scaleX(0);\n  transform-origin: left;\n}\n\n.project-input[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 30px;\n  border: 2px solid #272727;\n  border-radius: 5px;\n}\n\n.project-input[_ngcontent-%COMP%]::placeholder {\n  color: #4d4d4d;\n}\n\n.show[_ngcontent-%COMP%] {\n  transform: scaleX(1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL3BlcnNvbmFsL3BlcnNvbmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBOztFQUVFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9wZXJzb25hbC9wZXJzb25hbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wZXJzb25hbC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnRhc2stY29udHJvbC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5wZXJzb25hbC10YXNrIHtcclxuICB3aWR0aDogODUwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWQxZDE7XHJcbn1cclxuXHJcbi5wZXJzb25hbC1wcm9qZWN0IHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxZDFkMTtcclxufVxyXG5cclxuLnRhc2stY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHdpZHRoOiA4NDBweDtcclxuICBoZWlnaHQ6IDUyMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi50YXNrLWNvbnRyb2wge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi50YXNrLWNvbnRyb2w6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZjhmOGY7XHJcbn1cclxuXHJcbi50YXNrLWZvcm0sXHJcbi50YXNrLWRldGFpbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA4NTBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWlucHV0LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiBhdXRvIGF1dG8gYXV0byA1cHg7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG59XHJcblxyXG4ucHJvamVjdC1pbnB1dCB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMjcyNzI3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnByb2plY3QtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogIzRkNGQ0ZDtcclxufVxyXG5cclxuLnNob3cge1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PersonalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-personal',
                templateUrl: './personal.component.html',
                styleUrls: ['./personal.component.scss'],
            }]
    }], function () { return [{ type: _services_task_manager_service__WEBPACK_IMPORTED_MODULE_4__["TaskManagerService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _services_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"] }]; }, null); })();


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
// Компонент авторизации.
class SignInComponent {
    constructor(userService, router, sharedEventService) {
        this.userService = userService;
        this.router = router;
        this.sharedEventService = sharedEventService;
        // Выходное свойство, событие авторизации.
        this.loginEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // Флаг - авторизация не успешна.
        this.isLoginError = false;
        // Аккаунт.
        this.accountModel = new _classes_account_model__WEBPACK_IMPORTED_MODULE_0__["AccountModel"]();
    }
    // Инициализация компонента.
    ngOnInit() { }
    // Отправка формы авторизации.
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Login ");
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
                styleUrls: ['./sign-in.component.scss'],
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
/* harmony import */ var src_app_classes_account_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/account.model */ "./src/app/classes/account.model.ts");
/* harmony import */ var _classes_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../classes/user.model */ "./src/app/classes/user.model.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function SignUpComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F 4 \u0441\u0438\u043C\u0432\u043E\u043B\u0430 \u0438 \u0431\u043E\u043B\u0435\u0435\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignUpComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u0435\u0442 \u0441 \u043F\u0430\u0440\u043E\u043B\u0435\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
// Компонент регистрации пользователя.
class SignUpComponent {
    constructor(userService) {
        this.userService = userService;
        // Пользователь.
        this.user = new _classes_user_model__WEBPACK_IMPORTED_MODULE_2__["UserModel"]();
        // Аккаунт
        this.account = new src_app_classes_account_model__WEBPACK_IMPORTED_MODULE_1__["AccountModel"]();
    }
    // Инициализация компонента.
    ngOnInit() {
        this.resetForm();
        this.buttonName = 'Sign ';
    }
    // Проверяет на пустые поля и соответствие пароля и его подтверждения.
    checkFields() {
        if (this.account.UserName !== '' &&
            this.account.Password !== '' &&
            this.confirmPassword !== '' &&
            // this.user.FirstName !== '' &&
            // this.user.LastName !== '' &&
            this.account.Password === this.confirmPassword) {
            return true;
        }
        return false;
    }
    // Очищает форму.
    resetForm() {
        this.account.UserName = '';
        this.account.Password = '';
        this.user.FirstName = '';
        this.user.LastName = '';
        this.confirmPassword = '';
    }
    // Отправка формы регистрации.
    onSubmit() {
        if (this.checkFields()) {
            this.buttonName = 'Sending Data';
            this.userService.registerUser(this.account).subscribe((data) => {
                // добавить сообщение об успешной регистрации
                this.resetForm();
                alert("Registration success!");
            }, 
            // вывести нормальное сообщение об ошибке
            (error) => {
                this.buttonName = 'Error';
            });
        }
        else {
            this.buttonName = 'Error';
        }
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 21, vars: 7, consts: [[1, "col", "s12", "white"], [1, "row"], [1, "input-field", "col", "s12"], ["type", "text", "name", "Login", "minlength", "3", "required", "", 1, "validate", 3, "ngModel", "ngModelChange"], [1, "input-field", "col", "s6"], ["type", "password", "name", "Password", "minlength", "4", "required", "", 1, "validate", 3, "ngModel", "ngModelChange"], ["class", "wrong", 4, "ngIf"], ["type", "password", "name", "confirmPassword", "required", "", "minlength", "4", 1, "validate", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn-large", "btn-submit", 3, "disabled", "click"], [1, "wrong"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_3_listener($event) { return ctx.account.UserName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignUpComponent_Template_input_ngModelChange_8_listener($event) { return ctx.account.Password = $event; });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_19_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.account.UserName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.account.Password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.account.Password.length < 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.confirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.account.Password !== ctx.confirmPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.checkFields());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.buttonName, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["div.sm-jumbotron[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 2rem;\n  background-color: #38547b;\n  color: #fff;\n  font-size: 2em;\n}\n\nbutton.btn-submit[_ngcontent-%COMP%] {\n  background-color: #385d7b;\n  color: #fff;\n  width: 100%;\n}\n\nbutton.btn-submit[_ngcontent-%COMP%]:focus, button.btn-submit[_ngcontent-%COMP%]:hover {\n  background-color: #477474;\n}\n\ninput.ng-invalid.ng-dirty[_ngcontent-%COMP%] {\n  border-bottom-color: #e91e63 !important;\n  box-shadow: 0 1px 0 0 #e91e63 !important;\n}\n\n.wrong[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 0.7rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL3VzZXIvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0E7O0VBRUUseUJBQUE7QUFFRjs7QUFBQTtFQUNFLHVDQUFBO0VBQ0Esd0NBQUE7QUFHRjs7QUFEQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQUlGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluL3VzZXIvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LnNtLWp1bWJvdHJvbiB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg1NDdiO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcblxyXG5idXR0b24uYnRuLXN1Ym1pdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NWQ3YjtcclxuICBjb2xvcjogI2ZmZjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5idXR0b24uYnRuLXN1Ym1pdDpmb2N1cyxcclxuYnV0dG9uLmJ0bi1zdWJtaXQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3MSwgMTE2LCAxMTYpO1xyXG59XHJcbmlucHV0Lm5nLWludmFsaWQubmctZGlydHkge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNlOTFlNjMgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiAwIDFweCAwIDAgI2U5MWU2MyAhaW1wb3J0YW50O1xyXG59XHJcbi53cm9uZyB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-up',
                templateUrl: './sign-up.component.html',
                styleUrls: ['./sign-up.component.scss'],
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


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



// Компонент контейнер регистрации и авторизации пользователя.
class UserComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        // Выходное свойство - авторизация.
        this.signInEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Выходное свойство - регистрация.
        this.signUpEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    // Инициализация компонента.
    ngOnInit() { }
    // Авторизация.
    SignIn(logged) {
        console.log('user');
    }
    // Регистрация.
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
                styleUrls: ['./user.component.scss'],
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
            console.log(this.boardTask);
        }
    }
    // Метод вызывается по клику на задаче. Отдает в общий сервис id задачи.
    boardTaskOnClick() {
        this.taskIdEmitter.emit(this.boardTask.TaskId);
    }
}
BoardTaskComponent.ɵfac = function BoardTaskComponent_Factory(t) { return new (t || BoardTaskComponent)(); };
BoardTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardTaskComponent, selectors: [["app-board-task"]], inputs: { boardTask: "boardTask" }, outputs: { taskIdEmitter: "taskIdEmitter" }, decls: 18, vars: 10, consts: [[1, "task", 3, "click"], [1, "task__title"], [1, "task__description"], [1, "task__footer"], [1, "task__footer__status"], [1, "task__footer__deadlineDate"], [1, "task__footer__author"]], template: function BoardTaskComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.boardTask.Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.boardTask.Description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.boardTask.Status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 7, ctx.boardTask.DeadlineDate, "mediumDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.author);
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".task[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  width: 300px;\n  height: 200px;\n  margin: 10px;\n  border-radius: 6px;\n  transition: 0.5s;\n  cursor: pointer;\n}\n\n.task[_ngcontent-%COMP%]:hover {\n  box-shadow: 6px 6px #7e7e7e;\n}\n\n.task__description[_ngcontent-%COMP%] {\n  position: relative;\n  width: 250px;\n  height: 80px;\n  margin: 10px auto;\n  overflow: hidden;\n  background-color: #ececec;\n  border-radius: 4px;\n  box-shadow: 2px 2px #4b4b4b;\n}\n\n.task__description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 5px;\n  font-size: 20px;\n  text-align: left;\n  color: #000000;\n}\n\n.task__title[_ngcontent-%COMP%] {\n  position: relative;\n  width: 250px;\n  height: 27px;\n  margin: 5px auto;\n  background-color: #303c72;\n  border-radius: 3px;\n  overflow: hidden;\n  box-shadow: 2px 2px #5c679b;\n}\n\n.task__title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 5px;\n  font-size: 16px;\n  color: #ffffff;\n  text-transform: uppercase;\n  text-align: left;\n}\n\n.task__footer[_ngcontent-%COMP%] {\n  display: flex;\n  width: 270px;\n  height: 50px;\n  margin: 5px auto 10px auto;\n  background-color: #dfdfdf;\n  border: 1px solid #000000;\n  border-radius: 3px;\n  box-shadow: 2px 2px #4b4b4b;\n}\n\n.task__footer__status[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 30px;\n  margin: auto;\n}\n\n.task__footer__status[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 5px;\n  font-size: 16px;\n  text-transform: uppercase;\n  text-align: left;\n}\n\n.task__footer__deadlineDate[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 30px;\n  margin: auto 0;\n}\n\n.task__footer__deadlineDate[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  height: 30px;\n  padding: 5px 0;\n  font-size: 20px;\n  color: #474747;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.task__footer__author[_ngcontent-%COMP%] {\n  display: flex;\n  width: 40px;\n  height: 40px;\n  margin: auto;\n  background-color: #b8432f;\n  border-radius: 30px;\n}\n\n.task__footer__author[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: auto;\n  font-size: 20px;\n}\n\n.task-trivial[_ngcontent-%COMP%] {\n  background-color: rgba(131, 131, 131, 0.7);\n}\n\n.task-minor[_ngcontent-%COMP%] {\n  background-color: rgba(0, 200, 0, 0.7);\n}\n\n.task-major[_ngcontent-%COMP%] {\n  background-color: rgba(50, 50, 250, 0.6);\n}\n\n.task-critical[_ngcontent-%COMP%] {\n  background-color: rgba(250, 150, 30, 0.8);\n}\n\n.task-blocker[_ngcontent-%COMP%] {\n  background-color: rgba(200, 0, 0, 0.7);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YXNrL2JvYXJkVGFzay9ib2FyZFRhc2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUVFLDBDQUFBO0FBQUY7O0FBR0E7RUFFRSxzQ0FBQTtBQURGOztBQUlBO0VBRUUsd0NBQUE7QUFGRjs7QUFLQTtFQUVFLHlDQUFBO0FBSEY7O0FBTUE7RUFFRSxzQ0FBQTtBQUpGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90YXNrL2JvYXJkVGFzay9ib2FyZFRhc2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFzayB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50YXNrOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiA2cHggNnB4ICM3ZTdlN2U7XHJcbn1cclxuXHJcbi50YXNrX19kZXNjcmlwdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAycHggMnB4ICM0YjRiNGI7XHJcbn1cclxuXHJcbi50YXNrX19kZXNjcmlwdGlvbiBwIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi50YXNrX190aXRsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDI3cHg7XHJcbiAgbWFyZ2luOiA1cHggYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzYzcyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggIzVjNjc5YjtcclxufVxyXG5cclxuLnRhc2tfX3RpdGxlIHAge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4udGFza19fZm9vdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAyNzBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luOiA1cHggYXV0byAxMHB4IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZkZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3gtc2hhZG93OiAycHggMnB4ICM0YjRiNGI7XHJcbn1cclxuXHJcbi50YXNrX19mb290ZXJfX3N0YXR1cyB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnRhc2tfX2Zvb3Rlcl9fc3RhdHVzIHAge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4udGFza19fZm9vdGVyX19kZWFkbGluZURhdGUge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luOiBhdXRvIDA7XHJcbn1cclxuXHJcbi50YXNrX19mb290ZXJfX2RlYWRsaW5lRGF0ZSBwIHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgcGFkZGluZzogNXB4IDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjNDc0NzQ3O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udGFza19fZm9vdGVyX19hdXRob3Ige1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjg0MzJmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn1cclxuXHJcbi50YXNrX19mb290ZXJfX2F1dGhvciBwIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4udGFzay10cml2aWFsIHtcclxuICAvLyDRgdC10YDRi9C5XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzEsIDEzMSwgMTMxLCAwLjcpO1xyXG59XHJcblxyXG4udGFzay1taW5vciB7XHJcbiAgLy8g0LfQtdC70LXQvdGL0LlcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIwMCwgMCwgMC43KTtcclxufVxyXG5cclxuLnRhc2stbWFqb3Ige1xyXG4gIC8vINGB0LjQvdC40LlcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUwLCA1MCwgMjUwLCAwLjYpO1xyXG59XHJcblxyXG4udGFzay1jcml0aWNhbCB7XHJcbiAgLy8g0L7RgNCw0L3QttC10LLRi9C5XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDE1MCwgMzAsIDAuOCk7XHJcbn1cclxuXHJcbi50YXNrLWJsb2NrZXIge1xyXG4gIC8vINC60YDQsNGB0L3Ri9C5XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDAsIDAsIDAuNyk7XHJcbn1cclxuIl19 */"] });
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
/* harmony import */ var _classes_project_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../classes/project.model */ "./src/app/classes/project.model.ts");
/* harmony import */ var _classes_task_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../classes/task.model */ "./src/app/classes/task.model.ts");
/* harmony import */ var _enums_priority_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../enums/priority.enum */ "./src/app/enums/priority.enum.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_task_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/task-manager.service */ "./src/app/services/task-manager.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _services_enum_to_arr_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/enum-to-arr.pipe */ "./src/app/services/enum-to-arr.pipe.ts");















function TaskFormComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TaskFormComponent_li_6_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const u_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.setUser(u_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const u_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", u_r4, " ");
} }
function TaskFormComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TaskFormComponent_li_11_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const p_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.setProject(p_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", p_r7.Title, " ");
} }
function TaskFormComponent_li_22_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TaskFormComponent_li_22_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const p_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.pickPriority(p_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", p_r10, " ");
} }
const _c0 = function (a0) { return { hide: a0 }; };
// Компонент - форма для ввода параметров задачи.
class TaskFormComponent {
    constructor(formBuilder, taskManager, userService, projectService) {
        this.formBuilder = formBuilder;
        this.taskManager = taskManager;
        this.userService = userService;
        this.projectService = projectService;
        // Выходное свойство - закрытие окна.
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        // Поле для выпадающего списка Priority.
        this.priority = _enums_priority_enum__WEBPACK_IMPORTED_MODULE_2__["Priority"];
        // Поле для заполнения данными при создании задачи.
        this.task = new _classes_task_model__WEBPACK_IMPORTED_MODULE_1__["TaskModel"]();
        // Выбранный проект.
        this.project = new _classes_project_model__WEBPACK_IMPORTED_MODULE_0__["ProjectModel"]();
    }
    // Инициализация компонента.
    ngOnInit() {
        this.hideProjectMenu = true;
        this.hideUserMenu = true;
        // this.project.Title = 'Project';
        this.readonly = false;
        this.priorityText = this.task.Priority;
        this.initForm();
    }
    // Инициализация формы.
    initForm() {
        this.taskFormGroup = this.formBuilder.group({
            title: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Zа-яА-Я0-9]+'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20),
                ],
            ],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(200)]],
            executor: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            project: ['', []],
            deadlineDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            priority: ['', []],
        });
        const controls = this.taskFormGroup.controls;
        if (this.changeTask.TaskId) {
            this.readonly = true;
            this.priorityText = this.changeTask.Priority;
            controls.title.setValue(this.changeTask.Title);
            controls.description.setValue(this.changeTask.Description);
            controls.executor.setValue(this.changeTask.ExecutorId);
            controls.priority.setValue(this.changeTask.Priority);
            controls.deadlineDate.setValue(this.changeTask.DeadlineDate);
        }
    }
    // Отправка задачи на сервер.
    onSubmit() {
        const controls = this.taskFormGroup.controls;
        this.task.TaskId = this.changeTask.TaskId;
        this.task.AuthorId = localStorage.getItem('username');
        this.task.Title = controls.title.value;
        this.task.Description = controls.description.value;
        this.task.DeadlineDate = controls.deadlineDate.value;
        this.task.ExecutorId = controls.executor.value || this.task.AuthorId;
        this.task.Priority = this.priorityText;
        this.task.ProjectId = this.project.ProjectId;
        console.log(this.task);
        if (this.changeTask.TaskId) {
            this.taskManager.changeTask(this.task).subscribe((data) => {
                if (data) {
                    let project = this.taskFormGroup.controls.project;
                    if (project.value) {
                        this.projectService
                            .addTaskToProject(this.changeTask.TaskId, this.project.ProjectId)
                            .subscribe((data) => {
                            if (data) {
                                alert("Task changed sucessfull");
                            }
                        });
                    }
                }
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
    // Получение списка пользователей.
    getUsers() {
        this.hideUserMenu = false;
        this.userService.getUsers().subscribe((data) => {
            if (data) {
                this.users = data;
            }
        });
    }
    // Выбор пользователя.
    setUser(user) {
        const userInput = this.taskFormGroup.controls.executor;
        userInput.setValue(user);
        this.hideUserMenu = true;
    }
    // Получение всех проектов
    getProjects() {
        this.hideProjectMenu = false;
        // Получение проектов если они еще не получены.
        if (!this.projects) {
            this.projectService.getAllProjects().subscribe((data) => {
                if (data) {
                    this.projects = data;
                }
            }, (error) => {
                console.log('error get all projects');
            });
        }
    }
    // Выбор проекта.
    setProject(project) {
        const projectInput = this.taskFormGroup.controls.project;
        projectInput.setValue(project.Title);
        this.project = project;
        this.hideProjectMenu = true;
    }
    // Выбор none в графе проект.
    setNoneProject() {
        this.hideProjectMenu = true;
        this.taskFormGroup.controls.project.setValue(null);
    }
    // Закрытие окна.
    closeForm() {
        this.close.emit();
    }
}
TaskFormComponent.ɵfac = function TaskFormComponent_Factory(t) { return new (t || TaskFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_task_manager_service__WEBPACK_IMPORTED_MODULE_5__["TaskManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_project_service__WEBPACK_IMPORTED_MODULE_7__["ProjectService"])); };
TaskFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TaskFormComponent, selectors: [["app-task-form"]], inputs: { parenTaskId: "parenTaskId", changeTask: "changeTask" }, outputs: { close: "close" }, decls: 28, vars: 17, consts: [[1, "task-form-wrapper"], ["action", "#", "method", "POST", 1, "task-form", 3, "formGroup", "submit"], ["formControlName", "title", "placeholder", "Title", 1, "task-form-input", 3, "readonly"], ["formControlName", "description", "placeholder", "Description", 1, "task-form-input", "description", 3, "readonly"], ["formControlName", "executor", "placeholder", "Executor", "readonly", "", 1, "task-form-input", "drop-input", 3, "click"], [1, "drop-down-list", "user-list", 3, "ngClass"], ["class", "drop-menu", 3, "click", 4, "ngFor", "ngForOf"], ["formControlName", "project", "placeholder", "Project", "readonly", "", 1, "task-form-input", "drop-input", 3, "click"], [1, "drop-down-list", "project-list", 3, "ngClass"], [1, "drop-menu", 3, "click"], ["appearance", "fill", 1, "datepicker-field"], [1, "datepicker-label"], ["matInput", "", "formControlName", "deadlineDate", "readonly", "", 1, "datepicker-input", 3, "matDatepicker"], ["matSuffix", "", 1, "datepicker-toggle", 3, "for"], ["picker", ""], ["formControlName", "priority", 1, "hide"], [1, "task-form-list"], ["class", "list-option", 3, "click", 4, "ngFor", "ngForOf"], [1, "button-container"], ["type", "submit", "value", "Submit", 1, "button"], ["type", "button", 1, "button", 3, "click"], [1, "list-option", 3, "click"]], template: function TaskFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function TaskFormComponent_Template_form_submit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TaskFormComponent_Template_input_click_4_listener() { return ctx.getUsers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, TaskFormComponent_li_6_Template, 2, 1, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TaskFormComponent_Template_input_click_7_listener() { return ctx.getProjects(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TaskFormComponent_Template_li_click_9_listener() { return ctx.setNoneProject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, TaskFormComponent_li_11_Template, 2, 1, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Deadline date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "mat-datepicker-toggle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "mat-datepicker", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, TaskFormComponent_li_22_Template, 2, 1, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "enumToArray");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TaskFormComponent_Template_button_click_26_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.taskFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", ctx.readonly);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c0, ctx.hideUserMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](15, _c0, ctx.hideProjectMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.priorityText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 11, ctx.priority));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepicker"]], pipes: [_services_enum_to_arr_pipe__WEBPACK_IMPORTED_MODULE_12__["EnumToArrayPipe"]], styles: [".task-form-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(85, 85, 85, 0.2);\n}\n\n.task-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n  margin: auto;\n  width: 600px;\n  height: 400px;\n  color: #d8d8d8;\n  background-color: #575757;\n  border-radius: 10px;\n  box-shadow: 2px 2px #414141;\n}\n\n.task-form-input[_ngcontent-%COMP%] {\n  position: relative;\n  height: 30px;\n  width: 550px;\n  margin: 5px auto;\n  font-size: 1rem;\n}\n\n.description[_ngcontent-%COMP%] {\n  height: 90px;\n  resize: none;\n}\n\n.project-input-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 550px;\n  height: 30px;\n}\n\n.drop-down-list[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 400px;\n  height: auto;\n  min-height: 30px;\n  max-height: 105px;\n  margin-left: 25px;\n  cursor: pointer;\n  overflow: auto;\n}\n\n.project-list[_ngcontent-%COMP%] {\n  top: 237px;\n}\n\n.user-list[_ngcontent-%COMP%] {\n  top: 190px;\n}\n\n.drop-menu[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  width: 100%;\n  height: 30px;\n  color: #555555;\n  background-color: #b3bdd3;\n}\n\n.drop-input[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.drop-menu[_ngcontent-%COMP%]:hover {\n  background-color: #8b8b8b;\n}\n\n.task-form-list[_ngcontent-%COMP%] {\n  position: relative;\n  height: 30px;\n  width: 550px;\n  margin: 5px auto;\n  font-size: 1rem;\n  list-style: none;\n  color: inherit;\n  cursor: pointer;\n}\n\n.list-option[_ngcontent-%COMP%] {\n  position: absolute;\n  display: none;\n  width: 200px;\n  height: 30px;\n  background-color: #caa9a9;\n  cursor: pointer;\n}\n\n.task-form-list[_ngcontent-%COMP%]:hover   .list-option[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  z-index: 10;\n}\n\n.list-option[_ngcontent-%COMP%]:hover {\n  background-color: #414141;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  margin: 5px auto;\n}\n\n.button[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 30px;\n  margin: 5px;\n  outline: none;\n  border: 1px solid #1f1f1f;\n  border-radius: 3px;\n  background-color: #a5a5a5;\n  transition: 0.3s;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  background-color: #414141;\n}\n\n.button[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\ninput[readonly][_ngcontent-%COMP%]:not(.drop-input, .datepicker-input)[_ngcontent-%COMP%], textarea[readonly][_ngcontent-%COMP%] {\n  background-color: #b3bdd3;\n}\n\n.datepicker-field[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 55px;\n  margin-left: 15px;\n  overflow: hidden;\n  background-color: #575757;\n}\n\n.datepicker-label[_ngcontent-%COMP%] {\n  height: 20px;\n  font-size: 1rem;\n}\n\n.datepicker-input[_ngcontent-%COMP%] {\n  height: 20px;\n}\n\n.datepicker-toggle[_ngcontent-%COMP%] {\n  position: relative;\n  top: -10px;\n  height: 20px;\n}\n\n.datepicker-toggle[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YXNrL3Rhc2stZm9ybS90YXNrLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FsQlc7RUFtQlgseUJBcEJXO0VBcUJYLG1CQUFBO0VBQ0EsMkJBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFIRjs7QUFNQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFIRjs7QUFNQTtFQUNFLFVBQUE7QUFIRjs7QUFNQTtFQUNFLFVBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FsRWdCO0VBbUVoQix5QkFBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtBQUhGOztBQU1BO0VBQ0UseUJBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUhGOztBQU1BO0VBQ0UseUJBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLHlCQUFBO0FBSEY7O0FBTUE7RUFDRSxzQkFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtBQUhGOztBQU1BOztFQUVFLHlCQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFuSlc7QUFnSmI7O0FBTUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUhGOztBQU1BO0VBQ0UsWUFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7QUFIRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFzay90YXNrLWZvcm0vdGFzay1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZvcm0tY29sb3I6IHJnYmEoJGNvbG9yOiByZ2IoODcsIDg3LCA4NyksICRhbHBoYTogMSk7XHJcbiR0ZXh0LWNvbG9yOiAjZDhkOGQ4O1xyXG4kZHJvcC10ZXh0LWNvbG9yOiAjNTU1NTU1O1xyXG5cclxuLnRhc2stZm9ybS13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6IHJnYig4NSwgODUsIDg1KSwgJGFscGhhOiAwLjIpO1xyXG59XHJcblxyXG4udGFzay1mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiA2MDBweDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9ybS1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggIzQxNDE0MTtcclxufVxyXG5cclxuLnRhc2stZm9ybS1pbnB1dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogNTUwcHg7XHJcbiAgbWFyZ2luOiA1cHggYXV0bztcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIHJlc2l6ZTogbm9uZTtcclxufVxyXG5cclxuLnByb2plY3QtaW5wdXQtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDU1MHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmRyb3AtZG93bi1saXN0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtaW4taGVpZ2h0OiAzMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDEwNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLnByb2plY3QtbGlzdCB7XHJcbiAgdG9wOiAyMzdweDtcclxufVxyXG5cclxuLnVzZXItbGlzdCB7XHJcbiAgdG9wOiAxOTBweDtcclxufVxyXG5cclxuLmRyb3AtbWVudSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBjb2xvcjogJGRyb3AtdGV4dC1jb2xvcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNiZGQzO1xyXG59XHJcblxyXG4uZHJvcC1pbnB1dCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZHJvcC1tZW51OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCAxMzksIDEzOSk7XHJcbn1cclxuXHJcbi50YXNrLWZvcm0tbGlzdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogNTUwcHg7XHJcbiAgbWFyZ2luOiA1cHggYXV0bztcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5saXN0LW9wdGlvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FhOWE5O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRhc2stZm9ybS1saXN0OmhvdmVyIC5saXN0LW9wdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4ubGlzdC1vcHRpb246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTQxNDE7XHJcbn1cclxuXHJcbi5idXR0b24tY29udGFpbmVyIHtcclxuICBtYXJnaW46IDVweCBhdXRvO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzFmMWYxZjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E1YTVhNTtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0MTQxO1xyXG59XHJcblxyXG4uYnV0dG9uOmFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxufVxyXG5cclxuLmhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0W3JlYWRvbmx5XTpub3QoLmRyb3AtaW5wdXQsIC5kYXRlcGlja2VyLWlucHV0KSxcclxudGV4dGFyZWFbcmVhZG9ubHldIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNiZGQzO1xyXG59XHJcblxyXG4uZGF0ZXBpY2tlci1maWVsZCB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogNTVweDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRmb3JtLWNvbG9yO1xyXG59XHJcblxyXG4uZGF0ZXBpY2tlci1sYWJlbCB7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLmRhdGVwaWNrZXItaW5wdXQge1xyXG4gIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmRhdGVwaWNrZXItdG9nZ2xlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtMTBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5kYXRlcGlja2VyLXRvZ2dsZTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TaskFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'app-task-form',
                templateUrl: './task-form.component.html',
                styleUrls: ['./task-form.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: src_app_services_task_manager_service__WEBPACK_IMPORTED_MODULE_5__["TaskManagerService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }, { type: _services_project_service__WEBPACK_IMPORTED_MODULE_7__["ProjectService"] }]; }, { parenTaskId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], changeTask: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
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
/* harmony import */ var _services_comment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/comment.service */ "./src/app/services/comment.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../comment/comment.component */ "./src/app/components/comment/comment.component.ts");





function TaskComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_a_9_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.sendHashTag($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hashTag_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hashTag_r2);
} }
function TaskComponent_div_42_app_comment_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-comment", 24);
} if (rf & 2) {
    const comment_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("comment", comment_r6);
} }
function TaskComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskComponent_div_42_app_comment_1_Template, 1, 1, "app-comment", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.comments);
} }
// Компонент окно с детализацией задачи.
class TaskComponent {
    constructor(commentService) {
        this.commentService = commentService;
        // Выходное свойство, событие закрыть окно.
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Текст кнопки показать/скрыть комментарий.
        this.commentButtonText = "Show comments";
    }
    // Инициализация компонента.
    ngOnInit() {
        this.showComments = false;
        this.project = this.task.ProjectId ? ` : ${this.task.ProjectId}` : '';
    }
    // Метод возвращает комментарии задачи.
    getComments() {
        return;
        if (!this.showComments) {
            this.commentService
                .getTaskComments(this.task.TaskId)
                .subscribe((data) => {
                if (data) {
                    this.comments = data;
                }
            });
        }
        this.showComments = !this.showComments;
        this.commentButtonText = this.showComments ? "Hide comments" : "Show comments";
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
TaskComponent.ɵfac = function TaskComponent_Factory(t) { return new (t || TaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_comment_service__WEBPACK_IMPORTED_MODULE_1__["CommentService"])); };
TaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskComponent, selectors: [["app-task"]], inputs: { task: "task" }, outputs: { close: "close" }, decls: 43, vars: 18, consts: [[1, "task-wrapper"], [1, "task-container"], [1, "task-title"], [1, "task-title__text"], [1, "close", 3, "click"], [1, "task-description"], [1, "task-description__text"], ["class", "task-hash-tags__tags", 3, "click", 4, "ngFor", "ngForOf"], [1, "task-author-executor"], [1, "task-author", "name"], [1, "span"], [1, "task-executor", "name"], [1, "task-status"], [1, "task-status__text"], [1, "task-priority"], [1, "task-priority__text"], [1, "task-date"], [1, "task-create", "date"], [1, "task-deadline", "date"], [1, "task-comments", 3, "click"], ["class", "comment-container", 4, "ngIf"], [1, "task-hash-tags__tags", 3, "click"], [1, "comment-container"], [3, "comment", 4, "ngFor", "ngForOf"], [3, "comment"]], template: function TaskComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, TaskComponent_div_42_Template, 2, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.task.Title, "", ctx.project, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.task.Description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.task.HashTags);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.task.AuthorId, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.task.ExecutorId, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.task.Status, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.task.Priority, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](34, 12, ctx.task.CreateDate, "mediumDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](39, 15, ctx.task.DeadlineDate, "mediumDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.commentButtonText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showComments);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _comment_comment_component__WEBPACK_IMPORTED_MODULE_3__["CommentComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".task-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(85, 85, 85, 0.2);\n}\n\n.task-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  width: 600px;\n  height: 340px;\n  margin: 10px auto 0 auto;\n  background-color: #b6b6b6;\n  border: 1px solid #464646;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.task-title[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 50px;\n  margin: 0 auto;\n  background-color: #677286;\n}\n\n.task-title__text[_ngcontent-%COMP%] {\n  width: 550px;\n  text-align: center;\n  font-size: 1.8rem;\n  line-height: 3rem;\n  letter-spacing: 0.6rem;\n  color: #ffffff;\n  overflow: hidden;\n}\n\n.close[_ngcontent-%COMP%] {\n  margin-left: auto;\n  width: 35px;\n  height: 35px;\n  background-image: url('close.svg');\n  background-repeat: no-repeat;\n  background-size: contain;\n  cursor: pointer;\n}\n\n.task-description[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 140px;\n  margin: 10px auto 5px auto;\n  border: 2px solid #636363;\n  border-radius: 5px;\n}\n\n.task-description__text[_ngcontent-%COMP%] {\n  height: 110px;\n  padding: 5px 10px;\n}\n\n.task-hash-tags[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 20px;\n  margin: 0 auto;\n  overflow: hidden;\n}\n\n.task-hash-tags__tags[_ngcontent-%COMP%] {\n  display: inline;\n  padding: 5px 10px;\n  font-weight: bold;\n  color: #0b47b8;\n  cursor: pointer;\n}\n\n.task-hash-tags__tags[_ngcontent-%COMP%]::before {\n  content: \"#\";\n}\n\n.task-author-executor[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 90%;\n  height: 20px;\n  margin: 0 auto;\n}\n\n.name[_ngcontent-%COMP%] {\n  display: block;\n  width: 300px;\n  height: 30px;\n  text-align: center;\n  font-size: 1rem;\n  font-weight: bold;\n  line-height: 1.2rem;\n  overflow: hidden;\n}\n\n.task-status[_ngcontent-%COMP%] {\n  display: flex;\n  width: 200px;\n  height: 40px;\n}\n\n.task-status__text[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.task-priority[_ngcontent-%COMP%] {\n  display: flex;\n  width: 200px;\n  height: 40px;\n}\n\n.task-priority__text[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.span[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #677286;\n}\n\n.task-date[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 90%;\n  height: 20px;\n  margin: 0 auto;\n}\n\n.date[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.2rem;\n}\n\n.task-comments[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 30px;\n  margin: 10px auto;\n  border-radius: 5px;\n  outline: none;\n  border: 1px solid #464646;\n  cursor: pointer;\n  transition: 0.5s;\n}\n\n.task-comments[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 10px #4058a7;\n}\n\n.task-comments[_ngcontent-%COMP%]:focus {\n  outline: none;\n  background-color: #ffffff;\n}\n\n.task-comments[_ngcontent-%COMP%]:active {\n  outline: none;\n  background-color: #8f8f8f;\n}\n\n.comment-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 600px;\n  height: 270px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  margin: 0 auto auto auto;\n  background-color: #aaaaaa;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YXNrL3Rhc2svdGFzay5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9fY29sb3Iuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkNka0I7RURlbEIseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFJQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7QUFERjs7QUFJQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0NBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQURGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90YXNrL3Rhc2svdGFzay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3Njc3MvY29sb3JcIjtcclxuXHJcbi50YXNrLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogcmdiKDg1LCA4NSwgODUpLCAkYWxwaGE6IDAuMik7XHJcbn1cclxuXHJcbi50YXNrLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIHdpZHRoOiA2MDBweDtcclxuICBoZWlnaHQ6IDM0MHB4O1xyXG4gIG1hcmdpbjogMTBweCBhdXRvIDAgYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGFzay1kZXRhaWwtY29sb3I7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzQ2NDY0NjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi50YXNrLXRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjc3Mjg2O1xyXG59XHJcblxyXG4udGFzay10aXRsZV9fdGV4dCB7XHJcbiAgd2lkdGg6IDU1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxuICBsaW5lLWhlaWdodDogM3JlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMC42cmVtO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jbG9zZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9pY29uL2Nsb3NlLnN2Z1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50YXNrLWRlc2NyaXB0aW9uIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogMTQwcHg7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG8gNXB4IGF1dG87XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzYzNjM2MztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi50YXNrLWRlc2NyaXB0aW9uX190ZXh0IHtcclxuICBoZWlnaHQ6IDExMHB4O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG59XHJcblxyXG4udGFzay1oYXNoLXRhZ3Mge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi50YXNrLWhhc2gtdGFnc19fdGFncyB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMGI0N2I4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRhc2staGFzaC10YWdzX190YWdzOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiI1wiO1xyXG59XHJcblxyXG4udGFzay1hdXRob3ItZXhlY3V0b3Ige1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjJyZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnRhc2stc3RhdHVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi50YXNrLXN0YXR1c19fdGV4dCB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4udGFzay1wcmlvcml0eSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4udGFzay1wcmlvcml0eV9fdGV4dCB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uc3BhbiB7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgY29sb3I6ICM2NzcyODY7XHJcbn1cclxuXHJcbi50YXNrLWRhdGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjJyZW07XHJcbn1cclxuXHJcbi50YXNrLWNvbW1lbnRzIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNDY0NjQ2O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4udGFzay1jb21tZW50czpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICM0MDU4YTc7XHJcbn1cclxuXHJcbi50YXNrLWNvbW1lbnRzOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi50YXNrLWNvbW1lbnRzOmFjdGl2ZSB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGY4ZjhmO1xyXG59XHJcblxyXG4uY29tbWVudC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHdpZHRoOiA2MDBweDtcclxuICBoZWlnaHQ6IDI3MHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhYWFhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuIiwiJGhlYWRlci1jb2xvcjogIzU3NTc1NztcclxuJGhlYWRlci1ib3JkZXItY29sb3I6ICNhOGE4YTg7XHJcbiRmb290ZXItY29sb3I6ICM2OTQ2NDY7XHJcbiRtYWluLW1lbnUtY29sb3I6ICMzYjUwYjE7XHJcbiRtYWluLW1lbnUtYnV0dG9uLWNvbG9yOiAjMTkyYzg1O1xyXG4kdGl0bGUtdGV4dC1jb2xvcjogI2M1YzdjYztcclxuJHRhc2stZGV0YWlsLWNvbG9yOiAjYjZiNmI2O1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-task',
                templateUrl: './task.component.html',
                styleUrls: ['./task.component.scss'],
            }]
    }], function () { return [{ type: _services_comment_service__WEBPACK_IMPORTED_MODULE_1__["CommentService"] }]; }, { task: [{
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





// Компонент задача для вывода в кабинет пользователя.
class UserTaskComponent {
    constructor(taskManagerService) {
        this.taskManagerService = taskManagerService;
        // Входное свойство, задача.
        this.task = new _classes_boardTask_model__WEBPACK_IMPORTED_MODULE_0__["BoardTaskModel"]();
        // Выходное свойство, идентификатор задачи.
        this.taskIdEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // Выходное свойство, изменение задачи.
        this.updateTaskEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    // Инициализация компонента.
    ngOnInit() { }
    // Метод вызывается по клику на задаче. Отдает на выход id задачи.
    onClickUserTask() {
        this.taskIdEmitter.emit(this.task.TaskId);
    }
    // Удаление задачи.
    deleteTask() {
        this.taskManagerService
            .deleteTask(this.task.TaskId)
            .subscribe((data) => { });
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
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".user-task[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.user-task-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 700px;\n  height: 50px;\n  padding: 5px;\n  margin: 5px;\n  border-radius: 5px;\n  background-color: #9e9e9e;\n  box-shadow: 2px 2px #5f5f5f;\n  transition: 0.4s;\n  cursor: pointer;\n}\n\n.user-task-container[_ngcontent-%COMP%]:hover {\n  background-color: #575757;\n}\n\n.title[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n.description[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.status[_ngcontent-%COMP%] {\n  width: 80px;\n}\n\n.priority[_ngcontent-%COMP%] {\n  width: 80px;\n}\n\n.deadline-date[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  height: 36px;\n  align-items: center;\n  background-color: #cccccc;\n  border-radius: 3px;\n  box-shadow: 2px 2px #5f5f5f;\n}\n\n.text[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  color: #383838;\n  font-weight: bold;\n  text-align: center;\n}\n\n.description__text[_ngcontent-%COMP%] {\n  text-align: justify;\n  height: 100%;\n}\n\n.button[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin: auto 5px;\n  background-color: #cccccc;\n  border: none;\n  background: none;\n  outline: none;\n  transition: 0.4s;\n  border-radius: 100%;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 5px #344291;\n}\n\n.button[_ngcontent-%COMP%]:active {\n  transform: scale(0.9);\n}\n\n.change[_ngcontent-%COMP%] {\n  background-image: url('task_edit.svg');\n}\n\n.delete[_ngcontent-%COMP%] {\n  background-image: url('task_delete.svg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YXNrL3VzZXItdGFzay91c2VyLXRhc2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQ0FBQTtBQUNGOztBQUVBO0VBQ0Usd0NBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFzay91c2VyLXRhc2svdXNlci10YXNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItdGFzayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxufVxyXG5cclxuLnVzZXItdGFzay1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDcwMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZTllOWU7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCAjNWY1ZjVmO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udXNlci10YXNrLWNvbnRhaW5lcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3NTc1NztcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICB3aWR0aDogNjBweDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5zdGF0dXMge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG59XHJcblxyXG4ucHJpb3JpdHkge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG59XHJcblxyXG4uZGVhZGxpbmUtZGF0ZSB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMzZweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggIzVmNWY1ZjtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiAjMzgzODM4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uX190ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbjogYXV0byA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjYztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG5cclxuLmJ1dHRvbjpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjMzQ0MjkxO1xyXG59XHJcblxyXG4uYnV0dG9uOmFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xyXG59XHJcblxyXG4uY2hhbmdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2UvaWNvbi90YXNrX2VkaXQuc3ZnXCIpO1xyXG59XHJcblxyXG4uZGVsZXRlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2UvaWNvbi90YXNrX2RlbGV0ZS5zdmdcIik7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserTaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-user-task',
                templateUrl: './user-task.component.html',
                styleUrls: ['./user-task.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_task_manager_service__WEBPACK_IMPORTED_MODULE_2__["TaskManagerService"] }]; }, { task: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], taskIdEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], updateTaskEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/user-project/user-project.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-project/user-project.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProjectComponent", function() { return UserProjectComponent; });
/* harmony import */ var _classes_project_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../classes/project.model */ "./src/app/classes/project.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





// Компонент проект для вывода в кабинет пользователя.
class UserProjectComponent {
    constructor(projectService) {
        this.projectService = projectService;
    }
    // Инициализация компонента.
    ngOnInit() {
        if (!this.project) {
            this.project = new _classes_project_model__WEBPACK_IMPORTED_MODULE_0__["ProjectModel"]();
        }
    }
    // Удаление проекта.
    deleteProject() {
        this.projectService.deleteProject(this.project.ProjectId).subscribe((data) => {
            if (data) {
                alert("The project deleted sucessfull!");
            }
        }, (error) => {
            console.log("Delete project error");
        });
    }
}
UserProjectComponent.ɵfac = function UserProjectComponent_Factory(t) { return new (t || UserProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"])); };
UserProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserProjectComponent, selectors: [["app-user-project"]], inputs: { project: "project" }, decls: 7, vars: 5, consts: [[1, "project-container"], [1, "project", "project-title"], [1, "project", "project-date"], [1, "button", "delete", 3, "click"]], template: function UserProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserProjectComponent_Template_button_click_6_listener() { return ctx.deleteProject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.project.Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 2, ctx.project.CreateDate, "mediumDate"));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".project-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  width: 380px;\n  height: 40px;\n  margin: 10px;\n  background-color: #e4e4e4;\n  border: 1px solid #3a3a3a;\n  box-shadow: 3px 3px #8282bb;\n}\n\n.project-title[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.project-date[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n.project[_ngcontent-%COMP%] {\n  height: 30px;\n  margin: auto;\n  padding: 5px;\n  background-color: #ccd1e0;\n  box-shadow: 1px 1px #7e7e7e;\n  overflow: hidden;\n}\n\n.button[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  margin: auto;\n  background-color: #cccccc;\n  border: none;\n  background: none;\n  outline: none;\n  transition: 0.4s;\n  border-radius: 100%;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 5px #344291;\n}\n\n.button[_ngcontent-%COMP%]:active {\n  transform: scale(0.9);\n}\n\n.delete[_ngcontent-%COMP%] {\n  background-image: url('task_delete.svg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLXByb2plY3QvdXNlci1wcm9qZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3Q0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLXByb2plY3QvdXNlci1wcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3QtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgd2lkdGg6IDM4MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjM2EzYTNhO1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggIzgyODJiYjtcclxufVxyXG5cclxuLnByb2plY3QtdGl0bGUge1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLnByb2plY3QtZGF0ZSB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4ucHJvamVjdCB7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjZDFlMDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4ICM3ZTdlN2U7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDAgNXB4ICMzNDQyOTE7XHJcbn1cclxuXHJcbi5idXR0b246YWN0aXZlIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XHJcbn1cclxuXHJcbi5kZWxldGUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlL2ljb24vdGFza19kZWxldGUuc3ZnXCIpO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-user-project',
                templateUrl: './user-project.component.html',
                styleUrls: ['./user-project.component.scss']
            }]
    }], function () { return [{ type: _services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] }]; }, { project: [{
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

/***/ "./src/app/services/comment.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/comment.service.ts ***!
  \*********************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class CommentService {
    constructor(http) {
        this.http = http;
        this.rootUrl = "https://localhost:44376";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
        };
    }
    // Запрос на получение всех комментариев задачи.
    getTaskComments(taskId) {
        this.httpOptions.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        const route = '/comment/GetCommentsTask';
        return this.http.get(`${this.rootUrl}${route}?taskid=${taskId}`, this.httpOptions);
    }
}
CommentService.ɵfac = function CommentService_Factory(t) { return new (t || CommentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CommentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommentService, factory: CommentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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

/***/ "./src/app/services/project.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/project.service.ts ***!
  \*********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




// Сервис управления задачами
class ProjectService {
    constructor(http) {
        this.http = http;
        this.rootUrl = "https://localhost:44376";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
        };
    }
    // Запрос на добавление проекта.
    addProject(projectModel) {
        const route = '/project/addproject';
        const body = projectModel;
        this.httpOptions.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this.http.post(`${this.rootUrl}${route}`, body, this.httpOptions);
    }
    // Удаление проекта.
    deleteProject(projectId) {
        const route = '/project/deleteproject';
        this.httpOptions.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this.http.delete(`${this.rootUrl}${route}?projectid=${projectId}`, this.httpOptions);
    }
    // Запрос на получение всех проектов.
    getAllProjects() {
        const route = '/project/getallprojects';
        this.httpOptions.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this.http.get(`${this.rootUrl}${route}`, this.httpOptions);
    }
    // Запрос на получение проектов пользователя.
    getAccountProjects(userName) {
        const route = '/project/getmyprojects';
        this.httpOptions.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this.http.get(`${this.rootUrl}${route}?login=${userName}`, this.httpOptions);
    }
    addTaskToProject(taskId, projectId) {
        const route = '/project/addtasktoproject';
        this.httpOptions.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this.http.put(`${this.rootUrl}${route}?taskid=${taskId}&projectid=${projectId}`, this.httpOptions);
    }
}
ProjectService.ɵfac = function ProjectService_Factory(t) { return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProjectService, factory: ProjectService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
        return this.http.get(`${this.rootUrl}${route}?loginId=${username}`, this.httpOptions);
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
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
        };
    }
    // Отправляет post запрос на сервер для регистрации нового пользователя
    registerUser(account) {
        console.log("register");
        const reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'No-Auth': 'True' });
        return this.http.post(`${this.rootUrl}/identity/Register`, account, { headers: reqHeader });
    }
    // Отправляет post запрос для аутентификации существующего пользователя
    userAuthentication(accountModel) {
        const data = `username=${accountModel.UserName}&password=${accountModel.Password}&grant_type=password`;
        const reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
        return this.http.post(`${this.rootUrl}/token`, data, { headers: reqHeader });
    }
    // Запрос на получение всех пользователей.
    getUsers() {
        const route = '/account/GetUsers';
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
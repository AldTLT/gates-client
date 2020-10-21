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
/* harmony import */ var _components_main_personal_tasks_executor_tasks_executor_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/main/personal/tasks-executor/tasks-executor.component */ "./src/app/components/main/personal/tasks-executor/tasks-executor.component.ts");
/* harmony import */ var _components_helpers_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/helpers/toggle/toggle.component */ "./src/app/components/helpers/toggle/toggle.component.ts");

































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
        _components_comment_comment_component__WEBPACK_IMPORTED_MODULE_29__["CommentComponent"],
        _components_main_personal_tasks_executor_tasks_executor_component__WEBPACK_IMPORTED_MODULE_30__["TasksExecutorComponent"],
        _components_helpers_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_31__["ToggleComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
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
                    _components_main_personal_tasks_executor_tasks_executor_component__WEBPACK_IMPORTED_MODULE_30__["TasksExecutorComponent"],
                    _components_helpers_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_31__["ToggleComponent"],
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

/***/ "./src/app/classes/comment.model.ts":
/*!******************************************!*\
  !*** ./src/app/classes/comment.model.ts ***!
  \******************************************/
/*! exports provided: CommentModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentModel", function() { return CommentModel; });
// Модель комментарий
class CommentModel {
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





const _c0 = ["textArea"];
function CommentComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_a_8_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.saveComment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CommentComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_a_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.editComment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CommentComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_a_10_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.deleteComment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { edit_content: a0 }; };
// Компонет комментарии задачи.
class CommentComponent {
    constructor(commentService) {
        this.commentService = commentService;
        // Выходное событие - обновление комментариев.
        this.updateComments = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.readonly = true;
        const userName = localStorage.getItem('username');
        this.showControls = userName === this.comment.Login;
    }
    // Редактирование комментария.
    editComment() {
        // Получение DOM элемента textarea для фокуса курсора. Пока не реализовано.
        const taxtAreaElement = this.textArea;
        this.readonly = false;
        this.showSend = true;
        this.editContent = true;
    }
    saveComment() {
        this.commentService.updateComment(this.comment).subscribe(() => {
            // Событие - обновление комментария.
            this.updateComments.emit();
        });
    }
    // Удаление комментария.
    deleteComment() {
        this.commentService
            .deleteComment(this.comment.CommentId)
            .subscribe((data) => {
            // Событие - обновление комментария.
            this.updateComments.emit();
        });
    }
}
CommentComponent.ɵfac = function CommentComponent_Factory(t) { return new (t || CommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_comment_service__WEBPACK_IMPORTED_MODULE_1__["CommentService"])); };
CommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentComponent, selectors: [["app-comment"]], viewQuery: function CommentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.textArea = _t.first);
    } }, inputs: { comment: "comment" }, outputs: { updateComments: "updateComments" }, decls: 13, vars: 13, consts: [[1, "comment-container"], [1, "comment-footer"], [1, "author"], [1, "date"], [1, "comment-controls"], ["class", "icon save", 3, "click", 4, "ngIf"], ["class", "icon edit", 3, "click", 4, "ngIf"], ["class", "icon delete", 3, "click", 4, "ngIf"], [1, "content", 3, "readonly", "ngClass", "ngModel", "ngModelChange"], ["textArea", ""], [1, "icon", "save", 3, "click"], [1, "icon", "edit", 3, "click"], [1, "icon", "delete", 3, "click"]], template: function CommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CommentComponent_a_8_Template, 1, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CommentComponent_a_9_Template, 1, 0, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CommentComponent_a_10_Template, 1, 0, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "textarea", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CommentComponent_Template_textarea_ngModelChange_11_listener($event) { return ctx.comment.Content = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.comment.Login);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 8, ctx.comment.CreateDate, "mediumDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSend);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showControls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showControls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.readonly)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx.editContent))("ngModel", ctx.comment.Content);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".comment-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 583px;\n  height: auto;\n  max-height: 200px;\n  background-color: #eff2f5;\n  border-radius: 10px;\n  border: 1px solid #3d3d3d;\n}\n\n.comment-footer[_ngcontent-%COMP%] {\n  display: flex;\n  width: 565px;\n  height: 20px;\n  justify-content: space-between;\n  margin-left: 10px;\n  line-height: 1.5rem;\n}\n\n.content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  min-height: 30px;\n  max-height: 100px;\n  margin: 5px;\n  padding: 5px;\n  resize: none;\n  background-color: #b6c3d3;\n  border: 1px solid #9c1515;\n  border-radius: 5px;\n}\n\n.author[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 20px;\n  text-transform: capitalize;\n}\n\n.date[_ngcontent-%COMP%] {\n  width: auto;\n  height: 20px;\n}\n\n.comment-controls[_ngcontent-%COMP%] {\n  width: 100px;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  margin: 4px 8px;\n  border: 1px solid black;\n  background-size: contain;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  border: none;\n  transform: 0.5s;\n}\n\n.edit[_ngcontent-%COMP%] {\n  background-image: url('comment_edit.svg');\n}\n\n.edit[_ngcontent-%COMP%]:hover {\n  background-image: url('comment_edit_hover.svg');\n}\n\n.delete[_ngcontent-%COMP%] {\n  background-image: url('comment_delete.svg');\n}\n\n.delete[_ngcontent-%COMP%]:hover {\n  background-image: url('comment_delete_hover.svg');\n}\n\n.save[_ngcontent-%COMP%] {\n  background-image: url('comment_save.svg');\n}\n\n.save[_ngcontent-%COMP%]:hover {\n  background-image: url('comment_save_hover.svg');\n}\n\n.edit_content[_ngcontent-%COMP%] {\n  background-color: #27505a;\n  color: #eeeeee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21tZW50L2NvbW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvX2NvbG9yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkNEc0I7RURFdEIsbUJBQUE7RUFDQSx5QkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkNyQndCO0VEc0J4Qix5QkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLHlDQUFBO0FBREY7O0FBSUE7RUFDRSwrQ0FBQTtBQURGOztBQUlBO0VBQ0UsMkNBQUE7QUFERjs7QUFJQTtFQUNFLGlEQUFBO0FBREY7O0FBSUE7RUFDRSx5Q0FBQTtBQURGOztBQUlBO0VBQ0UsK0NBQUE7QUFERjs7QUFJQTtFQUNFLHlCQzlFaUI7RUQrRWpCLGNBQUE7QUFERiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbWVudC9jb21tZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9hc3NldHMvc2Nzcy9jb2xvclwiO1xyXG5cclxuLmNvbW1lbnQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICB3aWR0aDogNTgzcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yLWJhY2tncm91bmQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjM2QzZDNkO1xyXG59XHJcblxyXG4uY29tbWVudC1mb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDU2NXB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtaW4taGVpZ2h0OiAzMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICByZXNpemU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tY29sb3ItYmFja2dyb3VuZC0yO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5YzE1MTU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uYXV0aG9yIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uY29tbWVudC1jb250cm9scyB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTZweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgbWFyZ2luOiA0cHggOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgdHJhbnNmb3JtOiAwLjVzO1xyXG59XHJcblxyXG4uZWRpdCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlL2ljb24vY29tbWVudF9lZGl0LnN2Z1wiKTtcclxufVxyXG5cclxuLmVkaXQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9pY29uL2NvbW1lbnRfZWRpdF9ob3Zlci5zdmdcIik7XHJcbn1cclxuXHJcbi5kZWxldGUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9pY29uL2NvbW1lbnRfZGVsZXRlLnN2Z1wiKTtcclxufVxyXG5cclxuLmRlbGV0ZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlL2ljb24vY29tbWVudF9kZWxldGVfaG92ZXIuc3ZnXCIpO1xyXG59XHJcblxyXG4uc2F2ZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlL2ljb24vY29tbWVudF9zYXZlLnN2Z1wiKTtcclxufVxyXG5cclxuLnNhdmU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9pY29uL2NvbW1lbnRfc2F2ZV9ob3Zlci5zdmdcIik7XHJcbn1cclxuXHJcbi5lZGl0X2NvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yLWZvY3VzO1xyXG4gIGNvbG9yOiAjZWVlZWVlO1xyXG59IiwiJGhlYWRlci1jb2xvcjogIzU3NTc1NztcclxuJGhlYWRlci1ib3JkZXItY29sb3I6ICNhOGE4YTg7XHJcbiRmb290ZXItY29sb3I6ICM2OTQ2NDY7XHJcbiRtYWluLW1lbnUtY29sb3I6ICMzYjUwYjE7XHJcbiRtYWluLW1lbnUtYnV0dG9uLWNvbG9yOiAjMTkyYzg1O1xyXG4kdGl0bGUtdGV4dC1jb2xvcjogI2M1YzdjYztcclxuJHRhc2stZGV0YWlsLWNvbG9yOiAjYjZiNmI2O1xyXG4kbWFpbi1jb2xvci1iYWNrZ3JvdW5kOiAjZWZmMmY1O1xyXG4kbWFpbi1jb2xvci1iYWNrZ3JvdW5kLWhvdmVyOiAjZDdkYWRkO1xyXG4kbWFpbi1jb2xvci1iYWNrZ3JvdW5kLTI6ICNiNmMzZDM7XHJcbiRtYWluLWNvbG9yLWJhY2tncm91bmQtMi1ob3ZlcjogIzkyOWRhYTtcclxuJG1haW4tY29sb3ItY29udGVudDogIzMxNDM5NjtcclxuJG1haW4tY29sb3ItZm9jdXM6ICMyNzUwNWE7XHJcbiRidXR0b24tY29sb3I6ICM2YThmYmI7XHJcbiRidXR0b24tY29sb3ItaG92ZXI6ICM0ODY3OGI7XHJcbiRtYWluLXRleHQtY29sb3I6ICM0MjQ2NGQ7XHJcbiRtYWluLXBsYWNlaG9sZGVyLWNvbG9yOiAjODI4Yjk3OyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comment',
                templateUrl: './comment.component.html',
                styleUrls: ['./comment.component.scss'],
            }]
    }], function () { return [{ type: _services_comment_service__WEBPACK_IMPORTED_MODULE_1__["CommentService"] }]; }, { comment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], updateComments: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], textArea: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['textArea', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
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
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  height: 30px;\n  background-color: #694646;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL19jb2xvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtFQUNBLHlCQ0ZhO0FEQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29sb3JcIjtcclxuXHJcbi5mb290ZXIge1xyXG4gIGhlaWdodDogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9vdGVyLWNvbG9yO1xyXG59XHJcbiIsIiRoZWFkZXItY29sb3I6ICM1NzU3NTc7XHJcbiRoZWFkZXItYm9yZGVyLWNvbG9yOiAjYThhOGE4O1xyXG4kZm9vdGVyLWNvbG9yOiAjNjk0NjQ2O1xyXG4kbWFpbi1tZW51LWNvbG9yOiAjM2I1MGIxO1xyXG4kbWFpbi1tZW51LWJ1dHRvbi1jb2xvcjogIzE5MmM4NTtcclxuJHRpdGxlLXRleHQtY29sb3I6ICNjNWM3Y2M7XHJcbiR0YXNrLWRldGFpbC1jb2xvcjogI2I2YjZiNjtcclxuJG1haW4tY29sb3ItYmFja2dyb3VuZDogI2VmZjJmNTtcclxuJG1haW4tY29sb3ItYmFja2dyb3VuZC1ob3ZlcjogI2Q3ZGFkZDtcclxuJG1haW4tY29sb3ItYmFja2dyb3VuZC0yOiAjYjZjM2QzO1xyXG4kbWFpbi1jb2xvci1iYWNrZ3JvdW5kLTItaG92ZXI6ICM5MjlkYWE7XHJcbiRtYWluLWNvbG9yLWNvbnRlbnQ6ICMzMTQzOTY7XHJcbiRtYWluLWNvbG9yLWZvY3VzOiAjMjc1MDVhO1xyXG4kYnV0dG9uLWNvbG9yOiAjNmE4ZmJiO1xyXG4kYnV0dG9uLWNvbG9yLWhvdmVyOiAjNDg2NzhiO1xyXG4kbWFpbi10ZXh0LWNvbG9yOiAjNDI0NjRkO1xyXG4kbWFpbi1wbGFjZWhvbGRlci1jb2xvcjogIzgyOGI5NzsiXX0= */"] });
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
    } }, styles: [".header[_ngcontent-%COMP%] {\n  height: 30px;\n  background-color: #575757;\n  border-bottom: 4px solid #a8a8a8;\n}\n\n.header-title[_ngcontent-%COMP%] {\n  margin: auto 40px;\n  color: #c5c7cc;\n  letter-spacing: 1rem;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL19jb2xvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtFQUNBLHlCQ0phO0VES2IsZ0NBQUE7QUFERjs7QUFJQTtFQUNFLGlCQUFBO0VBQ0EsY0NMaUI7RURNakIsb0JBQUE7RUFDQSx5QkFBQTtBQURGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9yXCI7XHJcblxyXG4uaGVhZGVyIHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGhlYWRlci1jb2xvcjtcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgJGhlYWRlci1ib3JkZXItY29sb3I7XHJcbn1cclxuXHJcbi5oZWFkZXItdGl0bGUge1xyXG4gIG1hcmdpbjogYXV0byA0MHB4O1xyXG4gIGNvbG9yOiAkdGl0bGUtdGV4dC1jb2xvcjtcclxuICBsZXR0ZXItc3BhY2luZzogMXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbiIsIiRoZWFkZXItY29sb3I6ICM1NzU3NTc7XHJcbiRoZWFkZXItYm9yZGVyLWNvbG9yOiAjYThhOGE4O1xyXG4kZm9vdGVyLWNvbG9yOiAjNjk0NjQ2O1xyXG4kbWFpbi1tZW51LWNvbG9yOiAjM2I1MGIxO1xyXG4kbWFpbi1tZW51LWJ1dHRvbi1jb2xvcjogIzE5MmM4NTtcclxuJHRpdGxlLXRleHQtY29sb3I6ICNjNWM3Y2M7XHJcbiR0YXNrLWRldGFpbC1jb2xvcjogI2I2YjZiNjtcclxuJG1haW4tY29sb3ItYmFja2dyb3VuZDogI2VmZjJmNTtcclxuJG1haW4tY29sb3ItYmFja2dyb3VuZC1ob3ZlcjogI2Q3ZGFkZDtcclxuJG1haW4tY29sb3ItYmFja2dyb3VuZC0yOiAjYjZjM2QzO1xyXG4kbWFpbi1jb2xvci1iYWNrZ3JvdW5kLTItaG92ZXI6ICM5MjlkYWE7XHJcbiRtYWluLWNvbG9yLWNvbnRlbnQ6ICMzMTQzOTY7XHJcbiRtYWluLWNvbG9yLWZvY3VzOiAjMjc1MDVhO1xyXG4kYnV0dG9uLWNvbG9yOiAjNmE4ZmJiO1xyXG4kYnV0dG9uLWNvbG9yLWhvdmVyOiAjNDg2NzhiO1xyXG4kbWFpbi10ZXh0LWNvbG9yOiAjNDI0NjRkO1xyXG4kbWFpbi1wbGFjZWhvbGRlci1jb2xvcjogIzgyOGI5NzsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/helpers/toggle/toggle.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/helpers/toggle/toggle.component.ts ***!
  \***************************************************************/
/*! exports provided: ToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleComponent", function() { return ToggleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ToggleComponent {
    constructor() {
        // Выходное свойство - состояние checkbox
        this.checked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.checked.emit(this.check);
    }
    // Переключение чекбокса при клике и передача состояния на выход.
    onClick() {
        this.check = !this.check;
        this.checked.emit(this.check);
    }
}
ToggleComponent.ɵfac = function ToggleComponent_Factory(t) { return new (t || ToggleComponent)(); };
ToggleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToggleComponent, selectors: [["app-toggle"]], outputs: { checked: "checked" }, decls: 3, vars: 0, consts: [[1, "switch"], ["type", "checkbox"], [1, "slider", "round", 3, "click"]], template: function ToggleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToggleComponent_Template_span_click_2_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #4aaa47;\n  transition: 1s;\n}\n\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  border: none;\n  transition: 1s;\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #2196f3;\n}\n\ninput[_ngcontent-%COMP%]:focus    + .slider[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  border: none;\n  width: 18px;\n  height: 18px;\n  top: 0;\n  transform: translateX(44px);\n}\n\n.slider.round[_ngcontent-%COMP%] {\n  border-radius: 34px;\n}\n\n.slider.round[_ngcontent-%COMP%]:before {\n  left: 3px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWxwZXJzL3RvZ2dsZS90b2dnbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBRUEsY0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUVBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUVBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlbHBlcnMvdG9nZ2xlL3RvZ2dsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2l0Y2gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbn1cclxuXHJcbi5zd2l0Y2ggaW5wdXQge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG4uc2xpZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3NCwgMTcwLCA3MSk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDFzO1xyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcbn1cclxuXHJcbi5zbGlkZXI6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICB3aWR0aDogMjZweDtcclxuICAgIGxlZnQ6IDRweDtcclxuICAgIGJvdHRvbTogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDFzO1xyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2ZjM7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIHRvcDogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQ0cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQ0cHgpO1xyXG59XHJcblxyXG4uc2xpZGVyLnJvdW5kIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbn1cclxuXHJcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcclxuICAgIGxlZnQ6IDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toggle',
                templateUrl: './toggle.component.html',
                styleUrls: ['./toggle.component.scss']
            }]
    }], function () { return []; }, { checked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".main[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  flex-direction: row;\n  height: 90vh;\n  width: 100%;\n  min-height: 500px;\n}\n\n.main-body[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  width: 1000px;\n}\n\n.task-detail[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.task-form[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.app-task-form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL19tYWluL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluL19tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgaGVpZ2h0OiA5MHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG4ubWFpbi1ib2R5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgd2lkdGg6IDEwMDBweDtcclxufVxyXG5cclxuLnRhc2stZGV0YWlsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udGFzay1mb3JtIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYXBwLXRhc2stZm9ybSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"] });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-task", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function BoardComponent_app_task_2_Template_app_task_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.closeTaskDetail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("task", ctx_r0.task);
} }
function BoardComponent_app_board_task_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-board-task", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("taskIdEmitter", function BoardComponent_app_board_task_4_Template_app_board_task_taskIdEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.getTaskById($event); });
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
BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardComponent, selectors: [["app-board"]], decls: 5, vars: 2, consts: [[1, "board"], ["class", "task-detail", 3, "task", "close", 4, "ngIf"], [1, "task-container"], [3, "boardTask", "taskIdEmitter", 4, "ngFor", "ngForOf"], [1, "task-detail", 3, "task", "close"], [3, "boardTask", "taskIdEmitter"]], template: function BoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BoardComponent_app_task_2_Template, 1, 1, "app-task", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BoardComponent_app_board_task_4_Template, 1, 1, "app-board-task", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTaskDetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.boardTasks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _task_task_task_component__WEBPACK_IMPORTED_MODULE_3__["TaskComponent"], _task_boardTask_boardTask_component__WEBPACK_IMPORTED_MODULE_4__["BoardTaskComponent"]], styles: [".board[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #eff2f5;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.board__filter-bar[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\n.filter-input[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 30px;\n  background-color: #525252;\n  border-radius: 20px;\n}\n\n.task-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 1000px;\n  height: 90%;\n  flex-wrap: wrap;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  align-content: flex-start;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.task-detail[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL2JvYXJkL19ib2FyZC9ib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9fY29sb3Iuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0VBQ0EseUJDR3NCO0VERnRCLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQURGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluL2JvYXJkL19ib2FyZC9ib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9yJztcclxuXHJcbi5ib2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yLWJhY2tncm91bmQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5ib2FyZF9fZmlsdGVyLWJhciB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5maWx0ZXItaW5wdXQge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjUyNTI7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLnRhc2stY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAwcHg7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi50YXNrLWRldGFpbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG4iLCIkaGVhZGVyLWNvbG9yOiAjNTc1NzU3O1xyXG4kaGVhZGVyLWJvcmRlci1jb2xvcjogI2E4YThhODtcclxuJGZvb3Rlci1jb2xvcjogIzY5NDY0NjtcclxuJG1haW4tbWVudS1jb2xvcjogIzNiNTBiMTtcclxuJG1haW4tbWVudS1idXR0b24tY29sb3I6ICMxOTJjODU7XHJcbiR0aXRsZS10ZXh0LWNvbG9yOiAjYzVjN2NjO1xyXG4kdGFzay1kZXRhaWwtY29sb3I6ICNiNmI2YjY7XHJcbiRtYWluLWNvbG9yLWJhY2tncm91bmQ6ICNlZmYyZjU7XHJcbiRtYWluLWNvbG9yLWJhY2tncm91bmQtaG92ZXI6ICNkN2RhZGQ7XHJcbiRtYWluLWNvbG9yLWJhY2tncm91bmQtMjogI2I2YzNkMztcclxuJG1haW4tY29sb3ItYmFja2dyb3VuZC0yLWhvdmVyOiAjOTI5ZGFhO1xyXG4kbWFpbi1jb2xvci1jb250ZW50OiAjMzE0Mzk2O1xyXG4kbWFpbi1jb2xvci1mb2N1czogIzI3NTA1YTtcclxuJGJ1dHRvbi1jb2xvcjogIzZhOGZiYjtcclxuJGJ1dHRvbi1jb2xvci1ob3ZlcjogIzQ4Njc4YjtcclxuJG1haW4tdGV4dC1jb2xvcjogIzQyNDY0ZDtcclxuJG1haW4tcGxhY2Vob2xkZXItY29sb3I6ICM4MjhiOTc7Il19 */"] });
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





function MainMenuComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainMenuComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.signOut(); });
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
MainMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainMenuComponent, selectors: [["app-main-menu"]], decls: 9, vars: 1, consts: [[1, "main-menu"], [1, "main-menu__button", 3, "click"], [1, "main-menu__button__text"], [1, "sign-container"], ["class", "sign", 3, "click", 4, "ngIf"], [1, "sign", 3, "click"]], template: function MainMenuComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MainMenuComponent_button_8_Template, 1, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".main-menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex-flow: column wrap;\n  justify-content: flex-start;\n  z-index: 50;\n  left: 0px;\n  width: 150px;\n  height: 100%;\n  background-color: #3b50b1;\n}\n\n.main-menu__button[_ngcontent-%COMP%] {\n  position: relative;\n  width: 90px;\n  height: 40px;\n  margin: 10px auto;\n  text-align: center;\n  transition: 0.2s ease-out;\n  border-radius: 2px;\n  cursor: pointer;\n}\n\n.main-menu__button[_ngcontent-%COMP%]:hover {\n  background-color: #192c85;\n}\n\n.main-menu__button__text[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-transform: uppercase;\n  text-align: center;\n  line-height: 2.5rem;\n}\n\n.sign-container[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  margin: auto auto 15px auto;\n  padding: 10px;\n  border-radius: 100%;\n  cursor: pointer;\n}\n\n.sign[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border: none;\n  background: none;\n  background-image: url('logout.svg');\n  background-size: cover;\n  cursor: pointer;\n}\n\n.sign-container[_ngcontent-%COMP%]:hover {\n  background-color: #192c85;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4tbWVudS9tYWluLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvX2NvbG9yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJDVGdCO0FET2xCOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUtBO0VBQ0UseUJDdkJ1QjtBRHFCekI7O0FBS0E7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUtBO0VBQ0UseUJDckR1QjtBRG1EekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4vbWFpbi1tZW51L21haW4tbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvclwiO1xyXG5cclxuLm1haW4tbWVudSB7XHJcbiAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHotaW5kZXg6IDUwO1xyXG4gIGxlZnQ6IDBweDtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluLW1lbnUtY29sb3I7XHJcbn1cclxuXHJcbi5tYWluLW1lbnVfX2J1dHRvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA5MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLW91dDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubWFpbi1tZW51X19idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluLW1lbnUtYnV0dG9uLWNvbG9yO1xyXG59XHJcblxyXG4ubWFpbi1tZW51X19idXR0b25fX3RleHQge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XHJcbn1cclxuXHJcbi5zaWduLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbjogYXV0byBhdXRvIDE1cHggYXV0bztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2lnbiB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9pY29uL2xvZ291dC5zdmdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zaWduLWNvbnRhaW5lcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tbWVudS1idXR0b24tY29sb3I7XHJcbn1cclxuIiwiJGhlYWRlci1jb2xvcjogIzU3NTc1NztcclxuJGhlYWRlci1ib3JkZXItY29sb3I6ICNhOGE4YTg7XHJcbiRmb290ZXItY29sb3I6ICM2OTQ2NDY7XHJcbiRtYWluLW1lbnUtY29sb3I6ICMzYjUwYjE7XHJcbiRtYWluLW1lbnUtYnV0dG9uLWNvbG9yOiAjMTkyYzg1O1xyXG4kdGl0bGUtdGV4dC1jb2xvcjogI2M1YzdjYztcclxuJHRhc2stZGV0YWlsLWNvbG9yOiAjYjZiNmI2O1xyXG4kbWFpbi1jb2xvci1iYWNrZ3JvdW5kOiAjZWZmMmY1O1xyXG4kbWFpbi1jb2xvci1iYWNrZ3JvdW5kLWhvdmVyOiAjZDdkYWRkO1xyXG4kbWFpbi1jb2xvci1iYWNrZ3JvdW5kLTI6ICNiNmMzZDM7XHJcbiRtYWluLWNvbG9yLWJhY2tncm91bmQtMi1ob3ZlcjogIzkyOWRhYTtcclxuJG1haW4tY29sb3ItY29udGVudDogIzMxNDM5NjtcclxuJG1haW4tY29sb3ItZm9jdXM6ICMyNzUwNWE7XHJcbiRidXR0b24tY29sb3I6ICM2YThmYmI7XHJcbiRidXR0b24tY29sb3ItaG92ZXI6ICM0ODY3OGI7XHJcbiRtYWluLXRleHQtY29sb3I6ICM0MjQ2NGQ7XHJcbiRtYWluLXBsYWNlaG9sZGVyLWNvbG9yOiAjODI4Yjk3OyJdfQ== */"] });
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
/* harmony import */ var _helpers_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/toggle/toggle.component */ "./src/app/components/helpers/toggle/toggle.component.ts");
/* harmony import */ var _task_task_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../task/task/task.component */ "./src/app/components/task/task/task.component.ts");
/* harmony import */ var _task_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../task/task-form/task-form.component */ "./src/app/components/task/task-form/task-form.component.ts");
/* harmony import */ var _task_user_task_user_task_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../task/user-task/user-task.component */ "./src/app/components/task/user-task/user-task.component.ts");
/* harmony import */ var _tasks_executor_tasks_executor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tasks-executor/tasks-executor.component */ "./src/app/components/main/personal/tasks-executor/tasks-executor.component.ts");
/* harmony import */ var _user_project_user_project_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../user-project/user-project.component */ "./src/app/components/user-project/user-project.component.ts");















function PersonalComponent_app_task_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-task", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("close", function PersonalComponent_app_task_1_Template_app_task_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.closeTaskDetail(); })("tasksByHashTag", function PersonalComponent_app_task_1_Template_app_task_tasksByHashTag_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.showTaskByHashTag($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("task", ctx_r0.task);
} }
function PersonalComponent_app_task_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-task-form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("close", function PersonalComponent_app_task_form_2_Template_app_task_form_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.closeTaskForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("changeTask", ctx_r1.task);
} }
function PersonalComponent_div_11_app_user_task_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-user-task", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("taskIdEmitter", function PersonalComponent_div_11_app_user_task_1_Template_app_user_task_taskIdEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r12.getTaskById($event); })("updateTaskEmitter", function PersonalComponent_div_11_app_user_task_1_Template_app_user_task_updateTaskEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r14.updateTask($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("task", task_r11);
} }
function PersonalComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PersonalComponent_div_11_app_user_task_1_Template, 1, 1, "app-user-task", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.userTasks);
} }
function PersonalComponent_app_tasks_executor_12_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-tasks-executor", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("taskIdEmitter", function PersonalComponent_app_tasks_executor_12_Template_app_tasks_executor_taskIdEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.getTaskById($event); })("updateTaskEmitter", function PersonalComponent_app_tasks_executor_12_Template_app_tasks_executor_updateTaskEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r17.updateTask($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PersonalComponent_app_user_project_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-user-project", 22);
} if (rf & 2) {
    const project_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("project", project_r18);
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
        this.taskComponentHeader = "Tasks assigned to me";
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
    showTaskByHashTag(tasks) {
        this.closeTaskDetail();
        console.log(tasks);
    }
    // Создание проекта.
    createProject() {
        this.showInput = !this.showInput;
    }
    // Проверка состояния переключателя.
    check(checked) {
        this.myTasks = checked;
        this.taskComponentHeader = this.myTasks ? "My tasks" : "Tasks assigned to me";
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
PersonalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PersonalComponent, selectors: [["app-personal"]], decls: 24, vars: 10, consts: [[1, "personal-container"], ["class", "task-detail", 3, "task", "close", "tasksByHashTag", 4, "ngIf"], ["class", "task-form", 3, "changeTask", "close", 4, "ngIf"], [1, "personal-task"], [1, "title"], [1, "title-text"], [1, "toggle", 3, "checked"], [1, "task-control-container"], [1, "button", 3, "click"], ["class", "task-container", 4, "ngIf"], [3, "taskIdEmitter", "updateTaskEmitter", 4, "ngIf"], [1, "personal-project"], [1, "project-input-container", 3, "formGroup", "ngClass", "submit"], ["formControlName", "title", "placeholder", "Please enter project name", 1, "project-input"], [1, "personal-project-container"], [3, "project", 4, "ngFor", "ngForOf"], [1, "task-detail", 3, "task", "close", "tasksByHashTag"], [1, "task-form", 3, "changeTask", "close"], [1, "task-container"], [3, "task", "taskIdEmitter", "updateTaskEmitter", 4, "ngFor", "ngForOf"], [3, "task", "taskIdEmitter", "updateTaskEmitter"], [3, "taskIdEmitter", "updateTaskEmitter"], [3, "project"]], template: function PersonalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PersonalComponent_app_task_1_Template, 1, 1, "app-task", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PersonalComponent_app_task_form_2_Template, 1, 1, "app-task-form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "app-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("checked", function PersonalComponent_Template_app_toggle_checked_7_listener($event) { return ctx.check($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PersonalComponent_Template_button_click_9_listener() { return ctx.createTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Create task");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, PersonalComponent_div_11_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, PersonalComponent_app_tasks_executor_12_Template, 1, 0, "app-tasks-executor", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "My projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PersonalComponent_Template_button_click_18_listener() { return ctx.createProject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Create project ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function PersonalComponent_Template_form_submit_20_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, PersonalComponent_app_user_project_23_Template, 1, 1, "app-user-project", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showTaskDetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showTaskForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.taskComponentHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.myTasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.myTasks);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.projectFormGroup)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, ctx.showInput));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _helpers_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_7__["ToggleComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _task_task_task_component__WEBPACK_IMPORTED_MODULE_8__["TaskComponent"], _task_task_form_task_form_component__WEBPACK_IMPORTED_MODULE_9__["TaskFormComponent"], _task_user_task_user_task_component__WEBPACK_IMPORTED_MODULE_10__["UserTaskComponent"], _tasks_executor_tasks_executor_component__WEBPACK_IMPORTED_MODULE_11__["TasksExecutorComponent"], _user_project_user_project_component__WEBPACK_IMPORTED_MODULE_12__["UserProjectComponent"]], styles: [".personal-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  width: 100%;\n  height: 100%;\n  background-color: #7e8fc9;\n  overflow: hidden;\n}\n\n.toggle[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n\n.task-control-container[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: 10px;\n}\n\n.personal-task[_ngcontent-%COMP%] {\n  width: 850px;\n  height: 100%;\n  background-color: #ffffff;\n}\n\n.personal-project[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  width: auto;\n  height: 100%;\n  background-color: #ffffff;\n}\n\n.task-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  align-content: flex-start;\n  width: 840px;\n  height: 520px;\n  padding: 10px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.button[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 30px;\n  margin: 5px;\n  outline: none;\n  border: 1px solid #1f1f1f;\n  border-radius: 3px;\n  background-color: #6a8fbb;\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  background-color: #48678b;\n}\n\n.button[_ngcontent-%COMP%]:active {\n  transform: scaleY(0.95);\n}\n\n.task-control[_ngcontent-%COMP%]:hover {\n  background-color: #8f8f8f;\n}\n\n.task-form[_ngcontent-%COMP%], .task-detail[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 850px;\n  height: 100%;\n  z-index: 10;\n}\n\n.title[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  margin: 5px;\n  text-align: center;\n}\n\n.title-text[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  text-transform: uppercase;\n}\n\n.project-input-container[_ngcontent-%COMP%] {\n  margin: auto auto auto 5px;\n  transition: 0.4s;\n  transform: scaleX(0);\n  transform-origin: left;\n}\n\n.project-input[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 30px;\n  border: 2px solid #272727;\n  border-radius: 5px;\n}\n\n.project-input[_ngcontent-%COMP%]::placeholder {\n  color: #4d4d4d;\n}\n\n.show[_ngcontent-%COMP%] {\n  transform: scaleX(1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL3BlcnNvbmFsL3BlcnNvbmFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9zY3NzL19jb2xvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxpQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJDdkNhO0VEd0NiLGdCQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UseUJDNUNtQjtBRDJDckI7O0FBSUE7RUFDRSx1QkFBQTtBQURGOztBQUlBO0VBQ0UseUJBQUE7QUFERjs7QUFJQTs7RUFFRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUFERjs7QUFJQTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7QUFERjs7QUFJQTtFQUNFLG9CQUFBO0FBREYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4vcGVyc29uYWwvcGVyc29uYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcic7XHJcblxyXG4ucGVyc29uYWwtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2U4ZmM5O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi50b2dnbGUge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4udGFzay1jb250cm9sLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLnBlcnNvbmFsLXRhc2sge1xyXG4gIHdpZHRoOiA4NTBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLnBlcnNvbmFsLXByb2plY3Qge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi50YXNrLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHdpZHRoOiA4NDBweDtcclxuICBoZWlnaHQ6IDUyMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMWYxZjFmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnV0dG9uLWNvbG9yO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnV0dG9uLWNvbG9yLWhvdmVyO1xyXG59XHJcblxyXG4uYnV0dG9uOmFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC45NSk7XHJcbn1cclxuXHJcbi50YXNrLWNvbnRyb2w6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZjhmOGY7XHJcbn1cclxuXHJcbi50YXNrLWZvcm0sXHJcbi50YXNrLWRldGFpbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA4NTBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWlucHV0LWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiBhdXRvIGF1dG8gYXV0byA1cHg7XHJcbiAgdHJhbnNpdGlvbjogMC40cztcclxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG59XHJcblxyXG4ucHJvamVjdC1pbnB1dCB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMjcyNzI3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnByb2plY3QtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogIzRkNGQ0ZDtcclxufVxyXG5cclxuLnNob3cge1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG59XHJcbiIsIiRoZWFkZXItY29sb3I6ICM1NzU3NTc7XHJcbiRoZWFkZXItYm9yZGVyLWNvbG9yOiAjYThhOGE4O1xyXG4kZm9vdGVyLWNvbG9yOiAjNjk0NjQ2O1xyXG4kbWFpbi1tZW51LWNvbG9yOiAjM2I1MGIxO1xyXG4kbWFpbi1tZW51LWJ1dHRvbi1jb2xvcjogIzE5MmM4NTtcclxuJHRpdGxlLXRleHQtY29sb3I6ICNjNWM3Y2M7XHJcbiR0YXNrLWRldGFpbC1jb2xvcjogI2I2YjZiNjtcclxuJG1haW4tY29sb3ItYmFja2dyb3VuZDogI2VmZjJmNTtcclxuJG1haW4tY29sb3ItYmFja2dyb3VuZC1ob3ZlcjogI2Q3ZGFkZDtcclxuJG1haW4tY29sb3ItYmFja2dyb3VuZC0yOiAjYjZjM2QzO1xyXG4kbWFpbi1jb2xvci1iYWNrZ3JvdW5kLTItaG92ZXI6ICM5MjlkYWE7XHJcbiRtYWluLWNvbG9yLWNvbnRlbnQ6ICMzMTQzOTY7XHJcbiRtYWluLWNvbG9yLWZvY3VzOiAjMjc1MDVhO1xyXG4kYnV0dG9uLWNvbG9yOiAjNmE4ZmJiO1xyXG4kYnV0dG9uLWNvbG9yLWhvdmVyOiAjNDg2NzhiO1xyXG4kbWFpbi10ZXh0LWNvbG9yOiAjNDI0NjRkO1xyXG4kbWFpbi1wbGFjZWhvbGRlci1jb2xvcjogIzgyOGI5NzsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PersonalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-personal',
                templateUrl: './personal.component.html',
                styleUrls: ['./personal.component.scss'],
            }]
    }], function () { return [{ type: _services_task_manager_service__WEBPACK_IMPORTED_MODULE_4__["TaskManagerService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _services_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/main/personal/tasks-executor/tasks-executor.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/main/personal/tasks-executor/tasks-executor.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TasksExecutorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksExecutorComponent", function() { return TasksExecutorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_task_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/task-manager.service */ "./src/app/services/task-manager.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _task_user_task_user_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../task/user-task/user-task.component */ "./src/app/components/task/user-task/user-task.component.ts");





function TasksExecutorComponent_app_user_task_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-user-task", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("taskIdEmitter", function TasksExecutorComponent_app_user_task_2_Template_app_user_task_taskIdEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.getTaskById($event); })("updateTaskEmitter", function TasksExecutorComponent_app_user_task_2_Template_app_user_task_updateTaskEmitter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.updateTask($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("task", task_r1);
} }
// Компонент для вывода задач, в которых пользователь является исполнителем.
class TasksExecutorComponent {
    constructor(taskManagerService) {
        this.taskManagerService = taskManagerService;
        // Выходное свойство, идентификатор задачи.
        this.taskIdEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Выходное свойство, изменение задачи.
        this.updateTaskEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    // Инициализация компонента.
    ngOnInit() {
        this.userName = localStorage.getItem('username');
        this.taskManagerService.GetAssignedTasks(this.userName).subscribe((data) => {
            if (data) {
                this.assignedTasks = data;
            }
        });
    }
    // Передача id задачи на выход свойства для получения задачи.
    getTaskById(taskId) {
        this.taskIdEmitter.emit(taskId);
    }
    // Передача id задачи на выход свойства для изменения задачи.
    updateTask(taskId) {
        this.updateTaskEmitter.emit(taskId);
    }
}
TasksExecutorComponent.ɵfac = function TasksExecutorComponent_Factory(t) { return new (t || TasksExecutorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_task_manager_service__WEBPACK_IMPORTED_MODULE_1__["TaskManagerService"])); };
TasksExecutorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TasksExecutorComponent, selectors: [["app-tasks-executor"]], outputs: { taskIdEmitter: "taskIdEmitter", updateTaskEmitter: "updateTaskEmitter" }, decls: 3, vars: 1, consts: [[1, "assigned-tasks"], [1, "tasks-container"], [3, "task", "taskIdEmitter", "updateTaskEmitter", 4, "ngFor", "ngForOf"], [3, "task", "taskIdEmitter", "updateTaskEmitter"]], template: function TasksExecutorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TasksExecutorComponent_app_user_task_2_Template, 1, 1, "app-user-task", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.assignedTasks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _task_user_task_user_task_component__WEBPACK_IMPORTED_MODULE_3__["UserTaskComponent"]], styles: [".assigned-tasks[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 840px;\n  height: auto;\n}\n\n.tasks-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  align-content: flex-start;\n  width: 840px;\n  height: auto;\n  max-height: 530px;\n  padding: 10px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL3BlcnNvbmFsL3Rhc2tzLWV4ZWN1dG9yL3Rhc2tzLWV4ZWN1dG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW4vcGVyc29uYWwvdGFza3MtZXhlY3V0b3IvdGFza3MtZXhlY3V0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXNzaWduZWQtdGFza3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHdpZHRoOiA4NDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLnRhc2tzLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB3aWR0aDogODQwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiA1MzBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TasksExecutorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tasks-executor',
                templateUrl: './tasks-executor.component.html',
                styleUrls: ['./tasks-executor.component.scss']
            }]
    }], function () { return [{ type: src_app_services_task_manager_service__WEBPACK_IMPORTED_MODULE_1__["TaskManagerService"] }]; }, { taskIdEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], updateTaskEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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
/* harmony import */ var _enums_status_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../enums/status.enums */ "./src/app/enums/status.enums.ts");
/* harmony import */ var _classes_project_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../classes/project.model */ "./src/app/classes/project.model.ts");
/* harmony import */ var _classes_task_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../classes/task.model */ "./src/app/classes/task.model.ts");
/* harmony import */ var _enums_priority_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../enums/priority.enum */ "./src/app/enums/priority.enum.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_task_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/task-manager.service */ "./src/app/services/task-manager.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _services_hash_tag_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../services/hash-tag.service */ "./src/app/services/hash-tag.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _services_enum_to_arr_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../services/enum-to-arr.pipe */ "./src/app/services/enum-to-arr.pipe.ts");

















function TaskFormComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskFormComponent_li_6_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const u_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.setUser(u_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const u_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", u_r5, " ");
} }
function TaskFormComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskFormComponent_li_11_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const p_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r9.setProject(p_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", p_r8.Title, " ");
} }
function TaskFormComponent_li_23_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskFormComponent_li_23_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const p_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r12.pickPriority(p_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", p_r11, " ");
} }
function TaskFormComponent_li_28_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskFormComponent_li_28_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const s_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.pickStatus(s_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", s_r14, " ");
} }
const _c0 = function (a0) { return { hide: a0 }; };
// Компонент - форма для ввода параметров задачи.
class TaskFormComponent {
    constructor(formBuilder, taskManager, userService, projectService, hashTagService) {
        this.formBuilder = formBuilder;
        this.taskManager = taskManager;
        this.userService = userService;
        this.projectService = projectService;
        this.hashTagService = hashTagService;
        // Выходное свойство - закрытие окна.
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        // Поле для выпадающего списка Priority.
        this.priority = _enums_priority_enum__WEBPACK_IMPORTED_MODULE_3__["Priority"];
        // Поле для выпадающего списка Status.
        this.status = _enums_status_enums__WEBPACK_IMPORTED_MODULE_0__["Status"];
        // Поле для заполнения данными при создании задачи.
        this.task = new _classes_task_model__WEBPACK_IMPORTED_MODULE_2__["TaskModel"]();
        // Выбранный проект.
        this.project = new _classes_project_model__WEBPACK_IMPORTED_MODULE_1__["ProjectModel"]();
    }
    // Инициализация компонента.
    ngOnInit() {
        this.hideProjectMenu = true;
        this.hideUserMenu = true;
        this.priorityText = this.task.Priority;
        this.statusText = this.task.Status;
        this.initForm();
    }
    // Инициализация формы.
    initForm() {
        this.taskFormGroup = this.formBuilder.group({
            title: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('[a-zA-Zа-яА-Я0-9]+'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20),
                ],
            ],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(200)]],
            executor: ['', []],
            project: ['', []],
            deadlineDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            priority: ['', []],
            status: ['', []],
        });
        const controls = this.taskFormGroup.controls;
        if (this.changeTask.TaskId) {
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
        this.isValid();
        const controls = this.taskFormGroup.controls;
        this.task.TaskId = this.changeTask.TaskId;
        this.task.AuthorId = localStorage.getItem('username');
        this.task.Title = controls.title.value;
        this.task.Description = controls.description.value;
        this.task.DeadlineDate = controls.deadlineDate.value;
        this.task.ExecutorId = controls.executor.value || this.task.AuthorId;
        this.task.Priority = this.priorityText;
        this.task.ProjectId = this.project.ProjectId;
        // Получение массива хэш-тегов из текста описания задачи.
        this.task.HashTags = this.hashTagService.parseHashTags(this.task.Description);
        if (this.changeTask.TaskId) {
            this.taskManager.changeTask(this.task).subscribe(() => {
                console.log('change task');
            });
        }
        else {
            this.taskManager.addTask(this.task).subscribe(() => {
                console.log('add task');
            });
        }
        this.closeForm();
    }
    // Проверка заполнения формы.
    isValid() {
        const controls = this.taskFormGroup.controls;
        console.log(controls.deadlineDate.value);
        console.log(Date);
        console.log(controls.deadlineDate.value < Date.now());
        return controls.title.valid && controls.description.valid;
    }
    // Выбор приоритета задачи в выпадающем списке.
    pickPriority(p) {
        this.priorityText = p;
    }
    // Выбор статуса задачи в выпадающем списке.
    pickStatus(s) {
        this.statusText = s;
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
TaskFormComponent.ɵfac = function TaskFormComponent_Factory(t) { return new (t || TaskFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_task_manager_service__WEBPACK_IMPORTED_MODULE_6__["TaskManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_hash_tag_service__WEBPACK_IMPORTED_MODULE_9__["HashTagService"])); };
TaskFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TaskFormComponent, selectors: [["app-task-form"]], inputs: { parenTaskId: "parenTaskId", changeTask: "changeTask" }, outputs: { close: "close" }, decls: 34, vars: 19, consts: [[1, "task-form-wrapper"], ["action", "#", "method", "POST", 1, "task-form", 3, "formGroup", "submit"], ["formControlName", "title", "placeholder", "Title", 1, "task-form-input"], ["formControlName", "description", "placeholder", "Description", 1, "task-form-input", "description"], ["formControlName", "executor", "placeholder", "Executor", "readonly", "", 1, "task-form-input", "drop-input", 3, "click"], [1, "drop-down-list", "user-list", 3, "ngClass"], ["class", "drop-menu", 3, "click", 4, "ngFor", "ngForOf"], ["formControlName", "project", "placeholder", "Project", "readonly", "", 1, "task-form-input", "drop-input", 3, "click"], [1, "drop-down-list", "project-list", 3, "ngClass"], [1, "drop-menu", 3, "click"], [1, "priority-status-container"], ["appearance", "fill", 1, "datepicker-field"], [1, "datepicker-label"], ["matInput", "", "formControlName", "deadlineDate", "readonly", "", 1, "datepicker-input", 3, "matDatepicker"], ["matSuffix", "", 1, "datepicker-toggle", 3, "for"], ["picker", ""], ["formControlName", "priority", 1, "hide"], [1, "task-form-list"], ["class", "list-option", 3, "click", 4, "ngFor", "ngForOf"], ["formControlName", "status", 1, "hide"], [1, "button-container"], ["type", "submit", "value", "Submit", 1, "button"], ["type", "button", 1, "button", 3, "click"], [1, "list-option", 3, "click"]], template: function TaskFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submit", function TaskFormComponent_Template_form_submit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskFormComponent_Template_input_click_4_listener() { return ctx.getUsers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, TaskFormComponent_li_6_Template, 2, 1, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskFormComponent_Template_input_click_7_listener() { return ctx.getProjects(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskFormComponent_Template_li_click_9_listener() { return ctx.setNoneProject(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, TaskFormComponent_li_11_Template, 2, 1, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Deadline date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "mat-datepicker-toggle", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "mat-datepicker", null, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, TaskFormComponent_li_23_Template, 2, 1, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "enumToArray");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, TaskFormComponent_li_28_Template, 2, 1, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "enumToArray");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TaskFormComponent_Template_button_click_32_listener() { return ctx.closeForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.taskFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](15, _c0, ctx.hideUserMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](17, _c0, ctx.hideProjectMenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matDatepicker", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.priorityText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 11, ctx.priority));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.statusText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](29, 13, ctx.status));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepicker"]], pipes: [_services_enum_to_arr_pipe__WEBPACK_IMPORTED_MODULE_14__["EnumToArrayPipe"]], styles: [".task-form-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(85, 85, 85, 0.2);\n}\n\n.task-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  position: relative;\n  margin: auto;\n  width: 600px;\n  height: 400px;\n  color: #42464d;\n  background-color: #eff2f5;\n  border: 1px solid #333333;\n  border-radius: 10px;\n  box-shadow: 2px 2px #414141;\n}\n\n.task-form-input[_ngcontent-%COMP%] {\n  position: relative;\n  height: 30px;\n  width: 550px;\n  margin: 10px auto 0 auto;\n  font-size: 1rem;\n  color: #42464d;\n  font-weight: bold;\n  background-color: #b6c3d3;\n  border: 1px solid #8f8f8f;\n  border-radius: 5px;\n}\n\n.task-form-input[_ngcontent-%COMP%]::placeholder {\n  color: #828b97;\n  font-weight: bold;\n}\n\n.description[_ngcontent-%COMP%] {\n  height: 90px;\n  resize: none;\n}\n\n.project-input-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 550px;\n  height: 30px;\n}\n\n.drop-down-list[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 400px;\n  height: auto;\n  min-height: 30px;\n  max-height: 105px;\n  margin-left: 25px;\n  cursor: pointer;\n  overflow: auto;\n}\n\n.project-list[_ngcontent-%COMP%] {\n  top: 237px;\n}\n\n.user-list[_ngcontent-%COMP%] {\n  top: 190px;\n}\n\n.drop-menu[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  width: 100%;\n  height: 30px;\n  color: #42464d;\n  background-color: #b6c3d3;\n}\n\n.drop-input[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.drop-menu[_ngcontent-%COMP%]:hover {\n  background-color: #929daa;\n  color: #ebebeb;\n}\n\n.priority-status-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  margin: 5px 25px;\n}\n\n.task-form-list[_ngcontent-%COMP%] {\n  position: relative;\n  height: 30px;\n  width: 100px;\n  font-size: 1rem;\n  list-style: none;\n  color: #42464d;\n  font-weight: bold;\n  background-color: #b6c3d3;\n  cursor: pointer;\n  border: 1px solid #333333;\n  border-radius: 5px;\n}\n\n.list-option[_ngcontent-%COMP%] {\n  position: absolute;\n  display: none;\n  width: 100px;\n  height: 30px;\n  font-weight: normal;\n  background-color: #b6c3d3;\n  cursor: pointer;\n}\n\n.task-form-list[_ngcontent-%COMP%]:hover   .list-option[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  z-index: 10;\n}\n\n.list-option[_ngcontent-%COMP%]:hover {\n  background-color: #929daa;\n  color: #ebebeb;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  margin: 5px auto;\n}\n\n.button[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 30px;\n  margin: 5px;\n  outline: none;\n  border: 1px solid #1f1f1f;\n  border-radius: 3px;\n  background-color: #6a8fbb;\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  background-color: #48678b;\n}\n\n.button[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.datepicker-field[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 55px;\n  overflow: hidden;\n  background-color: #b6c3d3;\n  border: 1px solid #333333;\n  border-radius: 5px;\n}\n\n.datepicker-label[_ngcontent-%COMP%] {\n  height: 20px;\n  font-size: 1rem;\n  color: #42464d;\n  font-weight: bold;\n}\n\n.datepicker-input[_ngcontent-%COMP%] {\n  height: 20px;\n}\n\n.datepicker-toggle[_ngcontent-%COMP%] {\n  position: relative;\n  top: -10px;\n  height: 20px;\n}\n\n.datepicker-toggle[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YXNrL3Rhc2stZm9ybS90YXNrLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvX2NvbG9yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0NGZ0I7RURHaEIseUJDWHNCO0VEWXRCLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNDZmdCO0VEZ0JoQixpQkFBQTtFQUNBLHlCQ3ZCd0I7RUR3QnhCLHlCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLGNDdEJ1QjtFRHVCdkIsaUJBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUNFLFVBQUE7QUFERjs7QUFJQTtFQUNFLFVBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0M5RGdCO0VEK0RoQix5QkNyRXdCO0FEb0UxQjs7QUFJQTtFQUNFLGVBQUE7QUFERjs7QUFJQTtFQUNFLHlCQzVFOEI7RUQ2RTlCLGNBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNDeEZnQjtFRHlGaEIsaUJBQUE7RUFDQSx5QkNoR3dCO0VEaUd4QixlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQzVHd0I7RUQ2R3hCLGVBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFERjs7QUFJQTtFQUNFLHlCQ3RIOEI7RUR1SDlCLGNBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQ2xJYTtFRG1JYixnQkFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLHlCQ3ZJbUI7QURzSXJCOztBQUlBO0VBQ0Usc0JBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkMzSndCO0VENEp4Qix5QkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNDN0pnQjtFRDhKaEIsaUJBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0FBREYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Rhc2svdGFzay1mb3JtL3Rhc2stZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9yJztcclxuXHJcbi50YXNrLWZvcm0td3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiByZ2IoODUsIDg1LCA4NSksICRhbHBoYTogMC4yKTtcclxufVxyXG5cclxuLnRhc2stZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogNjAwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBjb2xvcjogJG1haW4tdGV4dC1jb2xvcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1jb2xvci1iYWNrZ3JvdW5kO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzMzMzM7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAycHggMnB4ICM0MTQxNDE7XHJcbn1cclxuXHJcbi50YXNrLWZvcm0taW5wdXQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDU1MHB4O1xyXG4gIG1hcmdpbjogMTBweCBhdXRvIDAgYXV0bztcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6ICRtYWluLXRleHQtY29sb3I7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tY29sb3ItYmFja2dyb3VuZC0yO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ZjhmOGY7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4udGFzay1mb3JtLWlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICRtYWluLXBsYWNlaG9sZGVyLWNvbG9yO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gIGhlaWdodDogOTBweDtcclxuICByZXNpemU6IG5vbmU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWlucHV0LWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA1NTBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5kcm9wLWRvd24tbGlzdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWluLWhlaWdodDogMzBweDtcclxuICBtYXgtaGVpZ2h0OiAxMDVweDtcclxuICBtYXJnaW4tbGVmdDogMjVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpc3Qge1xyXG4gIHRvcDogMjM3cHg7XHJcbn1cclxuXHJcbi51c2VyLWxpc3Qge1xyXG4gIHRvcDogMTkwcHg7XHJcbn1cclxuXHJcbi5kcm9wLW1lbnUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgY29sb3I6ICRtYWluLXRleHQtY29sb3I7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tY29sb3ItYmFja2dyb3VuZC0yO1xyXG59XHJcblxyXG4uZHJvcC1pbnB1dCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZHJvcC1tZW51OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1jb2xvci1iYWNrZ3JvdW5kLTItaG92ZXI7XHJcbiAgY29sb3I6ICNlYmViZWI7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1zdGF0dXMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW46IDVweCAyNXB4O1xyXG59XHJcblxyXG4udGFzay1mb3JtLWxpc3Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGNvbG9yOiAkbWFpbi10ZXh0LWNvbG9yO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yLWJhY2tncm91bmQtMjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMzMzMztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5saXN0LW9wdGlvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yLWJhY2tncm91bmQtMjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50YXNrLWZvcm0tbGlzdDpob3ZlciAubGlzdC1vcHRpb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLmxpc3Qtb3B0aW9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1jb2xvci1iYWNrZ3JvdW5kLTItaG92ZXI7XHJcbiAgY29sb3I6ICNlYmViZWI7XHJcbn1cclxuXHJcbi5idXR0b24tY29udGFpbmVyIHtcclxuICBtYXJnaW46IDVweCBhdXRvO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzFmMWYxZjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJ1dHRvbi1jb2xvcjtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJ1dHRvbi1jb2xvci1ob3ZlcjtcclxufVxyXG5cclxuLmJ1dHRvbjphY3RpdmUge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbn1cclxuXHJcbi5oaWRlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZGF0ZXBpY2tlci1maWVsZCB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogNTVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yLWJhY2tncm91bmQtMjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzMzMzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmRhdGVwaWNrZXItbGFiZWwge1xyXG4gIGhlaWdodDogMjBweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6ICRtYWluLXRleHQtY29sb3I7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5kYXRlcGlja2VyLWlucHV0IHtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5kYXRlcGlja2VyLXRvZ2dsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTEwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uZGF0ZXBpY2tlci10b2dnbGU6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG4iLCIkaGVhZGVyLWNvbG9yOiAjNTc1NzU3O1xyXG4kaGVhZGVyLWJvcmRlci1jb2xvcjogI2E4YThhODtcclxuJGZvb3Rlci1jb2xvcjogIzY5NDY0NjtcclxuJG1haW4tbWVudS1jb2xvcjogIzNiNTBiMTtcclxuJG1haW4tbWVudS1idXR0b24tY29sb3I6ICMxOTJjODU7XHJcbiR0aXRsZS10ZXh0LWNvbG9yOiAjYzVjN2NjO1xyXG4kdGFzay1kZXRhaWwtY29sb3I6ICNiNmI2YjY7XHJcbiRtYWluLWNvbG9yLWJhY2tncm91bmQ6ICNlZmYyZjU7XHJcbiRtYWluLWNvbG9yLWJhY2tncm91bmQtaG92ZXI6ICNkN2RhZGQ7XHJcbiRtYWluLWNvbG9yLWJhY2tncm91bmQtMjogI2I2YzNkMztcclxuJG1haW4tY29sb3ItYmFja2dyb3VuZC0yLWhvdmVyOiAjOTI5ZGFhO1xyXG4kbWFpbi1jb2xvci1jb250ZW50OiAjMzE0Mzk2O1xyXG4kbWFpbi1jb2xvci1mb2N1czogIzI3NTA1YTtcclxuJGJ1dHRvbi1jb2xvcjogIzZhOGZiYjtcclxuJGJ1dHRvbi1jb2xvci1ob3ZlcjogIzQ4Njc4YjtcclxuJG1haW4tdGV4dC1jb2xvcjogIzQyNDY0ZDtcclxuJG1haW4tcGxhY2Vob2xkZXItY29sb3I6ICM4MjhiOTc7Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](TaskFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'app-task-form',
                templateUrl: './task-form.component.html',
                styleUrls: ['./task-form.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }, { type: src_app_services_task_manager_service__WEBPACK_IMPORTED_MODULE_6__["TaskManagerService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }, { type: _services_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"] }, { type: _services_hash_tag_service__WEBPACK_IMPORTED_MODULE_9__["HashTagService"] }]; }, { parenTaskId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], changeTask: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _classes_comment_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../classes/comment.model */ "./src/app/classes/comment.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_comment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/comment.service */ "./src/app/services/comment.service.ts");
/* harmony import */ var _services_hash_tag_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/hash-tag.service */ "./src/app/services/hash-tag.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../comment/comment.component */ "./src/app/components/comment/comment.component.ts");









function TaskComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskComponent_a_9_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.sendHashTag($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hashTag_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](hashTag_r2);
} }
function TaskComponent_div_42_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskComponent_div_42_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r7.submitNewComment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TaskComponent_div_42_app_comment_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-comment", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("updateComments", function TaskComponent_div_42_app_comment_7_Template_app_comment_updateComments_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r10.getComments(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("comment", comment_r9);
} }
const _c0 = function (a0) { return { showform: a0 }; };
const _c1 = function (a0) { return { show: a0 }; };
function TaskComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskComponent_div_42_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.newCommentClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "New comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TaskComponent_div_42_a_5_Template, 1, 0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "textarea", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, TaskComponent_div_42_app_comment_7_Template, 1, 1, "app-comment", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, ctx_r1.showCommentForm))("formGroup", ctx_r1.newCommmentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.showCommentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c1, ctx_r1.showCommentForm));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.comments);
} }
// Компонент окно с детализацией задачи.
class TaskComponent {
    constructor(commentService, hashTagService, formBuilder) {
        this.commentService = commentService;
        this.hashTagService = hashTagService;
        this.formBuilder = formBuilder;
        // Выходное свойство, событие закрыть окно.
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        // Выходное свойство, массив задач.
        this.tasksByHashTag = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        // Текст кнопки показать/скрыть комментарий.
        this.commentButtonText = 'Show comments';
    }
    // Инициализация компонента.
    ngOnInit() {
        this.showCommentForm = false;
        this.showComments = false;
        this.project = this.task.ProjectId ? ` : ${this.task.ProjectId}` : '';
        this.commentFormInit();
    }
    // Инициализация формы добавления комментария.
    commentFormInit() {
        this.newCommmentForm = this.formBuilder.group({
            content: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(400),
                ],
            ],
        });
    }
    // Отправка нового комментария.
    submitNewComment() {
        const content = this.newCommmentForm.controls.content;
        if (content.valid) {
            const username = localStorage.getItem('username');
            const commentModel = new _classes_comment_model__WEBPACK_IMPORTED_MODULE_1__["CommentModel"]();
            commentModel.TaskId = this.task.TaskId;
            commentModel.Login = username;
            commentModel.Content = content.value;
            this.commentService.addComment(commentModel).subscribe(() => {
                this.showCommentForm = false;
                this.getComments();
            });
        }
    }
    // Нажатие на кнопку показать/скрыть комментарии.
    onClick() {
        if (!this.showComments) {
            this.getComments();
        }
        this.showComments = !this.showComments;
        this.commentButtonText = this.showComments
            ? 'Hide comments'
            : 'Show comments';
    }
    // Метод получает комментарии задачи.
    getComments() {
        this.commentService
            .getTaskComments(this.task.TaskId)
            .subscribe((data) => {
            if (data) {
                this.comments = data;
            }
        });
    }
    // Метод отсылает хэш-тег и получает массив задач.
    sendHashTag(event) {
        this.hashTagService.getTasks(event.target.innerText).subscribe((data) => {
            if (data) {
                this.tasksByHashTag.emit(data);
            }
        });
    }
    // Метод закрывает окно детализации задачи.
    closeTaskDetail() {
        this.close.emit();
    }
    // Обработчик нажатия на кнопку New comment.
    newCommentClick() {
        if (!this.showCommentForm) {
            // Инициализация поля ввода комментария.
            this.newCommmentForm.controls.content.setValue('');
        }
        // Показ/сокрытие формы ввода комментария.
        this.showCommentForm = !this.showCommentForm;
    }
}
TaskComponent.ɵfac = function TaskComponent_Factory(t) { return new (t || TaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_comment_service__WEBPACK_IMPORTED_MODULE_3__["CommentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_hash_tag_service__WEBPACK_IMPORTED_MODULE_4__["HashTagService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
TaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TaskComponent, selectors: [["app-task"]], inputs: { task: "task" }, outputs: { close: "close", tasksByHashTag: "tasksByHashTag" }, decls: 43, vars: 18, consts: [[1, "task-wrapper"], [1, "task-container"], [1, "task-title"], [1, "task-title__text"], [1, "close", 3, "click"], [1, "task-description"], [1, "task-description__text"], ["class", "task-hash-tags__tags", 3, "click", 4, "ngFor", "ngForOf"], [1, "task-author-executor"], [1, "task-author", "name"], [1, "span"], [1, "task-executor", "name"], [1, "task-status"], [1, "task-status__text"], [1, "task-priority"], [1, "task-priority__text"], [1, "task-date"], [1, "task-create", "date"], [1, "task-deadline", "date"], [1, "button", 3, "click"], ["class", "comment-container", 4, "ngIf"], [1, "task-hash-tags__tags", 3, "click"], [1, "comment-container"], [1, "new-comment-form", 3, "ngClass", "formGroup"], [1, "new-comment-control"], ["type", "button", "value", "New comment", 1, "new-comment-button", 3, "click"], ["class", "icon save", 3, "click", 4, "ngIf"], ["formControlName", "content", 1, "new-comment-textarea", 3, "ngClass"], [3, "comment", "updateComments", 4, "ngFor", "ngForOf"], [1, "icon", "save", 3, "click"], [3, "comment", "updateComments"]], template: function TaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskComponent_Template_div_click_5_listener() { return ctx.closeTaskDetail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, TaskComponent_a_9_Template, 2, 1, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Author:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Executor:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Status:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Priority:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Creation date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Finish before:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](39, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_40_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, TaskComponent_div_42_Template, 8, 9, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx.task.Title, "", ctx.project, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.task.Description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.task.HashTags);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.task.AuthorId, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.task.ExecutorId, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.task.Status, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.task.Priority, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](34, 12, ctx.task.CreateDate, "mediumDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](39, 15, ctx.task.DeadlineDate, "mediumDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.commentButtonText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showComments);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _comment_comment_component__WEBPACK_IMPORTED_MODULE_6__["CommentComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".task-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(85, 85, 85, 0.2);\n}\n\n.task-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  width: 600px;\n  height: 340px;\n  margin: 10px auto 0 auto;\n  background-color: #eff2f5;\n  border: 1px solid #464646;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.task-title[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 50px;\n  margin: 0 auto;\n  background-color: #314396;\n}\n\n.task-title__text[_ngcontent-%COMP%] {\n  width: 550px;\n  text-align: center;\n  font-size: 1.8rem;\n  line-height: 3rem;\n  letter-spacing: 0.6rem;\n  color: #ffffff;\n  overflow: hidden;\n}\n\n.close[_ngcontent-%COMP%] {\n  margin: auto 5px auto auto;\n  width: 35px;\n  height: 35px;\n  background-image: url('close.svg');\n  background-repeat: no-repeat;\n  background-size: contain;\n  cursor: pointer;\n  transition: 0.5s;\n}\n\n.close[_ngcontent-%COMP%]:hover {\n  background-image: url('close_hover.svg');\n}\n\n.task-description[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 140px;\n  margin: 10px auto 5px auto;\n  background-color: #b6c3d3;\n  border: 2px solid #636363;\n  border-radius: 5px;\n}\n\n.task-description__text[_ngcontent-%COMP%] {\n  height: 110px;\n  padding: 5px 10px;\n}\n\n.task-hash-tags[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 20px;\n  margin: 0 auto;\n  overflow: hidden;\n}\n\n.task-hash-tags__tags[_ngcontent-%COMP%] {\n  display: inline;\n  padding: 5px 10px;\n  font-weight: bold;\n  color: #0b47b8;\n  cursor: pointer;\n}\n\n.task-hash-tags__tags[_ngcontent-%COMP%]::before {\n  content: \"#\";\n}\n\n.task-author-executor[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 90%;\n  height: 20px;\n  margin: 0 auto;\n}\n\n.name[_ngcontent-%COMP%] {\n  display: block;\n  width: 300px;\n  height: 30px;\n  text-align: center;\n  font-size: 1rem;\n  font-weight: bold;\n  line-height: 1.2rem;\n  overflow: hidden;\n}\n\n.task-status[_ngcontent-%COMP%] {\n  display: flex;\n  width: 200px;\n  height: 40px;\n}\n\n.task-status__text[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.task-priority[_ngcontent-%COMP%] {\n  display: flex;\n  width: 200px;\n  height: 40px;\n}\n\n.task-priority__text[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.span[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #677286;\n}\n\n.task-date[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 90%;\n  height: 20px;\n  margin: 0 auto;\n}\n\n.date[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.2rem;\n}\n\n.button[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 30px;\n  margin: 5px;\n  outline: none;\n  border: 1px solid #1f1f1f;\n  border-radius: 3px;\n  background-color: #6a8fbb;\n  transition: 0.3s;\n  cursor: pointer;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  background-color: #48678b;\n}\n\n.button[_ngcontent-%COMP%]:active {\n  transform: scaleY(0.95);\n}\n\n.comment-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 600px;\n  height: auto;\n  max-height: 330px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  margin: 0 auto auto auto;\n}\n\n.new-comment-form[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30px;\n  background-color: #eff2f5;\n  border-radius: 10px;\n  border: 1px solid #3d3d3d;\n  transition: 0.5s;\n}\n\n.new-comment-control[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  margin: 4px 15px;\n  border: 1px solid black;\n  background-size: contain;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  border: none;\n  transform: 0.5s;\n}\n\n.save[_ngcontent-%COMP%] {\n  background-image: url('comment_save.svg');\n}\n\n.save[_ngcontent-%COMP%]:hover {\n  background-image: url('comment_save_hover.svg');\n}\n\n.new-comment-button[_ngcontent-%COMP%] {\n  height: 20px;\n  margin: 5px 10px;\n  color: #8f8f8f;\n  cursor: pointer;\n  transition: 0.5s;\n}\n\n.new-comment-button[_ngcontent-%COMP%]:hover {\n  color: #000000;\n}\n\n.new-comment-textarea[_ngcontent-%COMP%] {\n  width: 98%;\n  height: auto;\n  min-height: 60px;\n  max-height: 200px;\n  margin: 5px 5px 10px 5px;\n  padding: 5px;\n  resize: none;\n  background-color: #27505a;\n  color: #eeeeee;\n  border: 1px solid #2b2b2b;\n  border-radius: 5px;\n  transform: scaleY(0);\n  transform-origin: top;\n  transition: 0.5s;\n}\n\n.showform[_ngcontent-%COMP%] {\n  height: 102px;\n}\n\n.show[_ngcontent-%COMP%] {\n  transform: scaleY(1);\n}\n\n.hash-tag[_ngcontent-%COMP%] {\n  color: #2765da;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YXNrL3Rhc2svdGFzay5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvc2Nzcy9fY29sb3Iuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkNic0I7RURjdEIseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJDcEJtQjtBRG1CckI7O0FBSUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLHdDQUFBO0FBREY7O0FBSUE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EseUJDdER3QjtFRHVEeEIseUJBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0FBREY7O0FBSUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQy9JYTtFRGdKYixnQkFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLHlCQ3BKbUI7QURtSnJCOztBQUlBO0VBQ0UsdUJBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkNoTHNCO0VEaUx0QixtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSx5Q0FBQTtBQURGOztBQUlBO0VBQ0UsK0NBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7QUFERjs7QUFJQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkMvTmlCO0VEZ09qQixjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtBQURGOztBQUlBO0VBQ0Usb0JBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQURGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90YXNrL3Rhc2svdGFzay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvYXNzZXRzL3Njc3MvY29sb3JcIjtcclxuXHJcbi50YXNrLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogcmdiKDg1LCA4NSwgODUpLCAkYWxwaGE6IDAuMik7XHJcbn1cclxuXHJcbi50YXNrLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIHdpZHRoOiA2MDBweDtcclxuICBoZWlnaHQ6IDM0MHB4O1xyXG4gIG1hcmdpbjogMTBweCBhdXRvIDAgYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1jb2xvci1iYWNrZ3JvdW5kO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NjQ2NDY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udGFzay10aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tY29sb3ItY29udGVudDtcclxufVxyXG5cclxuLnRhc2stdGl0bGVfX3RleHQge1xyXG4gIHdpZHRoOiA1NTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDNyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNnJlbTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gIG1hcmdpbjogYXV0byA1cHggYXV0byBhdXRvO1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2UvaWNvbi9jbG9zZS5zdmdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDAwLjVzO1xyXG59XHJcblxyXG4uY2xvc2U6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9pY29uL2Nsb3NlX2hvdmVyLnN2Z1wiKTtcclxufVxyXG5cclxuLnRhc2stZGVzY3JpcHRpb24ge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiAxNDBweDtcclxuICBtYXJnaW46IDEwcHggYXV0byA1cHggYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1jb2xvci1iYWNrZ3JvdW5kLTI7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzYzNjM2MztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi50YXNrLWRlc2NyaXB0aW9uX190ZXh0IHtcclxuICBoZWlnaHQ6IDExMHB4O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG59XHJcblxyXG4udGFzay1oYXNoLXRhZ3Mge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi50YXNrLWhhc2gtdGFnc19fdGFncyB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMGI0N2I4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRhc2staGFzaC10YWdzX190YWdzOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiI1wiO1xyXG59XHJcblxyXG4udGFzay1hdXRob3ItZXhlY3V0b3Ige1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjJyZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnRhc2stc3RhdHVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi50YXNrLXN0YXR1c19fdGV4dCB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4udGFzay1wcmlvcml0eSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4udGFzay1wcmlvcml0eV9fdGV4dCB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uc3BhbiB7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgY29sb3I6ICM2NzcyODY7XHJcbn1cclxuXHJcbi50YXNrLWRhdGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjJyZW07XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzFmMWYxZjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJ1dHRvbi1jb2xvcjtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJ1dHRvbi1jb2xvci1ob3ZlcjtcclxufVxyXG5cclxuLmJ1dHRvbjphY3RpdmUge1xyXG4gIHRyYW5zZm9ybTogc2NhbGVZKDAuOTUpO1xyXG59XHJcblxyXG4uY29tbWVudC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHdpZHRoOiA2MDBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogMzMwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgbWFyZ2luOiAwIGF1dG8gYXV0byBhdXRvO1xyXG59XHJcblxyXG4ubmV3LWNvbW1lbnQtZm9ybSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yLWJhY2tncm91bmQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjM2QzZDNkO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5uZXctY29tbWVudC1jb250cm9sIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTZweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgbWFyZ2luOiA0cHggMTVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHRyYW5zZm9ybTogMC41cztcclxufVxyXG5cclxuLnNhdmUge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9pY29uL2NvbW1lbnRfc2F2ZS5zdmdcIik7XHJcbn1cclxuXHJcbi5zYXZlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2UvaWNvbi9jb21tZW50X3NhdmVfaG92ZXIuc3ZnXCIpO1xyXG59XHJcblxyXG4ubmV3LWNvbW1lbnQtYnV0dG9uIHtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luOiA1cHggMTBweDtcclxuICBjb2xvcjogIzhmOGY4ZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLm5ldy1jb21tZW50LWJ1dHRvbjpob3ZlciB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5uZXctY29tbWVudC10ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDk4JTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWluLWhlaWdodDogNjBweDtcclxuICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICBtYXJnaW46IDVweCA1cHggMTBweCA1cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1jb2xvci1mb2N1cztcclxuICBjb2xvcjogI2VlZWVlZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMmIyYjJiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG5cclxuLnNob3dmb3JtIHtcclxuICBoZWlnaHQ6IDEwMnB4O1xyXG59XHJcblxyXG4uc2hvdyB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbn1cclxuXHJcbi5oYXNoLXRhZyB7XHJcbiAgY29sb3I6ICMyNzY1ZGE7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIiwiJGhlYWRlci1jb2xvcjogIzU3NTc1NztcclxuJGhlYWRlci1ib3JkZXItY29sb3I6ICNhOGE4YTg7XHJcbiRmb290ZXItY29sb3I6ICM2OTQ2NDY7XHJcbiRtYWluLW1lbnUtY29sb3I6ICMzYjUwYjE7XHJcbiRtYWluLW1lbnUtYnV0dG9uLWNvbG9yOiAjMTkyYzg1O1xyXG4kdGl0bGUtdGV4dC1jb2xvcjogI2M1YzdjYztcclxuJHRhc2stZGV0YWlsLWNvbG9yOiAjYjZiNmI2O1xyXG4kbWFpbi1jb2xvci1iYWNrZ3JvdW5kOiAjZWZmMmY1O1xyXG4kbWFpbi1jb2xvci1iYWNrZ3JvdW5kLWhvdmVyOiAjZDdkYWRkO1xyXG4kbWFpbi1jb2xvci1iYWNrZ3JvdW5kLTI6ICNiNmMzZDM7XHJcbiRtYWluLWNvbG9yLWJhY2tncm91bmQtMi1ob3ZlcjogIzkyOWRhYTtcclxuJG1haW4tY29sb3ItY29udGVudDogIzMxNDM5NjtcclxuJG1haW4tY29sb3ItZm9jdXM6ICMyNzUwNWE7XHJcbiRidXR0b24tY29sb3I6ICM2YThmYmI7XHJcbiRidXR0b24tY29sb3ItaG92ZXI6ICM0ODY3OGI7XHJcbiRtYWluLXRleHQtY29sb3I6ICM0MjQ2NGQ7XHJcbiRtYWluLXBsYWNlaG9sZGVyLWNvbG9yOiAjODI4Yjk3OyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-task',
                templateUrl: './task.component.html',
                styleUrls: ['./task.component.scss'],
            }]
    }], function () { return [{ type: _services_comment_service__WEBPACK_IMPORTED_MODULE_3__["CommentService"] }, { type: _services_hash_tag_service__WEBPACK_IMPORTED_MODULE_4__["HashTagService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }]; }, { task: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], tasksByHashTag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
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





function UserTaskComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserTaskComponent_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.updateTask(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserTaskComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserTaskComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.deleteTask(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
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
    ngOnInit() {
        const userName = localStorage.getItem('username');
        this.author = userName === this.task.AuthorLogin;
    }
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
UserTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserTaskComponent, selectors: [["app-user-task"]], inputs: { task: "task", author: "author" }, outputs: { taskIdEmitter: "taskIdEmitter", updateTaskEmitter: "updateTaskEmitter" }, decls: 20, vars: 10, consts: [[1, "user-task"], [1, "user-task-container", 3, "click"], [1, "title", "container"], [1, "text"], [1, "description", "container"], [1, "description__text", "text"], [1, "status", "container"], [1, "priority", "container"], [1, "deadline-date", "container"], ["class", "change button", 3, "click", 4, "ngIf"], ["class", "delete button", 3, "click", 4, "ngIf"], [1, "change", "button", 3, "click"], [1, "delete", "button", 3, "click"]], template: function UserTaskComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, UserTaskComponent_button_18_Template, 1, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, UserTaskComponent_button_19_Template, 1, 0, "button", 10);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](17, 7, ctx.task.DeadlineDate, "mediumDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.author);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".user-task[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.user-task-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 700px;\n  height: 50px;\n  padding: 5px;\n  margin: 5px;\n  border-radius: 5px;\n  background-color: #eff2f5;\n  border: 1px solid #000000;\n  transition: 0.4s;\n  cursor: pointer;\n}\n\n.user-task-container[_ngcontent-%COMP%]:hover {\n  background-color: #d7dadd;\n}\n\n.title[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n.description[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.status[_ngcontent-%COMP%] {\n  width: 80px;\n}\n\n.priority[_ngcontent-%COMP%] {\n  width: 80px;\n}\n\n.deadline-date[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  height: 36px;\n  align-items: center;\n  background-color: #b6c3d3;\n  border-radius: 3px;\n  border: 1px solid #000000;\n  overflow: hidden;\n}\n\n.text[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin: auto;\n  color: #383838;\n  font-size: 0.8rem;\n  font-weight: bold;\n  line-height: 0.8rem;\n  text-align: center;\n}\n\n.description__text[_ngcontent-%COMP%] {\n  text-align: justify;\n  height: 100%;\n  padding: 5px;\n}\n\n.button[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin: auto 5px;\n  border: none;\n  background: none;\n  outline: none;\n  transition: 0.4s;\n  border-radius: 100%;\n}\n\n.button[_ngcontent-%COMP%]:active {\n  transform: scale(0.9);\n}\n\n.change[_ngcontent-%COMP%] {\n  background-image: url('task_edit.svg');\n}\n\n.delete[_ngcontent-%COMP%] {\n  background-image: url('task_delete.svg');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YXNrL3VzZXItdGFzay91c2VyLXRhc2suY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL3Njc3MvX2NvbG9yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkNQc0I7RURTdEIseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFLQTtFQUNFLHlCQ2Q0QjtBRFk5Qjs7QUFLQTtFQUNFLFdBQUE7QUFGRjs7QUFLQTtFQUNFLFlBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7QUFGRjs7QUFLQTtFQUNFLFlBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkN4Q3dCO0VEeUN4QixrQkFBQTtFQUNBLHlCQUFBO0VBRUEsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUhGOztBQU1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSkY7O0FBV0E7RUFDRSxxQkFBQTtBQVJGOztBQVdBO0VBQ0Usc0NBQUE7QUFSRjs7QUFXQTtFQUNFLHdDQUFBO0FBUkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Rhc2svdXNlci10YXNrL3VzZXItdGFzay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9yJztcclxuXHJcbi51c2VyLXRhc2sge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbn1cclxuXHJcbi51c2VyLXRhc2stY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiA3MDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1jb2xvci1iYWNrZ3JvdW5kO1xyXG4gIC8vIGJveC1zaGFkb3c6IDJweCAycHggIzVmNWY1ZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udXNlci10YXNrLWNvbnRhaW5lcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tY29sb3ItYmFja2dyb3VuZC1ob3ZlcjtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICB3aWR0aDogNjBweDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5zdGF0dXMge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG59XHJcblxyXG4ucHJpb3JpdHkge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG59XHJcblxyXG4uZGVhZGxpbmUtZGF0ZSB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMzZweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yLWJhY2tncm91bmQtMjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcclxuICAvLyBib3gtc2hhZG93OiAycHggMnB4ICM1ZjVmNWY7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBjb2xvcjogIzM4MzgzODtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsaW5lLWhlaWdodDogMC44cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uX190ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBtYXJnaW46IGF1dG8gNXB4O1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbn1cclxuXHJcbi5idXR0b246aG92ZXIge1xyXG4gIC8vIGJveC1zaGFkb3c6IDAgMCA1cHggIzM0NDI5MTtcclxufVxyXG5cclxuLmJ1dHRvbjphY3RpdmUge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxufVxyXG5cclxuLmNoYW5nZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlL2ljb24vdGFza19lZGl0LnN2Z1wiKTtcclxufVxyXG5cclxuLmRlbGV0ZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlL2ljb24vdGFza19kZWxldGUuc3ZnXCIpO1xyXG59XHJcbiIsIiRoZWFkZXItY29sb3I6ICM1NzU3NTc7XHJcbiRoZWFkZXItYm9yZGVyLWNvbG9yOiAjYThhOGE4O1xyXG4kZm9vdGVyLWNvbG9yOiAjNjk0NjQ2O1xyXG4kbWFpbi1tZW51LWNvbG9yOiAjM2I1MGIxO1xyXG4kbWFpbi1tZW51LWJ1dHRvbi1jb2xvcjogIzE5MmM4NTtcclxuJHRpdGxlLXRleHQtY29sb3I6ICNjNWM3Y2M7XHJcbiR0YXNrLWRldGFpbC1jb2xvcjogI2I2YjZiNjtcclxuJG1haW4tY29sb3ItYmFja2dyb3VuZDogI2VmZjJmNTtcclxuJG1haW4tY29sb3ItYmFja2dyb3VuZC1ob3ZlcjogI2Q3ZGFkZDtcclxuJG1haW4tY29sb3ItYmFja2dyb3VuZC0yOiAjYjZjM2QzO1xyXG4kbWFpbi1jb2xvci1iYWNrZ3JvdW5kLTItaG92ZXI6ICM5MjlkYWE7XHJcbiRtYWluLWNvbG9yLWNvbnRlbnQ6ICMzMTQzOTY7XHJcbiRtYWluLWNvbG9yLWZvY3VzOiAjMjc1MDVhO1xyXG4kYnV0dG9uLWNvbG9yOiAjNmE4ZmJiO1xyXG4kYnV0dG9uLWNvbG9yLWhvdmVyOiAjNDg2NzhiO1xyXG4kbWFpbi10ZXh0LWNvbG9yOiAjNDI0NjRkO1xyXG4kbWFpbi1wbGFjZWhvbGRlci1jb2xvcjogIzgyOGI5NzsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserTaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-user-task',
                templateUrl: './user-task.component.html',
                styleUrls: ['./user-task.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_task_manager_service__WEBPACK_IMPORTED_MODULE_2__["TaskManagerService"] }]; }, { task: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], author: [{
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

/***/ "./src/app/enums/status.enums.ts":
/*!***************************************!*\
  !*** ./src/app/enums/status.enums.ts ***!
  \***************************************/
/*! exports provided: Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
// Перечисление - статус задачи.
var Status;
(function (Status) {
    Status["Await"] = "Await";
    Status["InProcess"] = "InProcess";
    Status["Canceled"] = "Canceled";
    Status["Done"] = "Done";
})(Status || (Status = {}));


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
        this.rootUrl = 'https://localhost:44376';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](),
        };
    }
    // Запрос на получение всех комментариев задачи.
    getTaskComments(taskId) {
        this.httpOptions.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        const route = '/comment/GetCommentsTask';
        return this.http.get(`${this.rootUrl}${route}?taskid=${taskId}`, this.httpOptions);
    }
    // Запрос на добавление комментария.
    addComment(commentModel) {
        const route = '/comment/AddComment';
        const body = commentModel;
        this.httpOptions.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this.http.post(`${this.rootUrl}${route}`, body, this.httpOptions);
    }
    // Запрос на удаление коммента.
    deleteComment(commentId) {
        const route = '/comment/DeleteComment';
        this.httpOptions.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this.http.delete(`${this.rootUrl}${route}?commentId=${commentId}`, this.httpOptions);
    }
    // Запрос на удаление коммента.
    updateComment(comment) {
        const route = '/comment/ChangeComment';
        const body = comment;
        this.httpOptions.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        return this.http.put(`${this.rootUrl}${route}`, body, this.httpOptions);
    }
}
CommentService.ɵfac = function CommentService_Factory(t) { return new (t || CommentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CommentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommentService, factory: CommentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
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

/***/ "./src/app/services/hash-tag.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/hash-tag.service.ts ***!
  \**********************************************/
/*! exports provided: HashTagService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashTagService", function() { return HashTagService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




// Сервис представляет функции работы с хэш-тегами.
class HashTagService {
    constructor(http) {
        this.http = http;
        this.rootUrl = 'https://localhost:44376';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"](),
        };
    }
    // Функция ищет и возвращает массив тегов (слова, начинающиеся с #).
    parseHashTags(text) {
        var _a;
        const regExp = /#[0-9a-zA-Zа-яА-Я]+\b/gu;
        let hashTags = (_a = text.match(regExp)) === null || _a === void 0 ? void 0 : _a.map(s => s.slice(1));
        return hashTags;
    }
    // Запрос на получение всех задач по хэш-тегу.
    getTasks(hashTag) {
        const route = '/HashTag/getTasks';
        return this.http.get(`${this.rootUrl}${route}?hashTag=${hashTag}`);
    }
    // Функция отправляет post запрос на сервер для регистрации нового пользователя
    addHashTags(hashTags, taskId) {
        const route = '/HashTag/AddHashTags';
        const body = hashTags;
        return this.http.post(`${this.rootUrl}${route}?taskId=${taskId}`, body);
    }
}
HashTagService.ɵfac = function HashTagService_Factory(t) { return new (t || HashTagService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
HashTagService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HashTagService, factory: HashTagService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HashTagService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


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
    // Запрос на получение задач пользователя, в которыйх он является автором.
    getUserTasks(username) {
        this.httpOptions.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        const route = '/task/gettasksbyuser';
        return this.http.get(`${this.rootUrl}${route}?loginId=${username}`, this.httpOptions);
    }
    // Запрос на получение задач пользователя.
    GetAssignedTasks(username) {
        this.httpOptions.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        const route = '/task/GetAssignedTasks';
        return this.http.get(`${this.rootUrl}${route}?userName=${username}`, this.httpOptions);
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
        const route = '/identity/GetAllUserNames';
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

module.exports = __webpack_require__(/*! C:\Users\PG01\Documents\Yury\git\_NET-project\frontend\frontend-tracking-system\Gates\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
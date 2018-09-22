(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _components_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/preloader/preloader.component */ "./src/app/components/preloader/preloader.component.ts");
/* harmony import */ var _components_intro_parallax_intro_parallax_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/intro-parallax/intro-parallax.component */ "./src/app/components/intro-parallax/intro-parallax.component.ts");
/* harmony import */ var _components_home_banner_home_banner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home-banner/home-banner.component */ "./src/app/components/home-banner/home-banner.component.ts");
/* harmony import */ var _components_our_process_our_process_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/our-process/our-process.component */ "./src/app/components/our-process/our-process.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/services/services.component */ "./src/app/components/services/services.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_parallax2_parallax2_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/parallax2/parallax2.component */ "./src/app/components/parallax2/parallax2.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/timeline/timeline.component */ "./src/app/components/timeline/timeline.component.ts");
/* harmony import */ var _components_team_team_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/team/team.component */ "./src/app/components/team/team.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/map/map.component */ "./src/app/components/map/map.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _components_video_slider_video_slider_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/video-slider/video-slider.component */ "./src/app/components/video-slider/video-slider.component.ts");
/* harmony import */ var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/about-us/about-us.component */ "./src/app/pages/about-us/about-us.component.ts");
/* harmony import */ var _pages_students_students_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/students/students.component */ "./src/app/pages/students/students.component.ts");
/* harmony import */ var _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/contact-us/contact-us.component */ "./src/app/pages/contact-us/contact-us.component.ts");
/* harmony import */ var _components_student_services_student_services_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/student-services/student-services.component */ "./src/app/components/student-services/student-services.component.ts");
/* harmony import */ var _components_student_program_options_student_program_options_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/student-program-options/student-program-options.component */ "./src/app/components/student-program-options/student-program-options.component.ts");
/* harmony import */ var _components_student_overview_student_overview_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/student-overview/student-overview.component */ "./src/app/components/student-overview/student-overview.component.ts");
/* harmony import */ var _pages_application_application_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/application/application.component */ "./src/app/pages/application/application.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var appRoutes = [
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'students', component: _pages_students_students_component__WEBPACK_IMPORTED_MODULE_22__["StudentsComponent"] },
    { path: 'about-us', component: _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_21__["AboutUsComponent"] },
    { path: 'contact-us', component: _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_23__["ContactUsComponent"] },
    { path: 'application', component: _pages_application_application_component__WEBPACK_IMPORTED_MODULE_27__["ApplicationComponent"] },
    { path: '**', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_6__["PreloaderComponent"],
                _components_intro_parallax_intro_parallax_component__WEBPACK_IMPORTED_MODULE_7__["IntroParallaxComponent"],
                _components_home_banner_home_banner_component__WEBPACK_IMPORTED_MODULE_8__["HomeBannerComponent"],
                _components_our_process_our_process_component__WEBPACK_IMPORTED_MODULE_9__["OurProcessComponent"],
                _components_services_services_component__WEBPACK_IMPORTED_MODULE_10__["ServicesComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                _components_parallax2_parallax2_component__WEBPACK_IMPORTED_MODULE_12__["Parallax2Component"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_14__["TimelineComponent"],
                _components_team_team_component__WEBPACK_IMPORTED_MODULE_15__["TeamComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"],
                _components_map_map_component__WEBPACK_IMPORTED_MODULE_17__["MapComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
                _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_19__["ProjectsComponent"],
                _components_video_slider_video_slider_component__WEBPACK_IMPORTED_MODULE_20__["VideoSliderComponent"],
                _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_21__["AboutUsComponent"],
                _pages_students_students_component__WEBPACK_IMPORTED_MODULE_22__["StudentsComponent"],
                _pages_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_23__["ContactUsComponent"],
                _components_student_services_student_services_component__WEBPACK_IMPORTED_MODULE_24__["StudentServicesComponent"],
                _components_student_program_options_student_program_options_component__WEBPACK_IMPORTED_MODULE_25__["StudentProgramOptionsComponent"],
                _components_student_overview_student_overview_component__WEBPACK_IMPORTED_MODULE_26__["StudentOverviewComponent"],
                _pages_application_application_component__WEBPACK_IMPORTED_MODULE_27__["ApplicationComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { enableTracing: true })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"about\" class=\"background1 section-padding\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 section-title text-center\">\n        <h2>About</h2>\n        <span class=\"section-divider\"></span>\n      </div>\n      <!-- /.column -->\n    </div>\n    <!-- /.row -->\n    <div class=\"row mb15\">\n      <div class=\"col-sm-5 leftReveal\">\n        <h5 class=\"heading-1 mb20\">Our Mission</h5>\n        <h3 class=\"mb15 no-margin-top\">Design, Develop, and\n          <br>Innovate to make a difference...</h3>\n        <p class=\"no-margin text-small\">We take people with hard work ethic, a desire for healthy lifestyle, and a belief in humanity a chance to make their <b>idealism reality</b>.</p>\n      </div>\n      <!-- /.column -->\n      <div class=\"col-sm-7 mt30-xs rightReveal\">\n        <h5 class=\"heading-1 mb20\">About Us</h5>\n        <span class=\"icon-handle-streamline-vector logo-about\"></span>\n        <p> We are a grass roots non-profit tech company / coding school offering students from any socioeconomic background\n          the opportunity to learn valuable skills, and make a truly significant\n          <b>impact on the world</b> through gobal and local technological innovation. We like to think of ourselves as the\n          <b>'peace corps' of the tech industry.</b>\n        </p>\n      </div>\n      <!-- /.column -->\n    </div>\n    <!-- /.row -->\n    <div class=\"row mb30\">\n      <div class=\"col-sm-9 leftReveal\">\n        <h5 class=\"heading-1 mb20\">Why?</h5>\n        <p class=\"lead no-margin\">Because we believe in people. Because we've been there. Because we know that people chasing capital gain will never\n          make the same difference as people chasing change. Because we believe we can make a difference in the world with\n          technology!</p>\n      </div>\n      <!-- /.column -->\n      <div class=\"col-sm-3 mt30-xs rightReveal\">\n        <h5 class=\"heading-1 mb20\">Quote</h5>\n        <p class=\"no-margin text-small\">\n          <i>\"Technology was developed to prevent exhausting labor. It is now dedicated to trivial conveniences.\" B.F. Skinner.\n            (Citadel)\n          </i>\n        </p>\n      </div>\n      <!-- /.column -->\n    </div>\n      <!-- /.column -->\n      <div class=\"col\">\n        <div id=\"about-carousel\" class=\"basic-carousel carousel slide\" data-ride=\"carousel\">\n          <!-- Indicators -->\n          <ol class=\"carousel-indicators\">\n            <li data-target=\"#about-carousel\" data-slide-to=\"0\" class=\"active\"></li>\n            <li data-target=\"#about-carousel\" data-slide-to=\"1\"></li>\n            <li data-target=\"#about-carousel\" data-slide-to=\"2\"></li>\n          </ol>\n\n          <!-- Wrapper for slides -->\n          <div class=\"carousel-inner\" role=\"listbox\">\n            <div class=\"item active\">\n              <img src=\"assets/images/placeholder.png\" alt=\"...\" class=\"img-responsive\">\n            </div>\n            <div class=\"item\">\n              <img src=\"assets/images/placeholder2.png\" alt=\"...\" class=\"img-responsive\">\n            </div>\n            <div class=\"item\">\n              <img src=\"assets/images/placeholder3.png\" alt=\"...\" class=\"img-responsive\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- /.column -->\n   \n    <!-- /.row -->\n  </div>\n  <!-- /.container -->\n</section>\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"contact\" class=\"background2 section-padding\">\n  <div class=\"container\">\n    <div class=\"row mb30\">\n      <div class=\"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 section-title text-center\">\n        <h2>Contact</h2>\n        <span class=\"section-divider mb15\"></span>\n        <p class=\"no-margin scaleReveal\">Our team is from all over the world and we know how to deliver quality pixels from miles away.</p>\n      </div>\n      <!-- /.column -->\n    </div>\n    <!-- /.row -->\n    <div class=\"row\">\n      <div class=\"col-sm-5 col-lg-4\">\n        <h5 class=\"heading-1 mb20\">Visit Us</h5>\n        <h4 class=\"mb15\">142 Pelican Drive • 1252nd Floor, Suite 420\n          <br>New York City, New York 99912</h4>\n        <p class=\"no-margin text-xs-small\">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates. Temporibus\n          autem quibusdam et aut.</p>\n        <hr class=\"mini-hr\">\n        <p class=\"text-xs-small mb5\">\n          <strong class=\"text-switch\">Email:</strong> info@particle.com</p>\n        <p class=\"text-xs-small mb5\">\n          <strong class=\"text-switch\">Phone:</strong> +1 212-249-2390</p>\n        <p class=\"text-xs-small mb5\">\n          <strong class=\"text-switch\">Fax:</strong> +1 112-444-2390</p>\n      </div>\n      <!-- /.column -->\n      <div class=\"col-sm-6 col-lg-7 mt30-xs\">\n        <form data-toggle=\"validator\" id=\"contactForm\" name=\"contactForm\">\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <div class=\"controls\">\n                  <input class=\"form-control\" data-error=\"This section is required.\" id=\"msg_subject\" placeholder=\"Subject *\" required=\"\" type=\"text\">\n                  <div class=\"help-block with-errors\"></div>\n                </div>\n              </div>\n            </div>\n            <!-- /.column -->\n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <div class=\"controls\">\n                  <input class=\"form-control\" id=\"phone\" placeholder=\"Phone\" type=\"text\">\n                </div>\n              </div>\n            </div>\n            <!-- /.column -->\n          </div>\n          <!-- /.row -->\n          <div class=\"row mb10\">\n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <div class=\"controls\">\n                  <input class=\"form-control\" data-error=\"This section is required.\" id=\"name\" placeholder=\"Your Name *\" required=\"\" type=\"text\">\n                  <div class=\"help-block with-errors\"></div>\n                </div>\n              </div>\n            </div>\n            <!-- /.column -->\n            <div class=\"col-sm-6\">\n              <div class=\"form-group\">\n                <div class=\"controls\">\n                  <input class=\"email form-control\" data-error=\"This section is required.\" id=\"email\" placeholder=\"Email *\" required=\"\" type=\"email\">\n                  <div class=\"help-block with-errors\"></div>\n                </div>\n              </div>\n            </div>\n            <!-- /.column -->\n          </div>\n          <!-- /.row -->\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"form-group\">\n                <div class=\"controls\">\n                  <textarea class=\"form-control\" data-error=\"This section is required.\" id=\"message\" placeholder=\"Message *\" required=\"\" rows=\"5\"></textarea>\n                  <div class=\"help-block with-errors\"></div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row mt15\">\n            <div class=\"col-sm-6\">\n              <div id=\"msgSubmit\" class=\"h4 hidden mt10 no-margin-bottom\"></div>\n            </div>\n            <!-- /.column -->\n            <div class=\"col-sm-6 text-right\">\n              <button type=\"submit\" id=\"submit\" class=\"btn btn-default btn-lg\">Send</button>\n            </div>\n            <!-- /.column -->\n          </div>\n          <!-- /.row -->\n        </form>\n        <!-- /.form -->\n      </div>\n      <!-- /.column -->\n    </div>\n    <!-- /.row -->\n  </div>\n  <!-- /.container -->\n</section>"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer-padding\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-8 col-sm-offset-2 text-center\">\n        <span class=\"icon-handle-streamline-vector logo\"></span>\n          <h1> future<b>Corps</b> </h1>\n        <a href=\"#\">\n          <span class=\"ion-social-twitter social-icons-dark-hover mr15\"></span>\n        </a>\n        <a href=\"#\">\n          <span class=\"ion-social-facebook social-icons-dark-hover mr15\"></span>\n        </a>\n        <a href=\"#\">\n          <span class=\"ion-social-googleplus-outline social-icons-dark-hover\"></span>\n        </a>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-8 col-sm-offset-2 text-small text-center\">\n        <hr>\n        <button type=\"button\" class=\"btn btn-primary btn-up-footer btn-lg scroll-top\">Up</button>\n        <p class=\"no-margin\">&copy; Denis Samardjiev</p>\n      </div>\n      <!-- /.column -->\n    </div>\n    <!-- /.row -->\n  </div>\n  <!-- /.container -->\n</footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home-banner/home-banner.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/home-banner/home-banner.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.container.center-vertically-holder > div > div > img {\n    Height: auto;\n    width: 60%;\n    display: inline;\n    opacity: .9;\n}\n\n div.container.center-vertically-holder > div > div > p{\n     text-align: right;\n     margin-left: 200px;\n }\n\n div.container.center-vertically-holder > div > div > h1 {\n    color: black;\n}\n\n #home > div.container.center-vertically-holder > div > div > h1 > strong {\n    color: #fff;\n}"

/***/ }),

/***/ "./src/app/components/home-banner/home-banner.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/home-banner/home-banner.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-main\" id=\"home\">\n  <div id=\"particles-js\"></div>\n  <!-- /.particles div -->\n  <div class=\"container center-vertically-holder\">\n    <div class=\"center-vertically\">\n      <div class=\"col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3 text-center\">\n        <img src=\"assets/images/futureCorps-logo2.png\" alt=\"1\" class=\"img-responsive logo\"> \n        <h1 class=\"scaleReveal\">\n            future<strong>Corps</strong>\n        </h1>\n        <hr class=\"bottomReveal\">\n        <p class=\"bottomReveal\"> &amp; modern web development school\n          <i>+</i>&nbsp; coding nonprofit.</p>\n        <a href=\"#ideology\" data-id=\"ideology\" class=\"scroll-link\">\n          <div class=\"scroll-indicator rotateBottomReveal\">\n            <span class=\"ion-mouse\"></span>\n            <br>\n            <span class=\"ion-android-arrow-down arrow-scroll-indicator\"></span>\n          </div>\n        </a>\n      </div>\n      <!-- /.column -->\n    </div>\n    <!-- /.vertical center -->\n  </div>\n  <!-- /.container -->\n</div>\n"

/***/ }),

/***/ "./src/app/components/home-banner/home-banner.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/home-banner/home-banner.component.ts ***!
  \*****************************************************************/
/*! exports provided: HomeBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeBannerComponent", function() { return HomeBannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeBannerComponent = /** @class */ (function () {
    function HomeBannerComponent() {
        this.name = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].name;
    }
    HomeBannerComponent.prototype.ngOnInit = function () {
    };
    HomeBannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-banner',
            template: __webpack_require__(/*! ./home-banner.component.html */ "./src/app/components/home-banner/home-banner.component.html"),
            styles: [__webpack_require__(/*! ./home-banner.component.css */ "./src/app/components/home-banner/home-banner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeBannerComponent);
    return HomeBannerComponent;
}());



/***/ }),

/***/ "./src/app/components/intro-parallax/intro-parallax.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/intro-parallax/intro-parallax.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/intro-parallax/intro-parallax.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/intro-parallax/intro-parallax.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"ideology\">\n\n  <!-- Begin Hello Intro -->\n  <div id=\"hello-intro\" class=\"pt60 pb60\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-2 col-sm-3\">\n          <h2 class=\"no-margin rotateLeftReveal\">Hello.</h2>\n        </div>\n        <div class=\"col-lg-10 col-sm-9 mt30-xs\">\n          <h3 class=\"no-margin rightReveal\">We are a <b>non-profit technology company, offering students an incredible opportunity</b>. Ever want to code, but just can't afford the start up cost? Ever dream of <b>making a difference in your world</b> by <b>innovative technology</b>? Want more <b>structure, healthy habits</b>, and <b>purpose</b> in your life? Welcome to the <b>'Peace Corps'</b> of the <b>tech industry</b>.</h3>\n        </div>\n      </div>\n      <!-- /.row -->\n    </div>\n    <!-- /.container -->\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/components/intro-parallax/intro-parallax.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/intro-parallax/intro-parallax.component.ts ***!
  \***********************************************************************/
/*! exports provided: IntroParallaxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroParallaxComponent", function() { return IntroParallaxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroParallaxComponent = /** @class */ (function () {
    function IntroParallaxComponent() {
    }
    IntroParallaxComponent.prototype.ngOnInit = function () {
    };
    IntroParallaxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-intro-parallax',
            template: __webpack_require__(/*! ./intro-parallax.component.html */ "./src/app/components/intro-parallax/intro-parallax.component.html"),
            styles: [__webpack_require__(/*! ./intro-parallax.component.css */ "./src/app/components/intro-parallax/intro-parallax.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroParallaxComponent);
    return IntroParallaxComponent;
}());



/***/ }),

/***/ "./src/app/components/map/map.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/map/map.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/map/map.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/map/map.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"map\"></div>\n\n"

/***/ }),

/***/ "./src/app/components/map/map.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/map/map.component.ts ***!
  \*************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapComponent = /** @class */ (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/components/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/components/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#bs-example-navbar-collapse-1 > ul > li.dropdown > ol > li:nth-child(3) > a {\n    position: relative;\n}\n\n#bs-example-navbar-collapse-1 > ul > li.dropdown > ol > {\n    background-color: azure;\n    opacity: .6;\n}\n\n#bs-example-navbar-collapse-1 > ul > li.dropdown > ol > li:nth-child(3) > a {\n    border-left: none;\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <!-- Begin Navigation -->\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"navbar-header\">\n          <button routerLink=\"home\" type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"_parent\"\n            aria-haspopup=\"true\" aria-expanded=\"false\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand scroll-link\" routerLink=\"home\" data-id=\"home\">\n            <span class=\"icon-handle-streamline-vector logo\"></span>\n          </a>\n        </div>\n\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li>\n              <a routerLink=\"home\" class=\"#bs-example-navbar-collapse-1\" target=\"_parent\">Onward to the Future</a>\n            </li>\n            <li class=\"dropdown\">\n              <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <span class=\"glyphicon glyphicon-menu-down\"></span>\n              </a>\n              <ol class=\"dropdown-menu\">\n                <li>\n                  <a routerLink=\"/students\">Students</a>\n                </li>\n                <li>\n                  <a href=\"https://workflowy.com/\" target=\"_blank\">Administration</a>\n                </li>\n                <li>\n                    <a class=\"dropdown-menu dropdown-divider\"></a>\n                  </li>\n                <br>\n                <li>\n                  <a routerLink=\"/about-us\">About Us</a>\n                </li>\n                <li>\n                  <a href=\"https://www.gofundme.com/support-futurecorps\" target='blank'>Donate </a>\n                </li>\n                <li>\n                  <a routerLink=\"/contact-us\" target=\"_parent\">Contact</a>\n                </li>\n              </ol>\n            </li>\n          </ul>\n        </div>\n        <!-- /.navbar-collapse -->\n      </div>\n    </div>\n    <!-- /.container-fluid -->\n  </nav>\n  <!-- End Navigation -->\n</header>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        window.addEventListener('click', function () {
            var homeButton = document.getElementsByClassName('navbar-toggle collapsed');
            if (homeButton) {
                location.reload();
            }
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/our-process/our-process.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/our-process/our-process.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/our-process/our-process.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/our-process/our-process.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"our-process\">\n  <div id=\"our-process-title\" class=\"pt30 pb30\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 text-center\">\n          <h4 class=\"no-margin\">Our Process</h4>\n        </div>\n      </div>\n      <!-- /.row -->\n    </div>\n    <!-- /.container -->\n  </div>\n  <!-- /.div -->\n  <!-- End Our Process Title -->\n\n  <!-- Begin Our Process -->\n  <div id=\"our-process\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-4 col-md-4 col-lg-4 process-box text-center pt50 pb50\">\n          <div class=\"leftReveal\">\n            <div class=\"process-intro\">\n              <h3 class=\"process-number\">01</h3>\n              <div>\n                <span class=\"process-icons pe-7s-users rotateBottomReveal\"></span>\n              </div>\n              <h2>Intentional\n                <br>Living</h2>\n            </div>\n            <div class=\"process-content\">\n              <div>\n                <span class=\"process-icons pe-7s-users\"></span>\n              </div>\n              <h2 class=\"mt15 mb20\">Intentional\n                <br>Living</h2>\n              <p class=\"no-margin\">By eating healthy and excercising, working toward community, and growing in personal development - you can't\n                leave Future Corps without changing your life for the better.</p>\n            </div>\n          </div>\n          <!-- /.animation -->\n        </div>\n        <!-- /.column -->\n        <div class=\"col-sm-4 col-md-4 col-lg-4 process-box text-center pt50 pb50\">\n          <div class=\"bottomReveal\">\n            <div class=\"process-intro\">\n              <h3 class=\"process-number\">02</h3>\n              <div>\n                <span class=\"process-icons pe-7s-diamond rotateBottomReveal\"></span>\n              </div>\n              <h2>Innovative\n                <br>Tech\n                <br>Development\n              </h2>\n            </div>\n            <div class=\"process-content\">\n              <div>\n                <span class=\"process-icons pe-7s-diamond\"></span>\n              </div>\n              <h2 class=\"mt15 mb20\">Innovative\n                <br>Tech\n                <br>Development</h2>\n              <p class=\"no-margin\">We specialize in Python, Html, Css, Javascript, Angular, and that's just the beginning. From apps to websites,\n                AI to robotics, the sky is the limit at {{ name }}.</p>\n            </div>\n          </div>\n          <!-- /.animation -->\n        </div>\n        <!-- /.column -->\n        <div class=\"col-sm-4 col-md-4 col-lg-4 process-box text-center pt50 pb50 no-border-right\">\n          <div class=\"rightReveal\">\n            <div class=\"process-intro\">\n              <h3 class=\"process-number\">03</h3>\n              <div>\n                <span class=\"process-icons pe-7s-rocket rotateBottomReveal\"></span>\n              </div>\n              <h2>Graduate\n                <br>by\n                <br>Getting\n                <br>Hired\n              </h2>\n            </div>\n            <div class=\"process-content\">\n              <div>\n                <span class=\"process-icons pe-7s-rocket\"></span>\n              </div>\n              <h2 class=\"mt15 mb20\">Graduate\n                <br>by\n                <br>Getting\n                <br>Hired\n              </h2>\n              <p class=\"no-margin\">While we are a small start-up we are working with affiliates in the area and gaining a reputation for our students.\n                If you can't get a job when you're finished at Future Corps, we will get you one with our affiliates. Some students will even go on to be Future Corps staff!</p>\n            </div>\n          </div>\n          <!-- /.animation -->\n        </div>\n        <!-- /.column -->\n      </div>\n      <!-- /.row -->\n    </div>\n    <!-- /.container -->\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/our-process/our-process.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/our-process/our-process.component.ts ***!
  \*****************************************************************/
/*! exports provided: OurProcessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurProcessComponent", function() { return OurProcessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OurProcessComponent = /** @class */ (function () {
    function OurProcessComponent() {
    }
    OurProcessComponent.prototype.ngOnInit = function () {
    };
    OurProcessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-our-process',
            template: __webpack_require__(/*! ./our-process.component.html */ "./src/app/components/our-process/our-process.component.html"),
            styles: [__webpack_require__(/*! ./our-process.component.css */ "./src/app/components/our-process/our-process.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OurProcessComponent);
    return OurProcessComponent;
}());



/***/ }),

/***/ "./src/app/components/parallax2/parallax2.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/parallax2/parallax2.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/parallax2/parallax2.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/parallax2/parallax2.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"ourcount\" class=\"section-padding parallax-window our-count\" data-parallax=\"scroll\" data-image-src=\"assets/images/slider1.jpg\">\n  <div class=\"container\">\n    <div class=\"row mb30\">\n      <div class=\"section-title col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3 text-center\">\n        <h2>The Count</h2>\n        <span class=\"section-divider mb15\"></span>\n        <p class=\"no-margin\">We have spent various amounts of time on activities. Oh and we like coffee and free time as well.</p>\n      </div>\n      <!-- /.column -->\n    </div>\n    <!-- /.row -->\n    <div class=\"row\">\n      <div class=\"col-sm-6 col-md-3 item leftReveal\">\n        <div class=\"circle-hold\">\n          <i class=\"ion-coffee\"></i>\n        </div>\n        <h2 class=\"timer mb5\" data-from=\"1\" data-to=\"4321\" data-refresh-interval=\"20\">1</h2>\n        <p class=\"no-margin\">Cups of coffee</p>\n      </div>\n      <!-- /.column -->\n      <div class=\"col-sm-6 col-md-3 item mt30-xs rightReveal\">\n        <div class=\"circle-hold\">\n          <i class=\"ion-code\"></i>\n        </div>\n        <h2 class=\"timer mb5\" data-from=\"1\" data-to=\"15381\" data-refresh-interval=\"20\">1</h2>\n        <p class=\"no-margin\">Lines of code</p>\n      </div>\n      <!-- /.column -->\n      <div class=\"col-sm-6 col-md-3 item mt30-xs mt30-sm leftReveal\">\n        <div class=\"circle-hold\">\n          <i class=\"ion-android-people\"></i>\n        </div>\n        <h2 class=\"timer mb5\" data-from=\"1\" data-to=\"\" data-refresh-interval=\"20\">1</h2>\n        <p class=\"no-margin\">Employees</p>\n      </div>\n      <!-- /.column -->\n      <div class=\"col-sm-6 col-md-3 item mt30-xs mt30-sm rightReveal\">\n        <div class=\"circle-hold\">\n          <i class=\"ion-android-restaurant\"></i>\n        </div>\n        <h2 class=\"timer mb5\" data-from=\"1\" data-to=\"921\" data-refresh-interval=\"20\">1</h2>\n        <p class=\"no-margin\">Fuck's given.</p>\n      </div>\n      <!-- /.column -->\n    </div>\n    <!-- /.row -->\n  </div>\n  <!-- /.container -->\n</section>"

/***/ }),

/***/ "./src/app/components/parallax2/parallax2.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/parallax2/parallax2.component.ts ***!
  \*************************************************************/
/*! exports provided: Parallax2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parallax2Component", function() { return Parallax2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Parallax2Component = /** @class */ (function () {
    function Parallax2Component() {
    }
    Parallax2Component.prototype.ngOnInit = function () {
    };
    Parallax2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parallax2',
            template: __webpack_require__(/*! ./parallax2.component.html */ "./src/app/components/parallax2/parallax2.component.html"),
            styles: [__webpack_require__(/*! ./parallax2.component.css */ "./src/app/components/parallax2/parallax2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Parallax2Component);
    return Parallax2Component;
}());



/***/ }),

/***/ "./src/app/components/preloader/preloader.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/preloader/preloader.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/preloader/preloader.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/preloader/preloader.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"royal_preloader\">\n</div>"

/***/ }),

/***/ "./src/app/components/preloader/preloader.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/preloader/preloader.component.ts ***!
  \*************************************************************/
/*! exports provided: PreloaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreloaderComponent", function() { return PreloaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PreloaderComponent = /** @class */ (function () {
    function PreloaderComponent() {
    }
    PreloaderComponent.prototype.ngOnInit = function () {
    };
    PreloaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preloader',
            template: __webpack_require__(/*! ./preloader.component.html */ "./src/app/components/preloader/preloader.component.html"),
            styles: [__webpack_require__(/*! ./preloader.component.css */ "./src/app/components/preloader/preloader.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PreloaderComponent);
    return PreloaderComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"profile\" class=\"background2 section-padding\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 section-title text-center\">\n        <h2>Profile</h2>\n        <span class=\"section-divider\"></span>\n      </div>\n      <!-- /.column -->\n    </div>\n    <!-- /.row -->\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <img alt=\"\" src=\"assets/images/team-member-1.jpg\" class=\"img-responsive\">\n        <div class=\"profile-box\">\n          <ul class=\"list-unstyled\">\n            <li>\n              <strong>Name:</strong> Denis Samardjiev</li>\n            <li>\n              <strong>Nationality:</strong> Bulgaria</li>\n            <li>\n              <strong>Position:</strong> Top Dog</li>\n            <li>\n              <strong>Phone:</strong> (000) 1234 5678</li>\n            <li>\n              <strong>Email:</strong> yourmail@iamx.com</li>\n          </ul>\n        </div>\n      </div>\n      <!-- column -->\n      <div class=\"col-sm-8 mt30-xs\">\n        <h5 class=\"heading-1 mb20\">Intro</h5>\n        <h3 class=\"mb15 no-margin-top\">Hi, my name is Denis Samardjiev. I am the project leader.</h3>\n        <p class=\"text-small text-switch\">No, thank ye, Bunger, said the English Captain, \"he's welcome to the arm he has, since I can't help it, and didn't\n          know him then; but not to another one. No more White Whales for me; I've lowered for him once.</p>\n        <span class=\"divider\"></span>\n        <p class=\"text-small\">\"Well, then,\" interrupted Bunger, \"give him your left arm for bait to get the right. Do you know, gentlemen\"—very\n          gravely and mathematically bowing to each Captain in succession—\"Do you know, gentlemen, that the digestive organs\n          of the whale are so inscrutably constructed by Divine Providence, that it is quite impossible for him to completely\n          digest even a man's arm? And he knows it too.</p>\n        <h5 class=\"heading-1 mt20 mb20\">Skills</h5>\n        <div class=\"progress\">\n          <div class=\"progress-bar text-left\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\">\n            Development\n          </div>\n        </div>\n        <div class=\"progress\">\n          <div class=\"progress-bar text-left\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 75%;\">\n            Design\n          </div>\n        </div>\n        <div class=\"progress\">\n          <div class=\"progress-bar text-left\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 90%;\">\n            Icon Design\n          </div>\n        </div>\n        <div class=\"progress-meter\">\n          <div class=\"meter meter-left\" style=\"width: 30%;\">\n            <span class=\"meter-text\">Beginner</span>\n          </div>\n          <div class=\"meter meter-left\" style=\"width: 20%;\">\n            <span class=\"meter-text\">Intermediate</span>\n          </div>\n          <div class=\"meter meter-right\" style=\"width: 20%;\">\n            <span class=\"meter-text\">Professional</span>\n          </div>\n          <div class=\"meter meter-right\" style=\"width: 30%;\">\n            <span class=\"meter-text\">Master</span>\n          </div>\n        </div>\n        <p class=\"text-small mt50 no-margin-bottom\">\n          <span class=\"text-switch\">\"Good God!\"</span> cried the English Captain, to whom the question was put. \"What's the matter? He was heading\n          east, I think.—Is your Captain crazy?\" whispering Fedallah.</p>\n      </div>\n      <!-- /.column -->\n    </div>\n    <!-- /.row -->\n  </div>\n  <!-- /.container -->\n</section>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/projects/projects.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/projects/projects.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/projects/projects.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/projects/projects.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"work\" class=\"background1 section-padding-top\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12 section-title text-center\">\n\t\t\t\t\t<h2>Projects</h2>\n\t\t\t\t\t<span class=\"section-divider mb15\"></span>\n\t\t\t\t\t<p class=\"mb30 scaleReveal\">We do awesome stuff. Yeah.</p>\n\t\t\t\t</div><!-- /.column -->\n\t\t\t</div><!-- /.row -->\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12 text-center mb50\">\n\t\t\t\t\t<!-- Filter Buttons -->\n\t\t\t\t\t<button class=\"filter btn btn-default btn-category btn-lg\" data-filter=\"all\">All</button>\n\t\t\t\t\t<button class=\"filter btn btn-default btn-category btn-lg\" data-filter=\".identity\">Identity</button>\n\t\t\t\t\t<button class=\"filter btn btn-default btn-category btn-lg\" data-filter=\".print\">Print</button>\n\t\t\t\t\t<button class=\"filter btn btn-default btn-category btn-lg\" data-filter=\".graphics\">Graphics</button>\n\t\t\t\t\t<button class=\"filter btn btn-default btn-category btn-lg\" data-filter=\".web\">Web</button>\n\n\t\t\t\t\t<!-- Sort Buttons -->\n\t\t\t\t\t<button class=\"sort btn btn-default btn-sort btn-lg\" data-sort=\"my-order:asc\"><span class=\"ion-ios-plus-empty\"></span></button>\n\t\t\t\t\t<button class=\"sort btn btn-default btn-sort btn-lg\" data-sort=\"my-order:desc\"><span class=\"ion-ios-minus-empty\"></span></button>\n\t\t\t\t</div><!-- /.column -->\n\t\t\t</div><!-- /.row -->\n\t\t\t<div id=\"thework\">\n\t\t\t\t<!-- Item 1 -->\n\t\t\t    <div class=\"col-xs-12 col-sm-6 portfolio-box no-padding mix graphics\" data-my-order=\"3\">\n\t\t\t    \t<div class=\"portfolio-image-holder\"><img src=\"http://via.placeholder.com/750x750\" alt=\"1\" class=\"img-responsive portfolio-image\"></div>\n\t\t\t    \t<span class=\"portfolio-badge badge\">Graphics</span>\n\t\t\t    \t<span class=\"portfolio-hover\">\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t<a href=\"https://dribbble.com/\" target=\"_blank\">\n\t\t\t\t\t\t\t\t<span class=\"portfolio-links\"><span class=\"ion-ios-arrow-right portfolio-links-icons\"></span></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a routerLink=\"http://via.placeholder.com/750x750\" class=\"zoom\" title=\"Equipt Design\">\n\t\t\t\t\t\t\t\t<span class=\"portfolio-links\"><span class=\"ion-arrow-expand portfolio-links-icons\"></span></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<span class=\"project-title no-margin-bottom mt10\">Equipt Design</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</span>\n\t\t\t    </div><!-- /.column -->\n\n\t\t\t    <!-- Item 2 -->\n\t\t\t    <div class=\"col-xs-12 col-sm-6 portfolio-box no-padding mix print identity\" data-my-order=\"6\">\n\t\t\t    \t<div class=\"portfolio-image-holder\"><img src=\"http://via.placeholder.com/750x750\" alt=\"2\" class=\"img-responsive portfolio-image\"></div>\n\t\t\t    \t<span class=\"portfolio-badge badge\">Print + Identity</span>\n\t\t\t    \t<span class=\"portfolio-hover\">\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t<a href=\"https://dribbble.com/\" target=\"_blank\">\n\t\t\t\t\t\t\t\t<span class=\"portfolio-links\"><span class=\"ion-ios-arrow-right portfolio-links-icons\"></span></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a href=\"http://via.placeholder.com/750x750\" class=\"zoom\" title=\"Goodman's Burger\">\n\t\t\t\t\t\t\t\t<span class=\"portfolio-links\"><span class=\"ion-arrow-expand portfolio-links-icons\"></span></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<span class=\"project-title no-margin-bottom mt10\">Goodman's Burger</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</span>\n\t\t\t    </div><!-- /.column -->\n\n\t\t\t    <!-- Item 3 -->\n\t\t\t    <div class=\"col-xs-12 col-sm-6 portfolio-box no-padding mix identity\" data-my-order=\"4\">\n\t\t\t    \t<div class=\"portfolio-image-holder\"><img src=\"http://via.placeholder.com/750x750\" alt=\"3\" class=\"img-responsive portfolio-image\"></div>\n\t\t\t    \t<span class=\"portfolio-badge badge\">Print</span>\n\t\t\t    \t<span class=\"portfolio-hover\">\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t<a href=\"https://dribbble.com/\" target=\"_blank\">\n\t\t\t\t\t\t\t\t<span class=\"portfolio-links\"><span class=\"ion-ios-arrow-right portfolio-links-icons\"></span></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a href=\"http://via.placeholder.com/750x750\" class=\"zoom\" title=\"Paper Mockup\">\n\t\t\t\t\t\t\t\t<span class=\"portfolio-links\"><span class=\"ion-arrow-expand portfolio-links-icons\"></span></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<span class=\"project-title no-margin-bottom mt10\">Paper Mockup</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</span>\n\t\t\t    </div><!-- /.column -->\n\n\t\t\t    <!-- Item 4 -->\n\t\t\t    <div class=\"col-xs-12 col-sm-6 portfolio-box no-padding mix graphics\" data-my-order=\"5\">\n\t\t\t    \t<div class=\"portfolio-image-holder\"><img src=\"http://via.placeholder.com/750x750\" alt=\"4\" class=\"img-responsive portfolio-image\"></div>\n\t\t\t    \t<span class=\"portfolio-badge badge\">Graphics</span>\n\t\t\t    \t<span class=\"portfolio-hover\">\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t<a href=\"https://dribbble.com/\" target=\"_blank\">\n\t\t\t\t\t\t\t\t<span class=\"portfolio-links\"><span class=\"ion-ios-arrow-right portfolio-links-icons\"></span></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a href=\"http://via.placeholder.com/750x750\" class=\"zoom\" title=\"Simple Pleasure\">\n\t\t\t\t\t\t\t\t<span class=\"portfolio-links\"><span class=\"ion-arrow-expand portfolio-links-icons\"></span></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<span class=\"project-title no-margin-bottom mt10\">Simple Pleasure</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</span>\n\t\t\t    </div><!-- /.column -->\n\n\t\t\t    <!-- Item 5 -->\n\t\t\t    <div class=\"col-xs-12 col-sm-6 portfolio-box no-padding mix print identity\" data-my-order=\"2\">\n\t\t\t    \t<div class=\"portfolio-image-holder\"><img src=\"http://via.placeholder.com/750x750\" alt=\"5\" class=\"img-responsive portfolio-image\"></div>\n\t\t\t    \t<span class=\"portfolio-badge badge\">Print + Identity</span>\n\t\t\t    \t<span class=\"portfolio-hover\">\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t<a href=\"https://dribbble.com/\" target=\"_blank\">\n\t\t\t\t\t\t\t\t<span class=\"portfolio-links\"><span class=\"ion-ios-arrow-right portfolio-links-icons\"></span></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a href=\"http://via.placeholder.com/750x750\" class=\"zoom\" title=\"Wine Bottles\">\n\t\t\t\t\t\t\t\t<span class=\"portfolio-links\"><span class=\"ion-arrow-expand portfolio-links-icons\"></span></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<span class=\"project-title no-margin-bottom mt10\">Wine Bottles</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</span>\n\t\t\t    </div><!-- /.column -->\n\n\t\t\t    <!-- Item 6 -->\n\t\t\t    <div class=\"col-xs-12 col-sm-6 portfolio-box no-padding mix web\" data-my-order=\"1\">\n\t\t\t    \t<div class=\"portfolio-image-holder\"><img src=\"http://via.placeholder.com/750x750\" alt=\"6\" class=\"img-responsive portfolio-image\"></div>\n\t\t\t    \t<span class=\"portfolio-badge badge\">Web</span>\n\t\t\t    \t<span class=\"portfolio-hover\">\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t<a href=\"https://dribbble.com/\" target=\"_blank\">\n\t\t\t\t\t\t\t\t<span class=\"portfolio-links\"><span class=\"ion-ios-arrow-right portfolio-links-icons\"></span></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a href=\"http://via.placeholder.com/750x750\" class=\"zoom\" title=\"Web UI\">\n\t\t\t\t\t\t\t\t<span class=\"portfolio-links\"><span class=\"ion-arrow-expand portfolio-links-icons\"></span></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<span class=\"project-title no-margin-bottom mt10\">Web UI</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</span>\n\t\t\t    </div><!-- /.column -->\n\n\t\t\t    <!-- Item 7 -->\n\t\t\t    <div class=\"col-xs-12 col-sm-6 portfolio-box no-padding mix graphics print\" data-my-order=\"9\">\n\t\t\t    \t<div class=\"portfolio-image-holder\"><img src=\"http://via.placeholder.com/750x750\" alt=\"7\" class=\"img-responsive portfolio-image\"></div>\n\t\t\t    \t<span class=\"portfolio-badge badge\">Graphics + Print</span>\n\t\t\t    \t<span class=\"portfolio-hover\">\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t<a href=\"https://dribbble.com/\" target=\"_blank\">\n\t\t\t\t\t\t\t\t<span class=\"portfolio-links\"><span class=\"ion-ios-arrow-right portfolio-links-icons\"></span></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a href=\"http://via.placeholder.com/750x750\" class=\"zoom\" title=\"Hello World\">\n\t\t\t\t\t\t\t\t<span class=\"portfolio-links\"><span class=\"ion-arrow-expand portfolio-links-icons\"></span></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<span class=\"project-title no-margin-bottom mt10\">Hello World</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</span>\n\t\t\t    </div><!-- /.column -->\n\n\t\t\t    <!-- Item 8 -->\n\t\t\t    <div class=\"col-xs-12 col-sm-6 portfolio-box no-padding mix web\" data-my-order=\"7\">\n\t\t\t    \t<div class=\"portfolio-image-holder\"><img src=\"http://via.placeholder.com/750x750\" alt=\"8\" class=\"img-responsive portfolio-image\"></div>\n\t\t\t    \t<span class=\"portfolio-badge badge\">Web</span>\n\t\t\t    \t<span class=\"portfolio-hover\">\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t<a href=\"https://dribbble.com/\" target=\"_blank\">\n\t\t\t\t\t\t\t\t<span class=\"portfolio-links\"><span class=\"ion-ios-arrow-right portfolio-links-icons\"></span></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a href=\"http://via.placeholder.com/750x750\" class=\"zoom\" title=\"We Create Mobile\">\n\t\t\t\t\t\t\t\t<span class=\"portfolio-links\"><span class=\"ion-arrow-expand portfolio-links-icons\"></span></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<span class=\"project-title no-margin-bottom mt10\">We Create Mobile</span>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</span>\n\t\t\t    </div><!-- /.column -->\n\n\t\t\t</div><!-- /.row -->\n\t\t</div><!-- /.container -->\n\t</section><!-- /.section -->\n"

/***/ }),

/***/ "./src/app/components/projects/projects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/components/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/components/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/components/services/services.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/services/services.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.tech-container {\n    margin-bottom: 25px;\n}"

/***/ }),

/***/ "./src/app/components/services/services.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/services/services.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"services\" class=\"background2 section-padding\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 section-title text-center\">\n        <h2>Services</h2>\n        <span class=\"section-divider\"></span>\n      </div><!-- /.column -->\n    </div><!-- /.row -->\n\n    <div class=\"row\">\n      <!-- Item 1 -->\n      <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-4\">\n        <div class=\"services-box leftReveal\">\n          <span class=\"pe-7s-airplay services-icon\"></span>\n          <h3 class=\"service-name\">1. Web Design</h3>\n          <p class=\"text-small\">Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.</p>\n          <button type=\"button\" class=\"btn btn-default mt10\" data-toggle=\"modal\" data-target=\"#item1-services\">Info</button>\n        </div>\n      </div><!-- /.column -->\t\n        <!-- Item 1 Modal -->\n      <div class=\"modal fade\" id=\"item1-services\" tabindex=\"-1\" role=\"dialog\">\n          <div class=\"modal-dialog\">\n              <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span class=\"ion-ios-close-empty\"></span>\n                      </button>\n                      <span class=\"pe-7s-airplay services-icon-2\"></span>\n                      <h4 class=\"service-title\">Web Design</h4>\n                  </div>\n                  <div class=\"modal-body\">\n                      <p>No, thank ye, Bunger, said the English Captain, \"he's welcome to the arm he has, since I can't help it, and didn't know him then; but not to another one. No more White Whales for me; I've lowered for him once.</p>\n                      <h5 class=\"heading-1 modal-heading mb20\">Why us</h5>\n                      <p>\"Well, then,\" interrupted Bunger, \"give him your left arm for bait to get the right. Do you know, gentlemen\"—very gravely and mathematically bowing to each Captain in succession—\"Do you know, gentlemen, that the digestive organs of the whale are so inscrutably constructed by Divine Providence, that it is quite impossible for him to completely digest even a man's arm? And he knows it too.</p>\n                      <h5 class=\"heading-1 modal-heading mb20\">Focusing</h5>\n                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed.</p>\n                      <h5 class=\"heading-1 modal-heading mb20\">Professionals</h5>\n                      <p class=\"no-margin-bottom\">\"Good God!\" cried the English Captain, to whom the question was put. \"What's the matter? He was heading east, I think.—Is your Captain crazy?\" whispering Fedallah. Phasellus pulvinar lacinia elit nec tristique.</p>\n                  </div>\n              </div><!-- /.modal-content -->\n          </div><!-- /.modal-dialog -->\n      </div><!-- /.modal -->\n\n      <!-- Item 2 -->\n      <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-4 mt30-xs\">\n        <div class=\"services-box topReveal\">\n          <span class=\"services-badge badge\">New</span>\n          <span class=\"pe-7s-phone services-icon\"></span>\n          <h3 class=\"service-name\">2. Applications</h3>\n          <p class=\"text-small\">Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.</p>\n          <button type=\"button\" class=\"btn btn-default mt10\" data-toggle=\"modal\" data-target=\"#item2-services\">Info</button>\n        </div>\n      </div><!-- /.column -->\t\n        <!-- Item 2 Modal -->\n      <div class=\"modal fade\" id=\"item2-services\" tabindex=\"-1\" role=\"dialog\">\n          <div class=\"modal-dialog\">\n              <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span class=\"ion-ios-close-empty\"></span>\n                      </button>\n                      <span class=\"pe-7s-phone services-icon-2\"></span>\n                      <h4 class=\"service-title\">Applications</h4>\n                  </div>\n                  <div class=\"modal-body\">\n                      <p>No, thank ye, Bunger, said the English Captain, \"he's welcome to the arm he has, since I can't help it, and didn't know him then; but not to another one. No more White Whales for me; I've lowered for him once.</p>\n                      <h5 class=\"heading-1 modal-heading mb20\">Why us</h5>\n                      <p>\"Well, then,\" interrupted Bunger, \"give him your left arm for bait to get the right. Do you know, gentlemen\"—very gravely and mathematically bowing to each Captain in succession—\"Do you know, gentlemen, that the digestive organs of the whale are so inscrutably constructed by Divine Providence, that it is quite impossible for him to completely digest even a man's arm? And he knows it too.</p>\n                      <h5 class=\"heading-1 modal-heading mb20\">Focusing</h5>\n                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed.</p>\n                      <h5 class=\"heading-1 modal-heading mb20\">Professionals</h5>\n                      <p class=\"no-margin-bottom\">\"Good God!\" cried the English Captain, to whom the question was put. \"What's the matter? He was heading east, I think.—Is your Captain crazy?\" whispering Fedallah. Phasellus pulvinar lacinia elit nec tristique.</p>\n                  </div>\n              </div><!-- /.modal-content -->\n          </div><!-- /.modal-dialog -->\n      </div><!-- /.modal -->\n\n      <!-- Item 3 -->\n      <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-4 mt30-sm mt30-xs\">\n        <div class=\"services-box rightReveal\">\n          <span class=\"pe-7s-camera services-icon\"></span>\n          <h3 class=\"service-name\">3. Photography</h3>\n          <p class=\"text-small\">Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.</p>\n          <button type=\"button\" class=\"btn btn-default mt10\" data-toggle=\"modal\" data-target=\"#item3-services\">Info</button>\n        </div>\n      </div><!-- /.column -->\t\n        <!-- Item 3 Modal -->\n      <div class=\"modal fade\" id=\"item3-services\" tabindex=\"-1\" role=\"dialog\">\n          <div class=\"modal-dialog\">\n              <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span class=\"ion-ios-close-empty\"></span>\n                      </button>\n                      <span class=\"pe-7s-camera services-icon-2\"></span>\n                      <h4 class=\"service-title\">Photography</h4>\n                  </div>\n                  <div class=\"modal-body\">\n                      <p>No, thank ye, Bunger, said the English Captain, \"he's welcome to the arm he has, since I can't help it, and didn't know him then; but not to another one. No more White Whales for me; I've lowered for him once.</p>\n                      <h5 class=\"heading-1 modal-heading mb20\">Why us</h5>\n                      <p>\"Well, then,\" interrupted Bunger, \"give him your left arm for bait to get the right. Do you know, gentlemen\"—very gravely and mathematically bowing to each Captain in succession—\"Do you know, gentlemen, that the digestive organs of the whale are so inscrutably constructed by Divine Providence, that it is quite impossible for him to completely digest even a man's arm? And he knows it too.</p>\n                      <h5 class=\"heading-1 modal-heading mb20\">Focusing</h5>\n                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed.</p>\n                      <h5 class=\"heading-1 modal-heading mb20\">Professionals</h5>\n                      <p class=\"no-margin-bottom\">\"Good God!\" cried the English Captain, to whom the question was put. \"What's the matter? He was heading east, I think.—Is your Captain crazy?\" whispering Fedallah. Phasellus pulvinar lacinia elit nec tristique.</p>\n                  </div>\n              </div><!-- /.modal-content -->\n          </div><!-- /.modal-dialog -->\n      </div><!-- /.modal -->\n\n      <!-- Item 4 -->\n      <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-4 mt30\">\n        <div class=\"services-box leftReveal\">\n          <span class=\"services-badge badge\">New</span>\n          <span class=\"pe-7s-anchor services-icon\"></span>\n          <h3 class=\"service-name\">4. Iconography</h3>\n          <p class=\"text-small\">Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.</p>\n          <button type=\"button\" class=\"btn btn-default mt10\" data-toggle=\"modal\" data-target=\"#item4-services\">Info</button>\n        </div>\n      </div><!-- /.column -->\t\n        <!-- Item 4 Modal -->\n      <div class=\"modal fade\" id=\"item4-services\" tabindex=\"-1\" role=\"dialog\">\n          <div class=\"modal-dialog\">\n              <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span class=\"ion-ios-close-empty\"></span>\n                      </button>\n                      <span class=\"pe-7s-anchor services-icon-2\"></span>\n                      <h4 class=\"service-title\">Iconography</h4>\n                  </div>\n                  <div class=\"modal-body\">\n                      <p>No, thank ye, Bunger, said the English Captain, \"he's welcome to the arm he has, since I can't help it, and didn't know him then; but not to another one. No more White Whales for me; I've lowered for him once.</p>\n                      <h5 class=\"heading-1 modal-heading mb20\">Why us</h5>\n                      <p>\"Well, then,\" interrupted Bunger, \"give him your left arm for bait to get the right. Do you know, gentlemen\"—very gravely and mathematically bowing to each Captain in succession—\"Do you know, gentlemen, that the digestive organs of the whale are so inscrutably constructed by Divine Providence, that it is quite impossible for him to completely digest even a man's arm? And he knows it too.</p>\n                      <h5 class=\"heading-1 modal-heading mb20\">Focusing</h5>\n                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed.</p>\n                      <h5 class=\"heading-1 modal-heading mb20\">Professionals</h5>\n                      <p class=\"no-margin-bottom\">\"Good God!\" cried the English Captain, to whom the question was put. \"What's the matter? He was heading east, I think.—Is your Captain crazy?\" whispering Fedallah. Phasellus pulvinar lacinia elit nec tristique.</p>\n                  </div>\n              </div><!-- /.modal-content -->\n          </div><!-- /.modal-dialog -->\n      </div><!-- /.modal -->\n\n      <!-- Item 5 -->\n      <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-4 mt30\">\n        <div class=\"services-box bottomReveal\">\n          <span class=\"pe-7s-users services-icon\"></span>\n          <h3 class=\"service-name\">5. Support</h3>\n          <p class=\"text-small\">Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.</p>\n          <button type=\"button\" class=\"btn btn-default mt10\" data-toggle=\"modal\" data-target=\"#item5-services\">Info</button>\n        </div>\n      </div><!-- /.column -->\t\n        <!-- Item 5 Modal -->\n      <div class=\"modal fade\" id=\"item5-services\" tabindex=\"-1\" role=\"dialog\">\n          <div class=\"modal-dialog\">\n              <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span class=\"ion-ios-close-empty\"></span>\n                      </button>\n                      <span class=\"pe-7s-users services-icon-2\"></span>\n                      <h4 class=\"service-title\">Support</h4>\n                  </div>\n                  <div class=\"modal-body\">\n                      <p>No, thank ye, Bunger, said the English Captain, \"he's welcome to the arm he has, since I can't help it, and didn't know him then; but not to another one. No more White Whales for me; I've lowered for him once.</p>\n                      <h5 class=\"heading-1 modal-heading mb20\">Why us</h5>\n                      <p>\"Well, then,\" interrupted Bunger, \"give him your left arm for bait to get the right. Do you know, gentlemen\"—very gravely and mathematically bowing to each Captain in succession—\"Do you know, gentlemen, that the digestive organs of the whale are so inscrutably constructed by Divine Providence, that it is quite impossible for him to completely digest even a man's arm? And he knows it too.</p>\n                      <h5 class=\"heading-1 modal-heading mb20\">Focusing</h5>\n                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed.</p>\n                      <h5 class=\"heading-1 modal-heading mb20\">Professionals</h5>\n                      <p class=\"no-margin-bottom\">\"Good God!\" cried the English Captain, to whom the question was put. \"What's the matter? He was heading east, I think.—Is your Captain crazy?\" whispering Fedallah. Phasellus pulvinar lacinia elit nec tristique.</p>\n                  </div>\n              </div><!-- /.modal-content -->\n          </div><!-- /.modal-dialog -->\n      </div><!-- /.modal -->\n\n      <!-- Item 6 -->\n      <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-4 mt30\">\n        <div class=\"services-box rightReveal\">\n          <span class=\"services-badge badge\">New</span>\n          <span class=\"pe-7s-volume services-icon\"></span>\n          <h3 class=\"service-name\">6. Audio</h3>\n          <p class=\"text-small\">Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.</p>\n          <button type=\"button\" class=\"btn btn-default mt10\" data-toggle=\"modal\" data-target=\"#item6-services\">Info</button>\n        </div>\n      </div><!-- /.column -->\t\n        <!-- Item 6 Modal -->\n      <div class=\"modal fade\" id=\"item6-services\" tabindex=\"-1\" role=\"dialog\">\n          <div class=\"modal-dialog\">\n              <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span class=\"ion-ios-close-empty\"></span>\n                      </button>\n                      <span class=\"pe-7s-volume services-icon-2\"></span>\n                      <h4 class=\"service-title\">Audio</h4>\n                  </div>\n                  <div class=\"modal-body\">\n                      <p>No, thank ye, Bunger, said the English Captain, \"he's welcome to the arm he has, since I can't help it, and didn't know him then; but not to another one. No more White Whales for me; I've lowered for him once.</p>\n                      <h5 class=\"heading-1 modal-heading mb20\">Why us</h5>\n                      <p>\"Well, then,\" interrupted Bunger, \"give him your left arm for bait to get the right. Do you know, gentlemen\"—very gravely and mathematically bowing to each Captain in succession—\"Do you know, gentlemen, that the digestive organs of the whale are so inscrutably constructed by Divine Providence, that it is quite impossible for him to completely digest even a man's arm? And he knows it too.</p>\n                      <h5 class=\"heading-1 modal-heading mb20\">Focusing</h5>\n                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed.</p>\n                      <h5 class=\"heading-1 modal-heading mb20\">Professionals</h5>\n                      <p class=\"no-margin-bottom\">\"Good God!\" cried the English Captain, to whom the question was put. \"What's the matter? He was heading east, I think.—Is your Captain crazy?\" whispering Fedallah. Phasellus pulvinar lacinia elit nec tristique.</p>\n                  </div>\n              </div><!-- /.modal-content -->\n          </div><!-- /.modal-dialog -->\n      </div><!-- /.modal -->\n    </div><!-- /.row -->\n  </div><!-- /.container -->\n</section><!-- /.section -->"

/***/ }),

/***/ "./src/app/components/services/services.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/services/services.component.ts ***!
  \***********************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
        this.techs = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].tech;
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/components/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/components/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/components/student-overview/student-overview.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/student-overview/student-overview.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/student-overview/student-overview.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/student-overview/student-overview.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Begin Quote Carousel -->\n<div id=\"carousel\" class=\"testimonial-carousel pt40 pb20\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-10 col-md-offset-1 text-center\">\n          <span class=\"pe-7s-close heading-3-icon\"></span>\n          <div class=\"fade-quote-carousel carousel slide\" id=\"quote-carousel\" data-ride=\"carousel\" data-interval=\"10000\">\n            <!-- Carousel indicators -->\n            <ol class=\"carousel-indicators\">\n              <li data-target=\"#quote-carousel\" data-slide-to=\"0\" class=\"active\"></li>\n              <li data-target=\"#quote-carousel\" data-slide-to=\"1\"></li>\n              <li data-target=\"#quote-carousel\" data-slide-to=\"2\"></li>\n            </ol>\n            <!-- Carousel items -->\n            <div class=\"carousel-inner\">\n              <div class=\"active item\">\n                <blockquote>\n                  <p>Our coding school is only a part of our dream at FC. Our greater goal is to build the technology that will\n                    ensure prosperity and ease of living for the future.</p>\n                </blockquote>\n              </div>\n              <div class=\"item\">\n                <blockquote>\n                  <p>We want to build technology that revolutionizes the world and we think you have what it takes! Students work\n                    on developing projects that could serve as fundraisers or assist with graduate projects. . .</p>\n                </blockquote>\n              </div>\n              <div class=\"item\">\n                <blockquote>\n                  <p>While graduates work on some the most exciting projects in the world of technology!</p>\n                </blockquote>\n              </div>\n            </div>\n  \n          </div>\n          <!-- /.carousel -->\n        </div>\n        <!-- /.column -->\n      </div>\n      <!-- /.row -->\n    </div>\n    <!-- /.container -->\n  </div>\n  <!-- /.carousel -->\n  <!-- End Quote Carousel -->\n  "

/***/ }),

/***/ "./src/app/components/student-overview/student-overview.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/student-overview/student-overview.component.ts ***!
  \***************************************************************************/
/*! exports provided: StudentOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentOverviewComponent", function() { return StudentOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentOverviewComponent = /** @class */ (function () {
    function StudentOverviewComponent() {
    }
    StudentOverviewComponent.prototype.ngOnInit = function () {
    };
    StudentOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student-overview',
            template: __webpack_require__(/*! ./student-overview.component.html */ "./src/app/components/student-overview/student-overview.component.html"),
            styles: [__webpack_require__(/*! ./student-overview.component.css */ "./src/app/components/student-overview/student-overview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StudentOverviewComponent);
    return StudentOverviewComponent;
}());



/***/ }),

/***/ "./src/app/components/student-program-options/student-program-options.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/student-program-options/student-program-options.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/student-program-options/student-program-options.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/student-program-options/student-program-options.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"pricing-option2\" class=\"background2 section-padding\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"section-title col-xs-12 text-center\">\n        <h2>So you want to join the Corps?</h2>\n        <span class=\"section-divider mb15\"></span>\n        <p class=\"no-margin\">But how far are you willing to go?</p>\n      </div>\n      <!-- /.column -->\n    </div>\n    <!-- /.row -->\n\n    <div class=\"row mt50\">\n      <!-- Item 1 -->\n      <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-4 mt30-xs topReveal\">\n        <ul class=\"plan plan2 featured\">\n          <li class=\"plan-name\">Part Time</li>\n          <li>\n            <strong>20hrs</strong> per week - dedicated to future\n            <b>Corps</b> web development & tech innovation.</li>\n          <li>\n            <strong>Free</strong> Tuition</li>\n          <li>Live the\n            <strong>lifestyle you want!</strong>\n          </li>\n          <li>Just cover your\n            <strong> expenses. </strong>\n          </li>\n          <li>\n            <strong> Be on time, work hard, </strong> who knows? You might just fall in love with the future\n            <b>Corps</b> lifestyle.\n          </li>\n          <li class=\"plan-action\">\n            <a class=\"btn btn-default btn-lg\" routerLink=\"students/application\">Apply Now</a>\n          </li>\n        </ul>\n      </div>\n      <!-- /.column -->\n\n      <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-4 mt30-xs topReveal\">\n        <ul class=\"plan plan2 featured\">\n          <li class=\"plan-name\">Minimalist</li>\n          <li>\n            <strong>40hrs</strong> per week - dedicated to future\n            <b>Corps</b> web development or tech innovation.</li>\n          <li>\n            <strong>Free</strong> Tuition, Room, and Board - and the freedom to work part time elsewhere to cover any additional\n            personal expenses i.e. phone bill, car payment, insurance.</li>\n          <li>Live the\n            <strong>lifestyle</strong> of the\n            <strong>Corps!</strong>\n          </li>\n          <li>Think about your life and where it's headed?\n            <strong> Could it be better? </strong> More\n            <strong> structured, healthy, purposeful?</strong>\n          </li>\n          <li> Work at your own pace to\n            <strong>accomplish great innovations in yourself and technology </strong>. Prove you're future\n            <b>Corps</b> and you'll land a\n            <strong> 3 month internship</strong> with our affiliate\n            <strong>Onflo</strong> and maybe even get asked to stay around as\n            staff!</li>\n          <li class=\"plan-action\">\n            <a class=\"btn btn-default btn-lg\" routerLink=\"students/application\">Apply Now</a>\n          </li>\n        </ul>\n      </div>\n\t  <!-- /.column -->\n\n\t  <!-- Item 2 -->\n      <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-4 mt30-xs topReveal\">\n\t\t\t<ul class=\"plan plan2 featured\">\n\t\t\t  <li class=\"plan-name\">Ultra-Minimalist</li>\n\t\t\t  <li>\n\t\t\t\t<strong>45hrs +</strong> per week - dedicated to future\n\t\t\t\t<b>Corps</b> web development & tech innovation.</li>\n\t\t\t  <li>\n\t\t\t\t<strong>This is not for everyone!</strong> But if you want to get the most out of your time, get ahead of your peers\n\t\t\t\ton developement, graduate early, and even make some money while at future\n\t\t\t\t<b>Corps</b>, than this program is for you!\n\t\t\t  </li>\n\t\t\t  <li>\n\t\t\t\t<strong>Free</strong> Tuition, Room, and Board</li>\n\t\t\t  <li>Live the\n\t\t\t\t<strong>lifestyle</strong> of a true\n\t\t\t\t<strong>technilogical mind</strong> under\n\t\t\t\t<strong>future\n\t\t\t\t  <b>Corps</b> values!</strong>\n\t\t\t  </li>\n\t\t\t  <li>\n\t\t\t\t<strong> Graduate Early! </strong> Future\n\t\t\t\t<b>Corps</b> Ultra-Minimalist members are not required to leave early form the program, but may opt out of their year contract at <strong>month 10</strong> if they've\n\t\t\t\tshown commitment to the values. You will live a\n\t\t\t\t<strong>distraction free minimalist lifestyle</strong> with all your\n\t\t\t\t<strong>basic needs covered</strong>, and focus\n\t\t\t\t<strong>solely</strong> on becoming the\n\t\t\t\t<strong>best computer programmer you can be!</strong>\n\t\t\t  </li>\n\t\t\t  <li>\n\t\t\t\tWork with our affiliate\n\t\t\t\t<strong>Onflo to earn money after as little as 3 months!</strong>\n\t\t\t  </li>\n\t\t\t  <li class=\"plan-action\">\n\t\t\t\t<a class=\"btn btn-default btn-lg\" routerLink=\"students/application\">Apply Now</a>\n\t\t\t  </li>\n\t\t\t</ul>\n\t\t  </div>\n\t\t  <!-- /.column -->\n    </div>\n    <!-- /.row -->\n  </div>\n  <!-- /.container -->\n</section>\n<!-- /.section -->\n<!-- End Section 2 -->\n"

/***/ }),

/***/ "./src/app/components/student-program-options/student-program-options.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/student-program-options/student-program-options.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: StudentProgramOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentProgramOptionsComponent", function() { return StudentProgramOptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentProgramOptionsComponent = /** @class */ (function () {
    function StudentProgramOptionsComponent() {
    }
    StudentProgramOptionsComponent.prototype.ngOnInit = function () {
    };
    StudentProgramOptionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student-program-options',
            template: __webpack_require__(/*! ./student-program-options.component.html */ "./src/app/components/student-program-options/student-program-options.component.html"),
            styles: [__webpack_require__(/*! ./student-program-options.component.css */ "./src/app/components/student-program-options/student-program-options.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StudentProgramOptionsComponent);
    return StudentProgramOptionsComponent;
}());



/***/ }),

/***/ "./src/app/components/student-services/student-services.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/student-services/student-services.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/student-services/student-services.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/student-services/student-services.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"services\" class=\"background2 section-padding\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12 section-title text-center\">\n\t\t\t\t\t<h2>Services</h2>\n\t\t\t\t\t<span class=\"section-divider\"></span>\n\t\t\t\t</div><!-- /.column -->\n\t\t\t</div><!-- /.row -->\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<!-- Item 1 -->\n\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-4\">\n\t\t\t\t\t<div class=\"services-box leftReveal\">\n\t\t\t\t\t\t<span class=\"pe-7s-airplay services-icon\"></span>\n\t\t\t\t\t\t<h3 class=\"service-name\">1. Web Design</h3>\n\t\t\t\t\t\t<p class=\"text-small\">Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.</p>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default mt10\" data-toggle=\"modal\" data-target=\"#item1-services\">Info</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div><!-- /.column -->\t\n\t\t\t    <!-- Item 1 Modal -->\n\t\t\t\t<div class=\"modal fade\" id=\"item1-services\" tabindex=\"-1\" role=\"dialog\">\n\t\t\t\t    <div class=\"modal-dialog\">\n\t\t\t\t        <div class=\"modal-content\">\n\t\t\t\t            <div class=\"modal-header\">\n\t\t\t\t                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span class=\"ion-ios-close-empty\"></span>\n\t\t\t\t                </button>\n\t\t\t\t                <span class=\"pe-7s-airplay services-icon-2\"></span>\n\t\t\t\t                <h4 class=\"service-title\">Web Design</h4>\n\t\t\t\t            </div>\n\t\t\t\t            <div class=\"modal-body\">\n\t\t\t\t                <p>No, thank ye, Bunger, said the English Captain, \"he's welcome to the arm he has, since I can't help it, and didn't know him then; but not to another one. No more White Whales for me; I've lowered for him once.</p>\n\t\t\t\t                <h5 class=\"heading-1 modal-heading mb20\">Why us</h5>\n\t\t\t\t                <p>\"Well, then,\" interrupted Bunger, \"give him your left arm for bait to get the right. Do you know, gentlemen\"—very gravely and mathematically bowing to each Captain in succession—\"Do you know, gentlemen, that the digestive organs of the whale are so inscrutably constructed by Divine Providence, that it is quite impossible for him to completely digest even a man's arm? And he knows it too.</p>\n\t\t\t\t                <h5 class=\"heading-1 modal-heading mb20\">Focusing</h5>\n\t\t\t\t                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed.</p>\n\t\t\t\t                <h5 class=\"heading-1 modal-heading mb20\">Professionals</h5>\n\t\t\t\t                <p class=\"no-margin-bottom\">\"Good God!\" cried the English Captain, to whom the question was put. \"What's the matter? He was heading east, I think.—Is your Captain crazy?\" whispering Fedallah. Phasellus pulvinar lacinia elit nec tristique.</p>\n\t\t\t\t            </div>\n\t\t\t\t        </div><!-- /.modal-content -->\n\t\t\t\t    </div><!-- /.modal-dialog -->\n\t\t\t\t</div><!-- /.modal -->\n\n\t\t\t\t<!-- Item 2 -->\n\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-4 mt30-xs\">\n\t\t\t\t\t<div class=\"services-box topReveal\">\n\t\t\t\t\t\t<span class=\"services-badge badge\">New</span>\n\t\t\t\t\t\t<span class=\"pe-7s-phone services-icon\"></span>\n\t\t\t\t\t\t<h3 class=\"service-name\">2. Applications</h3>\n\t\t\t\t\t\t<p class=\"text-small\">Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.</p>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default mt10\" data-toggle=\"modal\" data-target=\"#item2-services\">Info</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div><!-- /.column -->\t\n\t\t\t    <!-- Item 2 Modal -->\n\t\t\t\t<div class=\"modal fade\" id=\"item2-services\" tabindex=\"-1\" role=\"dialog\">\n\t\t\t\t    <div class=\"modal-dialog\">\n\t\t\t\t        <div class=\"modal-content\">\n\t\t\t\t            <div class=\"modal-header\">\n\t\t\t\t                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span class=\"ion-ios-close-empty\"></span>\n\t\t\t\t                </button>\n\t\t\t\t                <span class=\"pe-7s-phone services-icon-2\"></span>\n\t\t\t\t                <h4 class=\"service-title\">Applications</h4>\n\t\t\t\t            </div>\n\t\t\t\t            <div class=\"modal-body\">\n\t\t\t\t                <p>No, thank ye, Bunger, said the English Captain, \"he's welcome to the arm he has, since I can't help it, and didn't know him then; but not to another one. No more White Whales for me; I've lowered for him once.</p>\n\t\t\t\t                <h5 class=\"heading-1 modal-heading mb20\">Why us</h5>\n\t\t\t\t                <p>\"Well, then,\" interrupted Bunger, \"give him your left arm for bait to get the right. Do you know, gentlemen\"—very gravely and mathematically bowing to each Captain in succession—\"Do you know, gentlemen, that the digestive organs of the whale are so inscrutably constructed by Divine Providence, that it is quite impossible for him to completely digest even a man's arm? And he knows it too.</p>\n\t\t\t\t                <h5 class=\"heading-1 modal-heading mb20\">Focusing</h5>\n\t\t\t\t                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed.</p>\n\t\t\t\t                <h5 class=\"heading-1 modal-heading mb20\">Professionals</h5>\n\t\t\t\t                <p class=\"no-margin-bottom\">\"Good God!\" cried the English Captain, to whom the question was put. \"What's the matter? He was heading east, I think.—Is your Captain crazy?\" whispering Fedallah. Phasellus pulvinar lacinia elit nec tristique.</p>\n\t\t\t\t            </div>\n\t\t\t\t        </div><!-- /.modal-content -->\n\t\t\t\t    </div><!-- /.modal-dialog -->\n\t\t\t\t</div><!-- /.modal -->\n\n\t\t\t\t<!-- Item 3 -->\n\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-4 mt30-sm mt30-xs\">\n\t\t\t\t\t<div class=\"services-box rightReveal\">\n\t\t\t\t\t\t<span class=\"pe-7s-camera services-icon\"></span>\n\t\t\t\t\t\t<h3 class=\"service-name\">3. Photography</h3>\n\t\t\t\t\t\t<p class=\"text-small\">Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.</p>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default mt10\" data-toggle=\"modal\" data-target=\"#item3-services\">Info</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div><!-- /.column -->\t\n\t\t\t    <!-- Item 3 Modal -->\n\t\t\t\t<div class=\"modal fade\" id=\"item3-services\" tabindex=\"-1\" role=\"dialog\">\n\t\t\t\t    <div class=\"modal-dialog\">\n\t\t\t\t        <div class=\"modal-content\">\n\t\t\t\t            <div class=\"modal-header\">\n\t\t\t\t                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span class=\"ion-ios-close-empty\"></span>\n\t\t\t\t                </button>\n\t\t\t\t                <span class=\"pe-7s-camera services-icon-2\"></span>\n\t\t\t\t                <h4 class=\"service-title\">Photography</h4>\n\t\t\t\t            </div>\n\t\t\t\t            <div class=\"modal-body\">\n\t\t\t\t                <p>No, thank ye, Bunger, said the English Captain, \"he's welcome to the arm he has, since I can't help it, and didn't know him then; but not to another one. No more White Whales for me; I've lowered for him once.</p>\n\t\t\t\t                <h5 class=\"heading-1 modal-heading mb20\">Why us</h5>\n\t\t\t\t                <p>\"Well, then,\" interrupted Bunger, \"give him your left arm for bait to get the right. Do you know, gentlemen\"—very gravely and mathematically bowing to each Captain in succession—\"Do you know, gentlemen, that the digestive organs of the whale are so inscrutably constructed by Divine Providence, that it is quite impossible for him to completely digest even a man's arm? And he knows it too.</p>\n\t\t\t\t                <h5 class=\"heading-1 modal-heading mb20\">Focusing</h5>\n\t\t\t\t                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed.</p>\n\t\t\t\t                <h5 class=\"heading-1 modal-heading mb20\">Professionals</h5>\n\t\t\t\t                <p class=\"no-margin-bottom\">\"Good God!\" cried the English Captain, to whom the question was put. \"What's the matter? He was heading east, I think.—Is your Captain crazy?\" whispering Fedallah. Phasellus pulvinar lacinia elit nec tristique.</p>\n\t\t\t\t            </div>\n\t\t\t\t        </div><!-- /.modal-content -->\n\t\t\t\t    </div><!-- /.modal-dialog -->\n\t\t\t\t</div><!-- /.modal -->\n\n\t\t\t\t<!-- Item 4 -->\n\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-4 mt30\">\n\t\t\t\t\t<div class=\"services-box leftReveal\">\n\t\t\t\t\t\t<span class=\"services-badge badge\">New</span>\n\t\t\t\t\t\t<span class=\"pe-7s-anchor services-icon\"></span>\n\t\t\t\t\t\t<h3 class=\"service-name\">4. Iconography</h3>\n\t\t\t\t\t\t<p class=\"text-small\">Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.</p>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default mt10\" data-toggle=\"modal\" data-target=\"#item4-services\">Info</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div><!-- /.column -->\t\n\t\t\t    <!-- Item 4 Modal -->\n\t\t\t\t<div class=\"modal fade\" id=\"item4-services\" tabindex=\"-1\" role=\"dialog\">\n\t\t\t\t    <div class=\"modal-dialog\">\n\t\t\t\t        <div class=\"modal-content\">\n\t\t\t\t            <div class=\"modal-header\">\n\t\t\t\t                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span class=\"ion-ios-close-empty\"></span>\n\t\t\t\t                </button>\n\t\t\t\t                <span class=\"pe-7s-anchor services-icon-2\"></span>\n\t\t\t\t                <h4 class=\"service-title\">Iconography</h4>\n\t\t\t\t            </div>\n\t\t\t\t            <div class=\"modal-body\">\n\t\t\t\t                <p>No, thank ye, Bunger, said the English Captain, \"he's welcome to the arm he has, since I can't help it, and didn't know him then; but not to another one. No more White Whales for me; I've lowered for him once.</p>\n\t\t\t\t                <h5 class=\"heading-1 modal-heading mb20\">Why us</h5>\n\t\t\t\t                <p>\"Well, then,\" interrupted Bunger, \"give him your left arm for bait to get the right. Do you know, gentlemen\"—very gravely and mathematically bowing to each Captain in succession—\"Do you know, gentlemen, that the digestive organs of the whale are so inscrutably constructed by Divine Providence, that it is quite impossible for him to completely digest even a man's arm? And he knows it too.</p>\n\t\t\t\t                <h5 class=\"heading-1 modal-heading mb20\">Focusing</h5>\n\t\t\t\t                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed.</p>\n\t\t\t\t                <h5 class=\"heading-1 modal-heading mb20\">Professionals</h5>\n\t\t\t\t                <p class=\"no-margin-bottom\">\"Good God!\" cried the English Captain, to whom the question was put. \"What's the matter? He was heading east, I think.—Is your Captain crazy?\" whispering Fedallah. Phasellus pulvinar lacinia elit nec tristique.</p>\n\t\t\t\t            </div>\n\t\t\t\t        </div><!-- /.modal-content -->\n\t\t\t\t    </div><!-- /.modal-dialog -->\n\t\t\t\t</div><!-- /.modal -->\n\n\t\t\t\t<!-- Item 5 -->\n\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-4 mt30\">\n\t\t\t\t\t<div class=\"services-box bottomReveal\">\n\t\t\t\t\t\t<span class=\"pe-7s-users services-icon\"></span>\n\t\t\t\t\t\t<h3 class=\"service-name\">5. Support</h3>\n\t\t\t\t\t\t<p class=\"text-small\">Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.</p>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default mt10\" data-toggle=\"modal\" data-target=\"#item5-services\">Info</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div><!-- /.column -->\t\n\t\t\t    <!-- Item 5 Modal -->\n\t\t\t\t<div class=\"modal fade\" id=\"item5-services\" tabindex=\"-1\" role=\"dialog\">\n\t\t\t\t    <div class=\"modal-dialog\">\n\t\t\t\t        <div class=\"modal-content\">\n\t\t\t\t            <div class=\"modal-header\">\n\t\t\t\t                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span class=\"ion-ios-close-empty\"></span>\n\t\t\t\t                </button>\n\t\t\t\t                <span class=\"pe-7s-users services-icon-2\"></span>\n\t\t\t\t                <h4 class=\"service-title\">Support</h4>\n\t\t\t\t            </div>\n\t\t\t\t            <div class=\"modal-body\">\n\t\t\t\t                <p>No, thank ye, Bunger, said the English Captain, \"he's welcome to the arm he has, since I can't help it, and didn't know him then; but not to another one. No more White Whales for me; I've lowered for him once.</p>\n\t\t\t\t                <h5 class=\"heading-1 modal-heading mb20\">Why us</h5>\n\t\t\t\t                <p>\"Well, then,\" interrupted Bunger, \"give him your left arm for bait to get the right. Do you know, gentlemen\"—very gravely and mathematically bowing to each Captain in succession—\"Do you know, gentlemen, that the digestive organs of the whale are so inscrutably constructed by Divine Providence, that it is quite impossible for him to completely digest even a man's arm? And he knows it too.</p>\n\t\t\t\t                <h5 class=\"heading-1 modal-heading mb20\">Focusing</h5>\n\t\t\t\t                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed.</p>\n\t\t\t\t                <h5 class=\"heading-1 modal-heading mb20\">Professionals</h5>\n\t\t\t\t                <p class=\"no-margin-bottom\">\"Good God!\" cried the English Captain, to whom the question was put. \"What's the matter? He was heading east, I think.—Is your Captain crazy?\" whispering Fedallah. Phasellus pulvinar lacinia elit nec tristique.</p>\n\t\t\t\t            </div>\n\t\t\t\t        </div><!-- /.modal-content -->\n\t\t\t\t    </div><!-- /.modal-dialog -->\n\t\t\t\t</div><!-- /.modal -->\n\n\t\t\t\t<!-- Item 6 -->\n\t\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-4 mt30\">\n\t\t\t\t\t<div class=\"services-box rightReveal\">\n\t\t\t\t\t\t<span class=\"services-badge badge\">New</span>\n\t\t\t\t\t\t<span class=\"pe-7s-volume services-icon\"></span>\n\t\t\t\t\t\t<h3 class=\"service-name\">6. Audio</h3>\n\t\t\t\t\t\t<p class=\"text-small\">Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.</p>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default mt10\" data-toggle=\"modal\" data-target=\"#item6-services\">Info</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div><!-- /.column -->\t\n\t\t\t    <!-- Item 6 Modal -->\n\t\t\t\t<div class=\"modal fade\" id=\"item6-services\" tabindex=\"-1\" role=\"dialog\">\n\t\t\t\t    <div class=\"modal-dialog\">\n\t\t\t\t        <div class=\"modal-content\">\n\t\t\t\t            <div class=\"modal-header\">\n\t\t\t\t                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span class=\"ion-ios-close-empty\"></span>\n\t\t\t\t                </button>\n\t\t\t\t                <span class=\"pe-7s-volume services-icon-2\"></span>\n\t\t\t\t                <h4 class=\"service-title\">Audio</h4>\n\t\t\t\t            </div>\n\t\t\t\t            <div class=\"modal-body\">\n\t\t\t\t                <p>No, thank ye, Bunger, said the English Captain, \"he's welcome to the arm he has, since I can't help it, and didn't know him then; but not to another one. No more White Whales for me; I've lowered for him once.</p>\n\t\t\t\t                <h5 class=\"heading-1 modal-heading mb20\">Why us</h5>\n\t\t\t\t                <p>\"Well, then,\" interrupted Bunger, \"give him your left arm for bait to get the right. Do you know, gentlemen\"—very gravely and mathematically bowing to each Captain in succession—\"Do you know, gentlemen, that the digestive organs of the whale are so inscrutably constructed by Divine Providence, that it is quite impossible for him to completely digest even a man's arm? And he knows it too.</p>\n\t\t\t\t                <h5 class=\"heading-1 modal-heading mb20\">Focusing</h5>\n\t\t\t\t                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed.</p>\n\t\t\t\t                <h5 class=\"heading-1 modal-heading mb20\">Professionals</h5>\n\t\t\t\t                <p class=\"no-margin-bottom\">\"Good God!\" cried the English Captain, to whom the question was put. \"What's the matter? He was heading east, I think.—Is your Captain crazy?\" whispering Fedallah. Phasellus pulvinar lacinia elit nec tristique.</p>\n\t\t\t\t            </div>\n\t\t\t\t        </div><!-- /.modal-content -->\n\t\t\t\t    </div><!-- /.modal-dialog -->\n\t\t\t\t</div><!-- /.modal -->\n\t\t\t</div><!-- /.row -->\n\t\t</div><!-- /.container -->\n\t</section><!-- /.section -->"

/***/ }),

/***/ "./src/app/components/student-services/student-services.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/student-services/student-services.component.ts ***!
  \***************************************************************************/
/*! exports provided: StudentServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentServicesComponent", function() { return StudentServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentServicesComponent = /** @class */ (function () {
    function StudentServicesComponent() {
    }
    StudentServicesComponent.prototype.ngOnInit = function () {
    };
    StudentServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student-services',
            template: __webpack_require__(/*! ./student-services.component.html */ "./src/app/components/student-services/student-services.component.html"),
            styles: [__webpack_require__(/*! ./student-services.component.css */ "./src/app/components/student-services/student-services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StudentServicesComponent);
    return StudentServicesComponent;
}());



/***/ }),

/***/ "./src/app/components/team/team.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/team/team.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/team/team.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/team/team.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"team\" class=\"background2 section-padding\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 section-title text-center\">\n        <h2>Team</h2>\n        <span class=\"section-divider\"></span>\n      </div>\n      <!-- /.column -->\n    </div>\n    <!-- /.row -->\n    <div class=\"row mb40\">\n\n      <!-- Item 1 -->\n      <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3 topReveal\">\n        <div class=\"team-member-box\">\n          <h3>Nathan Writtenhouse</h3>\n          <p class=\"mb20\">CEO</p>\n          <div class=\"team-image-wrapper\">\n            <span class=\"team-image-hover\">\n              <span class=\"team-hover-content\">\n                <!-- Social -->\n                <span>\n                  <span class=\"ion-android-share-alt social-icon-title\"></span>\n                </span>\n                <a href=\"#\">\n                  <span class=\"ion-social-twitter social-icons-light-hover mr15\"></span>\n                </a>\n                <a href=\"#\">\n                  <span class=\"ion-social-facebook social-icons-light-hover mr15\"></span>\n                </a>\n                <a href=\"#\">\n                  <span class=\"ion-social-googleplus-outline social-icons-light-hover\"></span>\n                </a>\n              </span>\n            </span>\n            <img src=\"assets/images/team-member-1.jpg\" alt=\"1 Member\" class=\"img-responsive img-circle team-member-img\">\n          </div>\n        </div>\n      </div>\n\n      <!-- Item -->\n\n      <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3 mt30-sm mt30-xs topReveal\">\n          <div class=\"team-member-box\">\n            <h3>Nate Swift</h3>\n            <p class=\"mb20\">Developer</p>\n            <div class=\"team-image-wrapper\">\n              <span class=\"team-image-hover\">\n                <span class=\"team-hover-content\">\n                  <!-- Social -->\n                  <span>\n                    <span class=\"ion-android-share-alt social-icon-title\"></span>\n                  </span>\n                  <a href=\"#\">\n                    <span class=\"ion-social-twitter social-icons-light-hover mr15\"></span>\n                  </a>\n                  <a href=\"#\">\n                    <span class=\"ion-social-facebook social-icons-light-hover mr15\"></span>\n                  </a>\n                  <a href=\"#\">\n                    <span class=\"ion-social-googleplus-outline social-icons-light-hover\"></span>\n                  </a>\n                </span>\n              </span>\n              <img src=\"assets/images/team-member-3.jpg\" alt=\"3 Member\" class=\"img-responsive img-circle team-member-img\">\n            </div>\n          </div>\n        </div>\n\n      <!-- Item  -->\n      <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3 mt30-xs bottomReveal\">\n        <div class=\"team-member-box\">\n          <h3>Jade Allen Cook</h3>\n          <p class=\"mb20\">Developer</p>\n          <div class=\"team-image-wrapper\">\n            <span class=\"team-image-hover\">\n              <span class=\"team-hover-content\">\n                <!-- Social -->\n                <span class=\"ion-android-share-alt social-icon-title\"></span>\n                <a href=\"#\">\n                  <span class=\"ion-social-twitter social-icons-light-hover mr15\"></span>\n                </a>\n                <a href=\"#\">\n                  <span class=\"ion-social-facebook social-icons-light-hover mr15\"></span>\n                </a>\n                <a href=\"#\">\n                  <span class=\"ion-social-googleplus-outline social-icons-light-hover\"></span>\n                </a>\n              </span>\n            </span>\n            <img src=\"assets/images/team-member-2.jpg\" alt=\"2 Member\" class=\"img-responsive img-circle team-member-img\">\n          </div>\n        </div>\n      </div>\n      <!-- /.column -->\n\n      <!-- Item 4 -->\n      <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3 mt30-sm mt30-xs bottomReveal\">\n        <div class=\"team-member-box\">\n          <h3>Melissa</h3>\n          <p class=\"mb20\">Accounting</p>\n          <div class=\"team-image-wrapper\">\n            <span class=\"team-image-hover\">\n              <span class=\"team-hover-content\">\n                <!-- Social -->\n                <span>\n                  <span class=\"ion-android-share-alt social-icon-title\"></span>\n                </span>\n                <a href=\"#\">\n                  <span class=\"ion-social-twitter social-icons-light-hover mr15\"></span>\n                </a>\n                <a href=\"#\">\n                  <span class=\"ion-social-facebook social-icons-light-hover mr15\"></span>\n                </a>\n                <a href=\"#\">\n                  <span class=\"ion-social-googleplus-outline social-icons-light-hover\"></span>\n                </a>\n              </span>\n            </span>\n            <img src=\"assets/images/team-member-4.jpg\" alt=\"4 Member\" class=\"img-responsive img-circle team-member-img\">\n          </div>\n        </div>\n      </div>\n      <!-- /.column -->\n    </div>\n    <!-- /.row -->\n    <div class=\"row\">\n      <div class=\"col-sm-4 leftReveal\">\n        <h5 class=\"heading-1 mb20\">Our Goal</h5>\n        <h3 class=\"no-margin-top mb15\">To create a better and more functional world through the web.</h3>\n        <p class=\"no-margin text-small\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tristiq enim. Integer eu\n          <strong>neque</strong> arcu. Aenean sed odio nibh. Cras imperdiet, arcu eget dictum vestibulum elit.</p>\n      </div>\n      <!-- /.column -->\n      <div class=\"col-sm-8 mt20-xs rightReveal\">\n        <h5 class=\"heading-1 mb20\">Who are we?</h5>\n        <p>Lorem ipsum dolor sit amet, consectetur adipicing elit. tristique enim. Integer eu neque arcu. Aenean sed odio nibh.\n          Cras imperdiet, arcu eget dictum vestibulum. Lorem ipsil dolor sit amet, consectetur adipiscing elit.</p>\n        <p class=\"no-margin\">Integer eu neque arcu. Aenean sed odio nibh. Cras imperdiet, arcu eget dictum vestibulum elit. Lorem ipsum dolor\n          sit amet, consectetur adipicing elit. Etiam nisi orci, fringilla eget nulla vel, aliquam porta ante. Integer bibendum\n          nunc eu ipsum maximus, non ornare elit molestie. </p>\n      </div>\n      <!-- /.column -->\n    </div>\n    <!-- /.row -->\n  </div>\n  <!-- /.container -->\n</section>\n"

/***/ }),

/***/ "./src/app/components/team/team.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/team/team.component.ts ***!
  \***************************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamComponent = /** @class */ (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.ngOnInit = function () {
    };
    TeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/components/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.css */ "./src/app/components/team/team.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamComponent);
    return TeamComponent;
}());



/***/ }),

/***/ "./src/app/components/timeline/timeline.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/timeline/timeline.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/timeline/timeline.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/timeline/timeline.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"timeline\" class=\"background1 section-padding-top\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 section-title text-center\">\n        <h2>Timeline</h2>\n        <span class=\"section-divider\"></span>\n      </div>\n      <!-- /.column -->\n    </div>\n    <!-- /.row -->\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <ul class=\"timeline pb80\">\n\n          <!-- Item 1 -->\n          <li>\n            <div class=\"timeline-image scaleReveal\">\n              <img alt=\"\" class=\"img-circle img-responsive\" src=\"assets/images/timeline-1.jpg\">\n            </div>\n            <div class=\"timeline-panel leftReveal\">\n              <div class=\"timeline-heading\">\n                <h5 class=\"heading-1 mb15\">2015</h5>\n                <h4 class=\"subheading\">We Began Our Venture</h4>\n              </div>\n              <div class=\"timeline-body\">\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis\n                  temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>\n              </div>\n            </div>\n          </li>\n\n          <!-- Item 2 -->\n          <li class=\"timeline-inverted\">\n            <div class=\"timeline-image scaleReveal\">\n              <img alt=\"\" class=\"img-circle img-responsive\" src=\"assets/images/timeline-2.jpg\">\n            </div>\n            <div class=\"timeline-panel rightReveal\">\n              <div class=\"timeline-heading\">\n                <h5 class=\"heading-1 mb15\">April 2016</h5>\n                <h4 class=\"subheading\">A Company is in Mind</h4>\n              </div>\n              <div class=\"timeline-body\">\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis\n                  temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>\n              </div>\n            </div>\n          </li>\n\n          <!-- Item 3 -->\n          <li>\n            <div class=\"timeline-image scaleReveal\">\n              <img alt=\"\" class=\"img-circle img-responsive\" src=\"assets/images/timeline-3.jpg\">\n            </div>\n            <div class=\"timeline-panel leftReveal\">\n              <div class=\"timeline-heading\">\n                <h5 class=\"heading-1 mb15\">May 2016</h5>\n                <h4 class=\"subheading\">We Launch The Hex Group</h4>\n              </div>\n              <div class=\"timeline-body\">\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis\n                  temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>\n              </div>\n            </div>\n          </li>\n\n          <!-- Item 4 -->\n          <li class=\"timeline-inverted\">\n            <div class=\"timeline-image scaleReveal\">\n              <img alt=\"\" class=\"img-circle img-responsive\" src=\"assets/images/timeline-4.jpg\">\n            </div>\n            <div class=\"timeline-panel rightReveal\">\n              <div class=\"timeline-heading\">\n                <h5 class=\"heading-1 mb15\">July 2016</h5>\n                <h4 class=\"subheading\">We Expand to 15 Employees</h4>\n              </div>\n              <div class=\"timeline-body\">\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis\n                  temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n      <!-- /.column -->\n    </div>\n    <!-- /.row -->\n  </div>\n  <!-- /.container -->\n</section>\n"

/***/ }),

/***/ "./src/app/components/timeline/timeline.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/timeline/timeline.component.ts ***!
  \***********************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    TimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/components/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.css */ "./src/app/components/timeline/timeline.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "./src/app/components/video-slider/video-slider.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/video-slider/video-slider.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n    width: 100%;\n    height: 800px;\n    display: inline-block;\n}"

/***/ }),

/***/ "./src/app/components/video-slider/video-slider.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/video-slider/video-slider.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n  </ol>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img class=\"d-block w-100\" src=\"assets/images/office_cover.jpg\" alt=\"First slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"assets/images/office_cover.jpg\" alt=\"Second slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"assets/images/office_cover.jpg\" alt=\"Third slide\">\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>"

/***/ }),

/***/ "./src/app/components/video-slider/video-slider.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/video-slider/video-slider.component.ts ***!
  \*******************************************************************/
/*! exports provided: VideoSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoSliderComponent", function() { return VideoSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoSliderComponent = /** @class */ (function () {
    function VideoSliderComponent() {
    }
    VideoSliderComponent.prototype.ngOnInit = function () {
    };
    VideoSliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video-slider',
            template: __webpack_require__(/*! ./video-slider.component.html */ "./src/app/components/video-slider/video-slider.component.html"),
            styles: [__webpack_require__(/*! ./video-slider.component.css */ "./src/app/components/video-slider/video-slider.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VideoSliderComponent);
    return VideoSliderComponent;
}());



/***/ }),

/***/ "./src/app/pages/about-us/about-us.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/about-us/about-us.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/about-us/about-us.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/about-us/about-us.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-about></app-about>\n<app-team></app-team>\n"

/***/ }),

/***/ "./src/app/pages/about-us/about-us.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/about-us/about-us.component.ts ***!
  \******************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/pages/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/pages/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/pages/application/application.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/application/application.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "iframe {\n    width: 100%;\n    height: 900px;\n}"

/***/ }),

/***/ "./src/app/pages/application/application.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/application/application.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLSexPkPA9ELnvHIanZOnEWLfqGYC6V6KXQy8f09wtn0W8jUYrg/viewform?embedded=true\" width=\"700\" height=\"520\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading...</iframe>"

/***/ }),

/***/ "./src/app/pages/application/application.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/application/application.component.ts ***!
  \************************************************************/
/*! exports provided: ApplicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationComponent", function() { return ApplicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApplicationComponent = /** @class */ (function () {
    function ApplicationComponent() {
    }
    ApplicationComponent.prototype.ngOnInit = function () {
    };
    ApplicationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-application',
            template: __webpack_require__(/*! ./application.component.html */ "./src/app/pages/application/application.component.html"),
            styles: [__webpack_require__(/*! ./application.component.css */ "./src/app/pages/application/application.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ApplicationComponent);
    return ApplicationComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-contact></app-contact>"

/***/ }),

/***/ "./src/app/pages/contact-us/contact-us.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/contact-us/contact-us.component.ts ***!
  \**********************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/pages/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/pages/contact-us/contact-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-preloader></app-preloader>\n<app-navbar></app-navbar>\n<app-home-banner></app-home-banner>\n<app-intro-parallax></app-intro-parallax>\n<app-our-process></app-our-process>\n<app-parallax2></app-parallax2>\n<app-services></app-services>\n<app-projects></app-projects>\n<app-contact></app-contact>"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/students/students.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/students/students.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/students/students.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/students/students.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-video-slider></app-video-slider>\n<app-student-overview></app-student-overview>\n<app-student-program-options></app-student-program-options>\n\n"

/***/ }),

/***/ "./src/app/pages/students/students.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/students/students.component.ts ***!
  \******************************************************/
/*! exports provided: StudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsComponent", function() { return StudentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentsComponent = /** @class */ (function () {
    function StudentsComponent() {
    }
    StudentsComponent.prototype.ngOnInit = function () {
    };
    StudentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-students',
            template: __webpack_require__(/*! ./students.component.html */ "./src/app/pages/students/students.component.html"),
            styles: [__webpack_require__(/*! ./students.component.css */ "./src/app/pages/students/students.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StudentsComponent);
    return StudentsComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    name: 'futureCorps',
    number: 9016099989,
    email: {
        domain: 'thefuturecorps.com',
        business: 'contact',
        support: 'support',
        admin: 'admin',
        recruit: 'join'
    },
    links: {
        gofundme: 'https://www.gofundme.com/support-futurecorps',
        facebook: 'https://www.facebook.com/TheFCorps',
        twitter: 'https://www.twitter.com/TheFCorps',
        youtube: 'https://www.youtube.com/channel/UCy_UsC-J31J4W3XfznDVBrQ'
    },
    tech: [
        {
            icon: 'airplay',
            title: 'Web Design',
            description: 'Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.',
            modal: {
                description: '',
                about: ''
            }
        }, {
            icon: 'airplay',
            title: 'Web Design',
            description: 'Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.',
            modal: {
                description: '',
                about: ''
            }
        }, {
            icon: 'airplay',
            title: 'Web Design',
            description: 'Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.',
            modal: {
                description: '',
                about: ''
            }
        }, {
            icon: 'airplay',
            title: 'Web Design',
            description: 'Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.',
            modal: {
                description: '',
                about: ''
            }
        }, {
            icon: 'airplay',
            title: 'Web Design',
            description: 'Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.',
            modal: {
                description: '',
                about: ''
            }
        }, {
            icon: 'airplay',
            title: 'Web Design',
            description: 'Lorem ipsum dolor sit amet, consectet adipiscing elit. Cras est urna, imperd eget sem at, pellentes que cursus elit.',
            modal: {
                description: '',
                about: ''
            }
        }
    ]
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nateswift/www/Future-Corps/dev/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
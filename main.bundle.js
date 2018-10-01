webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/+heroes/heroes.module": [
		"./src/app/+heroes/heroes.module.ts",
		"heroes.module"
	],
	"app/+powers/powers.module": [
		"./src/app/+powers/powers.module.ts",
		"powers.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_index_index_component__ = __webpack_require__("./src/app/containers/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_containers_not_found_not_found_component__ = __webpack_require__("./src/app/shared/containers/not-found/not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full"
    },
    {
        path: "dashboard",
        component: __WEBPACK_IMPORTED_MODULE_2__containers_index_index_component__["a" /* IndexComponent */]
    },
    {
        path: "heroes",
        loadChildren: "app/+heroes/heroes.module#HeroesModule"
    },
    {
        path: "powers",
        loadChildren: "app/+powers/powers.module#PowersModule"
    },
    {
        path: "**",
        component: __WEBPACK_IMPORTED_MODULE_3__shared_containers_not_found_not_found_component__["a" /* NotFoundComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_core_module__ = __webpack_require__("./src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__state_state_module__ = __webpack_require__("./src/app/state/state.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__containers_index_index_component__ = __webpack_require__("./src/app/containers/index/index.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_9__containers_index_index_component__["a" /* IndexComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__core_core_module__["a" /* CoreModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_8__state_state_module__["a" /* StateModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/containers/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<app-layout>\r\n  <div class=\"wrapper\">\r\n    <mat-card class=\"box\">\r\n      <mat-card-header>\r\n        <mat-icon mat-card-avatar>offline_bolt</mat-icon>\r\n        <mat-card-title>\r\n          <h4>Super Heroes</h4>\r\n        </mat-card-title>\r\n      </mat-card-header>\r\n      <img mat-card-image src=\"https://images.icanvas.com/2d/MRV558.jpg\" alt=\"Heroes\">\r\n      <mat-card-actions>\r\n        <button mat-button routerLink=\"/heroes\">View All Heroes</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n    <mat-card>\r\n      <mat-card-header>\r\n        <mat-icon mat-card-avatar=\"\">grade</mat-icon>\r\n        <mat-card-title>\r\n          <h4>Super Powers</h4>\r\n        </mat-card-title>\r\n      </mat-card-header>\r\n      <img mat-card-image src=\"https://images.icanvas.com/2d/MRV502.jpg\" alt=\"Powers\">\r\n      <mat-card-actions>\r\n        <button mat-button routerLink=\"/powers\">View All Powers</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </div>\r\n</app-layout>"

/***/ }),

/***/ "./src/app/containers/index/index.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .wrapper {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 1fr;\n      grid-template-columns: 1fr 1fr;\n  grid-gap: 15px; }\n  :host .wrapper mat-card mat-card-header .mat-card-title {\n    font-size: 22px;\n    margin: 0;\n    text-transform: uppercase; }\n  :host .wrapper mat-card mat-card-header h4 {\n    margin: 0; }\n  @media screen and (max-width: 599px) {\n    :host .wrapper {\n      -ms-grid-columns: 1fr;\n          grid-template-columns: 1fr; } }\n  @media screen and (min-width: 600px) and (max-width: 959px) {\n    :host .wrapper {\n      -ms-grid-columns: 1fr 1fr;\n          grid-template-columns: 1fr 1fr; } }\n"

/***/ }),

/***/ "./src/app/containers/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexComponent = (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () { };
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-index",
            template: __webpack_require__("./src/app/containers/index/index.component.html"),
            styles: [__webpack_require__("./src/app/containers/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_heroes_service__ = __webpack_require__("./src/app/core/services/heroes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_characters_service__ = __webpack_require__("./src/app/core/services/characters.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__interceptors_marvel_interceptor__ = __webpack_require__("./src/app/core/interceptors/marvel.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_marvel_service__ = __webpack_require__("./src/app/core/services/marvel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_powers_service__ = __webpack_require__("./src/app/core/services/powers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var CoreModule = (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: []
        };
    };
    CoreModule = CoreModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClientModule */]
            ],
            declarations: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__services_characters_service__["a" /* CharactersService */],
                __WEBPACK_IMPORTED_MODULE_3__services_heroes_service__["a" /* HeroesService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_5__interceptors_marvel_interceptor__["a" /* MarvelInterceptor */],
                    multi: true
                },
                __WEBPACK_IMPORTED_MODULE_6__services_marvel_service__["a" /* MarvelService */],
                __WEBPACK_IMPORTED_MODULE_7__services_powers_service__["a" /* PowersService */]
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* SkipSelf */])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
    var CoreModule_1;
}());



/***/ }),

/***/ "./src/app/core/interceptors/marvel.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarvelInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_marvel_service__ = __webpack_require__("./src/app/core/services/marvel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MarvelInterceptor = (function () {
    function MarvelInterceptor(marvelService) {
        this.marvelService = marvelService;
    }
    MarvelInterceptor.prototype.intercept = function (request, next) {
        if (request.url.indexOf(this.marvelService.BASE_URL) === 0) {
            request = request.clone({
                params: request.params.set('apikey', __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].marvel.public)
            });
        }
        return next.handle(request);
    };
    MarvelInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_marvel_service__["a" /* MarvelService */]])
    ], MarvelInterceptor);
    return MarvelInterceptor;
}());



/***/ }),

/***/ "./src/app/core/services/base.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
var BaseService = (function () {
    function BaseService() {
        this.BASE_URL = 'https://a6ngrx.herokuapp.com';
    }
    return BaseService;
}());



/***/ }),

/***/ "./src/app/core/services/characters.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharactersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__marvel_service__ = __webpack_require__("./src/app/core/services/marvel.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CharactersService = (function (_super) {
    __extends(CharactersService, _super);
    function CharactersService(httpClient) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        return _this;
    }
    CharactersService.prototype.getCharacter = function (characterId) {
        return this.httpClient.get(this.BASE_URL + "/characters/" + characterId.toString());
    };
    CharactersService.prototype.getCharacters = function (nameStartsWith) {
        return this.httpClient.get(this.BASE_URL + "/characters", {
            params: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]().set('nameStartsWith', nameStartsWith)
        });
    };
    CharactersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], CharactersService);
    return CharactersService;
}(__WEBPACK_IMPORTED_MODULE_2__marvel_service__["a" /* MarvelService */]));



/***/ }),

/***/ "./src/app/core/services/heroes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_service__ = __webpack_require__("./src/app/core/services/base.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeroesService = (function (_super) {
    __extends(HeroesService, _super);
    function HeroesService(httpClient) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        return _this;
    }
    HeroesService.prototype.createHero = function (hero) {
        return this.httpClient.post(this.BASE_URL + "/heroes", hero);
    };
    HeroesService.prototype.deleteHero = function (hero) {
        return this.httpClient.delete(this.BASE_URL + "/heroes/" + hero.id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["j" /* switchMap */])(function () { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(hero); }));
    };
    HeroesService.prototype.getHero = function (id) {
        return this.httpClient.get(this.BASE_URL + "/heroes/" + id);
    };
    HeroesService.prototype.getHeroes = function () {
        return this.httpClient.get(this.BASE_URL + "/heroes");
    };
    HeroesService.prototype.updateHero = function (hero) {
        return this.httpClient.put(this.BASE_URL + "/heroes/" + hero.id, hero);
    };
    HeroesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], HeroesService);
    return HeroesService;
}(__WEBPACK_IMPORTED_MODULE_4__base_service__["a" /* BaseService */]));



/***/ }),

/***/ "./src/app/core/services/marvel.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarvelService; });
var MarvelService = (function () {
    function MarvelService() {
        this.BASE_URL = 'https://gateway.marvel.com/v1/public';
    }
    return MarvelService;
}());



/***/ }),

/***/ "./src/app/core/services/powers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PowersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_service__ = __webpack_require__("./src/app/core/services/base.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PowersService = (function (_super) {
    __extends(PowersService, _super);
    function PowersService(httpClient) {
        var _this = _super.call(this) || this;
        _this.httpClient = httpClient;
        return _this;
    }
    PowersService.prototype.createPower = function (power) {
        return this.httpClient.post(this.BASE_URL + "/powers", power);
    };
    PowersService.prototype.deletePower = function (power) {
        return this.httpClient.delete(this.BASE_URL + "/powers/" + power.id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["j" /* switchMap */])(function () { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(power); }));
    };
    PowersService.prototype.getPower = function (id) {
        return this.httpClient.get(this.BASE_URL + "/powers/" + id);
    };
    PowersService.prototype.getPowers = function () {
        return this.httpClient.get(this.BASE_URL + "/powers");
    };
    PowersService.prototype.updatePower = function (power) {
        return this.httpClient.put(this.BASE_URL + "/powers/" + power.id, power);
    };
    PowersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], PowersService);
    return PowersService;
}(__WEBPACK_IMPORTED_MODULE_4__base_service__["a" /* BaseService */]));



/***/ }),

/***/ "./src/app/shared/components/dialog-header/dialog-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <ng-content></ng-content>\r\n  <div class=\"fill\"></div>\r\n  <button mat-icon-button (click)=\"close.emit()\"><mat-icon>close</mat-icon></button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/components/dialog-header/dialog-header.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .wrapper {\n  background: #000;\n  color: #fff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: stretch;\n      -ms-flex-pack: stretch;\n          justify-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: -24px -24px 0;\n  padding: 15px 24px; }\n  :host .wrapper .fill {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n  :host .wrapper button {\n    justify-self: flex-end; }\n"

/***/ }),

/***/ "./src/app/shared/components/dialog-header/dialog-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DialogHeaderComponent = (function () {
    function DialogHeaderComponent() {
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    DialogHeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], DialogHeaderComponent.prototype, "close", void 0);
    DialogHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dialog-header',
            template: __webpack_require__("./src/app/shared/components/dialog-header/dialog-header.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/dialog-header/dialog-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DialogHeaderComponent);
    return DialogHeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/layout/layout.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container (backdropClick)=\"sidenav.close()\" fullscreen>\r\n  <mat-drawer #sidenav (keydown.escape)=\"close('escape')\" disableClose>\r\n    <mat-list>\r\n      <mat-list-item><button mat-button routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</button></mat-list-item>\r\n      <mat-list-item><button mat-button routerLink=\"/heroes\" routerLinkActive=\"active\">Heroes</button></mat-list-item>\r\n      <mat-list-item><button mat-button routerLink=\"/powers\" routerLinkActive=\"active\">Powers</button></mat-list-item>\r\n    </mat-list>\r\n  </mat-drawer>\r\n  <mat-drawer-content>\r\n    <mat-toolbar color=\"primary\">\r\n      <mat-icon (click)=\"sidenav.open()\">menu</mat-icon>\r\n      <span>Angular 6 Tour of Heroes + @NGrx/Store</span>\r\n    </mat-toolbar>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center stretch\">\r\n      <div fxFlex.xs=\"90%\" fxFlex.sm=\"80%\" fxFlex.md=\"100%\" fxFlex.lg=\"100%\" fxFlex.xl=\"90%\">\r\n        <ng-content ></ng-content>\r\n      </div>\r\n    </div>\r\n  </mat-drawer-content>\r\n</mat-drawer-container>\r\n"

/***/ }),

/***/ "./src/app/shared/components/layout/layout.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host mat-toolbar {\n  margin-bottom: 15px; }\n:host mat-toolbar mat-icon {\n    cursor: pointer;\n    padding: 0 15px; }\nmat-drawer mat-list mat-list-item button {\n  width: 100px; }\nmat-drawer mat-list mat-list-item button.active {\n    background: #eeeeee; }\n"

/***/ }),

/***/ "./src/app/shared/components/layout/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutComponent = (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('sidenav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatSidenav */])
    ], LayoutComponent.prototype, "sidenav", void 0);
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-layout',
            template: __webpack_require__("./src/app/shared/components/layout/layout.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/containers/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<app-layout>\r\n  <h1>We're not here</h1>\r\n</app-layout>\r\n"

/***/ }),

/***/ "./src/app/shared/containers/not-found/not-found.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/containers/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("./src/app/shared/containers/not-found/not-found.component.html"),
            styles: [__webpack_require__("./src/app/shared/containers/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/dialogs/add-power-dialog/add-power-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<app-dialog-header (close)=\"close()\">\r\n  <h3>Add Super Power</h3>\r\n</app-dialog-header>\r\n<mat-dialog-content>\r\n  <form [formGroup]=\"form\">\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Power\" formControlName=\"name\">\r\n    </mat-form-field>\r\n  </form>\r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button mat-button (click)=\"save()\">Save</button>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./src/app/shared/dialogs/add-power-dialog/add-power-dialog.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/dialogs/add-power-dialog/add-power-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPowerDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__state_powers_actions_powers__ = __webpack_require__("./src/app/state/powers/actions/powers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddPowerDialogComponent = (function () {
    function AddPowerDialogComponent(formBuilder, matDialogRef, store) {
        this.formBuilder = formBuilder;
        this.matDialogRef = matDialogRef;
        this.store = store;
    }
    AddPowerDialogComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required]
        });
    };
    AddPowerDialogComponent.prototype.close = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__state_powers_actions_powers__["f" /* AddPowerDialogClose */]());
    };
    AddPowerDialogComponent.prototype.onEsc = function () {
        this.close();
    };
    AddPowerDialogComponent.prototype.save = function () {
        var power = this.form.value;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__state_powers_actions_powers__["e" /* AddPower */](power));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('keydown.esc'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AddPowerDialogComponent.prototype, "onEsc", null);
    AddPowerDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/shared/dialogs/add-power-dialog/add-power-dialog.component.html"),
            styles: [__webpack_require__("./src/app/shared/dialogs/add-power-dialog/add-power-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */]])
    ], AddPowerDialogComponent);
    return AddPowerDialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_dialog_header_dialog_header_component__ = __webpack_require__("./src/app/shared/components/dialog-header/dialog-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_layout_layout_component__ = __webpack_require__("./src/app/shared/components/layout/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__containers_not_found_not_found_component__ = __webpack_require__("./src/app/shared/containers/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dialogs_add_power_dialog_add_power_dialog_component__ = __webpack_require__("./src/app/shared/dialogs/add-power-dialog/add-power-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var components = [
    __WEBPACK_IMPORTED_MODULE_9__dialogs_add_power_dialog_add_power_dialog_component__["a" /* AddPowerDialogComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components_dialog_header_dialog_header_component__["a" /* DialogHeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_7__components_layout_layout_component__["a" /* LayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_8__containers_not_found_not_found_component__["a" /* NotFoundComponent */]
];
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["e" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* ReactiveFormsModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__dialogs_add_power_dialog_add_power_dialog_component__["a" /* AddPowerDialogComponent */]
            ],
            declarations: components.slice(),
            exports: components.slice()
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/state/app.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppEffects = (function () {
    function AppEffects(actions) {
        this.actions = actions;
    }
    AppEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */]])
    ], AppEffects);
    return AppEffects;
}());



/***/ }),

/***/ "./src/app/state/app.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appReducer; });
/* unused harmony export logger */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appMetaReducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_router_store__ = __webpack_require__("./node_modules/@ngrx/router-store/@ngrx/router-store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngrx_store_freeze__ = __webpack_require__("./node_modules/ngrx-store-freeze/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngrx_store_freeze___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngrx_store_freeze__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_reducers_snackbar__ = __webpack_require__("./src/app/state/shared/reducers/snackbar.ts");




var appReducer = {
    router: __WEBPACK_IMPORTED_MODULE_0__ngrx_router_store__["c" /* routerReducer */],
    snackbar: __WEBPACK_IMPORTED_MODULE_3__shared_reducers_snackbar__["a" /* reducer */]
};
function logger(reducer) {
    return function (state, action) {
        console.log("state", state);
        console.log("action", action);
        return reducer(state, action);
    };
}
var appMetaReducers = !__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production
    ? [logger, __WEBPACK_IMPORTED_MODULE_1_ngrx_store_freeze__["storeFreeze"]]
    : [];


/***/ }),

/***/ "./src/app/state/powers/actions/powers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_POWER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADD_POWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_POWER_DIALOG_CLOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_POWER_DIALOG_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return DELETE_POWER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return DELETE_POWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_POWERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_POWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_POWER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_POWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return SELECT_POWER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return UPDATE_POWER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return UPDATE_POWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return AddPower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return AddPowerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return AddPowerDialogClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return AddPowerDialogOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return DeletePower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return DeletePowerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LoadPowers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LoadPowersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LoadPower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LoadPowerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return SelectPower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return UpdatePower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return UpdatePowerSuccess; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_utils__ = __webpack_require__("./src/app/state/shared/utils.ts");

var ADD_POWER = Object(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["b" /* createActionType */])('ADD_POWER');
var ADD_POWER_SUCCESS = Object(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["b" /* createActionType */])('ADD_POWER_SUCCESS');
var ADD_POWER_DIALOG_CLOSE = Object(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["b" /* createActionType */])('ADD_POWER_DIALOG_CLOSE');
var ADD_POWER_DIALOG_OPEN = Object(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["b" /* createActionType */])('ADD_POWER_DIALOG_OPEN');
var DELETE_POWER = Object(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["b" /* createActionType */])('DELETE_POWER');
var DELETE_POWER_SUCCESS = Object(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["b" /* createActionType */])('DELETE_POWER_SUCCESS');
var LOAD_POWERS = Object(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["b" /* createActionType */])('LOAD_POWERS');
var LOAD_POWERS_SUCCESS = Object(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["b" /* createActionType */])('LOAD_POWERS_SUCCESS');
var LOAD_POWER = Object(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["b" /* createActionType */])('LOAD_POWER');
var LOAD_POWER_SUCCESS = Object(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["b" /* createActionType */])('LOAD_POWER_SUCCESS');
var SELECT_POWER = Object(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["b" /* createActionType */])('SELECT_POWER');
var UPDATE_POWER = Object(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["b" /* createActionType */])('UPDATE_POWER');
var UPDATE_POWER_SUCCESS = Object(__WEBPACK_IMPORTED_MODULE_0__shared_utils__["b" /* createActionType */])('UPDATE_POWER_SUCCESS');
var AddPower = (function () {
    function AddPower(payload) {
        this.payload = payload;
        this.type = ADD_POWER;
    }
    return AddPower;
}());

var AddPowerSuccess = (function () {
    function AddPowerSuccess(payload) {
        this.payload = payload;
        this.type = ADD_POWER_SUCCESS;
    }
    return AddPowerSuccess;
}());

var AddPowerDialogClose = (function () {
    function AddPowerDialogClose() {
        this.type = ADD_POWER_DIALOG_CLOSE;
    }
    return AddPowerDialogClose;
}());

var AddPowerDialogOpen = (function () {
    function AddPowerDialogOpen() {
        this.type = ADD_POWER_DIALOG_OPEN;
    }
    return AddPowerDialogOpen;
}());

var DeletePower = (function () {
    function DeletePower(payload) {
        this.payload = payload;
        this.type = DELETE_POWER;
    }
    return DeletePower;
}());

var DeletePowerSuccess = (function () {
    function DeletePowerSuccess(payload) {
        this.payload = payload;
        this.type = DELETE_POWER_SUCCESS;
    }
    return DeletePowerSuccess;
}());

var LoadPowers = (function () {
    function LoadPowers() {
        this.type = LOAD_POWERS;
    }
    return LoadPowers;
}());

var LoadPowersSuccess = (function () {
    function LoadPowersSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_POWERS_SUCCESS;
    }
    return LoadPowersSuccess;
}());

var LoadPower = (function () {
    function LoadPower(payload) {
        this.payload = payload;
        this.type = LOAD_POWER;
    }
    return LoadPower;
}());

var LoadPowerSuccess = (function () {
    function LoadPowerSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_POWER_SUCCESS;
    }
    return LoadPowerSuccess;
}());

var SelectPower = (function () {
    function SelectPower(payload) {
        this.payload = payload;
        this.type = SELECT_POWER;
    }
    return SelectPower;
}());

var UpdatePower = (function () {
    function UpdatePower(payload) {
        this.payload = payload;
        this.type = UPDATE_POWER;
    }
    return UpdatePower;
}());

var UpdatePowerSuccess = (function () {
    function UpdatePowerSuccess(payload) {
        this.payload = payload;
        this.type = UPDATE_POWER_SUCCESS;
    }
    return UpdatePowerSuccess;
}());



/***/ }),

/***/ "./src/app/state/powers/effects/powers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PowersEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_services_powers_service__ = __webpack_require__("./src/app/core/services/powers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_dialogs_add_power_dialog_add_power_dialog_component__ = __webpack_require__("./src/app/shared/dialogs/add-power-dialog/add-power-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_actions_error__ = __webpack_require__("./src/app/state/shared/actions/error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_actions_snackbar__ = __webpack_require__("./src/app/state/shared/actions/snackbar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__actions_powers__ = __webpack_require__("./src/app/state/powers/actions/powers.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var PowersEffects = (function () {
    function PowersEffects(actions, matDialog, powersService) {
        var _this = this;
        this.actions = actions;
        this.matDialog = matDialog;
        this.powersService = powersService;
        this.addPower = this.actions.ofType(__WEBPACK_IMPORTED_MODULE_10__actions_powers__["a" /* ADD_POWER */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["g" /* map */])(function (action) { return action.payload; }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["j" /* switchMap */])(function (power) { return _this.powersService.createPower(power).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["i" /* retry */])(3)); }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["g" /* map */])(function (power) { return new __WEBPACK_IMPORTED_MODULE_10__actions_powers__["h" /* AddPowerSuccess */](power); }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["a" /* catchError */])(function (e) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_8__shared_actions_error__["b" /* HttpError */](e)); }));
        this.addPowerSuccess = this.actions.ofType(__WEBPACK_IMPORTED_MODULE_10__actions_powers__["d" /* ADD_POWER_SUCCESS */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["h" /* mergeMap */])(function () { return [
            new __WEBPACK_IMPORTED_MODULE_9__shared_actions_snackbar__["d" /* SnackbarOpen */]({
                message: 'Power Created',
                action: 'Success'
            }),
            new __WEBPACK_IMPORTED_MODULE_10__actions_powers__["f" /* AddPowerDialogClose */]()
        ]; }));
        this.addPowerDialogClose = this.actions.ofType(__WEBPACK_IMPORTED_MODULE_10__actions_powers__["b" /* ADD_POWER_DIALOG_CLOSE */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["k" /* tap */])(function () { return _this.matDialog.closeAll(); }));
        this.addPowerDialogOpen = this.actions.ofType(__WEBPACK_IMPORTED_MODULE_10__actions_powers__["c" /* ADD_POWER_DIALOG_OPEN */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["k" /* tap */])(function () { return _this.matDialog.open(__WEBPACK_IMPORTED_MODULE_7__shared_dialogs_add_power_dialog_add_power_dialog_component__["a" /* AddPowerDialogComponent */]); }));
        this.deletePower = this.actions.ofType(__WEBPACK_IMPORTED_MODULE_10__actions_powers__["i" /* DELETE_POWER */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["g" /* map */])(function (action) { return action.payload; }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["j" /* switchMap */])(function (power) { return _this.powersService.deletePower(power).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["i" /* retry */])(3)); }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["g" /* map */])(function (power) { return new __WEBPACK_IMPORTED_MODULE_10__actions_powers__["l" /* DeletePowerSuccess */](power); }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["a" /* catchError */])(function (e) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_8__shared_actions_error__["b" /* HttpError */](e)); }));
        this.loadPowers = this.actions.ofType(__WEBPACK_IMPORTED_MODULE_10__actions_powers__["n" /* LOAD_POWERS */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["j" /* switchMap */])(function () { return _this.powersService.getPowers().pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["i" /* retry */])(3)); }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["g" /* map */])(function (powers) { return new __WEBPACK_IMPORTED_MODULE_10__actions_powers__["t" /* LoadPowersSuccess */](powers); }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["a" /* catchError */])(function (e) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_8__shared_actions_error__["b" /* HttpError */](e)); }));
        this.loadPower = this.actions.ofType(__WEBPACK_IMPORTED_MODULE_10__actions_powers__["m" /* LOAD_POWER */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["g" /* map */])(function (action) { return action.payload; }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["j" /* switchMap */])(function (payload) { return _this.powersService.getPower(payload.id).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["i" /* retry */])(3)); }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["g" /* map */])(function (power) { return new __WEBPACK_IMPORTED_MODULE_10__actions_powers__["r" /* LoadPowerSuccess */](power); }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["a" /* catchError */])(function (e) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_8__shared_actions_error__["b" /* HttpError */](e)); }));
        this.updatePower = this.actions.ofType(__WEBPACK_IMPORTED_MODULE_10__actions_powers__["w" /* UPDATE_POWER */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["g" /* map */])(function (action) { return action.payload; }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["j" /* switchMap */])(function (power) { return _this.powersService.updatePower(power).pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["i" /* retry */])(3)); }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["g" /* map */])(function (power) { return new __WEBPACK_IMPORTED_MODULE_10__actions_powers__["z" /* UpdatePowerSuccess */](power); }), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["a" /* catchError */])(function (e) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_8__shared_actions_error__["b" /* HttpError */](e)); }));
        this.updatePowerSuccess = this.actions.ofType(__WEBPACK_IMPORTED_MODULE_10__actions_powers__["x" /* UPDATE_POWER_SUCCESS */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["g" /* map */])(function () { return new __WEBPACK_IMPORTED_MODULE_9__shared_actions_snackbar__["d" /* SnackbarOpen */]({
            message: 'Power Updated',
            action: 'Success'
        }); }));
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */])
    ], PowersEffects.prototype, "addPower", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */])
    ], PowersEffects.prototype, "addPowerSuccess", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])({
            dispatch: false
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */])
    ], PowersEffects.prototype, "addPowerDialogClose", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])({
            dispatch: false
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */])
    ], PowersEffects.prototype, "addPowerDialogOpen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */])
    ], PowersEffects.prototype, "deletePower", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */])
    ], PowersEffects.prototype, "loadPowers", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */])
    ], PowersEffects.prototype, "loadPower", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */])
    ], PowersEffects.prototype, "updatePower", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */])
    ], PowersEffects.prototype, "updatePowerSuccess", void 0);
    PowersEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_6__core_services_powers_service__["a" /* PowersService */]])
    ], PowersEffects);
    return PowersEffects;
}());



/***/ }),

/***/ "./src/app/state/powers/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return reducers; });
/* unused harmony export getPowersState */
/* unused harmony export getPowersEntityState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAllPowers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPowerEntities; });
/* unused harmony export getPowerIds */
/* unused harmony export getPowersTotal */
/* unused harmony export getSelectedPowerId */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getSelectedPower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isPowerLoading; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__powers__ = __webpack_require__("./src/app/state/powers/reducers/powers.ts");


var reducers = {
    powers: __WEBPACK_IMPORTED_MODULE_1__powers__["d" /* reducer */]
};
var getPowersState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["l" /* createFeatureSelector */])('powers');
var getPowersEntityState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getPowersState, function (state) { return state.powers; });
var getAllPowers = (_a = __WEBPACK_IMPORTED_MODULE_1__powers__["a" /* adapter */].getSelectors(getPowersEntityState), _a.selectAll), getPowerEntities = _a.selectEntities, getPowerIds = _a.selectIds, getPowersTotal = _a.selectTotal;
var getSelectedPowerId = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getPowersEntityState, __WEBPACK_IMPORTED_MODULE_1__powers__["b" /* getSelectedPowerId */]);
var getSelectedPower = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getPowerEntities, getSelectedPowerId, function (entities, selectedPowerId) { return selectedPowerId && entities[selectedPowerId]; });
var isPowerLoading = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["m" /* createSelector */])(getPowersEntityState, __WEBPACK_IMPORTED_MODULE_1__powers__["c" /* isLoading */]);
var _a;


/***/ }),

/***/ "./src/app/state/powers/reducers/powers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return adapter; });
/* harmony export (immutable) */ __webpack_exports__["d"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSelectedPowerId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isLoading; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_entity__ = __webpack_require__("./node_modules/@ngrx/entity/@ngrx/entity.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_powers__ = __webpack_require__("./src/app/state/powers/actions/powers.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var adapter = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_entity__["a" /* createEntityAdapter */])();
var initialState = adapter.getInitialState({
    addDialogShow: false,
    loading: false,
    selectedPowerId: null
});
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_powers__["b" /* ADD_POWER_DIALOG_CLOSE */]:
            return __assign({}, state, { addDialogShow: false });
        case __WEBPACK_IMPORTED_MODULE_1__actions_powers__["c" /* ADD_POWER_DIALOG_OPEN */]:
            return __assign({}, state, { addDialogShow: true });
        case __WEBPACK_IMPORTED_MODULE_1__actions_powers__["d" /* ADD_POWER_SUCCESS */]:
            return adapter.addOne(action.payload, state);
        case __WEBPACK_IMPORTED_MODULE_1__actions_powers__["j" /* DELETE_POWER_SUCCESS */]:
            return adapter.removeOne(action.payload.id, state);
        case __WEBPACK_IMPORTED_MODULE_1__actions_powers__["p" /* LOAD_POWER_SUCCESS */]:
            return adapter.addOne(action.payload, state);
        case __WEBPACK_IMPORTED_MODULE_1__actions_powers__["n" /* LOAD_POWERS */]:
            return __assign({}, state, { loading: true });
        case __WEBPACK_IMPORTED_MODULE_1__actions_powers__["o" /* LOAD_POWERS_SUCCESS */]:
            state = __assign({}, state, { loading: false });
            return adapter.addAll(action.payload, state);
        case __WEBPACK_IMPORTED_MODULE_1__actions_powers__["u" /* SELECT_POWER */]:
            return __assign({}, state, { selectedPowerId: action.payload.id });
        case __WEBPACK_IMPORTED_MODULE_1__actions_powers__["x" /* UPDATE_POWER_SUCCESS */]:
            return adapter.updateOne({
                id: action.payload.id,
                changes: action.payload
            }, state);
        default:
            return state;
    }
}
var getSelectedPowerId = function (state) { return state.selectedPowerId; };
var isLoading = function (state) { return state.loading; };


/***/ }),

/***/ "./src/app/state/shared/actions/error.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HTTP_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HttpError; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./src/app/state/shared/utils.ts");

var HTTP_ERROR = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createActionType */])('HTTP_ERROR');
var HttpError = (function () {
    function HttpError(payload) {
        this.payload = payload;
        this.type = HTTP_ERROR;
    }
    return HttpError;
}());



/***/ }),

/***/ "./src/app/state/shared/actions/snackbar.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SNACKBAR_OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SNACKBAR_CLOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SnackbarOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SnackbarClose; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__("./src/app/state/shared/utils.ts");

var SNACKBAR_OPEN = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createActionType */])('SNACKBAR_OPEN');
var SNACKBAR_CLOSE = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* createActionType */])('SNACKBAR_CLOSE');
var SnackbarOpen = (function () {
    function SnackbarOpen(payload) {
        this.payload = payload;
        this.type = SNACKBAR_OPEN;
    }
    return SnackbarOpen;
}());

var SnackbarClose = (function () {
    function SnackbarClose() {
        this.type = SNACKBAR_CLOSE;
    }
    return SnackbarClose;
}());



/***/ }),

/***/ "./src/app/state/shared/effects/error.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_error__ = __webpack_require__("./src/app/state/shared/actions/error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_snackbar__ = __webpack_require__("./src/app/state/shared/actions/snackbar.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ErrorEffects = (function () {
    function ErrorEffects(actions) {
        this.actions = actions;
        this.showError = this.actions.ofType(__WEBPACK_IMPORTED_MODULE_4__actions_error__["a" /* HTTP_ERROR */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["k" /* tap */])(function (action) { return console.error(action.payload); }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["g" /* map */])(function (action) {
            if (action.payload.status !== undefined && action.payload.status == 0) {
                return "This is embarrassing, we're having an issue.";
            }
            return action.payload.message;
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["g" /* map */])(function (message) { return new __WEBPACK_IMPORTED_MODULE_5__actions_snackbar__["d" /* SnackbarOpen */]({ message: message }); }));
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */])
    ], ErrorEffects.prototype, "showError", void 0);
    ErrorEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */]])
    ], ErrorEffects);
    return ErrorEffects;
}());



/***/ }),

/***/ "./src/app/state/shared/effects/snackbar.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnackbarEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_snackbar__ = __webpack_require__("./src/app/state/shared/actions/snackbar.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SnackbarEffects = (function () {
    function SnackbarEffects(actions, matSnackBar) {
        var _this = this;
        this.actions = actions;
        this.matSnackBar = matSnackBar;
        this.closeSnackbar = this.actions.ofType(__WEBPACK_IMPORTED_MODULE_5__actions_snackbar__["a" /* SNACKBAR_CLOSE */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["k" /* tap */])(function () { return _this.matSnackBar.dismiss(); }));
        this.showSnackbar = this.actions.ofType(__WEBPACK_IMPORTED_MODULE_5__actions_snackbar__["b" /* SNACKBAR_OPEN */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["g" /* map */])(function (action) { return action.payload; }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["k" /* tap */])(function (payload) { return _this.matSnackBar.open(payload.message, payload.action, payload.config); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["c" /* delay */])(2000), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["g" /* map */])(function () { return new __WEBPACK_IMPORTED_MODULE_5__actions_snackbar__["c" /* SnackbarClose */](); }));
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])({
            dispatch: false
        }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */])
    ], SnackbarEffects.prototype, "closeSnackbar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */])
    ], SnackbarEffects.prototype, "showSnackbar", void 0);
    SnackbarEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["a" /* Actions */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSnackBar */]])
    ], SnackbarEffects);
    return SnackbarEffects;
}());



/***/ }),

/***/ "./src/app/state/shared/reducers/snackbar.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_snackbar__ = __webpack_require__("./src/app/state/shared/actions/snackbar.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    show: false
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_snackbar__["a" /* SNACKBAR_CLOSE */]:
            return __assign({}, state, { show: false });
        case __WEBPACK_IMPORTED_MODULE_0__actions_snackbar__["b" /* SNACKBAR_OPEN */]:
            return __assign({}, state, { show: true });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/state/shared/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = createActionType;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomSerializer; });
/**
 * This function coerces a string into a string literal type.
 * Using tagged union types in TypeScript 2.0, this enables
 * powerful type checking of reducers.
 *
 * Since every action label passes through this function it
 * is a good place to ensure the action labels are unique.
 */
var typeCache = {};
function createActionType(label) {
    if (typeCache[label]) {
        throw new Error("Action type \"" + label + "\" is not unique\"");
    }
    typeCache[label] = true;
    return label;
}
var CustomSerializer = (function () {
    function CustomSerializer() {
    }
    CustomSerializer.prototype.serialize = function (routerState) {
        var route = routerState.root;
        while (route.firstChild) {
            route = route.firstChild;
        }
        var url = routerState.url;
        var queryParams = routerState.root.queryParams;
        var params = route.params;
        // Only return an object including the URL, params and query params
        // instead of the entire snapshot
        return { url: url, params: params, queryParams: queryParams };
    };
    return CustomSerializer;
}());



/***/ }),

/***/ "./src/app/state/state.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__("./node_modules/@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_router_store__ = __webpack_require__("./node_modules/@ngrx/router-store/@ngrx/router-store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store_devtools__ = __webpack_require__("./node_modules/@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_effects__ = __webpack_require__("./src/app/state/app.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_reducer__ = __webpack_require__("./src/app/state/app.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__powers_effects_powers__ = __webpack_require__("./src/app/state/powers/effects/powers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__powers_reducers__ = __webpack_require__("./src/app/state/powers/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_effects_error__ = __webpack_require__("./src/app/state/shared/effects/error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_effects_snackbar__ = __webpack_require__("./src/app/state/shared/effects/snackbar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_utils__ = __webpack_require__("./src/app/state/shared/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};















var StateModule = (function () {
    function StateModule(parentModule) {
        if (parentModule) {
            throw new Error('StateModule is already loaded. Import it in the AppModule only');
        }
    }
    StateModule_1 = StateModule;
    StateModule.forRoot = function () {
        return {
            ngModule: StateModule_1,
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__ngrx_router_store__["a" /* RouterStateSerializer */],
                    useClass: __WEBPACK_IMPORTED_MODULE_14__shared_utils__["a" /* CustomSerializer */]
                }
            ]
        };
    };
    StateModule = StateModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["i" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_reducer__["b" /* appReducer */], {
                    metaReducers: __WEBPACK_IMPORTED_MODULE_9__app_reducer__["a" /* appMetaReducers */]
                }),
                __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["i" /* StoreModule */].forFeature('powers', __WEBPACK_IMPORTED_MODULE_11__powers_reducers__["e" /* reducers */]),
                __WEBPACK_IMPORTED_MODULE_3__ngrx_router_store__["b" /* StoreRouterConnectingModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* EffectsModule */].forRoot([
                    __WEBPACK_IMPORTED_MODULE_8__app_effects__["a" /* AppEffects */],
                    __WEBPACK_IMPORTED_MODULE_12__shared_effects_error__["a" /* ErrorEffects */],
                    __WEBPACK_IMPORTED_MODULE_13__shared_effects_snackbar__["a" /* SnackbarEffects */],
                    __WEBPACK_IMPORTED_MODULE_10__powers_effects_powers__["a" /* PowersEffects */],
                ]),
                !__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].production ? __WEBPACK_IMPORTED_MODULE_5__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument() : [],
            ],
            declarations: []
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* SkipSelf */])()),
        __metadata("design:paramtypes", [StateModule])
    ], StateModule);
    return StateModule;
    var StateModule_1;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    marvel: {
        private: 'e151e386f1580879cd73b5aa797d12f28ec001ce',
        public: 'e412b613dc219df8468f501f5524c190'
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
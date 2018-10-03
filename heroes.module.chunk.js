webpackJsonp(["heroes.module"],{

/***/ "./src/app/+heroes/components/edit-hero/edit-hero.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-header>\r\n    <mat-card-title><h3>{{ hero?.character.name }}</h3></mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <h4>Super Hero Powers</h4>\r\n    <mat-chip-list>\r\n      <mat-chip\r\n        *ngFor=\"let power of powers\" [class.selected]=\"selectedPowers.indexOf(power) > -1\"\r\n        (click)=\"togglePower(power)\">\r\n        {{ power.name }}\r\n      </mat-chip>\r\n    </mat-chip-list>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n"

/***/ }),

/***/ "./src/app/+heroes/components/edit-hero/edit-hero.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host mat-chip-list mat-chip {\n  margin: 0 5px 15px; }\n:host mat-chip-list mat-chip:hover {\n    cursor: pointer; }\n:host mat-chip-list mat-chip.selected {\n    background-color: #ff5722; }\n"

/***/ }),

/***/ "./src/app/+heroes/components/edit-hero/edit-hero.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditHeroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditHeroComponent = (function () {
    function EditHeroComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.heroChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.selectedPowers = [];
    }
    EditHeroComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.powers && this.hero) {
            this.selectedPowers = this.powers.slice().filter(function (power) { return _this.hero.powers.indexOf(power.id) > -1; });
        }
    };
    EditHeroComponent.prototype.togglePower = function (power) {
        if (this.selectedPowers.indexOf(power) > -1) {
            this.selectedPowers.splice(this.selectedPowers.indexOf(power), 1);
        }
        else {
            this.selectedPowers.push(power);
        }
        this.heroChange.emit(__assign({}, this.hero, { powers: this.selectedPowers.map(function (power) { return power.id; }) }));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], EditHeroComponent.prototype, "hero", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], EditHeroComponent.prototype, "heroChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], EditHeroComponent.prototype, "powers", void 0);
    EditHeroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-hero',
            template: __webpack_require__("./src/app/+heroes/components/edit-hero/edit-hero.component.html"),
            styles: [__webpack_require__("./src/app/+heroes/components/edit-hero/edit-hero.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], EditHeroComponent);
    return EditHeroComponent;
}());



/***/ }),

/***/ "./src/app/+heroes/components/hero-detail/hero-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"hero\" *ngIf=\"hero\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"actions\">\r\n    <button app-icon-button [routerLink]=\"['/heroes', hero.id, 'edit']\">Edit</button>\r\n  </div>\r\n  <mat-card>\r\n    <mat-card-header>\r\n      <mat-card-title><h3>{{ hero.character.name }}</h3></mat-card-title>\r\n    </mat-card-header>\r\n    <div [ngStyle]=\"{ 'background-image': 'url(' + getLandscapeXlargeImage(hero.character.thumbnail) + ')' }\" mat-card-image></div>\r\n    <mat-card-content>\r\n      <h4>Description</h4>\r\n      <p *ngIf=\"hero.character.description.length > 0\">{{ hero.character.description }}</p>\r\n      <h4>Powers</h4>\r\n      <ul>\r\n        <li *ngFor=\"let power of powers\">{{ power.name | titlecase }}</li>\r\n      </ul>\r\n      <h4>Learn More</h4>\r\n      <ul>\r\n        <li *ngIf=\"getCharacterUrlByType('comiclink').url\"><a [href]=\"getCharacterUrlByType('comiclink').url\">Comics</a></li>\r\n        <li *ngIf=\"getCharacterUrlByType('detail').url\"><a [href]=\"getCharacterUrlByType('detail').url\">Detail</a></li>\r\n        <li *ngIf=\"getCharacterUrlByType('wiki').url\"><a [href]=\"getCharacterUrlByType('wiki').url\">Wiki</a></li>\r\n      </ul>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/+heroes/components/hero-detail/hero-detail.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .actions {\n  margin-bottom: 15px; }\n\n:host mat-card {\n  margin-bottom: 15px; }\n\n:host mat-card [mat-card-image] {\n    min-height: 300px;\n    max-width: 500px;\n    background-size: cover;\n    background-position: center center; }\n\n.hero {\n  max-width: 1350px;\n  margin: 0 auto; }\n\n.hero mat-card {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n\n@media screen and (max-width: 1024px) {\n      .hero mat-card {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-flow: column;\n                flex-flow: column; } }\n\n.hero mat-card .mat-card-header {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      text-transform: uppercase;\n      max-width: 100px; }\n"

/***/ }),

/***/ "./src/app/+heroes/components/hero-detail/hero-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_models_character_url_model__ = __webpack_require__("./src/app/core/models/character-url.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroDetailComponent = (function () {
    function HeroDetailComponent() {
    }
    HeroDetailComponent.prototype.getCharacterUrlByType = function (type) {
        if (this.hero.character.urls) {
            return this.hero.character.urls.find(function (url) { return url.type === type; });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_1__core_models_character_url_model__["a" /* DefaultUrl */]();
        }
    };
    HeroDetailComponent.prototype.getLandscapeXlargeImage = function (image) {
        return image.path + "/landscape_xlarge." + image.extension;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], HeroDetailComponent.prototype, "hero", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], HeroDetailComponent.prototype, "powers", void 0);
    HeroDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hero-detail',
            template: __webpack_require__("./src/app/+heroes/components/hero-detail/hero-detail.component.html"),
            styles: [__webpack_require__("./src/app/+heroes/components/hero-detail/hero-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());



/***/ }),

/***/ "./src/app/+heroes/components/heroes/heroes.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-header>\r\n    <h3>Super Heroes</h3>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <mat-list *ngIf=\"!loading; else spinner\">\r\n      <mat-list-item *ngFor=\"let hero of heroes\">\r\n        <div fxFlex>\r\n          <a [routerLink]=\"['/heroes', hero.id]\">{{ hero.character.name }}</a>\r\n        </div>\r\n        <div class=\"actions\">\r\n          <button mat-icon-button [matMenuTriggerFor]=\"actionsMenu\">\r\n            <mat-icon>more_vert</mat-icon>\r\n          </button>\r\n          <mat-menu #actionsMenu=\"matMenu\">\r\n            <button mat-menu-item [routerLink]=\"['/heroes', hero.id, 'edit']\">Edit</button>\r\n            <button mat-menu-item (click)=\"delete.emit(hero)\">Delete</button>\r\n          </mat-menu>\r\n        </div>\r\n      </mat-list-item>\r\n    </mat-list>\r\n    <ng-template #spinner>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <mat-spinner></mat-spinner>\r\n      </div>\r\n    </ng-template>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/+heroes/components/heroes/heroes.component.scss":
/***/ (function(module, exports) {

module.exports = ":host mat-list mat-list-item .actions mat-icon:hover {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/+heroes/components/heroes/heroes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroesComponent; });
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

var HeroesComponent = (function () {
    function HeroesComponent() {
        this.delete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], HeroesComponent.prototype, "loading", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], HeroesComponent.prototype, "delete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], HeroesComponent.prototype, "heroes", void 0);
    HeroesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-heroes',
            template: __webpack_require__("./src/app/+heroes/components/heroes/heroes.component.html"),
            styles: [__webpack_require__("./src/app/+heroes/components/heroes/heroes.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeroesComponent);
    return HeroesComponent;
}());



/***/ }),

/***/ "./src/app/+heroes/containers/character/character.component.html":
/***/ (function(module, exports) {

module.exports = "<app-layout>\r\n  <app-hero-detail [hero]=\"hero | async\" [powers]=\"powers | async\"></app-hero-detail>\r\n</app-layout>\r\n"

/***/ }),

/***/ "./src/app/+heroes/containers/character/character.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/+heroes/containers/character/character.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_forkJoin__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_characters_service__ = __webpack_require__("./src/app/core/services/characters.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_services_heroes_service__ = __webpack_require__("./src/app/core/services/heroes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_services_powers_service__ = __webpack_require__("./src/app/core/services/powers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CharacterComponent = (function () {
    // TODO: use store instead of services
    function CharacterComponent(activatedRoute, characterService, heroesService, powersService) {
        this.activatedRoute = activatedRoute;
        this.characterService = characterService;
        this.heroesService = heroesService;
        this.powersService = powersService;
    }
    CharacterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hero = this.activatedRoute.paramMap.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["j" /* switchMap */])(function (paramMap) {
            return _this.heroesService.getHero(Number(paramMap.get("id")));
        }));
        this.powers = this.hero.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["h" /* mergeMap */])(function (hero) {
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_forkJoin__["a" /* forkJoin */])(hero.powers.map(function (id) { return _this.powersService.getPower(id); }));
        }));
    };
    CharacterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-character",
            template: __webpack_require__("./src/app/+heroes/containers/character/character.component.html"),
            styles: [__webpack_require__("./src/app/+heroes/containers/character/character.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__core_services_characters_service__["a" /* CharactersService */],
            __WEBPACK_IMPORTED_MODULE_5__core_services_heroes_service__["a" /* HeroesService */],
            __WEBPACK_IMPORTED_MODULE_6__core_services_powers_service__["a" /* PowersService */]])
    ], CharacterComponent);
    return CharacterComponent;
}());



/***/ }),

/***/ "./src/app/+heroes/containers/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<app-layout>\r\n  <app-edit-hero\r\n    [hero]=\"hero | async\"\r\n    [powers]=\"powers | async\"\r\n    (heroChange)=\"heroChange($event)\">\r\n  </app-edit-hero>\r\n</app-layout>\r\n"

/***/ }),

/***/ "./src/app/+heroes/containers/edit/edit.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/+heroes/containers/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_heroes_service__ = __webpack_require__("./src/app/core/services/heroes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_services_powers_service__ = __webpack_require__("./src/app/core/services/powers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditComponent = (function () {
    // TODO: use store instead of services
    function EditComponent(activatedRoute, heroesService, powersService, snackBar) {
        this.activatedRoute = activatedRoute;
        this.heroesService = heroesService;
        this.powersService = powersService;
        this.snackBar = snackBar;
    }
    EditComponent.prototype.ngOnInit = function () {
        // same solution with switchMap() operator
        // this.activatedRoute.paramMap
        //   .subscribe(params => {
        //     this.hero = this.heroesService.getHero(+params.get('id'))
        //   })
        var _this = this;
        this.hero = this.activatedRoute.paramMap
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["j" /* switchMap */])(function (params) { return _this.heroesService.getHero(+params.get('id')); }));
        this.powers = this.powersService.getPowers();
    };
    EditComponent.prototype.heroChange = function (hero) {
        this.hero = this.heroesService.updateHero(hero);
        this.snackBar.open('Hero Updated', 'Success', {
            duration: 2000
        });
    };
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit',
            template: __webpack_require__("./src/app/+heroes/containers/edit/edit.component.html"),
            styles: [__webpack_require__("./src/app/+heroes/containers/edit/edit.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__core_services_heroes_service__["a" /* HeroesService */],
            __WEBPACK_IMPORTED_MODULE_5__core_services_powers_service__["a" /* PowersService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatSnackBar */]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/+heroes/containers/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<app-layout>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"actions\">\r\n    <button app-icon-button (click)=\"add()\">\r\n      <mat-icon>add_circle_outline</mat-icon>\r\n      Add Hero\r\n    </button>\r\n  </div>\r\n  <app-heroes\r\n    [loading]=\"loading | async\"\r\n    [heroes]=\"heroes | async\" \r\n    (delete)=\"delete($event)\">\r\n  </app-heroes>\r\n</app-layout>\r\n"

/***/ }),

/***/ "./src/app/+heroes/containers/index/index.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .actions {\n  margin-bottom: 15px; }\n"

/***/ }),

/***/ "./src/app/+heroes/containers/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state_heroes_actions_heroes__ = __webpack_require__("./src/app/state/heroes/actions/heroes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_heroes_reducers__ = __webpack_require__("./src/app/state/heroes/reducers/index.ts");
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
    function IndexComponent(store) {
        this.store = store;
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.loading = this.store.select(__WEBPACK_IMPORTED_MODULE_3__state_heroes_reducers__["b" /* isHeroLoading */]);
        this.heroes = this.store.select(__WEBPACK_IMPORTED_MODULE_3__state_heroes_reducers__["a" /* getAllHeroes */]);
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__state_heroes_actions_heroes__["r" /* LoadHeroes */]());
    };
    IndexComponent.prototype.add = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__state_heroes_actions_heroes__["g" /* AddHeroDialogOpen */]());
    };
    IndexComponent.prototype.delete = function (hero) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__state_heroes_actions_heroes__["k" /* DeleteHero */](hero));
    };
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-index',
            template: __webpack_require__("./src/app/+heroes/containers/index/index.component.html"),
            styles: [__webpack_require__("./src/app/+heroes/containers/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/+heroes/heroes-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_index_index_component__ = __webpack_require__("./src/app/+heroes/containers/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_character_character_component__ = __webpack_require__("./src/app/+heroes/containers/character/character.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_edit_edit_component__ = __webpack_require__("./src/app/+heroes/containers/edit/edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__containers_index_index_component__["a" /* IndexComponent */]
    },
    {
        path: ':id',
        component: __WEBPACK_IMPORTED_MODULE_3__containers_character_character_component__["a" /* CharacterComponent */],
    },
    {
        path: ':id/edit',
        component: __WEBPACK_IMPORTED_MODULE_4__containers_edit_edit_component__["a" /* EditComponent */]
    }
];
var HeroesRoutingModule = (function () {
    function HeroesRoutingModule() {
    }
    HeroesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
        })
    ], HeroesRoutingModule);
    return HeroesRoutingModule;
}());



/***/ }),

/***/ "./src/app/+heroes/heroes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesModule", function() { return HeroesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_edit_hero_edit_hero_component__ = __webpack_require__("./src/app/+heroes/components/edit-hero/edit-hero.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_hero_detail_hero_detail_component__ = __webpack_require__("./src/app/+heroes/components/hero-detail/hero-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_heroes_heroes_component__ = __webpack_require__("./src/app/+heroes/components/heroes/heroes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__containers_character_character_component__ = __webpack_require__("./src/app/+heroes/containers/character/character.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__containers_edit_edit_component__ = __webpack_require__("./src/app/+heroes/containers/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__containers_index_index_component__ = __webpack_require__("./src/app/+heroes/containers/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__heroes_routing_module__ = __webpack_require__("./src/app/+heroes/heroes-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var HeroesModule = (function () {
    function HeroesModule() {
    }
    HeroesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_12__heroes_routing_module__["a" /* HeroesRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_11__containers_index_index_component__["a" /* IndexComponent */], __WEBPACK_IMPORTED_MODULE_9__containers_character_character_component__["a" /* CharacterComponent */], __WEBPACK_IMPORTED_MODULE_8__components_heroes_heroes_component__["a" /* HeroesComponent */], __WEBPACK_IMPORTED_MODULE_7__components_hero_detail_hero_detail_component__["a" /* HeroDetailComponent */], __WEBPACK_IMPORTED_MODULE_10__containers_edit_edit_component__["a" /* EditComponent */], __WEBPACK_IMPORTED_MODULE_6__components_edit_hero_edit_hero_component__["a" /* EditHeroComponent */]]
        })
    ], HeroesModule);
    return HeroesModule;
}());



/***/ }),

/***/ "./src/app/core/models/character-url.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefaultUrl; });
var DefaultUrl = (function () {
    function DefaultUrl() {
        this.type = 'default';
        this.url = '/';
    }
    return DefaultUrl;
}());



/***/ })

});
//# sourceMappingURL=heroes.module.chunk.js.map
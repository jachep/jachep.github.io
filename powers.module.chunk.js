webpackJsonp(["powers.module"],{

/***/ "./src/app/+powers/components/edit-power/edit-power.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\r\n  <mat-card>\r\n    <mat-card-header>\r\n      <mat-card-title><h3>{{ power?.name }}</h3></mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <mat-form-field>\r\n        <input matInput formControlName=\"name\" placeholder=\"Power Name\">\r\n      </mat-form-field>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/+powers/components/edit-power/edit-power.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/+powers/components/edit-power/edit-power.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPowerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
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



var EditPowerComponent = (function () {
    function EditPowerComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.powerChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.createForm();
    }
    EditPowerComponent.prototype.ngOnChanges = function () {
        if (this.power) {
            this.form.patchValue(this.power, {
                emitEvent: false
            });
        }
    };
    EditPowerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* debounceTime */])(500), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* distinctUntilChanged */])(function (prev, next) { return prev.name === next.name; }))
            .subscribe(function (value) {
            if (!_this.form.valid) {
                return;
            }
            _this.powerChange.emit(__assign({}, _this.power, value));
        });
    };
    EditPowerComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required]
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], EditPowerComponent.prototype, "power", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], EditPowerComponent.prototype, "powerChange", void 0);
    EditPowerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-power',
            template: __webpack_require__("./src/app/+powers/components/edit-power/edit-power.component.html"),
            styles: [__webpack_require__("./src/app/+powers/components/edit-power/edit-power.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], EditPowerComponent);
    return EditPowerComponent;
}());



/***/ }),

/***/ "./src/app/+powers/components/power-detail/power-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"power && heroes\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"actions\">\r\n    <button app-icon-button [routerLink]=\"['/powers', power.id, 'edit']\">Edit</button>\r\n  </div>\r\n  <mat-card>\r\n    <mat-card-header>\r\n      <mat-card-title><h3>{{ power.name }}</h3></mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <div *ngIf=\"heroes.length > 0\">\r\n        <h4>Heroes</h4>\r\n        <ul>\r\n          <li *ngFor=\"let hero of heroes\">\r\n            <a [routerLink]=\"['/heroes', hero.id]\">{{ hero.character.name }}</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <p *ngIf=\"heroes.length === 0\">There are no heroes associated with this power.</p>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/+powers/components/power-detail/power-detail.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .actions {\n  margin-bottom: 15px; }\n"

/***/ }),

/***/ "./src/app/+powers/components/power-detail/power-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PowerDetailComponent; });
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

var PowerDetailComponent = (function () {
    function PowerDetailComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], PowerDetailComponent.prototype, "heroes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], PowerDetailComponent.prototype, "power", void 0);
    PowerDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-power-detail',
            template: __webpack_require__("./src/app/+powers/components/power-detail/power-detail.component.html"),
            styles: [__webpack_require__("./src/app/+powers/components/power-detail/power-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PowerDetailComponent);
    return PowerDetailComponent;
}());



/***/ }),

/***/ "./src/app/+powers/components/powers/powers.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-header>\r\n    <mat-card-title><h2>Super Powers</h2></mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <mat-list *ngIf=\"!loading; else spinner\">\r\n      <mat-list-item *ngFor=\"let power of powers\"  fxLayout=\"row\">\r\n        <div fxFlex class=\"power\">\r\n          <a [routerLink]=\"['/powers', power.id]\">{{ power.name }}</a>\r\n        </div>\r\n        <div class=\"actions\">\r\n          <button mat-icon-button [matMenuTriggerFor]=\"actionsMenu\">\r\n            <mat-icon>more_vert</mat-icon>\r\n          </button>\r\n          <mat-menu #actionsMenu=\"matMenu\">\r\n            <button mat-menu-item [routerLink]=\"['/powers', power.id, 'edit']\">Edit</button>\r\n            <button mat-menu-item (click)=\"delete.emit(power)\" class=\"delete\">Delete</button>\r\n          </mat-menu>\r\n        </div>\r\n      </mat-list-item>\r\n    </mat-list>\r\n    <ng-template #spinner>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <mat-spinner></mat-spinner>\r\n      </div>\r\n    </ng-template>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/+powers/components/powers/powers.component.scss":
/***/ (function(module, exports) {

module.exports = ":host mat-list mat-list-item .actions mat-icon:hover {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/+powers/components/powers/powers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PowersComponent; });
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

var PowersComponent = (function () {
    function PowersComponent() {
        this.delete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], PowersComponent.prototype, "delete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], PowersComponent.prototype, "loading", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], PowersComponent.prototype, "powers", void 0);
    PowersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-powers',
            template: __webpack_require__("./src/app/+powers/components/powers/powers.component.html"),
            styles: [__webpack_require__("./src/app/+powers/components/powers/powers.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PowersComponent);
    return PowersComponent;
}());



/***/ }),

/***/ "./src/app/+powers/containers/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<app-layout>\r\n  <app-edit-power\r\n    [power]=\"power | async\"\r\n    (powerChange)=\"powerChange($event)\">\r\n  </app-edit-power>\r\n</app-layout>\r\n"

/***/ }),

/***/ "./src/app/+powers/containers/edit/edit.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/+powers/containers/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__state_powers_actions_powers__ = __webpack_require__("./src/app/state/powers/actions/powers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__state_powers_reducers__ = __webpack_require__("./src/app/state/powers/reducers/index.ts");
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
    function EditComponent(activatedRoute, snackBar, store) {
        this.activatedRoute = activatedRoute;
        this.snackBar = snackBar;
        this.store = store;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.power = this.activatedRoute.paramMap.pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["k" /* tap */])(function (paramMap) {
            var id = +paramMap.get("id");
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__state_powers_actions_powers__["v" /* SelectPower */]({ id: id }));
            _this.hasPowerInStore(id).subscribe(function (exists) {
                if (!exists) {
                    _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__state_powers_actions_powers__["q" /* LoadPower */]({ id: id }));
                }
            });
        }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["j" /* switchMap */])(function () { return _this.store.select(__WEBPACK_IMPORTED_MODULE_6__state_powers_reducers__["c" /* getSelectedPower */]); }));
    };
    EditComponent.prototype.hasPowerInStore = function (id) {
        return this.store
            .select(__WEBPACK_IMPORTED_MODULE_6__state_powers_reducers__["b" /* getPowerEntities */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["f" /* first */])(function (powers) { return powers !== null; }, function (powers) { return powers[id] !== undefined; }));
    };
    EditComponent.prototype.powerChange = function (power) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__state_powers_actions_powers__["y" /* UpdatePower */](power));
    };
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-edit",
            template: __webpack_require__("./src/app/+powers/containers/edit/edit.component.html"),
            styles: [__webpack_require__("./src/app/+powers/containers/edit/edit.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["h" /* Store */]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/+powers/containers/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<app-layout>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"end center\" class=\"actions\">\r\n    <button app-icon-button (click)=\"add()\">\r\n      <mat-icon>add_circle_outline</mat-icon>\r\n      Add Power\r\n    </button>\r\n  </div>\r\n  <app-powers\r\n    [loading]=\"loading | async\"\r\n    [powers]=\"powers | async\"\r\n    (delete)=\"delete($event)\">\r\n  </app-powers>\r\n</app-layout>\r\n"

/***/ }),

/***/ "./src/app/+powers/containers/index/index.component.scss":
/***/ (function(module, exports) {

module.exports = ":host .actions {\n  margin-bottom: 15px; }\n"

/***/ }),

/***/ "./src/app/+powers/containers/index/index.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state_powers_actions_powers__ = __webpack_require__("./src/app/state/powers/actions/powers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_powers_reducers__ = __webpack_require__("./src/app/state/powers/reducers/index.ts");
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
        this.loading = this.store.select(__WEBPACK_IMPORTED_MODULE_3__state_powers_reducers__["d" /* isPowerLoading */]);
        this.powers = this.store.select(__WEBPACK_IMPORTED_MODULE_3__state_powers_reducers__["a" /* getAllPowers */]);
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__state_powers_actions_powers__["s" /* LoadPowers */]());
    };
    IndexComponent.prototype.add = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__state_powers_actions_powers__["g" /* AddPowerDialogOpen */]());
    };
    IndexComponent.prototype.delete = function (power) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__state_powers_actions_powers__["k" /* DeletePower */](power));
    };
    IndexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-index',
            template: __webpack_require__("./src/app/+powers/containers/index/index.component.html"),
            styles: [__webpack_require__("./src/app/+powers/containers/index/index.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/+powers/containers/power/power.component.html":
/***/ (function(module, exports) {

module.exports = "<app-layout>\r\n  <app-power-detail [heroes]=\"heroes | async\" [power]=\"power | async\"></app-power-detail>\r\n</app-layout>\r\n"

/***/ }),

/***/ "./src/app/+powers/containers/power/power.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/+powers/containers/power/power.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PowerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_powers_service__ = __webpack_require__("./src/app/core/services/powers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_heroes_service__ = __webpack_require__("./src/app/core/services/heroes.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PowerComponent = (function () {
    function PowerComponent(activatedRoute, heroesService, powersService) {
        this.activatedRoute = activatedRoute;
        this.heroesService = heroesService;
        this.powersService = powersService;
    }
    PowerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.power = this.activatedRoute.paramMap.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["j" /* switchMap */])(function (params) { return _this.powersService.getPower(Number(params.get("id"))); }));
        this.heroes = this.power.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["l" /* withLatestFrom */])(this.heroesService.getHeroes()), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["g" /* map */])(function (_a) {
            var power = _a[0], heroes = _a[1];
            return heroes.filter(function (hero) { return hero.powers.indexOf(power.id) > -1; });
        }));
    };
    PowerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-power",
            template: __webpack_require__("./src/app/+powers/containers/power/power.component.html"),
            styles: [__webpack_require__("./src/app/+powers/containers/power/power.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__core_services_heroes_service__["a" /* HeroesService */],
            __WEBPACK_IMPORTED_MODULE_3__core_services_powers_service__["a" /* PowersService */]])
    ], PowerComponent);
    return PowerComponent;
}());



/***/ }),

/***/ "./src/app/+powers/powers-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PowersRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_index_index_component__ = __webpack_require__("./src/app/+powers/containers/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_power_power_component__ = __webpack_require__("./src/app/+powers/containers/power/power.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_edit_edit_component__ = __webpack_require__("./src/app/+powers/containers/edit/edit.component.ts");
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
        component: __WEBPACK_IMPORTED_MODULE_3__containers_power_power_component__["a" /* PowerComponent */],
    },
    {
        path: ':id/edit',
        component: __WEBPACK_IMPORTED_MODULE_4__containers_edit_edit_component__["a" /* EditComponent */]
    }
];
var PowersRoutingModule = (function () {
    function PowersRoutingModule() {
    }
    PowersRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
        })
    ], PowersRoutingModule);
    return PowersRoutingModule;
}());



/***/ }),

/***/ "./src/app/+powers/powers.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowersModule", function() { return PowersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_edit_power_edit_power_component__ = __webpack_require__("./src/app/+powers/components/edit-power/edit-power.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_power_detail_power_detail_component__ = __webpack_require__("./src/app/+powers/components/power-detail/power-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_powers_powers_component__ = __webpack_require__("./src/app/+powers/components/powers/powers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__containers_edit_edit_component__ = __webpack_require__("./src/app/+powers/containers/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__containers_index_index_component__ = __webpack_require__("./src/app/+powers/containers/index/index.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__containers_power_power_component__ = __webpack_require__("./src/app/+powers/containers/power/power.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__powers_routing_module__ = __webpack_require__("./src/app/+powers/powers-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var PowersModule = (function () {
    function PowersModule() {
    }
    PowersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_12__powers_routing_module__["a" /* PowersRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_10__containers_index_index_component__["a" /* IndexComponent */], __WEBPACK_IMPORTED_MODULE_8__components_powers_powers_component__["a" /* PowersComponent */], __WEBPACK_IMPORTED_MODULE_9__containers_edit_edit_component__["a" /* EditComponent */], __WEBPACK_IMPORTED_MODULE_6__components_edit_power_edit_power_component__["a" /* EditPowerComponent */], __WEBPACK_IMPORTED_MODULE_7__components_power_detail_power_detail_component__["a" /* PowerDetailComponent */], __WEBPACK_IMPORTED_MODULE_11__containers_power_power_component__["a" /* PowerComponent */]]
        })
    ], PowersModule);
    return PowersModule;
}());



/***/ })

});
//# sourceMappingURL=powers.module.chunk.js.map